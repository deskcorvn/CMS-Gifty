// Kịch bản giảng chi tiết cho PDF (chỉ giảng viên dùng, không đăng). Bám sát cách trình bày của buổi
// "Từ ô chat đến một đội AI cùng làm việc" (Trương Phương x Hưng Kescy, youtu.be/Kml4bT44fS4), theo từng màn.
// moc: đoạn video gốc tương ứng để xem lại · loi: lời giảng · ke: chuyện riêng của diễn giả gốc (kể lại dưới dạng
// "một anh làm đào tạo AI kể…", không nhận là của mình) · luuY: ghi chú khi đứng lớp.
const kichBan = {
  "00": [
    {
      moc: "00:02:41–00:04:12",
      loi: [
        "Chào cả nhà. Buổi hôm nay coi như là một buổi kèm một-một với từng người, nên có câu hỏi gì anh chị cứ thoải mái dừng mình lại, hỏi luôn, đừng để dành đến cuối.",
        "Trước khi vào bài, mình nói kỳ vọng. Sau buổi này mình muốn anh chị có ba thay đổi.",
        "Thứ nhất là hiểu được thực sự AI vận hành như thế nào. AI ở đây không phải kiểu ngày xưa học thuật toán, học máy, nghiên cứu khoa học đâu. Mình sẽ giúp anh chị hiểu một cách rất đơn giản thôi: một bạn nhân sự AI gồm những thành phần gì, và dùng bạn ấy như thế nào. Hiểu bản chất.",
        "Thứ hai, khi hiểu bản chất rồi thì mình giao việc được cho bạn ấy. Giao việc làm sao cho hiệu quả. Vì mình là người đưa ra đề bài, mình muốn đạt mục tiêu đó, thì làm sao để cùng AI đạt được mục tiêu như vậy.",
        "Và thứ ba, qua việc đó anh chị bắt đầu đóng gói được công việc của mình lại, giao sang cho AI, và giải phóng được bản thân. Đó là ba điều mình muốn giúp mọi người hôm nay. Thời gian không nhiều, nhưng bạn nào nắm bắt nhanh thì chắc cũng được kha khá.",
      ],
    },
    {
      moc: "00:04:12–00:05:15",
      loi: [
        "Hôm nay mình đi bốn chặng.",
        "Thứ nhất là hiểu AI: nó hoạt động, vận hành thế nào, cách nó nghĩ ra làm sao.",
        "Thứ hai là giao việc: làm sao để mình giao việc cho hiệu quả.",
        "Thứ ba là hiểu cấu trúc của một bạn AI được tạo ra như thế nào, tức là nhân sự AI gồm các thành phần gì. Khi nắm được cái này rồi thì mình biết cách sử dụng bạn ấy cho bất kỳ công việc gì luôn.",
        "Và cuối cùng là một kiến thức khá là nâng cao, nhưng mình nghĩ bây giờ ai cũng nên biết, đó là Cowork. Lúc này AI tham gia vào trên chính máy tính của mình, làm việc trên những tệp của mình luôn.",
        "Trong bốn chặng này mình cố gắng giúp anh chị có tư duy đúng về AI, và có thể tự động hóa được những công việc lặp đi lặp lại.",
      ],
    },
    {
      loi: [
        "Xong bốn chặng thì lớp mình có thêm hai phần ngắn. Phần đầu là làm lời giới thiệu bản thân và ảnh đại diện, phần ảnh mình dùng ChatGPT. Phần cuối là chốt lại cả buổi, và mỗi người chọn ra mấy việc để bắt tay làm ngay trong tuần này.",
      ],
      luuY: "Hai phần này là của Gifty Tech thêm vào, video gốc không có.",
    },
    {
      loi: [
        "Mình không muốn anh chị chỉ ngồi nghe. Cuối buổi, mỗi người cầm về bốn thứ dùng được ngay: một kế hoạch chăm sóc khách bảy ngày, một trợ lý Claude đã biết việc của mình, một bộ lời giới thiệu bản thân, và một ảnh đại diện hoặc câu lệnh để về nhà làm tiếp.",
        "Cả bốn thứ đều lưu được trên trang học, ở mục Kết quả của tôi. Sau này cần thì mở ra xem lại.",
      ],
    },
    {
      loi: [
        "Mỗi chặng mình đi ba nhịp. Mình chiếu và giải thích trước. Rồi anh chị tự làm ngay trên máy theo các bước trên trang học. Làm xong thì bấm Hoàn thành chặng, cả lớp chốt lại với nhau rồi mới sang chặng sau.",
        "Cứ làm tay ngay trên lớp thì về nhà mới nhớ. Chỗ nào vướng, anh chị giơ tay, trợ giảng sẽ xuống hỗ trợ.",
      ],
    },
    {
      loi: [
        "Một quy tắc cho cả buổi: hôm nay chỉ dùng dữ liệu giả lập mà lớp đã chuẩn bị sẵn. Anh chị đừng đưa tên thật, số điện thoại hay thông tin riêng của khách vào AI khi chưa được phép. Rồi, mình đi vào luôn cho nhanh.",
      ],
    },
  ],
  "01": [
    {
      moc: "00:05:15",
      loi: ["Chặng một: hiểu AI. Trước khi giao việc cho AI, mình cần hiểu bên trong nó đang thực sự làm gì. Cái này chắc là siêu cơ bản, nhưng mình vẫn phải nhắc lại."],
    },
    {
      moc: "00:05:15–00:10:34",
      loi: [
        "Mọi người nên hiểu một điều: AI nó không vạn năng, và tại sao nó lại bịa. Thực ra AI không hiểu ngữ nghĩa, không hiểu tâm tư tình cảm gì của mình đâu. Thuật toán thuần của nó, cái mô hình ngôn ngữ lớn ấy, nói một cách dễ hiểu thì nó chỉ đang đoán chữ tiếp theo thôi. Mà đoán dựa trên xác suất thống kê.",
        "Xác suất thống kê tức là gì? Nếu mình dạy cho nó cái gì đó nhiều, nói cho nó một thông tin gì đó nhiều trong đống tài liệu nó đọc được, thì với nó, đó sẽ là thứ nó đưa ra khi mình hỏi câu tương tự.",
        "Ví dụ này mình thử rất nhiều lần rồi, lớp nào cũng lôi ra. Cho mọi người gõ vào một con AI bất kỳ: “Một con vịt xòe ra hai cái…”. Xòe cái gì? Cái cánh. Mình đoán là chín mươi lăm phần trăm số người sẽ ra đúng câu “một con vịt xòe ra hai cái cánh”. Vì nó là câu trong bài hát ai cũng học, có đầy trong tài liệu nó đọc, mà con vịt thì cũng chẳng xòe ra được thêm cái gì nữa. Gần như lựa chọn ở đây chỉ có một.",
        "Đương nhiên vẫn có bạn ra câu khác, xòe ra hai cái chân chẳng hạn. Hay gõ câu này vào ChatGPT có khi nó vẽ luôn cho mình một con vịt.",
        "Nhưng giờ một câu khác, mơ hồ hơn: “Lúc rảnh, tôi thường…” ba chấm. Bảo nó điền vào dấu ba chấm. Ở lớp mình cho mọi người nhìn bài nhau, và sẽ thấy chẳng ông nào giống ông nào. Người thì đọc, suy ngẫm, nghe sang lắm. Người thì đi ăn, đi chơi, đi ngủ. Bạn nào mà AI chưa biết gì về mình thì nó toàn ra ăn, chơi, ngủ, nghe nhạc, xem phim.",
        "Tại sao lại như thế? Rõ ràng là do thông tin mình nạp vào cho nó. Câu con vịt là thứ gần như chắc chắn rồi. Còn câu lúc rảnh thì chẳng có tiêu chuẩn nào cả, mỗi người một sở thích, một thú vui. AI không có thông tin để nó đoán. Chỉ khi nó có thông tin về mình thì nó mới đưa ra được câu trả lời cá nhân hóa hơn.",
        "Và nó dẫn đến tình trạng gì? Đó là AI có thể bịa. Bản chất là nó không có thông tin, nên theo thuật toán, nó cố đưa ra câu trả lời sát nhất có thể dựa trên xác suất cao nhất. Chứ nó không chắc câu đó đúng hay sai. Nó đâu biết đúng hay sai, đó là thông tin nó nhận được mà.",
        "Cho nên đừng chửi nó ngu. Mình hiểu rằng nó chỉ đang làm theo xác suất thôi. Mà nói thật, người mình cũng thế. Mình không có thuật toán chạy trong đầu, nhưng nhận việc từ sếp, sếp giao một câu ngắn cụt, mình có phải tự bịa không? Mình tự nghĩ “chắc là như thế này”. Rồi lúc bị nói làm sai thì “em tưởng…”. Em tưởng, đúng không?",
        "Thế nên AI cũng giống người thôi. Hiểu là nó đang làm theo xác suất, để mình đừng kỳ vọng sai về nó. Làm gì thì mình cũng nên kiểm tra lại.",
      ],
    },
    {
      moc: "00:06:32–00:08:31 (đoạn làm mẫu trên Claude)",
      loi: [
        "Giờ anh chị thử luôn nhé. Làm bước ba trên trang học: dán câu lệnh vào Claude, rồi quay sang nhìn bài người bên cạnh.",
        "Câu con vịt thì cả lớp gần như giống hệt nhau. Câu lúc rảnh thì mỗi máy một kiểu. Chỗ khác nhau đó chính là chỗ AI đang đoán.",
      ],
      luuY: "Cho lớp 2–3 phút. Hỏi vài người đọc to kết quả câu 2 để cả lớp thấy khác nhau.",
    },
    {
      moc: "00:10:34–00:13:43",
      loi: [
        "Điều thứ hai: mỗi con AI lại mạnh ở một góc độ khác nhau, bởi vì dữ liệu huấn luyện của chúng nó khác nhau. Dữ liệu mà chúng nó được đọc hoàn toàn khác.",
        "Gemini đến từ nhà Google. Mà Google mạnh nhất là gì? Google tìm kiếm. Nên tất cả những kiến thức phổ biến đã được đưa lên mạng, kiến thức chung chung mà anh chị tìm trên Google rất nhanh, hay là muốn tìm hiểu để mua một sản phẩm, so giá, so tính năng, thông tin trên mạng siêu sẵn, thì dùng Gemini.",
        "ChatGPT thì lại là một con rất cân bằng, việc gì nó cũng làm được. Bảo viết bài nó viết tốt, làm ảnh nó làm tốt, làm slide, viết mã, tư duy, mọi thứ đều ổn. Nhưng thường nó đứng hạng hai ở mọi thứ. Thi thoảng chiếm ngôi số một rồi lại lùi về số hai. Ví dụ về tư duy thì Claude với ChatGPT cạnh tranh nhau số một số hai, về ảnh thì ChatGPT với Gemini cạnh tranh nhau. Tức là ông này cân bằng, làm gì với nó cũng được.",
        "Grok thì sao? Grok hay ở chỗ nó được huấn luyện từ mạng xã hội X. Khác với Gemini nhé. Gemini là web, nơi mình viết thông tin phải chuẩn, văn phong hơi nghiêm túc, trình bày rõ ràng mạch lạc. Còn mạng xã hội thì mình thoải mái chia sẻ quan điểm, ngôn ngữ nói nhiều hơn ngôn ngữ viết. Nên bảo Grok tra thông tin thì giọng văn tự nhiên hơn, và nó tìm được cả thông tin trên mạng xã hội, thường là thông tin mới, cập nhật, đời thường. Đó là lúc dùng Grok.",
        "Và cuối cùng là Claude, con mình dùng nhiều nhất, và cũng là con mình dùng để hướng dẫn mọi người hôm nay. Đây là con mạnh nhất về logic, tư duy, cấu trúc, viết mã. Tài liệu huấn luyện của nó đa phần là tài liệu khá hàn lâm, kỹ thuật. Nên hỏi những vấn đề nghiên cứu, cần đi sâu, thì con này làm tốt hơn mấy con kia. Lại vẫn là vì những thứ đã được nạp vào đầu nó sẵn.",
        "Đến đây mọi người thấy ổn chưa? Có câu hỏi gì không đã?",
      ],
      luuY: "Trên màn có ghi “cảm nhận khi dùng, không phải xếp hạng chính thức”. Nếu có người hỏi nguồn, nói rõ đây là kinh nghiệm dùng thực tế.",
    },
    {
      moc: "00:13:43–00:24:32",
      loi: [
        "Rồi, giờ mình cho anh chị một kỳ vọng đúng một chút: mọi người nên dùng AI như thế nào, học AI như thế nào. Mình chia ra năm cấp độ.",
        "Cấp một: hầu hết mọi người đang ở đây. Cấp một chỉ là hỏi đáp thôi. Đương nhiên đó cũng là cả một quá trình rồi. Hồi AI mới ra năm 2022, một hai năm sau vẫn rất nhiều người chưa động vào bao giờ. Đến giờ gần như ai đi làm cũng dùng AI, đó đã là bước tiến lớn. Nhưng vẫn là cấp một: dùng AI để hỏi đáp, thay thế Google. Ngày xưa mở Google lên tìm, giờ mở AI lên hỏi. Nhưng nó dừng ở chuyện mình hỏi, nó trả lời. Muốn nó làm gì thì nó cũng chỉ hướng dẫn, rồi mình phải tự đi làm.",
        "Cấp hai: bạn nào nhanh nhẹn thì ngay buổi này là qua được. Đó là mình bắt đầu có một bạn nhân sự AI. Mình cá nhân hóa hơn: đưa instruction, tức là bối cảnh, cung cấp cho nó trí nhớ, cung cấp công cụ và quy trình để nó làm việc. Lúc này mình có một bạn nhân sự AI đi cùng mình luôn.",
        "Cấp ba mình gọi là trưởng phòng, mô tả thế cho dễ. Lúc này mình có nhiều bạn nhân sự chứ không chỉ một. Mỗi bạn được chuyên môn hóa một việc, có quy trình riêng, hướng dẫn công việc riêng, và chịu sự điều phối của mình. Nghĩ ra việc gì thì mình lên kế hoạch xem bạn nào làm phần nào. Ví dụ một bạn chuyên viết bài, một bạn chuyên lên kế hoạch nội dung, một bạn chuyên nghiên cứu đối thủ. Đến đây là mình đã được giải phóng sức lao động rất nhiều rồi, vấn đề là mình phải nghĩ xem làm gì và giao cho đúng bạn.",
        "Cấp bốn là cái đợt vừa rồi rất nóng: công ty một người. Mình gọi là giám đốc. Lúc này mình không ngồi ghế trưởng phòng nữa, mình ngồi cao hơn, và việc của mình là ra việc cho một bạn AI làm trưởng phòng. Ví dụ muốn làm chiến dịch Trung thu, mình chỉ giao cho bạn trưởng phòng marketing. Bạn ấy tự biết theo quy trình mình đã xây thì phải nghiên cứu thị trường trước, giao cho bạn nghiên cứu; rồi bạn lên kế hoạch; rồi bạn viết bài theo kế hoạch. Cùng lúc mình giao cho phòng nhân sự một việc khác. Đó mới đúng nghĩa giám đốc, công ty một người vận hành ở đây.",
        "Nhưng cấp bốn hợp với công ty nhỏ, với các bạn làm tự do, xuất phát điểm là chuyên gia, có nhiều năm kinh nghiệm một việc gì đó rồi và giờ muốn tối ưu. Vì thực tế không ai giỏi tất cả mọi thứ. Doanh nghiệp cần kế toán, nhân sự, marketing, bán hàng, sản xuất, mua hàng. Muốn đi xa thì đi cùng nhau. Mà khi nhiều ông giỏi ngồi chung một mâm thì phát sinh việc chung, thông tin chung, và phải phân quyền. Giám đốc xem được hết dữ liệu, nhưng bạn bán hàng chỉ được xem khách và đơn của bạn ấy thôi. Đó là cấp năm, và chuyện lớn nhất ở cấp năm chính là phân quyền.",
        "Nhắc lại cho rõ: cấp một là hỏi đáp. Cấp hai là cá nhân hóa một công cụ cho bản thân mình. Cấp ba là tạo ra nhiều bạn, mỗi bạn một chuyên môn, mình điều phối. Cấp bốn là quy trình hóa để chỉ cần giao cho bạn tổng. Cấp năm là phân quyền.",
        "Tuy nhiên, thực tế mọi người không cần lên cấp bốn, cấp năm đâu. Hình dung dùng AI như đi xe. Cấp ba là biết lái xe. Cấp bốn, cấp năm là chế tạo xe. Mình là người dùng, người ứng dụng, thì chỉ cần cấp ba là dùng được hết mọi thứ. Sản phẩm của ông cấp bốn, cấp năm làm ra thì cũng để ông cấp ba dùng thôi. Mình đâu cần biết chế tạo ô tô mới đi được ô tô.",
        "Với chủ doanh nghiệp, mình thường khuyên là thuê luôn người có khả năng dựng cấp bốn, cấp năm về. Cái quan trọng của mình là biết mình muốn làm gì để định hướng cho họ. Còn tập trung của buổi hôm nay là làm sao mọi người làm chủ cấp ba một cách tốt nhất.",
      ],
      luuY: "Đoạn này dài, giảng khoảng 6–8 phút. Màn chỉ hiện 5 cấp và câu lái xe/chế tạo xe.",
    },
    {
      moc: "00:24:32–00:26:39",
      loi: [
        "Rồi, giờ làm sao để bắt đầu dùng AI hiệu quả? Có một tư duy mình muốn mọi người luôn luôn nhớ: hãy coi AI là một bạn thực tập sinh tài năng mới vào công ty.",
        "Nhớ nhé. Bạn này không phải chuyên gia gì kinh khủng đâu. Dù bạn biết rất nhiều, rất nhiều kiến thức chuyên môn, nhưng khi làm việc với bạn ấy, hãy coi toàn bộ kiến thức đó chỉ là tiềm năng của bạn ấy thôi. Năng lực nội tại tốt, nhưng vẫn chỉ là một bạn thực tập sinh mới vào.",
        "Vì sao? Vì bạn làm gì biết gì về công ty mình đâu, biết gì về mình đâu. Trong kiến thức được huấn luyện cho AI không có thông tin về doanh nghiệp của mình: quy mô bao nhiêu, lĩnh vực nào, công việc hằng ngày là gì, khách hàng mục tiêu là ai, sản phẩm có những gì. Tất cả không hề có. Nên bạn này rất giỏi, nhưng chưa biết gì về mình cả.",
        "Thế nên mình phải vào vai sếp của bạn ấy. Hôm nay mình muốn mọi người đổi vai: anh chị đang là sếp của chính mình. Nhớ lại hồi mình mới đi làm, và giờ mình đóng vai ông sếp của mình để giao việc. Thế thì giao việc như thế nào? Đó là chặng hai.",
        "Giờ anh chị làm bảy bước của chặng một trên trang học nhé.",
      ],
    },
  ],
  "02": [
    {
      moc: "00:26:39",
      loi: ["Chặng hai: giao việc. Mở đầu bằng một kiến thức rất hay mà mình nhớ mãi."],
    },
    {
      moc: "00:26:39–00:30:45",
      loi: [
        "Muốn bất kỳ ai làm việc gì cho mình thì chỉ có hai yếu tố thôi. Thứ nhất là will: họ phải muốn làm. Thứ hai là able: họ phải làm được.",
        "Ví dụ mình nhờ đứa cháu chạy ra đầu ngõ, ra chợ mua cái gì đấy. Việc đi ra chợ thì nó làm được, chẳng khó khăn gì. Nhưng nó sẽ nghĩ: ơ, sao cháu phải đi? Vì nó làm gì có động lực. Nhưng bảo “chạy ra đi, chú cho năm chục”, thế là đi ngay đúng không? Lúc này có động lực rồi.",
        "Các bạn đi làm cũng thế, mỗi người một động lực: người muốn phát triển bản thân, người muốn thêm thu nhập, người vì mối quan hệ. Mình nhờ vả đôi khi còn phải tỉ tê, mua cốc trà sữa. Toàn là đi giải quyết chuyện muốn làm.",
        "Nhưng cái hay của AI là nó không cần yếu tố này. Lúc nào nó cũng sẵn sàng, hai bốn trên bảy. Giao nhiều việc nó vẫn làm. Nói một chuyện rất cơ bản: bảo một bạn thiết kế sửa đến lần thứ ba xem mặt bạn ấy có sưng lên không? Đến mức người giao việc cũng không dám giao nữa, vì bạn ấy không còn muốn làm, dù làm được.",
        "Còn AI thì giao mười lần nó vẫn làm, nửa đêm gọi dậy vẫn làm, không đòi tăng lương, không đòi nghỉ phép, không đòi bảo hiểm. Nên với AI, mình bỏ được luôn cục muốn làm. Mình chỉ cần tập trung vào làm được.",
        "Làm được là sao? Là mình cung cấp cho bạn ấy bối cảnh, công cụ, cách làm. Nhờ cháu ra ngõ thì hướng dẫn chẳng có gì. Nhưng mới vào công ty được bảo “em đi viết báo cáo kinh doanh cho anh”, thì bạn ấy sẽ hỏi: viết thế nào ạ, có mẫu không? Cái mẫu chính là một thứ giúp về cách làm. Hay “anh ơi em không có máy tính”, thì công ty phải mua cho bạn một cái máy. Đó là công cụ. Chữ làm được không nhất thiết đến từ kỹ năng, kinh nghiệm. Nó là làm sao để bạn ấy biết cách làm và có khả năng làm.",
      ],
    },
    {
      moc: "00:30:45–00:40:42",
      loi: [
        "Việc đầu tiên trong chữ làm được là giao tiếp. Làm sao nói cho bạn ấy hiểu mình muốn gì, để bạn ấy làm được việc cho mình. Để giao việc đầy đủ, với mình có năm yếu tố.",
        "Thứ nhất là vai trò. Cái này ai học viết câu lệnh cũng học rồi: bạn là chuyên gia marketing, chuyên gia nội dung, chuyên gia này kia. Nhưng còn một vế trong vai trò mà mọi người dễ bị thiếu: làm cho ai. Câu trước là bạn là ai, còn câu này là bạn làm cho ai. Chuyên gia marketing, nhưng cho công ty nào? Sản phẩm là gì? Lĩnh vực gì? Khách hàng là ai? Không đưa những thông tin đó thì chuyên gia cũng chỉ là người có kiến thức. Cùng là khách, khách là chủ doanh nghiệp thì phải nói chuyện kiểu khác, khách là người đi làm thì kiểu khác. Vai trò là chỗ nhiều thông tin nhất đấy.",
        "Thứ hai là mục đích, và nó đi cùng thứ ba là nhiệm vụ. Nhiệm vụ là làm báo cáo, viết bài, viết sách, làm báo giá, làm hợp đồng. Nhưng mục đích của việc đó là gì? Cùng là một bài Facebook, bài để chuyển đổi, để ra đơn, sẽ khác bài chỉ để lấy tương tác. Mục tiêu khác nhau thì cách viết, cách giải quyết hoàn toàn khác nhau. Không nói mục tiêu, chỉ bảo “viết báo cáo cho tao”, thì nó đi theo chuẩn chung: bình thường một hợp đồng có hạng mục gì thì nó viết các hạng mục đó. Nhưng nó không biết hợp đồng này là với một khách rất quan trọng, mục đích chỉ là kéo ông này về, còn mình muốn có cả những hợp đồng đằng sau nữa. Thế thì hợp đồng đầu phải có ưu đãi, có điều khoản lợi hơn cho khách. Không đưa mục đích vào thì làm sao AI làm đúng được. Sếp giao việc cho mình cũng thế thôi: không đưa mục đích thì mình cũng chỉ viết chung chung theo mẫu.",
        "Hai yếu tố tiếp theo là thứ tạo nên khác biệt của một người có nhiều năm kinh nghiệm, một chuyên gia trong lĩnh vực: cách làm và yêu cầu đầu ra. Cách làm là bước một gì, bước hai gì, bước ba gì. Để làm hợp đồng này thì em phải sang phòng kinh doanh lấy thông tin, sang kế toán xin chữ ký, xin phép sếp về chiết khấu cho khách này. Có từng bước, soát từng bước, rồi mới ngồi làm.",
        "Nhưng có hướng dẫn từng bước rồi mà không có yêu cầu đầu ra thì mình vẫn không đảm bảo việc bạn ấy làm đã tốt. Yêu cầu đầu ra mình hay gọi là định nghĩa hoàn thành. Nghe khác hẳn. Ví dụ một việc siêu đơn giản: mời bạn dọn nhà vệ sinh cho sạch sẽ. Rồi, thế nào là sạch sẽ? Phải gạch đầu dòng ra: sàn phải khô, giấy phải thay, không có mùi lạ, xà phòng đã đầy. Phải có danh sách đầy đủ. Viết một bài thì lên dàn ý trước, viết, rồi trau chuốt; và đầu ra phải đảm bảo những yếu tố này. Trong bán hàng người ta còn yêu cầu bài viết lặp lại từ khóa bao nhiêu lần. Tất cả đều là định nghĩa hoàn thành.",
        "Vai trò, mục đích, nhiệm vụ, cách làm, yêu cầu đầu ra. Mọi người chỉ cần nhớ năm cái này thôi, không cần nhớ thêm bất kỳ công thức viết câu lệnh nào nữa. Người ta hay dạy công thức viết câu lệnh, nhưng nói thật là không cần. Vì AI không cần mình đưa thông tin một cách logic, có sắp xếp. Năm yếu tố này có thể lộn xộn tùm lum, miễn là đủ chi tiết và rõ ràng.",
        "Mẹo thực tế là gì? Khi giao việc, mình không ngồi gõ thẳng vào ô chat đâu. Mình mở một tệp ghi chú hay Word ra, gõ hết tất cả những gì mình nghĩ ra. Bạn nào xịn hơn thì dùng chuyển giọng nói thành chữ: ngồi nói “tao muốn một hệ thống như thế này, nó làm được cái này cái kia, à mà phải có thêm tính năng này, trường hợp này thì làm thế nào”. Cứ nói hết một loạt, rồi cầm nguyên đống đó ném vào, AI vẫn làm được. Nó đủ thông minh để sắp xếp lại thông tin.",
        "Và cái này không chỉ áp dụng cho AI, nó áp dụng cho cả người. Mình nhìn lại luôn: trong công việc, mình đang nhờ vả, giao việc cho người khác có đủ năm yếu tố này chưa? Các bạn làm sai thì mình xem lại mình trước, đã giao đủ chưa. Tiên trách kỷ, hậu trách nhân. Đủ năm cái này rồi mà vẫn sai thì lúc đó mới là lỗi của bạn ấy. Mà tưởng tượng sếp của mình giao việc kiểu này thì sướng biết bao, biết chính xác phải làm gì.",
        "Có một ý mọi người hay hiểu nhầm: nghĩ rằng chất lượng đầu ra phụ thuộc vào một câu lệnh thật hoàn hảo, nên cứ ngồi nghĩ mãi xem gõ gì. Không phải. Nó không phụ thuộc vào một câu duy nhất. Bản thân mình cũng không yêu cầu hoàn hảo, mình gõ một loạt ra rồi đưa. Cái tiếp theo mới quan trọng: ba thói quen.",
      ],
      luuY: "Đây là màn quan trọng nhất của chặng, giảng 8–10 phút. Trên màn chỉ có 5 thẻ; kể ví dụ hợp đồng và nhà vệ sinh bằng lời.",
    },
    {
      moc: "00:40:54",
      loi: [
        "Thử so hai cách giao. Bên trái: “Viết báo cáo doanh thu tháng này cho anh.” Về mảng nào? Ai đọc? Để làm gì? Dài bao nhiêu? AI tự đoán hết.",
        "Bên phải đủ năm yếu tố: trợ lý kế toán viết cho chủ cửa hàng, để quyết định nhập hàng tháng sau, tóm tắt theo nhóm hàng, so với tháng trước và chỉ dùng số trong bảng, đầu ra là bảng ba cột cộng ba nhận xét. Giao như vậy thì AI làm đúng ngay lần đầu.",
      ],
      luuY: "Trong video gốc anh Hưng lướt qua slide này rất nhanh; mình giữ vì ví dụ hợp với chủ shop.",
    },
    {
      moc: "00:40:56–00:50:37",
      loi: [
        "Có ba thói quen để mọi người làm việc với AI hiệu quả hơn nữa. Vì mọi người hiểu thế này: giao việc cho người cũng không thể kỳ vọng giao một phát bạn ấy làm được luôn, nhất là một bạn thực tập sinh. Trong công việc mình cũng phải phản hồi.",
        "Thói quen thứ nhất là phản hồi. Bạn ấy làm sai, làm đúng thế nào, mình phải phản hồi lại. Vẫn chuyện bạn thiết kế lúc nãy: tại sao đến lần thứ ba mặt bạn ấy sưng lên? Vì mình cứ bảo “xấu quá, làm lại đi”. Làm lại thế nào? Chị muốn thế nào? Tao không biết, mày cứ làm lại. Khó chịu hơn nữa là những sếp áp đặt, không chịu nói, hoặc chính họ cũng không biết họ muốn gì, chỉ dí xuống là phải làm lại. Lúc đó người làm chẳng bịa thì là gì? Tự nghĩ ra một kiểu khác, lại không đúng ý.",
        "Nên chìa khóa của phản hồi là phải làm theo được. Dựa trên phản hồi đó, họ biết phải làm gì tiếp: phông chữ to ra, đổi màu đi, thêm ảnh vào. Nếu mình không tả được thì lấy vài mẫu mình ưng, đưa cho họ và nói ưng ở chỗ nào. Hoặc đi hỏi chuyên gia lấy vài từ khóa để họ tìm hiểu thêm. Phải có hướng đi thì họ không mệt, biết chính xác mình muốn gì. Không thì họ làm trong tâm thế làm xong lại ăn mắng tiếp. AI thì không có tâm thế đó, nó sẵn sàng làm, mình chỉ việc nói cho nó biết mình muốn gì. Ai muốn học phản hồi cho người thì tìm từ khóa “feedback 4A” của Netflix, trong đó cũng có chữ làm theo được.",
        "Thói quen thứ hai là chia nhỏ việc. Đừng giao một việc siêu to khổng lồ. Hiểu là mỗi việc nó đã có khả năng đoán rồi, giờ một việc khổng lồ gồm rất nhiều bước, bước nào nó cũng tự đoán, mỗi chỗ sai một tí, tích lũy theo từng bước thì sai rất to. Thêm nữa, câu trả lời của AI có giới hạn, việc lớn quá thì nó ít không gian để nghĩ, chất lượng không cao, chỉ ra một sản phẩm tổng hợp rất trung bình.",
        "Mẹo là ngồi lên kế hoạch với một cuộc trò chuyện trước. Kế hoạch ra ba phần thì mỗi phần mở một cuộc trò chuyện khác để làm, làm từng bước. Ví dụ nghiên cứu thị trường ở một cuộc, bước một bước hai bước ba. Rồi một cuộc khác lên kế hoạch nội dung, thảo luận tỉ lệ bài, các trụ nội dung. Rồi một cuộc nữa viết bài. Chia ra thì chất lượng đầu ra cao hơn rất nhiều.",
        "Thói quen thứ ba là một đặc quyền khi dùng AI: làm nhiều lần và kiểm tra chéo. Với người, bảo bạn thiết kế sửa năm lần, bảy lần thì mặt vẫn sưng, không có cửa. Với AI thì không giới hạn số lần yêu cầu làm lại.",
        "Còn kiểm tra chéo là gì? Trong công ty luôn có người đóng vai kiểm tra, giám sát; sản xuất thì có bộ phận kiểm soát chất lượng. Với AI mình làm được y như vậy. Làm xong việc, mình mang sang một cuộc trò chuyện khác. Không nhất thiết phải mang từ Claude sang ChatGPT, chỉ cần mở một cuộc trò chuyện khác thôi. Trình bày lại: đây là vấn đề, đây là mục tiêu, đây là bài giải của nhân sự của tao, mày phản hồi đi. Nó chui vào kiểm tra ngay: lỗ hổng chỗ này, logic chỗ kia chưa được soát. Nó hỏi lại và phản biện cho mình.",
        "Chỉ cần những kiến thức này thôi là anh chị đã vượt xa những người ở cấp một, những người vẫn chỉ hỏi đáp.",
      ],
      ke: [
        "Anh Hưng kể khi cho AI viết phần mềm, mỗi tính năng xong anh gọi năm con AI ra soát: một con soát hệ thống, một con soát giao diện, một con soát trải nghiệm người dùng, một con soát bảo mật, một con soát cơ sở dữ liệu. Có lỗi thì sửa. Sửa xong lại gọi năm con mới tinh, chưa biết gì, soát lại từ đầu. Lặp đến khi sạch mới cho qua. Có dự án vòng lặp này chạy mười bốn lần, tức là bảy mươi lượt soát, mất bốn đến năm tiếng.",
      ],
    },
    {
      loi: [
        "Giờ mình dùng ngay vào bài tập chính. Lớp có sẵn một bảng giả lập mười hai mối quan hệ. Hôm nay gọi là Ngày không.",
        "Anh chị nhìn kỹ nhé. Khách số một đã được hứa gửi báo giá từ hôm qua mà chưa gửi. Khách số chín muốn nhận hồ sơ năng lực ngay trong hôm nay. Khách số mười hai dặn tháng này đừng liên hệ lại. Khách số bốn nói rõ là chưa có nhu cầu. Những thứ này nằm rải rác, rất dễ quên.",
        "Câu lệnh trên trang học đã viết sẵn đủ năm yếu tố, kèm dữ liệu mười hai mã, và đã chia nhỏ thành năm việc a đến e, đúng thói quen thứ hai. Anh chị chỉ cần sao chép, dán vào Claude rồi gửi.",
      ],
      luuY: "Bài tập của Gifty Tech, không có trong video. Hết lượt miễn phí thì chiếu bản kết quả mẫu.",
    },
    {
      loi: [
        "Claude trả kết quả rồi thì đừng tin ngay. Đọc từng lý do ưu tiên, xem có đúng với ghi chú trong bảng không.",
        "Sau đó thử thói quen một: chọn một tin nhắn, góp ý thật cụ thể. Ví dụ rút còn ba câu, đưa hai khung giờ demo để khách chọn.",
        "Rồi thói quen ba: dán kết quả cùng các tiêu chí này vào một cuộc trò chuyện mới, nhờ nó soát lại.",
        "Cuối cùng chép bảng sang Google Sheets, chọn một việc làm được ngay hôm nay, và lưu SP01. Giờ anh chị làm bảy bước của chặng hai nhé.",
      ],
    },
  ],
  "03": [
    {
      moc: "00:50:37–00:51:07",
      loi: [
        "Chỉ cần năm yếu tố và ba thói quen đó thôi là anh chị đã vượt xa cấp một rồi. Thế làm sao để bắt đầu lên các cấp cao hơn? Mình cần hiểu một bạn nhân sự AI có những thành phần gì. Đó là chặng ba.",
      ],
    },
    {
      moc: "00:51:07–00:51:37 và 00:57:23–00:57:53",
      loi: [
        "Phần này khá nhiều lý thuyết kỹ thuật, nên mình đi nhanh, tổng quan để mọi người nắm thôi. Từng cái mọi người có thể tự nghiên cứu kỹ hơn, hoặc ai muốn hỏi kỹ chỗ nào thì mình nói chỗ đó.",
        "Thứ nhất là instruction, chỗ mình đưa vào vai trò, cách xưng hô, thông tin về cá nhân, về doanh nghiệp. Hiểu instruction là một câu lệnh mặc định. Luôn luôn, bất kỳ cuộc trò chuyện nào AI cũng đọc đoạn này trước.",
        "Memory là trí nhớ, những gì AI nhớ về mình, khi nào liên quan nó mới lôi ra. Knowledge là kho tài liệu mình đưa vào, khi cần tra thì tra. Skill là công thức, quy trình để làm một việc gì đó, khi yêu cầu khớp thì nó mới mở ra. Tools là các công cụ dành cho AI, khi cần dùng thì dùng.",
        "Còn model là bộ não. Câu mình gõ chính là câu lệnh, đi vào model, model suy nghĩ dựa trên các thành phần kia rồi ra câu trả lời. Đúng nghĩa là mình đang dựng một bạn nhân sự.",
      ],
    },
    {
      moc: "01:25:26–01:26:28",
      loi: [
        "Hình dung vào trong bếp cho dễ. Tools là nồi niêu xoong chảo, dao dĩa, để mình nấu ăn được. Skill chính là công thức nấu ăn. Còn cái câu lệnh mình đưa vào chính là nguyên liệu: mình đưa đề bài, đưa nguyên liệu, nó dựa vào công thức và công cụ đang có để nấu ra món của mình. Món đó chính là câu trả lời.",
        "Instruction là vệ sinh an toàn thực phẩm, món nào cũng phải theo. Knowledge là mấy thứ để tra cứu thêm. Memory là khẩu vị: biết người này thích ăn cay thì cho thêm chút cay vào. Đó là cá nhân hóa. Cuối cùng hình dung ra đúng là một bạn nhân sự thôi. Mình đang dựng một bạn AI, nhưng tư duy như dựng một bạn nhân sự.",
      ],
      luuY: "Trong video gốc, ví dụ gian bếp nằm ở cuối phần skill/tools. Mình đưa lên đầu để lớp dễ hình dung ngay.",
    },
    {
      moc: "00:51:37–00:57:23",
      loi: [
        "Instruction có hai chỗ. Chỗ thứ nhất nằm ngay trong tài khoản, trong cài đặt, mục hướng dẫn cho Claude. Đoạn này tác động lên tất cả cuộc trò chuyện của mình, nên mình chỉ đưa vào những thứ liên quan đến tư duy, tư duy về cách làm việc thôi.",
        "Ví dụ mình đi tư vấn cho doanh nghiệp, mình dặn: ưu tiên bền vững và hiệu quả hơn là tiết kiệm chi phí. Giải pháp đưa ra phải giải quyết triệt để vấn đề và tồn tại lâu dài cùng doanh nghiệp. Tạm bợ thì bỏ qua, tôi chấp nhận trả phí nhưng nó phải ngon. Tại sao phải dặn? Vì nếu không, nhu cầu của hầu hết mọi người là ngon bổ rẻ, muốn miễn phí, nên AI cũng cung cấp giải pháp miễn phí, đôi khi không kèm hết rủi ro. Với doanh nghiệp đang vận hành một luồng việc lớn thì đó là thứ không nên chấp nhận. Còn các bạn đang đi làm, cần tích lũy, đi theo hướng tối ưu chi phí thì không sao.",
        "Mình cũng hay đưa vào vài nguyên tắc làm việc. Đừng nghĩ quá nhiều, đừng đẻ ra những trường hợp không bao giờ xảy ra, vì giải quyết chúng tốn thêm bao nhiêu việc. Giữ giải pháp đơn giản, dễ hiểu, để ai vào cũng nắm được luồng. Và đừng lặp lại chính mình: việc gì đã làm rồi thì đóng gói thành quy trình, lần sau làm theo, đừng chế tạo lại cái bánh xe.",
        "Chỗ thứ hai là mỗi Project có một instruction riêng. Trong đó ghi bối cảnh chung mà mình muốn AI nắm trong dự án này. Lưu ý chữ bối cảnh chung nhé, đừng ghim vào chữ Project nghĩa là dự án. Project ở đây chỉ là tập hợp những cuộc trò chuyện có chung bối cảnh. Bối cảnh có thể là một bạn nhân sự: bạn này chuyên viết bài, toàn bộ kiến thức ở đây là cách viết bài, việc gì liên quan đến bài, của khách nào cũng ném vào đây. Hoặc theo đúng nghĩa dự án, mỗi khách hàng một Project cũng được. Hoàn toàn linh hoạt, không có đúng sai.",
        "Viết instruction cũng không cần nhìn thấy nó là cái gì ghê gớm. Vẫn tư duy lúc nãy: cứ ngồi nói hết ra với AI, rồi bảo nó sắp xếp lại, viết thành instruction cho dự án này. Nó viết lại được, nó tự biết viết.",
      ],
    },
    {
      moc: "00:57:53–00:59:28",
      loi: [
        "Model là bộ não mình sử dụng. Với Claude thì có các model như Opus, Sonnet, Haiku; ChatGPT cũng có các phiên bản tương tự. Mỗi con ở một mức độ suy nghĩ và làm việc khác nhau. Mọi người có thể bảo chính AI phân biệt cho mình lúc nào dùng model nào.",
        "Dễ nhất hiểu thế này: con mạnh nhất dành cho việc phức tạp nhất, cần nghĩ rất sâu. Opus là con có khả năng tư duy rất tốt để làm việc. Sonnet là con lao vào làm nhiều hơn, nghĩ ít thôi, lao thẳng vào làm. Haiku thì gần như không nghĩ gì, bảo gì làm nấy; mình cũng chẳng dùng mấy.",
        "Với việc xử lý hằng ngày như làm báo giá, làm hợp đồng đã có hướng dẫn sẵn, dùng Sonnet là đủ ngon. Còn việc phải làm mới, kiến tạo mới, lần đầu làm cần tư duy cách làm, thì cân nhắc model mạnh hơn, tùy độ phức tạp. Tên model đổi theo thời gian, không cần học thuộc.",
      ],
    },
    {
      moc: "00:59:28–01:02:37",
      loi: [
        "Tiếp theo là memory, những thông tin về mình mà AI nhớ. Nó nhớ được cả hồ sơ của mình: dùng công cụ gì, thích gì, quan tâm gì. Toàn bộ dựa trên lịch sử nói chuyện, nó tự lưu lại, hoặc mình chủ động bảo “lưu cái này vào memory cho tôi”.",
        "Cái hay là memory sửa được. Nó nhớ gì về mình thì mình vào xem, xóa phần này đi, quên phần này đi, muốn nó nhớ thêm gì thì nhắn vào. Không cần đợi một ngày đẹp trời nó tự nhớ. Bạn nào đang dùng ChatGPT hay Gemini mà muốn chuyển sang Claude thì có tính năng nhập memory: bản chất là một câu lệnh có sẵn, ném sang bên kia bảo “mày nhớ gì về tao thì nói hết ra”, rồi mang về. Memory khác instruction ở chỗ khi nào liên quan nó mới lôi ra, không phải lúc nào cũng nhớ.",
        "Knowledge là những tài liệu mọi người tải lên. Bản chất đó là kho tài liệu của mình: quy định, quy trình, quy chế trong công ty, thông tin sản phẩm, thông tin khách hàng, để AI có kiến thức mà trả lời. Nhưng thực tế bây giờ mình rất ít khi tải tệp thẳng lên. Tải thẳng lên thì nó trả lời vừa thừa vừa thiếu, đúng sai loạn lên, không hiệu quả lắm. Vẫn biết đây là một mảnh ghép, chỉ là không nên dùng cách mặc định, còn có cách khác tốt hơn, phải một buổi riêng mới nói hết.",
      ],
    },
    {
      loi: [
        "Giờ anh chị làm. Tạo một Project, đặt tên là Trợ lý kinh doanh của tôi. Kể tự do vài câu về công việc để Claude viết lại thành instruction, rồi dán vào dự án. Thêm một đoạn mô tả dịch vụ ngắn do mình tự viết.",
        "Rồi mở cuộc trò chuyện trong dự án, dán mười hai mối quan hệ, và chỉ hỏi một câu ngắn: hôm nay tôi nên ưu tiên việc gì. Anh chị sẽ thấy câu hỏi ngắn mà câu trả lời vẫn đúng khuôn, đúng ngôn ngữ nghề của mình. Đó là nhờ instruction của dự án.",
      ],
    },
    {
      moc: "01:02:37–01:11:26",
      loi: [
        "Skill là công thức, quy trình để làm một việc. Tools là công cụ dành cho AI. Đoạn này nên làm mẫu cho dễ hiểu.",
        "Vào Customize, mục Connectors. Connector chính là tools, là công cụ của mình. Khi kết nối các công cụ này thì AI có khả năng dùng chúng giúp mình. Đơn giản nhất là Google Calendar, hay Notion.",
        "Ví dụ: “tạo lịch cho tôi trưa nay mười hai giờ đi ăn với khách”. Ngay khi kết nối xong là nó tạo được luôn. Mở lịch ra kiểm tra, có rồi. Bảo “đổi xuống ăn tối bảy đến chín giờ”, lịch tự đổi. Tương tự, mình quản lý được toàn bộ lịch làm việc, lịch hẹn với AI. Claude hay ChatGPT đều làm được, chỗ người ta gọi là connector, chỗ gọi là plugin, chỉ cần kết nối Google.",
        "Kết nối xong là dùng được luôn ứng dụng trên điện thoại, điều khiển lịch của mình. Dùng để sắp xếp cuộc sống cá nhân: giờ nào làm việc sâu, giờ nào tập thể thao, theo dõi thói quen. Hay nữa là AI nhận diện được hình ảnh: mùa cưới nhận thiệp, ném thiệp vào, nó bóc nội dung ra và lưu lịch luôn cho mình. Việc rất nhàn mà kiểm soát được cuộc sống tốt hơn nhiều.",
        "Muốn biết một công cụ làm được những gì, chỉ cần bấm vào nó, nó liệt kê ra: tạo sự kiện, xóa sự kiện, lấy sự kiện, cập nhật. Với Notion thì tạo trang, tạo cơ sở dữ liệu. Trên thư mục connector giờ có cả nghìn công cụ, và học kỹ hơn thì kết nối được tới bất kỳ công cụ nào có chuẩn MCP: Google Drive, Docs, Sheets, hay đăng bài tự động đa kênh, hay Canva để nó tìm mẫu thiết kế và tạo mẫu cho mình.",
        "Phần này mình làm mẫu. Ai muốn thì thử với lịch của chính mình ở bước chín. Nhớ đăng nhập bằng tài khoản Google của mình, đọc quyền rồi mới cho phép.",
      ],
      ke: [
        "Trong video, anh Hưng còn làm mẫu với Fireflies, một AI ghi âm và chép lại cuộc họp. Anh bảo Claude: “tìm hộ tôi trên Fireflies hai bản ghi trong cùng một buổi chiều nói về thương hiệu cá nhân, lấy nội dung và viết tóm tắt”. Anh không nhớ ngày, không đưa đường dẫn, chỉ mô tả, mà Claude tự tìm ra hai bản ghi, viết tóm tắt chi tiết, rồi lưu thành một trang Notion kèm cả bản chép lời. Đó là một luồng nhiều bước: lấy bản ghi, tóm tắt, lưu Notion.",
      ],
    },
    {
      moc: "01:11:58–01:19:48",
      loi: [
        "Giờ để ý nhé. Vừa rồi là một việc nhiều bước. Mình muốn sau này chỉ cần bảo “tóm tắt cuộc họp” là nó làm luôn như thế, lưu luôn, chứ đừng chỉ trả về bản tóm tắt. Tức là mình muốn nói ít thôi. Vì năm yếu tố giao việc lúc nãy rất dài, nếu viết đủ thì dài lắm, chính mình cũng không viết hết. Làm sao bớt phải nói mà AI vẫn đảm bảo chất lượng? Chính là nhờ đống này.",
        "Instruction là bối cảnh chung mình luôn muốn AI nhớ. Memory là thông tin cá nhân hóa, liên quan thì nó lôi ra. Knowledge là tài liệu tham khảo để tra cứu. Skill là quy trình làm việc. Hình dung skill giống công thức nấu ăn. Nó khác instruction: instruction lúc nào cũng phải đọc, còn skill là khi cần cái gì mới lôi sách nấu ăn ra. Mỗi quyển là một món: thịt kho, phở, cơm tấm. Bảo nấu cơm tấm thì chỉ mở công thức cơm tấm, không cần mở phở với thịt kho. Nếu nhét hết vào instruction thì lúc nào nó cũng phải nhớ, loãng thông tin. Tại sao phải nhớ một trăm công thức khi chỉ nấu một món? Skill giải quyết đúng chuyện đó. Còn tools là công cụ để bạn ấy làm: muốn làm báo cáo thì phải có máy tính, muốn đưa lên Notion thì phải có quyền dùng Notion.",
        "Giả sử bản tóm tắt vừa rồi mình ưng rồi. Việc của mình chỉ đơn giản là gọi skill-creator: “đóng gói việc viết tóm tắt và lưu Notion thành skill cho tôi, đầu vào là bản chép lời, đầu ra là lưu Notion theo mẫu ở trên”. Câu lệnh ngắn được vì cuộc trò chuyện đã có sẵn bối cảnh.",
        "Nhưng logic ở đây là gì? Muốn đóng gói skill thì mọi người phải làm trước. Giống quy trình ấy. Quy trình từ đâu mà có? Là cách làm tốt nhất cho một việc. Khi mình làm một việc rất nhiều lần, biết làm thế này thì khả năng cao kết quả tốt, mình mới đóng gói thành quy trình. Không theo quy trình vẫn viết bài được, nhưng muốn đảm bảo kết quả tốt thì theo quy trình.",
        "Quy trình đi ra từ công việc. Mà công việc đến từ đâu? Từ mục tiêu và bối cảnh. Làm việc đủ nhiều thì tích lũy kinh nghiệm, rồi mới ra quy trình, rồi mới đến tự động hóa. Nhiều người nhảy thẳng vào bước cuối, dựng một luồng, một phần mềm. Bỏ qua các bước trước thì luồng đó chỉ giải quyết được việc lúc đó, bối cảnh thay đổi một chút là hỏng, xây xong vứt vào xó. Nhiều công ty bỏ rất nhiều tiền xây hệ thống rồi bỏ cũng vì vậy.",
        "Với AI, quy trình chính là skill. Cũng giống con người: phải làm rồi mới đóng gói. Nhưng cái hay là với con người, cập nhật quy trình cực lâu. Năm mươi người đang làm theo quy trình đó, mình đổi một cái là đang đi thay đổi thói quen của mọi người, vài tháng chưa chắc xong. Với AI, chỉ cần bảo “cập nhật skill này”, lần sau nó làm theo cách mới luôn.",
      ],
    },
    {
      loi: [
        "Muốn đóng gói skill thì trước tiên phải bật Skills lên, bản miễn phí cũng có. Vào Settings, mục Capabilities, bật Code execution and file creation, Skills cần mục này. Rồi vào Customize, mục Skills, bật skill-creator. Đây là skill dùng để tạo ra skill mới.",
      ],
      luuY: "Màn này chiếu video minh họa (không lời). Theo trang hướng dẫn chính thức của Claude.",
    },
    {
      moc: "01:14:28–01:15:28 và 01:20:26–01:23:21",
      loi: [
        "Giờ xem đóng gói. Kế hoạch bảy ngày lúc nãy coi như mình đã ưng. Ngay trong cuộc trò chuyện đó, mình nhờ skill-creator đóng gói, nói rõ đầu vào là bảng mối quan hệ, đầu ra là năm ưu tiên, kế hoạch, tin nhắn, thông tin cần xác minh.",
        "Claude soạn ra bản nháp skill: tên, mô tả, các bước. Lưu lại. Vào Customize, mục Skills là thấy skill mới nằm đó.",
        "Rồi mở một cuộc trò chuyện mới, dán bảng mới, chỉ nói một câu. Nó đọc đúng quy trình mình vừa đưa: bước một đọc bảng, bước hai chọn ưu tiên, bước ba kế hoạch, bước bốn tin nhắn. Các bước này là nó tự nghĩ ra dựa trên những gì mình vừa làm với nó. Lần này mình không cần nói gì thêm, nó vẫn tự biết hỏi có muốn lưu không, vì quy trình đã ghi sẵn.",
        "Thấy chỗ nào không hợp lý thì bảo nó cập nhật quy trình: thay thế này, bỏ bước kia, thêm màu sắc thiết kế. Lần sau nó làm theo bản mới.",
      ],
    },
    {
      moc: "01:18:45–01:19:48 và 01:28:02–01:31:39",
      loi: [
        "Một lưu ý: mọi người hoàn toàn có thể lên mạng mua hay lấy sẵn skill người khác đã đóng gói. Nhưng skill đó cũng đi từ một mục tiêu và bối cảnh khác. Cùng là viết bài, nhưng bối cảnh của họ là thực phẩm chức năng, còn mình là mỹ phẩm hay hàng tiêu dùng; tư duy viết bài của mỗi người cũng khác. Hai skill đó không khớp, không thể cầm skill của ông này ốp vào quy trình của mình rồi kỳ vọng chạy tốt. Cùng bối cảnh, cùng mục tiêu thì mang về tham khảo. Còn không thì tự làm trước. Và đây chính là thành quả của một người chuyên gia: kinh nghiệm của mình đóng gói lại, người ngoài không có. Khác biệt nằm ở đó.",
        "Thêm vài skill đơn giản ai cũng dùng được: hợp đồng, báo giá, tài liệu. Những thứ đó mình có mẫu rồi, chỉ cần đưa mẫu cho Claude, bảo đóng gói thành skill tạo hợp đồng. Nếu có nhiều loại hợp đồng, nhiều kiểu điều khoản theo từng khách thì nói luôn: trường hợp khách thế này thì thêm điều khoản này, và những thông tin nào nó phải hỏi lại mình khi tạo hợp đồng mới. Xịn hơn nữa thì làm xong hợp đồng có luôn bước gửi mail cho khách. Báo giá, biên bản nghiệm thu, đề nghị thanh toán cũng vậy.",
        "Phiếu lương là một bài khá hay: hằng tháng có tệp Excel tính lương, làm một skill từ bảng đó xuất ra phiếu cho từng người, ghi rõ ngày công, nghỉ phép, lương hiệu quả, đã ứng chưa, gửi từng người xác nhận, rồi mới đẩy sang kế toán. Rất nhiều việc hằng ngày đang làm lặp đi lặp lại có thể chuyển thành skill, không cần việc gì đao to búa lớn.",
        "Mình hay nói với mọi người là nên giải quyết từ ngọn. Người ta hay bảo phải giải quyết từ gốc, còn mình trêu là mình hướng dẫn giải quyết từ ngọn. Vì vấn đề được chỉ ra chứ không được tạo ra: tất cả những việc mọi người đang phải làm thủ công, lặp đi lặp lại, dễ sai, đều là vấn đề mà AI giải quyết được. Giải quyết những việc đó trước thì đầu mình rất nhẹ, không phải nghĩ đến việc chân tay nữa, để bộ óc có không gian sáng tạo, làm thứ mới.",
        "Giờ anh chị làm mười bước của chặng ba. Hai bước cuối, nối lịch và đóng gói skill, là tùy chọn.",
      ],
    },
  ],
  "04": [
    {
      moc: "01:31:39",
      loi: ["Nốt một phần cuối cùng. Đây là kiến thức hơi nâng cao, nhưng mình nói sơ qua để mọi người biết."],
    },
    {
      moc: "01:31:39–01:33:16",
      loi: [
        "Từ nãy giờ, AI mình đang làm vẫn chỉ là một bạn làm từ xa. Bạn này nằm trên trang Claude hay ChatGPT, mình đâu có sở hữu bạn ấy. Một việc đơn giản như muốn cùng bạn ấy sửa một tệp, ví dụ báo giá, hợp đồng cho khách khi chưa có skill, hay làm một kế hoạch mới, thì mình phải bảo nó tạo tệp, tải tệp về, mình sửa, tải ngược lên, bảo nó sửa tiếp, lại tải về. Cứ lên lên xuống xuống, chết mệt.",
        "Nhưng có một lựa chọn nữa là chuyển sang Cowork. Lúc này Claude làm việc với các tệp trên máy mình luôn, xem được, sửa trực tiếp luôn trên đó. Nó còn chia việc cho nhiều trợ lý phụ chạy song song, và tự chạy theo lịch, ví dụ bảy giờ sáng nào cũng gửi bản tin.",
      ],
    },
    {
      moc: "01:33:16–01:35:00 và 01:41:48",
      loi: [
        "Ví dụ mình hay đưa cho mọi người là bảo nó dọn thư mục Tải về. Dọn cái thư mục rác nhất quả đất trên máy, chẳng có thư mục nào rác hơn.",
        "Chuyển sang Cowork, thêm thư mục, chọn Downloads, rồi bảo: phân tích thư mục này và đề xuất phương án dọn dẹp giúp tôi. Nó tự vào xem có những tệp gì, rồi trả về: những tệp này tôi đề xuất gom vào một thư mục, những tệp này bị trùng, mấy bộ cài này có thể xóa.",
        "Nguyên tắc là để AI đề xuất trước, mình duyệt rồi nó mới làm. Chưa ưng thì góp ý cụ thể, làm theo được, để nó đề xuất lại.",
      ],
    },
    {
      moc: "01:33:54–01:39:43",
      loi: [
        "Mình xem minh họa. Mặc định nó không đọc nội dung bên trong từng tệp, vì như thế tốn rất nhiều. Nó đọc thông tin chung của tệp: tên, kích thước, tạo lúc nào, ảnh thì có cả tên thiết bị chụp. Dựa vào đó, kèm thêm một bảng lịch sự kiện của mình, nó biết luôn ảnh này của sự kiện nào theo ngày tháng, rồi sắp xếp cho mình. Giống Cô Tấm nhặt thóc ra thóc, gạo ra gạo.",
        "Mở rộng ra: ai dùng Google Drive thì Drive có tính năng đồng bộ về máy tính, tốn dung lượng một chút, nhưng đồng bộ xong là cho Claude dọn luôn thư mục Drive, sắp xếp xong nó đồng bộ ngược lên. Thư mục Tải về chắc chỉ thua mỗi Google Drive về độ bừa.",
        "Mình đồng ý thì nó mới làm thật, và chia cho mấy trợ lý phụ, mỗi bạn một loại tệp. Cuối cùng nó báo lại đã làm gì, còn gì chờ mình quyết. Xóa hay không vẫn là mình quyết.",
      ],
      ke: [
        "Anh Hưng kể có học viên dùng đúng việc dọn tệp này để quy hoạch lại toàn bộ tệp kế toán, tài chính: sắp xếp theo từng tháng, hợp đồng, hóa đơn, rồi tự tạo báo cáo cho từng tháng.",
        "Anh cũng kể lần làm cho khách mười bốn nghìn tệp thiết kế thẻ. Anh đã chia theo nhóm khách, nhưng khách lại đưa danh sách mới, cứ một trăm người gom một thư mục. Nhặt tay chắc chết. Anh đưa AI đọc danh sách của khách, so khớp với tên tệp, khoảng mười phút là xong, trong khi làm tay có khi mười ngày chưa chắc xong.",
      ],
    },
    {
      moc: "01:39:43–01:41:48",
      loi: [
        "Nhiều người hay hỏi: thế có rủi ro bảo mật không, nó chọc vào máy mình mà? Nói rõ luôn: với Cowork, mình cho nó thư mục nào thì nó chỉ dùng được thư mục đó. Nó giới hạn không gian làm việc lại.",
        "Còn Claude Code là kiểu khác, nếu mình cho toàn quyền thì nó vào được mọi thư mục. Nhưng bản chất là nó không bao giờ tự đi làm, nó ngồi đợi lệnh của mình. Rủi ro chỉ là mình có để người khác chiếm quyền chat với con AI của mình hay không. Và những tệp như mật khẩu thì cất ở nơi không cho AI truy cập.",
        "Đặc biệt, mọi người đừng bảo nó dọn cả ổ C nhé. Dọn thư mục Tải về thì được, chứ dọn ổ C mà lỡ tay xóa nhầm tệp hệ thống là cài lại Windows luôn, cũng vui lắm. Nên đụng đến quyền nguy hiểm một tí thì bảo nó đưa đề xuất trước, mình là người duyệt. Luôn kiểm soát xem AI đang làm gì.",
      ],
    },
    {
      moc: "01:42:19–01:50:10",
      loi: [
        "Nhưng chưa hết. Lúc nãy mình đã có các thành phần nội tại của một bạn nhân sự. Cowork cung cấp thêm một mảnh nữa: không gian làm việc, bạn ấy được vào máy mình. Giờ cao hơn: có không gian rồi, mình muốn gọi hội ra chơi cùng. Không chỉ một mà nhiều nhân sự AI. Đây là lúc mọi người đặt một chân lên cấp bốn: sub-agent, trợ lý phụ.",
        "Trước là chỉ một bạn. Giờ có những bạn hỗ trợ cho bạn chính. Cần gì thì bạn chính gọi các bạn phụ ra làm. Điển hình là dùng đúng cách chia việc: việc gì làm song song, việc gì làm tuần tự, mình chỉ cần nói với cuộc trò chuyện chính. Ví dụ nó chia cho ba bạn: một bạn lấy số liệu bán hàng trong Excel, một bạn lấy lịch họp trên Google Calendar, một bạn lấy việc đang lưu trên Notion. Rồi gửi sang một bạn tổng hợp số liệu, viết báo cáo. Xong lại một bạn khác nhận xét và kiểm tra chéo xem dữ liệu lấy đúng chưa, rồi mới trả lại cho mình.",
        "Việc của mình chỉ đơn giản là bảo Claude gọi trợ lý phụ. Ví dụ trong bài dọn thư mục, mình bảo: chia việc cho trợ lý phụ, mỗi bạn phụ trách một loại tệp rồi sắp xếp. Thật ra việc này một bạn cũng làm được, nhưng mình thử tính năng. Khi dùng rồi, anh chị nhận ra chỉ cần giao tiếp bằng ngôn ngữ tự nhiên: mình muốn gì và đầu ra là gì. Nó tự chia nhỏ, tự lên kế hoạch, tự biết giao cho ai, rồi trả kết quả.",
        "Tức là trong tay mọi người không phải một con AI, mà là một đàn AI sẵn sàng ở đó. Có điều mặc định bọn này cũng lười, chẳng tự gọi đâu. Mình chỉ cần bảo “việc này chia cho trợ lý phụ nhé” là nó tự nghĩ cách chia.",
        "Tại sao nên dùng trợ lý phụ? Vì chúng có đầu óc trắng tinh. Nó chỉ đọc instruction chung để nắm bối cảnh dự án, còn toàn bộ lịch sử chat của mình với phiên chính thì nó không đọc. Nó không bị thiên kiến bởi quá trình mình vừa làm. Giao đi soát lại là nó soát với góc nhìn độc lập của người thứ ba. Và những gì nó làm trong quá trình cũng không đẩy ngược về phiên chính.",
        "Giống như mình là trưởng nhóm, có ba bạn bên dưới. Không có ba bạn thì việc nào mình cũng tự làm, phải nhớ hết bối cảnh của cả ba việc, đầu loạn lên. Giờ mình ngồi lên kế hoạch với sếp, rồi giao xuống ba bạn. Ba bạn không cần quan tâm mình với sếp đã bàn gì. Ngược lại, các bạn làm chi tiết thế nào mình cũng không cần nắm, mình chỉ nghiệm thu đầu ra theo định nghĩa hoàn thành. Bối cảnh được chia rõ ràng, đầu óc sạch sẽ thì làm việc mới hiệu quả. Nạp quá nhiều dữ liệu linh tinh vào là nhiễu, là sai.",
        "Mình thường dùng trợ lý phụ cho ba việc. Một là việc song song: dọn tệp, nghiên cứu thị trường, phân tích nhiều tệp giống nhau, mỗi bạn một tệp. Hai là khi lập kế hoạch, gọi một bạn ra soát lại kế hoạch, vì bạn chính có thể đã bị nhiễu bởi các ý tưởng của mình và không nhìn ra lỗ hổng. Ba là nghiệm thu: xong việc thì gọi trợ lý phụ ra soát lại.",
        "Việc độc lập thì chạy song song. Việc cần kết quả của bước trước thì chạy tuần tự.",
      ],
    },
    {
      loi: [
        "Lưu ý là Cowork chỉ có ở gói trả phí. Muốn nó làm việc với tệp trên máy thì cần cài ứng dụng Claude trên máy tính. Hôm nay anh chị chưa cần cài. Mình xem minh họa và video làm mẫu, để ý trình tự: đề xuất, duyệt, làm, báo cáo. Rồi anh chị làm bốn bước của chặng bốn.",
      ],
    },
  ],
  "05": [
    { loi: ["Giờ sang phần thực hành thêm. Mình làm lời giới thiệu bản thân và ảnh đại diện. Phần chữ để Claude lo, phần ảnh để ChatGPT lo, vì như lúc nãy nói, về ảnh thì ChatGPT đang rất mạnh."], luuY: "Phần của Gifty Tech, video gốc chỉ nhắc ChatGPT làm ảnh tốt (01:10:20)." },
    { loi: ["Trước hết, anh chị viết ra bốn ý thật về mình: làm nghề gì, khách là ai, mình giỏi ở điểm nào mà người khác kiểm chứng được, và mời người ta liên hệ thế nào. Đây đúng là năm yếu tố giao việc thu nhỏ: nguyên liệu phải thật thì AI mới viết đúng."] },
    {
      loi: [
        "Rồi gửi cho Claude theo mẫu trên trang học. Claude viết ba thứ: một câu giới thiệu dễ nhớ, một đoạn bảy mươi đến một trăm chữ cho trang cá nhân hay danh thiếp điện tử, và lời giới thiệu nói trong khoảng ba mươi giây khi gặp đối tác.",
        "Câu lệnh đã dặn không được tự bịa số năm kinh nghiệm hay thành tích. Nhưng nhớ bài đầu: AI đoán theo xác suất, thiếu thông tin là nó bịa. Nên anh chị vẫn đọc lại, chỗ nào chưa đúng sự thật thì xóa.",
      ],
    },
    {
      loi: [
        "ChatGPT làm được bốn việc với ảnh. Một là tạo ảnh mới, chỉ cần tả bằng lời. Hai là chỉnh ảnh mình tải lên: đổi nền, ánh sáng, trang phục; muốn giữ đúng gương mặt thì phải dặn rõ. Ba là chưa ưng chỗ nào thì nói đúng chỗ đó để nó sửa tiếp, đúng thói quen góp ý làm theo được. Bốn là bản miễn phí có giới hạn số ảnh, có thể hết ngay giữa lớp; hết thì giữ câu lệnh và ảnh gốc, về nhà làm tiếp.",
      ],
    },
    {
      loi: [
        "Chỉ dùng ảnh chân dung của chính mình. Trước khi dùng thì soát lại: mặt còn giống mình không, thu nhỏ có dễ nhìn không, trang phục có hợp nghề không. Khác thực tế thì chỉnh lại hoặc quay về ảnh gốc. Giờ anh chị làm năm bước, rồi lưu SP03 và SP04.",
      ],
    },
  ],
  "06": [
    {
      moc: "01:50:10–01:51:11",
      loi: [
        "Tổng quan lại cả buổi hôm nay. Mọi người đã nắm được sơ sơ một nhân sự AI được tạo ra như thế nào: năm mảnh ghép để có một bạn ở cấp ba.",
        "Xây dần từ dưới lên. Mảnh một là tư duy: giao việc, instruction, memory. Mảnh hai là công cụ: connector. Mảnh ba là công thức: skill. Mảnh bốn là môi trường làm việc: Cowork trên máy mình. Mảnh năm là đội ngũ: trợ lý phụ chạy song song.",
        "Bạn nào học nhanh thì từ đây tự học tiếp là làm chủ được cấp ba, vào vai trưởng phòng dùng AI. AI không còn chỉ là công cụ chat nữa, mình điều phối được nhiều bạn cùng lúc. Mỗi Project có thể là một nhân sự, bên trong lại có nhiều trợ lý phụ.",
      ],
    },
    {
      moc: "01:57:58–01:58:31",
      loi: [
        "Nếu hỏi về nhà nên làm gì, thì làm luôn đi. Một: tạo một Project trợ lý cá nhân, quản lý lịch, quản lý việc cho mình. Bắt đầu bằng việc cho nó instruction, nói tự do về việc của mình để AI viết.",
        "Hai: kết nối Google Calendar, Gmail hay Notion, để nó xử lý được những việc đó, rồi giao một việc thật.",
        "Ba: chọn một việc lặp lại mỗi tuần. Mỗi tuần ngồi soi lại xem tuần vừa rồi mình vẫn phải làm những gì thủ công, lặp đi lặp lại, thì đưa vào danh sách cần đóng gói skill. Đóng gói lại, cứ mỗi tuần mình lại nhẹ bớt việc đi một tí.",
      ],
    },
    {
      moc: "01:51:43–01:55:22",
      loi: [
        "Trước khi kết thúc, mình nhắn nhủ hai điều. Điều thứ nhất: AI đã có sẵn phần muốn làm rồi, giờ chỉ còn là mình có chủ động dùng nó để tự động hóa việc lặp lại hay không thôi. Nhiều người sợ dùng AI phức tạp lắm, nghe đến code là nhức đầu. Nhưng dùng rồi mới thấy ước gì mình dùng sớm hơn, nó không khó như mình tưởng. Và nếu có chỗ nào khó hiểu, cứ hỏi chính AI, nó hướng dẫn mình dùng chính nó.",
        "Điều thứ hai, một câu mình luôn ghim vào đầu cho mọi người: cái gì máy làm tốt thì người đừng làm. Máy làm rất tốt những khâu lặp đi lặp lại, những việc đã có quy trình. Những việc đó người không làm tốt bằng máy đâu, nói thật.",
        "Thế mình mạnh hơn máy ở đâu? Ở tư duy, ở việc biết mình muốn gì. Dùng AI dễ lắm, chẳng công cụ nào dễ bằng. Học Photoshop còn phải biết nút nào ở đâu, còn AI chỉ cần nói cho nó, chịu mở miệng ra. Cái gì không biết thì hỏi luôn AI: vướng ở đâu, chụp màn hình gửi cho nó, hỏi làm thế nào tiếp, không cần tìm chuyên gia nào hết.",
        "Để máy làm việc của máy, mình rảnh tay làm việc AI không làm được: định hướng, nắm bắt được khách hàng thực sự muốn gì, đằng sau đó họ đang lo gì. Tâm tư tình cảm thì AI không có, nhưng qua tiếp xúc mình biết được.",
        "Giờ anh chị bấm hoàn thành đủ các chặng để nhận chứng chỉ. Cảm ơn cả nhà đã học cùng Gifty Tech.",
      ],
    },
  ],
};

export default kichBan;
