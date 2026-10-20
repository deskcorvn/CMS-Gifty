// Kịch bản giảng theo màn — lời chép gần như nguyên văn từ buổi gốc
// "Từ ô chat đến một đội AI cùng làm việc" (kênh Trương Phương, khách mời Hưng Kescy, youtu.be/Kml4bT44fS4),
// chỉ sửa lỗi chép sai của phụ đề tự động, bỏ tiếng đệm và đổi xưng hô: giảng viên xưng "em", gọi lớp là "anh chị".
// Chuyện kể của diễn giả gốc giữ ngôi thứ nhất (anh tự quyết kể như của mình hay nói "một người bạn của em").
// Mỗi phần (00..06) là một mảng, mỗi phần tử ứng với một màn trên trang học, đúng thứ tự.
// moc: đoạn video gốc tương ứng để xem lại · loi: lời giảng · luuY: ghi chú khi đứng lớp.
// Dòng bắt đầu bằng "» " là lời NGƯỜI HỌC trong buổi gốc (Trương Phương hỏi hoặc nhận xét): giảng viên đặt câu đó
// cho lớp, hoặc mời một học viên đọc, rồi trả lời bằng các dòng tiếp theo. Chữ "mọi người" trong lời gốc đổi thành "anh chị".
// Phần 05 (thương hiệu cá nhân, ảnh ChatGPT) là phần lớp thêm theo yêu cầu, không có trong buổi gốc.
const kichBan = {
  "00": [
    {
      moc: "00:02:41–00:04:12",
      loi: [
        "Kính chào anh chị. Hôm nay vinh dự quá được ngồi cùng anh chị một buổi như thế này. (Giới thiệu bản thân vài câu, anh tự nói.)",
        "Em hiện đang đi tư vấn và đào tạo cho các doanh nghiệp về AI, để ứng dụng vào trong vận hành, làm sao cho khâu vận hành doanh nghiệp nó nhẹ nhàng, dễ dàng hơn, bớt thời gian công sức mình phải bỏ vào những việc lặp đi lặp lại.",
        "Bởi vì cuối cùng, chủ doanh nghiệp là người đang muốn hiện thực hóa ý tưởng của mình, nhưng bây giờ lại bị cuốn vào guồng công việc, vào những việc lặp đi lặp lại đấy. Mà không phải chỉ có chủ doanh nghiệp đâu ạ, các bạn trẻ bây giờ cũng đang y như thế.",
        "» Một người đi làm bình thường, học hết buổi hôm nay từ đầu đến cuối, thì đâu là ba thay đổi lớn nhất mà họ có được?",
        "Ba thay đổi em kỳ vọng thì thế này. Thứ nhất là anh chị hiểu được thực sự AI nó vận hành như thế nào. AI ở đây là AI mình đang dùng hằng ngày nhá, chứ không phải kiểu ngày xưa hay học là thuật toán, machine learning. Em không đi vào phần lý thuyết nghiên cứu khoa học kiểu đấy.",
        "Em sẽ giúp anh chị hiểu một cách rất đơn giản thôi: một bạn nhân sự AI thì gồm những thành phần gì, và sử dụng bạn ấy như thế nào. Hiểu bản chất.",
        "Cái thứ hai, khi mình hiểu bản chất rồi thì mình giao việc được cho bạn ấy. Giao việc làm sao cho nó hiệu quả. Bởi vì mình đang là người đưa ra đề bài, mình muốn đạt được mục tiêu đấy, thì làm sao để cùng AI đạt được mục tiêu như vậy.",
        "Và qua việc đó, anh chị bắt đầu đóng gói được những công việc của mình lại, giao xuống cho AI, và giải phóng được bản thân. Đấy là ba cái em muốn giúp anh chị. Không nhiều thời gian đâu, nhưng ai nắm bắt nhanh thì chắc cũng được khá khá rồi đấy.",
      ],
      luuY: "Trong buổi gốc, người dẫn mở đầu bằng câu hỏi “ba thay đổi lớn nhất”. Anh có thể hỏi lớp câu đó rồi trả lời, hoặc tự nói luôn.",
    },
    {
      moc: "00:04:12–00:05:15",
      loi: [
        "Hôm nay coi như là một buổi nói chuyện một-một với anh chị. Thế nên có câu hỏi gì thì cứ thoải mái dừng em lại nhá, hỏi luôn.",
        "Hôm nay chúng ta sẽ có bốn chặng. Thứ nhất là hiểu AI: hiểu xem nó hoạt động, vận hành như thế nào, cách nó nghĩ ra làm sao.",
        "Cái thứ hai là về phần giao việc: làm sao để chúng ta giao việc được hiệu quả.",
        "Cái thứ ba là hiểu cấu trúc của một bạn AI được tạo ra như thế nào, nhân sự AI ấy ạ, các thành phần của bạn ấy. Khi mình nắm được cái này rồi thì mình biết cách sử dụng bạn ấy cho bất kỳ công việc gì luôn.",
        "Và cuối cùng là một kiến thức khá nâng cao, nhưng em nghĩ bây giờ ai cũng nên biết, đấy là Cowork với Code. Lúc này AI sẽ tham gia vào trên chính máy tính của mình, làm việc trên những tệp của mình luôn.",
        "Em sẽ cố gắng trong bốn chặng này giúp anh chị có tư duy đúng về AI và tự động hóa được những công việc lặp đi lặp lại. Thôi, đi vào luôn cho nó nhanh.",
      ],
    },
  ],
  "01": [
    {
      moc: "00:05:15",
      loi: [
        "Chặng một. Anh chị nên hiểu một cái nhá: AI nó không vạn năng, và tại sao nó lại bịa.",
      ],
    },
    {
      moc: "00:05:15–00:10:34",
      loi: [
        "Thực ra AI nó không có hiểu ngữ nghĩa, hay tâm tư tình cảm gì của mình đâu. Thuật toán thuần của nó, cái mô hình ngôn ngữ lớn ấy, nói một cách dễ hiểu thì nó chỉ đang đoán chữ tiếp theo thôi. Mà đoán dựa trên xác suất thống kê nhá.",
        "Xác suất thống kê tức là gì? Nếu bây giờ anh chị dạy cho nó một cái gì đấy nhiều, nói cho nó một thông tin gì đấy nhiều trong những tài liệu mà nó đọc được, thì với nó, đấy là thứ nó sẽ đưa ra khi mình hỏi câu tương tự.",
        "Ví dụ đây là một ví dụ em gần như đã thử với cả nghìn người rồi, vài nghìn người rồi, kể cả học sinh hay trong các buổi workshop đều lôi cái này ra. Đấy là cho mọi người ngồi gõ vào một con AI bất kỳ. Bất kỳ luôn. Câu này: “Một con vịt xòe ra hai cái…”. Xòe ra hai cái gì đấy?",
        "Xòe ra hai cái cánh ạ. Nếu anh chị thử như em thì em dự là phải chín mươi lăm phần trăm số người đều ra được câu “một con vịt xòe ra hai cái cánh”. Bởi vì nó là một câu trong bài hát ai cũng đã được học, có trong tài liệu nó được huấn luyện, cũng như con vịt nó chẳng thể xòe ra được thêm cái gì nữa. Gần như lựa chọn ở đây chỉ có một thôi.",
        "Đương nhiên nhá, trải nghiệm của em là vẫn có những bạn ra câu khác, ví dụ xòe ra hai cái chân luôn. Hay nếu chat câu này với ChatGPT thì có khi anh chị nhận lại được hình một con vịt luôn. Tức là nó vẽ ảnh luôn ấy.",
        "Thế nhưng một câu khác, mơ hồ hơn: “Lúc rảnh tôi thường…” ba chấm. Mình muốn nó làm cụ thể thì mình nhắc thêm: điền vào dấu ba chấm giúp tôi. Câu này, nếu ở workshop, em cho mọi người nhìn bài nhau, và mọi người sẽ thấy: ơ, chẳng ông nào giống ông nào.",
        "Ví dụ của em thì nó ra: đọc về công nghệ mới, suy ngẫm về quản trị. Úi giời ôi, nghe tu tập bản thân nghe sợ thế. Nhưng cho một bạn làm nội dung thử thì chắc ra đi nghiên cứu content đối thủ. Còn những bạn mà con AI chưa hiểu gì về mình ấy, thì nó sẽ toàn ăn, chơi, ngủ, nghe nhạc, xem phim.",
        "Thế tại sao lại như thế? Là bởi vì rõ ràng thông tin mà mình nạp vào cho nó. Câu con vịt xòe ra cái cánh là thứ gần như chắc chắn rồi. Nhưng với câu “lúc rảnh tôi thường” thì chẳng có tiêu chuẩn nào cho phần này cả. Mỗi người một sở thích, một thú vui khác nhau. Thế nên AI nó không có thông tin để nó đoán.",
        "Và nếu bắt đầu nó có thông tin, có kiến thức về mình, thì lúc đấy nó mới đưa ra được câu trả lời cá nhân hóa hơn. Và nó dẫn đến tình trạng gì? Đấy là AI có thể bịa. Bản chất là nó không có thông tin. Thế nên theo thuật toán của nó thôi: nó cố đưa ra câu trả lời sát nhất có thể, dựa trên những gì nó học, trên xác suất cao nhất. Chứ còn không chắc câu đấy đúng hay sai. Bởi vì nó đâu biết đúng hay sai đâu.",
        "Cho nên là đừng chửi nó ngu. Mình hiểu rằng: à, nó cũng chỉ đang làm theo xác suất thôi. Và nói thật nhá, người mình cũng thế mà. Chúng ta không có một thuật toán chạy trong đầu, nhưng thực tế, ví dụ nhận việc từ sếp đi, sếp có khi giao chỉ một câu ngắn cụt thôi. Mình có phải tự bịa không? Mình sẽ bắt đầu tự nghĩ: ờ, thế chắc là như thế này.",
        "Hay cái lúc mình phản biện lại khi bị nói là làm sai ấy: “Em tưởng…”. Em tưởng! Đúng không ạ? Thế nên thực ra AI cũng giống người thôi. Mình hiểu nó đang làm theo xác suất, để mình đừng kỳ vọng sai vào nó. Làm gì thì mình cũng nên kiểm tra lại. Cái này siêu cơ bản, nhưng em vẫn phải nhắc lại.",
      ],
      luuY: "Nếu lớp có máy: cho anh chị gõ thử đúng hai câu trên màn rồi nhìn bài nhau, như buổi gốc làm ở workshop. Số phần trăm trên màn chỉ để minh họa.",
    },
    {
      moc: "00:10:34–00:13:43",
      loi: [
        "Rồi cái thứ hai. Mỗi con AI lại mạnh ở một góc độ khác nhau, bởi vì dữ liệu huấn luyện của chúng nó khác nhau ạ. Dữ liệu mà chúng nó được đọc hoàn toàn khác.",
        "Ví dụ Gemini đến từ nhà Google. Thế nhưng Google mạnh nhất là cái gì? Google Search. Nên tất cả những kiến thức phổ biến đã được đưa lên web, những kiến thức chung chung mà anh chị tìm trên Google ra cực nhanh, hoặc như em muốn tìm hiểu để mua một sản phẩm gì đấy, so sánh giá, so sánh tính năng, thông tin trên web siêu sẵn, thì em dùng Gemini.",
        "ChatGPT lại là một con rất cân bằng. Việc gì nó cũng làm được. Bảo viết content nó cũng viết tốt, làm ảnh nó cũng tốt, làm video nó cũng có, làm slide hay code, tư duy, mọi thứ đều ổn. Nhưng thường nó ở ranking số hai trong mọi thứ. Thi thoảng nó chiếm ngôi số một xong rồi lại lùi về số hai.",
        "Ví dụ về tư duy thì Claude với ChatGPT cạnh tranh nhau số một số hai. Về ảnh thì ChatGPT với Gemini cạnh tranh nhau số một số hai. Tức là ông ChatGPT này cân bằng mọi thứ, anh chị làm gì với nó cũng được.",
        "Grok thì sao? Grok lại hay ở chỗ nó được huấn luyện từ mạng xã hội. Khác với Gemini nhá: Gemini là web, nơi chúng ta viết thông tin phải chuẩn, văn phong hơi nghiêm túc, trình bày rõ ràng đầy đủ mạch lạc. Với mạng xã hội thì khác đúng không ạ? Chúng ta thoải mái chia sẻ quan điểm, ngôn ngữ linh hoạt hơn, nhiều ngôn ngữ nói hơn ngôn ngữ viết.",
        "Thế nên bảo Grok tra thông tin thì giọng văn của nó tự nhiên hơn, và nó tìm được cả thông tin trên mạng xã hội, mà trên mạng xã hội thường là thông tin thời gian thực, cập nhật hơn, đời thường hơn. Đấy là lúc mình dùng Grok.",
        "Và cuối cùng là Claude, con mà em dùng nhiều nhất, cũng là con em sẽ chia sẻ với anh chị trong ngày hôm nay. Đây là con mạnh nhất về mặt logic, tư duy, cấu trúc, code. Tài liệu huấn luyện của nó đa phần lại là tài liệu khá hàn lâm và kỹ thuật. Thế nên hỏi những vấn đề về nghiên cứu, đi sâu một tí, thì con này làm tốt hơn, chất lượng cao hơn những con kia. Lại là vì đấy là thứ nó được nạp vào đầu sẵn.",
        "Rồi, đến đây hiểu chưa? Có câu hỏi gì không đã?",
        "» Dạ, tới đây tạm thời rõ rồi ạ.",
      ],
      luuY: "Trên màn có ghi “cảm nhận khi dùng, không phải xếp hạng chính thức”. Nếu có người hỏi về bảng xếp hạng thì nói đây là trải nghiệm của người làm nghề.",
    },
    {
      moc: "00:13:43–00:24:32",
      loi: [
        "Rồi, thế thì cho anh chị một kỳ vọng đúng một chút. Đấy là mình nên dùng AI như thế nào, học AI như thế nào? Em chia ra có năm cấp độ.",
        "Cấp độ thứ nhất, hầu hết mọi người ở đây đang là cấp một đấy ạ. Cấp một chỉ là hỏi đáp thôi. Gần như hầu hết mọi người ngoài kia em thấy vẫn đang loay hoay ở đây. Đương nhiên nó là cả một quá trình rồi nhá. Hồi AI mới ra năm 2022, sau đấy một hai năm vẫn còn rất nhiều người chưa động vào AI bao giờ. Đến bây giờ gần như tất cả mọi người đi làm đều đang dùng AI rồi, đấy đã là một bước tiến khá lớn. Tuy nhiên với em, nó vẫn là cấp một.",
        "Cấp một là gì? Mọi người đang dùng AI để hỏi đáp, chỉ như thay một công cụ Google thôi. Ngày xưa mở Google lên để search thì bây giờ mở AI lên để search. Chính Google cũng có AI Overview, AI Mode đúng không? Chúng ta không còn ngồi search rồi ấn vào từng link web nữa, đỡ mất thời gian. Nhưng nó chỉ dừng ở chuyện mình hỏi và nó trả lời. Mình muốn nó làm cái gì đấy thì nó cũng chỉ hướng dẫn mình thôi, xong mình phải tự đi làm việc đó.",
        "Thế nên chúng ta chuyển sang cấp cao hơn, cấp hai. Bạn nào nhanh nhẹn thì ngay trong buổi này thôi là qua cấp hai. Đấy là chúng ta bắt đầu có một bạn nhân sự AI. Những ai bắt đầu biết cá nhân hóa hơn, đưa vào instruction, tức là đưa cho nó bối cảnh, cung cấp cho nó memory, cung cấp cho nó công cụ, quy trình để nó làm việc. Lúc này chúng ta có một bạn nhân sự AI đi cùng mình, làm việc cùng mình luôn.",
        "Cao hơn nữa là cấp ba. Cấp ba em gọi là trưởng phòng, mô tả thế cho dễ. Bởi vì lúc này mình có nhiều bạn nhân sự chứ không chỉ một bạn nữa. Mỗi bạn được chuyên môn hóa một việc khác nhau, có quy trình làm việc khác nhau, hướng dẫn công việc khác nhau. Và các bạn này chịu sự điều phối của mình. Tức là khi mình nghĩ ra việc gì đấy thì mình lên kế hoạch xem bạn nào làm việc gì, mình điều phối công việc của các bạn đi.",
        "Lúc này thôi thì anh chị đã được giải phóng sức lao động rất nhiều rồi. Ví dụ một bạn làm nội dung có thể tạo một con chuyên viết content, một con chuyên lên kế hoạch nội dung, một con chuyên đi nghiên cứu đối thủ, con làm cái gì đấy nữa, nhiều ý tưởng lắm. Nhưng vấn đề là mình phải nghĩ xem làm cái gì, và mình giao việc sang cho đúng con đấy. Lúc này mình đang ở vai trưởng phòng.",
        "Nâng cao hơn nữa là cái đợt vừa rồi rất hot: one person business, công ty một người ạ. Em gọi cấp này là CEO, giám đốc. Tại sao? Khi mình làm giám đốc thì mình có đặc quyền: mình có những bạn quản lý cấp trung bên dưới, những bạn trưởng phòng. Mình không ngồi ghế trưởng phòng nữa, mình ngồi cao hơn ông trưởng phòng, việc của mình là ra việc cho ông trưởng phòng này.",
        "Ví dụ vừa rồi anh chị xây được một đội nhân sự trong phòng marketing rồi, nhưng lúc nãy anh chị vẫn đang là trưởng phòng marketing. Bây giờ đẩy vai cao hơn, làm CEO, thì sẽ có một con đứng vai trưởng phòng marketing ở đấy. Anh chị chỉ giao việc sang cho nó thôi. Nó tự biết: việc này tao phải phân cho con nào đi làm.",
        "Chẳng hạn bây giờ muốn lên một chiến dịch Trung thu. Nó biết luôn: à, theo quy trình chị đã xây thì phải nghiên cứu trước, nó giao sang con nghiên cứu đi tìm hiểu thị trường xem Trung thu mọi người làm gì, content ra sao, sản phẩm thế nào. Một con nữa lên kế hoạch nội dung. Một con khác dựa trên kế hoạch đấy viết bài lần lượt. Tất cả chịu sự điều phối của con trưởng phòng kia. Cùng lúc mình giao cho phòng marketing một việc, giao cho phòng nhân sự một việc khác. Đoạn này đúng nghĩa CEO hơn, và công ty một người được vận hành ở đây.",
        "Tuy nhiên nó vẫn không phải đích đến. Cái đích này nghe rất sang, rất xịn, nhưng thực ra chỉ phù hợp với những bạn công ty nhỏ, các bạn freelancer, những bạn xuất phát điểm là chuyên gia, có nhiều năm kinh nghiệm làm một việc gì đấy rồi và bây giờ muốn tối ưu hóa. Thì cấp bốn là thứ các bạn làm được.",
        "Nhưng thực tế là gì? Không ai giỏi tất cả mọi thứ cả. Trong doanh nghiệp nó yêu cầu nhiều vai trò: kế toán, nhân sự, marketing, sale, bên nào còn có cả sản xuất, mua hàng, làm sao mình biết hết được. Có chăng đến lúc giỏi hết được thì cũng đầu bạc phơ rồi.",
        "Thế thì cách làm việc hiệu quả hơn, có câu gì nhở: muốn đi nhanh thì đi một mình, muốn đi xa thì đi cùng nhau. Giống như các startup phải chọn đồng sáng lập, lôi kéo những người giỏi ngồi cùng một mâm. Mỗi ông giỏi kia đều ở cấp bốn rồi, đều có đội ngũ riêng rồi, nhưng bây giờ muốn chơi một game lớn hơn thì các ông phải ngồi với nhau.",
        "Chuyện gì xảy ra? Không thể mỗi ông một team riêng độc lập như thế được, giá trị nó không chặt chẽ, không bền vững. Và khi hợp tác thì phát sinh những việc chung, thông tin chung cần quản lý, phải phân quyền rõ ràng. Chẳng hạn CEO thì xem được hết mọi dữ liệu, nhưng một bạn sale thì chỉ được xem đơn hàng, khách hàng của bạn ấy thôi, không được xem toàn bộ của phòng sale.",
        "Vấn đề phát sinh ở cấp năm chính là phân quyền. Vẫn là những bạn AI đấy, ai cũng chat được, nhưng mỗi người chat thì lấy được thông tin khác nhau, ra lệnh được khác nhau. Khâu phân quyền là khâu lớn nhất của cấp năm.",
        "Rõ lại nhá. Cấp một đang chỉ là hỏi đáp. Cấp hai bắt đầu cá nhân hóa một công cụ kiểu Claude hay ChatGPT cho bản thân mình. Cấp ba tạo ra nhiều bạn, mỗi bạn một chuyên môn, mình đi điều phối, trưởng phòng. Cấp bốn là quy trình hóa, xây được quy định phối hợp giữa các con AI với nhau, mình chỉ giao xuống con tổng, nó tự biết làm tiếp. Cấp năm là phân quyền: ông chủ tịch chỉ định hướng thôi, còn lại hệ thống bên dưới vận hành hết.",
        "Tuy nhiên, thực tế anh chị không cần phải lên cấp bốn, cấp năm. Hình dung việc dùng AI như đi lái xe nhá. Cấp ba là biết lái xe. Cấp bốn, cấp năm là bắt đầu đi chế tạo xe. Mình là người ứng dụng AI thì chỉ cần cấp ba là dùng được hết mọi thứ, hiểu hết AI hoạt động thế nào rồi. Sản phẩm của các ông cấp bốn, cấp năm tạo ra cũng để cho ông cấp ba dùng thôi.",
        "Ông cấp ba không cần biết tạo, nhưng vẫn biết dùng mà đúng không ạ? Mình đâu cần biết tạo ra ô tô, xe máy hay máy bay, mình vẫn đi được. Bạn nào hứng thú, thích mò mẫm kỹ thuật thì có thể đi lên. Còn với chủ doanh nghiệp, em thường khuyên: thôi, thuê luôn mấy ông có khả năng xây cấp bốn, cấp năm về. Quan trọng là mình biết mình muốn làm gì, để mình định hướng cho những ông xây đấy.",
        "» Mấu chốt là đa số mọi người chỉ cần dừng ở cấp ba, nghĩa là tận dụng AI, điều phối để làm việc hằng ngày là khá đủ rồi. Còn cấp bốn, cấp năm là khi mình thật sự là chuyên gia, đúc kết ra được một quy trình chuẩn, không dư bước, sát với bối cảnh thực tế của mình, thì hẵng đi lên. Hôm nay mình tập trung làm chủ cấp ba, đúng không ạ?",
        "Chuẩn. Nguyên quả luôn.",
      ],
      luuY: "Đoạn này dài, giảng khoảng 6–8 phút. Màn chỉ hiện năm cấp và câu lái xe / chế tạo xe; ví dụ Trung thu, startup, phân quyền là kể miệng.",
    },
    {
      moc: "00:24:32–00:26:39",
      loi: [
        "Rồi, đi vào tiếp theo. Làm sao để mình bắt đầu sử dụng AI hiệu quả? Có một tư duy mà em muốn anh chị luôn luôn nhớ. Đấy là mình hãy coi AI là một bạn thực tập sinh tài năng mới vào công ty. Nhớ nhá.",
        "Bạn này không phải chuyên gia gì kinh khủng đâu. Mặc dù bạn biết rất nhiều, rất nhiều kiến thức chuyên môn này kia, nhưng khi làm việc với bạn ấy, mình hãy coi toàn bộ kiến thức đấy chỉ là tiềm năng của bạn ấy thôi. Bạn là người tài năng, năng lực nội tại tốt. Nhưng bạn vẫn chỉ là một thực tập sinh mới vào công ty.",
        "Bởi vì sao? Làm gì biết gì về công ty mình đâu? Làm gì biết gì về mình đâu? Trong kiến thức được huấn luyện cho con AI đấy không có những thông tin đó: không có thông tin về doanh nghiệp mình, quy mô bao nhiêu, mình làm lĩnh vực nào, ngành nghề gì, công việc hằng ngày, khách hàng mục tiêu là ai, sản phẩm có những gì. Tất cả không hề có. Thế nên bạn này rất giỏi nhưng chưa biết gì về mình cả.",
        "Thế thì mình phải vào vai: mình là sếp của bạn ấy. Hình dung nhá. Hầu hết anh chị đang là người đi làm, nhưng hôm nay em muốn anh chị đổi vai. Anh chị đang là sếp của chính mình ấy. Coi như mình mới bắt đầu đi làm đi, nhớ lại cái thời mình mới đi làm. Bây giờ mình đóng vai ông sếp của mình để giao việc. Thế thì giao việc như thế nào?",
      ],
    },
  ],
  "02": [
    {
      moc: "00:26:39",
      loi: [
        "Chặng hai: giao việc. Thực ra đây là một kiến thức rất hay mà em nhớ mãi. Em học trong một lớp CEO, và đây là kiến thức ngay buổi một được dạy. Ngay buổi đầu tiên.",
      ],
    },
    {
      moc: "00:26:39–00:30:45",
      loi: [
        "Đấy là: muốn bất kỳ ai làm việc gì đấy cho mình thì chỉ có hai yếu tố thôi. Thứ nhất là will, họ phải muốn làm. Và hai là able, họ phải làm được.",
        "Ví dụ nhá, bây giờ em nhờ một bạn chạy ra đầu ngõ, ra chợ mua cái gì đấy cho em. Việc đi ra chợ, ra đầu ngõ là thứ bạn ấy làm được, chẳng khó khăn gì. Nhưng: ơ, tại sao tôi phải làm thế? Sao mày bắt tao đi? Bởi vì làm gì có động lực đâu. Thế nhưng bảo: chạy ra đi, xong anh cho năm chục. Đi ngay đúng không?",
        "Lúc này chúng ta có động lực. Các bạn đi làm cũng thế, mỗi người một động lực: người muốn phát triển bản thân, người muốn kiếm thêm thu nhập, người vì mối quan hệ, hay trong đấy có crush của mình, rất nhiều lý do. Mình nhờ vả đôi khi phải tỉ tê tâm sự, mua cốc trà sữa: ôi mày giúp tao. Đều là đi giải quyết vấn đề will này hết ạ, vấn đề mong muốn.",
        "Thế nhưng cái hay của AI là gì? AI nó không cần yếu tố này. Lúc nào nó cũng sẵn sàng hai tư trên bảy. Anh chị giao bao nhiêu việc nó vẫn sẵn sàng làm.",
        "Nói chuyện rất cơ bản như designer đi. Bảo một bạn designer sửa thiết kế đến lần thứ ba xem mặt bạn ấy có sưng lên không?",
        "» Em thử rồi. Sợ lắm.",
        "Sợ lắm đúng không? Đến mức người muốn giao việc cũng không sẵn sàng giao nữa. Bạn kia không còn trong tâm thế muốn làm nữa, mặc dù bạn ấy làm được. Thì AI là bạn mà mình giao đến mười lần nó vẫn làm. Giao nhiều việc cùng lúc, nửa đêm gọi dậy nó vẫn làm. Không đòi tăng lương, không đòi nghỉ phép, không đòi bảo hiểm xã hội.",
        "Thế nên làm việc với AI là bỏ được luôn cả cục will này. Mình chỉ cần tập trung vào chữ able, làm được. Làm được là sao? Mình phải cung cấp được cho bạn ấy bối cảnh, công cụ, cách làm.",
        "Lúc nãy bảo chạy ra đầu ngõ mua đồ thì bối cảnh rất đơn giản, hướng dẫn chẳng có gì. Nhưng bây giờ bảo: xây cho anh một con AI agent. Ủa anh ơi, thế làm như thế nào? Hay mới vào công ty, được bảo: em đi làm báo cáo kinh doanh cho anh. Ơ, nhưng viết báo cáo như thế nào? Có mẫu gì không? Bản chất cái mẫu cũng là thứ giúp mình về cách làm. Hay: anh ơi em không có máy tính. Thế thì công ty phải mua cho bạn một cái máy. Đấy là cung cấp công cụ.",
        "Cung cấp công cụ và hướng dẫn cách làm để bạn ấy có thể làm được, chứ không nhất thiết chữ able phải đến từ kỹ năng, kinh nghiệm đâu. Hiểu rộng chữ này ra: làm sao để bạn ấy biết cách làm và có khả năng làm. Biết cách rồi, thêm công cụ nữa, thì mới làm được. Và việc đầu tiên trong chữ này sẽ là việc giao tiếp: làm sao nói cho bạn ấy hiểu mình muốn gì, bởi vì bây giờ mình đang là sếp của bạn ấy rồi.",
      ],
    },
    {
      moc: "00:30:45–00:40:42",
      loi: [
        "Để giao việc đầy đủ, với em sẽ có năm yếu tố. Thứ nhất là vai trò. Cái này gần như ai cũng học rồi: bạn là một chuyên gia marketing, chuyên gia content, chuyên gia này kia, senior này senior kia. Ai cũng học rồi ạ. Nhưng còn một vế nữa trong vai trò mà mọi người dễ bị thiếu, đấy là whom. Câu trước là who, bạn là ai. Còn một câu nữa là whom: bạn làm cho ai.",
        "Senior marketing đi, nhưng cho công ty nào? Sản phẩm là gì? Lĩnh vực ra sao? Khách hàng là ai? Không đưa những thông tin đấy thì thằng senior cũng chỉ là thằng có kiến thức thôi. Cùng là một tệp khách, nếu là chủ doanh nghiệp thì làm việc theo kiểu khác, nếu là người đi làm thì phải truyền đạt theo kiểu khác, đúng không? Vai trò phải xác định rất rõ, và đây thực ra lại là chỗ nhiều thông tin nhất nhá.",
        "Tiếp theo là mục đích. Mục đích và nhiệm vụ đi cùng nhau. Nhiệm vụ là làm báo cáo, làm content, viết sách, làm báo giá, hợp đồng. Nhưng mục đích của việc đấy là gì? Ví dụ cùng là một bài đăng Facebook, bài để chuyển đổi thì nó khác, bài chỉ lấy tương tác thì nó khác. Mục tiêu khác nhau thì cách viết, cách giải quyết hoàn toàn khác nhau.",
        "Nếu mình không xác định mục tiêu, chỉ đưa: viết báo cáo cho tao, làm hợp đồng cho tao, thì nó đi theo một chuẩn chung. AI làm theo xác suất thống kê mà: bình thường một hợp đồng có những hạng mục gì thì tôi viết các hạng mục đấy. Nhưng nó không biết mục tiêu của hợp đồng này. Chẳng hạn đây là một khách rất VIP, hợp đồng này chỉ nhằm kéo ông này về thôi, còn mục tiêu là những hợp đồng đằng sau nữa. Thế thì hợp đồng đầu phải có ưu đãi, điều khoản có lợi hơn cho khách so với hợp đồng bình thường. Mình không đưa thông tin mục đích đấy vào thì làm sao con AI làm đúng được. Kể cả sếp giao việc cho mình cũng thế thôi: không đưa mục đích thì mình cũng chỉ viết chung chung. Vâng, em làm theo mẫu đây. Rồi xong.",
        "Tiếp theo là hai yếu tố tạo nên sự khác biệt của một người senior, người có nhiều năm kinh nghiệm, chuyên gia trong lĩnh vực. Đấy là cách làm và yêu cầu đầu ra. Để làm việc này thì bước một là gì, bước hai là gì, bước ba là gì? Để làm hợp đồng đấy thì phải sang phòng kinh doanh lấy thông tin, sang kế toán xin chữ ký, lên kế hoạch thanh toán, hay xin phép sếp vài chương trình giảm giá cho khách này. Bước một, bước hai, bước ba, bước bốn phải kiểm tra từng bước rồi mới ngồi làm.",
        "Có hướng dẫn từng bước rồi, nhưng nếu không có yêu cầu đầu ra thì mình không đảm bảo được việc bạn ấy làm đã tốt. Yêu cầu đầu ra, em thường gọi là định nghĩa hoàn thành. Nghe cái này khác hẳn rồi nhá. Yêu cầu đầu ra nghe rất chung chung, còn định nghĩa hoàn thành thì khác.",
        "Ví dụ một việc siêu đơn giản: dọn phòng vệ sinh sạch sẽ. Rồi thế nào là sạch sẽ ạ? Phải gạch đầu dòng ra một checklist rất rõ: sàn phải khô, giấy phải thay, không có mùi lạ, xà phòng đã được xem lại. Giống như viết content: lên dàn ý trước, rồi viết, rồi trau chuốt, và đầu ra phải đảm bảo những yếu tố này. Trong sale người ta còn đảm bảo bài viết phải lặp từ này bao nhiêu lần. Đều là định nghĩa hoàn thành hết.",
        "Thế thì để giao việc cho một người, giúp họ able, chưa nói đến công cụ, sẽ có năm yếu tố này: vai trò, mục đích, nhiệm vụ, cách làm và yêu cầu đầu ra. Anh chị chỉ cần nhớ mỗi phần này thôi, không cần nhớ thêm bất kỳ công thức viết prompt nào nữa.",
        "Người ta rất hay dạy các công thức viết prompt, nhưng em nói thật với anh chị: không cần một công thức nào cả. Bởi vì sao ạ? AI không cần mình đưa thông tin một cách logic, có sắp xếp. Năm yếu tố này mình đưa lộn xộn tùm lum cũng được, miễn là đủ chi tiết và rõ ràng.",
        "Thế nên thực ra khi em giao việc cho AI, em không ngồi gõ thẳng lên ô chat đâu. Mẹo thực tế là gì? Em mở một cái ghi chú, hay một tệp Word, ngồi gõ hết tất cả những gì mình nghĩ ra. Bạn nào xịn hơn thì dùng nói thành chữ: bây giờ tao muốn một hệ thống như thế này nhá, nó làm được cái này cái kia, à nhưng phải có thêm tính năng này nữa, trường hợp như thế này thì làm ra sao. Cứ ngồi chém hết một loạt. Rồi cầm nguyên cái đấy ném vào, AI vẫn làm được. Không cần cái này trước cái kia sau. AI nó có khả năng sắp xếp lại thông tin, nó đủ thông minh để làm việc đấy rồi.",
        "Và cái này không chỉ áp dụng cho AI, nó áp dụng cho cả người nữa. Mình nhìn lại luôn: trong công việc bây giờ mình đang nhờ vả, giao việc cho người khác, đã đủ những yếu tố này chưa? Các bạn làm sai thì mình nên nhìn lại trước là mình giao việc đã đủ chưa. Đừng trách các bạn ấy không có khả năng làm. Tiên trách kỷ, hậu trách nhân, mình cứ làm hết khả năng của mình đã. Đủ năm cái này rồi mà bạn ấy vẫn làm sai thì lúc đấy mới là do bạn ấy. Và anh chị tưởng tượng, nếu sếp giao việc cho mình như thế này thì chẳng sướng à? Biết luôn chính xác mình phải làm gì, như thế nào.",
        "» Cái này khá liên quan với điều ban đầu: AI đơn giản là mô hình ngôn ngữ, tức là nó đoán chữ. Thì càng cụ thể, chi tiết về bối cảnh và yêu cầu trong câu lệnh, càng giúp AI thu hẹp phạm vi đoán. Ban đầu có thể tám mươi phần trăm không đúng ý mình, càng chi tiết thì phần sai giảm xuống còn mười, hai mươi phần trăm. Nói chung không trách AI sai, mà chất lượng đầu ra phụ thuộc rất nhiều vào chất lượng câu lệnh và bối cảnh người dùng cung cấp. Đúng không ạ?",
        "Chuẩn. Nhưng đoạn này em chỉnh luôn một chút, vì nó sang chặng sau. Nó không phụ thuộc vào chất lượng câu lệnh của mình.",
        "» Thế hả?",
        "Ý ở đây là nó không phụ thuộc vào một câu duy nhất của mình. Mọi người hay nghĩ: bây giờ tôi giao việc cho AI thì câu lệnh của tôi phải rất hoàn hảo. Cứ ngồi nghĩ mình sẽ gõ gì sang cho AI. Thứ nhất, như lúc nãy em chia sẻ, bản thân em cũng không yêu cầu nó hoàn hảo đâu. Em ngồi chém một loạt ra rồi mới đưa sang cho nó. Nhưng cái tiếp theo mới quan trọng: ba thói quen.",
      ],
      luuY: "Màn quan trọng nhất của chặng, giảng 8–10 phút. Trên màn chỉ có năm thẻ; ví dụ hợp đồng khách VIP, phòng vệ sinh, mẹo chém gió vào ghi chú là kể miệng. Câu nhận xét của người học ở cuối nên hỏi lớp: “Có anh chị nào thấy nó liên quan đến chuyện đoán chữ lúc đầu không?”",
    },
    {
      moc: "00:40:54",
      loi: [
        "Trên màn là cùng một việc, hai cách giao: một câu cụt lủn, và một câu đủ vai trò, mục đích, nhiệm vụ, cách làm, yêu cầu đầu ra. Anh chị nhìn qua để thấy khác nhau thế nào, rồi mình sang ba thói quen.",
      ],
      luuY: "Trong buổi gốc, diễn giả lướt qua màn này rất nhanh. Không cần đọc hết hai cột.",
    },
    {
      moc: "00:40:42–00:50:37",
      loi: [
        "Ba thói quen để anh chị làm việc với AI hiệu quả hơn nữa. Anh chị hiểu thế này: giao việc cho người cũng không thể kỳ vọng giao một phát bạn ấy làm được luôn. Đặc biệt đây là một bạn nhân sự mới, một thực tập sinh, làm sao kỳ vọng vừa giao phát là làm được việc cho mình. Trong công việc mình cũng phải có phản hồi. Đây chính là cái đầu tiên: feedback, phản hồi. Bạn ấy làm sai, làm đúng thế nào, mình phải phản hồi lại.",
        "Vẫn câu chuyện designer lúc nãy. Tại sao đến lần thứ ba mặt bạn ấy đã sưng lên rồi? Bởi vì mình cứ bảo: xấu quá, làm lại đi. Chị thấy thiết kế này xấu quá, em làm lại đi. Làm lại nào? Chị muốn em làm thế nào? Tao không biết, mày làm lại. Còn khó chịu hơn nữa là những người sếp có tính áp đặt cao, nhất quyết không chịu nói, hoặc bản thân họ cũng không biết họ muốn gì, chỉ dí cho mình: phải làm lại. Lúc này mình chẳng bịa thì là gì? Tự mình nghĩ ra cách làm, rồi lại ra một sản phẩm lỗi khác, vẫn không đúng ý. Vậy ông có nói được ra thứ ông muốn không?",
        "Chìa khóa của feedback là phải nói ra thứ làm được, actionable. Dựa trên feedback đấy, họ phải biết tôi sẽ làm gì tiếp theo. Ví dụ: phông chữ to ra, đổi màu đi, thêm ảnh vào. Nếu mình không biết thì lấy vài mẫu mình ưng đưa ra, nói anh ưng cái này ở đâu. Không nói được thì đi tìm thứ tương tự để chỉ. Hoặc hỏi vài chuyên gia lấy từ khóa, bảo em nghiên cứu thêm từ khóa này để áp dụng. Phải có hướng đi cho họ, lúc đấy họ không bị mệt, biết chính xác mình muốn gì. Chứ không thì họ làm trong tâm thế làm xong lại ăn chửi tiếp.",
        "AI thì nó không ở tâm thế làm xong ăn chửi. Hình như cũng có đôi chút nếu bạn nào linh tinh quá. Em từng gặp trường hợp có người bắt nó làm đi làm lại khoảng chục lần không được, nó cũng cay. Nhưng ít lắm, hiếm lắm. Thường nó sẵn sàng làm cho mình, mình chỉ việc nói cho nó mình muốn gì. Ai muốn học cách feedback cho con người thì tìm từ khóa “4A feedback”, văn hóa của Netflix, trong đấy cũng có chữ actionable này.",
        "Thói quen thứ hai là chia nhỏ việc. Đừng giao cả một việc siêu to khổng lồ sang cho AI, nó sẽ đoán bừa rất nhiều. Mỗi một việc nó đã có khả năng đoán rồi đúng không? Giờ cả một việc khổng lồ gồm rất nhiều bước, mỗi bước mình đều cho nó tự đoán, mỗi chỗ sai một tí, tích lũy dần theo từng bước thì nó toang rất to. Và câu trả lời của AI cũng có giới hạn. Ra một việc lớn như thế thì nó ít không gian để suy nghĩ, chất lượng không cao, chỉ ra một sản phẩm tổ hợp rất trung trung thôi.",
        "Thay vì thế, mẹo là: chưa cần cao siêu gì, anh chị ngồi lên kế hoạch với một cuộc chat trước. Kế hoạch gồm ba phần đi, thì mỗi phần mình mở một cuộc chat khác ra làm, và làm từng bước thôi. Ví dụ đi nghiên cứu thị trường: bước một, bước hai, bước ba là gì. Xong sang một cuộc chat song song lên kế hoạch nội dung: bước một, bước hai, bước ba, tỉ lệ bài viết ra sao, trụ nội dung thế nào, thảo luận với nó từng bước rồi mới xây ra được kế hoạch. Cuối cùng là báo cáo tổng kết. Chia ra như thế thì chất lượng đầu ra cao hơn rất nhiều.",
        "Và cuối cùng, đây là đặc quyền khi dùng AI: làm nhiều lần và kiểm tra chéo. Con người thì vẫn câu chuyện designer sửa ba lần ấy, mình feedback tốt đến đâu, đến lần thứ năm, thứ bảy mặt bạn vẫn sưng thôi. Không có cửa. Nhưng với AI thì không giới hạn số lần mình yêu cầu làm lại.",
        "Kiểm tra chéo là gì? Trong con người chúng ta đi làm cũng có những người vào vai kiểm tra, giám sát. Trong sản xuất có QA, kiểm soát chất lượng. Phải có một người kiểm soát đầu ra của công việc, xem đã đúng chưa, chuẩn chưa, lỗi ở đâu. Với AI mình hoàn toàn làm được. Làm xong việc, mình mang sang một cuộc hội thoại khác. Không nhất thiết Claude thì phải mang sang ChatGPT, chỉ cần mở một cuộc hội thoại khác thôi. Trình bày lại: đây là vấn đề này, mục tiêu này, và đây là bài giải của nhân sự của tao, mày feedback đi. Nó chui vào kiểm tra ngay: lỗ hổng thế này, logic kia chưa được, rồi nó hỏi lại và phản biện.",
        "Nâng cao của đoạn này nhá, chia sẻ case thực tế không anh chị nghe lý thuyết quá. Như em vibe code, tức là cho AI xây sản phẩm bằng code cho mình, thì cứ mỗi khi ra một tính năng, em gọi năm con AI ra. Một con kiểm tra back end, một con kiểm tra front end là giao diện, một con kiểm tra trải nghiệm người dùng, ấn cái này cái kia ra làm sao, một con kiểm tra bảo mật, và một con kiểm tra cơ sở dữ liệu đã tối ưu chưa. Lôi năm con này ra để vả vào mồm con vừa xây.",
        "Miễn là còn lỗi là mời sửa. Sửa xong thì sao? Đây mới là cái ma giáo của em: sửa xong em lại gọi năm con mới toanh, không biết gì, đi review lại từ đầu tính năng này. Và cứ lặp đến bao giờ tính năng sạch sẽ mới cho qua. Đỉnh điểm là em từng dùng vòng lặp này để review code một dự án, nó chạy mười bốn lần. Mười bốn nhân năm là bảy mươi nhân sự senior có khả năng đi kiểm tra việc của thằng khác, mỗi ông làm một phần.",
        "» Trong thời gian ngắn ạ?",
        "Đương nhiên cái đấy em chạy mất khoảng bốn đến năm tiếng. Nhưng làm sao để lặp nó trong một vòng kín thì đấy là việc mình giao sang cho AI, tí nữa đoạn cuối mình sẽ nói. Về tư duy thì nó là như vậy.",
        "Đấy là ba thói quen bổ trợ cho năm yếu tố giao việc kia. Và chỉ cần những kiến thức này thôi là anh chị đã vượt xa những người ở cấp một rồi, những người vẫn đang chỉ hỏi đáp đấy. Thế nhưng làm sao để đi lên các cấp cao hơn thì đó là phần tiếp theo.",
      ],
      luuY: "Trên màn chỉ có ba thẻ. Câu chuyện designer, 4A của Netflix, năm con AI và vòng lặp mười bốn lần là kể miệng, giữ ngôi thứ nhất hay đổi thành “một người bạn làm phần mềm của em” tùy anh.",
    },
  ],
  "03": [
    {
      moc: "00:50:37–00:51:07",
      loi: [
        "Chặng ba. Chúng ta cần hiểu một bạn nhân sự AI có những thành phần gì. Ở đây khá nhiều lý thuyết kỹ thuật, nên em đi nhanh, tổng quan cho anh chị nắm được thôi. Từng cái anh chị có thể nghiên cứu kỹ hơn sau, hoặc muốn hỏi kỹ chỗ nào thì em nói kỹ chỗ đấy.",
      ],
    },
    {
      moc: "00:51:07–00:51:37 và 00:57:23–00:59:28",
      loi: [
        "Thứ nhất là instruction. Instruction là chỗ mình đưa vào vai trò, xưng hô, rồi thông tin về cá nhân, về doanh nghiệp mình. Hiểu instruction là một câu lệnh mặc định. Luôn luôn, bất kỳ cuộc hội thoại nào AI cũng đọc đoạn này.",
        "Model là bộ não mình dùng. Memory là những thông tin về mình mà con AI nhớ. Knowledge là những tài liệu mình tải vào. Skill là công thức, quy trình để làm một việc gì đấy. Và tool là các công cụ dành cho con AI. Câu anh chị gõ đi vào, model suy nghĩ, ra câu trả lời. Giờ mình đi từng cái.",
      ],
    },
    {
      moc: "01:25:26–01:26:28",
      loi: [
        "Để dễ nhớ, hình dung vào trong bếp. Tools là nồi niêu xoong chảo, dao dĩa, để mình nấu ăn được. Skill chính là công thức nấu ăn. Và cái mình đưa vào, câu lệnh ấy, chính là nguyên liệu. Mình đưa cho nó đề bài, nguyên liệu, thì nó dựa vào công thức và công cụ đang có để nấu ra món của mình. Đấy chính là câu trả lời.",
        "Còn instruction là vệ sinh an toàn thực phẩm. Knowledge là vài điều đang ghi ở kia để tra cứu thêm. Memory thì chẳng hạn biết anh chị thích ăn cay, nên em cho thêm chút cay vào, kiểu cá nhân hóa. Hình dung cuối cùng đúng nghĩa là một bạn nhân sự. Mình đang xây một bạn AI, nhưng hãy tư duy như xây một bạn nhân sự.",
      ],
      luuY: "Trong buổi gốc, ví dụ gian bếp nằm ở cuối phần skill và tools. Lớp đưa lên đầu để có khung nhớ trước.",
    },
    {
      moc: "00:51:37–00:57:23",
      loi: [
        "Instruction anh chị sẽ thấy ở hai chỗ. Một là ngay trong phần tài khoản. Đây là đoạn tác động lên tất cả cuộc hội thoại của mình. Thế nên mình chỉ đưa vào những thứ liên quan đến mindset thôi, tư duy về cách làm việc.",
        "Ví dụ của em: ưu tiên bền vững và hiệu quả hơn là tiết kiệm chi phí. Em hay đi tư vấn cho doanh nghiệp, nên giải pháp đưa ra cần giải quyết triệt để vấn đề và tồn tại cùng doanh nghiệp lâu dài. Những giải pháp tạm bợ thì em muốn bỏ qua. Tôi chấp nhận trả phí cũng được, nhưng nó phải ngon.",
        "Tại sao phải có cái này? Vì nếu không đưa vào thì hầu hết nhu cầu của mọi người là rẻ, ngon bổ rẻ, muốn giải pháp miễn phí. Thế nên AI cũng đưa cho mình giải pháp miễn phí, và đôi khi không kèm hết các rủi ro có thể xảy ra. Với doanh nghiệp đang vận hành một luồng việc lớn thì đấy là thứ không nên chấp nhận. Còn với anh chị đang là người đi làm, cần thời gian tích lũy, đi theo hướng tối ưu chi phí thoải mái, không sao cả. Đây là thứ ngược với AI bình thường nên mình phải đưa vào cho nó.",
        "Hay vài quy tắc kiểu YAGNI, KISS, DRY. YAGNI là you ain't gonna need it, mày sẽ không cần nó đâu. Đơn giản là đừng nghĩ nhiều quá, đừng nghĩ ra những trường hợp không bao giờ xảy ra, vì đi giải quyết chúng sẽ đẻ ra rất nhiều việc không cần thiết, tốn thêm chi phí. KISS, keep it simple stupid: giữ giải pháp đơn giản, dễ hiểu, để ai vào cũng nắm được luồng, biết tại sao nó làm thế. DRY, don't repeat yourself: những gì đã làm rồi thì đóng gói thành quy trình, thành tiêu chuẩn, lần sau việc tương tự làm theo cách đấy luôn, đừng nghĩ lại từ đầu. Đừng chế tạo lại cái bánh xe. Công thức viết content lần trước viết rồi thì lần sau đừng nghĩ lại.",
        "Chỗ thứ hai: mỗi dự án, mỗi Project, anh chị lại có một instruction riêng. Trong này ghi bối cảnh chung mà mình muốn con AI nắm được trong dự án này. Lưu ý chữ “bối cảnh chung” nhá. Đừng ghim vào chữ Project nghĩa là dự án. Project ở đây chỉ là tổng hợp những cuộc chat có chung bối cảnh.",
        "Bối cảnh có thể là một bạn nhân sự: bạn này là bạn content, toàn bộ kiến thức trong đây là các cách viết content, cách triển khai, và cứ việc gì liên quan content, dù của khách nào, tôi cũng ném vào đây. Project đấy trở thành nhân sự. Hoặc nghĩ theo thuần dự án: mỗi khách hàng tôi tạo một Project cũng được. Kỹ hơn nữa: bạn content của dự án A, cũng là một dạng bối cảnh chung. Nghĩ thế nào là bối cảnh chung hoàn toàn linh hoạt, không có đúng, không có sai.",
        "Và viết instruction cũng không cần nhìn thấy sao sao, thăng thăng, nguy hiểm đâu. Vẫn tư duy lúc nãy: cứ ngồi chém gió hết ra với AI, sau đấy bảo nó sắp xếp lại thông tin, viết lại thành instruction cho dự án này cho tao. Nó viết lại được đúng. Nghĩ nhiều việc viết thế nào cho đúng làm gì, AI nó tự biết viết.",
      ],
    },
    {
      moc: "00:57:53–00:59:28",
      loi: [
        "Model là bộ não mình sử dụng. Trong Claude có các model khác nhau như Sonnet, Opus, Fable, Haiku. Bên ChatGPT cũng có các phiên bản tương tự. Mỗi con ở một mức độ suy nghĩ và làm việc khác nhau. Anh chị có thể bảo chính con AI này phân biệt cho mình lúc nào dùng model nào.",
        "Dễ nhất hiểu thế này. Fable dành cho những việc phức tạp nhất, kiểu siêu tư duy. Opus dành cho việc tư duy vừa phải, một con có khả năng tư duy rất tốt để mình làm việc. Sonnet là con lao vào làm nhiều hơn, nghĩ ít thôi, lao thẳng vào làm. Còn Haiku là con không nghĩ gì hết, mày bảo gì tao cứ thế đâm đầu. Haiku bây giờ em cũng chẳng dùng.",
        "Với những việc xử lý hằng ngày, như làm báo giá, làm hợp đồng, đã có hướng dẫn sẵn rồi, thì dùng Sonnet là đủ ngon. Những việc phải làm mới, kiến tạo mới, lần đầu tôi làm, tôi cần tư duy cách làm, thì cân nhắc giữa Opus với Fable, tùy độ phức tạp. Model là mảnh ghép liên quan đến suy nghĩ.",
      ],
      luuY: "Trên màn chỉ hiện ba model để khỏi lỗi thời. Tên model đổi theo thời gian; nói ý “con nghĩ nhiều, con lao vào làm” là đủ.",
    },
    {
      moc: "00:59:28–01:02:37",
      loi: [
        "Tiếp theo là memory, những thông tin về mình mà con AI nhớ. Ví dụ nó nhớ được luôn hồ sơ của em: dựa trên lịch sử nói chuyện, nó tự lưu lại, hoặc mình chủ động bảo nó: lưu cái này vào memory cho tôi. Trong đấy nó ghi rất nhiều: công ty em đang dùng công cụ gì, thích cái gì, quan tâm cái gì.",
        "Cái hay là memory này anh chị hoàn toàn sửa được. Nó nhớ gì về mình thì mình ngồi gõ vào đây: xóa phần này đi, quên phần này đi. Muốn nó nhớ thêm gì thì chủ động nhắn vào, chứ không cần đợi một ngày đẹp trời nó tự nhớ mình.",
        "Bạn nào đang dùng ChatGPT hay Gemini, bây giờ muốn nhảy sang Claude, thì Claude có một tính năng khá hay là import memory, lôi bộ nhớ của những con khác vào đây. Bản chất nó cũng chỉ là một câu lệnh thôi, một câu lệnh siêu chi tiết Claude làm sẵn. Mình cầm câu lệnh này ném sang ChatGPT, đơn giản là: mày nhớ gì về tao thì nói hết ra đây.",
        "Memory khác instruction ở chỗ: khi nào liên quan nó mới lôi ra thôi, chứ không phải lúc nào cũng nhớ.",
        "Tiếp theo là knowledge, những tài liệu anh chị tải lên. Bản chất knowledge là kho tài liệu của mình: quy định, quy trình, quy chế trong công ty, thông tin sản phẩm, thông tin khách hàng, để AI có kiến thức mà trả lời. Nhưng thực tế bây giờ em rất ít khi tải tệp kiểu đấy. Tải thẳng tệp lên Claude hay ChatGPT thì hiện giờ không hiệu quả lắm đâu. Anh chị sẽ thấy nó trả lời vừa thừa vừa thiếu, đúng sai loạn hết cả lên. Không nên dùng cách mặc định đấy, có cách khác tốt hơn, nhưng cụ thể thì phải một buổi riêng, nó cồng kềnh. Vẫn biết đây là một mảnh ghép nhá.",
      ],
    },
    {
      moc: "01:02:37–01:11:26",
      loi: [
        "Tiếp theo là skill và tool. Skill là công thức, quy trình để làm một việc gì đấy, và tool là các công cụ dành cho con AI. Đoạn này nên làm mẫu cho dễ hiểu. Anh chị vào Customize, mục Connectors. Connector chính là những tool, những công cụ của mình. Khi kết nối các công cụ này thì con AI có khả năng dùng chúng giúp mình. Ví dụ đơn giản nhất là Google Calendar, hay Notion, hay Fireflies.",
        "» Anh chị có dùng Google Calendar không?",
        "Rồi. Nào: tạo lịch cho tôi trưa nay mười hai giờ đi ăn với bạn này. Ngay khi em kết nối công cụ đấy xong thì nó tạo được lịch luôn. Đây, lên luôn. Mở lịch ra kiểm tra xem có không. Và bây giờ bảo: đổi xuống ăn tối từ bảy giờ đến chín giờ. Lịch nó tự sửa.",
        "Tương tự thế, mình quản lý toàn bộ lịch làm việc, lịch hẹn với con AI. Cái này Claude hay ChatGPT đều làm được, chỉ là mọi người không biết thôi. Đều có một chỗ để kết nối công cụ, chỗ gọi connector, chỗ gọi plugin, chỉ cần kết nối Google. Kết nối xong là dùng được luôn ứng dụng trên điện thoại, điều khiển lịch của mình từ điện thoại.",
        "Đây là thứ anh chị dùng để sắp xếp cuộc sống cá nhân: giờ nào làm việc sâu, giờ nào tập thể thao, theo dõi thói quen, chứ không chỉ lên lịch hẹn. Hay nữa là AI nhận diện được hình ảnh. Đợt này mùa cưới đúng không? Có cái thiệp cưới nào mình ném luôn vào, nó bóc nội dung ra và lưu vào lịch cho mình. Việc rất nhàn, nhưng mình kiểm soát cuộc sống cá nhân tốt hơn rất nhiều.",
        "Nâng cao hơn, sang một công cụ nữa là Fireflies. Đây là con AI chuyên tham gia cuộc họp cùng mình, ghi lại hết toàn bộ những gì nói trong cuộc họp, ai nói gì nó cũng ghi. Em giao cho nó một việc khá phức tạp: tìm hộ tôi trên Fireflies hai bản ghi trong cùng một buổi chiều nói về thương hiệu cá nhân, của cùng một buổi workshop, lấy transcript và viết recap cho tôi.",
        "Tức là em còn không nhớ hôm đấy là ngày nào. Em chỉ đang mô tả cho nó thôi, không cần nói chính xác cuộc họp này, không cần đưa link. AI tự lên kho đấy tìm. Sau một hồi nó bảo: tìm ra được hai bản, và bắt đầu viết recap chi tiết, mọi người đã nói gì. Có recap rồi thì bảo: lưu vào một trang Notion cho tôi.",
        "» Notion cũng là một connector luôn đúng không ạ?",
        "Đúng rồi. Trong mục Connectors, mình muốn nó dùng cái gì thì phải kết nối với công cụ đấy: Calendar này, Notion này, hay mail. Gmail cũng thế. Hay làm việc với khách qua mail, báo giá, hợp đồng, thì mình gửi mail cho họ. Muốn biết một công cụ làm được những gì, chỉ cần ấn vào, nó liệt kê các tool ra: tạo sự kiện, xóa sự kiện, lấy sự kiện, phản hồi, cập nhật. Notion thì tạo cơ sở dữ liệu, tạo trang, nhân bản trang.",
        "Ngoài ba cái em đang làm mẫu thì trên trang này hình như phải cỡ nghìn công cụ khác nhau rồi. Học kỹ hơn thì anh chị kết nối được bất kỳ công cụ nào có khái niệm MCP. Ví dụ đăng bài tự động lên đa kênh, điều khiển Google Drive, Google Docs, Google Sheets, Lark Suite, cũng điều khiển được từ Claude. Canva bây giờ cũng tích hợp được: bảo nó thiết kế, nó đi tìm mẫu trên Canva, đề xuất cho mình chọn rồi tạo luôn mẫu đấy.",
        "Cái này dùng sướng nhất với ChatGPT, vì ChatGPT có khả năng tạo ảnh. Dùng ChatGPT làm ảnh xong, dùng luôn tính năng tách lớp của Canva. Biết tách lớp chưa?",
        "» À em biết, tách chủ thể ra, tách các thành phần trong ảnh thành các lớp khác nhau ạ.",
        "Đấy. Thực ra toàn bộ việc này bây giờ chỉ cần nói với ChatGPT thôi là xong, không cần tải tệp lên Canva nữa. Rồi, Notion đã tạo xong trang này, lưu luôn cả transcript. Đã giao việc được sang cho AI rồi đúng không? Lên Fireflies lấy transcript, viết recap, rồi lưu vào Notion.",
      ],
      luuY: "Màn chiếu video minh họa Google Calendar không lời. Fireflies và Notion thì kể miệng theo lời trên; nếu lớp có tài khoản Notion thì làm mẫu thật.",
    },
    {
      moc: "01:11:58–01:19:48 và 01:26:28–01:28:02",
      loi: [
        "Đây là một luồng mà em muốn sau này, lúc nào em bảo “recap cuộc họp”, bạn ấy cũng làm luôn như thế: đừng trả về mỗi phần recap nữa mà lưu luôn vào Notion cho tôi. Một việc bắt đầu nhiều bước đúng không? Và mình muốn mình phải nói ít thôi.",
        "Bởi vì rõ ràng, năm yếu tố giao việc lúc nãy em đưa cho anh chị rất là dài. Muốn viết ra được đoạn đấy, nói thật là dài lắm, và kể cả bản thân em cũng không viết hết được đống đấy đâu. Thế thì làm thế nào? Mình tư duy để bớt việc phải nói đi, mà AI vẫn đảm bảo toàn bộ chất lượng. Chính là nhờ đống này.",
        "Instruction là chỗ mình đưa bối cảnh chung mà mình luôn luôn muốn AI nhớ. Memory là thông tin cá nhân hóa, khi nào liên quan đến mình nó mới lôi ra. Knowledge là tài liệu kiến thức chỉ mang tính tham khảo để hỏi đáp, tra cứu. Skill là các quy trình làm việc.",
        "Hình dung skill giống công thức nấu ăn. Nó khác instruction nhá. Instruction là lúc nào cũng phải đọc. Skill là khi cần cái gì tôi mới lôi quyển sách nấu ăn đấy ra. Mỗi quyển là một món: nấu thịt kho tàu, nấu phở, nấu cơm tấm. Em bảo anh chị nấu cơm tấm thì anh chị chỉ mở công thức cơm tấm ra thôi, không cần mở công thức phở hay thịt kho ra làm gì. Còn nạp hết vào instruction thì lúc nào nó cũng phải nhớ, tự nhiên loãng thông tin. Tại sao tôi phải nhớ một trăm công thức trong khi tôi chỉ cần làm một? Skill giải quyết vấn đề đấy. Khi nào thấy cần cái gì nó mới lôi ra.",
        "Và tool là công cụ để bạn ấy dùng. Như lúc nãy: muốn bạn ấy làm báo cáo thì bạn ấy phải có máy tính, muốn đưa lên Notion thì phải có quyền dùng Notion đã. Việc của mình là kết nối công cụ lại.",
        "Nhưng logic ở đây là gì? Muốn đóng gói skill thì anh chị phải làm trước. Phải làm việc đấy trước đã. Giống như quy trình ấy. Quy trình từ đâu mà có? Quy trình là cách làm tốt nhất để làm một việc gì đấy. Khi mình làm một việc rất nhiều lần, mình biết làm như thế này thì khả năng cao kết quả tốt, mình mới đóng gói lại thành quy trình. Quy trình viết content, quy trình xây kênh, cũng chỉ là cách làm tốt nhất thôi. Không làm theo tôi vẫn ra được, nhưng muốn đảm bảo kết quả tốt thì hãy theo quy trình này.",
        "Nên quy trình đi ra từ công việc. Và công việc đến từ đâu? Từ hai yếu tố: mục tiêu và bối cảnh. Hai cái này mới ra công việc. Làm việc đủ nhiều thì tích lũy kinh nghiệm, lúc đấy mới ra quy trình, rồi mới đến khâu tự động hóa. Nhiều người nhảy thẳng đến bước cuối: xây một luồng, xây một phần mềm để nó làm cái này cái kia. Nhưng bỏ qua khâu trước thì cái luồng đấy chỉ giải quyết được việc lúc đấy thôi. Bối cảnh thay đổi một chút là toang. Xây xong vứt vào xó. Nhiều công ty bỏ tiền tỷ xây ERP xong vứt cũng vì câu chuyện đấy: họ nhảy vào xây mà không đi từ công việc và quy trình.",
        "Với AI, quy trình chính là skill, và nó cũng giống con người thôi: phải làm rồi mới đóng gói. Mình phải làm việc cùng AI đã để ra được kinh nghiệm gì đấy rồi mới đóng gói. Nhưng cái hay là: với con người, muốn đóng gói hay cập nhật quy trình cực kỳ lâu. Đặc biệt khâu cập nhật: năm mươi người đang làm theo quy trình đấy, tôi đổi quy trình một cái là tôi đang đi đổi thói quen của mọi người, có khi vài tháng chưa chắc xong. Với AI, anh chị chỉ cần bảo: cập nhật skill này. Lần tiếp theo nó làm theo quy trình mới luôn.",
        "» Theo em hiểu nãy giờ thì skill giống như một quy trình mà mình có thể ngay lập tức tự động hóa cái gì đó hay lặp đi lặp lại. Ví dụ nỗi đau của bên em là có rất nhiều tài nguyên, hay livestream chia sẻ, nhưng để tái chế thành nội dung đăng mạng xã hội, ý tưởng viết email, YouTube, thì quy trình đó chưa lặp lại được, vẫn thủ công, hoặc em phải nhớ rồi brief lại cho nhân sự. Nên skill này khá là wow: nó xử lý ngay một khối lượng dữ liệu lớn, xuất ra kết quả cần dùng cho khâu khác, siêu tiết kiệm thời gian và không tốn sức người. Em nghĩ em sẽ dùng khá nhiều.",
        "Dạ. Đúng là như thế.",
      ],
      luuY: "Trên màn là vòng “Làm tay → ưng → đóng gói → dùng lại → nâng cấp”. Câu nhận xét của người học ở cuối có thể hỏi lớp: “Anh chị thấy việc gì của mình giống thế?”",
    },
    {
      moc: "01:14:28–01:15:28 và 01:20:26–01:25:26",
      loi: [
        "Ví dụ với recap cuộc họp, coi như recap này em ưng rồi. Việc của em chỉ đơn giản là có một cái gọi là skill creator. Em bảo: đóng gói việc viết recap và lưu Notion thành skill cho tôi. Đầu vào là trang Fireflies, cái transcript từ Fireflies. Đầu ra là lưu lên Notion theo mẫu ở trên.",
        "Giả sử đã ưng mẫu ở trên rồi thì lẽ ra nên viết đầy đủ ra. Câu lệnh của em đang bỏ qua hai khâu đấy, bởi vì nó đã có bối cảnh ở trên rồi, không cần đẻ ra bối cảnh mới.",
        "Nó tạo ra một skill viết recap. Em lưu skill này về. Lưu xong, em mở một cuộc chat mới, vào Customize, thấy skill Fireflies recap vừa tạo. Bây giờ em bảo: recap cuộc họp gần nhất cho tôi, trên ba mươi phút. Em chẳng nhớ cuộc họp gần nhất là họp gì, nên bảo trên ba mươi phút để nó có nội dung.",
        "Lúc này nó đọc theo quy trình mình vừa đưa. Bước một, tìm bản ghi trên Fireflies. Bước hai, lấy nội dung và kiểm tra mức độ đầy đủ. Bước ba, viết recap trong chat. Bước bốn mới lưu vào Notion, rồi sau khi lưu thì trả lời thế nào. Đoạn này là nó tự nghĩ ra dựa trên những gì mình vừa làm với nó.",
        "Đương nhiên chỗ nào không hợp lý thì mình vẫn góp ý để nó sửa: cập nhật quy trình này, thay như thế này, bỏ khâu kiểm tra độ đầy đủ đi chẳng hạn, hay muốn màu sắc, thiết kế thế nào thì bổ sung. Và ngay lập tức, lần này em chỉ bảo “recap cuộc họp” thôi, không cần nói gì nữa, nó vẫn tự biết hỏi: có muốn tôi lưu về trang Notion này không. Vì trong quy trình đã ghi sẵn như thế. Mình chỉ cần bảo ok.",
        "Ví dụ với một bạn làm nội dung, có thể bảo Claude cùng xây một bảng Notion để quản lý content, mỗi dòng là một bài: tiến độ thế nào, đã lên dàn ý hay đã viết đầy đủ, giao cho ai, dự án nào, đăng bao giờ.",
        "» Ok, nghe hợp lý ạ.",
        "Bình thường mọi người vẫn làm cái đấy trên Google Sheets. Notion hay hơn ở chỗ mỗi dòng là một trang luôn, lưu được nội dung đầy đủ bên trong. Sau đấy kết nối thêm một công cụ có khả năng đăng bài đa kênh qua connector. Lúc này anh chị ngồi cùng AI soạn kế hoạch nội dung, chui vào Notion chỉnh sửa, rồi bảo nó: hằng ngày mấy giờ đấy kiểm tra lại và lên bài cho tao. Hợp skill với tool rồi thì không còn giới hạn gì nữa trong việc anh chị làm được gì. Nó able rồi, và những thứ để cung cấp cho AI able là có hết trong tay rồi.",
      ],
      luuY: "Màn chiếu video minh họa skill-creator không lời. Lưu ý skill-creator cần bật Skills trong cài đặt; nếu có người hỏi thì chỉ tại chỗ.",
    },
    {
      moc: "01:18:45–01:19:48 và 01:28:02–01:31:39",
      loi: [
        "Một lưu ý. Anh chị hoàn toàn có thể lên mạng mua hay lấy sẵn vài skill người khác đã đóng gói. Nhưng bản chất skill đấy cũng đi từ một mục tiêu và bối cảnh khác. Cùng là skill viết content, nhưng bối cảnh của người ta là thực phẩm chức năng, đây lại là thẩm mỹ hay hàng tiêu dùng. Hoặc tư duy xây content của mỗi người một khác. Hai skill không khớp, mình không thể cầm skill của ông này ốp vào quy trình của mình rồi kỳ vọng nó chạy tốt.",
        "Cùng bối cảnh, cùng mục tiêu thì mang về tham khảo, ok. Không thì tự mình làm trước. Đây cũng chính là thành quả của một người chuyên gia: họ đã có kinh nghiệm, biết chính xác làm việc này thì cách làm thế nào, và đóng gói lại được. Đấy là cái người ngoài không có. Khác biệt là ở đây.",
        "Giờ thêm vài việc đơn giản nhất mà anh chị dùng được ngay: làm hợp đồng, báo giá, tài liệu. Đều là thứ mình đã có mẫu rồi. Chỉ cần đưa mẫu đấy vào Claude, bảo nó đóng gói thành skill tạo hợp đồng. Nếu có nhiều loại hợp đồng, nhiều dạng điều khoản ứng với từng kiểu khách, thì nói luôn: khách thế này thì thêm điều khoản này. Và cài cắm xem thông tin nào nó phải hỏi lại mình khi tạo hợp đồng mới: thông tin khách đương nhiên phải thay, sản phẩm phải thay, nhưng quan trọng nhất là các điều khoản, có trường hợp khác nhau thì nó phải hỏi. Còn nếu tất cả khách chỉ một mẫu, thì bảo nó: mỗi lần tao bảo, mày chỉ cần hỏi lại thông tin khách rồi tự xuất hợp đồng.",
        "Xịn hơn nữa, trong luồng đấy có luôn bước gửi mail: soạn hợp đồng xong gửi sang khách luôn. Báo giá cũng thế. Biên bản nghiệm thu, đề nghị thanh toán. Phiếu lương cũng vậy, phiếu lương là bài khá hay: hằng tháng có tệp Excel tính lương, làm một skill từ bảng đấy xuất ra phiếu cho từng người, ghi rõ ngày công bao nhiêu, nghỉ phép mấy lần, lương hiệu quả thế nào, đã ứng chưa, gửi cho mỗi người một phiếu cá nhân hóa để xác nhận. Xác nhận xong mới đẩy sang kế toán chuyển tiền.",
        "Rất nhiều việc hằng ngày anh chị đang làm lặp đi lặp lại có thể chuyển thành skill, không cần việc gì đao to búa lớn. Và đây cũng là cái em đi tư vấn hay nói: nên giải quyết từ ngọn. Mọi người hay bảo giải quyết vấn đề từ gốc, nhưng em hay trêu là em hướng dẫn giải quyết từ ngọn. Vì vấn đề được chỉ ra chứ không được tạo ra. Mọi người đang không thấy vấn đề vì chưa ai chỉ ra. Vấn đề là tất cả những việc đang phải làm thủ công, lặp đi lặp lại, dễ sai. Đấy đều là vấn đề mà AI giải quyết được.",
        "Hãy đi giải quyết những việc đấy trước. Vì khi giải quyết được thì đầu mình rất nhẹ, không còn phải nghĩ đến việc chân tay nữa. Phải để bộ óc của mình được sáng tạo, có không gian tư duy, làm những thứ mới, thì mình mới phát triển được. Chứ không thì cứ bị cuốn theo guồng cũ.",
      ],
    },
  ],
  "04": [
    {
      moc: "01:31:39",
      loi: [
        "Nốt một cái cuối cùng. Đây là kiến thức hơi nâng cao, nhưng em nói sơ qua cho anh chị biết.",
      ],
    },
    {
      moc: "01:31:39–01:33:16",
      loi: [
        "Với AI mình làm nãy giờ, nó vẫn chỉ là một bạn đang làm từ xa. Bạn này nằm trực tiếp trên Claude hay ChatGPT, vẫn chỉ là một nhân sự remote thôi. Mình đâu có sở hữu bạn ấy.",
        "Ví dụ một việc đơn giản: mình muốn cùng bạn ấy sửa một tệp. Báo giá, hợp đồng cho khách trong trường hợp chưa có skill, đang làm một hợp đồng mới, hay một kế hoạch mới. Muốn làm việc cùng bạn ấy thì phải bảo tạo tệp, tải tệp về, mình sửa, lại tải ngược lên, lại bảo sửa tiếp. Cứ tải lên tải xuống, chết mệt luôn. Nó giống kiểu feedback cho ai nhỉ?",
        "» (cười) Giống feedback cho designer lúc nãy ạ.",
        "Đấy. Thế nhưng chúng ta có một lựa chọn nữa là chuyển sang Cowork hoặc Code. Claude Cowork, Claude Code, những khái niệm chắc anh chị cũng đã nghe. Lúc này con Claude nằm trực tiếp trên máy mình. Nó dùng được toàn bộ tệp trên máy mình, xem được, sửa trực tiếp luôn trên đấy.",
      ],
    },
    {
      moc: "01:33:16–01:35:00 và 01:41:48",
      loi: [
        "Ví dụ em hay đưa cho mọi người là bảo nó đi dọn thư mục Downloads. Dọn cái thư mục rác nhất quả đất trên máy này luôn. Chẳng có thư mục nào rác hơn thư mục Downloads cả.",
        "Khi con Claude điều khiển được máy mình rồi, để chuyển sang Cowork anh chị chỉ cần ấn nút chuyển sang Cowork, xong. Sau đấy thêm một thư mục, chọn Downloads, và bảo: phân tích trong thư mục này và đề xuất phương án dọn dẹp giúp tôi.",
        "Nó tự chui vào ổ C, vào thư mục Downloads xem có những tệp gì. Đợi một tí nó trả về kết quả: những tệp này tôi đề xuất gom vào một thư mục; những tệp này lặp đi lặp lại thì có thể xóa; những tệp kiểu bộ cài thì nó đề xuất xóa.",
        "» Tức là AI đề xuất trước khi hành động, rồi mình duyệt nó mới làm?",
        "Chính xác. Bao giờ mình cũng nên kiểm soát xem AI đang làm gì. Động đến những quyền hơi nguy hiểm như thế thì bảo nó đưa ra đề xuất, rồi mình là người duyệt.",
      ],
    },
    {
      moc: "01:33:54–01:39:43",
      loi: [
        "Đây đang là một việc đơn giản là dọn thư mục Downloads. Anh chị mở rộng bài này ra được nữa. Ai dùng Google Drive thì Drive có tính năng đồng bộ về máy tính, tuy có mất dung lượng máy. Đồng bộ xong thì cho luôn con Claude điều khiển thư mục đấy, nó dọn dẹp, sắp xếp lại toàn bộ tệp trên Drive, và những gì đã sắp xếp sẽ đồng bộ ngược lên.",
        "» Em phải làm hôm nay thôi, Drive của em còn hơn cái bãi rác nữa.",
        "Thư mục Downloads chắc chỉ thua mỗi Google Drive thôi. Cái gì cũng ném lên đấy, tạo tệp thì cứ tạo tệp mới, không quy hoạch gì, đến lúc tìm thì chết mệt. Em có một bạn học viên từng dùng đúng việc đơn giản này: quy hoạch lại toàn bộ tệp kế toán tài chính, sắp xếp theo từng tháng, hợp đồng, hóa đơn, xong tự tạo báo cáo cho từng tháng luôn. Chỉ đơn giản là giao sang cho Cowork, vì nó chọc được hết dữ liệu trên máy.",
        "» Kể cả hình ảnh và video hả anh?",
        "Hình ảnh và video thì khó hơn nhá. Phải hiểu một tí: mặc định nó không đi đọc nội dung bên trong tệp, vì đọc như thế tốn rất nhiều. Thế thì nó đọc cái gì? Nó đọc metadata của tệp, những thông tin chung.",
        "» Ví dụ tên hay kích thước ạ?",
        "Chính xác. Được tạo lúc nào, thời điểm nào. Ảnh thì còn ghi cả tên thiết bị. Mình dựa vào đấy, kèm thêm chẳng hạn đưa cho nó bảng lịch sự kiện, thì nó biết luôn đây là ảnh của sự kiện nào dựa trên ngày tháng, và quy hoạch giúp mình. Như chỗ em thì quy hoạch có thư mục dữ liệu thô lưu từng lần quay, còn tệp thiết kế hay ảnh đã xử lý là thư mục riêng. Con AI làm đúng kiểu cô Tấm nhặt thóc ra thóc, gạo ra gạo.",
        "Một ví dụ thực tế của em: lần trước em tạo cho khách mười bốn nghìn cái thẻ, mười bốn nghìn tệp thiết kế, tạo số lượng lớn, có dính dáng code một tí. Tạo xong đưa cho khách, chị ấy bảo: bây giờ chị muốn cứ một trăm thẻ gom thành một thư mục. Trong khi trước đấy em phân loại theo nhóm khách, theo loại thẻ, chia theo cách khác. Chị ấy đưa một danh sách mới: cứ một trăm người thế này gom một khối. Đi nhặt tay chắc chết. Cuối cùng đơn giản là đưa cho con AI đọc tệp danh sách của chị ấy, so khớp với tên tệp em đã xuất. Mười phút gì đấy nó chạy xong.",
        "» Wow. Đưa em chắc mười ngày.",
        "Chưa chắc xong. Mười bốn nghìn cái ảnh.",
      ],
      luuY: "Màn chiếu video minh họa Cowork dọn Downloads không lời. Chuyện học viên kế toán và mười bốn nghìn thẻ là kể miệng; giữ ngôi thứ nhất hay đổi thành “một người bạn của em” tùy anh.",
    },
    {
      moc: "01:39:43–01:41:48",
      loi: [
        "» Thầy ơi, có rủi ro gì về bảo mật không? Nó chọc vào máy mình mà.",
        "Cái này mọi người hay hỏi. Nói rõ luôn nhá. Với Cowork, mình cho nó thư mục nào thì nó chỉ dùng được thư mục đấy thôi. Nó giới hạn không gian làm việc lại: cho quyền vào thư mục nào thì chỉ được vào thư mục đấy. Còn Claude Code là kiểu khác, nó có đầy đủ quyền trên cả máy tính, nếu ngay từ đầu mình cài cho nó toàn quyền.",
        "» Tức là nó có thể truy cập vào tất cả các tệp?",
        "Chính xác. Nhưng bản chất là nó không bao giờ tự đi làm. Nó vẫn ngồi đợi lệnh của mình. Mình bảo đọc tệp gì, làm gì thì nó mới làm, chứ không có kiểu tự nhiên nó đi làm. Thế nên rủi ro ở đây chỉ là anh chị có để người khác chiếm quyền chat với con AI của mình hay không thôi. Còn những tệp kiểu mật khẩu lưu trên máy thì khuyên là cất vào một nơi không cho AI truy cập. Thế thôi.",
        "Mặc định khi chuyển sang Code thì bất kỳ tệp nào trên máy, chỉ cần mình cho phép, mình bảo làm, là nó đi làm. Nên dẫn đến một chuyện: anh chị đừng bảo nó đi dọn cả ổ C trên máy Windows nhá. Bảo dọn thư mục Downloads thì được, chứ bảo dọn ổ C, nó lỡ tay xóa nhầm một tệp hệ thống là cài lại Windows luôn, cũng vui lắm.",
      ],
      luuY: "Câu hỏi đầu là câu người học hỏi thật trong buổi gốc (“thầy có rủi ro gì về bảo mật không”). Nên để lớp hỏi, hoặc anh tự nêu.",
    },
    {
      moc: "01:42:19–01:50:10",
      loi: [
        "Nhưng chưa hết. Cowork với Code chưa dừng ở đấy. Lúc nãy em đưa cho anh chị các thành phần của một bạn nhân sự, đấy là nội tại của bạn này. Cowork hay Code vừa rồi là cung cấp thêm một mảnh ghép nữa: không gian làm việc. Bạn ấy được quyền truy cập vào máy mình, làm việc với tệp trên đấy.",
        "Giờ cao hơn nữa. Có không gian rồi, bây giờ tôi muốn gọi hội ra chơi cùng với tôi. Không chỉ một người nữa mà nhiều nhân sự, nhiều AI. Đây chính là đoạn anh chị đặt một chân lên cấp bốn. Toàn bộ phần vừa rồi là anh chị đã có đủ mảnh ghép của cấp ba. Làm cái này là đặt một chân lên cấp bốn: sub-agent, trợ lý phụ.",
        "» Wow.",
        "Lúc trước mình chỉ có một bạn agent. Sub-agent là những bạn hỗ trợ, những bạn trợ lý cho con agent chính này. Khi cần gì thì con chính gọi các con phụ ra làm. Ví dụ điển hình nhất là dùng luôn cách chia việc lúc nãy: việc gì làm song song, việc gì làm tuần tự, mình chỉ cần chat với cuộc chat chính thôi.",
        "Nó tự chia việc cho ba con: một con đi lấy số liệu bán hàng trong tệp Excel, một con lấy lịch họp trên Google Calendar, một con lấy việc mình đang lưu trên Notion. Rồi những con này gửi sang một con tổng hợp số liệu. Con này viết báo cáo xong thì lại có một con khác nhận xét và kiểm tra chéo: dữ liệu mày lấy thế đúng chưa. Rồi mới trả lại cho tao. Toàn bộ luồng như thế, việc của mình chỉ đơn giản là bảo con Claude gọi sub-agent ra thôi.",
        "Như lúc nãy nó đề xuất xóa tệp thế nào rồi, giờ em bảo: cho mỗi con phụ trách một loại tệp rồi sắp xếp đi. Thực ra việc này một con cũng làm được, nhưng em đang thử tính năng nên yêu cầu nó chia cho mỗi con sub-agent một loại tệp khác nhau. Ngay lập tức, Cowork hay Code đều gọi được ra cái đống sub-agent này.",
        "» Lúc đầu em tưởng mình phải lên kế hoạch và mớm cho AI để nó gọi sub-agent. Nhưng dùng rồi mới thấy chỉ cần giao tiếp với nó bằng ngôn ngữ tự nhiên: em muốn cái gì và đầu ra công việc là gì thôi. Nó tự chia nhỏ việc, lên kế hoạch, biết giao cho sub-agent nào và trả lại kết quả. Sốc thật.",
        "Tức là bản chất trong tay anh chị không phải là một con AI. Nó là một đàn AI sẵn sàng ở đấy, chẳng qua anh chị có chịu há mồm ra bảo nó hay không thôi. Mặc định bọn này cũng lười, chẳng tự gọi mấy con đấy ra đâu. Mình chỉ cần bảo: làm việc này, chia việc cho sub-agent nhé. Thì lúc đấy nó tự nghĩ để chia việc ra và làm.",
        "Tại sao nên dùng sub-agent? Vì sub-agent là những con có đầu óc trắng tinh. Đầu óc nó chỉ bị ảnh hưởng bởi phần instruction thôi: nó đọc instruction chung để nắm bối cảnh dự án hiện tại, nhưng toàn bộ lịch sử chat của mình với phiên chính nó không đọc. Nó không bị thiên kiến bởi quá trình mình vừa làm việc. Đầu óc rất sạch sẽ. Giao đi review là nó chỉ đi review, không đọc quá trình mình xây ở kia, rất độc lập, góc nhìn người thứ ba. Và những gì con sub-agent làm trong quá trình cũng không bị đưa ngược về con chính.",
        "Giống như tư duy phối hợp trong công ty. Anh chị là người lead, có ba bạn bên dưới. Không có ba bạn đấy thì từng việc anh chị đều phải tự làm, phải nhớ hết bối cảnh của cả ba việc, đầu hơi loạn. Bây giờ anh chị ngồi lên kế hoạch với em chẳng hạn, rồi giao xuống ba bạn kia. Ba bạn không cần quan tâm em với anh chị đã nói gì với nhau, chỉ nhận việc từ anh chị xuống thôi. Và ngược lại, các bạn làm chi tiết thế nào anh chị không cần nắm, chỉ nghiệm thu đầu ra, cái định nghĩa hoàn thành ấy. Hai bên được chia rõ ràng về bối cảnh. Đầu óc sạch sẽ thì làm việc mới hiệu quả. AI cũng bị thế thôi: nạp quá nhiều dữ liệu linh tinh vào là nhiễu, khiến nó sai. Sub-agent giải quyết vấn đề đấy cực kỳ tốt.",
        "Việc to một tí, chia được ra, thì hãy chia sang sub-agent. Em thường dùng cho ba việc. Một là việc song song: như vừa rồi, tám con sub-agent đã sắp xếp hết tệp vào trong rồi. Hay bảo chúng nó đi nghiên cứu thị trường, hay phân tích nhiều tệp giống nhau, mỗi con một tệp. Hai là khi lập kế hoạch: gọi sub-agent ra review lại kế hoạch, vì con đang nói chuyện chính với mình có thể bị nhiễu bởi ý tưởng của mình rồi mới ra kế hoạch, có lỗ hổng nó không nhìn thấy. Lôi một con khác ra review. Ba là nghiệm thu: xong việc lại gọi sub-agent ra review, chính là câu chuyện vòng lặp mười bốn lần lúc nãy.",
      ],
      luuY: "Màn chỉ hiện sơ đồ song song và tuần tự. Mục đích ba cách dùng sub-agent kể miệng.",
    },
  ],
  "05": [
    { loi: ["Phần thực hành thêm: lời giới thiệu bản thân (Claude) và ảnh đại diện (ChatGPT). Phần này lớp thêm theo yêu cầu, không có trong buổi gốc. Phần chữ để Claude lo, phần ảnh để ChatGPT lo."], luuY: "Phần lớp thêm, không có trong video gốc." },
    { loi: ["Anh chị viết ra bốn ý thật về mình: làm nghề gì, khách là ai, mình giỏi ở điểm nào mà người khác kiểm chứng được, và mời người ta liên hệ thế nào."] },
    { loi: ["Gửi cho Claude theo mẫu trên trang học. Claude viết ba thứ: một câu giới thiệu dễ nhớ, một đoạn bảy mươi đến một trăm chữ, và lời giới thiệu nói trong khoảng ba mươi giây. Câu lệnh đã dặn không tự bịa số năm kinh nghiệm hay thành tích, nhưng anh chị vẫn đọc lại, chỗ nào chưa đúng thì xóa."] },
    { loi: ["ChatGPT làm được bốn việc với ảnh: tạo ảnh từ mô tả; chỉnh ảnh tải lên (đổi nền, ánh sáng, trang phục, dặn rõ giữ đúng gương mặt); chưa ưng chỗ nào thì nói đúng chỗ đó; bản miễn phí có giới hạn số ảnh, hết thì giữ câu lệnh và ảnh gốc về nhà làm tiếp."] },
    { loi: ["Chỉ dùng ảnh chân dung của chính mình. Trước khi dùng soát lại: mặt còn giống mình không, thu nhỏ có dễ nhìn không, trang phục có hợp nghề không. Khác thực tế thì chỉnh lại hoặc quay về ảnh gốc."] },
  ],
  "06": [
    {
      moc: "01:50:10–01:51:11",
      loi: [
        "Tổng quan lại cả buổi hôm nay. Em đã giúp anh chị nắm được sơ sơ một agent được tạo ra như thế nào: năm mảnh ghép để tạo ra một bạn ở cấp ba. Ai học nhanh thì qua cái này hoàn toàn tự học tiếp được, và sẽ làm chủ được cấp ba, vào vai một người trưởng phòng đi sử dụng AI, không còn là một bạn nhân sự bình thường nữa.",
        "AI lúc này không chỉ còn là một công cụ chat. Chúng ta điều phối được nhiều bạn cùng làm việc với nhau. Mỗi Project kia có thể là một bạn nhân sự của mình, rồi bên trong lại có nhiều sub-agent. Đầu đề ra là để anh chị hiểu cấu tạo của một con AI, cách nó hoạt động, rồi biết cách giao tiếp, giao việc sao cho hiệu quả, và từ nay nhảy vào ứng dụng để bớt việc đi. Hy vọng trong khoảng thời gian ngắn ngủi đã đưa được cho anh chị phần nào.",
      ],
    },
    {
      moc: "01:57:58–01:58:31",
      loi: [
        "Nếu bảo anh chị nên làm gì thì đây ạ: làm luôn đi. Tạo ra một Project trợ lý cá nhân, quản lý lịch, quản lý việc cho mình. Bắt đầu cho nó instruction, nối Google Calendar thôi, nối Gmail thôi, để nó xử lý được những việc đấy.",
        "Tiếp theo là chọn một việc lặp lại mỗi tuần. Mỗi tuần hãy ngồi soi lại xem tuần vừa rồi mình vẫn đang phải làm những gì thủ công, lặp đi lặp lại, thì đưa vào danh sách cần đóng gói skill. Đóng gói nó lại. Cứ mỗi tuần mình lại nhẹ bớt việc đi một tí.",
      ],
    },
    {
      moc: "01:51:43–01:55:22",
      loi: [
        "» Trước khi kết thúc, một điều muốn nhắn nhủ để mọi người có tinh thần thực hành ngay sau buổi này. AI đã có will sẵn rồi, giờ chỉ là mình có nghĩ đến việc chủ động dùng AI để tự động hóa việc lặp lại, tiết kiệm thời gian cho mình hay không thôi. Dùng AI thứ nhất rất dễ, thứ hai là nó đã ở đó sẵn rồi. Hồi trước em luôn sợ dùng AI chắc phức tạp lắm, nghe Claude Code là nhức đầu, sợ đụng mấy cái kỹ thuật. Nhưng dùng rồi mới thấy ước gì mình đã dùng sớm hơn, vì nó không khó như mình tưởng. Và nếu nó có khó hiểu thì mình cứ hỏi chính AI, AI sẽ hướng dẫn mình dùng chính nó. Cứ phải làm.",
        "Chuẩn. Thực ra nói nôm na là: làm. Em có một câu thế này, em vẫn ghim vào đầu cho học viên của em, hay ở các buổi workshop em đi: cái gì máy làm tốt thì người đừng làm. Máy làm rất tốt những khâu lặp đi lặp lại, những việc có quy trình sẵn rồi. Những việc đấy người không thể làm tốt bằng máy đâu, nói thật.",
        "Thế thì mình mạnh hơn máy ở điểm nào? Đấy là khả năng tư duy, biết mình muốn gì. Bây giờ mình phải nói ra cho nó, bởi vì dùng AI dễ lắm, chẳng có công cụ nào dễ bằng AI. Học Photoshop, học CapCut còn phải biết nút nào ở đâu, phải kéo, phải thao tác trên giao diện. Với AI chỉ là nói thôi, chịu mở mồm ra nói. Cái gì không biết thì hỏi AI luôn. Vướng ở đâu, chụp luôn màn hình gửi sang cho nó: tao đang vướng ở đây, làm thế nào tiếp. Không cần tìm một ông chuyên gia nào hết.",
        "Những việc máy làm tốt như thế, người đừng động tay vào, để mình rảnh tay, có thời gian làm những việc AI không làm được. Là định hướng, là nắm bắt được insight của khách hàng. Sáng tạo thì AI cũng có, không phải không. Nhưng nắm được đúng insight của khách, nhận diện thực sự vấn đề của họ ở đâu, tâm tư tình cảm, thì AI không có. Mình thông qua tiếp xúc mới biết thực sự đằng sau họ muốn gì. Chỉ nhắn nhủ anh chị như vậy thôi. Em cảm ơn anh chị.",
      ],
      luuY: "Lời nhắn đầu là của người học trong buổi gốc; anh có thể mời một học viên nói cảm nhận rồi chốt bằng câu “cái gì máy làm tốt thì người đừng làm”. Sau đó nhắc lớp bấm hoàn thành các chặng để nhận chứng chỉ.",
    },
  ],
};
export default kichBan;
