// Seed bảng `events` trên Supabase từ dữ liệu trong src/data/events.ts.
//
// Dùng service_role key (bỏ qua RLS) để ghi — key này CHỈ nằm ở .env local,
// không bao giờ đưa vào code frontend hay commit lên Git.
//
// Chạy: npm run seed:events
//   (lệnh đã kèm --env-file=.env để nạp biến môi trường)

import { createClient } from '@supabase/supabase-js'
import { eventsByPeriod } from '../src/data/events.ts'

const url = process.env.VITE_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceKey) {
  console.error(
    'Thiếu VITE_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env',
  )
  process.exit(1)
}

// Chặn nhầm lẫn: service_role key phải có role đúng.
try {
  const payload = JSON.parse(
    Buffer.from(serviceKey.split('.')[1], 'base64').toString(),
  )
  if (payload.role !== 'service_role') {
    console.error(
      `SUPABASE_SERVICE_ROLE_KEY có role="${payload.role}", cần "service_role". ` +
        'Lấy đúng key tại Supabase → Project Settings → API → service_role.',
    )
    process.exit(1)
  }
} catch {
  console.error('SUPABASE_SERVICE_ROLE_KEY không phải JWT hợp lệ.')
  process.exit(1)
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false },
})

// Chuyển dữ liệu tĩnh thành các dòng khớp schema bảng events.
const rows = []
for (const [periodId, events] of Object.entries(eventsByPeriod)) {
  events.forEach((e, index) => {
    rows.push({
      period_id: periodId,
      id: e.id,
      sort_order: index,
      year: e.year,
      year_label: e.yearLabel,
      title: e.title,
      summary: e.summary,
      detail: e.detail,
    })
  })
}

console.log(`Chuẩn bị upsert ${rows.length} sự kiện…`)

const { error } = await supabase
  .from('events')
  .upsert(rows, { onConflict: 'period_id,id' })

if (error) {
  console.error('Lỗi khi upsert:', error.message)
  process.exit(1)
}

// Xác nhận lại tổng số dòng trong bảng.
const { count, error: countError } = await supabase
  .from('events')
  .select('*', { count: 'exact', head: true })

if (countError) {
  console.error('Upsert xong nhưng không đếm lại được:', countError.message)
  process.exit(1)
}

console.log(`✓ Hoàn tất. Bảng events hiện có ${count} dòng.`)
