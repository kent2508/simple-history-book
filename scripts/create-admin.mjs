// Tạo tài khoản admin bằng Supabase Admin API (service_role key, chỉ chạy local).
//
// Chạy: npm run create:admin
//
// Email và mật khẩu lấy từ ADMIN_EMAIL / ADMIN_PASSWORD trong .env (không viết
// cứng trong code để tránh lộ lên Git). Username hiển thị là "admin".

import { createClient } from '@supabase/supabase-js'

const url = process.env.VITE_SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const adminEmail = process.env.ADMIN_EMAIL
const PASSWORD = process.env.ADMIN_PASSWORD

if (!url || !serviceKey) {
  console.error('Thiếu VITE_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY.')
  process.exit(1)
}
if (!adminEmail || !PASSWORD) {
  console.error('Thiếu ADMIN_EMAIL hoặc ADMIN_PASSWORD trong .env.')
  process.exit(1)
}

const USERNAME = 'admin'

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false },
})

// 1) Tạo user đã xác nhận email sẵn
const { data: created, error: createError } =
  await supabase.auth.admin.createUser({
    email: adminEmail,
    password: PASSWORD,
    email_confirm: true,
  })

let userId = created?.user?.id

if (createError) {
  // Nếu user đã tồn tại, tìm lại id để cập nhật profile
  if (/already|exist/i.test(createError.message)) {
    const { data: list } = await supabase.auth.admin.listUsers()
    userId = list?.users.find((u) => u.email === adminEmail)?.id
    if (!userId) {
      console.error('User đã tồn tại nhưng không tìm được id:', adminEmail)
      process.exit(1)
    }
    console.log('User admin đã tồn tại, sẽ cập nhật profile + role.')
  } else {
    console.error('Lỗi tạo user:', createError.message)
    process.exit(1)
  }
} else {
  console.log('Đã tạo user admin:', adminEmail)
}

// 2) Upsert profile với role = admin
const { error: profileError } = await supabase.from('profiles').upsert(
  {
    id: userId,
    username: USERNAME,
    full_name: 'Quản trị viên',
    dob: '1970-01-01',
    role: 'admin',
  },
  { onConflict: 'id' },
)

if (profileError) {
  console.error('Lỗi tạo/cập nhật profile:', profileError.message)
  process.exit(1)
}

console.log(`✓ Hoàn tất. Admin: ${adminEmail} (username: admin, role: admin)`)
