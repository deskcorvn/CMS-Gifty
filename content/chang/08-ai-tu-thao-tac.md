---
so: 8
tieuDe: Video kết thúc — AI tự điều khiển máy tính
phut: 15
video:
  tieuDe: "AI làm việc trên máy tính khác gì trên web (hỏi đáp, 2 phút)"
  url: /video/h8-chang-8.mp4
mucTieu: >-
  Chứng kiến sự khác nhau giữa AI “đưa ra câu trả lời” và AI “nhận nhiệm vụ rồi tự thao tác với tệp,
  trình duyệt và ứng dụng”. Đây là video thật quay trước, không yêu cầu học viên cài đặt.
ghiNho: >-
  Người vẫn quyết định. AI chỉ thao tác trong phạm vi được phép, xin quyền trước khi làm và báo cáo
  để người duyệt.
nguon: [N11, N12, N13, N14]
coVideo: true
buoc:
  - tieuDe: Trả lời một câu hỏi trước khi xem
    huongDan: >-
      Nếu không phải tự ngồi trước từng màn hình, anh chị muốn giao AI việc gì? Ghi lại một việc cụ
      thể.
    ketQua: Anh chị có một việc thật muốn “giao mục tiêu” thay vì tự bấm từng bước.
  - tieuDe: Xem video khoảng 9 phút
    huongDan: >-
      Xem video. Các đoạn chờ đã được tua và ghi nhãn “tua nhanh”. Để ý trình tự: nhận lệnh → xin
      quyền → thao tác → kết quả → phê duyệt.
    ketQua: >-
      Anh chị thấy AI đọc tệp khách hàng giả lập, đối chiếu ghi chú, cập nhật bảng, tạo kế hoạch và
      báo cáo việc hoàn tất/chưa làm/đang chờ duyệt.
  - tieuDe: Nêu một thao tác video đã thay bằng AI
    huongDan: Nêu một thao tác trước đây anh chị phải tự làm mà video đã cho AI làm thay.
    ketQua: Anh chị gọi tên được ít nhất một thao tác cụ thể.
  - tieuDe: Ghi nhớ quy trình năm bước
    huongDan: >-
      Đọc phần “AI thực hiện việc như thế nào” bên dưới. Đây là cầu nối sang buổi thực hành nâng cao
      sau này.
    ketQua: >-
      Anh chị nói lại được: nhận mục tiêu → dùng công cụ → đọc/ghi dữ liệu → xin quyền → báo cáo để
      người duyệt.
---

## AI thực hiện việc như thế nào

Nhận mục tiêu → dùng công cụ → đọc/ghi dữ liệu → xin quyền → báo cáo để người duyệt. “Kỹ năng tái
sử dụng” và “kết nối ứng dụng” là bước phát triển tiếp theo sau buổi học này.

Dễ hình dung: chat trên trang web giống một nhân viên làm từ xa, mình gửi tài liệu qua rồi nhận lại câu
chữ. AI làm việc trên máy giống người ngồi tại văn phòng, đọc và sửa tệp trong đúng thư mục được cho
phép. Nguyên tắc: AI đề xuất kế hoạch trước, người duyệt rồi mới làm.

Lời khuyên khi đi tiếp: làm tay cùng AI cho ra kết quả ưng ý trước, rồi mới đóng gói thành quy trình.
Chưa ưng mà đã tự động hóa thì chỉ lặp lại lỗi.

## Câu giao việc đã dùng để quay video

Câu này chạy trong môi trường **thử nghiệm**, dữ liệu giả lập. Tham khảo để hiểu cách giao mục tiêu
và giới hạn quyền cho AI.

```text
Đây là môi trường THỬ NGHIỆM gồm thư mục WORKSHOP_DEMO và một bảng quản lý khách hàng giả lập. Tôi đã chuẩn bị sẵn dữ liệu dùng cho mục đích đào tạo.

Hãy cho tôi xem kế hoạch thực hiện trước. Sau khi tôi đồng ý và cấp quyền cần thiết, bạn hãy:
1. Đọc các tệp trong WORKSHOP_DEMO và đối chiếu các cam kết với bảng quản lý giả lập.
2. Tự dùng công cụ hoặc giao diện ứng dụng thử nghiệm để đánh dấu các việc quá hạn/chưa hoàn tất.
3. Tạo bản kế hoạch chăm sóc 7 ngày và lưu vào thư mục KET_QUA, không sửa tệp nguồn.
4. Soạn 3 tin nhắn nháp. Không gửi tin nhắn, không đăng nội dung, không xóa tệp, không thanh toán hoặc chỉnh dữ liệu bên ngoài môi trường thử nghiệm.
5. Báo cáo những thao tác đã làm, những chỗ chưa chắc chắn và việc đang chờ tôi phê duyệt.

Nếu một ứng dụng không cho phép thao tác, hãy dừng và báo rõ, không tự tìm cách vượt quyền.
```

## Những giới hạn cần biết

- Tính năng điều khiển máy tính (Cowork/computer use) **không có trên bản miễn phí của Claude**. Theo hướng dẫn
  của Anthropic, tính năng này đang ở giai đoạn thử nghiệm và phụ thuộc quyền Pro/Max, ứng dụng
  Desktop, hệ điều hành và trạng thái mở tính năng.
- Claude ưu tiên sử dụng kết nối/công cụ có sẵn; chỉ khi cần mới thao tác qua trình duyệt hoặc trực
  tiếp bằng chuột/bàn phím. Không phải mọi bước đều là “AI nhìn màn hình và bấm chuột”.
- Giao việc từ điện thoại tới máy tính (Dispatch) không mở cho người dùng mới theo tài liệu hiện tại.
- Dùng trình duyệt, ứng dụng, môi trường giả lập; không mở ngân hàng, dữ liệu khách thật, email cá
  nhân hoặc trang có quyền rủi ro cao. AI có thể gặp lỗi và bị nội dung độc hại dẫn sai thao tác.
