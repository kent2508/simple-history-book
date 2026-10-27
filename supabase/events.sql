-- Chạy trong Supabase Dashboard → SQL Editor để tạo bảng sự kiện và dữ liệu mẫu.
-- Mỗi sự kiện thuộc về một triều đại (period_id tham chiếu periods.id).

create table if not exists public.events (
  period_id text not null references public.periods(id) on delete cascade,
  id text not null,
  sort_order integer not null default 0,
  year integer not null,
  year_label text not null,
  title text not null,
  summary text not null,
  detail text not null,
  created_at timestamptz not null default now(),
  primary key (period_id, id)
);

alter table public.events enable row level security;

drop policy if exists "Public read access" on public.events;
create policy "Public read access"
  on public.events
  for select
  using (true);

insert into public.events (period_id, id, sort_order, year, year_label, title, summary, detail) values
  ('van-lang', 'lap-nuoc', 0, -2879, '~2879 TCN', 'Lập nước Văn Lang', 'Các vua Hùng dựng nên nhà nước đầu tiên của người Việt.', 'Theo truyền thuyết, Kinh Dương Vương và sau đó là các vua Hùng lập nên nhà nước Văn Lang, đặt kinh đô ở Phong Châu. Đây được xem là nhà nước sơ khai đầu tiên trong lịch sử dân tộc, gắn với truyền thuyết Con Rồng cháu Tiên và bọc trăm trứng của Lạc Long Quân – Âu Cơ.'),
  ('van-lang', 'trong-dong', 1, -700, '~700 TCN', 'Văn hóa Đông Sơn & trống đồng', 'Nền văn minh sông Hồng rực rỡ với kỹ nghệ đúc đồng.', 'Văn hóa Đông Sơn phát triển rực rỡ với đỉnh cao là những chiếc trống đồng tinh xảo, phản ánh đời sống nông nghiệp lúa nước, tín ngưỡng và tổ chức xã hội của cư dân Lạc Việt thời Văn Lang.'),
  ('au-lac', 'thuc-phan-lap-nuoc', 0, -257, '257 TCN', 'Thục Phán lập nước Âu Lạc', 'Hợp nhất Âu Việt và Lạc Việt, xưng An Dương Vương.', 'Thục Phán lãnh đạo liên minh Âu Việt – Lạc Việt, lập nên nước Âu Lạc, xưng An Dương Vương, dời đô về vùng Cổ Loa. Đây là bước phát triển cao hơn của nhà nước sơ khai người Việt.'),
  ('au-lac', 'thanh-co-loa', 1, -250, '~250 TCN', 'Xây thành Cổ Loa', 'Tòa thành xoáy ốc kiên cố cùng nỏ Liên Châu.', 'An Dương Vương cho xây thành Cổ Loa với các vòng thành xoáy trôn ốc độc đáo, kết hợp hào nước và nỏ Liên Châu (nỏ thần), trở thành công trình quân sự – kiến trúc tiêu biểu của thời kỳ dựng nước.'),
  ('au-lac', 'mat-nuoc', 2, -208, '208 TCN', 'Âu Lạc rơi vào tay Triệu Đà', 'Gắn với truyền thuyết Mỵ Châu – Trọng Thủy.', 'Triệu Đà dùng mưu kế đánh chiếm Âu Lạc, chấm dứt nhà nước của An Dương Vương. Sự kiện gắn với truyền thuyết nỏ thần và bi kịch Mỵ Châu – Trọng Thủy, bài học cảnh giác được truyền lại muôn đời.'),
  ('trieu', 'lap-nam-viet', 0, -207, '207 TCN', 'Triệu Đà lập nước Nam Việt', 'Đóng đô ở Phiên Ngung, sáp nhập Âu Lạc.', 'Triệu Đà lập nước Nam Việt với kinh đô Phiên Ngung, sau đó thôn tính Âu Lạc. Vị trí của nhà Triệu trong chính sử Việt Nam còn nhiều tranh luận giữa các sử gia.'),
  ('trieu', 'han-thon-tinh', 1, -111, '111 TCN', 'Nhà Hán thôn tính Nam Việt', 'Mở đầu hơn một nghìn năm Bắc thuộc.', 'Nhà Hán đánh bại Nam Việt, chia đất đai thành các quận huyện và áp đặt ách đô hộ. Đây là mốc mở đầu thời kỳ Bắc thuộc kéo dài hơn một nghìn năm.'),
  ('bac-thuoc', 'hai-ba-trung', 0, 40, '40 – 43', 'Khởi nghĩa Hai Bà Trưng', 'Trưng Trắc, Trưng Nhị dựng nền độc lập ngắn ngủi.', 'Năm 40, Hai Bà Trưng phất cờ khởi nghĩa, đánh đuổi Thái thú Tô Định, giành lại 65 thành, Trưng Trắc xưng vương. Đây là cuộc khởi nghĩa lớn đầu tiên chống Bắc thuộc, biểu tượng cho tinh thần bất khuất của phụ nữ Việt. Năm 43, khởi nghĩa thất bại trước quân Mã Viện.'),
  ('bac-thuoc', 'ba-trieu', 1, 248, '248', 'Khởi nghĩa Bà Triệu', '"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ…"', 'Triệu Thị Trinh (Bà Triệu) lãnh đạo khởi nghĩa chống quân Ngô ở vùng Thanh Hóa với câu nói bất hủ về ý chí không chịu khuất phục. Dù thất bại, bà trở thành biểu tượng cho khát vọng độc lập của dân tộc.'),
  ('bac-thuoc', 'ly-bi-van-xuan', 2, 544, '544', 'Lý Bí lập nước Vạn Xuân', 'Nhà nước độc lập với quốc hiệu riêng.', 'Lý Bí (Lý Nam Đế) đánh đuổi quân Lương, lập nước Vạn Xuân năm 544 — thể hiện khát vọng về một quốc gia độc lập, trường tồn. Đây là lần đầu người Việt đặt quốc hiệu và niên hiệu riêng trong thời Bắc thuộc.'),
  ('bac-thuoc', 'ngo-quyen-bach-dang', 3, 938, '938', 'Chiến thắng Bạch Đằng', 'Ngô Quyền chấm dứt nghìn năm Bắc thuộc.', 'Năm 938, Ngô Quyền dùng trận địa cọc ngầm trên sông Bạch Đằng tiêu diệt quân Nam Hán, kết thúc hơn một nghìn năm Bắc thuộc và mở ra kỷ nguyên độc lập tự chủ lâu dài của dân tộc.'),
  ('ngo', 'xung-vuong', 0, 939, '939', 'Ngô Quyền xưng vương', 'Đóng đô ở Cổ Loa, khẳng định nền tự chủ.', 'Sau chiến thắng Bạch Đằng, Ngô Quyền xưng vương, bỏ chức Tiết độ sứ của phương Bắc, đóng đô ở Cổ Loa, đặt nền móng cho nhà nước độc lập tự chủ.'),
  ('ngo', 'loan-12-su-quan', 1, 944, '944 – 968', 'Loạn 12 sứ quân', 'Đất nước chia cắt sau khi Ngô Quyền mất.', 'Sau khi Ngô Quyền qua đời, các thế lực cát cứ nổi lên tạo nên cục diện loạn 12 sứ quân, đất nước chia cắt cho đến khi Đinh Bộ Lĩnh dẹp loạn, thống nhất.'),
  ('dinh', 'dep-loan', 0, 968, '968', 'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân', 'Thống nhất đất nước, lập nước Đại Cồ Việt.', 'Đinh Bộ Lĩnh lần lượt dẹp yên các sứ quân, thống nhất giang sơn, lên ngôi Hoàng đế (Đinh Tiên Hoàng), đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư. Lần đầu người đứng đầu nước Việt xưng Đế.'),
  ('tien-le', 'khang-tong-981', 0, 981, '981', 'Kháng chiến chống Tống', 'Lê Hoàn đánh bại quân Tống xâm lược.', 'Năm 981, Lê Hoàn (Lê Đại Hành) lãnh đạo quân dân Đại Cồ Việt đánh bại cuộc xâm lược của nhà Tống trên cả hai mặt trận thủy bộ, giữ vững nền độc lập non trẻ.'),
  ('ly', 'doi-do-thang-long', 0, 1010, '1010', 'Dời đô về Thăng Long', 'Lý Thái Tổ ban Chiếu dời đô.', 'Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư về thành Đại La, đổi tên là Thăng Long ("rồng bay"). Chiếu dời đô thể hiện tầm nhìn chiến lược, mở ra thời kỳ phát triển rực rỡ của Đại Việt.'),
  ('ly', 'quoc-hieu-dai-viet', 1, 1054, '1054', 'Đặt quốc hiệu Đại Việt', 'Khẳng định vị thế quốc gia.', 'Vua Lý Thánh Tông đổi quốc hiệu thành Đại Việt, một tên gọi gắn bó với dân tộc suốt nhiều thế kỷ, thể hiện ý thức tự cường và vị thế của quốc gia.'),
  ('ly', 'khang-tong-1077', 2, 1077, '1075 – 1077', 'Kháng chiến chống Tống & Nam quốc sơn hà', 'Lý Thường Kiệt với phòng tuyến sông Như Nguyệt.', 'Lý Thường Kiệt chủ động "tiên phát chế nhân", sau đó lập phòng tuyến sông Như Nguyệt đánh bại quân Tống. Bài thơ "Nam quốc sơn hà" vang lên như bản tuyên ngôn độc lập đầu tiên của dân tộc.'),
  ('ly', 'van-mieu', 3, 1070, '1070', 'Xây Văn Miếu – Quốc Tử Giám', 'Nền móng cho giáo dục khoa cử.', 'Năm 1070 lập Văn Miếu thờ Khổng Tử, sau đó là Quốc Tử Giám (1076) — trường đại học đầu tiên của Đại Việt, đặt nền móng cho truyền thống khoa cử và hiếu học.'),
  ('tran', 'nguyen-mong-lan-1', 0, 1258, '1258', 'Kháng chiến chống Nguyên – Mông lần 1', 'Đánh bại cuộc xâm lược đầu tiên.', 'Năm 1258, quân dân nhà Trần thực hiện kế "vườn không nhà trống", rút khỏi Thăng Long rồi phản công, đánh bại cuộc xâm lược đầu tiên của đế quốc Mông Cổ.'),
  ('tran', 'dien-hong', 1, 1284, '1284', 'Hội nghị Diên Hồng', 'Ý chí toàn dân "quyết đánh".', 'Trước cuộc xâm lược lần hai, Thượng hoàng Trần Thánh Tông triệu tập các bô lão tại điện Diên Hồng hỏi kế đánh hay hòa. Tiếng hô "Đánh!" vang dội thể hiện sức mạnh đoàn kết toàn dân.'),
  ('tran', 'nguyen-mong-lan-2', 2, 1285, '1285', 'Kháng chiến chống Nguyên – Mông lần 2', 'Hào khí Đông A với Hịch tướng sĩ.', 'Năm 1285, trước 50 vạn quân Nguyên, Trần Hưng Đạo viết Hịch tướng sĩ khích lệ ba quân. Sau các trận Hàm Tử, Chương Dương, Tây Kết, quân Đại Việt đại thắng, quét sạch quân xâm lược.'),
  ('tran', 'bach-dang-1288', 3, 1288, '1288', 'Chiến thắng Bạch Đằng', 'Trần Hưng Đạo tái hiện trận cọc ngầm.', 'Năm 1288, Trần Hưng Đạo bố trí trận địa cọc trên sông Bạch Đằng, tiêu diệt đoàn thuyền chiến của Ô Mã Nhi, kết thúc thắng lợi cuộc kháng chiến chống Nguyên – Mông lần ba. Đây là đỉnh cao nghệ thuật quân sự Đại Việt.'),
  ('ho', 'cai-cach', 0, 1400, '1400', 'Hồ Quý Ly lập nhà Hồ & cải cách', 'Đổi quốc hiệu Đại Ngu, phát hành tiền giấy.', 'Hồ Quý Ly phế nhà Trần, lập nhà Hồ, đổi quốc hiệu Đại Ngu, dời đô vào Thanh Hóa (Thành Nhà Hồ). Ông tiến hành nhiều cải cách táo bạo: phát hành tiền giấy, hạn điền, hạn nô, chấn chỉnh thi cử.'),
  ('ho', 'that-thu-minh', 1, 1407, '1407', 'Thất thủ trước quân Minh', 'Mở đầu thời kỳ Minh thuộc.', 'Năm 1407, nhà Minh đánh bại nhà Hồ, bắt đầu giai đoạn đô hộ hà khắc. Chính sách đồng hóa của nhà Minh càng hun đúc ý chí khởi nghĩa, dẫn tới cuộc khởi nghĩa Lam Sơn.'),
  ('hau-le', 'lam-son', 0, 1418, '1418 – 1427', 'Khởi nghĩa Lam Sơn', 'Lê Lợi – Nguyễn Trãi đánh đuổi quân Minh.', 'Cuộc khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo, Nguyễn Trãi là quân sư, kéo dài 10 năm gian khổ. Chiến thắng Chi Lăng – Xương Giang (1427) buộc quân Minh rút về nước. Bình Ngô đại cáo là áng "thiên cổ hùng văn".'),
  ('hau-le', 'lap-nha-le', 1, 1428, '1428', 'Lê Lợi lên ngôi, lập nhà Hậu Lê', 'Khôi phục quốc hiệu Đại Việt.', 'Năm 1428, Lê Lợi lên ngôi (Lê Thái Tổ), lập nhà Hậu Lê, khôi phục nền độc lập và quốc hiệu Đại Việt, bắt tay xây dựng lại đất nước sau chiến tranh.'),
  ('hau-le', 'le-thanh-tong', 2, 1460, '1460 – 1497', 'Thời Lê Thánh Tông thịnh trị', 'Bộ luật Hồng Đức, cải cách hành chính.', 'Vua Lê Thánh Tông đưa Đại Việt tới đỉnh cao thịnh trị: ban hành bộ luật Hồng Đức tiến bộ, lập bản đồ Hồng Đức, cải cách bộ máy hành chính, phát triển khoa cử và văn hóa.'),
  ('mac', 'mac-dang-dung', 0, 1527, '1527', 'Mạc Đăng Dung lập nhà Mạc', 'Phế nhà Lê, mở thời Nam – Bắc triều.', 'Năm 1527, Mạc Đăng Dung phế vua Lê, lập nhà Mạc đóng đô ở Thăng Long. Nhà Lê được khôi phục ở phía Nam (Lê Trung Hưng) tạo nên cục diện Nam – Bắc triều.'),
  ('le-trung-hung', 'trinh-nguyen-phan-tranh', 0, 1627, '1627 – 1672', 'Trịnh – Nguyễn phân tranh', 'Sông Gianh chia cắt Đàng Trong – Đàng Ngoài.', 'Chúa Trịnh (Đàng Ngoài) và chúa Nguyễn (Đàng Trong) giao tranh nhiều lần, lấy sông Gianh làm ranh giới. Đất nước bị chia cắt kéo dài, dù trên danh nghĩa vẫn là vua Lê.'),
  ('le-trung-hung', 'mo-coi-phuong-nam', 1, 1698, 'TK XVII – XVIII', 'Mở cõi về phương Nam', 'Chúa Nguyễn khai phá vùng đất Nam Bộ.', 'Các chúa Nguyễn tổ chức di dân, khai hoang và xác lập chủ quyền trên vùng đất phương Nam, trong đó có việc lập phủ Gia Định (1698), mở rộng lãnh thổ tới đồng bằng sông Cửu Long.'),
  ('tay-son', 'khoi-nghia-tay-son', 0, 1771, '1771', 'Khởi nghĩa Tây Sơn', 'Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ.', 'Phong trào Tây Sơn bùng nổ ở Bình Định, lật đổ ách thống trị của chúa Nguyễn ở Đàng Trong, rồi tiến ra Bắc, chấm dứt cục diện vua Lê – chúa Trịnh.'),
  ('tay-son', 'rach-gam-xoai-mut', 1, 1785, '1785', 'Chiến thắng Rạch Gầm – Xoài Mút', 'Đánh tan 5 vạn quân Xiêm.', 'Năm 1785, Nguyễn Huệ chỉ huy đánh tan 5 vạn quân Xiêm trên sông Tiền (đoạn Rạch Gầm – Xoài Mút), bảo vệ vững chắc vùng đất phương Nam.'),
  ('tay-son', 'ngoc-hoi-dong-da', 2, 1789, '1789', 'Đại phá quân Thanh – Ngọc Hồi – Đống Đa', 'Quang Trung hành quân thần tốc Tết Kỷ Dậu.', 'Tết Kỷ Dậu 1789, Quang Trung – Nguyễn Huệ hành quân thần tốc ra Bắc, đại phá 29 vạn quân Thanh trong các trận Ngọc Hồi, Đống Đa chỉ trong mấy ngày. Một trong những chiến công hiển hách nhất lịch sử dân tộc.'),
  ('nguyen', 'gia-long-thong-nhat', 0, 1802, '1802', 'Gia Long thống nhất đất nước', 'Lập nhà Nguyễn, đóng đô ở Huế.', 'Năm 1802, Nguyễn Ánh đánh bại Tây Sơn, lên ngôi lấy niên hiệu Gia Long, lập nhà Nguyễn, thống nhất đất nước từ Bắc chí Nam, đóng đô ở Phú Xuân (Huế).'),
  ('nguyen', 'quoc-hieu-viet-nam', 1, 1804, '1804', 'Đặt quốc hiệu Việt Nam', 'Tên gọi Việt Nam chính thức.', 'Năm 1804, quốc hiệu Việt Nam được đặt chính thức dưới triều Gia Long — tên gọi gắn bó với đất nước cho đến ngày nay.'),
  ('nguyen', 'phap-no-sung', 2, 1858, '1858', 'Pháp nổ súng xâm lược', 'Liên quân Pháp – Tây Ban Nha đánh Đà Nẵng.', 'Năm 1858, liên quân Pháp – Tây Ban Nha nổ súng tấn công Đà Nẵng, mở đầu quá trình xâm lược của thực dân Pháp, đẩy nhà Nguyễn vào thế mất dần chủ quyền.'),
  ('phap-thuoc', 'hoa-uoc-1884', 0, 1884, '1884', 'Hòa ước Patenôtre', 'Việt Nam thành thuộc địa, bảo hộ của Pháp.', 'Hòa ước Patenôtre (1884) xác lập ách đô hộ của thực dân Pháp, chia nước ta thành ba kỳ với chế độ cai trị khác nhau, mở đầu thời kỳ Pháp thuộc kéo dài.'),
  ('phap-thuoc', 'can-vuong', 1, 1885, '1885 – 1896', 'Phong trào Cần Vương', 'Văn thân, sĩ phu phò vua cứu nước.', 'Sau chiếu Cần Vương của vua Hàm Nghi, các cuộc khởi nghĩa của văn thân, sĩ phu nổ ra khắp nơi (Ba Đình, Bãi Sậy, Hương Khê) chống thực dân Pháp, thể hiện tinh thần yêu nước bền bỉ.'),
  ('phap-thuoc', 'dang-cong-san', 2, 1930, '1930', 'Đảng Cộng sản Việt Nam ra đời', 'Nguyễn Ái Quốc thống nhất các tổ chức cộng sản.', 'Ngày 3/2/1930, dưới sự chủ trì của Nguyễn Ái Quốc, Đảng Cộng sản Việt Nam ra đời, thống nhất các tổ chức cộng sản, mở ra đường lối mới cho cách mạng giải phóng dân tộc.'),
  ('vndcch', 'cach-mang-thang-tam', 0, 1945, '8 – 1945', 'Cách mạng Tháng Tám', 'Tổng khởi nghĩa giành chính quyền.', 'Tháng 8/1945, nhân dân cả nước tổng khởi nghĩa giành chính quyền thành công, lật đổ ách thống trị của thực dân – phong kiến, mở ra kỷ nguyên độc lập, tự do.'),
  ('vndcch', 'tuyen-ngon-doc-lap', 1, 1945, '2/9/1945', 'Tuyên ngôn Độc lập', 'Khai sinh nước Việt Nam Dân chủ Cộng hòa.', 'Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa — nhà nước công nông đầu tiên ở Đông Nam Á.'),
  ('vndcch', 'dien-bien-phu', 2, 1954, '1954', 'Chiến thắng Điện Biên Phủ', '"Lừng lẫy năm châu, chấn động địa cầu".', 'Chiến dịch Điện Biên Phủ (1954) kết thúc thắng lợi cuộc kháng chiến chống Pháp, buộc Pháp ký Hiệp định Genève. Đây là chiến thắng có ý nghĩa quốc tế, cổ vũ phong trào giải phóng dân tộc toàn thế giới.'),
  ('vndcch', 'thong-nhat-1975', 3, 1975, '30/4/1975', 'Giải phóng miền Nam, thống nhất đất nước', 'Chiến dịch Hồ Chí Minh toàn thắng.', 'Ngày 30/4/1975, Chiến dịch Hồ Chí Minh toàn thắng, giải phóng hoàn toàn miền Nam, kết thúc cuộc kháng chiến chống Mỹ, non sông thu về một mối.'),
  ('chxhcn', 'thong-nhat-dat-nuoc', 0, 1976, '1976', 'Thống nhất đất nước về mặt nhà nước', 'Đổi tên thành CHXHCN Việt Nam.', 'Năm 1976, Quốc hội khóa VI quyết định đổi tên nước thành Cộng hòa Xã hội chủ nghĩa Việt Nam, thống nhất đất nước về mặt nhà nước sau khi non sông liền một dải.'),
  ('chxhcn', 'doi-moi-1986', 1, 1986, '1986', 'Công cuộc Đổi mới', 'Chuyển sang kinh tế thị trường định hướng XHCN.', 'Đại hội VI (1986) khởi xướng công cuộc Đổi mới, chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng xã hội chủ nghĩa, đưa đất nước thoát khủng hoảng và phát triển.'),
  ('chxhcn', 'hoi-nhap', 2, 2007, '1995 – nay', 'Hội nhập quốc tế', 'Gia nhập ASEAN, WTO và các hiệp định lớn.', 'Việt Nam gia nhập ASEAN (1995), bình thường hóa quan hệ với Hoa Kỳ, gia nhập WTO (2007) và nhiều hiệp định thương mại tự do, hội nhập sâu rộng và nâng cao vị thế trên trường quốc tế.')
on conflict (period_id, id) do update set
  sort_order = excluded.sort_order,
  year = excluded.year,
  year_label = excluded.year_label,
  title = excluded.title,
  summary = excluded.summary,
  detail = excluded.detail;
