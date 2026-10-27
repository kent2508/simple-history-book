-- Chạy trong Supabase Dashboard → SQL Editor để tạo bảng và dữ liệu mẫu.
-- Cột đặt theo snake_case khớp với interface Period (id, name, years, start_year, era, summary, detail).

create table if not exists public.periods (
  id text primary key,
  name text not null,
  years text not null,
  start_year integer not null,
  era text not null,
  summary text not null,
  detail text not null,
  created_at timestamptz not null default now()
);

-- Bật Row Level Security và cho phép đọc công khai (dữ liệu lịch sử công cộng).
alter table public.periods enable row level security;

drop policy if exists "Public read access" on public.periods;
create policy "Public read access"
  on public.periods
  for select
  using (true);

-- Dữ liệu mẫu (khớp src/data/periods.ts). Chạy lại sẽ cập nhật.
insert into public.periods (id, name, years, start_year, era, summary, detail) values
  ('van-lang', 'Nhà nước Văn Lang', '~2879 – 258 TCN', -2879, 'ancient', 'Nhà nước đầu tiên của người Việt do các vua Hùng đứng đầu.', 'Văn Lang là nhà nước đầu tiên trong lịch sử Việt Nam, do các vua Hùng đứng đầu, kinh đô đặt ở Phong Châu (Phú Thọ ngày nay). Cư dân Lạc Việt làm nông nghiệp lúa nước, đúc trống đồng Đông Sơn và hình thành nền văn minh sông Hồng rực rỡ.'),
  ('au-lac', 'Nhà nước Âu Lạc', '257 – 208 TCN', -257, 'ancient', 'An Dương Vương hợp nhất Âu Việt và Lạc Việt, xây thành Cổ Loa.', 'An Dương Vương Thục Phán hợp nhất hai bộ tộc Âu Việt và Lạc Việt lập nên nước Âu Lạc, dời đô về Cổ Loa (Đông Anh, Hà Nội). Thành Cổ Loa với vòng xoáy ốc và nỏ Liên Châu là biểu tượng quân sự nổi bật của thời kỳ này.'),
  ('trieu', 'Nhà Triệu', '207 – 111 TCN', -207, 'ancient', 'Triệu Đà lập nước Nam Việt, đóng đô ở Phiên Ngung.', 'Triệu Đà đánh chiếm Âu Lạc, lập nước Nam Việt với kinh đô Phiên Ngung. Vị trí của nhà Triệu trong lịch sử Việt Nam còn nhiều tranh luận, nhưng thường được xem là bản lề trước khi đất nước rơi vào thời Bắc thuộc.'),
  ('bac-thuoc', 'Thời Bắc thuộc', '111 TCN – 938', -111, 'bacthuoc', 'Hơn một nghìn năm chống ách đô hộ phương Bắc với nhiều cuộc khởi nghĩa.', 'Từ khi nhà Hán thôn tính Nam Việt, dân tộc Việt trải qua hơn một nghìn năm Bắc thuộc. Đây là thời kỳ của các cuộc khởi nghĩa oanh liệt: Hai Bà Trưng (40–43), Bà Triệu (248), Lý Bí lập nước Vạn Xuân (544), Mai Thúc Loan, Phùng Hưng... giữ gìn bản sắc và ý chí độc lập.'),
  ('ngo', 'Nhà Ngô', '939 – 965', 939, 'dynastic', 'Ngô Quyền thắng Bạch Đằng, mở nền độc lập tự chủ.', 'Năm 938, Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng bằng trận địa cọc ngầm, chấm dứt hơn nghìn năm Bắc thuộc. Ông xưng vương, đóng đô ở Cổ Loa, mở ra kỷ nguyên độc lập tự chủ lâu dài của dân tộc.'),
  ('dinh', 'Nhà Đinh', '968 – 980', 968, 'dynastic', 'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, lập nước Đại Cồ Việt.', 'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, thống nhất đất nước, lên ngôi Hoàng đế (Đinh Tiên Hoàng), đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư (Ninh Bình). Đây là lần đầu người đứng đầu nước Việt xưng Đế ngang hàng phương Bắc.'),
  ('tien-le', 'Nhà Tiền Lê', '980 – 1009', 980, 'dynastic', 'Lê Hoàn đánh bại quân Tống, giữ vững nền độc lập.', 'Lê Hoàn (Lê Đại Hành) lên ngôi trong bối cảnh quân Tống xâm lược, đã lãnh đạo kháng chiến thắng lợi năm 981, tiếp tục giữ vững nền độc lập của Đại Cồ Việt và phát triển kinh tế, ngoại giao.'),
  ('ly', 'Nhà Lý', '1009 – 1225', 1009, 'dynastic', 'Dời đô về Thăng Long, đặt quốc hiệu Đại Việt.', 'Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long (1010), mở thời kỳ phát triển rực rỡ. Quốc hiệu đổi thành Đại Việt (1054). Lý Thường Kiệt kháng Tống với bài thơ "Nam quốc sơn hà". Văn Miếu – Quốc Tử Giám và Phật giáo hưng thịnh.'),
  ('tran', 'Nhà Trần', '1225 – 1400', 1225, 'dynastic', 'Ba lần đánh bại quân Nguyên – Mông với hào khí Đông A.', 'Nhà Trần nổi tiếng với ba lần đánh bại đế quốc Nguyên – Mông (1258, 1285, 1288), đỉnh cao là trận Bạch Đằng do Trần Hưng Đạo chỉ huy. Hào khí Đông A, Hội nghị Diên Hồng và Hịch tướng sĩ là biểu tượng tinh thần của thời kỳ này.'),
  ('ho', 'Nhà Hồ', '1400 – 1407', 1400, 'dynastic', 'Hồ Quý Ly cải cách, đổi quốc hiệu Đại Ngu.', 'Hồ Quý Ly lập nhà Hồ, đổi quốc hiệu Đại Ngu, dời đô vào Thanh Hóa (Thành Nhà Hồ), tiến hành nhiều cải cách táo bạo về tiền tệ, ruộng đất, giáo dục. Tuy nhiên triều đại nhanh chóng thất thủ trước quân Minh năm 1407.'),
  ('hau-le', 'Nhà Hậu Lê', '1428 – 1527', 1428, 'dynastic', 'Lê Lợi khởi nghĩa Lam Sơn; thời Lê Thánh Tông thịnh trị.', 'Sau 10 năm khởi nghĩa Lam Sơn, Lê Lợi đánh đuổi quân Minh, lập nhà Hậu Lê (Lê sơ). Thời Lê Thánh Tông là đỉnh cao thịnh trị với bộ luật Hồng Đức, bản đồ Hồng Đức và nền khoa cử phát triển.'),
  ('mac', 'Nhà Mạc', '1527 – 1592', 1527, 'dynastic', 'Mạc Đăng Dung lập triều Mạc, mở thời Nam – Bắc triều.', 'Mạc Đăng Dung phế nhà Lê lập nhà Mạc, đóng đô ở Thăng Long. Nhà Lê được khôi phục ở phía Nam (Lê Trung Hưng) tạo nên cục diện Nam – Bắc triều kéo dài hàng chục năm nội chiến.'),
  ('le-trung-hung', 'Lê Trung Hưng (Trịnh – Nguyễn)', '1533 – 1789', 1533, 'dynastic', 'Vua Lê – chúa Trịnh ở Đàng Ngoài, chúa Nguyễn ở Đàng Trong.', 'Nhà Lê được trung hưng nhưng thực quyền nằm trong tay chúa Trịnh (Đàng Ngoài) và chúa Nguyễn (Đàng Trong). Sông Gianh chia cắt đất nước. Thời kỳ này gắn với công cuộc mở cõi về phương Nam của các chúa Nguyễn.'),
  ('tay-son', 'Nhà Tây Sơn', '1778 – 1802', 1778, 'dynastic', 'Quang Trung đại phá quân Thanh trận Ngọc Hồi – Đống Đa.', 'Ba anh em Tây Sơn lật đổ chúa Nguyễn, chúa Trịnh và vua Lê. Nguyễn Huệ – Quang Trung đại phá 29 vạn quân Thanh trong trận Ngọc Hồi – Đống Đa Tết Kỷ Dậu 1789, một trong những chiến công hiển hách nhất lịch sử.'),
  ('nguyen', 'Nhà Nguyễn', '1802 – 1945', 1802, 'dynastic', 'Gia Long thống nhất đất nước, đặt quốc hiệu Việt Nam.', 'Nguyễn Ánh (Gia Long) đánh bại Tây Sơn, thống nhất đất nước, lập nhà Nguyễn, đóng đô ở Huế, đặt quốc hiệu Việt Nam (1804). Đây là triều đại phong kiến cuối cùng, về sau mất dần chủ quyền vào tay thực dân Pháp.'),
  ('phap-thuoc', 'Thời Pháp thuộc', '1858 – 1945', 1858, 'colonial', 'Thực dân Pháp xâm lược và cai trị; phong trào yêu nước dấy lên.', 'Thực dân Pháp nổ súng ở Đà Nẵng (1858), từng bước biến Việt Nam thành thuộc địa. Các phong trào yêu nước nối tiếp nhau: Cần Vương, Đông Du, Duy Tân... đến khi Đảng Cộng sản Việt Nam ra đời (1930) lãnh đạo cách mạng giải phóng dân tộc.'),
  ('vndcch', 'Việt Nam Dân chủ Cộng hòa', '1945 – 1976', 1945, 'modern', 'Cách mạng Tháng Tám; kháng chiến chống Pháp và chống Mỹ.', 'Cách mạng Tháng Tám 1945 thành công, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa. Dân tộc tiến hành hai cuộc kháng chiến trường kỳ chống Pháp (đỉnh cao Điện Biên Phủ 1954) và chống Mỹ, thống nhất đất nước năm 1975.'),
  ('chxhcn', 'CHXHCN Việt Nam', '1976 – nay', 1976, 'modern', 'Đất nước thống nhất, Đổi mới và hội nhập quốc tế.', 'Năm 1976 đất nước thống nhất, đổi tên thành Cộng hòa Xã hội chủ nghĩa Việt Nam. Công cuộc Đổi mới từ năm 1986 đưa Việt Nam phát triển kinh tế, hội nhập sâu rộng với thế giới và vươn lên mạnh mẽ cho đến ngày nay.')
on conflict (id) do update set
  name = excluded.name,
  years = excluded.years,
  start_year = excluded.start_year,
  era = excluded.era,
  summary = excluded.summary,
  detail = excluded.detail;
