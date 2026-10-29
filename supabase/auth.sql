-- Auth & phân quyền chỉnh sửa. Chạy trong Supabase → SQL Editor SAU schema.sql và events.sql.
-- Giai đoạn xây nội dung: mọi user đã đăng nhập đều được thêm/sửa/xóa event.
-- Cột created_by lưu lại người tạo để sau này siết quyền theo vai trò (editor/admin).

-- 1) Bảng hồ sơ người dùng, liên kết 1-1 với auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  full_name text not null,
  dob date not null,
  gender text,
  phone text,
  address text,
  bio text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "Profiles are viewable by everyone" on public.profiles;
create policy "Profiles are viewable by everyone"
  on public.profiles for select using (true);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- 2) Thêm cột người tạo vào bảng events
alter table public.events
  add column if not exists created_by uuid references auth.users(id);

-- 3) Mở quyền ghi event cho user đã đăng nhập (giai đoạn xây nội dung)
drop policy if exists "Authenticated can insert events" on public.events;
create policy "Authenticated can insert events"
  on public.events for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated can update events" on public.events;
create policy "Authenticated can update events"
  on public.events for update
  to authenticated
  using (true);

drop policy if exists "Authenticated can delete events" on public.events;
create policy "Authenticated can delete events"
  on public.events for delete
  to authenticated
  using (true);

-- 4) Vai trò người dùng (chuẩn bị cho phân quyền duyệt bài sau này)
alter table public.profiles
  add column if not exists role text not null default 'member';
-- Giá trị dự kiến: 'member' | 'editor' | 'moderator' | 'admin'
