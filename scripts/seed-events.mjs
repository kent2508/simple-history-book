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

// Tùy chọn: chỉ seed một triều đại, tránh ghi đè chỉnh sửa trên web ở triều
// đại khác. Ví dụ: npm run seed:events -- --period=trieu
const periodArg = process.argv
  .find((a) => a.startsWith('--period='))
  ?.slice('--period='.length)

if (periodArg && !eventsByPeriod[periodArg]) {
  console.error(`Không có triều đại "${periodArg}" trong events.ts.`)
  process.exit(1)
}

const selected = periodArg
  ? [[periodArg, eventsByPeriod[periodArg]]]
  : Object.entries(eventsByPeriod)

// Chuyển dữ liệu tĩnh thành các dòng khớp schema bảng events.
const rows = []
for (const [periodId, events] of selected) {
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

console.log(
  `Chuẩn bị upsert ${rows.length} sự kiện từ events.ts` +
  (periodArg ? ` (chỉ triều đại "${periodArg}")…` : '…'),
)

// CHỈ upsert, KHÔNG xóa. Từ khi bật tính năng chỉnh sửa trên web, Supabase là
// nguồn gốc sự thật và có thể chứa sự kiện do người dùng tạo không nằm trong
// events.ts. Xóa "mồ côi" ở đây sẽ xóa nhầm dữ liệu người dùng.
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
