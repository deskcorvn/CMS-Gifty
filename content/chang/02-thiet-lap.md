---
so: 2
tieuDe: Thiết lập Claude và ChatGPT đúng từ đầu
phut: 15
mucTieu: >-
  Trước khi giao việc cho AI, biết mình đang dùng tài khoản nào, hệ thống được phép dùng dữ liệu ra
  sao và điều gì cần giữ riêng.
ghiNho: >-
  Không nhập danh sách có tên thật, số điện thoại, địa chỉ, hồ sơ riêng tư của khách khi chưa có
  quyền và căn cứ phù hợp.
nguon: [N02, N03, N06, N07]
buoc:
  - tieuDe: Đăng nhập claude.ai
    huongDan: >-
      Mở claude.ai và đăng nhập. Tài khoản miễn phí đủ cho toàn bộ nội dung hôm nay, nhưng có giới
      hạn mức sử dụng.
    ketQua: Anh chị thấy ô chat của Claude và tên tài khoản của mình ở góc màn hình.
    neuKhongDuoc: >-
      Giao diện có thể là tiếng Anh hoặc tiếng Việt, vị trí nút có thể khác ảnh minh họa. Nhờ trợ
      giảng nếu chưa đăng nhập được.
  - tieuDe: Xem cài đặt quyền riêng tư
    huongDan: >-
      Mở phần cài đặt → Quyền riêng tư (Privacy). Tìm mục cho phép dùng dữ liệu để cải thiện mô
      hình. Anh chị tự quyết định bật hay tắt, không ai bấm thay.
    ketQua: Anh chị biết mục này nằm ở đâu và đã chọn theo ý mình.
    neuKhongDuoc: >-
      Tắt tùy chọn hỗ trợ cải thiện mô hình không đồng nghĩa xóa toàn bộ thông tin đã lưu. Tìm hiểu
      chính sách và phạm vi dữ liệu theo tài khoản của mình (nguồn N02).
  - tieuDe: Viết hướng dẫn chung cho Claude
    huongDan: >-
      Mở phần hướng dẫn chung cho Claude (Instructions for Claude) trong cài đặt. Chép mẫu dưới đây,
      sửa ngành nghề rồi dán vào. Đây là quy tắc giao tiếp áp dụng rộng, chưa phải hồ sơ công việc
      riêng.
    prompt: |-
      Tôi làm việc trong lĩnh vực [ngành nghề] tại Việt Nam.
      Tôi thích cách trình bày rõ ràng, tự nhiên, dễ áp dụng; ưu tiên tiếng Việt.
      Khi thông tin chưa đủ, hãy nêu rõ điều còn thiếu và hỏi lại, không tự tạo số liệu, giá bán, thời hạn hay lời hứa.
      Khi có nhiều phương án, hãy giải thích ưu và nhược điểm ngắn gọn.
      Tài liệu và dữ liệu tôi gửi có thể thuộc quyền riêng tư của doanh nghiệp; chỉ thực hiện đúng yêu cầu của tôi.
    ketQua: Hướng dẫn đã được lưu; các cuộc trò chuyện sau Claude sẽ theo quy tắc này.
  - tieuDe: Kiểm tra mục Memory (nếu có)
    huongDan: >-
      Mở mục Memory nếu tài khoản có. Đọc xem Claude đang ghi nhớ gì về anh chị qua các cuộc trò
      chuyện. Anh chị có thể kiểm tra hoặc sửa nội dung ghi nhớ.
    ketQua: >-
      Anh chị biết Claude có thể nhớ thông tin giữa các cuộc trò chuyện, và biết chỗ để xem lại.
    neuKhongDuoc: >-
      Memory hiện có trên bản miễn phí nhưng giao diện và lựa chọn có thể khác giữa các tài khoản
      (nguồn N07). Không thấy mục này thì bỏ qua bước.
  - tieuDe: Nhìn chỗ chọn mô hình
    huongDan: >-
      Nhìn cạnh nút gửi: có chỗ chọn mô hình, có thể có mức suy luận và trạng thái Thinking. Chỉ cần
      biết vị trí, chưa cần thay đổi gì.
    ketQua: Anh chị chỉ được chỗ chọn mô hình trên màn hình của mình.
  - tieuDe: Mở ChatGPT và thử tải ảnh
    huongDan: >-
      Mở chatgpt.com, đăng nhập, bấm nút đính kèm để chắc chắn tải được ảnh lên. Chưa cần gửi.
    ketQua: >-
      Ảnh hiện trong ô soạn tin. Lưu ý: tạo và chỉnh ảnh trên bản miễn phí có hạn mức riêng, dành lượt
      cho chặng 7.
  - tieuDe: Đọc quy tắc dữ liệu
    huongDan: >-
      Đọc kỹ phần “Ghi nhớ” bên dưới. Toàn bộ bài tập hôm nay dùng dữ liệu giả lập do lớp cung cấp.
    ketQua: Anh chị đồng ý chỉ dùng dữ liệu giả lập trong buổi học.
---

## Hai điểm hay hiểu nhầm

- **Tắt cải thiện mô hình ≠ xóa dữ liệu.** Đó là hai việc khác nhau. Mỗi tài khoản cần tự tìm hiểu
  chính sách của mình.
- **Bản miễn phí của Claude có Projects (tối đa năm dự án) và có Memory.** Giao diện và lựa chọn có thể khác
  giữa các tài khoản và thay đổi theo thời gian.
