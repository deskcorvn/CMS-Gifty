---
so: 2
nhan: Chặng 2
tieuDe: Giao việc — 5 yếu tố để AI làm đúng ý
phut: 45
mucTieu: >-
  Biết giao việc đủ 5 yếu tố (vai trò, mục đích, nhiệm vụ, cách làm, yêu cầu đầu ra) và ba thói quen giúp
  AI làm ngày càng đúng. Dùng ngay vào bài tập trọng tâm: biến 12 mối quan hệ rời rạc thành kế hoạch
  chăm sóc 7 ngày.
sanPham: [SP01]
ghiNho: >-
  AI luôn sẵn sàng làm; việc của anh chị là giúp nó làm được. Thiếu yếu tố nào, AI tự đoán ở chỗ đó,
  giống hệt nhân viên mới.
nguon: [N05, N16]
buoc:
  - tieuDe: Chép khung giao việc 5 yếu tố
    huongDan: >-
      Chép khung dưới đây vào ghi chú của mình. Từ giờ, mỗi lần giao việc cho AI (hay cho người), điền đủ
      5 yếu tố. Không cần câu chữ đẹp: cứ gõ hoặc nói hết ý ra, AI tự sắp xếp lại được.
    prompt: |-
      1. Vai trò: Bạn là [ai], làm cho [ai đọc / ai dùng kết quả].
      2. Mục đích: Việc này để [đạt điều gì].
      3. Nhiệm vụ: Cần làm [chính xác việc gì, tới đâu].
      4. Cách làm: [các bước, mẫu, ràng buộc]. Thiếu thông tin thì hỏi lại tôi, không tự đoán.
      5. Yêu cầu đầu ra: Thế nào là xong: [hình thức, độ dài, các điều phải có].
    ketQua: Anh chị có một khung giao việc dùng lại được cho mọi việc.
  - tieuDe: Viết lại một câu giao việc thiếu ý
    huongDan: >-
      Đọc cặp “Trước / Sau” ở phần dưới. Rồi lấy một việc anh chị hay nhờ AI hoặc nhân viên làm, viết lại
      theo đủ 5 yếu tố và gửi cho Claude. So với kết quả lúc anh chị chỉ gõ một câu.
    prompt: |-
      Trước: "Viết báo cáo doanh thu tháng này cho anh."

      Sau:
      1. Vai trò: Bạn là trợ lý kế toán, viết cho chủ cửa hàng đọc nhanh trên điện thoại.
      2. Mục đích: Để quyết định tháng sau nhập thêm nhóm hàng nào.
      3. Nhiệm vụ: Tóm tắt doanh thu tháng này theo nhóm hàng, từ bảng tôi gửi bên dưới.
      4. Cách làm: So với tháng trước; chỉ dùng số trong bảng; nhóm nào thiếu số thì ghi "chưa có".
      5. Yêu cầu đầu ra: Một bảng 3 cột (nhóm hàng / tháng này / so với tháng trước) và 3 gạch đầu dòng nhận xét, dưới 150 chữ.
    ketQua: >-
      Câu “Trước” để AI đoán hết: mảng nào, ai đọc, để làm gì, dài bao nhiêu. Câu “Sau” trả lời đủ, nên
      AI làm đúng ngay lần đầu.
  - tieuDe: Bài tập trọng tâm — dán câu lệnh 12 mối quan hệ
    huongDan: >-
      Đọc bảng “Dữ liệu giả lập” ở dưới (hôm nay là Ngày 0). Mở cuộc trò chuyện mới trên claude.ai, bấm
      “Sao chép” và dán nguyên khối câu lệnh dưới đây (đã đủ 5 yếu tố và dữ liệu 12 mã), rồi gửi.
    prompt: |-
      1. Vai trò: Bạn là trợ lý chăm sóc khách hàng của tôi. Tôi là người đọc và trực tiếp liên hệ khách.
      2. Mục đích: Không bỏ quên lời hứa và lịch hẹn nào với 12 mối quan hệ trong tuần tới.
      3. Nhiệm vụ:
         a. Đọc và giữ nguyên toàn bộ 12 mã KH01–KH12; không thêm khách hàng.
         b. Chọn 5 mối quan hệ cần ưu tiên dựa trên cam kết, thời hạn và nhu cầu đã ghi rõ. Với mỗi người, ghi LÝ DO và VIỆC TIẾP THEO.
         c. Lập kế hoạch chăm sóc Ngày 1 đến Ngày 7, nêu việc và thời điểm phù hợp.
         d. Soạn 3 tin nhắn Zalo tự nhiên, lịch sự, đúng dữ kiện của từng người.
         e. Liệt kê các thông tin còn thiếu cần tôi xác minh.
      4. Cách làm: Chỉ dựa vào ghi chú trong bảng; không tự bịa giá, kết quả, nhu cầu hay hứa hẹn. TUYỆT ĐỐI không đưa KH12 vào danh sách cần liên hệ; KH04 chưa có nhu cầu thì không thúc ép. Không tự gửi tin nhắn.
      5. Yêu cầu đầu ra: Ba bảng rõ ràng, dễ sao chép vào Google Sheets, và một danh sách thông tin cần xác minh.

      DỮ LIỆU (giả lập cho lớp học, hôm nay là Ngày 0):
      KH01 | Đang tìm hiểu | Đã hứa gửi báo giá hôm qua nhưng chưa gửi
      KH02 | Khách quan tâm | Hẹn gửi hai phương án dịch vụ ngày mai
      KH03 | Đối tác | Đã gửi hồ sơ 7 ngày trước; chưa có phản hồi
      KH04 | Người quen | Nói rõ hiện chưa có nhu cầu; không đề nghị liên hệ lại
      KH05 | Khách quan tâm | Khách đề nghị đặt lịch demo trong 2 ngày
      KH06 | Đối tác | Đã thống nhất gặp vào tuần tới
      KH07 | Người giới thiệu | Hứa giới thiệu một khách và chờ nhận lời cảm ơn
      KH08 | Khách cân nhắc | Đã nhận báo giá, hẹn phản hồi cuối tuần
      KH09 | Khách quan tâm | Đề nghị gửi hồ sơ năng lực ngay hôm nay
      KH10 | Khách mới | Có nhu cầu nhưng chưa nêu ngân sách hay thời gian
      KH11 | Đối tác cộng đồng | Muốn hẹn gặp riêng, chưa thống nhất thời điểm
      KH12 | Khách cũ | Yêu cầu không liên hệ lại trong tháng này
    ketQua: Claude trả về ba bảng và một danh sách thông tin cần xác minh.
    neuKhongDuoc: >-
      Hết lượt dùng miễn phí thì chờ một lúc hoặc xem bản kết quả mẫu giảng viên chiếu, rồi làm tiếp các
      bước tự soát.
  - tieuDe: Đọc kết quả và đối chiếu
    huongDan: >-
      Đọc danh sách 5 ưu tiên, kế hoạch 7 ngày và 3 tin nhắn. Mỗi lý do ưu tiên có dựa đúng vào ghi chú
      trong bảng không?
    ketQua: >-
      Gợi ý để tự đối chiếu (không phải đáp án duy nhất): nhóm cần chú ý thường gồm KH09 (hồ sơ hôm nay),
      KH01 (báo giá quá hạn), KH02 (gửi phương án ngày mai), KH05 (demo trong hai ngày), KH07 hoặc KH11 tùy
      lý do trình bày.
  - tieuDe: "Thói quen 1: góp ý phải làm theo được"
    huongDan: >-
      Chọn một trong ba tin nhắn vừa soạn. Thay vì nói “chưa hay”, gửi một lời góp ý cụ thể theo mẫu dưới
      đây (sửa cho đúng tin nhắn của mình).
    prompt: |-
      Sửa tin nhắn gửi KH05: rút còn 3 câu, mở đầu bằng lời chào tự nhiên, đề xuất đúng hai khung giờ demo trong 2 ngày tới để khách chọn, bỏ câu "Kính gửi quý khách".
    ketQua: >-
      “Chưa đủ hay” thì AI lại đoán tiếp. Góp ý nói rõ sửa chỗ nào, thành cái gì thì AI sửa đúng ngay.
  - tieuDe: "Thói quen 3: kiểm tra chéo bằng cuộc trò chuyện thứ hai"
    huongDan: >-
      Đừng tin ngay bản đầu tiên. Mở một cuộc trò chuyện MỚI, dán câu dưới đây kèm kết quả cần soát.
    prompt: |-
      Đây là kết quả do một trợ lý AI khác soạn. Hãy soát theo đúng các tiêu chí dưới đây, chỉ ra từng chỗ không đạt và đề xuất cách sửa. Không viết lại toàn bộ.
      Tiêu chí: đủ 12 mã; không bịa nhu cầu hoặc thời hạn; không liên hệ KH12; không biến KH04 thành khách tiềm năng nóng; mọi lý do ưu tiên có bằng chứng từ ghi chú; không có "đã chốt đơn", "dự kiến doanh thu" khi dữ liệu thiếu.
      Kết quả cần soát: [dán kết quả]
    ketQua: >-
      Cuộc trò chuyện mới đọc kết quả mà không có các lượt trao đổi trước dẫn dắt, nên dễ chỉ ra chỗ thiếu
      hoặc chỗ tự đoán hơn. KH12 phải đứng ngoài mọi danh sách liên hệ trong tháng này.
  - tieuDe: Đưa bảng ra Google Sheets và lưu SP01
    huongDan: >-
      Sao chép bảng dán vào Google Sheets. Chọn một việc làm được ngay hôm nay. Sau đó bấm “Lưu sản phẩm
      SP01” ở cuối trang để dán kết quả vào hồ sơ của anh chị.
    ketQua: SP01 đã lưu trong mục “Kết quả của tôi”, tra lại được bất cứ lúc nào sau buổi học.
---

## Muốn ai làm việc cho mình, cần đủ 2 yếu tố

- **Muốn làm (Will):** có động lực làm việc. AI thì lúc nào cũng sẵn sàng, sửa đến lần thứ mười cũng
  không phàn nàn.
- **Làm được (Able):** có bối cảnh, công cụ, cách làm. **Phần này là việc của anh chị.**

## Giao việc đủ 5 yếu tố

| Yếu tố | Trả lời câu hỏi | Ví dụ |
|---|---|---|
| 1. Vai trò | AI vào vai ai, làm cho ai đọc? | Trợ lý kế toán, viết cho chủ cửa hàng |
| 2. Mục đích | Việc này để đạt điều gì? | Quyết định nhập hàng tháng sau |
| 3. Nhiệm vụ | Chính xác làm gì, tới đâu? | Tóm tắt doanh thu theo nhóm hàng |
| 4. Cách làm | Các bước, mẫu, ràng buộc? | So với tháng trước, chỉ dùng số trong bảng |
| 5. Yêu cầu đầu ra | Thế nào thì gọi là xong? | Bảng 3 cột + 3 nhận xét, dưới 150 chữ |

Mục đích làm thay đổi cách làm: cùng một bản hợp đồng, viết để giữ chân một khách quan trọng sẽ khác
viết cho khách vãng lai. Yêu cầu đầu ra nên là một danh sách kiểm tra, giống bảng “dọn xong phòng là
gồm những việc này”. Cách giao việc này dùng được cho cả người lẫn AI.

## Ba thói quen giúp AI làm ngày càng đúng

1. **Góp ý phải làm theo được.** “Chưa đủ hay” thì AI lại đoán tiếp. “Đổi tiêu đề thành câu hỏi, cắt
   còn 10 chữ” thì sửa được ngay.
2. **Chia nhỏ việc.** Việc càng to, càng nhiều chỗ để bịa. Lập kế hoạch ở một cuộc trò chuyện, rồi giao
   từng phần ở các cuộc trò chuyện riêng.
3. **Làm nhiều lần, kiểm tra chéo.** Đừng tin bản đầu tiên. Mở một cuộc trò chuyện khác, soi lại theo
   đúng tiêu chí “thế nào là xong”.

## Dữ liệu giả lập — “Hôm nay là Ngày 0”

Tất cả khách hàng, ghi chú và tình trạng dưới đây đều là thông tin **giả lập** dành cho đào tạo. Không
đưa tên thật, số điện thoại hay dữ liệu khách hàng thực của mình vào phiên làm việc chung.

| Mã | Nhóm | Ghi chú đã ghi nhận | Lưu ý |
|---|---|---|---|
| KH01 | Đang tìm hiểu | Đã hứa gửi báo giá hôm qua nhưng chưa gửi | Quá hạn |
| KH02 | Khách quan tâm | Hẹn gửi hai phương án dịch vụ ngày mai | Sắp hạn |
| KH03 | Đối tác | Đã gửi hồ sơ 7 ngày trước; chưa có phản hồi | Theo dõi |
| KH04 | Người quen | Nói rõ hiện chưa có nhu cầu; không đề nghị liên hệ lại | Không thúc ép |
| KH05 | Khách quan tâm | Khách đề nghị đặt lịch demo trong 2 ngày | Sắp hạn |
| KH06 | Đối tác | Đã thống nhất gặp vào tuần tới | Đã có lịch |
| KH07 | Người giới thiệu | Hứa giới thiệu một khách và chờ nhận lời cảm ơn | Cần phản hồi |
| KH08 | Khách cân nhắc | Đã nhận báo giá, hẹn phản hồi cuối tuần | Theo dõi lịch |
| KH09 | Khách quan tâm | Đề nghị gửi hồ sơ năng lực ngay hôm nay | Trong ngày |
| KH10 | Khách mới | Có nhu cầu nhưng chưa nêu ngân sách hay thời gian | Thiếu dữ kiện |
| KH11 | Đối tác cộng đồng | Muốn hẹn gặp riêng, chưa thống nhất thời điểm | Chủ động hẹn |
| KH12 | Khách cũ | Yêu cầu không liên hệ lại trong tháng này | Không liên hệ |

Thói quen 2 (chia nhỏ việc) đã nằm sẵn trong câu lệnh: nhiệm vụ lớn được chia thành 5 việc nhỏ a–e.
Khi muốn làm với dữ liệu thật sau buổi học, chỉ dùng dữ liệu đã được phép xử lý và có căn cứ về quyền
riêng tư.
