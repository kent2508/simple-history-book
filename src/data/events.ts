import type { HistoryEvent } from './periods'

/**
 * Các sự kiện / mốc thời gian nổi bật trong từng triều đại.
 * Khóa là `id` của triều đại trong `periods.ts`.
 * Mỗi sự kiện có trang chi tiết riêng tại /period/:id/event/:eventId
 */
export const eventsByPeriod: Record<string, HistoryEvent[]> = {
  'van-lang': [
    {
      id: 'kinh-duong-vuong',
      year: -2879,
      yearLabel: '2879 TCN',
      title: 'Kinh Dương Vương lập nước Xích Quỷ',
      summary: 'Mốc khởi đầu theo truyền thống, chưa được khảo cổ xác nhận.',
      detail:
        'Theo truyền thuyết, Kinh Dương Vương lập nước Xích Quỷ. Đây là mốc khởi đầu thường được nhắc đến trong truyền thống lịch sử, chưa được khảo cổ học xác nhận.',
    },
    {
      id: 'lac-long-quan-au-co',
      year: -2800,
      yearLabel: 'Thời kỳ Lạc Long Quân – Âu Cơ',
      title: 'Truyền thuyết Con Rồng cháu Tiên',
      summary: 'Bọc trăm trứng nở thành 100 người con.',
      detail:
        'Truyền thuyết Con Rồng cháu Tiên: Lạc Long Quân và Âu Cơ sinh ra một bọc trăm trứng, nở thành 100 người con, biểu tượng cho nguồn gốc chung và tinh thần đoàn kết của người Việt.',
    },
    {
      id: 'hinh-thanh-van-lang',
      year: -700,
      yearLabel: 'Khoảng thế kỷ VII TCN',
      title: 'Hình thành nhà nước Văn Lang',
      summary: 'Thủ lĩnh đứng đầu lấy hiệu Hùng Vương.',
      detail:
        'Nhà nước Văn Lang được hình thành theo cách định niên đại của một số nghiên cứu lịch sử; thủ lĩnh đứng đầu lấy hiệu Hùng Vương.',
    },
    {
      id: 'kinh-do-phong-chau',
      year: -690,
      yearLabel: 'Thời kỳ các Vua Hùng',
      title: 'Kinh đô Phong Châu',
      summary: 'Trung tâm Văn Lang ở vùng Việt Trì, Phú Thọ ngày nay.',
      detail:
        'Văn Lang được cho là có kinh đô tại Phong Châu, thuộc khu vực Việt Trì, Phú Thọ ngày nay; lãnh thổ gồm nhiều bộ lạc người Lạc Việt.',
    },
    {
      id: 'nong-nghiep-lua-nuoc',
      year: -680,
      yearLabel: 'Trong thời kỳ Văn Lang',
      title: 'Nông nghiệp lúa nước & tổ chức xã hội',
      summary: 'Xây dựng làng xóm, quản lý xã hội sơ khai.',
      detail:
        'Nông nghiệp trồng lúa nước phát triển; cư dân xây dựng làng xóm, tổ chức cộng đồng và từng bước hình thành các hình thức quản lý xã hội sơ khai.',
    },
    {
      id: 'van-hoa-dong-son',
      year: -650,
      yearLabel: 'Khoảng thế kỷ VII–III TCN',
      title: 'Văn hóa Đông Sơn & trống đồng',
      summary: 'Nghề đúc đồng, tiêu biểu là trống đồng Đông Sơn.',
      detail:
        'Văn hóa Đông Sơn phát triển với nghề đúc đồng, chế tác công cụ và vũ khí, tiêu biểu là trống đồng Đông Sơn. Đây là một trong những cơ sở khảo cổ quan trọng để nghiên cứu xã hội người Việt cổ.',
    },
    {
      id: 'thanh-giong',
      year: -300,
      yearLabel: 'Giai đoạn cuối thời Văn Lang',
      title: 'Truyền thuyết Thánh Gióng',
      summary: 'Hùng Vương thứ VI gắn với chuyện đánh giặc Ân.',
      detail:
        'Theo truyền thuyết lịch sử, đời Hùng Vương thứ VI gắn với câu chuyện Thánh Gióng đánh giặc Ân. Đây là truyền thuyết tiêu biểu về tinh thần chống ngoại xâm, không phải sự kiện đã được xác nhận đầy đủ bằng tư liệu đương thời.',
    },
    {
      id: 'thuc-phan-chiem-van-lang',
      year: -258,
      yearLabel: '258 TCN',
      title: 'Thục Phán chấm dứt thời kỳ Văn Lang',
      summary: 'Đánh bại Hùng Vương thứ XVIII, lập nước Âu Lạc.',
      detail:
        'Theo niên đại truyền thống, Thục Phán đánh bại Hùng Vương thứ XVIII, chấm dứt thời kỳ Văn Lang và lập nước Âu Lạc.',
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
        'Theo niên đại truyền thống, Thục Phán đánh bại vua Hùng cuối cùng, hợp nhất người Âu Việt và Lạc Việt, lập nước Âu Lạc và xưng là An Dương Vương.',
    },
    {
      id: 'dinh-do-co-loa',
      year: -256,
      yearLabel: 'Sau khi lập nước',
      title: 'Định đô ở Cổ Loa',
      summary: 'Trung tâm chính trị và quân sự của nước Âu Lạc.',
      detail:
        'An Dương Vương chọn Cổ Loa (nay thuộc Đông Anh, Hà Nội) làm kinh đô, xây dựng trung tâm chính trị và quân sự của nước Âu Lạc.',
    },
    {
      id: 'thanh-co-loa',
      year: -215,
      yearLabel: 'Khoảng cuối thế kỷ III TCN',
      title: 'Xây dựng thành Cổ Loa',
      summary: 'Hệ thống thành đất, hào nước và công trình phòng thủ.',
      detail:
        'Thành Cổ Loa được xây dựng và củng cố với hệ thống thành đất, hào nước và các công trình phòng thủ. Đây là một công trình quân sự tiêu biểu của thời kỳ cổ đại Việt Nam.',
    },
    {
      id: 'tan-tien-phuong-nam',
      year: -214,
      yearLabel: '214 TCN',
      title: 'Nhà Tần tiến quân xuống phương Nam',
      summary: 'Chinh phục các vùng đất của người Bách Việt.',
      detail:
        'Nhà Tần mở cuộc tiến quân xuống phương Nam, chinh phục các vùng đất của người Bách Việt. Cuộc bành trướng này dẫn đến xung đột kéo dài với các cộng đồng cư dân bản địa.',
    },
    {
      id: 'khang-chien-chong-tan',
      year: -213,
      yearLabel: 'Khoảng 214 – 208 TCN',
      title: 'Kháng chiến chống quân Tần',
      summary: 'Thục Phán cùng cư dân Tây Âu, Lạc Việt chống Tần.',
      detail:
        'Theo một số tài liệu lịch sử Việt Nam, Thục Phán cùng các thủ lĩnh và cư dân Tây Âu, Lạc Việt lãnh đạo cuộc kháng chiến chống quân Tần. Các nguồn sử liệu có khác biệt về diễn biến và cách xác định niên đại của cuộc chiến.',
    },
    {
      id: 'no-than-kim-quy',
      year: -212,
      yearLabel: 'Thời An Dương Vương',
      title: 'Kỹ thuật quân sự & truyền thuyết nỏ thần',
      summary: 'Chế tạo nỏ và mũi tên đồng; truyền thuyết thần Kim Quy.',
      detail:
        'Kỹ thuật quân sự phát triển, tiêu biểu là việc chế tạo và sử dụng nỏ cùng các mũi tên đồng. Truyền thuyết dân gian gắn thành Cổ Loa với nỏ thần và thần Kim Quy.',
    },
    {
      id: 'ket-thuc-khang-chien-tan',
      year: -208,
      yearLabel: '208 TCN',
      title: 'Mốc kết thúc kháng chiến chống Tần',
      summary: 'Niên đại truyền thống có nhiều cách xác định khác nhau.',
      detail:
        'Theo một cách xác định niên đại, đây là mốc kết thúc cuộc kháng chiến chống Tần và gắn với sự hình thành Âu Lạc. Một số niên biểu truyền thống khác lại lấy năm này làm mốc kết thúc thời kỳ trị vì của An Dương Vương.',
    },
    {
      id: 'my-chau-trong-thuy',
      year: -207,
      yearLabel: 'Cuối thời Âu Lạc – theo truyền thuyết',
      title: 'Truyền thuyết Mỵ Châu – Trọng Thủy',
      summary: 'Bài học cảnh giác và bảo vệ đất nước.',
      detail:
        'Truyện Mỵ Châu – Trọng Thủy kể về việc Trọng Thủy lấy cắp bí mật nỏ thần, dẫn đến thất bại của An Dương Vương trước Triệu Đà. Câu chuyện phản ánh bài học về cảnh giác và bảo vệ đất nước, nhưng không thể xem toàn bộ tình tiết là sự kiện đã được xác minh.',
    },
  ],
  trieu: [
    {
      id: 'lap-nam-viet',
      year: -207,
      yearLabel: '207 TCN',
      title: 'Triệu Đà lập nước Nam Việt',
      summary: 'Xưng Nam Việt Vũ Vương, đóng đô ở Phiên Ngung.',
      detail:
        'Triệu Đà vốn là quan nhà Tần, giữ chức úy quận Nam Hải. Khi nhà Tần suy sụp, ông cắt đứt đường liên lạc với phương Bắc, chiếm các quận Quế Lâm, Tượng quận, lập nước Nam Việt và xưng Nam Việt Vũ Vương, đóng đô ở Phiên Ngung (Quảng Châu, Trung Quốc ngày nay). Đại Việt sử ký toàn thư lấy năm 207 TCN làm năm đầu nhà Triệu; nhiều nghiên cứu hiện đại xác định việc lập nước diễn ra khoảng 204 TCN. Vì Triệu Đà là người Hán, từ thời Ngô Thì Sĩ nhiều sử gia không coi nhà Triệu là một triều đại chính thống của người Việt.',
    },
    {
      id: 'sap-nhap-au-lac',
      year: -207,
      yearLabel: '207 TCN (theo Toàn thư)',
      title: 'Nam Việt sáp nhập Âu Lạc',
      summary: 'An Dương Vương thất bại, Âu Lạc thuộc Nam Việt.',
      detail:
        'Theo sử sách truyền thống Việt Nam, Triệu Đà đánh bại An Dương Vương và sáp nhập Âu Lạc vào Nam Việt, gắn với truyền thuyết Mỵ Châu – Trọng Thủy. Sử ký của Tư Mã Thiên lại chép rằng Triệu Đà chỉ khống chế được đất Âu Lạc (Tây Âu, Lạc) bằng uy thế quân sự và của cải sau năm 180 TCN. Niên đại chính xác của sự kiện vì vậy vẫn còn tranh luận.',
    },
    {
      id: 'luc-gia-lan-1',
      year: -196,
      yearLabel: '196 TCN',
      title: 'Lục Giả sang sứ lần thứ nhất',
      summary: 'Hán Cao Tổ phong Triệu Đà làm Nam Việt Vương.',
      detail:
        'Hán Cao Tổ sai Lục Giả sang Nam Việt, trao ấn phong Triệu Đà làm Nam Việt Vương. Triệu Đà nhận phong, chấp nhận làm phiên thuộc trên danh nghĩa, đổi lại nhà Hán không đem quân đánh và hai bên mở việc buôn bán.',
    },
    {
      id: 'xung-de',
      year: -183,
      yearLabel: '183 TCN',
      title: 'Triệu Đà xưng Nam Việt Vũ Đế',
      summary: 'Phản ứng lệnh cấm buôn bán đồ sắt của Lã Hậu.',
      detail:
        'Lã Hậu nắm quyền ở nhà Hán, ra lệnh cấm bán đồ sắt, ngựa, trâu, dê cái sang Nam Việt. Triệu Đà cho rằng đây là âm mưu làm suy yếu nước mình, bèn tự xưng hoàng đế (Nam Việt Vũ Đế), đặt mình ngang hàng với hoàng đế nhà Hán.',
    },
    {
      id: 'danh-truong-sa',
      year: -181,
      yearLabel: '181 – 180 TCN',
      title: 'Xung đột với nhà Hán ở Trường Sa',
      summary: 'Quân Hán gặp dịch bệnh, phải rút khi Lã Hậu mất.',
      detail:
        'Triệu Đà đem quân đánh vùng biên quận Trường Sa của nhà Hán, phá mấy huyện rồi rút về. Lã Hậu sai Long Lự hầu Chu Táo đem quân đánh Nam Việt, nhưng gặp lúc nắng nóng, ẩm thấp, binh lính mắc dịch bệnh nặng nên không vượt được dãy Ngũ Lĩnh. Hơn một năm sau Lã Hậu mất, quân Hán bãi binh.',
    },
    {
      id: 'giao-chi-cuu-chan',
      year: -180,
      yearLabel: 'Khoảng sau 180 TCN',
      title: 'Đặt quận Giao Chỉ và Cửu Chân',
      summary: 'Chia đất Âu Lạc cũ, đặt hai điển sứ cai quản.',
      detail:
        'Triệu Đà chia vùng đất Âu Lạc cũ thành hai quận Giao Chỉ (đồng bằng Bắc Bộ) và Cửu Chân (Thanh Hóa – Nghệ Tĩnh), đặt hai điển sứ trông coi. Việc cai quản trực tiếp ở các địa phương phần lớn vẫn do các Lạc tướng người Việt đảm nhận, nên tổ chức xã hội cũ chưa bị xáo trộn nhiều.',
    },
    {
      id: 'luc-gia-lan-2',
      year: -179,
      yearLabel: '179 TCN',
      title: 'Lục Giả sang sứ lần thứ hai',
      summary: 'Triệu Đà bỏ đế hiệu khi giao thiệp với nhà Hán.',
      detail:
        'Hán Văn Đế lên ngôi, cho sửa sang mộ tổ của Triệu Đà ở Chân Định và trọng đãi họ hàng ông, rồi sai Lục Giả mang thư sang Nam Việt. Triệu Đà viết thư tạ lỗi, bỏ đế hiệu và xưng thần với nhà Hán. Tuy vậy, sử sách chép rằng ở trong nước ông vẫn giữ danh hiệu hoàng đế.',
    },
    {
      id: 'trieu-da-mat',
      year: -137,
      yearLabel: '137 TCN',
      title: 'Triệu Đà mất, Triệu Văn Vương nối ngôi',
      summary: 'Cháu nội Triệu Hồ (Triệu Muội) lên ngôi.',
      detail:
        'Triệu Đà qua đời sau thời gian trị vì rất dài (sử truyền thống chép ông thọ trên 100 tuổi). Cháu nội là Triệu Hồ lên ngôi, tức Triệu Văn Vương; một số sử liệu chép tên là Triệu Muội.',
    },
    {
      id: 'man-viet-tan-cong',
      year: -135,
      yearLabel: '135 TCN',
      title: 'Mân Việt đánh Nam Việt',
      summary: 'Văn Vương cầu cứu nhà Hán, gửi thái tử sang Trường An.',
      detail:
        'Nước Mân Việt đem quân đánh vùng biên Nam Việt. Văn Vương không tự kháng cự mà dâng thư nhờ nhà Hán. Hán Vũ Đế sai quân đánh Mân Việt; để đáp lễ, Văn Vương gửi thái tử Anh Tề sang Trường An làm túc vệ. Sự kiện cho thấy Nam Việt ngày càng lệ thuộc vào nhà Hán.',
    },
    {
      id: 'minh-vuong',
      year: -125,
      yearLabel: '125 TCN (theo Toàn thư)',
      title: 'Triệu Minh Vương lên ngôi',
      summary: 'Thái tử Anh Tề từ Trường An về nối ngôi.',
      detail:
        'Văn Vương mất, thái tử Anh Tề từ Trường An về nối ngôi, tức Triệu Minh Vương. Khi ở Trường An, Anh Tề đã lấy một người con gái họ Cù quê ở Hàm Đan và sinh con trai là Triệu Hưng. Sử ký chép Văn Vương mất khoảng năm 122 TCN. Lăng mộ của Văn Vương được phát hiện năm 1983 tại Quảng Châu, nay là Bảo tàng lăng mộ vua Nam Việt.',
    },
    {
      id: 'ai-vuong',
      year: -113,
      yearLabel: '113 TCN (theo Toàn thư)',
      title: 'Triệu Ai Vương và Cù Thái hậu',
      summary: 'Cù Thái hậu muốn đưa Nam Việt nội thuộc nhà Hán.',
      detail:
        'Minh Vương mất, con là Triệu Hưng còn nhỏ lên ngôi (Ai Vương), mẹ là Cù Thái hậu nắm quyền. Nhà Hán sai An Quốc Thiếu Quý sang dụ Nam Việt vào chầu. Cù Thái hậu cùng nhóm thân Hán xin cho Nam Việt nội thuộc như các chư hầu trong nước, bỏ các cửa ải biên giới. Việc này vấp phải sự phản đối của thừa tướng Lữ Gia và nhiều quan lại.',
    },
    {
      id: 'lu-gia-chinh-bien',
      year: -112,
      yearLabel: '112 TCN',
      title: 'Lữ Gia làm chính biến',
      summary: 'Giết Ai Vương, Cù Thái hậu và sứ Hán, lập Triệu Kiến Đức.',
      detail:
        'Thừa tướng Lữ Gia, người đã phò ba đời vua, cầm quân giết Ai Vương, Cù Thái hậu và sứ giả nhà Hán, rồi lập Triệu Kiến Đức (con trưởng của Minh Vương với người vợ Việt) lên ngôi, tức Thuật Dương Vương. Đội quân khoảng 2.000 người do Hàn Thiên Thu chỉ huy được nhà Hán phái sang đã bị Lữ Gia đánh tan.',
    },
    {
      id: 'han-thon-tinh',
      year: -111,
      yearLabel: '111 TCN',
      title: 'Nhà Hán thôn tính Nam Việt',
      summary: 'Phiên Ngung thất thủ, Nam Việt bị chia thành chín quận.',
      detail:
        'Hán Vũ Đế sai Lộ Bác Đức và Dương Bộc dẫn khoảng 10 vạn quân chia đường đánh Nam Việt. Kinh đô Phiên Ngung bị phá, Lữ Gia và Triệu Kiến Đức chạy ra biển nhưng bị bắt. Nhà Triệu chấm dứt. Nhà Hán chia đất Nam Việt thành chín quận, trong đó Giao Chỉ, Cửu Chân và Nhật Nam thuộc lãnh thổ Việt Nam ngày nay, mở đầu thời kỳ Bắc thuộc kéo dài hơn một nghìn năm.',
    },
  ],
  'bac-thuoc': [
    {
      id: 'han-dat-quan',
      year: -111,
      yearLabel: '111 TCN',
      title: 'Nhà Hán đặt quận huyện',
      summary: 'Lập ba quận Giao Chỉ, Cửu Chân, Nhật Nam.',
      detail:
        'Sau khi diệt Nam Việt, nhà Hán chia đất thành chín quận, trong đó ba quận Giao Chỉ, Cửu Chân và Nhật Nam thuộc lãnh thổ Việt Nam ngày nay, đặt dưới bộ Giao Chỉ. Ban đầu nhà Hán vẫn để các Lạc tướng cai quản địa phương, chỉ đặt thái thú ở cấp quận để thu cống phẩm.',
    },
    {
      id: 'tich-quang-nham-dien',
      year: 1,
      yearLabel: 'Đầu Công nguyên',
      title: 'Tích Quang, Nhâm Diên và chính sách đồng hóa',
      summary: 'Truyền bá lễ giáo, phong tục và kỹ thuật nhà Hán.',
      detail:
        'Thái thú Giao Chỉ Tích Quang và thái thú Cửu Chân Nhâm Diên mở trường dạy chữ Hán, phổ biến lễ cưới hỏi theo phong tục Hán và khuyến khích dùng cày bừa bằng sắt. Sử Trung Quốc ca ngợi họ, nhưng đây cũng là bước đầu của chính sách đồng hóa, dần thay thế tổ chức và phong tục của người Lạc Việt.',
    },
    {
      id: 'to-dinh',
      year: 34,
      yearLabel: '34',
      title: 'Tô Định làm thái thú Giao Chỉ',
      summary: 'Chính sách tham lam, tàn bạo gây bất bình.',
      detail:
        'Tô Định sang làm thái thú Giao Chỉ, nổi tiếng tham lam, bóc lột nặng nề và đàn áp các Lạc tướng. Sự bất bình của quý tộc và dân chúng người Việt dưới thời Tô Định là nguyên nhân trực tiếp dẫn tới cuộc khởi nghĩa Hai Bà Trưng.',
    },
    {
      id: 'hai-ba-trung',
      year: 40,
      yearLabel: '40 – 43',
      title: 'Khởi nghĩa Hai Bà Trưng',
      summary: 'Trưng Trắc, Trưng Nhị dựng nền độc lập ngắn ngủi.',
      detail:
        'Mùa xuân năm 40, Trưng Trắc cùng em là Trưng Nhị phất cờ khởi nghĩa ở Mê Linh. Nghĩa quân đánh đuổi Tô Định, lấy lại 65 thành ở Giao Chỉ, Cửu Chân, Nhật Nam và Hợp Phố. Trưng Trắc xưng vương, đóng đô ở Mê Linh và miễn thuế hai năm cho dân. Đây là cuộc khởi nghĩa lớn đầu tiên chống Bắc thuộc, biểu tượng cho tinh thần bất khuất của người Việt.',
    },
    {
      id: 'ma-vien-dan-ap',
      year: 42,
      yearLabel: '42 – 43',
      title: 'Mã Viện đàn áp khởi nghĩa',
      summary: 'Trận Lãng Bạc, Cấm Khê; Hai Bà Trưng hy sinh.',
      detail:
        'Nhà Hán sai Mã Viện dẫn quân sang đàn áp. Sau các trận ở Lãng Bạc và Cấm Khê, nghĩa quân thất bại; năm 43 Hai Bà Trưng hy sinh (dân gian truyền rằng hai bà gieo mình xuống sông Hát). Mã Viện sau đó bãi bỏ chế độ Lạc tướng, đặt quan lại người Hán cai trị trực tiếp tới cấp huyện. Chuyện Mã Viện dựng cột đồng đánh dấu biên giới chỉ được chép trong sách sau này, chưa có bằng chứng xác thực.',
    },
    {
      id: 'tuong-lam-lam-ap',
      year: 137,
      yearLabel: '137 – 192',
      title: 'Nổi dậy ở Tượng Lâm, hình thành Lâm Ấp',
      summary: 'Vùng cực nam quận Nhật Nam tách khỏi nhà Hán.',
      detail:
        'Cư dân huyện Tượng Lâm (quận Nhật Nam, nay thuộc miền Trung) nhiều lần nổi dậy chống nhà Hán, lớn nhất là cuộc nổi dậy năm 137 do Khu Liên lãnh đạo. Khoảng năm 192, Khu Liên giết huyện lệnh, lập nên nước Lâm Ấp. Đây là tiền thân của vương quốc Chăm Pa sau này.',
    },
    {
      id: 'chu-dat',
      year: 157,
      yearLabel: '157',
      title: 'Khởi nghĩa Chu Đạt',
      summary: 'Nổi dậy ở Cửu Chân, giết huyện lệnh Cư Phong.',
      detail:
        'Chu Đạt cùng dân huyện Cư Phong (quận Cửu Chân) nổi dậy, giết huyện lệnh, rồi tấn công quận lỵ, giết thái thú Cửu Chân. Cuộc khởi nghĩa thu hút hàng nghìn người trước khi bị quân Hán dập tắt.',
    },
    {
      id: 'luong-long',
      year: 178,
      yearLabel: '178 – 181',
      title: 'Khởi nghĩa Lương Long',
      summary: 'Lan rộng ra Giao Chỉ, Cửu Chân, Nhật Nam, Hợp Phố.',
      detail:
        'Lương Long lãnh đạo cuộc khởi nghĩa ở Giao Chỉ, được dân các quận Cửu Chân, Nhật Nam và Hợp Phố hưởng ứng, chiếm nhiều quận huyện. Năm 181, nhà Hán sai Chu Tuấn đem quân sang đàn áp, khởi nghĩa thất bại.',
    },
    {
      id: 'si-nhiep',
      year: 187,
      yearLabel: '187 – 226',
      title: 'Sĩ Nhiếp cai quản Giao Chỉ',
      summary: 'Luy Lâu trở thành trung tâm Nho học và Phật giáo.',
      detail:
        'Sĩ Nhiếp làm thái thú Giao Chỉ suốt khoảng 40 năm, giữ vùng đất tương đối yên ổn khi phương Bắc loạn lạc thời cuối Hán và Tam Quốc. Trị sở Luy Lâu (Thuận Thành, Bắc Ninh ngày nay) trở thành trung tâm Nho học và Phật giáo lớn. Sử cũ từng tôn ông là "Sĩ Vương", nhưng các sử gia hiện đại xem ông là quan cai trị của chính quyền phương Bắc.',
    },
    {
      id: 'giao-chau',
      year: 203,
      yearLabel: '203',
      title: 'Đổi tên thành Giao Châu',
      summary: 'Bộ Giao Chỉ được đổi gọi là Giao Châu.',
      detail:
        'Nhà Đông Hán đổi bộ Giao Chỉ thành Giao Châu. Tên gọi Giao Châu được dùng trong nhiều thế kỷ sau đó để chỉ vùng đất Việt dưới ách đô hộ.',
    },
    {
      id: 'ngo-tach-giao-chau',
      year: 226,
      yearLabel: '226',
      title: 'Nhà Ngô tách Giao Châu, diệt họ Sĩ',
      summary: 'Lữ Đại giết Sĩ Huy, siết chặt cai trị.',
      detail:
        'Sau khi Sĩ Nhiếp mất, nhà Đông Ngô tách Giao Châu thành Giao Châu và Quảng Châu. Con Sĩ Nhiếp là Sĩ Huy chống lại, bị tướng Ngô Lữ Đại dụ hàng rồi giết. Từ đây chính quyền phương Bắc cai trị trực tiếp và bóc lột nặng nề hơn.',
    },
    {
      id: 'ba-trieu',
      year: 248,
      yearLabel: '248',
      title: 'Khởi nghĩa Bà Triệu',
      summary: '"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ…"',
      detail:
        'Triệu Thị Trinh (Bà Triệu) cùng anh là Triệu Quốc Đạt khởi nghĩa ở vùng núi Nưa, quận Cửu Chân (Thanh Hóa ngày nay), chống ách đô hộ của nhà Ngô. Câu nói "Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở biển Đông…" được truyền lại như biểu tượng ý chí không khuất phục. Nhà Ngô sai Lục Dận đem quân đàn áp, khởi nghĩa thất bại.',
    },
    {
      id: 'ly-truong-nhan',
      year: 468,
      yearLabel: '468 – 485',
      title: 'Lý Trường Nhân, Lý Thúc Hiến tự chủ',
      summary: 'Họ Lý nắm quyền Giao Châu gần 20 năm.',
      detail:
        'Thời nhà Lưu Tống, Lý Trường Nhân giết các quan lại phương Bắc, tự xưng thứ sử Giao Châu. Sau khi ông mất, em họ là Lý Thúc Hiến tiếp tục nắm quyền. Mãi đến năm 485 nhà Nam Tề mới đưa quân sang lấy lại Giao Châu.',
    },
    {
      id: 'ly-bi-khoi-nghia',
      year: 542,
      yearLabel: '542 – 543',
      title: 'Khởi nghĩa Lý Bí',
      summary: 'Đánh đuổi thứ sử Tiêu Tư, đẩy lùi quân Lương.',
      detail:
        'Cuối năm 541 đầu năm 542, Lý Bí liên kết hào kiệt nhiều vùng khởi nghĩa, đánh đuổi thứ sử Giao Châu Tiêu Tư. Năm 542 và 543, nghĩa quân đánh bại các đợt phản công của nhà Lương, làm chủ Giao Châu.',
    },
    {
      id: 'ly-bi-van-xuan',
      year: 544,
      yearLabel: '544',
      title: 'Lý Bí lập nước Vạn Xuân',
      summary: 'Nhà nước độc lập với quốc hiệu riêng.',
      detail:
        'Mùa xuân năm 544, Lý Bí lên ngôi, xưng Lý Nam Đế, đặt quốc hiệu Vạn Xuân và niên hiệu Thiên Đức, thể hiện khát vọng về một quốc gia độc lập, trường tồn. Ông dựng chùa Khai Quốc (nay là chùa Trấn Quốc, Hà Nội). Đây là lần đầu người Việt xưng đế và đặt quốc hiệu riêng trong thời Bắc thuộc.',
    },
    {
      id: 'trieu-quang-phuc',
      year: 545,
      yearLabel: '545 – 571',
      title: 'Triệu Quang Phục và đầm Dạ Trạch',
      summary: 'Kháng chiến chống quân Lương, xưng Triệu Việt Vương.',
      detail:
        'Năm 545, nhà Lương sai Trần Bá Tiên sang đánh; Lý Nam Đế thua và giao quyền chỉ huy cho Triệu Quang Phục, rồi mất năm 548. Triệu Quang Phục đưa quân về đầm Dạ Trạch (Khoái Châu, Hưng Yên ngày nay), đánh du kích, xưng Triệu Việt Vương. Năm 550 ông đánh bại quân Lương, giành lại thành Long Biên.',
    },
    {
      id: 'hau-ly-nam-de',
      year: 571,
      yearLabel: '571 – 602',
      title: 'Hậu Lý Nam Đế và sự sụp đổ của Vạn Xuân',
      summary: 'Lý Phật Tử đầu hàng nhà Tùy năm 602.',
      detail:
        'Năm 571, Lý Phật Tử đánh úp Triệu Việt Vương, giành ngôi, sử gọi là Hậu Lý Nam Đế, đóng đô ở Phong Châu. Năm 602, nhà Tùy sai Lưu Phương đem quân sang đánh; Lý Phật Tử đầu hàng, nhà nước Vạn Xuân chấm dứt sau gần 60 năm tồn tại.',
    },
    {
      id: 'an-nam-do-ho-phu',
      year: 679,
      yearLabel: '679',
      title: 'Nhà Đường đặt An Nam đô hộ phủ',
      summary: 'Tên gọi "An Nam" xuất hiện từ đây.',
      detail:
        'Nhà Đường đổi Giao Châu đô đốc phủ thành An Nam đô hộ phủ, trị sở ở Tống Bình (Hà Nội ngày nay). Chính quyền đô hộ đặt ra nhiều thứ thuế và cống phẩm nặng nề, là nguyên nhân của hàng loạt cuộc khởi nghĩa sau đó.',
    },
    {
      id: 'ly-tu-tien-dinh-kien',
      year: 687,
      yearLabel: '687',
      title: 'Khởi nghĩa Lý Tự Tiên, Đinh Kiến',
      summary: 'Chống tăng thuế, giết đô hộ Lưu Diên Hựu.',
      detail:
        'Đô hộ Lưu Diên Hựu bắt dân nộp thuế gấp đôi. Lý Tự Tiên và Đinh Kiến lãnh đạo dân nổi dậy, vây phủ thành Tống Bình và giết Lưu Diên Hựu. Nhà Đường sau đó điều quân sang đàn áp.',
    },
    {
      id: 'mai-thuc-loan',
      year: 722,
      yearLabel: '722 (có tài liệu ghi 713)',
      title: 'Khởi nghĩa Mai Thúc Loan',
      summary: 'Xưng Mai Hắc Đế, dựng thành Vạn An ở Hoan Châu.',
      detail:
        'Mai Thúc Loan khởi nghĩa ở Hoan Châu (Nghệ An – Hà Tĩnh ngày nay), xưng hoàng đế (Mai Hắc Đế), xây thành Vạn An làm căn cứ. Nghĩa quân liên kết với Lâm Ấp, Chân Lạp và chiếm được phủ thành Tống Bình. Nhà Đường sai Dương Tư Húc đem quân sang đàn áp. Niên đại khởi nghĩa có sách chép năm 713, phổ biến nhất là năm 722.',
    },
    {
      id: 'phung-hung',
      year: 776,
      yearLabel: 'Khoảng 776 – 791',
      title: 'Khởi nghĩa Phùng Hưng',
      summary: 'Làm chủ phủ thành Tống Bình, được tôn Bố Cái Đại Vương.',
      detail:
        'Phùng Hưng, hào trưởng ở Đường Lâm (Sơn Tây, Hà Nội ngày nay), cùng em là Phùng Hải nổi dậy, chiếm phủ thành Tống Bình và tự cai quản trong một thời gian. Sau khi ông mất, con là Phùng An tôn ông làm Bố Cái Đại Vương (vua cha mẹ). Năm 791 nhà Đường lấy lại quyền kiểm soát.',
    },
    {
      id: 'duong-thanh',
      year: 819,
      yearLabel: '819 – 820',
      title: 'Khởi nghĩa Dương Thanh',
      summary: 'Giết đô hộ Lý Tượng Cổ.',
      detail:
        'Dương Thanh, hào trưởng ở Hoan Châu, lợi dụng lúc được đô hộ Lý Tượng Cổ phái đi đánh dẹp, đã quay quân về đánh chiếm phủ thành và giết Lý Tượng Cổ. Cuộc khởi nghĩa bị nhà Đường dập tắt năm 820.',
    },
    {
      id: 'nam-chieu',
      year: 854,
      yearLabel: '854 – 866',
      title: 'Nam Chiếu đánh An Nam',
      summary: 'Phủ thành Tống Bình hai lần thất thủ.',
      detail:
        'Lợi dụng chính quyền đô hộ suy yếu, nước Nam Chiếu (Vân Nam ngày nay) nhiều lần đem quân đánh An Nam, chiếm phủ thành vào năm 860 và năm 863, cướp phá nặng nề. Cư dân và các thủ lĩnh địa phương chịu cảnh chiến tranh liên miên.',
    },
    {
      id: 'cao-bien-dai-la',
      year: 866,
      yearLabel: '866',
      title: 'Cao Biền đánh lui Nam Chiếu, xây thành Đại La',
      summary: 'An Nam đổi thành Tĩnh Hải quân.',
      detail:
        'Tướng nhà Đường Cao Biền đánh đuổi quân Nam Chiếu, lấy lại An Nam. Nhà Đường đổi An Nam đô hộ phủ thành Tĩnh Hải quân, Cao Biền làm tiết độ sứ và cho đắp lại thành Đại La. Đây là nền móng của kinh thành Thăng Long sau này.',
    },
    {
      id: 'khuc-thua-du',
      year: 905,
      yearLabel: '905',
      title: 'Khúc Thừa Dụ giành quyền tự chủ',
      summary: 'Tự xưng tiết độ sứ khi nhà Đường suy yếu.',
      detail:
        'Khúc Thừa Dụ, hào trưởng ở Hồng Châu (Hải Dương ngày nay), được dân chúng ủng hộ, chiếm phủ thành Đại La và tự xưng tiết độ sứ. Nhà Đường đang suy yếu buộc phải công nhận. Trên danh nghĩa vẫn thuộc nhà Đường, nhưng đây là bước khởi đầu của nền tự chủ.',
    },
    {
      id: 'khuc-hao-cai-cach',
      year: 907,
      yearLabel: '907 – 917',
      title: 'Cải cách của Khúc Hạo',
      summary: 'Chia lại đơn vị hành chính, giảm nhẹ tô thuế.',
      detail:
        'Năm 907, Khúc Thừa Dụ mất, con là Khúc Hạo nối nghiệp. Ông chia đất nước thành các lộ, phủ, châu, xã, đặt chức quản lý đến cấp xã, định lại mức thuế và bãi bỏ nhiều thứ lao dịch nặng nề, theo phương châm "chính sự cốt chuộng khoan dung, giản dị".',
    },
    {
      id: 'nam-han-xam-luoc',
      year: 930,
      yearLabel: '930',
      title: 'Nam Hán chiếm Tĩnh Hải quân',
      summary: 'Bắt Khúc Thừa Mỹ đưa về Quảng Châu.',
      detail:
        'Khúc Thừa Mỹ nối nghiệp cha nhưng thần phục nhà Hậu Lương thay vì Nam Hán. Năm 930, nhà Nam Hán đem quân sang đánh, bắt Khúc Thừa Mỹ đưa về Quảng Châu, đặt lại ách cai trị.',
    },
    {
      id: 'duong-dinh-nghe',
      year: 931,
      yearLabel: '931',
      title: 'Dương Đình Nghệ đánh đuổi Nam Hán',
      summary: 'Lấy lại thành Đại La, xưng tiết độ sứ.',
      detail:
        'Dương Đình Nghệ, một bộ tướng cũ của họ Khúc ở Ái Châu (Thanh Hóa ngày nay), nuôi 3.000 con nuôi làm nòng cốt, đem quân vây và hạ thành Đại La, đánh đuổi quân Nam Hán. Ông tự xưng tiết độ sứ, tiếp tục giữ quyền tự chủ.',
    },
    {
      id: 'kieu-cong-tien',
      year: 937,
      yearLabel: '937',
      title: 'Kiều Công Tiễn giết Dương Đình Nghệ',
      summary: 'Cầu cứu Nam Hán, mở đường cho quân xâm lược.',
      detail:
        'Nha tướng Kiều Công Tiễn giết Dương Đình Nghệ để đoạt quyền. Ngô Quyền, con rể của Dương Đình Nghệ, đem quân từ Ái Châu ra hỏi tội. Kiều Công Tiễn sai người sang cầu cứu Nam Hán, tạo cớ để Nam Hán đem quân sang lần thứ hai.',
    },
    {
      id: 'ngo-quyen-bach-dang',
      year: 938,
      yearLabel: '938',
      title: 'Chiến thắng Bạch Đằng',
      summary: 'Ngô Quyền chấm dứt nghìn năm Bắc thuộc.',
      detail:
        'Ngô Quyền giết Kiều Công Tiễn, rồi bố trí trận địa cọc gỗ nhọn bịt sắt cắm ở cửa sông Bạch Đằng. Lợi dụng thủy triều, ông nhử đoàn chiến thuyền Nam Hán do thái tử Lưu Hoằng Tháo chỉ huy vào bãi cọc khi nước lên, rồi phản công khi nước rút. Quân Nam Hán thua tan, Hoằng Tháo tử trận. Chiến thắng chấm dứt hơn một nghìn năm Bắc thuộc, mở ra kỷ nguyên độc lập tự chủ lâu dài.',
    },
  ],
  ngo: [
    {
      id: 'xung-vuong',
      year: 939,
      yearLabel: '939',
      title: 'Ngô Quyền xưng vương',
      summary: 'Đóng đô ở Cổ Loa, dựng bộ máy nhà nước độc lập.',
      detail:
        'Mùa xuân năm 939, Ngô Quyền xưng vương, bỏ chức tiết độ sứ vốn là danh hiệu của chính quyền phương Bắc, chọn Cổ Loa làm kinh đô để khẳng định sự kế thừa từ thời An Dương Vương. Ông lập Dương thị (con gái Dương Đình Nghệ) làm hoàng hậu, đặt trăm quan, định triều nghi và phẩm phục, xây dựng một nhà nước độc lập tự chủ.',
    },
    {
      id: 'duong-tam-kha',
      year: 944,
      yearLabel: '944 – 950',
      title: 'Dương Tam Kha cướp ngôi',
      summary: 'Ngô Quyền mất, em vợ ông tự xưng Dương Bình Vương.',
      detail:
        'Năm 944, Ngô Quyền mất khi mới 47 tuổi. Dương Tam Kha, em của Dương hậu, được gửi gắm phò tá con trưởng Ngô Xương Ngập, nhưng lại cướp ngôi, xưng Dương Bình Vương. Ngô Xương Ngập chạy về Nam Sách nương nhờ Phạm Lệnh Công; Tam Kha nhiều lần sai quân lùng bắt không được. Người con thứ là Ngô Xương Văn bị Tam Kha nhận làm con nuôi.',
    },
    {
      id: 'nam-tan-vuong',
      year: 950,
      yearLabel: '950',
      title: 'Ngô Xương Văn giành lại ngôi',
      summary: 'Truất Dương Tam Kha, xưng Nam Tấn Vương.',
      detail:
        'Năm 950, Ngô Xương Văn được giao đem quân đi đánh hai thôn Thái Bình, đã cùng các tướng quay về đánh úp Dương Tam Kha. Vì nghĩa cậu cháu, Xương Văn không giết mà giáng Tam Kha xuống làm Chương Dương công, rồi tự xưng Nam Tấn Vương, khôi phục nhà Ngô.',
    },
    {
      id: 'hau-ngo-vuong',
      year: 951,
      yearLabel: '951',
      title: 'Hai vua cùng trị vì',
      summary: 'Đón anh là Ngô Xương Ngập về, xưng Thiên Sách Vương.',
      detail:
        'Nam Tấn Vương sai người đón anh là Ngô Xương Ngập về kinh, cùng trông coi việc nước. Xương Ngập xưng Thiên Sách Vương. Sử gọi giai đoạn này là thời Hậu Ngô Vương. Về sau Thiên Sách Vương chuyên quyền, khiến Nam Tấn Vương không còn được dự bàn chính sự.',
    },
    {
      id: 'danh-hoa-lu',
      year: 951,
      yearLabel: '951',
      title: 'Đánh Đinh Bộ Lĩnh ở Hoa Lư',
      summary: 'Hơn một tháng không hạ được, phải rút quân.',
      detail:
        'Đinh Bộ Lĩnh ở động Hoa Lư không chịu thần phục, hai vua nhà Ngô đem quân đi đánh. Đinh Bộ Lĩnh sai con là Đinh Liễn sang làm con tin để hoãn binh. Đánh hơn một tháng không thắng, quân Ngô phải rút về. Sự kiện cho thấy quyền lực trung ương nhà Ngô đã suy yếu trước các thế lực địa phương.',
    },
    {
      id: 'thien-sach-vuong-mat',
      year: 954,
      yearLabel: '954',
      title: 'Thiên Sách Vương mất',
      summary: 'Nam Tấn Vương một mình trị nước.',
      detail:
        'Năm 954, Ngô Xương Ngập mất. Nam Tấn Vương Ngô Xương Văn trở lại một mình nắm quyền. Cùng năm, ông sai sứ sang nhà Nam Hán xin lĩnh chức tiết độ sứ để tránh xung đột với phương Bắc.',
    },
    {
      id: 'nam-tan-vuong-mat',
      year: 965,
      yearLabel: '965',
      title: 'Nam Tấn Vương tử trận',
      summary: 'Trúng tên phục kích khi đánh hai thôn Thái Bình.',
      detail:
        'Năm 965, Nam Tấn Vương đem quân đi đánh hai thôn Đường và Nguyễn ở Thái Bình (nay thuộc vùng Sơn Tây, Hà Nội). Khi thuyền đến nơi, ông bị trúng tên của quân mai phục và mất. Đây là đòn quyết định khiến nhà Ngô sụp đổ.',
    },
    {
      id: 'ngo-xuong-xi',
      year: 965,
      yearLabel: '965',
      title: 'Ngô Xương Xí và sự kết thúc của nhà Ngô',
      summary: 'Chỉ còn giữ đất Bình Kiều như một sứ quân.',
      detail:
        'Con của Thiên Sách Vương là Ngô Xương Xí nối ngôi nhưng không còn đủ sức kiểm soát đất nước. Ông lui về giữ Bình Kiều, trở thành một trong 12 sứ quân. Chính quyền trung ương nhà Ngô chấm dứt.',
    },
    {
      id: 'loan-12-su-quan',
      year: 965,
      yearLabel: '965 – 968',
      title: 'Loạn 12 sứ quân',
      summary: 'Các thủ lĩnh địa phương cát cứ, đất nước chia cắt.',
      detail:
        'Sau khi Nam Tấn Vương mất, đất nước rơi vào cảnh cát cứ của 12 sứ quân, theo Đại Việt sử ký toàn thư gồm: Ngô Xương Xí (Bình Kiều), Kiều Công Hãn (Phong Châu), Nguyễn Khoan (Tam Đái), Ngô Nhật Khánh (Đường Lâm), Đỗ Cảnh Thạc (Đỗ Động), Lý Khuê (Siêu Loại), Nguyễn Thủ Tiệp (Tiên Du), Lã Đường (Tế Giang), Nguyễn Siêu (Tây Phù Liệt), Kiều Thuận (Hồi Hồ), Phạm Bạch Hổ (Đằng Châu) và Trần Lãm (Bố Hải Khẩu). Các sứ quân đánh nhau liên miên, cho đến khi Đinh Bộ Lĩnh dẹp yên năm 968.',
    },
  ],
  dinh: [
    {
      id: 'nuong-tran-lam',
      year: 965,
      yearLabel: 'Khoảng 965',
      title: 'Đinh Bộ Lĩnh nương nhờ sứ quân Trần Lãm',
      summary: 'Được Trần Lãm nhận làm con nuôi, trao binh quyền.',
      detail:
        'Đinh Bộ Lĩnh, con của thứ sử Hoan Châu Đinh Công Trứ, lớn lên ở động Hoa Lư. Ông cùng con là Đinh Liễn sang nương nhờ sứ quân Trần Lãm ở Bố Hải Khẩu. Trần Lãm thấy ông có tài, nhận làm con nuôi và trước khi mất đã giao lại toàn bộ binh quyền.',
    },
    {
      id: 'dep-loan',
      year: 966,
      yearLabel: '966 – 968',
      title: 'Dẹp loạn 12 sứ quân',
      summary: 'Đánh đâu thắng đó, được tôn là Vạn Thắng Vương.',
      detail:
        'Từ căn cứ Hoa Lư, Đinh Bộ Lĩnh lần lượt thu phục và đánh dẹp các sứ quân, có nơi chiêu hàng, có nơi dùng binh. Nhờ đánh đâu thắng đó, ông được tôn là Vạn Thắng Vương. Đến năm 968, cục diện cát cứ chấm dứt, đất nước được thống nhất.',
    },
    {
      id: 'len-ngoi-dai-co-viet',
      year: 968,
      yearLabel: '968',
      title: 'Đinh Tiên Hoàng lên ngôi, lập nước Đại Cồ Việt',
      summary: 'Lần đầu người đứng đầu nước Việt xưng hoàng đế.',
      detail:
        'Năm 968, Đinh Bộ Lĩnh lên ngôi hoàng đế, tức Đinh Tiên Hoàng, đặt quốc hiệu Đại Cồ Việt và đóng đô ở Hoa Lư (Ninh Bình), nơi có núi non hiểm trở thuận lợi cho phòng thủ. Việc xưng đế khẳng định nước Việt ngang hàng với các triều đại phương Bắc.',
    },
    {
      id: 'nien-hieu-thai-binh',
      year: 970,
      yearLabel: '970',
      title: 'Đặt niên hiệu Thái Bình',
      summary: 'Niên hiệu đầu tiên của nhà nước Đại Cồ Việt.',
      detail:
        'Đinh Tiên Hoàng đặt niên hiệu Thái Bình, thể hiện mong muốn đất nước yên bình sau nhiều năm loạn lạc. Ông cũng sai sứ sang giao hảo với nhà Tống để tránh xung đột với phương Bắc.',
    },
    {
      id: 'to-chuc-trieu-dinh',
      year: 971,
      yearLabel: '971',
      title: 'Xây dựng bộ máy triều đình',
      summary: 'Định cấp bậc văn võ, phong chức cho các công thần.',
      detail:
        'Đinh Tiên Hoàng định giai phẩm cho quan văn, quan võ và tăng đạo: Nguyễn Bặc làm Định quốc công, Lưu Cơ làm Đô hộ phủ sĩ sư, Lê Hoàn làm Thập đạo tướng quân, sư Ngô Chân Lưu được phong Khuông Việt đại sư. Quân đội được tổ chức theo đạo, quân, lữ, tốt, ngũ. Nhà Đinh cũng nổi tiếng với hình phạt nghiêm khắc nhằm giữ kỷ cương.',
    },
    {
      id: 'giao-hao-tong',
      year: 973,
      yearLabel: '973 – 975',
      title: 'Giao hảo với nhà Tống',
      summary: 'Tống phong vương cho cha con họ Đinh.',
      detail:
        'Nhà Đinh sai Nam Việt Vương Đinh Liễn sang sứ nhà Tống. Nhà Tống phong Đinh Tiên Hoàng làm Giao Chỉ quận vương và trao chức cho Đinh Liễn. Quan hệ triều cống trên danh nghĩa giúp Đại Cồ Việt giữ hòa bình với phương Bắc.',
    },
    {
      id: 'dinh-tien-hoang-bi-giet',
      year: 979,
      yearLabel: '979',
      title: 'Đinh Tiên Hoàng và Đinh Liễn bị ám hại',
      summary: 'Đinh Toàn 6 tuổi lên ngôi, Lê Hoàn làm phụ chính.',
      detail:
        'Năm 978, Đinh Tiên Hoàng lập con út là Hạng Lang làm thái tử thay vì con trưởng Đinh Liễn, người có nhiều công lao. Đầu năm 979, Đinh Liễn sai người giết Hạng Lang. Cuối năm đó, viên quan Đỗ Thích giết cả Đinh Tiên Hoàng và Đinh Liễn. Con nhỏ là Đinh Toàn mới 6 tuổi lên ngôi, Thập đạo tướng quân Lê Hoàn làm phụ chính.',
    },
    {
      id: 'nguyen-bac-noi-day',
      year: 979,
      yearLabel: '979',
      title: 'Nguyễn Bặc, Đinh Điền khởi binh',
      summary: 'Chống Lê Hoàn nhưng bị đánh dẹp.',
      detail:
        'Các đại thần Nguyễn Bặc, Đinh Điền nghi Lê Hoàn có ý cướp ngôi nên khởi binh chống lại. Lê Hoàn đem quân đánh dẹp, Nguyễn Bặc và Đinh Điền đều bị giết. Triều đình nhà Đinh rơi vào khủng hoảng ngay khi phương Bắc đang chuẩn bị xâm lược.',
    },
    {
      id: 'duong-van-nga-trao-ngoi',
      year: 980,
      yearLabel: '980',
      title: 'Thái hậu Dương Vân Nga trao ngôi',
      summary: 'Lê Hoàn lên ngôi để lãnh đạo kháng chiến chống Tống.',
      detail:
        'Nhà Tống nhân lúc nước Việt có biến, chuẩn bị đem quân xâm lược. Tướng quân Phạm Cự Lượng cùng các tướng tôn Lê Hoàn lên làm vua để lãnh đạo kháng chiến. Thái hậu Dương Vân Nga trao áo long cổn cho Lê Hoàn. Nhà Đinh kết thúc sau hai đời vua.',
    },
  ],
  'tien-le': [
    {
      id: 'le-hoan-len-ngoi',
      year: 980,
      yearLabel: '980',
      title: 'Lê Hoàn lên ngôi',
      summary: 'Lập nhà Tiền Lê, đặt niên hiệu Thiên Phúc.',
      detail:
        'Lê Hoàn lên ngôi hoàng đế, sử gọi là Lê Đại Hành, lập nhà Tiền Lê, vẫn đóng đô ở Hoa Lư và đặt niên hiệu Thiên Phúc. Việc thay đổi triều đại diễn ra ngay trước khi quân Tống tiến sang.',
    },
    {
      id: 'khang-tong-981',
      year: 981,
      yearLabel: '981',
      title: 'Kháng chiến chống Tống',
      summary: 'Thắng lớn ở Chi Lăng và sông Bạch Đằng.',
      detail:
        'Đầu năm 981, quân Tống chia hai đường thủy bộ tiến sang. Lê Hoàn cho đóng cọc chặn trên sông Bạch Đằng, đánh bại thủy quân Tống. Trên bộ, ông dùng kế trá hàng nhử tướng Hầu Nhân Bảo vào trận địa mai phục ở Chi Lăng và giết được. Quân Tống thua to, phải rút về, nền độc lập được giữ vững.',
    },
    {
      id: 'binh-chiem-982',
      year: 982,
      yearLabel: '982',
      title: 'Đánh Chiêm Thành',
      summary: 'Phá kinh đô Indrapura, bảo vệ biên giới phía nam.',
      detail:
        'Vua Chiêm Thành bắt giữ sứ giả của Đại Cồ Việt. Năm 982, Lê Hoàn thân chinh đem quân đánh Chiêm Thành, phá kinh đô Indrapura (Quảng Nam ngày nay), giết vua Chiêm, củng cố an ninh biên giới phía nam.',
    },
    {
      id: 'dao-kenh-nha-le',
      year: 983,
      yearLabel: '983',
      title: 'Đào kênh Nhà Lê',
      summary: 'Con kênh đầu tiên do nhà nước tổ chức đào.',
      detail:
        'Lê Hoàn cho đào kênh từ núi Đồng Cổ đến sông Bà Hòa (Thanh Hóa), giúp thuyền bè đi lại an toàn vào phía nam. Đây là công trình thủy lợi, giao thông đầu tiên do nhà nước tổ chức được ghi trong sử, về sau gọi là kênh Nhà Lê.',
    },
    {
      id: 'tiep-su-ly-giac',
      year: 987,
      yearLabel: '987',
      title: 'Tiếp sứ nhà Tống Lý Giác',
      summary: 'Các thiền sư tham gia ngoại giao bằng thơ văn.',
      detail:
        'Sứ nhà Tống là Lý Giác sang Đại Cồ Việt. Thiền sư Đỗ Pháp Thuận giả làm người lái đò đón sứ và đối đáp thơ, còn thiền sư Khuông Việt soạn bài từ tiễn sứ. Sự kiện cho thấy vai trò của tầng lớp tăng sĩ có học trong việc ngoại giao thời bấy giờ.',
    },
    {
      id: 'cay-tich-dien',
      year: 987,
      yearLabel: '987',
      title: 'Lễ cày ruộng tịch điền',
      summary: 'Vua đích thân cày ruộng ở núi Đọi để khuyến nông.',
      detail:
        'Lê Hoàn đích thân cày ruộng tịch điền ở núi Đọi (Hà Nam ngày nay). Đây là lần đầu tiên sử chép lễ vua cày ruộng, thể hiện sự coi trọng nông nghiệp, và trở thành nghi lễ khuyến nông của các triều đại về sau.',
    },
    {
      id: 'le-dai-hanh-mat',
      year: 1005,
      yearLabel: '1005',
      title: 'Lê Đại Hành mất, các hoàng tử tranh ngôi',
      summary: 'Đất nước rối ren suốt tám tháng.',
      detail:
        'Lê Hoàn mất năm 1005. Các hoàng tử đánh nhau tranh ngôi suốt tám tháng. Thái tử Lê Long Việt lên ngôi (Lê Trung Tông) được ba ngày thì bị em là Lê Long Đĩnh sai người giết.',
    },
    {
      id: 'le-long-dinh',
      year: 1005,
      yearLabel: '1005 – 1009',
      title: 'Lê Long Đĩnh trị vì',
      summary: 'Sử cũ chép là ông vua tàn bạo, hay nằm khi thiết triều.',
      detail:
        'Lê Long Đĩnh lên ngôi, sử cũ chép ông ăn chơi, tàn bạo và vì mắc bệnh nên thường nằm khi thiết triều, bị gọi là Lê Ngọa Triều. Một số nhà nghiên cứu cho rằng sử nhà Lý có thể đã cường điệu các chi tiết này. Ông mất năm 1009, con còn nhỏ, triều đình không có người kế vị xứng đáng.',
    },
    {
      id: 'ly-cong-uan-len-ngoi',
      year: 1009,
      yearLabel: '1009',
      title: 'Lý Công Uẩn được tôn lên ngôi',
      summary: 'Nhà Tiền Lê kết thúc, nhà Lý ra đời.',
      detail:
        'Sau khi Lê Long Đĩnh mất, các triều thần, đứng đầu là Đào Cam Mộc, cùng sư Vạn Hạnh ủng hộ Điện tiền chỉ huy sứ Lý Công Uẩn lên ngôi. Nhà Tiền Lê chấm dứt sau 29 năm.',
    },
  ],
  ly: [
    {
      id: 'ly-thai-to-len-ngoi',
      year: 1009,
      yearLabel: '1009',
      title: 'Lý Thái Tổ lên ngôi',
      summary: 'Mở đầu triều Lý kéo dài hơn 200 năm.',
      detail:
        'Lý Công Uẩn lên ngôi, tức Lý Thái Tổ, đặt niên hiệu Thuận Thiên. Ông xuất thân từ chùa Cổ Pháp (Bắc Ninh), được sư Vạn Hạnh nuôi dạy. Nhà Lý trị vì đến năm 1225, là một trong những triều đại dài và thịnh trị của lịch sử Việt Nam.',
    },
    {
      id: 'doi-do-thang-long',
      year: 1010,
      yearLabel: '1010',
      title: 'Dời đô về Thăng Long',
      summary: 'Lý Thái Tổ ban Chiếu dời đô.',
      detail:
        'Mùa thu năm 1010, Lý Thái Tổ ban Chiếu dời đô, chuyển kinh đô từ Hoa Lư chật hẹp về thành Đại La, nơi "ở giữa khu vực trời đất, được thế rồng cuộn hổ ngồi". Tương truyền khi thuyền vua đến nơi có rồng vàng bay lên, nên đổi tên thành Thăng Long. Cùng năm, ông chia cả nước thành 24 lộ.',
    },
    {
      id: 'hinh-thu',
      year: 1042,
      yearLabel: '1042',
      title: 'Ban hành bộ Hình thư',
      summary: 'Bộ luật thành văn đầu tiên của nước ta.',
      detail:
        'Vua Lý Thái Tông cho soạn và ban hành bộ Hình thư, bộ luật thành văn đầu tiên được sử sách ghi lại. Bộ luật nhằm sửa những luật lệ phiền phức và xét xử công bằng hơn. Văn bản Hình thư nay không còn.',
    },
    {
      id: 'chua-mot-cot',
      year: 1049,
      yearLabel: '1049',
      title: 'Xây chùa Diên Hựu (chùa Một Cột)',
      summary: 'Công trình kiến trúc Phật giáo độc đáo của Thăng Long.',
      detail:
        'Tương truyền vua Lý Thái Tông mộng thấy Phật Bà Quan Âm ngồi trên tòa sen dắt vua lên đài. Theo lời khuyên của sư Thiền Tuệ, vua cho dựng một ngôi chùa trên một cột đá giữa hồ, mô phỏng tòa sen trong mộng, đặt tên là chùa Diên Hựu, ngày nay gọi là chùa Một Cột.',
    },
    {
      id: 'quoc-hieu-dai-viet',
      year: 1054,
      yearLabel: '1054',
      title: 'Đặt quốc hiệu Đại Việt',
      summary: 'Quốc hiệu gắn bó với dân tộc suốt nhiều thế kỷ.',
      detail:
        'Vua Lý Thánh Tông lên ngôi, đổi quốc hiệu từ Đại Cồ Việt thành Đại Việt. Quốc hiệu này được dùng gần như liên tục cho đến đầu thế kỷ XIX, thể hiện ý thức tự cường của quốc gia.',
    },
    {
      id: 'binh-chiem-1069',
      year: 1069,
      yearLabel: '1069',
      title: 'Lý Thánh Tông đánh Chiêm Thành',
      summary: 'Nhận ba châu Địa Lý, Ma Linh, Bố Chính.',
      detail:
        'Lý Thánh Tông cùng Lý Thường Kiệt đem quân đánh Chiêm Thành, bắt được vua Chiêm là Chế Củ. Để được tha, Chế Củ dâng ba châu Địa Lý, Ma Linh, Bố Chính (Quảng Bình, Quảng Trị ngày nay). Trong lúc vua đi đánh trận, Nguyên phi Ỷ Lan ở kinh đô coi việc nước, được dân chúng mến phục.',
    },
    {
      id: 'van-mieu',
      year: 1070,
      yearLabel: '1070 – 1076',
      title: 'Xây Văn Miếu – Quốc Tử Giám',
      summary: 'Nền móng cho giáo dục và khoa cử.',
      detail:
        'Năm 1070, Lý Thánh Tông cho lập Văn Miếu, đắp tượng Khổng Tử, Chu Công và Tứ phối để thờ. Năm 1076, Lý Nhân Tông lập Quốc Tử Giám, nơi học tập của con em quý tộc, được xem là trường đại học đầu tiên của nước ta.',
    },
    {
      id: 'y-lan-nhiep-chinh',
      year: 1072,
      yearLabel: '1072 – 1117',
      title: 'Lý Nhân Tông và Thái hậu Ỷ Lan',
      summary: 'Vua 7 tuổi lên ngôi, Ỷ Lan cùng các đại thần giúp việc nước.',
      detail:
        'Lý Thánh Tông mất, thái tử Càn Đức mới 7 tuổi lên ngôi, tức Lý Nhân Tông. Thái hậu Ỷ Lan cùng thái sư Lý Đạo Thành, tướng Lý Thường Kiệt giúp vua điều hành đất nước. Ỷ Lan được sử ghi nhận với nhiều chính sách thương dân, như chuộc những cô gái nghèo bị bán làm nô tì.',
    },
    {
      id: 'khoa-thi-1075',
      year: 1075,
      yearLabel: '1075',
      title: 'Khoa thi đầu tiên',
      summary: 'Khoa thi Minh kinh bác học, Lê Văn Thịnh đỗ đầu.',
      detail:
        'Nhà Lý mở khoa thi Minh kinh bác học và Nho học tam trường để chọn người tài ra làm quan. Lê Văn Thịnh đỗ đầu, sau này làm đến chức thái sư. Đây là khoa thi đầu tiên trong lịch sử khoa cử Việt Nam.',
    },
    {
      id: 'khang-tong-1077',
      year: 1075,
      yearLabel: '1075 – 1077',
      title: 'Kháng chiến chống Tống và Nam quốc sơn hà',
      summary: 'Lý Thường Kiệt "tiên phát chế nhân", lập phòng tuyến sông Như Nguyệt.',
      detail:
        'Biết nhà Tống chuẩn bị xâm lược, cuối năm 1075 Lý Thường Kiệt chủ động đem quân đánh trước vào các căn cứ hậu cần của Tống ở Ung Châu, Khâm Châu, Liêm Châu rồi rút về. Đầu năm 1077, quân Tống do Quách Quỳ chỉ huy tiến sang, bị chặn ở phòng tuyến sông Như Nguyệt (sông Cầu). Tương truyền bài thơ "Nam quốc sơn hà" vang lên trong đêm, khích lệ tinh thần quân sĩ. Cuối cùng Lý Thường Kiệt chủ động đề nghị giảng hòa, quân Tống rút về nước.',
    },
    {
      id: 'to-hien-thanh',
      year: 1175,
      yearLabel: '1175 – 1179',
      title: 'Tô Hiến Thành phò tá Lý Cao Tông',
      summary: 'Vị quan thanh liêm, chính trực nổi tiếng.',
      detail:
        'Thái úy Tô Hiến Thành được Lý Anh Tông giao phò tá thái tử Long Cán (Lý Cao Tông) mới 3 tuổi. Ông từ chối đút lót, giữ đúng di chiếu, và khi sắp mất đã tiến cử Trần Trung Tá vì tài năng chứ không phải người thân cận chăm sóc mình. Ông được đời sau coi là tấm gương về sự liêm chính.',
    },
    {
      id: 'loan-quach-boc',
      year: 1209,
      yearLabel: '1209',
      title: 'Loạn Quách Bốc, nhà Lý suy yếu',
      summary: 'Lý Cao Tông phải chạy khỏi kinh thành, dựa vào họ Trần.',
      detail:
        'Cuối thời Lý Cao Tông, triều chính đổ nát, nhân dân nổi dậy nhiều nơi. Năm 1209, tướng Quách Bốc đem quân đánh vào kinh thành, vua phải chạy lên Quy Hóa. Thái tử Sảm (Lý Huệ Tông) chạy về vùng Hải Ấp, dựa vào thế lực họ Trần ở đó. Họ Trần dần nắm thực quyền trong triều.',
    },
    {
      id: 'ly-chieu-hoang',
      year: 1224,
      yearLabel: '1224 – 1225',
      title: 'Lý Chiêu Hoàng nhường ngôi cho Trần Cảnh',
      summary: 'Nữ hoàng duy nhất trong lịch sử Việt Nam.',
      detail:
        'Lý Huệ Tông mắc bệnh, không có con trai, năm 1224 nhường ngôi cho con gái là công chúa Phật Kim mới 7 tuổi, tức Lý Chiêu Hoàng. Dưới sự sắp đặt của Trần Thủ Độ, cuối năm 1225 Chiêu Hoàng lấy Trần Cảnh rồi nhường ngôi cho chồng. Nhà Lý kết thúc sau 216 năm.',
    },
  ],
  tran: [
    {
      id: 'tran-canh-len-ngoi',
      year: 1225,
      yearLabel: '1225',
      title: 'Trần Thái Tông lên ngôi',
      summary: 'Nhà Trần thay nhà Lý, Trần Thủ Độ nắm quyền.',
      detail:
        'Trần Cảnh lên ngôi, tức Trần Thái Tông, mở đầu nhà Trần. Thái sư Trần Thủ Độ là người sắp đặt việc chuyển giao ngôi báu và nắm thực quyền trong những năm đầu, củng cố triều đại mới. Nhà Trần đặt lệ vua nhường ngôi sớm cho con và lên làm Thái thượng hoàng để cùng trông coi việc nước.',
    },
    {
      id: 'khoa-cu-tam-khoi',
      year: 1247,
      yearLabel: '1247',
      title: 'Đặt lệ lấy Tam khôi',
      summary: 'Nguyễn Hiền đỗ trạng nguyên năm 13 tuổi.',
      detail:
        'Nhà Trần mở khoa thi Thái học sinh và lần đầu đặt danh hiệu Tam khôi gồm Trạng nguyên, Bảng nhãn, Thám hoa. Khoa này Nguyễn Hiền đỗ Trạng nguyên khi mới 13 tuổi, trở thành trạng nguyên nhỏ tuổi nhất trong lịch sử khoa cử Việt Nam.',
    },
    {
      id: 'nguyen-mong-lan-1',
      year: 1258,
      yearLabel: '1258',
      title: 'Kháng chiến chống quân Mông Cổ lần thứ nhất',
      summary: 'Vườn không nhà trống, phản công ở Đông Bộ Đầu.',
      detail:
        'Cuối năm 1257, quân Mông Cổ do Ngột Lương Hợp Thai chỉ huy tràn vào Đại Việt. Trần Thái Tông cho rút khỏi Thăng Long, thực hiện kế "vườn không nhà trống". Khi vua hỏi kế, Trần Thủ Độ đáp: "Đầu thần chưa rơi xuống đất, xin bệ hạ đừng lo." Tháng 1 năm 1258, quân Trần phản công ở Đông Bộ Đầu, quân Mông Cổ phải rút về.',
    },
    {
      id: 'dai-viet-su-ky',
      year: 1272,
      yearLabel: '1272',
      title: 'Lê Văn Hưu soạn Đại Việt sử ký',
      summary: 'Bộ quốc sử đầu tiên của Việt Nam.',
      detail:
        'Lê Văn Hưu hoàn thành bộ Đại Việt sử ký gồm 30 quyển, ghi chép lịch sử từ Triệu Đà đến cuối nhà Lý. Đây là bộ chính sử đầu tiên của nước ta. Sách nay không còn nguyên bản nhưng nhiều đoạn được chép lại trong Đại Việt sử ký toàn thư.',
    },
    {
      id: 'hoi-nghi-binh-than',
      year: 1282,
      yearLabel: '1282',
      title: 'Hội nghị Bình Than',
      summary: 'Vua tôi nhà Trần bàn kế chống quân Nguyên.',
      detail:
        'Trước nguy cơ quân Nguyên xâm lược, Thượng hoàng Trần Thánh Tông và vua Trần Nhân Tông họp các vương hầu, quan lại ở Bình Than (Hải Dương) bàn kế đánh giặc. Trần Quốc Toản vì còn nhỏ không được dự, uất ức bóp nát quả cam, về nhà tập hợp gia nô lập đội quân dưới lá cờ "Phá cường địch, báo hoàng ân".',
    },
    {
      id: 'hich-tuong-si',
      year: 1284,
      yearLabel: '1284',
      title: 'Trần Hưng Đạo viết Hịch tướng sĩ',
      summary: 'Khích lệ lòng yêu nước của quân sĩ.',
      detail:
        'Được giao làm Quốc công tiết chế chỉ huy toàn quân, Trần Quốc Tuấn (Hưng Đạo Đại Vương) duyệt binh ở Đông Bộ Đầu và soạn Hịch tướng sĩ, phê phán thói ăn chơi, khơi dậy lòng căm thù giặc: "Ta thường tới bữa quên ăn, nửa đêm vỗ gối…". Quân sĩ thích lên cánh tay hai chữ "Sát Thát" (giết giặc Mông Thát).',
    },
    {
      id: 'dien-hong',
      year: 1284,
      yearLabel: '1284',
      title: 'Hội nghị Diên Hồng',
      summary: 'Các bô lão đồng thanh "Đánh!"',
      detail:
        'Thượng hoàng Trần Thánh Tông triệu tập các bô lão khắp cả nước về điện Diên Hồng hỏi nên hòa hay nên đánh. Các bô lão đồng thanh hô "Đánh!", thể hiện ý chí đoàn kết của toàn dân trước cuộc xâm lược sắp tới.',
    },
    {
      id: 'nguyen-mong-lan-2',
      year: 1285,
      yearLabel: '1285',
      title: 'Kháng chiến chống quân Nguyên lần thứ hai',
      summary: 'Thắng ở Hàm Tử, Chương Dương, Tây Kết.',
      detail:
        'Đầu năm 1285, khoảng 50 vạn quân Nguyên do Thoát Hoan chỉ huy tiến vào Đại Việt, phối hợp với cánh quân Toa Đô từ Chiêm Thành đánh lên. Trần Bình Trọng bị bắt, khảng khái nói: "Ta thà làm quỷ nước Nam chứ không thèm làm vương đất Bắc." Đến mùa hè, quân Trần phản công, thắng lớn ở Hàm Tử, Chương Dương, Tây Kết, giải phóng Thăng Long. Toa Đô bị giết, Thoát Hoan phải chui vào ống đồng để trốn về nước.',
    },
    {
      id: 'bach-dang-1288',
      year: 1287,
      yearLabel: '1287 – 1288',
      title: 'Kháng chiến lần thứ ba và chiến thắng Bạch Đằng',
      summary: 'Trận Vân Đồn và trận cọc trên sông Bạch Đằng.',
      detail:
        'Cuối năm 1287, quân Nguyên lại sang xâm lược. Trần Khánh Dư đánh tan đoàn thuyền lương của Trương Văn Hổ ở Vân Đồn, khiến quân Nguyên thiếu lương. Ngày 9 tháng 4 năm 1288, Trần Hưng Đạo bố trí bãi cọc trên sông Bạch Đằng, nhử đoàn thuyền chiến của Ô Mã Nhi vào lúc nước triều lên rồi đánh khi nước rút. Toàn bộ thủy quân Nguyên bị tiêu diệt, Ô Mã Nhi bị bắt, kết thúc thắng lợi cả ba cuộc kháng chiến.',
    },
    {
      id: 'truc-lam',
      year: 1299,
      yearLabel: '1299',
      title: 'Trần Nhân Tông lập Thiền phái Trúc Lâm',
      summary: 'Vị vua anh hùng xuất gia ở núi Yên Tử.',
      detail:
        'Năm 1293, Trần Nhân Tông nhường ngôi cho con. Năm 1299, ông xuất gia tu hành ở núi Yên Tử, lập nên Thiền phái Trúc Lâm, một dòng Thiền mang bản sắc Việt Nam, và được tôn là Phật hoàng.',
    },
    {
      id: 'hung-dao-vuong-mat',
      year: 1300,
      yearLabel: '1300',
      title: 'Hưng Đạo Đại Vương qua đời',
      summary: 'Để lại lời dặn về kế sách giữ nước.',
      detail:
        'Trần Quốc Tuấn mất ở Vạn Kiếp. Trước đó, khi vua đến thăm hỏi kế giữ nước, ông dặn: "Khoan thư sức dân để làm kế sâu rễ bền gốc, đó là thượng sách giữ nước." Ông còn để lại các tác phẩm quân sự như Binh thư yếu lược, Vạn Kiếp tông bí truyền thư, và được nhân dân tôn thờ là Đức Thánh Trần.',
    },
    {
      id: 'huyen-tran',
      year: 1306,
      yearLabel: '1306',
      title: 'Công chúa Huyền Trân lấy vua Chiêm',
      summary: 'Nhận hai châu Ô, Lý làm sính lễ.',
      detail:
        'Công chúa Huyền Trân, con gái Trần Nhân Tông, được gả cho vua Chiêm Thành là Chế Mân. Chế Mân dâng hai châu Ô và châu Lý (từ Quảng Trị đến bắc Quảng Nam ngày nay) làm sính lễ, nhà Trần đổi thành Thuận Châu và Hóa Châu.',
    },
    {
      id: 'that-tram-so',
      year: 1350,
      yearLabel: 'Thời Trần Dụ Tông',
      title: 'Chu Văn An dâng Thất trảm sớ',
      summary: 'Xin chém bảy tên nịnh thần.',
      detail:
        'Dưới thời Trần Dụ Tông, triều chính suy đồi. Nhà giáo Chu Văn An dâng sớ xin chém bảy tên nịnh thần (Thất trảm sớ). Vua không nghe, ông treo mũ từ quan về núi Phượng Hoàng (Chí Linh) dạy học. Chu Văn An được tôn là bậc "vạn thế sư biểu" và được thờ ở Văn Miếu.',
    },
    {
      id: 'che-bong-nga',
      year: 1371,
      yearLabel: '1371 – 1390',
      title: 'Chế Bồng Nga nhiều lần đánh Đại Việt',
      summary: 'Thăng Long bị cướp phá, vua Trần Duệ Tông tử trận.',
      detail:
        'Vua Chiêm Thành Chế Bồng Nga nhiều lần đem quân đánh ra Bắc, năm 1371 vào tận Thăng Long cướp phá. Năm 1377, vua Trần Duệ Tông đem quân đánh Chiêm và tử trận ở Đồ Bàn. Mãi đến năm 1390, tướng Trần Khát Chân mới bắn chết được Chế Bồng Nga trên sông Hải Triều.',
    },
    {
      id: 'ho-quy-ly-chuyen-quyen',
      year: 1388,
      yearLabel: '1388 – 1400',
      title: 'Hồ Quý Ly nắm quyền',
      summary: 'Nhà Trần suy yếu, quyền lực rơi vào tay ngoại thích.',
      detail:
        'Hồ Quý Ly, có hai người cô là phi tần của vua Trần Minh Tông, ngày càng được trọng dụng. Năm 1388, ông bức Trần Phế Đế phải chết và lập Trần Thuận Tông, con rể của mình, lên ngôi. Từ đó Hồ Quý Ly nắm mọi quyền hành, chuẩn bị thay thế nhà Trần.',
    },
  ],
  ho: [
    {
      id: 'tien-giay',
      year: 1396,
      yearLabel: '1396',
      title: 'Phát hành tiền giấy Thông bảo hội sao',
      summary: 'Lần đầu tiên nước ta dùng tiền giấy.',
      detail:
        'Theo đề nghị của Hồ Quý Ly, triều đình phát hành tiền giấy Thông bảo hội sao, thu hồi tiền đồng. Ai làm tiền giả bị xử tử. Đây là cải cách tiền tệ táo bạo nhưng chưa được dân chúng tin dùng rộng rãi.',
    },
    {
      id: 'tay-do',
      year: 1397,
      yearLabel: '1397',
      title: 'Xây thành Tây Đô, ban phép hạn điền',
      summary: 'Ép vua Trần dời đô vào Thanh Hóa.',
      detail:
        'Hồ Quý Ly cho xây thành Tây Đô (Thành Nhà Hồ, Vĩnh Lộc, Thanh Hóa) bằng những khối đá lớn, rồi ép vua Trần Thuận Tông dời đô vào đây. Cùng năm ban phép hạn điền, giới hạn số ruộng tư của quý tộc và địa chủ. Thành Nhà Hồ được UNESCO công nhận là Di sản văn hóa thế giới năm 2011.',
    },
    {
      id: 'cai-cach',
      year: 1400,
      yearLabel: '1400',
      title: 'Hồ Quý Ly lập nhà Hồ',
      summary: 'Đổi quốc hiệu thành Đại Ngu.',
      detail:
        'Năm 1400, Hồ Quý Ly phế vua Trần Thiếu Đế, lên ngôi, lập nhà Hồ và đổi quốc hiệu thành Đại Ngu. Cuối năm đó ông nhường ngôi cho con là Hồ Hán Thương và làm Thái thượng hoàng, tiếp tục điều hành các cải cách về tiền tệ, ruộng đất, giáo dục và quân sự.',
    },
    {
      id: 'han-no',
      year: 1401,
      yearLabel: '1401',
      title: 'Ban phép hạn nô và chấn chỉnh thi cử',
      summary: 'Giới hạn số nô tì, cải cách giáo dục.',
      detail:
        'Nhà Hồ ban phép hạn nô, quy định số gia nô mà quý tộc được sở hữu, số còn lại sung công. Nhà Hồ cũng sửa đổi chế độ thi cử, coi trọng chữ Nôm và tri thức thực tế. Các cải cách làm suy yếu thế lực quý tộc cũ nhưng gây nhiều bất bình, khiến nhà Hồ không được lòng dân.',
    },
    {
      id: 'minh-xam-luoc',
      year: 1406,
      yearLabel: '1406',
      title: 'Nhà Minh xâm lược',
      summary: 'Lấy cớ "phù Trần diệt Hồ".',
      detail:
        'Cuối năm 1406, nhà Minh lấy cớ khôi phục nhà Trần, đem quân tiến vào Đại Ngu. Nhà Hồ dựa vào phòng tuyến thành Đa Bang và sông Hồng để chống giặc, nhưng không huy động được sức mạnh toàn dân. Hồ Nguyên Trừng từng nói: "Thần không sợ đánh, chỉ sợ lòng dân không theo."',
    },
    {
      id: 'that-thu-minh',
      year: 1407,
      yearLabel: '1407',
      title: 'Nhà Hồ thất bại',
      summary: 'Cha con Hồ Quý Ly bị bắt, mở đầu thời Minh thuộc.',
      detail:
        'Đầu năm 1407, thành Đa Bang thất thủ, quân Minh chiếm Đông Đô (Thăng Long). Tháng 6 năm 1407, cha con Hồ Quý Ly bị bắt ở Hà Tĩnh và bị giải về Trung Quốc. Nguyễn Phi Khanh, cha của Nguyễn Trãi, cũng bị bắt. Tương truyền Nguyễn Trãi theo cha đến ải Nam Quan, được cha dặn quay về tìm cách rửa nhục cho nước.',
    },
    {
      id: 'hau-tran',
      year: 1407,
      yearLabel: '1407 – 1413',
      title: 'Khởi nghĩa của nhà Hậu Trần',
      summary: 'Giản Định Đế và Trùng Quang Đế chống quân Minh.',
      detail:
        'Con cháu nhà Trần nổi dậy chống quân Minh. Trần Ngỗi xưng Giản Định Đế, cùng tướng Đặng Tất thắng lớn ở Bô Cô (Nam Định) năm 1408. Sau đó Trần Quý Khoáng xưng Trùng Quang Đế, cùng Đặng Dung, Nguyễn Cảnh Dị tiếp tục chiến đấu. Năm 1413, khởi nghĩa thất bại.',
    },
    {
      id: 'minh-thuoc',
      year: 1414,
      yearLabel: '1414 – 1427',
      title: 'Ách đô hộ của nhà Minh',
      summary: 'Chính sách đồng hóa và bóc lột hà khắc.',
      detail:
        'Nhà Minh đổi nước ta thành quận Giao Chỉ, thi hành chính sách đồng hóa: thu gom và đốt sách vở, phá bia đá, bắt thợ giỏi và nhân tài đưa về Trung Quốc, đặt nhiều thứ thuế nặng. Chính sự tàn bạo này khiến phong trào kháng chiến nổi lên khắp nơi, chuẩn bị cho khởi nghĩa Lam Sơn.',
    },
  ],
  'hau-le': [
    {
      id: 'hoi-the-lung-nhai',
      year: 1416,
      yearLabel: '1416',
      title: 'Hội thề Lũng Nhai',
      summary: 'Lê Lợi cùng 18 người thề quyết đánh quân Minh.',
      detail:
        'Lê Lợi cùng 18 người thân tín, trong đó có Lê Lai, Nguyễn Trãi (có tài liệu cho rằng Nguyễn Trãi đến sau), Lê Ngân, Đinh Liệt, làm lễ thề ở Lũng Nhai (Thanh Hóa), nguyện cùng sống chết đánh đuổi quân Minh, chuẩn bị lực lượng cho cuộc khởi nghĩa.',
    },
    {
      id: 'lam-son',
      year: 1418,
      yearLabel: '1418 – 1427',
      title: 'Khởi nghĩa Lam Sơn',
      summary: 'Mười năm kháng chiến gian khổ.',
      detail:
        'Đầu năm 1418, Lê Lợi dựng cờ khởi nghĩa ở Lam Sơn (Thanh Hóa), xưng Bình Định Vương. Những năm đầu nghĩa quân nhiều lần bị vây hãm, phải rút lên núi Chí Linh; Lê Lai đóng giả Lê Lợi để cứu chủ tướng. Năm 1424, theo kế của Nguyễn Chích, nghĩa quân chuyển vào Nghệ An, rồi giải phóng dần từ nam ra bắc. Năm 1426, nghĩa quân thắng lớn ở Tốt Động – Chúc Động, vây thành Đông Quan.',
    },
    {
      id: 'chi-lang-xuong-giang',
      year: 1427,
      yearLabel: '1427',
      title: 'Chiến thắng Chi Lăng – Xương Giang',
      summary: 'Liễu Thăng bị chém, quân Minh rút về nước.',
      detail:
        'Tháng 10 năm 1427, nhà Minh sai Liễu Thăng, Mộc Thạnh đem viện binh sang. Liễu Thăng bị phục kích và bị chém ở ải Chi Lăng, quân Minh bị đánh tan ở Xương Giang. Mộc Thạnh nghe tin cũng tháo chạy. Vương Thông ở thành Đông Quan phải xin hòa; tháng 12 năm 1427 hai bên làm Hội thề Đông Quan, quân Minh rút về nước.',
    },
    {
      id: 'lap-nha-le',
      year: 1428,
      yearLabel: '1428',
      title: 'Lê Lợi lên ngôi, lập nhà Hậu Lê',
      summary: 'Khôi phục quốc hiệu Đại Việt.',
      detail:
        'Năm 1428, Lê Lợi lên ngôi hoàng đế, tức Lê Thái Tổ, đóng đô ở Đông Kinh (Thăng Long), khôi phục quốc hiệu Đại Việt. Nhà vua cho giải tán phần lớn quân đội về làm ruộng, ban hành phép quân điền và bắt tay xây dựng lại đất nước sau chiến tranh.',
    },
    {
      id: 'binh-ngo-dai-cao',
      year: 1428,
      yearLabel: '1428',
      title: 'Nguyễn Trãi viết Bình Ngô đại cáo',
      summary: '"Thiên cổ hùng văn", bản tuyên ngôn độc lập thứ hai.',
      detail:
        'Thay lời Lê Lợi, Nguyễn Trãi soạn Bình Ngô đại cáo, tổng kết cuộc kháng chiến chống quân Minh và tuyên bố nền độc lập: "Như nước Đại Việt ta từ trước, vốn xưng nền văn hiến đã lâu". Tác phẩm được coi là bản tuyên ngôn độc lập thứ hai của dân tộc, sau Nam quốc sơn hà.',
    },
    {
      id: 'ho-hoan-kiem',
      year: 1428,
      yearLabel: 'Theo truyền thuyết',
      title: 'Truyền thuyết trả gươm ở hồ Lục Thủy',
      summary: 'Hồ được đổi tên là hồ Hoàn Kiếm.',
      detail:
        'Tương truyền sau khi đánh đuổi giặc Minh, Lê Thái Tổ đi thuyền trên hồ Lục Thủy thì Rùa Vàng nổi lên đòi lại thanh gươm thần mà Long Quân cho mượn. Từ đó hồ được gọi là hồ Hoàn Kiếm (hồ Gươm). Đây là truyền thuyết, không phải sự kiện được ghi chép đương thời.',
    },
    {
      id: 'le-chi-vien',
      year: 1442,
      yearLabel: '1442',
      title: 'Vụ án Lệ Chi Viên',
      summary: 'Nguyễn Trãi bị khép tội giết vua, tru di tam tộc.',
      detail:
        'Vua Lê Thái Tông đi duyệt quân, ghé thăm Nguyễn Trãi ở Côn Sơn rồi đột ngột mất tại vườn vải Lệ Chi Viên (Bắc Ninh) khi có Nguyễn Thị Lộ bên cạnh. Nguyễn Trãi và vợ bị khép tội giết vua và bị tru di tam tộc. Năm 1464, vua Lê Thánh Tông minh oan cho Nguyễn Trãi và tìm con cháu ông để bổ dụng.',
    },
    {
      id: 'le-thanh-tong',
      year: 1460,
      yearLabel: '1460 – 1497',
      title: 'Thời Lê Thánh Tông thịnh trị',
      summary: 'Đỉnh cao của nhà nước quân chủ Đại Việt.',
      detail:
        'Lê Thánh Tông lên ngôi năm 1460, trị vì 38 năm. Ông cải cách bộ máy hành chính, chia cả nước thành 13 đạo thừa tuyên, đặt lục bộ, lục khoa, lục tự. Năm 1490 ông cho hoàn thành bản đồ Hồng Đức. Ông cũng là nhà thơ lớn với các tác phẩm như Thiên Nam dư hạ tập, Hồng Đức quốc âm thi tập.',
    },
    {
      id: 'binh-chiem-1471',
      year: 1471,
      yearLabel: '1471',
      title: 'Lê Thánh Tông đánh Chiêm Thành',
      summary: 'Lập thừa tuyên Quảng Nam.',
      detail:
        'Vua Chiêm Thành đem quân đánh Hóa Châu. Năm 1471, Lê Thánh Tông thân chinh đem quân đánh Chiêm Thành, hạ kinh đô Đồ Bàn (Vijaya), bắt vua Trà Toàn. Vùng đất mới từ đèo Hải Vân đến Quảng Ngãi được lập thành thừa tuyên Quảng Nam.',
    },
    {
      id: 'luat-hong-duc',
      year: 1483,
      yearLabel: 'Khoảng 1483',
      title: 'Bộ luật Hồng Đức',
      summary: 'Bộ luật tiến bộ, bảo vệ quyền lợi phụ nữ.',
      detail:
        'Quốc triều hình luật, thường gọi là luật Hồng Đức, được hoàn chỉnh dưới thời Lê Thánh Tông với hơn 700 điều. Bộ luật có nhiều điểm tiến bộ như bảo vệ quyền sở hữu tài sản và quyền thừa kế của phụ nữ, bảo vệ chủ quyền lãnh thổ, và được dùng suốt thời Lê.',
    },
    {
      id: 'bia-tien-si',
      year: 1484,
      yearLabel: '1484',
      title: 'Dựng bia tiến sĩ ở Văn Miếu',
      summary: 'Khắc tên người đỗ đạt để lưu danh.',
      detail:
        'Lê Thánh Tông cho dựng bia đá khắc tên các tiến sĩ, bắt đầu từ khoa thi năm 1442, đặt tại Văn Miếu – Quốc Tử Giám. Hiện còn 82 tấm bia, được UNESCO ghi danh là Di sản tư liệu thế giới năm 2010.',
    },
    {
      id: 'hoi-tao-dan',
      year: 1495,
      yearLabel: '1495',
      title: 'Hội Tao Đàn',
      summary: 'Lê Thánh Tông làm Tao Đàn nguyên súy.',
      detail:
        'Lê Thánh Tông lập Hội Tao Đàn gồm 28 văn thần, tự làm Tao Đàn nguyên súy, Thân Nhân Trung và Đỗ Nhuận làm phó nguyên súy. Hội sáng tác nhiều thơ văn ca ngợi đất nước, đánh dấu sự phát triển của văn học chữ Hán và chữ Nôm.',
    },
    {
      id: 'suy-thoai',
      year: 1505,
      yearLabel: '1505 – 1516',
      title: 'Nhà Lê suy thoái',
      summary: 'Thời Lê Uy Mục và Lê Tương Dực.',
      detail:
        'Sau thời Lê Thánh Tông và Lê Hiến Tông, nhà Lê suy yếu. Lê Uy Mục ăn chơi, giết hại người vô tội, bị gọi là "vua quỷ". Lê Tương Dực xây Cửu Trùng Đài tốn kém, bị gọi là "vua lợn". Triều đình rối ren, các phe phái tranh giành quyền lực.',
    },
    {
      id: 'tran-cao',
      year: 1516,
      yearLabel: '1516',
      title: 'Khởi nghĩa Trần Cảo',
      summary: 'Nghĩa quân chiếm được kinh thành Thăng Long.',
      detail:
        'Trần Cảo khởi nghĩa ở Đông Triều (Quảng Ninh), nghĩa quân cạo trọc đầu nên gọi là "quân ba chỏm". Nghĩa quân ba lần đánh vào Thăng Long, có lúc chiếm được kinh thành. Cùng năm, Lê Tương Dực bị giết. Trong cảnh rối loạn đó, thế lực của Mạc Đăng Dung ngày càng lớn mạnh.',
    },
  ],
  mac: [
    {
      id: 'mac-dang-dung',
      year: 1527,
      yearLabel: '1527',
      title: 'Mạc Đăng Dung lập nhà Mạc',
      summary: 'Phế nhà Lê, đóng đô ở Thăng Long.',
      detail:
        'Mạc Đăng Dung, xuất thân là một võ quan, dần nắm toàn bộ quyền lực trong triều Lê. Năm 1527, ông ép vua Lê Cung Hoàng nhường ngôi, lập nhà Mạc. Năm 1533, cựu thần nhà Lê là Nguyễn Kim tôn Lê Trang Tông lên ngôi ở vùng Thanh Hóa – Ai Lao, mở đầu thời kỳ Nam – Bắc triều: Bắc triều là nhà Mạc, Nam triều là nhà Lê trung hưng.',
    },
    {
      id: 'nguyen-binh-khiem',
      year: 1535,
      yearLabel: '1535',
      title: 'Nguyễn Bỉnh Khiêm đỗ trạng nguyên',
      summary: 'Nhà Mạc duy trì đều đặn khoa cử.',
      detail:
        'Nguyễn Bỉnh Khiêm đỗ trạng nguyên khoa thi năm 1535 dưới triều Mạc, sau này được gọi là Trạng Trình. Ông là nhà thơ, nhà giáo lớn, được dân gian truyền nhiều lời "sấm" tiên tri. Nhà Mạc tổ chức đều đặn hơn 20 khoa thi, kinh tế hàng hóa và nghề gốm, nghề đúc đồng phát triển.',
    },
    {
      id: 'dau-hang-minh',
      year: 1540,
      yearLabel: '1540',
      title: 'Mạc Đăng Dung đầu hàng nhà Minh',
      summary: 'Dâng đất, chịu nhận chức Đô thống sứ.',
      detail:
        'Trước nguy cơ nhà Minh đem quân sang hỏi tội, Mạc Đăng Dung đến cửa Nam Quan tự trói mình xin hàng, dâng sổ sách đất đai và nhượng một số động ở vùng biên giới. Nhà Minh hạ nước ta xuống thành An Nam đô thống sứ ty, phong Mạc Đăng Dung chức Đô thống sứ. Hành động này bị sử cũ chê trách nặng nề.',
    },
    {
      id: 'mac-mau-hop',
      year: 1592,
      yearLabel: '1592',
      title: 'Trịnh Tùng lấy lại Thăng Long',
      summary: 'Mạc Mậu Hợp bị bắt, nhà Mạc mất kinh đô.',
      detail:
        'Cuối năm 1592, chúa Trịnh Tùng đem quân Nam triều đánh chiếm Thăng Long. Vua Mạc Mậu Hợp bị bắt và bị xử tử. Nhà Mạc mất quyền kiểm soát đồng bằng Bắc Bộ.',
    },
    {
      id: 'mac-cao-bang',
      year: 1593,
      yearLabel: '1593 – 1677',
      title: 'Nhà Mạc ở Cao Bằng',
      summary: 'Dư đảng họ Mạc giữ Cao Bằng gần một thế kỷ.',
      detail:
        'Con cháu họ Mạc chạy lên Cao Bằng, được nhà Minh rồi nhà Thanh che chở, tiếp tục cát cứ ở đây. Năm 1677, chúa Trịnh Tạc đem quân đánh chiếm Cao Bằng, nhà Mạc chấm dứt hoàn toàn.',
    },
  ],
  'le-trung-hung': [
    {
      id: 'le-trang-tong',
      year: 1533,
      yearLabel: '1533',
      title: 'Nguyễn Kim tôn Lê Trang Tông',
      summary: 'Mở đầu thời Lê trung hưng.',
      detail:
        'Hữu vệ điện tiền tướng quân Nguyễn Kim tìm được con cháu nhà Lê là Lê Duy Ninh, tôn lên ngôi ở Ai Lao, tức Lê Trang Tông, lấy danh nghĩa "phù Lê diệt Mạc" để tập hợp lực lượng. Nam triều dần lấy lại vùng Thanh Hóa, Nghệ An.',
    },
    {
      id: 'trinh-kiem',
      year: 1545,
      yearLabel: '1545',
      title: 'Trịnh Kiểm nắm binh quyền',
      summary: 'Nguyễn Kim bị đầu độc, quyền lực về tay họ Trịnh.',
      detail:
        'Nguyễn Kim bị một hàng tướng nhà Mạc đầu độc chết. Con rể ông là Trịnh Kiểm lên nắm binh quyền Nam triều. Để củng cố quyền lực, Trịnh Kiểm giết người con trưởng của Nguyễn Kim là Nguyễn Uông, đặt nền móng cho thế lực các chúa Trịnh.',
    },
    {
      id: 'nguyen-hoang-thuan-hoa',
      year: 1558,
      yearLabel: '1558',
      title: 'Nguyễn Hoàng vào trấn thủ Thuận Hóa',
      summary: 'Mở đầu cơ nghiệp các chúa Nguyễn ở phương Nam.',
      detail:
        'Lo bị Trịnh Kiểm hãm hại, Nguyễn Hoàng, con thứ của Nguyễn Kim, nhờ chị là Ngọc Bảo (vợ Trịnh Kiểm) xin vào trấn thủ đất Thuận Hóa. Tương truyền Nguyễn Bỉnh Khiêm khuyên: "Hoành Sơn nhất đái, vạn đại dung thân" (một dải Hoành Sơn có thể dung thân muôn đời). Từ đây họ Nguyễn xây dựng cơ nghiệp riêng ở Đàng Trong.',
    },
    {
      id: 'vua-le-chua-trinh',
      year: 1593,
      yearLabel: '1593',
      title: 'Chế độ vua Lê – chúa Trịnh',
      summary: 'Vua Lê giữ ngôi, chúa Trịnh nắm thực quyền.',
      detail:
        'Sau khi lấy lại Thăng Long, Trịnh Tùng rước vua Lê Thế Tông về kinh. Từ đây hình thành chế độ "vua Lê – chúa Trịnh": vua Lê chỉ giữ ngôi vị trên danh nghĩa, mọi quyền hành nằm trong phủ chúa Trịnh. Chế độ này kéo dài gần hai thế kỷ.',
    },
    {
      id: 'trinh-nguyen-phan-tranh',
      year: 1627,
      yearLabel: '1627 – 1672',
      title: 'Trịnh – Nguyễn phân tranh',
      summary: 'Bảy lần giao tranh, sông Gianh chia cắt đất nước.',
      detail:
        'Chúa Trịnh ở Đàng Ngoài và chúa Nguyễn ở Đàng Trong đánh nhau bảy lần trong 45 năm, chủ yếu ở vùng Quảng Bình, Nghệ An. Chúa Nguyễn xây hệ thống lũy Thầy (Đào Duy Từ thiết kế) để phòng thủ. Năm 1672 hai bên ngừng chiến, lấy sông Gianh làm ranh giới, đất nước chia cắt hơn 100 năm.',
    },
    {
      id: 'chu-quoc-ngu',
      year: 1651,
      yearLabel: '1651',
      title: 'Từ điển Việt – Bồ – La',
      summary: 'Bước phát triển quan trọng của chữ Quốc ngữ.',
      detail:
        'Các giáo sĩ phương Tây sang truyền đạo đã dùng chữ cái La-tinh để ghi âm tiếng Việt. Năm 1651, giáo sĩ Alexandre de Rhodes xuất bản cuốn Từ điển Việt – Bồ – La ở Roma, dựa trên công trình của nhiều giáo sĩ đi trước như Francisco de Pina. Đây là cơ sở của chữ Quốc ngữ ngày nay.',
    },
    {
      id: 'mo-coi-phuong-nam',
      year: 1698,
      yearLabel: '1698',
      title: 'Lập phủ Gia Định',
      summary: 'Nguyễn Hữu Cảnh xác lập chủ quyền vùng đất Nam Bộ.',
      detail:
        'Các chúa Nguyễn tổ chức di dân, khai hoang vùng đất phương Nam. Năm 1698, chúa Nguyễn Phúc Chu sai Thống suất Nguyễn Hữu Cảnh vào kinh lược, lập phủ Gia Định với hai dinh Trấn Biên và Phiên Trấn, chính thức xác lập chủ quyền và tổ chức hành chính trên vùng đất Đồng Nai – Sài Gòn.',
    },
    {
      id: 'mac-cuu-ha-tien',
      year: 1708,
      yearLabel: '1708',
      title: 'Mạc Cửu dâng đất Hà Tiên',
      summary: 'Lãnh thổ Đàng Trong mở tới vịnh Thái Lan.',
      detail:
        'Mạc Cửu, người Hoa từ Quảng Đông sang khai phá vùng Hà Tiên, xin thần phục chúa Nguyễn Phúc Chu và được phong làm Tổng binh trấn Hà Tiên. Con ông là Mạc Thiên Tứ tiếp tục mở mang vùng đất này. Đến giữa thế kỷ XVIII, chúa Nguyễn đã làm chủ toàn bộ đồng bằng sông Cửu Long.',
    },
    {
      id: 'khoi-nghia-nong-dan',
      year: 1739,
      yearLabel: '1739 – 1769',
      title: 'Phong trào khởi nghĩa nông dân Đàng Ngoài',
      summary: 'Nguyễn Hữu Cầu, Hoàng Công Chất, Lê Duy Mật.',
      detail:
        'Chính quyền vua Lê – chúa Trịnh mục nát, ruộng đất bị chiếm đoạt, nạn đói xảy ra liên tiếp. Nhiều cuộc khởi nghĩa nông dân lớn nổ ra: Nguyễn Danh Phương, Nguyễn Hữu Cầu (Quận He), Hoàng Công Chất, Lê Duy Mật. Các cuộc khởi nghĩa đều bị đàn áp nhưng làm chính quyền họ Trịnh suy yếu nghiêm trọng.',
    },
    {
      id: 'trinh-chiem-phu-xuan',
      year: 1774,
      yearLabel: '1774 – 1775',
      title: 'Quân Trịnh chiếm Phú Xuân',
      summary: 'Nhân lúc Tây Sơn nổi dậy, Hoàng Ngũ Phúc tiến vào Nam.',
      detail:
        'Lợi dụng việc chúa Nguyễn đang phải đối phó với phong trào Tây Sơn, chúa Trịnh Sâm sai Hoàng Ngũ Phúc đem quân vượt sông Gianh, chiếm Phú Xuân đầu năm 1775. Chúa Nguyễn phải chạy vào Gia Định.',
    },
    {
      id: 'le-quy-don',
      year: 1776,
      yearLabel: '1776',
      title: 'Lê Quý Đôn soạn Phủ biên tạp lục',
      summary: 'Bộ sách quý về vùng đất Đàng Trong.',
      detail:
        'Lê Quý Đôn, nhà bác học lớn của thế kỷ XVIII, được cử vào làm quan ở Thuận Hóa, đã ghi chép về địa lý, kinh tế, xã hội Đàng Trong trong Phủ biên tạp lục. Sách có những ghi chép sớm về hoạt động của đội Hoàng Sa trên biển Đông. Ông còn để lại Đại Việt thông sử, Kiến văn tiểu lục, Vân đài loại ngữ.',
    },
    {
      id: 'kieu-binh',
      year: 1782,
      yearLabel: '1782',
      title: 'Loạn kiêu binh',
      summary: 'Lính Tam phủ lộng hành, phủ chúa rối loạn.',
      detail:
        'Chúa Trịnh Sâm mất, bỏ con trưởng Trịnh Khải để lập con nhỏ Trịnh Cán. Quân lính Tam phủ (Thanh Hóa, Nghệ An) nổi loạn, giết quận Huy Hoàng Đình Bảo, lập Trịnh Khải lên ngôi chúa. Từ đó kiêu binh cậy công lộng hành, phá phách khắp kinh thành, chính quyền họ Trịnh suy sụp.',
    },
    {
      id: 'chieu-thong',
      year: 1788,
      yearLabel: '1788 – 1789',
      title: 'Lê Chiêu Thống cầu cứu nhà Thanh',
      summary: 'Nhà Lê chấm dứt sau chiến thắng của Quang Trung.',
      detail:
        'Vua Lê Chiêu Thống không chống nổi quân Tây Sơn, chạy sang cầu cứu nhà Thanh. Năm 1788, vua Càn Long sai Tôn Sĩ Nghị đem quân sang chiếm Thăng Long. Sau khi quân Thanh bị Quang Trung đánh bại đầu năm 1789, Lê Chiêu Thống theo quân Thanh chạy sang Trung Quốc và mất ở đó. Nhà Lê chấm dứt.',
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
        'Ba anh em Nguyễn Nhạc, Nguyễn Huệ, Nguyễn Lữ dựng cờ khởi nghĩa ở ấp Tây Sơn (Bình Định), lấy khẩu hiệu "lấy của nhà giàu chia cho dân nghèo", chống lại quyền thần Trương Phúc Loan của chúa Nguyễn. Nghĩa quân nhanh chóng lớn mạnh, chiếm thành Quy Nhơn năm 1773.',
    },
    {
      id: 'nguyen-nhac-xung-de',
      year: 1778,
      yearLabel: '1778',
      title: 'Nguyễn Nhạc xưng hoàng đế',
      summary: 'Lập nhà Tây Sơn, đóng đô ở Quy Nhơn.',
      detail:
        'Sau khi đánh bại chúa Nguyễn ở Gia Định (1777), Nguyễn Nhạc lên ngôi hoàng đế, niên hiệu Thái Đức, đóng đô ở thành Hoàng Đế (Quy Nhơn), phong Nguyễn Huệ làm Long Nhương tướng quân.',
    },
    {
      id: 'rach-gam-xoai-mut',
      year: 1785,
      yearLabel: '1785',
      title: 'Chiến thắng Rạch Gầm – Xoài Mút',
      summary: 'Đánh tan 5 vạn quân Xiêm.',
      detail:
        'Nguyễn Ánh cầu cứu Xiêm La, vua Xiêm sai hai vạn thủy binh và ba vạn bộ binh sang đánh Gia Định. Tháng 1 năm 1785, Nguyễn Huệ bố trí trận mai phục trên đoạn sông Tiền từ Rạch Gầm đến Xoài Mút (Tiền Giang), nhử thủy quân Xiêm vào rồi tiêu diệt gần như toàn bộ. Nguyễn Ánh phải chạy sang Xiêm.',
    },
    {
      id: 'phu-le-diet-trinh',
      year: 1786,
      yearLabel: '1786',
      title: 'Phù Lê diệt Trịnh',
      summary: 'Lấy Phú Xuân, ra Bắc lật đổ chúa Trịnh.',
      detail:
        'Giữa năm 1786, Nguyễn Huệ đánh chiếm Phú Xuân, rồi theo kế của Nguyễn Hữu Chỉnh tiến ra Bắc với danh nghĩa "phù Lê diệt Trịnh". Chúa Trịnh Khải thua chạy rồi tự sát, chế độ chúa Trịnh chấm dứt. Vua Lê Hiển Tông gả con gái là công chúa Ngọc Hân cho Nguyễn Huệ.',
    },
    {
      id: 'quang-trung-len-ngoi',
      year: 1788,
      yearLabel: '22/12/1788',
      title: 'Nguyễn Huệ lên ngôi hoàng đế',
      summary: 'Lấy niên hiệu Quang Trung, tiến quân ra Bắc.',
      detail:
        'Được tin 29 vạn quân Thanh chiếm Thăng Long, ngày 22 tháng 12 năm 1788 Nguyễn Huệ lên ngôi hoàng đế ở núi Bân (Phú Xuân), lấy niên hiệu Quang Trung, rồi lập tức tiến quân ra Bắc. Đến Nghệ An, ông tuyển thêm quân và mở cuộc duyệt binh lớn, khích lệ: "Đánh cho để dài tóc, đánh cho để đen răng…"',
    },
    {
      id: 'ngoc-hoi-dong-da',
      year: 1789,
      yearLabel: 'Tết Kỷ Dậu 1789',
      title: 'Đại phá quân Thanh – Ngọc Hồi – Đống Đa',
      summary: 'Hành quân thần tốc, giải phóng Thăng Long.',
      detail:
        'Quang Trung cho quân ăn Tết trước, hẹn ngày mồng 7 Tết vào Thăng Long. Đêm 30 Tết, quân Tây Sơn vượt sông Gián Khẩu, lần lượt hạ các đồn Hà Hồi, Ngọc Hồi; cánh quân của Đô đốc Long đánh úp đồn Khương Thượng (Đống Đa). Sáng mồng 5 Tết Kỷ Dậu (30/1/1789), Quang Trung tiến vào Thăng Long. Tôn Sĩ Nghị tháo chạy, quân Thanh tan rã.',
    },
    {
      id: 'chinh-sach-quang-trung',
      year: 1789,
      yearLabel: '1789 – 1792',
      title: 'Chính sách xây dựng đất nước của Quang Trung',
      summary: 'Chiếu khuyến nông, đề cao chữ Nôm, lập Sùng chính viện.',
      detail:
        'Quang Trung ban Chiếu khuyến nông để đưa dân phiêu tán về quê làm ruộng, mở cửa ải để buôn bán, và ban Chiếu lập học. Ông đề cao chữ Nôm, dùng trong văn bản nhà nước và thi cử, lập Sùng chính viện do La Sơn Phu tử Nguyễn Thiếp đứng đầu để dịch sách chữ Hán ra chữ Nôm. Về ngoại giao, ông giữ hòa hiếu với nhà Thanh.',
    },
    {
      id: 'quang-trung-mat',
      year: 1792,
      yearLabel: '16/9/1792',
      title: 'Quang Trung đột ngột qua đời',
      summary: 'Quang Toản 10 tuổi lên ngôi, triều Tây Sơn suy yếu.',
      detail:
        'Quang Trung mất đột ngột khi mới 39 tuổi, để lại nhiều dự định dang dở. Con là Nguyễn Quang Toản mới 10 tuổi lên ngôi (niên hiệu Cảnh Thịnh). Triều đình rơi vào cảnh lục đục nội bộ, ngoại thích Bùi Đắc Tuyên chuyên quyền, các tướng giỏi bị giết hại.',
    },
    {
      id: 'tay-son-sup-do',
      year: 1801,
      yearLabel: '1801 – 1802',
      title: 'Nhà Tây Sơn sụp đổ',
      summary: 'Nguyễn Ánh chiếm Phú Xuân, Thăng Long.',
      detail:
        'Nguyễn Ánh từ Gia Định liên tục đánh ra. Năm 1801, quân Nguyễn chiếm Phú Xuân. Năm 1802, Nguyễn Ánh tiến ra Bắc, chiếm Thăng Long. Vua Quang Toản và các tướng bị bắt. Nhà Tây Sơn chấm dứt.',
    },
  ],
  nguyen: [
    {
      id: 'gia-long-thong-nhat',
      year: 1802,
      yearLabel: '1802',
      title: 'Gia Long lên ngôi, thống nhất đất nước',
      summary: 'Lập nhà Nguyễn, đóng đô ở Phú Xuân.',
      detail:
        'Năm 1802, Nguyễn Ánh lên ngôi, lấy niên hiệu Gia Long, lập nhà Nguyễn, đóng đô ở Phú Xuân (Huế). Lần đầu tiên lãnh thổ từ Lạng Sơn đến Cà Mau được thống nhất dưới một chính quyền. Nguyễn Ánh từng nhờ cậy người Pháp (qua giám mục Bá Đa Lộc) và quân Xiêm trong quá trình đánh Tây Sơn.',
    },
    {
      id: 'quoc-hieu-viet-nam',
      year: 1804,
      yearLabel: '1804',
      title: 'Đặt quốc hiệu Việt Nam',
      summary: 'Tên gọi Việt Nam chính thức ra đời.',
      detail:
        'Năm 1804, sau khi nhà Thanh chấp thuận, Gia Long chính thức đặt quốc hiệu Việt Nam. Đây là lần đầu tên gọi Việt Nam được dùng làm quốc hiệu chính thức.',
    },
    {
      id: 'hoang-viet-luat-le',
      year: 1815,
      yearLabel: '1815',
      title: 'Ban hành Hoàng Việt luật lệ',
      summary: 'Bộ luật Gia Long gồm 398 điều.',
      detail:
        'Bộ Hoàng Việt luật lệ, thường gọi là luật Gia Long, được ban hành năm 1815, gồm 398 điều. Bộ luật chịu ảnh hưởng sâu sắc luật nhà Thanh, đề cao quyền lực nhà vua và trật tự phong kiến.',
    },
    {
      id: 'truyen-kieu',
      year: 1820,
      yearLabel: 'Đầu thế kỷ XIX',
      title: 'Nguyễn Du và Truyện Kiều',
      summary: 'Kiệt tác của văn học chữ Nôm.',
      detail:
        'Nguyễn Du (1766 – 1820) sáng tác Đoạn trường tân thanh, thường gọi là Truyện Kiều, gồm 3.254 câu thơ lục bát, dựa trên cốt truyện Kim Vân Kiều truyện của Trung Quốc. Tác phẩm được coi là đỉnh cao của văn học chữ Nôm và ngôn ngữ Việt.',
    },
    {
      id: 'minh-mang-cai-cach',
      year: 1831,
      yearLabel: '1831 – 1832',
      title: 'Cải cách hành chính thời Minh Mạng',
      summary: 'Chia cả nước thành 30 tỉnh và phủ Thừa Thiên.',
      detail:
        'Vua Minh Mạng bỏ các tổng trấn Bắc Thành và Gia Định Thành, chia cả nước thành 30 tỉnh và phủ Thừa Thiên, đặt các chức tổng đốc, tuần phủ. Nhà vua cũng lập Cơ mật viện, xây dựng bộ máy nhà nước tập quyền chặt chẽ.',
    },
    {
      id: 'hoang-sa-1836',
      year: 1836,
      yearLabel: '1836',
      title: 'Cắm mốc chủ quyền ở Hoàng Sa',
      summary: 'Minh Mạng sai thủy quân ra đo đạc, dựng bia.',
      detail:
        'Vua Minh Mạng sai suất đội thủy quân Phạm Hữu Nhật đem binh thuyền ra quần đảo Hoàng Sa đo đạc, vẽ bản đồ và cắm mốc. Đây là một trong nhiều tư liệu chính thức thể hiện việc nhà nước Việt Nam thực thi chủ quyền đối với Hoàng Sa từ các thế kỷ trước.',
    },
    {
      id: 'quoc-hieu-dai-nam',
      year: 1838,
      yearLabel: '1838 (có tài liệu ghi 1839)',
      title: 'Đổi quốc hiệu thành Đại Nam',
      summary: 'Quốc hiệu dùng đến năm 1945.',
      detail:
        'Vua Minh Mạng đổi quốc hiệu từ Việt Nam thành Đại Nam. Quốc hiệu này được dùng trong các văn bản chính thức của triều Nguyễn cho đến năm 1945.',
    },
    {
      id: 'tu-duc',
      year: 1847,
      yearLabel: '1847',
      title: 'Tự Đức lên ngôi',
      summary: 'Chính sách bế quan tỏa cảng và cấm đạo.',
      detail:
        'Vua Tự Đức lên ngôi, trị vì 36 năm, lâu nhất trong các vua nhà Nguyễn. Triều đình tiếp tục chính sách hạn chế buôn bán với phương Tây và cấm đạo Thiên Chúa, từ chối nhiều đề nghị canh tân. Phương Tây lấy việc cấm đạo làm cớ để can thiệp.',
    },
    {
      id: 'phap-no-sung',
      year: 1858,
      yearLabel: '1858',
      title: 'Pháp nổ súng xâm lược',
      summary: 'Mở đầu quá trình mất nước của nhà Nguyễn.',
      detail:
        'Ngày 1 tháng 9 năm 1858, liên quân Pháp – Tây Ban Nha nổ súng tấn công Đà Nẵng. Từ đây nhà Nguyễn từng bước nhượng đất cho Pháp, mất dần chủ quyền trong vòng 26 năm.',
    },
    {
      id: 'tu-duc-mat',
      year: 1883,
      yearLabel: '1883 – 1884',
      title: 'Tự Đức mất, "bốn tháng ba vua"',
      summary: 'Triều đình rối ren, quyền thần thay vua liên tục.',
      detail:
        'Tự Đức mất năm 1883, không có con nối dõi. Hai phụ chính đại thần Nguyễn Văn Tường và Tôn Thất Thuyết lần lượt lập rồi phế các vua Dục Đức, Hiệp Hòa, Kiến Phúc chỉ trong thời gian ngắn, dân gian gọi là "tứ nguyệt tam vua". Năm 1884, Hàm Nghi 12 tuổi được lập lên ngôi.',
    },
    {
      id: 'phe-thanh-thai',
      year: 1907,
      yearLabel: '1907',
      title: 'Pháp phế vua Thành Thái',
      summary: 'Vị vua yêu nước bị đưa đi an trí.',
      detail:
        'Vua Thành Thái có tư tưởng chống Pháp, ngầm ủng hộ các phong trào yêu nước. Năm 1907, thực dân Pháp lấy cớ nhà vua bị điên để ép ông thoái vị, đưa con là Vĩnh San mới 8 tuổi lên ngôi, tức vua Duy Tân. Thành Thái bị an trí ở Vũng Tàu, sau đó bị đày sang đảo Réunion.',
    },
    {
      id: 'duy-tan-khoi-nghia',
      year: 1916,
      yearLabel: '1916',
      title: 'Vua Duy Tân mưu khởi nghĩa',
      summary: 'Cùng Thái Phiên, Trần Cao Vân lập kế đánh Pháp.',
      detail:
        'Vua Duy Tân bí mật liên lạc với Việt Nam Quang phục hội, cùng Thái Phiên, Trần Cao Vân định khởi nghĩa ở Trung Kỳ vào tháng 5 năm 1916. Kế hoạch bị lộ, nhà vua bị bắt và bị đày sang đảo Réunion, Thái Phiên và Trần Cao Vân bị xử tử.',
    },
    {
      id: 'bao-dai-thoai-vi',
      year: 1945,
      yearLabel: '30/8/1945',
      title: 'Vua Bảo Đại thoái vị',
      summary: 'Chế độ quân chủ chấm dứt ở Việt Nam.',
      detail:
        'Sau thắng lợi của Cách mạng Tháng Tám, ngày 30 tháng 8 năm 1945 vua Bảo Đại thoái vị tại Ngọ Môn (Huế), trao ấn kiếm cho đại diện Chính phủ lâm thời và tuyên bố: "Trẫm muốn được làm dân một nước tự do hơn làm vua một nước bị trị." Nhà Nguyễn và chế độ quân chủ ở Việt Nam chấm dứt.',
    },
  ],
  'phap-thuoc': [
    {
      id: 'da-nang-1858',
      year: 1858,
      yearLabel: '1/9/1858',
      title: 'Liên quân Pháp – Tây Ban Nha tấn công Đà Nẵng',
      summary: 'Nguyễn Tri Phương lập phòng tuyến chặn giặc.',
      detail:
        'Lấy cớ triều Nguyễn cấm đạo, liên quân Pháp – Tây Ban Nha do Rigault de Genouilly chỉ huy nổ súng đánh Đà Nẵng, mở đầu cuộc xâm lược. Quân dân ta dưới sự chỉ huy của Nguyễn Tri Phương đắp lũy, thực hiện "vườn không nhà trống", làm thất bại kế hoạch đánh nhanh thắng nhanh của Pháp.',
    },
    {
      id: 'gia-dinh-1859',
      year: 1859,
      yearLabel: '17/2/1859',
      title: 'Pháp chiếm thành Gia Định',
      summary: 'Chuyển hướng tấn công vào Nam Kỳ.',
      detail:
        'Bị sa lầy ở Đà Nẵng, quân Pháp chuyển vào đánh Gia Định, vùng đất trù phú, xa kinh đô. Thành Gia Định thất thủ ngày 17 tháng 2 năm 1859. Nhân dân các nơi tự động nổi lên đánh giặc.',
    },
    {
      id: 'chi-hoa-1861',
      year: 1861,
      yearLabel: '1861',
      title: 'Đại đồn Chí Hòa thất thủ, Nguyễn Trung Trực đốt tàu Espérance',
      summary: 'Pháp mở rộng chiếm đóng, nghĩa quân lập chiến công vang dội.',
      detail:
        'Tháng 2 năm 1861, quân Pháp tấn công Đại đồn Chí Hòa, Nguyễn Tri Phương bị thương, đồn thất thủ. Pháp lần lượt chiếm Định Tường, Biên Hòa, Vĩnh Long. Ngày 10 tháng 12 năm 1861, Nguyễn Trung Trực chỉ huy nghĩa quân đốt cháy tàu chiến Espérance của Pháp trên sông Nhật Tảo. Khi bị xử tử năm 1868, ông nói: "Bao giờ người Tây nhổ hết cỏ nước Nam thì mới hết người Nam đánh Tây."',
    },
    {
      id: 'nguyen-dinh-chieu',
      year: 1861,
      yearLabel: '1861',
      title: 'Nguyễn Đình Chiểu và Văn tế nghĩa sĩ Cần Giuộc',
      summary: 'Ngòi bút chiến đấu của nhà thơ mù yêu nước.',
      detail:
        'Nghĩa quân nông dân tập kích đồn Cần Giuộc tháng 12 năm 1861, nhiều người hy sinh. Nhà thơ mù Nguyễn Đình Chiểu viết Văn tế nghĩa sĩ Cần Giuộc, ca ngợi những người nông dân "chẳng phải quân cơ, quân vệ" đã đứng lên đánh giặc. Ông kiên quyết không hợp tác với Pháp, dùng thơ văn cổ vũ kháng chiến, và là tác giả Lục Vân Tiên.',
    },
    {
      id: 'nham-tuat-1862',
      year: 1862,
      yearLabel: '5/6/1862',
      title: 'Hòa ước Nhâm Tuất',
      summary: 'Triều đình nhượng ba tỉnh miền Đông Nam Kỳ.',
      detail:
        'Triều Nguyễn ký với Pháp Hòa ước Nhâm Tuất, nhượng ba tỉnh Biên Hòa, Gia Định, Định Tường và đảo Côn Lôn, mở cửa biển cho Pháp buôn bán, cho truyền đạo và bồi thường chiến phí. Triều đình ra lệnh bãi binh, nhưng nhiều thủ lĩnh nghĩa quân không tuân theo.',
    },
    {
      id: 'truong-dinh',
      year: 1862,
      yearLabel: '1862 – 1864',
      title: 'Trương Định – Bình Tây đại nguyên soái',
      summary: 'Chống lệnh bãi binh, ở lại cùng nhân dân đánh Pháp.',
      detail:
        'Được nhân dân tôn làm Bình Tây đại nguyên soái, Trương Định không tuân lệnh triều đình bãi binh, đóng căn cứ ở Tân Hòa (Gò Công) tiếp tục chiến đấu. Ngày 20 tháng 8 năm 1864, do bị phản bội, ông bị bao vây và rút gươm tự sát để không rơi vào tay giặc.',
    },
    {
      id: 'mien-tay-1867',
      year: 1867,
      yearLabel: '1867',
      title: 'Pháp chiếm ba tỉnh miền Tây Nam Kỳ',
      summary: 'Phan Thanh Giản uống thuốc độc tự tận.',
      detail:
        'Tháng 6 năm 1867, quân Pháp chiếm ba tỉnh Vĩnh Long, An Giang, Hà Tiên mà không gặp kháng cự đáng kể. Kinh lược sứ Phan Thanh Giản không giữ được thành, nhịn ăn rồi uống thuốc độc tự tận. Toàn bộ Nam Kỳ thuộc Pháp. Các cuộc khởi nghĩa của Nguyễn Hữu Huân, Võ Duy Dương, Nguyễn Trung Trực vẫn tiếp diễn.',
    },
    {
      id: 'ha-noi-1873',
      year: 1873,
      yearLabel: '1873',
      title: 'Pháp đánh Bắc Kỳ lần thứ nhất',
      summary: 'Nguyễn Tri Phương hy sinh; Garnier bị giết ở Cầu Giấy.',
      detail:
        'Ngày 20 tháng 11 năm 1873, quân Pháp do Francis Garnier chỉ huy đánh thành Hà Nội. Nguyễn Tri Phương bị thương nặng, khước từ chữa trị và nhịn ăn đến chết. Ngày 21 tháng 12, quân Cờ Đen của Lưu Vĩnh Phúc phối hợp với quân triều đình phục kích ở Cầu Giấy, giết chết Garnier.',
    },
    {
      id: 'giap-tuat-1874',
      year: 1874,
      yearLabel: '15/3/1874',
      title: 'Hòa ước Giáp Tuất',
      summary: 'Triều đình thừa nhận sáu tỉnh Nam Kỳ thuộc Pháp.',
      detail:
        'Thay vì nhân thắng lợi Cầu Giấy để đánh đuổi Pháp, triều Nguyễn ký Hòa ước Giáp Tuất. Pháp rút quân khỏi Bắc Kỳ, nhưng triều đình chính thức thừa nhận sáu tỉnh Nam Kỳ là đất của Pháp. Hòa ước gây bất bình lớn, làm bùng lên phong trào chống Pháp và chống cả triều đình đầu hàng.',
    },
    {
      id: 'ha-noi-1882',
      year: 1882,
      yearLabel: '1882 – 1883',
      title: 'Pháp đánh Bắc Kỳ lần thứ hai',
      summary: 'Hoàng Diệu tuẫn tiết; Rivière bị giết ở Cầu Giấy.',
      detail:
        'Ngày 25 tháng 4 năm 1882, quân Pháp do Henri Rivière chỉ huy đánh thành Hà Nội. Tổng đốc Hoàng Diệu chỉ huy chống cự, khi thành mất đã thắt cổ tự tử ở Võ Miếu. Ngày 19 tháng 5 năm 1883, quân Cờ Đen lại phục kích ở Cầu Giấy, giết chết Rivière.',
    },
    {
      id: 'harmand-1883',
      year: 1883,
      yearLabel: '25/8/1883',
      title: 'Hòa ước Harmand (Quý Mùi)',
      summary: 'Việt Nam đặt dưới sự bảo hộ của Pháp.',
      detail:
        'Nhân lúc triều đình Huế lục đục sau khi Tự Đức mất, quân Pháp tấn công cửa biển Thuận An, ép triều đình ký Hòa ước Harmand. Triều Nguyễn thừa nhận sự bảo hộ của Pháp ở Bắc Kỳ và Trung Kỳ, sáp nhập Bình Thuận vào Nam Kỳ thuộc Pháp.',
    },
    {
      id: 'hoa-uoc-1884',
      year: 1884,
      yearLabel: '6/6/1884',
      title: 'Hòa ước Patenôtre',
      summary: 'Hoàn thành quá trình xâm lược, Việt Nam mất chủ quyền.',
      detail:
        'Hòa ước Patenôtre (Giáp Thân) sửa đổi đôi chút Hòa ước Harmand, trả lại Bình Thuận và một số tỉnh cho Trung Kỳ, nhưng vẫn xác lập quyền bảo hộ của Pháp trên toàn bộ Việt Nam. Ấn phong của nhà Thanh trao cho vua Nguyễn bị nấu chảy trước mặt sứ Pháp. Nước ta chính thức trở thành thuộc địa nửa phong kiến.',
    },
    {
      id: 'yen-the',
      year: 1884,
      yearLabel: '1884 – 1913',
      title: 'Khởi nghĩa Yên Thế',
      summary: 'Hoàng Hoa Thám kiên trì chiến đấu gần 30 năm.',
      detail:
        'Nông dân vùng Yên Thế (Bắc Giang) nổi dậy chống Pháp để bảo vệ ruộng đất, dưới sự lãnh đạo của Đề Nắm, rồi Đề Thám (Hoàng Hoa Thám). Nghĩa quân dựa vào rừng núi, đánh du kích, hai lần giảng hòa với Pháp để xây dựng lực lượng. Năm 1913, Đề Thám bị sát hại, cuộc khởi nghĩa tan rã. Đây là cuộc khởi nghĩa nông dân kéo dài nhất thời kỳ này.',
    },
    {
      id: 'can-vuong',
      year: 1885,
      yearLabel: '1885 – 1896',
      title: 'Phong trào Cần Vương',
      summary: 'Vua Hàm Nghi ra chiếu kêu gọi phò vua cứu nước.',
      detail:
        'Đêm 4 rạng ngày 5 tháng 7 năm 1885, Tôn Thất Thuyết cho quân tấn công đồn Mang Cá và tòa Khâm sứ Pháp ở Huế nhưng thất bại. Ông đưa vua Hàm Nghi ra Tân Sở (Quảng Trị), ngày 13 tháng 7 năm 1885 nhân danh vua ra chiếu Cần Vương. Văn thân, sĩ phu khắp nơi hưởng ứng: khởi nghĩa Ba Đình (Đinh Công Tráng, 1886 – 1887), Bãi Sậy (Nguyễn Thiện Thuật), Hương Khê (Phan Đình Phùng, Cao Thắng, 1885 – 1896), Hùng Lĩnh (Tống Duy Tân). Năm 1888, vua Hàm Nghi bị bắt và bị đày sang Algérie.',
    },
    {
      id: 'lien-bang-dong-duong',
      year: 1887,
      yearLabel: '17/10/1887',
      title: 'Thành lập Liên bang Đông Dương',
      summary: 'Việt Nam bị chia ba kỳ với ba chế độ cai trị.',
      detail:
        'Pháp thành lập Liên bang Đông Dương gồm Nam Kỳ (thuộc địa), Bắc Kỳ, Trung Kỳ (bảo hộ) và Campuchia, sau đó thêm Lào (1899), do một viên toàn quyền người Pháp đứng đầu. Việt Nam bị chia cắt thành ba "kỳ" với chế độ cai trị khác nhau nhằm thực hiện chính sách "chia để trị".',
    },
    {
      id: 'khai-thac-lan-1',
      year: 1897,
      yearLabel: '1897 – 1914',
      title: 'Cuộc khai thác thuộc địa lần thứ nhất',
      summary: 'Toàn quyền Paul Doumer đẩy mạnh bóc lột.',
      detail:
        'Toàn quyền Paul Doumer tiến hành khai thác thuộc địa quy mô lớn: cướp đoạt ruộng đất lập đồn điền, khai mỏ, xây đường sắt, cầu Doumer (cầu Long Biên), đặt các thứ thuế nặng và độc quyền muối, rượu, thuốc phiện. Xã hội Việt Nam biến đổi sâu sắc, xuất hiện các tầng lớp mới như công nhân, tư sản, tiểu tư sản.',
    },
    {
      id: 'dong-du',
      year: 1905,
      yearLabel: '1904 – 1908',
      title: 'Phan Bội Châu và phong trào Đông Du',
      summary: 'Đưa thanh niên sang Nhật Bản học tập.',
      detail:
        'Năm 1904, Phan Bội Châu cùng các đồng chí lập Duy Tân hội, chủ trương đánh Pháp giành độc lập bằng bạo động. Từ năm 1905, ông tổ chức phong trào Đông Du, đưa khoảng 200 thanh niên sang Nhật Bản học tập. Năm 1908, Pháp cấu kết với Nhật trục xuất du học sinh, phong trào tan rã. Ông còn viết Việt Nam vong quốc sử để thức tỉnh lòng yêu nước.',
    },
    {
      id: 'duy-tan-trung-ky',
      year: 1906,
      yearLabel: '1906 – 1908',
      title: 'Phan Châu Trinh và phong trào Duy Tân',
      summary: '"Khai dân trí, chấn dân khí, hậu dân sinh".',
      detail:
        'Phan Châu Trinh chủ trương cải cách, nâng cao dân trí, dân quyền, dựa vào Pháp để chống phong kiến. Ông viết thư gửi Toàn quyền Beau phê phán chế độ quan lại. Phong trào Duy Tân lan rộng ở Trung Kỳ với việc mở trường, lập hội buôn, cắt tóc ngắn, mặc âu phục. Năm 1908, phong trào chống thuế ở Trung Kỳ bùng nổ, Pháp đàn áp, Phan Châu Trinh bị đày ra Côn Đảo.',
    },
    {
      id: 'dong-kinh-nghia-thuc',
      year: 1907,
      yearLabel: '3 – 12/1907',
      title: 'Trường Đông Kinh Nghĩa Thục',
      summary: 'Mở trường dạy học miễn phí, truyền bá tư tưởng mới.',
      detail:
        'Lương Văn Can, Nguyễn Quyền cùng các sĩ phu yêu nước mở trường Đông Kinh Nghĩa Thục ở Hà Nội, dạy học không lấy tiền, dạy chữ Quốc ngữ, khoa học, cổ động bỏ hủ tục, chấn hưng công thương nghiệp. Trường hoạt động được 9 tháng thì bị Pháp ra lệnh đóng cửa.',
    },
    {
      id: 'nguyen-tat-thanh-ra-di',
      year: 1911,
      yearLabel: '5/6/1911',
      title: 'Nguyễn Tất Thành ra đi tìm đường cứu nước',
      summary: 'Rời bến Nhà Rồng trên tàu Amiral Latouche-Tréville.',
      detail:
        'Nguyễn Tất Thành (sau này là Chủ tịch Hồ Chí Minh), sinh năm 1890 ở Nam Đàn, Nghệ An, nhận thấy hạn chế của các con đường cứu nước đi trước. Ngày 5 tháng 6 năm 1911, với tên Văn Ba, anh làm phụ bếp trên tàu Amiral Latouche-Tréville, rời bến Nhà Rồng (Sài Gòn) sang phương Tây. Trong 30 năm tiếp theo, anh đi qua nhiều nước, làm nhiều nghề để tìm hiểu và học hỏi.',
    },
    {
      id: 'quang-phuc-hoi',
      year: 1912,
      yearLabel: '1912',
      title: 'Việt Nam Quang phục hội',
      summary: 'Phan Bội Châu chủ trương đánh Pháp lập nước Cộng hòa.',
      detail:
        'Chịu ảnh hưởng Cách mạng Tân Hợi ở Trung Quốc, Phan Bội Châu lập Việt Nam Quang phục hội tại Quảng Châu, với mục tiêu "đánh đuổi giặc Pháp, khôi phục Việt Nam, thành lập nước Cộng hòa Dân quốc Việt Nam". Hội tổ chức một số vụ ám sát, bạo động nhưng không thành công.',
    },
    {
      id: 'thai-nguyen-1917',
      year: 1917,
      yearLabel: '1917',
      title: 'Khởi nghĩa của binh lính Thái Nguyên',
      summary: 'Đội Cấn và Lương Ngọc Quyến chiếm tỉnh lỵ.',
      detail:
        'Đêm 30 rạng ngày 31 tháng 8 năm 1917, binh lính người Việt trong quân đội Pháp ở Thái Nguyên do Trịnh Văn Cấn (Đội Cấn) chỉ huy, cùng tù chính trị Lương Ngọc Quyến, nổi dậy chiếm tỉnh lỵ, phá nhà tù và tuyên bố Thái Nguyên độc lập. Nghĩa quân giữ được thành mấy ngày trước khi bị Pháp phản công đàn áp.',
    },
    {
      id: 'yeu-sach-1919',
      year: 1919,
      yearLabel: '18/6/1919',
      title: 'Bản yêu sách của nhân dân An Nam',
      summary: 'Lần đầu tên Nguyễn Ái Quốc xuất hiện.',
      detail:
        'Thay mặt những người Việt Nam yêu nước tại Pháp, Nguyễn Ái Quốc gửi tới Hội nghị Versailles bản Yêu sách của nhân dân An Nam gồm 8 điểm, đòi quyền tự do, dân chủ, bình đẳng cho người Việt. Yêu sách không được chấp nhận nhưng gây tiếng vang lớn và đưa tên Nguyễn Ái Quốc đến với người dân trong nước.',
    },
    {
      id: 'khai-thac-lan-2',
      year: 1919,
      yearLabel: '1919 – 1929',
      title: 'Cuộc khai thác thuộc địa lần thứ hai',
      summary: 'Pháp tăng đầu tư, bóc lột thuộc địa để bù đắp chiến tranh.',
      detail:
        'Sau Chiến tranh thế giới thứ nhất, Pháp đẩy mạnh đầu tư vào Đông Dương, nhất là đồn điền cao su và khai mỏ than. Giai cấp công nhân Việt Nam phát triển nhanh về số lượng, tạo cơ sở xã hội cho phong trào cách mạng theo khuynh hướng mới.',
    },
    {
      id: 'tours-1920',
      year: 1920,
      yearLabel: '1920',
      title: 'Nguyễn Ái Quốc tìm thấy con đường cứu nước',
      summary: 'Đọc Luận cương của Lênin, tham gia Đại hội Tours.',
      detail:
        'Tháng 7 năm 1920, Nguyễn Ái Quốc đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa của Lênin, tìm thấy con đường giải phóng dân tộc. Tháng 12 năm 1920, tại Đại hội Tours, ông bỏ phiếu tán thành gia nhập Quốc tế Cộng sản và tham gia sáng lập Đảng Cộng sản Pháp, trở thành người cộng sản Việt Nam đầu tiên.',
    },
    {
      id: 'pham-hong-thai',
      year: 1924,
      yearLabel: '19/6/1924',
      title: 'Tiếng bom Sa Diện',
      summary: 'Phạm Hồng Thái mưu sát Toàn quyền Merlin.',
      detail:
        'Phạm Hồng Thái, thành viên tổ chức Tâm Tâm xã, ném bom mưu sát Toàn quyền Đông Dương Merlin tại khách sạn Victoria ở Sa Diện (Quảng Châu). Việc không thành, anh nhảy xuống sông Châu Giang hy sinh. Sự kiện "như chim én nhỏ báo hiệu mùa xuân", khích lệ phong trào yêu nước.',
    },
    {
      id: 'thanh-nien',
      year: 1925,
      yearLabel: '6/1925',
      title: 'Hội Việt Nam Cách mạng Thanh niên',
      summary: 'Nguyễn Ái Quốc chuẩn bị về tổ chức cho việc lập Đảng.',
      detail:
        'Tháng 6 năm 1925, tại Quảng Châu, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên, nòng cốt là các thanh niên trong Tâm Tâm xã. Báo Thanh Niên ra số đầu ngày 21 tháng 6 năm 1925 (sau này được chọn là Ngày Báo chí cách mạng Việt Nam). Hội mở các lớp huấn luyện, đưa cán bộ về nước tiến hành "vô sản hóa".',
    },
    {
      id: 'phong-trao-1925-1926',
      year: 1926,
      yearLabel: '1925 – 1926',
      title: 'Đòi thả Phan Bội Châu, để tang Phan Châu Trinh',
      summary: 'Phong trào yêu nước dân chủ công khai lan rộng.',
      detail:
        'Năm 1925, Phan Bội Châu bị bắt ở Thượng Hải, giải về nước và bị kết án khổ sai. Phong trào đấu tranh đòi thả ông lan khắp cả nước, buộc Pháp phải ân xá và đưa ông về an trí ở Huế. Tháng 3 năm 1926, Phan Châu Trinh mất ở Sài Gòn, hàng vạn người tham gia lễ tang và để tang trên khắp cả nước.',
    },
    {
      id: 'duong-kach-menh',
      year: 1927,
      yearLabel: '1927',
      title: 'Tác phẩm Đường Kách mệnh',
      summary: 'Tập hợp bài giảng của Nguyễn Ái Quốc.',
      detail:
        'Các bài giảng của Nguyễn Ái Quốc tại lớp huấn luyện ở Quảng Châu được Bộ Tuyên truyền của Hội Liên hiệp các dân tộc bị áp bức in thành sách Đường Kách mệnh. Sách trình bày những vấn đề cơ bản về con đường cách mạng giải phóng dân tộc, chuẩn bị về tư tưởng cho việc thành lập Đảng.',
    },
    {
      id: 'quoc-dan-dang',
      year: 1927,
      yearLabel: '25/12/1927',
      title: 'Thành lập Việt Nam Quốc dân Đảng',
      summary: 'Đảng cách mạng theo khuynh hướng dân chủ tư sản.',
      detail:
        'Nguyễn Thái Học, Phạm Tuấn Tài, Nguyễn Khắc Nhu thành lập Việt Nam Quốc dân Đảng tại Hà Nội, theo mô hình Trung Quốc Quốc dân Đảng, chủ trương đánh đuổi Pháp, lập nước dân chủ. Thành viên chủ yếu là trí thức, tiểu tư sản, binh lính.',
    },
    {
      id: 'dang-cong-san',
      year: 1930,
      yearLabel: '3/2/1930',
      title: 'Thành lập Đảng Cộng sản Việt Nam',
      summary: 'Nguyễn Ái Quốc hợp nhất các tổ chức cộng sản.',
      detail:
        'Năm 1929, ba tổ chức cộng sản lần lượt ra đời: Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng, Đông Dương Cộng sản Liên đoàn. Từ ngày 6 tháng 1 đến 7 tháng 2 năm 1930, tại Cửu Long (Hồng Kông), Nguyễn Ái Quốc chủ trì hội nghị hợp nhất thành Đảng Cộng sản Việt Nam, thông qua Chính cương vắn tắt và Sách lược vắn tắt. Ngày 3 tháng 2 được lấy làm ngày thành lập Đảng.',
    },
    {
      id: 'yen-bai',
      year: 1930,
      yearLabel: '9 – 10/2/1930',
      title: 'Khởi nghĩa Yên Bái',
      summary: '"Không thành công thì cũng thành nhân".',
      detail:
        'Việt Nam Quốc dân Đảng phát động khởi nghĩa ở Yên Bái, Phú Thọ, Hải Dương, Thái Bình. Cuộc khởi nghĩa nhanh chóng bị Pháp dập tắt. Ngày 17 tháng 6 năm 1930, Nguyễn Thái Học cùng 12 đồng chí bị xử chém ở Yên Bái, trước khi lên máy chém ông hô "Việt Nam vạn tuế!".',
    },
    {
      id: 'xo-viet-nghe-tinh',
      year: 1930,
      yearLabel: '1930 – 1931',
      title: 'Phong trào Xô viết Nghệ – Tĩnh',
      summary: 'Chính quyền công nông đầu tiên ở nhiều làng xã.',
      detail:
        'Dưới sự lãnh đạo của Đảng, phong trào đấu tranh của công nhân, nông dân bùng lên mạnh mẽ, đỉnh cao ở Nghệ An, Hà Tĩnh. Ngày 12 tháng 9 năm 1930, khoảng 8.000 nông dân Hưng Nguyên biểu tình bị máy bay Pháp ném bom. Ở nhiều làng, chính quyền thực dân tan rã, các Xô viết được thành lập, chia ruộng đất, bãi bỏ thuế vô lý. Phong trào bị đàn áp khốc liệt vào năm 1931.',
    },
    {
      id: 'luan-cuong-tran-phu',
      year: 1930,
      yearLabel: '10/1930',
      title: 'Luận cương chính trị của Trần Phú',
      summary: 'Đảng đổi tên thành Đảng Cộng sản Đông Dương.',
      detail:
        'Hội nghị Ban Chấp hành Trung ương lần thứ nhất tại Hương Cảng thông qua Luận cương chính trị do Tổng Bí thư Trần Phú soạn thảo và đổi tên Đảng thành Đảng Cộng sản Đông Dương. Năm 1931, Trần Phú bị bắt và hy sinh trong nhà tù, để lại lời nhắn: "Hãy giữ vững chí khí chiến đấu."',
    },
    {
      id: 'dan-chu-1936',
      year: 1936,
      yearLabel: '1936 – 1939',
      title: 'Phong trào dân chủ 1936 – 1939',
      summary: 'Đấu tranh công khai đòi tự do, dân sinh, dân chủ.',
      detail:
        'Mặt trận Nhân dân Pháp lên cầm quyền, một số chính sách được nới lỏng. Đảng chủ trương lập Mặt trận Dân chủ Đông Dương, tổ chức phong trào Đông Dương Đại hội thu thập nguyện vọng của nhân dân, mít tinh, ra báo công khai. Cuộc mít tinh ở khu Đấu Xảo Hà Nội ngày 1 tháng 5 năm 1938 thu hút hơn 2,5 vạn người. Phong trào chuẩn bị lực lượng cho cách mạng sau này.',
    },
    {
      id: 'nhat-vao-dong-duong',
      year: 1940,
      yearLabel: '1940',
      title: 'Nhật vào Đông Dương, khởi nghĩa Bắc Sơn và Nam Kỳ',
      summary: 'Nhân dân chịu cảnh "một cổ hai tròng".',
      detail:
        'Tháng 9 năm 1940, quân Nhật tiến vào Lạng Sơn, Pháp đầu hàng và để Nhật dùng Đông Dương làm căn cứ. Ngày 27 tháng 9 năm 1940 nổ ra khởi nghĩa Bắc Sơn (Lạng Sơn), lập ra đội du kích Bắc Sơn. Ngày 23 tháng 11 năm 1940, khởi nghĩa Nam Kỳ bùng nổ, lá cờ đỏ sao vàng lần đầu xuất hiện. Đầu năm 1941 có thêm cuộc binh biến Đô Lương do Đội Cung chỉ huy.',
    },
    {
      id: 've-nuoc-1941',
      year: 1941,
      yearLabel: '1941',
      title: 'Nguyễn Ái Quốc về nước, thành lập Việt Minh',
      summary: 'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.',
      detail:
        'Ngày 28 tháng 1 năm 1941, sau 30 năm xa Tổ quốc, Nguyễn Ái Quốc về nước, ở hang Cốc Bó, Pác Bó (Cao Bằng). Tháng 5 năm 1941, ông chủ trì Hội nghị Trung ương 8, xác định giải phóng dân tộc là nhiệm vụ hàng đầu. Ngày 19 tháng 5 năm 1941, Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) ra đời. Năm 1942, ông lấy tên Hồ Chí Minh khi sang Trung Quốc và bị chính quyền Tưởng Giới Thạch bắt giam hơn một năm, viết tập thơ Nhật ký trong tù.',
    },
    {
      id: 'giai-phong-quan',
      year: 1944,
      yearLabel: '22/12/1944',
      title: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân',
      summary: 'Tiền thân của Quân đội nhân dân Việt Nam.',
      detail:
        'Theo chỉ thị của Hồ Chí Minh, Võ Nguyên Giáp thành lập Đội Việt Nam Tuyên truyền Giải phóng quân tại khu rừng Trần Hưng Đạo (Cao Bằng), gồm 34 chiến sĩ. Ngay sau đó đội đánh thắng hai trận Phai Khắt và Nà Ngần. Ngày 22 tháng 12 trở thành Ngày thành lập Quân đội nhân dân Việt Nam.',
    },
    {
      id: 'nhat-dao-chinh',
      year: 1945,
      yearLabel: '9/3/1945',
      title: 'Nhật đảo chính Pháp',
      summary: 'Cao trào kháng Nhật cứu nước bùng lên.',
      detail:
        'Đêm 9 tháng 3 năm 1945, Nhật đảo chính, lật đổ Pháp, độc chiếm Đông Dương và dựng chính phủ Trần Trọng Kim dưới danh nghĩa "độc lập" của Bảo Đại. Ngày 12 tháng 3, Ban Thường vụ Trung ương Đảng ra chỉ thị "Nhật – Pháp bắn nhau và hành động của chúng ta", phát động cao trào kháng Nhật. Tháng 6 năm 1945, Khu giải phóng Việt Bắc được thành lập.',
    },
    {
      id: 'nan-doi-1945',
      year: 1945,
      yearLabel: 'Cuối 1944 – đầu 1945',
      title: 'Nạn đói năm Ất Dậu',
      summary: 'Khoảng 2 triệu người chết đói ở miền Bắc.',
      detail:
        'Chính sách vơ vét thóc gạo của Pháp, bắt nhổ lúa trồng đay của Nhật, cùng thiên tai, đã gây ra nạn đói khủng khiếp ở Bắc Kỳ và Bắc Trung Kỳ, làm khoảng 2 triệu người chết theo số liệu thường được dẫn. Việt Minh phát động phong trào "phá kho thóc, giải quyết nạn đói", thu hút đông đảo quần chúng tham gia cách mạng.',
    },
  ],
  vndcch: [
    {
      id: 'tan-trao',
      year: 1945,
      yearLabel: '13 – 17/8/1945',
      title: 'Hội nghị toàn quốc và Quốc dân Đại hội Tân Trào',
      summary: 'Phát lệnh tổng khởi nghĩa trong cả nước.',
      detail:
        'Khi Nhật đầu hàng Đồng minh, Hội nghị toàn quốc của Đảng họp ở Tân Trào (Tuyên Quang) từ 13 đến 15 tháng 8 năm 1945, quyết định phát động tổng khởi nghĩa. Ngày 16 tháng 8, Quốc dân Đại hội tán thành chủ trương tổng khởi nghĩa, quy định quốc kỳ, quốc ca và bầu Ủy ban Dân tộc giải phóng do Hồ Chí Minh làm chủ tịch. Hồ Chí Minh kêu gọi: "Giờ quyết định cho vận mệnh dân tộc ta đã đến."',
    },
    {
      id: 'cach-mang-thang-tam',
      year: 1945,
      yearLabel: '14 – 28/8/1945',
      title: 'Cách mạng Tháng Tám',
      summary: 'Tổng khởi nghĩa giành chính quyền trong cả nước.',
      detail:
        'Nhân dân cả nước nhất tề đứng lên giành chính quyền. Ngày 19 tháng 8 khởi nghĩa thắng lợi ở Hà Nội, ngày 23 tháng 8 ở Huế, ngày 25 tháng 8 ở Sài Gòn. Đến ngày 28 tháng 8, cuộc tổng khởi nghĩa thắng lợi trong cả nước chỉ trong khoảng hai tuần. Ngày 19 tháng 8 được chọn là ngày kỷ niệm Cách mạng Tháng Tám.',
    },
    {
      id: 'tuyen-ngon-doc-lap',
      year: 1945,
      yearLabel: '2/9/1945',
      title: 'Tuyên ngôn Độc lập',
      summary: 'Khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      detail:
        'Tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập trước hàng chục vạn người: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập." Bản Tuyên ngôn khai sinh nước Việt Nam Dân chủ Cộng hòa. Ngày 2 tháng 9 trở thành Quốc khánh.',
    },
    {
      id: 'nam-bo-khang-chien',
      year: 1945,
      yearLabel: '23/9/1945',
      title: 'Nam Bộ kháng chiến',
      summary: 'Pháp trở lại xâm lược Sài Gòn.',
      detail:
        'Được quân Anh giúp sức, thực dân Pháp nổ súng đánh chiếm Sài Gòn, mở đầu cuộc xâm lược lần thứ hai. Nhân dân Nam Bộ đứng lên kháng chiến. Cùng lúc ở miền Bắc, 20 vạn quân Tưởng Giới Thạch kéo vào giải giáp quân Nhật. Chính quyền non trẻ đối mặt cùng lúc với "giặc đói, giặc dốt và giặc ngoại xâm".',
    },
    {
      id: 'tong-tuyen-cu',
      year: 1946,
      yearLabel: '6/1/1946',
      title: 'Tổng tuyển cử bầu Quốc hội khóa I',
      summary: 'Lần đầu tiên người dân được bầu cử phổ thông.',
      detail:
        'Cuộc Tổng tuyển cử đầu tiên được tổ chức trong cả nước, mọi công dân từ 18 tuổi đều có quyền bầu cử, bầu ra 333 đại biểu Quốc hội. Ngày 2 tháng 3 năm 1946, Quốc hội họp phiên đầu tiên, lập Chính phủ liên hiệp kháng chiến do Hồ Chí Minh làm Chủ tịch.',
    },
    {
      id: 'hiep-dinh-so-bo',
      year: 1946,
      yearLabel: '6/3/1946',
      title: 'Hiệp định Sơ bộ',
      summary: 'Hòa với Pháp để đuổi quân Tưởng.',
      detail:
        'Pháp và Tưởng ký hiệp ước Hoa – Pháp, cho Pháp ra Bắc thay quân Tưởng. Để tránh phải đối đầu cùng lúc nhiều kẻ thù, Chủ tịch Hồ Chí Minh ký với đại diện Pháp Hiệp định Sơ bộ: Pháp công nhận Việt Nam là một quốc gia tự do; Việt Nam đồng ý cho 15.000 quân Pháp ra Bắc. Tháng 9 năm 1946, Hồ Chí Minh sang Pháp và ký Tạm ước 14 tháng 9 để kéo dài thời gian hòa hoãn.',
    },
    {
      id: 'hien-phap-1946',
      year: 1946,
      yearLabel: '9/11/1946',
      title: 'Hiến pháp đầu tiên',
      summary: 'Hiến pháp dân chủ đầu tiên của Việt Nam.',
      detail:
        'Quốc hội thông qua bản Hiến pháp đầu tiên, khẳng định nước Việt Nam là một nước dân chủ cộng hòa, mọi quyền bính thuộc về toàn thể nhân dân, công dân nam nữ bình đẳng về mọi phương diện.',
    },
    {
      id: 'toan-quoc-khang-chien',
      year: 1946,
      yearLabel: '19/12/1946',
      title: 'Toàn quốc kháng chiến',
      summary: '"Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước".',
      detail:
        'Pháp liên tiếp khiêu khích, gửi tối hậu thư đòi tước vũ khí của tự vệ Hà Nội. Đêm 19 tháng 12 năm 1946, cuộc kháng chiến toàn quốc bùng nổ. Sáng 20 tháng 12, Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được phát đi. Quân dân Hà Nội chiến đấu 60 ngày đêm, giam chân địch để Trung ương rút lên Việt Bắc.',
    },
    {
      id: 'viet-bac-1947',
      year: 1947,
      yearLabel: 'Thu – đông 1947',
      title: 'Chiến thắng Việt Bắc',
      summary: 'Đánh bại kế hoạch đánh nhanh thắng nhanh của Pháp.',
      detail:
        'Pháp huy động khoảng 12.000 quân tấn công căn cứ Việt Bắc nhằm tiêu diệt cơ quan đầu não kháng chiến. Quân ta chặn đánh trên sông Lô, đường số 4, buộc Pháp rút quân sau 75 ngày. Cơ quan đầu não được bảo vệ an toàn, cuộc kháng chiến chuyển sang giai đoạn mới.',
    },
    {
      id: 'bien-gioi-1950',
      year: 1950,
      yearLabel: '9 – 10/1950',
      title: 'Chiến dịch Biên giới',
      summary: 'Khai thông biên giới Việt – Trung.',
      detail:
        'Đầu năm 1950, Trung Quốc, Liên Xô và các nước xã hội chủ nghĩa công nhận và đặt quan hệ ngoại giao với Việt Nam Dân chủ Cộng hòa. Tháng 9 năm 1950, quân ta mở chiến dịch Biên giới, Chủ tịch Hồ Chí Minh trực tiếp ra mặt trận. Trận Đông Khê mở màn thắng lợi, tiêu diệt hai binh đoàn Lơ Pa và Sác-tông, giải phóng tuyến biên giới từ Cao Bằng đến Đình Lập.',
    },
    {
      id: 'dai-hoi-ii',
      year: 1951,
      yearLabel: '2/1951',
      title: 'Đại hội đại biểu toàn quốc lần thứ II của Đảng',
      summary: 'Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam.',
      detail:
        'Đại hội II họp tại Chiêm Hóa (Tuyên Quang), quyết định đưa Đảng ra hoạt động công khai với tên Đảng Lao động Việt Nam. Hồ Chí Minh được bầu làm Chủ tịch Đảng, Trường Chinh làm Tổng Bí thư.',
    },
    {
      id: 'cai-cach-ruong-dat',
      year: 1953,
      yearLabel: '1953 – 1956',
      title: 'Cải cách ruộng đất',
      summary: 'Thực hiện "người cày có ruộng", nhưng mắc sai lầm nghiêm trọng.',
      detail:
        'Tháng 12 năm 1953, Quốc hội thông qua Luật Cải cách ruộng đất, chia ruộng đất cho nông dân nghèo. Quá trình thực hiện mắc nhiều sai lầm nghiêm trọng như quy sai thành phần, xử lý oan nhiều người. Năm 1956, Đảng công khai nhận khuyết điểm và tiến hành sửa sai, Tổng Bí thư Trường Chinh thôi giữ chức.',
    },
    {
      id: 'dien-bien-phu',
      year: 1954,
      yearLabel: '13/3 – 7/5/1954',
      title: 'Chiến thắng Điện Biên Phủ',
      summary: '"Lừng lẫy năm châu, chấn động địa cầu".',
      detail:
        'Pháp xây dựng Điện Biên Phủ thành tập đoàn cứ điểm mạnh nhất Đông Dương với 16.200 quân. Đại tướng Võ Nguyên Giáp chỉ huy chiến dịch, quyết định chuyển từ "đánh nhanh thắng nhanh" sang "đánh chắc tiến chắc". Sau 56 ngày đêm qua ba đợt tấn công, chiều 7 tháng 5 năm 1954 quân ta đánh chiếm hầm chỉ huy, bắt sống tướng De Castries. Đây là chiến thắng có ý nghĩa quốc tế, cổ vũ phong trào giải phóng dân tộc trên thế giới.',
    },
    {
      id: 'geneve-1954',
      year: 1954,
      yearLabel: '21/7/1954',
      title: 'Hiệp định Genève',
      summary: 'Đất nước tạm thời chia cắt ở vĩ tuyến 17.',
      detail:
        'Hiệp định Genève về Đông Dương được ký kết. Các nước tham dự cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, Lào, Campuchia. Vĩ tuyến 17 (sông Bến Hải) là giới tuyến quân sự tạm thời; hai miền sẽ tổng tuyển cử thống nhất đất nước vào tháng 7 năm 1956. Cuộc tổng tuyển cử này không bao giờ được thực hiện.',
    },
    {
      id: 'tiep-quan-ha-noi',
      year: 1954,
      yearLabel: '10/10/1954',
      title: 'Giải phóng Thủ đô',
      summary: 'Quân đội tiếp quản Hà Nội.',
      detail:
        'Các đơn vị Quân đội nhân dân Việt Nam tiến vào tiếp quản Thủ đô Hà Nội trong sự đón chào của hàng vạn người dân. Ngày 1 tháng 1 năm 1955, Trung ương Đảng, Chính phủ và Chủ tịch Hồ Chí Minh ra mắt nhân dân Thủ đô. Tháng 5 năm 1955, toán lính Pháp cuối cùng rút khỏi miền Bắc.',
    },
    {
      id: 'viet-nam-cong-hoa',
      year: 1955,
      yearLabel: '26/10/1955',
      title: 'Thành lập chính quyền Việt Nam Cộng hòa',
      summary: 'Mỹ hậu thuẫn Ngô Đình Diệm ở miền Nam.',
      detail:
        'Mỹ thay chân Pháp, dựng chính quyền Ngô Đình Diệm ở miền Nam. Sau cuộc trưng cầu dân ý ngày 23 tháng 10 năm 1955 phế truất Bảo Đại, Ngô Đình Diệm tuyên bố thành lập Việt Nam Cộng hòa, từ chối tổng tuyển cử thống nhất theo Hiệp định Genève và thi hành chính sách "tố cộng, diệt cộng".',
    },
    {
      id: 'dong-khoi',
      year: 1960,
      yearLabel: '1960',
      title: 'Phong trào Đồng khởi và Mặt trận Dân tộc Giải phóng',
      summary: 'Cách mạng miền Nam chuyển sang thế tiến công.',
      detail:
        'Ngày 17 tháng 1 năm 1960, nhân dân huyện Mỏ Cày (Bến Tre) nổi dậy, mở đầu phong trào Đồng khởi lan khắp Nam Bộ và Tây Nguyên, với hình ảnh "đội quân tóc dài" do Nguyễn Thị Định chỉ huy. Ngày 20 tháng 12 năm 1960, Mặt trận Dân tộc Giải phóng miền Nam Việt Nam ra đời, do luật sư Nguyễn Hữu Thọ làm chủ tịch.',
    },
    {
      id: 'dai-hoi-iii',
      year: 1960,
      yearLabel: '9/1960',
      title: 'Đại hội đại biểu toàn quốc lần thứ III của Đảng',
      summary: 'Xây dựng chủ nghĩa xã hội ở miền Bắc, giải phóng miền Nam.',
      detail:
        'Đại hội III họp tại Hà Nội, đề ra hai nhiệm vụ chiến lược: tiến hành cách mạng xã hội chủ nghĩa ở miền Bắc và cách mạng dân tộc dân chủ nhân dân ở miền Nam. Hồ Chí Minh được bầu làm Chủ tịch Ban Chấp hành Trung ương, Lê Duẩn làm Bí thư thứ nhất.',
    },
    {
      id: 'ap-bac',
      year: 1963,
      yearLabel: '1963',
      title: 'Chiến thắng Ấp Bắc và sự sụp đổ của chính quyền Diệm',
      summary: 'Chiến lược "chiến tranh đặc biệt" bị lung lay.',
      detail:
        'Ngày 2 tháng 1 năm 1963, quân giải phóng đánh bại cuộc càn quét có cố vấn Mỹ chỉ huy ở Ấp Bắc (Mỹ Tho). Cùng năm, phong trào Phật giáo bùng lên, hòa thượng Thích Quảng Đức tự thiêu phản đối chính quyền. Ngày 1 tháng 11 năm 1963, một nhóm tướng lĩnh được Mỹ ủng hộ đảo chính, giết Ngô Đình Diệm và Ngô Đình Nhu.',
    },
    {
      id: 'vinh-bac-bo',
      year: 1964,
      yearLabel: '8/1964',
      title: 'Sự kiện Vịnh Bắc Bộ',
      summary: 'Mỹ ném bom miền Bắc lần đầu.',
      detail:
        'Mỹ dựng lên "sự kiện Vịnh Bắc Bộ", cho rằng tàu chiến Mỹ bị tấn công, rồi ngày 5 tháng 8 năm 1964 cho máy bay ném bom một số nơi ở miền Bắc. Quốc hội Mỹ thông qua Nghị quyết Vịnh Bắc Bộ, trao cho tổng thống quyền mở rộng chiến tranh.',
    },
    {
      id: 'my-do-quan',
      year: 1965,
      yearLabel: '1965',
      title: 'Mỹ đổ quân vào miền Nam',
      summary: 'Chiến lược "chiến tranh cục bộ" và chiến tranh phá hoại miền Bắc.',
      detail:
        'Ngày 8 tháng 3 năm 1965, lính thủy đánh bộ Mỹ đổ bộ lên Đà Nẵng, mở đầu chiến lược "chiến tranh cục bộ" với quân Mỹ trực tiếp tham chiến. Tháng 8 năm 1965, quân giải phóng đánh bại cuộc hành quân của Mỹ ở Vạn Tường (Quảng Ngãi). Mỹ đồng thời tiến hành chiến tranh phá hoại bằng không quân ở miền Bắc. Tuyến đường Trường Sơn (đường Hồ Chí Minh) trở thành huyết mạch chi viện cho miền Nam.',
    },
    {
      id: 'mau-than',
      year: 1968,
      yearLabel: 'Tết Mậu Thân 1968',
      title: 'Tổng tiến công và nổi dậy Tết Mậu Thân',
      summary: 'Buộc Mỹ xuống thang chiến tranh, ngồi vào bàn đàm phán.',
      detail:
        'Đêm 30 rạng ngày 31 tháng 1 năm 1968, quân giải phóng đồng loạt tấn công Sài Gòn, Huế và hầu hết các đô thị miền Nam. Lực lượng cách mạng chịu nhiều tổn thất, nhưng cuộc tổng tiến công làm lung lay ý chí xâm lược của Mỹ. Tháng 3 năm 1968, Mỹ tuyên bố ngừng ném bom miền Bắc từ vĩ tuyến 20 trở ra; tháng 5 năm 1968, Hội nghị Paris về Việt Nam bắt đầu.',
    },
    {
      id: 'ho-chi-minh-mat',
      year: 1969,
      yearLabel: '2/9/1969',
      title: 'Chủ tịch Hồ Chí Minh qua đời',
      summary: 'Để lại bản Di chúc thiêng liêng.',
      detail:
        'Chủ tịch Hồ Chí Minh qua đời tại Hà Nội, thọ 79 tuổi, để lại bản Di chúc căn dặn về đoàn kết, xây dựng Đảng và quyết tâm thống nhất đất nước. Tôn Đức Thắng được bầu làm Chủ tịch nước. Năm 1987, UNESCO ghi nhận Hồ Chí Minh là "Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất". Trước đó, tháng 6 năm 1969, Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam được thành lập.',
    },
    {
      id: 'duong-9-nam-lao',
      year: 1971,
      yearLabel: '2 – 3/1971',
      title: 'Chiến thắng Đường 9 – Nam Lào',
      summary: 'Đánh bại cuộc hành quân Lam Sơn 719.',
      detail:
        'Trong chiến lược "Việt Nam hóa chiến tranh", quân đội Sài Gòn với sự yểm trợ của Mỹ mở cuộc hành quân Lam Sơn 719 sang Nam Lào nhằm cắt đường Trường Sơn. Quân giải phóng phối hợp với quân dân Lào đánh bại cuộc hành quân này.',
    },
    {
      id: 'quang-tri-1972',
      year: 1972,
      yearLabel: '1972',
      title: 'Cuộc tiến công chiến lược năm 1972',
      summary: 'Thành cổ Quảng Trị 81 ngày đêm.',
      detail:
        'Từ ngày 30 tháng 3 năm 1972, quân giải phóng mở cuộc tiến công chiến lược trên các hướng Quảng Trị, Tây Nguyên, Đông Nam Bộ. Cuộc chiến đấu bảo vệ Thành cổ Quảng Trị kéo dài 81 ngày đêm (28/6 – 16/9/1972) với tổn thất rất lớn của cả hai bên, trở thành biểu tượng của sự hy sinh.',
    },
    {
      id: 'dien-bien-phu-tren-khong',
      year: 1972,
      yearLabel: '18 – 29/12/1972',
      title: 'Điện Biên Phủ trên không',
      summary: 'Đánh bại cuộc tập kích bằng B-52 vào Hà Nội, Hải Phòng.',
      detail:
        'Mỹ dùng máy bay chiến lược B-52 tập kích ồ ạt Hà Nội, Hải Phòng trong 12 ngày đêm nhằm ép Việt Nam nhân nhượng. Quân dân miền Bắc bắn rơi 81 máy bay, trong đó có 34 chiếc B-52 (theo số liệu phía Việt Nam). Mỹ buộc phải ngừng ném bom và trở lại bàn đàm phán.',
    },
    {
      id: 'hiep-dinh-paris',
      year: 1973,
      yearLabel: '27/1/1973',
      title: 'Hiệp định Paris',
      summary: 'Mỹ cam kết rút quân khỏi Việt Nam.',
      detail:
        'Hiệp định về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết tại Paris sau gần 5 năm đàm phán, với các trưởng đoàn Lê Đức Thọ, Xuân Thủy và Bộ trưởng Ngoại giao Nguyễn Thị Bình. Mỹ cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, rút hết quân trong 60 ngày.',
    },
    {
      id: 'hai-chien-hoang-sa-1974',
      year: 1974,
      yearLabel: '19/1/1974',
      title: 'Hải chiến Hoàng Sa',
      summary: 'Trung Quốc chiếm toàn bộ quần đảo Hoàng Sa.',
      detail:
        'Hải quân Việt Nam Cộng hòa giao chiến với hải quân Trung Quốc tại quần đảo Hoàng Sa, 74 quân nhân Việt Nam Cộng hòa hy sinh. Trung Quốc dùng vũ lực chiếm toàn bộ quần đảo. Nhà nước Việt Nam luôn khẳng định chủ quyền đối với Hoàng Sa.',
    },
    {
      id: 'tong-tien-cong-1975',
      year: 1975,
      yearLabel: '1 – 3/1975',
      title: 'Giải phóng Phước Long, Tây Nguyên, Huế – Đà Nẵng',
      summary: 'Mở đầu cuộc Tổng tiến công và nổi dậy mùa Xuân 1975.',
      detail:
        'Ngày 6 tháng 1 năm 1975, quân giải phóng chiếm Phước Long, thăm dò thấy Mỹ không can thiệp trở lại. Ngày 10 tháng 3, chiến dịch Tây Nguyên mở màn bằng trận Buôn Ma Thuột, đại tướng Văn Tiến Dũng chỉ huy. Quân đội Sài Gòn rút chạy khỏi Tây Nguyên trong hỗn loạn. Huế được giải phóng ngày 26 tháng 3, Đà Nẵng ngày 29 tháng 3.',
    },
    {
      id: 'thong-nhat-1975',
      year: 1975,
      yearLabel: '30/4/1975',
      title: 'Chiến dịch Hồ Chí Minh, giải phóng miền Nam',
      summary: 'Non sông thu về một mối.',
      detail:
        'Chiến dịch Hồ Chí Minh bắt đầu ngày 26 tháng 4 năm 1975 với năm cánh quân tiến vào Sài Gòn. Trưa ngày 30 tháng 4, xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập, Tổng thống Dương Văn Minh tuyên bố đầu hàng. Miền Nam hoàn toàn giải phóng, kết thúc 21 năm kháng chiến chống Mỹ.',
    },
    {
      id: 'hiep-thuong',
      year: 1975,
      yearLabel: '15 – 21/11/1975',
      title: 'Hội nghị Hiệp thương chính trị',
      summary: 'Thống nhất chủ trương thống nhất đất nước về mặt nhà nước.',
      detail:
        'Đoàn đại biểu hai miền Bắc, Nam họp Hội nghị Hiệp thương chính trị tại Sài Gòn, nhất trí tổ chức tổng tuyển cử bầu Quốc hội chung cho cả nước.',
    },
    {
      id: 'tong-tuyen-cu-1976',
      year: 1976,
      yearLabel: '25/4/1976',
      title: 'Tổng tuyển cử bầu Quốc hội chung',
      summary: 'Bầu Quốc hội khóa VI của nước Việt Nam thống nhất.',
      detail:
        'Hơn 23 triệu cử tri cả nước đi bầu, chọn ra 492 đại biểu Quốc hội khóa VI. Đây là bước hoàn thành thống nhất đất nước về mặt nhà nước, khép lại thời kỳ Việt Nam Dân chủ Cộng hòa.',
    },
  ],
  chxhcn: [
    {
      id: 'thong-nhat-dat-nuoc',
      year: 1976,
      yearLabel: '2/7/1976',
      title: 'Nước Cộng hòa Xã hội chủ nghĩa Việt Nam',
      summary: 'Đổi tên nước, Sài Gòn đổi tên thành Thành phố Hồ Chí Minh.',
      detail:
        'Kỳ họp thứ nhất Quốc hội khóa VI quyết định đổi tên nước thành Cộng hòa Xã hội chủ nghĩa Việt Nam, Thủ đô là Hà Nội, quốc kỳ nền đỏ sao vàng, quốc ca là bài Tiến quân ca. Thành phố Sài Gòn – Gia Định được đổi tên thành Thành phố Hồ Chí Minh. Tôn Đức Thắng làm Chủ tịch nước, Phạm Văn Đồng làm Thủ tướng.',
    },
    {
      id: 'dai-hoi-iv',
      year: 1976,
      yearLabel: '12/1976',
      title: 'Đại hội đại biểu toàn quốc lần thứ IV của Đảng',
      summary: 'Đổi tên thành Đảng Cộng sản Việt Nam.',
      detail:
        'Đại hội IV, đại hội đầu tiên của nước Việt Nam thống nhất, quyết định đổi tên Đảng Lao động Việt Nam thành Đảng Cộng sản Việt Nam, đề ra đường lối đưa cả nước đi lên chủ nghĩa xã hội. Lê Duẩn được bầu làm Tổng Bí thư.',
    },
    {
      id: 'lien-hop-quoc',
      year: 1977,
      yearLabel: '20/9/1977',
      title: 'Việt Nam gia nhập Liên Hợp Quốc',
      summary: 'Trở thành thành viên thứ 149.',
      detail:
        'Đại hội đồng Liên Hợp Quốc chấp nhận Việt Nam là thành viên thứ 149, đánh dấu vị thế quốc tế của nước Việt Nam thống nhất.',
    },
    {
      id: 'bien-gioi-tay-nam',
      year: 1978,
      yearLabel: '1978 – 1979',
      title: 'Chiến tranh bảo vệ biên giới Tây Nam',
      summary: 'Cùng nhân dân Campuchia lật đổ chế độ Khmer Đỏ.',
      detail:
        'Quân Khmer Đỏ liên tục tấn công, thảm sát dân thường ở các tỉnh biên giới Tây Nam. Cuối năm 1978, quân đội Việt Nam phản công, phối hợp với Mặt trận đoàn kết dân tộc cứu nước Campuchia, giải phóng Phnôm Pênh ngày 7 tháng 1 năm 1979, chấm dứt chế độ diệt chủng Pol Pot.',
    },
    {
      id: 'bien-gioi-phia-bac',
      year: 1979,
      yearLabel: '17/2/1979',
      title: 'Chiến tranh bảo vệ biên giới phía Bắc',
      summary: 'Trung Quốc tấn công dọc biên giới sáu tỉnh phía Bắc.',
      detail:
        'Trung Quốc đưa quân tấn công trên toàn tuyến biên giới phía Bắc, từ Lai Châu đến Quảng Ninh. Quân dân Việt Nam chiến đấu quyết liệt. Ngày 5 tháng 3 năm 1979, Trung Quốc tuyên bố rút quân. Xung đột ở biên giới, đặc biệt ở Vị Xuyên (Hà Giang), còn kéo dài nhiều năm sau đó.',
    },
    {
      id: 'doi-moi-1986',
      year: 1986,
      yearLabel: '12/1986',
      title: 'Công cuộc Đổi mới',
      summary: 'Đại hội VI chuyển sang kinh tế thị trường định hướng xã hội chủ nghĩa.',
      detail:
        'Sau khủng hoảng kinh tế – xã hội nghiêm trọng với lạm phát lên tới hàng trăm phần trăm, Đại hội VI của Đảng khởi xướng công cuộc Đổi mới toàn diện, xóa bỏ cơ chế tập trung quan liêu bao cấp, phát triển kinh tế hàng hóa nhiều thành phần. Nguyễn Văn Linh được bầu làm Tổng Bí thư. Năm 1988, Khoán 10 trong nông nghiệp giúp Việt Nam từ thiếu lương thực trở thành nước xuất khẩu gạo.',
    },
    {
      id: 'gac-ma',
      year: 1988,
      yearLabel: '14/3/1988',
      title: 'Hải chiến Gạc Ma',
      summary: '64 chiến sĩ hy sinh bảo vệ chủ quyền ở Trường Sa.',
      detail:
        'Hải quân Trung Quốc nổ súng tấn công các chiến sĩ Hải quân Nhân dân Việt Nam đang bảo vệ đảo Gạc Ma, Cô Lin, Len Đao thuộc quần đảo Trường Sa. 64 chiến sĩ hy sinh, Trung Quốc chiếm đảo Gạc Ma. Các đảo Cô Lin, Len Đao vẫn được giữ vững.',
    },
    {
      id: 'rut-quan-campuchia',
      year: 1989,
      yearLabel: '9/1989',
      title: 'Rút quân tình nguyện khỏi Campuchia',
      summary: 'Mở đường cho bình thường hóa quan hệ quốc tế.',
      detail:
        'Việt Nam hoàn tất rút toàn bộ quân tình nguyện khỏi Campuchia. Năm 1991, Hiệp định Paris về Campuchia được ký kết và Việt Nam bình thường hóa quan hệ với Trung Quốc, mở ra giai đoạn hội nhập mới.',
    },
    {
      id: 'hien-phap-1992',
      year: 1992,
      yearLabel: '15/4/1992',
      title: 'Hiến pháp năm 1992',
      summary: 'Thể chế hóa đường lối Đổi mới.',
      detail:
        'Quốc hội thông qua Hiến pháp năm 1992, thừa nhận nền kinh tế hàng hóa nhiều thành phần vận hành theo cơ chế thị trường có sự quản lý của nhà nước.',
    },
    {
      id: 'asean-my-1995',
      year: 1995,
      yearLabel: '7/1995',
      title: 'Bình thường hóa với Hoa Kỳ, gia nhập ASEAN',
      summary: 'Phá thế bao vây, cấm vận.',
      detail:
        'Năm 1994 Hoa Kỳ bỏ cấm vận kinh tế. Ngày 11 tháng 7 năm 1995, Việt Nam và Hoa Kỳ bình thường hóa quan hệ ngoại giao. Ngày 28 tháng 7 năm 1995, Việt Nam trở thành thành viên thứ bảy của Hiệp hội các quốc gia Đông Nam Á (ASEAN).',
    },
    {
      id: 'hoi-nhap',
      year: 2007,
      yearLabel: '11/1/2007',
      title: 'Gia nhập Tổ chức Thương mại Thế giới',
      summary: 'Hội nhập sâu rộng vào kinh tế toàn cầu.',
      detail:
        'Việt Nam trở thành thành viên thứ 150 của WTO. Những năm sau đó, Việt Nam tham gia nhiều hiệp định thương mại tự do thế hệ mới như CPTPP (có hiệu lực với Việt Nam năm 2019) và EVFTA với Liên minh châu Âu (2020), trở thành một trong những nền kinh tế có độ mở lớn trên thế giới.',
    },
    {
      id: 'hien-phap-2013',
      year: 2013,
      yearLabel: '28/11/2013',
      title: 'Hiến pháp năm 2013',
      summary: 'Đề cao quyền con người, quyền công dân.',
      detail:
        'Quốc hội thông qua Hiến pháp năm 2013, có hiệu lực từ ngày 1 tháng 1 năm 2014, với chương riêng về quyền con người, quyền và nghĩa vụ cơ bản của công dân.',
    },
    {
      id: 'sap-xep-hanh-chinh-2025',
      year: 2025,
      yearLabel: '1/7/2025',
      title: 'Sắp xếp lại đơn vị hành chính',
      summary: 'Cả nước còn 34 tỉnh, thành phố; chính quyền địa phương hai cấp.',
      detail:
        'Theo nghị quyết của Quốc hội, từ ngày 1 tháng 7 năm 2025, cả nước sắp xếp lại còn 34 đơn vị hành chính cấp tỉnh, bỏ cấp huyện và tổ chức chính quyền địa phương theo hai cấp là tỉnh và xã. Đây là đợt cải cách bộ máy hành chính lớn nhất kể từ khi thống nhất đất nước.',
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
