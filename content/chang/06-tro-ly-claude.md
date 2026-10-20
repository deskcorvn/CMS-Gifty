---
so: 6
tieuDe: Tạo trợ lý Claude và sử dụng ngay
phut: 25
video:
  tieuDe: "Trợ lý kinh doanh trong Project (hỏi đáp, 2 phút)"
  url: /video/h6-chang-6.mp4
mucTieu: >-
  Không chỉ tạo một Project cho có. Tạo “Trợ lý kinh doanh của tôi”, đưa bối cảnh nghề nghiệp vào và
  dùng lại bài toán mối quan hệ ngay trong Project để thấy sự khác biệt.
sanPham: [SP02]
ghiNho: >-
  Bản miễn phí của Claude có Projects (tối đa 5). Hướng dẫn riêng của Project chỉ áp dụng bên trong dự án.
  Memory là cơ chế khác; không phải mọi chi tiết trong các cuộc chat khác đều tự trở thành kiến thức
  chung của Project.
nguon: [N03, N07, N15]
buoc:
  - tieuDe: Tạo dự án mới
    huongDan: >-
      Vào mục Projects của Claude, chọn tạo dự án mới (New Project). Đặt tên: “Trợ lý kinh doanh của
      tôi”.
    ketQua: Dự án mới hiện trong danh sách Projects.
  - tieuDe: Viết hướng dẫn riêng cho trợ lý
    huongDan: >-
      Cách nhanh: mở một cuộc trò chuyện thường (ngoài dự án), kể tự do 3–5 câu về công việc của mình
      vào chỗ trong ngoặc vuông của câu dưới đây rồi gửi. Claude viết lại thành hướng dẫn. Đọc lại,
      sửa chỗ chưa đúng, rồi dán vào phần hướng dẫn dự án (Project Instructions) và lưu. Muốn tự viết
      thì dùng “Mẫu hướng dẫn dự phòng” ở cuối trang.
    prompt: |-
      Hãy viết hướng dẫn cho "Trợ lý kinh doanh của tôi" từ phần tôi kể bên dưới. Hướng dẫn gồm:
      1. Vai trò: trợ lý kinh doanh của tôi, tôi là ai, bán gì, cho ai.
      2. Nhiệm vụ chính: sắp xếp thông tin mối quan hệ, nhắc lời hứa và lịch hẹn có trong dữ liệu, đề xuất bước chăm sóc, soạn lời nhắn để tôi xem trước.
      3. Nguyên tắc: không tự tạo số điện thoại, nhu cầu, giá bán, ưu đãi, doanh thu, lời hứa hay xác nhận của khách; không gợi ý liên hệ người đã yêu cầu ngừng liên hệ; thiếu thông tin thì ghi "chưa rõ"; chỉ soạn nháp, không tự gửi.
      4. Cách trả lời: bảng ngắn "Ai / Vì sao / Việc cần làm / Thời hạn / Cần xác minh".
      Viết ngắn gọn, xưng "bạn" với trợ lý. Không thêm thông tin tôi chưa kể.
      Phần tôi kể: [mình là ai, bán gì cho ai, điểm mạnh đã chứng minh được, khách hay hỏi gì]
    ketQua: Hướng dẫn đã lưu trong dự án, có đủ vai trò, nhiệm vụ, nguyên tắc và cách trả lời.
  - tieuDe: Thêm mô tả dịch vụ ngắn
    huongDan: >-
      Thêm vào dự án một đoạn mô tả dịch vụ/sản phẩm ngắn do anh chị tự viết. Không cần và không nên
      tải tài liệu nhạy cảm.
    ketQua: Trợ lý có bối cảnh về công việc thật của anh chị.
  - tieuDe: Nhập lại dữ liệu 12 mối quan hệ trong dự án
    huongDan: Mở cuộc trò chuyện mới BÊN TRONG dự án vừa tạo, dán khối dữ liệu giả lập dưới đây.
    prompt: |-
      Dữ liệu giả lập cho lớp học, hôm nay là Ngày 0:
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
    ketQua: Trợ lý xác nhận đã nhận dữ liệu, hoặc tóm tắt lại 12 mã.
  - tieuDe: Hỏi trợ lý việc hôm nay
    huongDan: Gửi câu hỏi dưới đây trong cùng cuộc trò chuyện của dự án.
    prompt: Tôi nên ưu tiên công việc nào hôm nay, và liên hệ ra sao cho phù hợp với nghề của tôi?
    ketQua: >-
      Câu trả lời trình bày theo bảng “Ai / Vì sao / Việc cần làm / Thời hạn / Cần xác minh” và dùng
      ngôn ngữ của ngành anh chị.
  - tieuDe: So sánh và sửa hướng dẫn
    huongDan: >-
      So với câu trả lời ở chặng 5 (chưa có Project). Nếu thông điệp còn chung chung hoặc có thông
      tin đoán, sửa lại hướng dẫn dự án rồi hỏi lại.
    ketQua: Anh chị thấy rõ khác biệt khi trợ lý có bối cảnh riêng.
  - tieuDe: Phép thử 60 giây
    huongDan: >-
      Thay một dòng bối cảnh nghề nghiệp trong hướng dẫn, hỏi lại đúng câu hỏi trên. Quan sát lời
      nhắn có đúng ngôn ngữ ngành, thực tế hơn không.
    ketQua: >-
      Anh chị đối chiếu được câu trả lời trước và sau khi sửa bối cảnh. Kết quả không có nghĩa
      “AI tự nhớ hết mọi thông tin”; trợ lý chỉ dùng những gì có trong dự án.
  - tieuDe: Rà soát và lưu cấu hình trợ lý SP02
    huongDan: >-
      Xem lại hướng dẫn dự án và câu hỏi vừa thử. Nếu muốn giữ để tra cứu sau lớp, bấm “Lưu sản phẩm
      SP02” ở cuối trang, ghi lại hướng dẫn và câu hỏi thử vào phiếu “Trợ lý kinh doanh của tôi”.
      Việc lưu sản phẩm là tùy chọn, không phải điều kiện nhận chứng chỉ.
    ketQua: Anh chị biết cách lưu cấu hình trợ lý và câu hỏi thử để dùng lại sau buổi học.
---

## Phiếu “Trợ lý kinh doanh của tôi”

Điền nhanh trước khi viết hướng dẫn dự án. Phiếu này cũng có trong form SP02 để anh chị lưu lại.

| Mục | Anh chị điền |
|---|---|
| Tôi là ai / nghề nghiệp | |
| Tôi phục vụ ai | |
| Tôi bán/cung cấp giá trị gì | |
| Khách hàng hay hỏi điều gì | |
| Điều AI không được tự đoán | |
| Công việc muốn AI hỗ trợ mỗi tuần | |
| Cách tôi muốn AI trình bày | |

## Mẫu hướng dẫn dự phòng

Dùng khi muốn tự viết thay vì nhờ Claude viết lại. Sửa các chỗ trong ngoặc vuông.

```text
Bạn là trợ lý kinh doanh của tôi. Tôi là [tên], đang cung cấp [sản phẩm/dịch vụ] cho [nhóm khách hàng]. Giá trị tôi mang lại là [điểm mạnh đã chứng minh được].

Nhiệm vụ chính: sắp xếp thông tin mối quan hệ, nhắc những lời hứa và lịch hẹn đã có trong dữ liệu, đề xuất các bước chăm sóc, soạn lời nhắn tự nhiên để tôi xem trước.

Nguyên tắc: không tự tạo số điện thoại, nhu cầu, giá bán, ưu đãi, doanh thu, lời hứa hay xác nhận của khách. Không gợi ý liên hệ lại với người đã yêu cầu ngừng nhận liên hệ. Khi thông tin thiếu, phải ghi "chưa rõ".

Cách trả lời: ưu tiên bảng ngắn gồm "Ai / Vì sao / Việc cần làm / Thời hạn / Cần xác minh".

Tôi là người quyết định và trực tiếp liên hệ; bạn chỉ soạn nháp, không tự gửi.
```
