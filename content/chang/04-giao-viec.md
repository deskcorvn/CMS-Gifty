---
so: 4
tieuDe: Từ hỏi đáp đến giao việc hiệu quả
phut: 25
video:
  tieuDe: "Bốn nấc, khung 6 ý và hai thói quen (1 phút)"
  url: /video/v4-chang-4.mp4
mucTieu: >-
  Biết bốn nấc dùng AI, công thức giao việc 6 ý và hai thói quen giúp AI làm ngày càng đúng: góp ý
  làm theo được và soát lại bằng một cuộc trò chuyện thứ hai.
ghiNho: >-
  Bốn nấc là khung giảng dạy dễ nhớ của khóa học, không phải phân loại chính thức của Anthropic.
nguon: [N16]
buoc:
  - tieuDe: Xác định mình đang ở nấc nào
    huongDan: >-
      Đọc bảng “Bốn nấc dễ nhớ” bên dưới. Hiện anh chị dùng AI chủ yếu ở nấc nào? Mục tiêu hôm nay là
      lên nấc 2: AI biết bối cảnh và làm nhiệm vụ cụ thể.
    ketQua: Anh chị gọi được tên nấc mình đang dùng và nấc mình muốn tới.
  - tieuDe: Chép khung giao việc 6 ý
    huongDan: >-
      Chép khung dưới đây vào ghi chú của mình. Từ giờ, mỗi lần giao việc cho AI, điền đủ 6 ý này.
    prompt: |-
      1. Tôi muốn: [nhiệm vụ hoặc mục tiêu]
      2. Bối cảnh: [ngành, đối tượng, tài nguyên, thời hạn]
      3. Dữ liệu tôi cung cấp: [bảng khách hàng, ghi chú, tài liệu]
      4. Kết quả cần có: [bảng, kế hoạch, lời nhắn; độ dài]
      5. Thế nào là đạt: không bịa dữ kiện, có lý do, có việc tiếp theo
      6. Khi thiếu dữ liệu: hỏi lại tôi hoặc đánh dấu "thiếu", không tự đoán
    ketQua: Anh chị có một khung giao việc dùng lại được cho mọi việc.
  - tieuDe: So sánh hai câu giao việc
    huongDan: >-
      Đọc hai câu dưới đây. Câu thứ hai có những ý nào trong 6 ý? Câu thứ nhất thiếu những ý nào?
    ketQua: >-
      Câu chưa rõ: “Chăm sóc khách hàng cho tôi.” Câu có thể làm: “Dựa trên bảng mối quan hệ tôi gửi,
      lọc người có cam kết hoặc lịch hẹn sắp tới, lập kế hoạch bảy ngày và soạn tin nhắn không bịa
      nhu cầu.” Câu thứ hai có dữ liệu, kết quả cần có và tiêu chí đạt.
  - tieuDe: Sửa một lời góp ý mơ hồ
    huongDan: >-
      Lời góp ý “chưa hay” buộc AI đoán tiếp xem anh chị muốn gì. Đọc cặp ví dụ dưới đây, rồi tự viết
      lại một lời góp ý mơ hồ mình hay dùng thành yêu cầu làm theo được: sửa chỗ nào, thành cái gì.
    prompt: |-
      Góp ý mơ hồ: "Tin nhắn này chưa ổn, viết lại hay hơn."
      Góp ý làm theo được: "Rút còn 3 câu. Mở đầu bằng tên khách. Nhắc đúng lịch hẹn thứ Năm. Bỏ câu chào 'Kính gửi'."
    ketQua: >-
      Anh chị viết được một lời góp ý mà AI, hay một nhân viên, đọc xong biết ngay phải sửa gì.
  - tieuDe: Mở cuộc trò chuyện thứ hai để soát lại
    huongDan: >-
      Đừng tin ngay bản đầu tiên. Mở một cuộc trò chuyện MỚI, gửi câu dưới đây kèm tiêu chí ở ý số 5
      “Thế nào là đạt” và kết quả cần soát.
    prompt: |-
      Đây là kết quả do một trợ lý AI khác soạn. Hãy soát theo đúng các tiêu chí dưới đây, chỉ ra từng chỗ không đạt và đề xuất cách sửa. Không viết lại toàn bộ.
      Tiêu chí: [dán ý số 5 "Thế nào là đạt"]
      Kết quả cần soát: [dán kết quả]
    ketQua: >-
      Cuộc trò chuyện mới đọc kết quả mà không có các lượt trao đổi trước dẫn dắt, nên dễ chỉ ra chỗ
      thiếu hoặc chỗ tự đoán hơn.
---

## Bốn nấc dễ nhớ

| Nấc | Cách sử dụng | Ví dụ |
|---|---|---|
| 1. Hỏi đáp | AI trả lời một câu hỏi | “Cách chăm sóc khách hàng?” |
| 2. Cộng sự cá nhân | AI biết bối cảnh và làm nhiệm vụ cụ thể | “Từ dữ liệu của tôi, ưu tiên khách nào?” |
| 3. Nhiều công việc phối hợp | AI tiếp nối các bước hoặc nhiều trợ lý | Lọc → lên lịch → soạn lời nhắn → kiểm tra |
| 4. Thực hiện bằng công cụ | AI được cấp quyền thao tác với tệp/ứng dụng | Tự mở ứng dụng, cập nhật bảng, tạo hồ sơ; người làm duyệt |

“Kỹ năng tái sử dụng” là cách lưu quy trình chuẩn để làm lại nhiều lần. “Trợ lý thực hiện việc” là
AI có thể thao tác bằng công cụ. “Kết nối ứng dụng” giúp AI đọc/ghi ở nơi được cấp quyền. Không cần
học thuộc các tên kỹ thuật như Skills, Agents, MCP.

## Hai thói quen giúp AI làm ngày càng đúng

1. **Góp ý phải làm theo được.** “Chưa đủ hay” thì AI lại đoán tiếp. “Rút còn 3 câu, mở đầu bằng tên
   khách” thì sửa được ngay.
2. **Soát lại bằng một cuộc trò chuyện thứ hai.** Dán kết quả và tiêu chí “thế nào là đạt” vào một
   cuộc trò chuyện mới, nhờ nó chỉ ra chỗ không đạt.

## Công thức giao việc 6 ý

| Câu hỏi | Diễn giải |
|---|---|
| 1. Tôi muốn làm gì? | Nêu đúng nhiệm vụ hoặc mục tiêu |
| 2. Tôi làm trong bối cảnh nào? | Ngành, đối tượng, tài nguyên, thời hạn |
| 3. Dữ liệu tôi cung cấp là gì? | Bảng khách hàng, ghi chú, tài liệu |
| 4. Yêu cầu kết quả ra sao? | Bảng, kế hoạch, lời nhắn, độ dài |
| 5. Thế nào là đạt? | Không bịa dữ kiện, có lý do, có việc tiếp |
| 6. Khi thiếu dữ liệu thì sao? | Hỏi lại hoặc đánh dấu thiếu, không tự đoán |
