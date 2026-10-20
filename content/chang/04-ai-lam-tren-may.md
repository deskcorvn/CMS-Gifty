---
so: 4
nhan: Chặng 4
tieuDe: AI làm việc trên máy tính — Cowork và đội trợ lý chạy song song
phut: 25
mucTieu: >-
  Thấy khác biệt giữa AI trả lời trên trang web và AI nhận nhiệm vụ rồi làm việc ngay với tệp trên máy của
  anh chị. Nắm nguyên tắc an toàn “đề xuất trước, duyệt rồi mới làm”, và hiểu khi nào giao việc cho nhiều
  trợ lý chạy song song.
ghiNho: >-
  Người vẫn quyết định. AI chỉ làm trong thư mục và phạm vi được cho phép, đề xuất trước khi làm và báo
  cáo để người duyệt.
nguon: [N11, N12, N13, N14]
coVideo: true
buoc:
  - tieuDe: Ghi một việc muốn giao trên máy tính
    huongDan: >-
      Nếu không phải tự ngồi bấm từng tệp, anh chị muốn giao AI việc gì trên máy? Ghi lại một việc cụ
      thể, ví dụ: dọn thư mục Tải về (Downloads), đổi tên hàng loạt ảnh sản phẩm, gom báo giá theo khách.
    ketQua: Anh chị có một việc thật muốn “giao mục tiêu” thay vì tự bấm từng bước.
  - tieuDe: Xem minh họa và video làm mẫu
    huongDan: >-
      Xem video minh họa dọn thư mục Tải về ngay dưới đây, rồi video giảng viên quay sẵn trong môi trường thử
      nghiệm (chiếu tại lớp). Để ý trình tự: nhận việc → đề xuất kế hoạch → người duyệt → làm thật → báo cáo.
    minhHoa:
      tieuDe: Cowork dọn thư mục Tải về — đề xuất, duyệt, trợ lý phụ chạy song song, báo cáo
      video: /minh-hoa/cowork.mp4
    ketQua: >-
      Anh chị thấy AI đọc tệp khách hàng giả lập, đối chiếu ghi chú, cập nhật bảng, tạo kế hoạch và báo
      cáo việc đã xong, chưa làm, đang chờ duyệt.
  - tieuDe: Viết câu giao việc theo kiểu “đề xuất, chờ duyệt”
    huongDan: >-
      Dựa trên việc đã ghi ở bước 1, sửa mẫu dưới đây thành câu giao việc của mình. Chưa cần chạy: Cowork
      chỉ có ở gói trả phí, và làm việc với tệp trên máy cần ứng dụng Claude Desktop.
    prompt: |-
      Hãy xem thư mục [tên thư mục] tôi đã cho phép. Chỉ đọc tên, loại, dung lượng và ngày sửa của tệp.
      ĐỪNG di chuyển hay xóa gì. Trước tiên, đề xuất cách sắp xếp: chia nhóm, tên thư mục mới, và một thư mục "can-xoa" cho tệp nên bỏ.
      Chờ tôi duyệt. Tôi đồng ý thì mới làm thật; tôi góp ý thì đề xuất lại.
    ketQua: Anh chị có một câu giao việc giữ quyền duyệt trong tay mình.
  - tieuDe: Chia việc song song hay tuần tự
    huongDan: >-
      Lấy ví dụ báo cáo tuần ở phần “Đội trợ lý” bên dưới. Với việc của mình, viết ra: phần nào làm độc
      lập được (chạy song song), phần nào phải chờ kết quả bước trước (chạy tuần tự).
    ketQua: >-
      Anh chị chia được việc thành hai nhóm. Việc độc lập thì chạy song song; việc cần kết quả bước trước
      thì chạy tuần tự.
---

## Nhân sự làm từ xa hay nhân sự đến tận nơi?

| | Chat trên trang web | Cowork |
|---|---|---|
| Cách làm | Hỏi một câu, trả lời một câu | Nhận nhiệm vụ, tự lập kế hoạch và làm nhiều bước |
| Tệp | Tải lên bản sao, nhận lại chữ | Đọc và sửa tệp gốc trên máy, trong thư mục được cho phép (qua Claude Desktop) |
| Đội ngũ | Một luồng trò chuyện | Nhiều trợ lý phụ (sub-agent) chạy song song |
| Lịch | Hỏi mới trả lời | Có thể tự chạy theo lịch, ví dụ 7 giờ sáng gửi bản tin |

Chat trên web giống một nhân viên làm từ xa: phải gửi tài liệu qua, nhận về, rồi tự cập nhật. Cowork nhận
nhiệm vụ rồi tự làm nhiều bước; có ứng dụng Claude Desktop thì nó giống người ngồi ngay tại văn phòng, sửa trực
tiếp tệp trong đúng thư mục được giao. Ví dụ dễ thấy nhất: nhờ AI
dọn thư mục Tải về, nơi lộn xộn nhất trên máy.

## Nguyên tắc: AI đề xuất trước, anh chị duyệt rồi mới chạy

Giao việc kèm lời dặn “đề xuất, chờ duyệt” → AI xem danh sách tệp (tên, loại, dung lượng, ngày) → AI đề
xuất cách xếp, kèm một thư mục “cần xóa” → **anh chị duyệt?** Có thì AI làm thật trên tệp của anh chị.
Chưa thì góp ý cụ thể, làm theo được, để AI đề xuất lại.

Để xếp tệp, AI thường chỉ cần thông tin tệp. Ghép thêm lịch sự kiện thì AI biết ảnh nào thuộc sự kiện
nào, dựa vào ngày chụp.

## An toàn

- Cowork chỉ vào được thư mục anh chị cho phép. Đừng giao kiểu “dọn cả ổ C”.
- Thử trước trong thư mục thử nghiệm, dữ liệu giả lập. Không mở ngân hàng, email cá nhân, dữ liệu khách
  thật hay trang có quyền rủi ro cao. AI có thể gặp lỗi và bị nội dung độc hại dẫn sai thao tác (nguồn N14).

## Đội trợ lý: một cuộc trò chuyện chính điều phối

Trợ lý phụ (sub-agent) là các trợ lý được cuộc trò chuyện chính gọi ra khi cần. Mỗi trợ lý phụ có “đầu
óc sạch”: chỉ nhận đúng phần việc của mình, không đọc lịch sử trò chuyện chính, làm xong chỉ trả kết
quả, giống trưởng nhóm giao việc rồi nghiệm thu đầu ra. Đây là bước đặt một chân lên cấp 4.

Ví dụ báo cáo tuần:

- **Chạy song song:** trợ lý 1 lấy số bán hàng (Excel), trợ lý 2 lấy lịch họp tuần (Calendar), trợ lý 3
  lấy việc còn tồn (Notion).
- **Rồi chạy tuần tự:** trợ lý 4 tổng hợp số liệu → trợ lý 5 viết nhận xét → trợ lý 6 kiểm tra chéo.

Việc độc lập thì chạy song song. Việc cần kết quả bước trước thì chạy tuần tự. Trợ lý phụ cũng hợp để soát
lại kế hoạch và nghiệm thu kết quả, đúng như thói quen 3 ở chặng 2.

## Câu giao việc đã dùng để quay video

Câu này chạy trong môi trường **thử nghiệm**, dữ liệu giả lập. Tham khảo để hiểu cách giao mục tiêu và
giới hạn quyền cho AI.

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

- Cowork **chỉ có ở gói trả phí** (Pro, Max, Team, Enterprise). Theo hướng dẫn của Anthropic, đọc/ghi tệp trên
  máy, dùng trình duyệt và điều khiển máy tính cần ứng dụng Claude Desktop (macOS hoặc Windows) đang mở và có
  mạng (nguồn N11, N12).
- Claude ưu tiên dùng kết nối và công cụ có sẵn; chỉ khi cần mới thao tác qua trình duyệt hoặc bằng
  chuột, bàn phím.
- Giao việc từ điện thoại tới máy tính (Dispatch) chưa mở cho mọi người dùng theo tài liệu hiện tại
  (nguồn N13).
