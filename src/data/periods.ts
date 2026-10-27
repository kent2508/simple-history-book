export type Era = 'ancient' | 'bacthuoc' | 'dynastic' | 'colonial' | 'modern'

export interface Period {
  /** Định danh duy nhất, dùng cho key và URL */
  id: string
  /** Tên triều đại / thời kỳ */
  name: string
  /** Mốc thời gian hiển thị, ví dụ "1009 – 1225" */
  years: string
  /** Năm bắt đầu (số âm nếu TCN) dùng để sắp xếp */
  startYear: number
  /** Nhóm giai đoạn lớn để tô màu và lọc */
  era: Era
  /** Mô tả ngắn hiển thị trên dòng thời gian */
  summary: string
  /** Nội dung chi tiết hiển thị ở trang riêng của triều đại */
  detail: string
}

/**
 * Các triều đại / thời kỳ lịch sử Việt Nam, mỗi triều đại là một mốc riêng,
 * sắp xếp theo thứ tự thời gian. Phân kỳ theo sách giáo khoa lịch sử Việt Nam.
 */
export const periods: Period[] = [
  {
    id: 'van-lang',
    name: 'Nhà nước Văn Lang',
    years: '~2879 – 258 TCN',
    startYear: -2879,
    era: 'ancient',
    summary: 'Nhà nước đầu tiên của người Việt do các vua Hùng đứng đầu.',
    detail:
      'Văn Lang là nhà nước đầu tiên trong lịch sử Việt Nam, do các vua Hùng đứng đầu, kinh đô đặt ở Phong Châu (Phú Thọ ngày nay). Cư dân Lạc Việt làm nông nghiệp lúa nước, đúc trống đồng Đông Sơn và hình thành nền văn minh sông Hồng rực rỡ.',
  },
  {
    id: 'au-lac',
    name: 'Nhà nước Âu Lạc',
    years: '257 – 208 TCN',
    startYear: -257,
    era: 'ancient',
    summary: 'An Dương Vương hợp nhất Âu Việt và Lạc Việt, xây thành Cổ Loa.',
    detail:
      'An Dương Vương Thục Phán hợp nhất hai bộ tộc Âu Việt và Lạc Việt lập nên nước Âu Lạc, dời đô về Cổ Loa (Đông Anh, Hà Nội). Thành Cổ Loa với vòng xoáy ốc và nỏ Liên Châu là biểu tượng quân sự nổi bật của thời kỳ này.',
  },
  {
    id: 'trieu',
    name: 'Nhà Triệu',
    years: '207 – 111 TCN',
    startYear: -207,
    era: 'ancient',
    summary: 'Triệu Đà lập nước Nam Việt, đóng đô ở Phiên Ngung.',
    detail:
      'Triệu Đà đánh chiếm Âu Lạc, lập nước Nam Việt với kinh đô Phiên Ngung. Vị trí của nhà Triệu trong lịch sử Việt Nam còn nhiều tranh luận, nhưng thường được xem là bản lề trước khi đất nước rơi vào thời Bắc thuộc.',
  },
  {
    id: 'bac-thuoc',
    name: 'Thời Bắc thuộc',
    years: '111 TCN – 938',
    startYear: -111,
    era: 'bacthuoc',
    summary:
      'Hơn một nghìn năm chống ách đô hộ phương Bắc với nhiều cuộc khởi nghĩa.',
    detail:
      'Từ khi nhà Hán thôn tính Nam Việt, dân tộc Việt trải qua hơn một nghìn năm Bắc thuộc. Đây là thời kỳ của các cuộc khởi nghĩa oanh liệt: Hai Bà Trưng (40–43), Bà Triệu (248), Lý Bí lập nước Vạn Xuân (544), Mai Thúc Loan, Phùng Hưng... giữ gìn bản sắc và ý chí độc lập.',
  },
  {
    id: 'ngo',
    name: 'Nhà Ngô',
    years: '939 – 965',
    startYear: 939,
    era: 'dynastic',
    summary: 'Ngô Quyền thắng Bạch Đằng, mở nền độc lập tự chủ.',
    detail:
      'Năm 938, Ngô Quyền đánh tan quân Nam Hán trên sông Bạch Đằng bằng trận địa cọc ngầm, chấm dứt hơn nghìn năm Bắc thuộc. Ông xưng vương, đóng đô ở Cổ Loa, mở ra kỷ nguyên độc lập tự chủ lâu dài của dân tộc.',
  },
  {
    id: 'dinh',
    name: 'Nhà Đinh',
    years: '968 – 980',
    startYear: 968,
    era: 'dynastic',
    summary: 'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, lập nước Đại Cồ Việt.',
    detail:
      'Đinh Bộ Lĩnh dẹp loạn 12 sứ quân, thống nhất đất nước, lên ngôi Hoàng đế (Đinh Tiên Hoàng), đặt quốc hiệu Đại Cồ Việt, đóng đô ở Hoa Lư (Ninh Bình). Đây là lần đầu người đứng đầu nước Việt xưng Đế ngang hàng phương Bắc.',
  },
  {
    id: 'tien-le',
    name: 'Nhà Tiền Lê',
    years: '980 – 1009',
    startYear: 980,
    era: 'dynastic',
    summary: 'Lê Hoàn đánh bại quân Tống, giữ vững nền độc lập.',
    detail:
      'Lê Hoàn (Lê Đại Hành) lên ngôi trong bối cảnh quân Tống xâm lược, đã lãnh đạo kháng chiến thắng lợi năm 981, tiếp tục giữ vững nền độc lập của Đại Cồ Việt và phát triển kinh tế, ngoại giao.',
  },
  {
    id: 'ly',
    name: 'Nhà Lý',
    years: '1009 – 1225',
    startYear: 1009,
    era: 'dynastic',
    summary: 'Dời đô về Thăng Long, đặt quốc hiệu Đại Việt.',
    detail:
      'Lý Thái Tổ dời đô từ Hoa Lư về Thăng Long (1010), mở thời kỳ phát triển rực rỡ. Quốc hiệu đổi thành Đại Việt (1054). Lý Thường Kiệt kháng Tống với bài thơ "Nam quốc sơn hà". Văn Miếu – Quốc Tử Giám và Phật giáo hưng thịnh.',
  },
  {
    id: 'tran',
    name: 'Nhà Trần',
    years: '1225 – 1400',
    startYear: 1225,
    era: 'dynastic',
    summary: 'Ba lần đánh bại quân Nguyên – Mông với hào khí Đông A.',
    detail:
      'Nhà Trần nổi tiếng với ba lần đánh bại đế quốc Nguyên – Mông (1258, 1285, 1288), đỉnh cao là trận Bạch Đằng do Trần Hưng Đạo chỉ huy. Hào khí Đông A, Hội nghị Diên Hồng và Hịch tướng sĩ là biểu tượng tinh thần của thời kỳ này.',
  },
  {
    id: 'ho',
    name: 'Nhà Hồ',
    years: '1400 – 1407',
    startYear: 1400,
    era: 'dynastic',
    summary: 'Hồ Quý Ly cải cách, đổi quốc hiệu Đại Ngu.',
    detail:
      'Hồ Quý Ly lập nhà Hồ, đổi quốc hiệu Đại Ngu, dời đô vào Thanh Hóa (Thành Nhà Hồ), tiến hành nhiều cải cách táo bạo về tiền tệ, ruộng đất, giáo dục. Tuy nhiên triều đại nhanh chóng thất thủ trước quân Minh năm 1407.',
  },
  {
    id: 'hau-le',
    name: 'Nhà Hậu Lê',
    years: '1428 – 1527',
    startYear: 1428,
    era: 'dynastic',
    summary: 'Lê Lợi khởi nghĩa Lam Sơn; thời Lê Thánh Tông thịnh trị.',
    detail:
      'Sau 10 năm khởi nghĩa Lam Sơn, Lê Lợi đánh đuổi quân Minh, lập nhà Hậu Lê (Lê sơ). Thời Lê Thánh Tông là đỉnh cao thịnh trị với bộ luật Hồng Đức, bản đồ Hồng Đức và nền khoa cử phát triển.',
  },
  {
    id: 'mac',
    name: 'Nhà Mạc',
    years: '1527 – 1592',
    startYear: 1527,
    era: 'dynastic',
    summary: 'Mạc Đăng Dung lập triều Mạc, mở thời Nam – Bắc triều.',
    detail:
      'Mạc Đăng Dung phế nhà Lê lập nhà Mạc, đóng đô ở Thăng Long. Nhà Lê được khôi phục ở phía Nam (Lê Trung Hưng) tạo nên cục diện Nam – Bắc triều kéo dài hàng chục năm nội chiến.',
  },
  {
    id: 'le-trung-hung',
    name: 'Lê Trung Hưng (Trịnh – Nguyễn)',
    years: '1533 – 1789',
    startYear: 1533,
    era: 'dynastic',
    summary: 'Vua Lê – chúa Trịnh ở Đàng Ngoài, chúa Nguyễn ở Đàng Trong.',
    detail:
      'Nhà Lê được trung hưng nhưng thực quyền nằm trong tay chúa Trịnh (Đàng Ngoài) và chúa Nguyễn (Đàng Trong). Sông Gianh chia cắt đất nước. Thời kỳ này gắn với công cuộc mở cõi về phương Nam của các chúa Nguyễn.',
  },
  {
    id: 'tay-son',
    name: 'Nhà Tây Sơn',
    years: '1778 – 1802',
    startYear: 1778,
    era: 'dynastic',
    summary: 'Quang Trung đại phá quân Thanh trận Ngọc Hồi – Đống Đa.',
    detail:
      'Ba anh em Tây Sơn lật đổ chúa Nguyễn, chúa Trịnh và vua Lê. Nguyễn Huệ – Quang Trung đại phá 29 vạn quân Thanh trong trận Ngọc Hồi – Đống Đa Tết Kỷ Dậu 1789, một trong những chiến công hiển hách nhất lịch sử.',
  },
  {
    id: 'nguyen',
    name: 'Nhà Nguyễn',
    years: '1802 – 1945',
    startYear: 1802,
    era: 'dynastic',
    summary: 'Gia Long thống nhất đất nước, đặt quốc hiệu Việt Nam.',
    detail:
      'Nguyễn Ánh (Gia Long) đánh bại Tây Sơn, thống nhất đất nước, lập nhà Nguyễn, đóng đô ở Huế, đặt quốc hiệu Việt Nam (1804). Đây là triều đại phong kiến cuối cùng, về sau mất dần chủ quyền vào tay thực dân Pháp.',
  },
  {
    id: 'phap-thuoc',
    name: 'Thời Pháp thuộc',
    years: '1858 – 1945',
    startYear: 1858,
    era: 'colonial',
    summary: 'Thực dân Pháp xâm lược và cai trị; phong trào yêu nước dấy lên.',
    detail:
      'Thực dân Pháp nổ súng ở Đà Nẵng (1858), từng bước biến Việt Nam thành thuộc địa. Các phong trào yêu nước nối tiếp nhau: Cần Vương, Đông Du, Duy Tân... đến khi Đảng Cộng sản Việt Nam ra đời (1930) lãnh đạo cách mạng giải phóng dân tộc.',
  },
  {
    id: 'vndcch',
    name: 'Việt Nam Dân chủ Cộng hòa',
    years: '1945 – 1976',
    startYear: 1945,
    era: 'modern',
    summary: 'Cách mạng Tháng Tám; kháng chiến chống Pháp và chống Mỹ.',
    detail:
      'Cách mạng Tháng Tám 1945 thành công, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa. Dân tộc tiến hành hai cuộc kháng chiến trường kỳ chống Pháp (đỉnh cao Điện Biên Phủ 1954) và chống Mỹ, thống nhất đất nước năm 1975.',
  },
  {
    id: 'chxhcn',
    name: 'CHXHCN Việt Nam',
    years: '1976 – nay',
    startYear: 1976,
    era: 'modern',
    summary: 'Đất nước thống nhất, Đổi mới và hội nhập quốc tế.',
    detail:
      'Năm 1976 đất nước thống nhất, đổi tên thành Cộng hòa Xã hội chủ nghĩa Việt Nam. Công cuộc Đổi mới từ năm 1986 đưa Việt Nam phát triển kinh tế, hội nhập sâu rộng với thế giới và vươn lên mạnh mẽ cho đến ngày nay.',
  },
]

export const eraLabel: Record<Era, string> = {
  ancient: 'Dựng nước',
  bacthuoc: 'Bắc thuộc',
  dynastic: 'Phong kiến tự chủ',
  colonial: 'Thuộc địa',
  modern: 'Hiện đại',
}

export function getPeriodById(id: string): Period | undefined {
  return periods.find((p) => p.id === id)
}
