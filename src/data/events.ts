import type { HistoryEvent } from './periods'

/**
 * Các sự kiện / mốc thời gian nổi bật trong từng triều đại.
 * Khóa là `id` của triều đại trong `periods.ts`.
 * Mỗi sự kiện có trang chi tiết riêng tại /period/:id/event/:eventId
 */
export const eventsByPeriod: Record<string, HistoryEvent[]> = {
  'van-lang': [
    {
      id: 'lap-nuoc',
      year: -2879,
      yearLabel: '~2879 TCN',
      title: 'Lập nước Văn Lang',
      summary: 'Các vua Hùng dựng nên nhà nước đầu tiên của người Việt.',
      detail:
        'Theo truyền thuyết, Kinh Dương Vương và sau đó là các vua Hùng lập nên nhà nước Văn Lang, đặt kinh đô ở Phong Châu. Đây được xem là nhà nước sơ khai đầu tiên trong lịch sử dân tộc, gắn với truyền thuyết Con Rồng cháu Tiên và bọc trăm trứng của Lạc Long Quân – Âu Cơ.',
    },
    {
      id: 'trong-dong',
      year: -700,
      yearLabel: '~700 TCN',
      title: 'Văn hóa Đông Sơn & trống đồng',
      summary: 'Nền văn minh sông Hồng rực rỡ với kỹ nghệ đúc đồng.',
      detail:
        'Văn hóa Đông Sơn phát triển rực rỡ với đỉnh cao là những chiếc trống đồng tinh xảo, phản ánh đời sống nông nghiệp lúa nước, tín ngưỡng và tổ chức xã hội của cư dân Lạc Việt thời Văn Lang.',
    },
  ],
  'au-lac': [
    {
      id: 'thuc-phan-lap-nuoc',
      year: -257,
      yearLabel: '257 TCN',
      title: 'Thục Phán lập nước Âu Lạc',
      summary: 'Hợp nhất Âu Việt và Lạc Việt, xưng An Dương Vương.',
      detail:
        'Thục Phán lãnh đạo liên minh Âu Việt – Lạc Việt, lập nên nước Âu Lạc, xưng An Dương Vương, dời đô về vùng Cổ Loa. Đây là bước phát triển cao hơn của nhà nước sơ khai người Việt.',
    },
    {
      id: 'thanh-co-loa',
      year: -250,
      yearLabel: '~250 TCN',
      title: 'Xây thành Cổ Loa',
      summary: 'Tòa thành xoáy ốc kiên cố cùng nỏ Liên Châu.',
      detail:
        'An Dương Vương cho xây thành Cổ Loa với các vòng thành xoáy trôn ốc độc đáo, kết hợp hào nước và nỏ Liên Châu (nỏ thần), trở thành công trình quân sự – kiến trúc tiêu biểu của thời kỳ dựng nước.',
    },
    {
      id: 'mat-nuoc',
      year: -208,
      yearLabel: '208 TCN',
      title: 'Âu Lạc rơi vào tay Triệu Đà',
      summary: 'Gắn với truyền thuyết Mỵ Châu – Trọng Thủy.',
      detail:
        'Triệu Đà dùng mưu kế đánh chiếm Âu Lạc, chấm dứt nhà nước của An Dương Vương. Sự kiện gắn với truyền thuyết nỏ thần và bi kịch Mỵ Châu – Trọng Thủy, bài học cảnh giác được truyền lại muôn đời.',
    },
  ],
  trieu: [
    {
      id: 'lap-nam-viet',
      year: -207,
      yearLabel: '207 TCN',
      title: 'Triệu Đà lập nước Nam Việt',
      summary: 'Đóng đô ở Phiên Ngung, sáp nhập Âu Lạc.',
      detail:
        'Triệu Đà lập nước Nam Việt với kinh đô Phiên Ngung, sau đó thôn tính Âu Lạc. Vị trí của nhà Triệu trong chính sử Việt Nam còn nhiều tranh luận giữa các sử gia.',
    },
    {
      id: 'han-thon-tinh',
      year: -111,
      yearLabel: '111 TCN',
      title: 'Nhà Hán thôn tính Nam Việt',
      summary: 'Mở đầu hơn một nghìn năm Bắc thuộc.',
      detail:
        'Nhà Hán đánh bại Nam Việt, chia đất đai thành các quận huyện và áp đặt ách đô hộ. Đây là mốc mở đầu thời kỳ Bắc thuộc kéo dài hơn một nghìn năm.',
    },
  ],
  'bac-thuoc': [
    {
      id: 'hai-ba-trung',
      year: 40,
      yearLabel: '40 – 43',
      title: 'Khởi nghĩa Hai Bà Trưng',
      summary: 'Trưng Trắc, Trưng Nhị dựng nền độc lập ngắn ngủi.',
      detail:
        'Năm 40, Hai Bà Trưng phất cờ khởi nghĩa, đánh đuổi Thái thú Tô Định, giành lại 65 thành, Trưng Trắc xưng vương. Đây là cuộc khởi nghĩa lớn đầu tiên chống Bắc thuộc, biểu tượng cho tinh thần bất khuất của phụ nữ Việt. Năm 43, khởi nghĩa thất bại trước quân Mã Viện.',
    },
    {
      id: 'ba-trieu',
      year: 248,
      yearLabel: '248',
      title: 'Khởi nghĩa Bà Triệu',
      summary: '"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ…"',
      detail:
        'Triệu Thị Trinh (Bà Triệu) lãnh đạo khởi nghĩa chống quân Ngô ở vùng Thanh Hóa với câu nói bất hủ về ý chí không chịu khuất phục. Dù thất bại, bà trở thành biểu tượng cho khát vọng độc lập của dân tộc.',
    },
    {
      id: 'ly-bi-van-xuan',
      year: 544,
      yearLabel: '544',
      title: 'Lý Bí lập nước Vạn Xuân',
      summary: 'Nhà nước độc lập với quốc hiệu riêng.',
      detail:
        'Lý Bí (Lý Nam Đế) đánh đuổi quân Lương, lập nước Vạn Xuân năm 544 — thể hiện khát vọng về một quốc gia độc lập, trường tồn. Đây là lần đầu người Việt đặt quốc hiệu và niên hiệu riêng trong thời Bắc thuộc.',
    },
    {
      id: 'ngo-quyen-bach-dang',
      year: 938,
      yearLabel: '938',
      title: 'Chiến thắng Bạch Đằng',
      summary: 'Ngô Quyền chấm dứt nghìn năm Bắc thuộc.',
      detail:
        'Năm 938, Ngô Quyền dùng trận địa cọc ngầm trên sông Bạch Đằng tiêu diệt quân Nam Hán, kết thúc hơn một nghìn năm Bắc thuộc và mở ra kỷ nguyên độc lập tự chủ lâu dài của dân tộc.',
    },
  ],
  ngo: [
    {
      id: 'xung-vuong',
      year: 939,
      yearLabel: '939',
      title: 'Ngô Quyền xưng vương',
      summary: 'Đóng đô ở Cổ Loa, khẳng định nền tự chủ.',
      detail:
        'Sau chiến thắng Bạch Đằng, Ngô Quyền xưng vương, bỏ chức Tiết độ sứ của phương Bắc, đóng đô ở Cổ Loa, đặt nền móng cho nhà nước độc lập tự chủ.',
    },
    {
      id: 'loan-12-su-quan',
      year: 944,
      yearLabel: '944 – 968',
      title: 'Loạn 12 sứ quân',
      summary: 'Đất nước chia cắt sau khi Ngô Quyền mất.',
      detail:
        'Sau khi Ngô Quyền qua đời, các thế lực cát cứ nổi lên tạo nên cục diện loạn 12 sứ quân, đất nước chia cắt cho đến khi Đinh Bộ Lĩnh dẹp loạn, thống nhất.',
    },
  ],
  dinh: [
    {
      id: 'dep-loan',
      year: 968,
      yearLabel: '968',
      title: 'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân',
      summary: 'Thống nhất đất nước, lập nước Đại Cồ Việt.',
      detail:
        'Đinh Bộ Lĩnh lần lượt dẹp yên các sứ quân, thống nhất giang sơn, lên ngôi Hoàng đế (Đinh Tiên Hoàng), đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư. Lần đầu người đứng đầu nước Việt xưng Đế.',
    },
  ],
  'tien-le': [
    {
      id: 'khang-tong-981',
      year: 981,
      yearLabel: '981',
      title: 'Kháng chiến chống Tống',
      summary: 'Lê Hoàn đánh bại quân Tống xâm lược.',
      detail:
        'Năm 981, Lê Hoàn (Lê Đại Hành) lãnh đạo quân dân Đại Cồ Việt đánh bại cuộc xâm lược của nhà Tống trên cả hai mặt trận thủy bộ, giữ vững nền độc lập non trẻ.',
    },
  ],
  ly: [
    {
      id: 'doi-do-thang-long',
      year: 1010,
      yearLabel: '1010',
      title: 'Dời đô về Thăng Long',
      summary: 'Lý Thái Tổ ban Chiếu dời đô.',
      detail:
        'Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư về thành Đại La, đổi tên là Thăng Long ("rồng bay"). Chiếu dời đô thể hiện tầm nhìn chiến lược, mở ra thời kỳ phát triển rực rỡ của Đại Việt.',
    },
    {
      id: 'quoc-hieu-dai-viet',
      year: 1054,
      yearLabel: '1054',
      title: 'Đặt quốc hiệu Đại Việt',
      summary: 'Khẳng định vị thế quốc gia.',
      detail:
        'Vua Lý Thánh Tông đổi quốc hiệu thành Đại Việt, một tên gọi gắn bó với dân tộc suốt nhiều thế kỷ, thể hiện ý thức tự cường và vị thế của quốc gia.',
    },
    {
      id: 'khang-tong-1077',
      year: 1077,
      yearLabel: '1075 – 1077',
      title: 'Kháng chiến chống Tống & Nam quốc sơn hà',
      summary: 'Lý Thường Kiệt với phòng tuyến sông Như Nguyệt.',
      detail:
        'Lý Thường Kiệt chủ động "tiên phát chế nhân", sau đó lập phòng tuyến sông Như Nguyệt đánh bại quân Tống. Bài thơ "Nam quốc sơn hà" vang lên như bản tuyên ngôn độc lập đầu tiên của dân tộc.',
    },
    {
      id: 'van-mieu',
      year: 1070,
      yearLabel: '1070',
      title: 'Xây Văn Miếu – Quốc Tử Giám',
      summary: 'Nền móng cho giáo dục khoa cử.',
      detail:
        'Năm 1070 lập Văn Miếu thờ Khổng Tử, sau đó là Quốc Tử Giám (1076) — trường đại học đầu tiên của Đại Việt, đặt nền móng cho truyền thống khoa cử và hiếu học.',
    },
  ],
  tran: [
    {
      id: 'nguyen-mong-lan-1',
      year: 1258,
      yearLabel: '1258',
      title: 'Kháng chiến chống Nguyên – Mông lần 1',
      summary: 'Đánh bại cuộc xâm lược đầu tiên.',
      detail:
        'Năm 1258, quân dân nhà Trần thực hiện kế "vườn không nhà trống", rút khỏi Thăng Long rồi phản công, đánh bại cuộc xâm lược đầu tiên của đế quốc Mông Cổ.',
    },
    {
      id: 'dien-hong',
      year: 1284,
      yearLabel: '1284',
      title: 'Hội nghị Diên Hồng',
      summary: 'Ý chí toàn dân "quyết đánh".',
      detail:
        'Trước cuộc xâm lược lần hai, Thượng hoàng Trần Thánh Tông triệu tập các bô lão tại điện Diên Hồng hỏi kế đánh hay hòa. Tiếng hô "Đánh!" vang dội thể hiện sức mạnh đoàn kết toàn dân.',
    },
    {
      id: 'nguyen-mong-lan-2',
      year: 1285,
      yearLabel: '1285',
      title: 'Kháng chiến chống Nguyên – Mông lần 2',
      summary: 'Hào khí Đông A với Hịch tướng sĩ.',
      detail:
        'Năm 1285, trước 50 vạn quân Nguyên, Trần Hưng Đạo viết Hịch tướng sĩ khích lệ ba quân. Sau các trận Hàm Tử, Chương Dương, Tây Kết, quân Đại Việt đại thắng, quét sạch quân xâm lược.',
    },
    {
      id: 'bach-dang-1288',
      year: 1288,
      yearLabel: '1288',
      title: 'Chiến thắng Bạch Đằng',
      summary: 'Trần Hưng Đạo tái hiện trận cọc ngầm.',
      detail:
        'Năm 1288, Trần Hưng Đạo bố trí trận địa cọc trên sông Bạch Đằng, tiêu diệt đoàn thuyền chiến của Ô Mã Nhi, kết thúc thắng lợi cuộc kháng chiến chống Nguyên – Mông lần ba. Đây là đỉnh cao nghệ thuật quân sự Đại Việt.',
    },
  ],
  ho: [
    {
      id: 'cai-cach',
      year: 1400,
      yearLabel: '1400',
      title: 'Hồ Quý Ly lập nhà Hồ & cải cách',
      summary: 'Đổi quốc hiệu Đại Ngu, phát hành tiền giấy.',
      detail:
        'Hồ Quý Ly phế nhà Trần, lập nhà Hồ, đổi quốc hiệu Đại Ngu, dời đô vào Thanh Hóa (Thành Nhà Hồ). Ông tiến hành nhiều cải cách táo bạo: phát hành tiền giấy, hạn điền, hạn nô, chấn chỉnh thi cử.',
    },
    {
      id: 'that-thu-minh',
      year: 1407,
      yearLabel: '1407',
      title: 'Thất thủ trước quân Minh',
      summary: 'Mở đầu thời kỳ Minh thuộc.',
      detail:
        'Năm 1407, nhà Minh đánh bại nhà Hồ, bắt đầu giai đoạn đô hộ hà khắc. Chính sách đồng hóa của nhà Minh càng hun đúc ý chí khởi nghĩa, dẫn tới cuộc khởi nghĩa Lam Sơn.',
    },
  ],
  'hau-le': [
    {
      id: 'lam-son',
      year: 1418,
      yearLabel: '1418 – 1427',
      title: 'Khởi nghĩa Lam Sơn',
      summary: 'Lê Lợi – Nguyễn Trãi đánh đuổi quân Minh.',
      detail:
        'Cuộc khởi nghĩa Lam Sơn do Lê Lợi lãnh đạo, Nguyễn Trãi là quân sư, kéo dài 10 năm gian khổ. Chiến thắng Chi Lăng – Xương Giang (1427) buộc quân Minh rút về nước. Bình Ngô đại cáo là áng "thiên cổ hùng văn".',
    },
    {
      id: 'lap-nha-le',
      year: 1428,
      yearLabel: '1428',
      title: 'Lê Lợi lên ngôi, lập nhà Hậu Lê',
      summary: 'Khôi phục quốc hiệu Đại Việt.',
      detail:
        'Năm 1428, Lê Lợi lên ngôi (Lê Thái Tổ), lập nhà Hậu Lê, khôi phục nền độc lập và quốc hiệu Đại Việt, bắt tay xây dựng lại đất nước sau chiến tranh.',
    },
    {
      id: 'le-thanh-tong',
      year: 1460,
      yearLabel: '1460 – 1497',
      title: 'Thời Lê Thánh Tông thịnh trị',
      summary: 'Bộ luật Hồng Đức, cải cách hành chính.',
      detail:
        'Vua Lê Thánh Tông đưa Đại Việt tới đỉnh cao thịnh trị: ban hành bộ luật Hồng Đức tiến bộ, lập bản đồ Hồng Đức, cải cách bộ máy hành chính, phát triển khoa cử và văn hóa.',
    },
  ],
  mac: [
    {
      id: 'mac-dang-dung',
      year: 1527,
      yearLabel: '1527',
      title: 'Mạc Đăng Dung lập nhà Mạc',
      summary: 'Phế nhà Lê, mở thời Nam – Bắc triều.',
      detail:
        'Năm 1527, Mạc Đăng Dung phế vua Lê, lập nhà Mạc đóng đô ở Thăng Long. Nhà Lê được khôi phục ở phía Nam (Lê Trung Hưng) tạo nên cục diện Nam – Bắc triều.',
    },
  ],
  'le-trung-hung': [
    {
      id: 'trinh-nguyen-phan-tranh',
      year: 1627,
      yearLabel: '1627 – 1672',
      title: 'Trịnh – Nguyễn phân tranh',
      summary: 'Sông Gianh chia cắt Đàng Trong – Đàng Ngoài.',
      detail:
        'Chúa Trịnh (Đàng Ngoài) và chúa Nguyễn (Đàng Trong) giao tranh nhiều lần, lấy sông Gianh làm ranh giới. Đất nước bị chia cắt kéo dài, dù trên danh nghĩa vẫn là vua Lê.',
    },
    {
      id: 'mo-coi-phuong-nam',
      year: 1698,
      yearLabel: 'TK XVII – XVIII',
      title: 'Mở cõi về phương Nam',
      summary: 'Chúa Nguyễn khai phá vùng đất Nam Bộ.',
      detail:
        'Các chúa Nguyễn tổ chức di dân, khai hoang và xác lập chủ quyền trên vùng đất phương Nam, trong đó có việc lập phủ Gia Định (1698), mở rộng lãnh thổ tới đồng bằng sông Cửu Long.',
    },
  ],
  'tay-son': [
    {
      id: 'khoi-nghia-tay-son',
      year: 1771,
      yearLabel: '1771',
      title: 'Khởi nghĩa Tây Sơn',
      summary: 'Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ.',
      detail:
        'Phong trào Tây Sơn bùng nổ ở Bình Định, lật đổ ách thống trị của chúa Nguyễn ở Đàng Trong, rồi tiến ra Bắc, chấm dứt cục diện vua Lê – chúa Trịnh.',
    },
    {
      id: 'rach-gam-xoai-mut',
      year: 1785,
      yearLabel: '1785',
      title: 'Chiến thắng Rạch Gầm – Xoài Mút',
      summary: 'Đánh tan 5 vạn quân Xiêm.',
      detail:
        'Năm 1785, Nguyễn Huệ chỉ huy đánh tan 5 vạn quân Xiêm trên sông Tiền (đoạn Rạch Gầm – Xoài Mút), bảo vệ vững chắc vùng đất phương Nam.',
    },
    {
      id: 'ngoc-hoi-dong-da',
      year: 1789,
      yearLabel: '1789',
      title: 'Đại phá quân Thanh – Ngọc Hồi – Đống Đa',
      summary: 'Quang Trung hành quân thần tốc Tết Kỷ Dậu.',
      detail:
        'Tết Kỷ Dậu 1789, Quang Trung – Nguyễn Huệ hành quân thần tốc ra Bắc, đại phá 29 vạn quân Thanh trong các trận Ngọc Hồi, Đống Đa chỉ trong mấy ngày. Một trong những chiến công hiển hách nhất lịch sử dân tộc.',
    },
  ],
  nguyen: [
    {
      id: 'gia-long-thong-nhat',
      year: 1802,
      yearLabel: '1802',
      title: 'Gia Long thống nhất đất nước',
      summary: 'Lập nhà Nguyễn, đóng đô ở Huế.',
      detail:
        'Năm 1802, Nguyễn Ánh đánh bại Tây Sơn, lên ngôi lấy niên hiệu Gia Long, lập nhà Nguyễn, thống nhất đất nước từ Bắc chí Nam, đóng đô ở Phú Xuân (Huế).',
    },
    {
      id: 'quoc-hieu-viet-nam',
      year: 1804,
      yearLabel: '1804',
      title: 'Đặt quốc hiệu Việt Nam',
      summary: 'Tên gọi Việt Nam chính thức.',
      detail:
        'Năm 1804, quốc hiệu Việt Nam được đặt chính thức dưới triều Gia Long — tên gọi gắn bó với đất nước cho đến ngày nay.',
    },
    {
      id: 'phap-no-sung',
      year: 1858,
      yearLabel: '1858',
      title: 'Pháp nổ súng xâm lược',
      summary: 'Liên quân Pháp – Tây Ban Nha đánh Đà Nẵng.',
      detail:
        'Năm 1858, liên quân Pháp – Tây Ban Nha nổ súng tấn công Đà Nẵng, mở đầu quá trình xâm lược của thực dân Pháp, đẩy nhà Nguyễn vào thế mất dần chủ quyền.',
    },
  ],
  'phap-thuoc': [
    {
      id: 'hoa-uoc-1884',
      year: 1884,
      yearLabel: '1884',
      title: 'Hòa ước Patenôtre',
      summary: 'Việt Nam thành thuộc địa, bảo hộ của Pháp.',
      detail:
        'Hòa ước Patenôtre (1884) xác lập ách đô hộ của thực dân Pháp, chia nước ta thành ba kỳ với chế độ cai trị khác nhau, mở đầu thời kỳ Pháp thuộc kéo dài.',
    },
    {
      id: 'can-vuong',
      year: 1885,
      yearLabel: '1885 – 1896',
      title: 'Phong trào Cần Vương',
      summary: 'Văn thân, sĩ phu phò vua cứu nước.',
      detail:
        'Sau chiếu Cần Vương của vua Hàm Nghi, các cuộc khởi nghĩa của văn thân, sĩ phu nổ ra khắp nơi (Ba Đình, Bãi Sậy, Hương Khê) chống thực dân Pháp, thể hiện tinh thần yêu nước bền bỉ.',
    },
    {
      id: 'dang-cong-san',
      year: 1930,
      yearLabel: '1930',
      title: 'Đảng Cộng sản Việt Nam ra đời',
      summary: 'Nguyễn Ái Quốc thống nhất các tổ chức cộng sản.',
      detail:
        'Ngày 3/2/1930, dưới sự chủ trì của Nguyễn Ái Quốc, Đảng Cộng sản Việt Nam ra đời, thống nhất các tổ chức cộng sản, mở ra đường lối mới cho cách mạng giải phóng dân tộc.',
    },
  ],
  vndcch: [
    {
      id: 'cach-mang-thang-tam',
      year: 1945,
      yearLabel: '8 – 1945',
      title: 'Cách mạng Tháng Tám',
      summary: 'Tổng khởi nghĩa giành chính quyền.',
      detail:
        'Tháng 8/1945, nhân dân cả nước tổng khởi nghĩa giành chính quyền thành công, lật đổ ách thống trị của thực dân – phong kiến, mở ra kỷ nguyên độc lập, tự do.',
    },
    {
      id: 'tuyen-ngon-doc-lap',
      year: 1945,
      yearLabel: '2/9/1945',
      title: 'Tuyên ngôn Độc lập',
      summary: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      detail:
        'Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa — nhà nước công nông đầu tiên ở Đông Nam Á.',
    },
    {
      id: 'dien-bien-phu',
      year: 1954,
      yearLabel: '1954',
      title: 'Chiến thắng Điện Biên Phủ',
      summary: '"Lừng lẫy năm châu, chấn động địa cầu".',
      detail:
        'Chiến dịch Điện Biên Phủ (1954) kết thúc thắng lợi cuộc kháng chiến chống Pháp, buộc Pháp ký Hiệp định Genève. Đây là chiến thắng có ý nghĩa quốc tế, cổ vũ phong trào giải phóng dân tộc toàn thế giới.',
    },
    {
      id: 'thong-nhat-1975',
      year: 1975,
      yearLabel: '30/4/1975',
      title: 'Giải phóng miền Nam, thống nhất đất nước',
      summary: 'Chiến dịch Hồ Chí Minh toàn thắng.',
      detail:
        'Ngày 30/4/1975, Chiến dịch Hồ Chí Minh toàn thắng, giải phóng hoàn toàn miền Nam, kết thúc cuộc kháng chiến chống Mỹ, non sông thu về một mối.',
    },
  ],
  chxhcn: [
    {
      id: 'thong-nhat-dat-nuoc',
      year: 1976,
      yearLabel: '1976',
      title: 'Thống nhất đất nước về mặt nhà nước',
      summary: 'Đổi tên thành CHXHCN Việt Nam.',
      detail:
        'Năm 1976, Quốc hội khóa VI quyết định đổi tên nước thành Cộng hòa Xã hội chủ nghĩa Việt Nam, thống nhất đất nước về mặt nhà nước sau khi non sông liền một dải.',
    },
    {
      id: 'doi-moi-1986',
      year: 1986,
      yearLabel: '1986',
      title: 'Công cuộc Đổi mới',
      summary: 'Chuyển sang kinh tế thị trường định hướng XHCN.',
      detail:
        'Đại hội VI (1986) khởi xướng công cuộc Đổi mới, chuyển từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường định hướng xã hội chủ nghĩa, đưa đất nước thoát khủng hoảng và phát triển.',
    },
    {
      id: 'hoi-nhap',
      year: 2007,
      yearLabel: '1995 – nay',
      title: 'Hội nhập quốc tế',
      summary: 'Gia nhập ASEAN, WTO và các hiệp định lớn.',
      detail:
        'Việt Nam gia nhập ASEAN (1995), bình thường hóa quan hệ với Hoa Kỳ, gia nhập WTO (2007) và nhiều hiệp định thương mại tự do, hội nhập sâu rộng và nâng cao vị thế trên trường quốc tế.',
    },
  ],
}

export function getEvents(periodId: string): HistoryEvent[] {
  return eventsByPeriod[periodId] ?? []
}

export function getEventById(
  periodId: string,
  eventId: string,
): HistoryEvent | undefined {
  return getEvents(periodId).find((e) => e.id === eventId)
}
