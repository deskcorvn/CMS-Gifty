---
so: 5
tieuDe: Bài tập trọng tâm — biến danh sách mối quan hệ thành kế hoạch 7 ngày
phut: 25
video:
  tieuDe: "Từ 12 mối quan hệ đến kế hoạch 7 ngày (hỏi đáp, 2 phút)"
  url: /video/h5-chang-5.mp4
mucTieu: >-
  Thấy một bảng ghi chép rời rạc biến thành danh sách ưu tiên, lịch làm việc và tin nhắn đã soạn.
  Ai cũng dùng được, dù kinh doanh sản phẩm, dịch vụ hay làm chuyên môn.
sanPham: [SP01]
ghiNho: >-
  Giá trị không nằm ở việc AI tự đoán tỷ lệ chốt đơn, mà ở chỗ biến thông tin rời rạc thành việc cần
  làm có bằng chứng và không bỏ quên lời hứa với khách hàng.
nguon: [N05]
buoc:
  - tieuDe: Nhìn bảng 12 mối quan hệ
    huongDan: >-
      Đọc bảng “Dữ liệu giả lập” bên dưới. Hôm nay gọi là Ngày 0. Để ý những lời hứa và hạn hẹn đang
      nằm rải rác, chưa ai làm.
    ketQua: Anh chị thấy ngay có mấy người đang chờ mình mà chưa được xử lý.
  - tieuDe: Dán câu lệnh chính vào Claude
    huongDan: >-
      Mở cuộc trò chuyện mới trên claude.ai. Bấm “Sao chép” và dán nguyên khối dưới đây (đã có sẵn
      dữ liệu 12 mã), rồi gửi.
    prompt: |-
      Tôi đang cần quản lý 12 mối quan hệ kinh doanh. Dữ liệu dưới đây là dữ liệu giả lập dùng cho lớp học. Hôm nay gọi là Ngày 0.

      Hãy làm theo thứ tự:
      1. Đọc và giữ nguyên toàn bộ 12 mã KH01–KH12; không thêm khách hàng.
      2. Xác định 5 mối quan hệ cần ưu tiên dựa trên cam kết, thời hạn và nhu cầu đã được ghi rõ. Với mỗi người, ghi LÝ DO và VIỆC TIẾP THEO.
      3. Lập kế hoạch chăm sóc Ngày 1 đến Ngày 7, nêu việc và thời điểm phù hợp.
      4. Soạn 3 tin nhắn Zalo tự nhiên, lịch sự, có nội dung cá nhân hóa theo dữ kiện thực tế; không tự bịa giá, kết quả, nhu cầu hoặc hứa hẹn.
      5. Liệt kê các thông tin còn thiếu cần tôi xác minh.
      6. TUYỆT ĐỐI không đưa KH12 vào danh sách cần liên hệ; KH04 chưa có nhu cầu cũng không được thúc ép.

      Đầu ra: ba bảng rõ ràng, dễ sao chép vào Google Sheets. Không tự gửi tin nhắn.

      DỮ LIỆU:
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
      Hết lượt dùng miễn phí thì chờ một lúc hoặc dùng bản kết quả mẫu giảng viên chiếu trên màn hình, rồi
      làm tiếp các bước tự soát.
  - tieuDe: Đọc kết quả
    huongDan: >-
      Đọc danh sách 5 ưu tiên, kế hoạch 7 ngày và 3 tin nhắn. Mỗi lý do ưu tiên có dựa vào đúng ghi
      chú trong bảng không?
    ketQua: >-
      Gợi ý để tự đối chiếu (không phải đáp án duy nhất): nhóm cần chú ý thường gồm KH09 (hồ sơ hôm
      nay), KH01 (báo giá quá hạn), KH02 (gửi phương án ngày mai), KH05 (demo trong hai ngày), KH07
      hoặc KH11 tùy lý do trình bày.
  - tieuDe: Gửi câu kiểm tra chéo
    huongDan: Gửi tiếp câu dưới đây trong cùng cuộc trò chuyện để Claude tự soát lỗi.
    prompt: |-
      Hãy tự kiểm tra kết quả vừa tạo bằng các điều kiện: đủ 12 mã, không bịa nhu cầu hoặc thời hạn, không liên hệ KH12, không biến KH04 thành khách tiềm năng nóng, mọi lý do ưu tiên đều có bằng chứng từ ghi chú. Gạch rõ lỗi nếu có; chỉ xuất lại phần cần sửa.
    ketQua: >-
      KH12 đứng ngoài mọi danh sách liên hệ trong tháng này; KH04 không bị gắn nhãn cơ hội nóng; kế
      hoạch không có “đã chốt đơn”, “dự kiến doanh thu” hay “ngân sách” khi dữ liệu thiếu; tin nhắn
      nhắc đúng mốc đã hứa, không giả định khách đồng ý mua.
  - tieuDe: Đưa bảng ra Google Sheets
    huongDan: >-
      Sao chép bảng dán vào Google Sheets. Nếu Claude cho phép tạo tệp, có thể tải Excel, nhưng tạo
      tệp tiêu tốn hạn mức nhanh hơn. Cách dự phòng luôn là sao chép bảng văn bản.
    ketQua: Bảng ưu tiên và kế hoạch 7 ngày nằm gọn trong một trang tính.
  - tieuDe: Chọn một việc làm ngay và lưu SP01
    huongDan: >-
      So trước và sau. Chọn một hành động có thể làm ngay hôm nay. Sau đó bấm “Lưu sản phẩm SP01” ở
      cuối trang để dán kết quả vào hồ sơ của anh chị.
    ketQua: SP01 đã lưu trong mục “Kết quả của tôi”, tra lại được bất cứ lúc nào sau buổi học.
---

## Dữ liệu giả lập — “Hôm nay là Ngày 0”

Tất cả khách hàng, ghi chú và tình trạng dưới đây đều là thông tin **giả lập** dành cho đào tạo.
Không đưa tên thật, số điện thoại hay dữ liệu khách hàng thực của mình vào phiên làm việc chung.

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

Khi muốn làm với dữ liệu thật sau buổi học, chỉ dùng dữ liệu đã được phép xử lý và có căn cứ về
quyền riêng tư.
