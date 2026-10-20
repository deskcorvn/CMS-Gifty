---
so: 1
nhan: Chặng 1
tieuDe: Hiểu AI — nó “nghĩ” thế nào, vì sao hay bịa
phut: 30
mucTieu: >-
  Hiểu AI không “hiểu” như người: nó đoán chữ tiếp theo dựa trên những gì đã học và bối cảnh anh chị
  đưa. Biết mình đang dùng AI ở cấp nào, và vì sao cách giao việc quyết định chất lượng việc AI làm ra.
ghiNho: >-
  AI giống một thực tập sinh rất giỏi nhưng chưa biết gì về anh chị. Câu trả lời tự tin không có nghĩa
  là đúng; anh chị vẫn là người kiểm tra và chịu trách nhiệm với quyết định kinh doanh.
nguon: [N02, N16, N17]
buoc:
  - tieuDe: Đăng nhập Claude và ChatGPT
    huongDan: >-
      Mở claude.ai và đăng nhập. Mở thêm một thẻ chatgpt.com, đăng nhập, bấm nút đính kèm để chắc chắn
      tải được ảnh lên (chưa cần gửi). Bản miễn phí đủ cho buổi học, nhưng có giới hạn mức sử dụng.
    ketQua: Anh chị thấy ô chat của Claude và của ChatGPT, tên tài khoản của mình ở góc màn hình.
    neuKhongDuoc: >-
      Giao diện có thể là tiếng Anh hoặc tiếng Việt, vị trí nút có thể khác. Chưa đăng nhập được thì
      giơ tay để trợ giảng gỡ ngay, đừng chờ.
  - tieuDe: Xem cài đặt quyền riêng tư
    huongDan: >-
      Trong Claude, mở phần cài đặt → Quyền riêng tư (Privacy). Tìm mục cho phép dùng dữ liệu để cải
      thiện mô hình. Anh chị tự quyết định bật hay tắt, không ai bấm thay.
    ketQua: Anh chị biết mục này nằm ở đâu và đã chọn theo ý mình.
    neuKhongDuoc: >-
      Tắt tùy chọn cải thiện mô hình không đồng nghĩa xóa toàn bộ thông tin đã lưu. Tìm hiểu chính sách
      theo tài khoản của mình (nguồn N02).
  - tieuDe: Đoán tiếp hai câu, rồi hỏi Claude
    huongDan: >-
      Tự đoán trong đầu từ tiếp theo của hai câu dưới đây. Sau đó dán khối câu lệnh vào Claude, và so kết
      quả với người ngồi cạnh.
    prompt: |-
      Hãy điền đúng MỘT từ vào chỗ trống của từng câu, không giải thích:
      1. Một con vịt xòe ra hai cái ___
      2. Lúc rảnh, tôi thường ___
    ketQua: >-
      Câu 1 gần như cả lớp ra cùng một từ (“cánh”). Câu 2 mỗi người một kiểu. Câu quen thuộc thì một lựa
      chọn trội hẳn; câu mơ hồ thì nhiều lựa chọn ngang nhau và AI phải đoán. Đây là cách giải thích giản
      lược để nhập môn, chưa phải mô tả đầy đủ cách một hệ thống AI hiện đại hoạt động (nguồn N17).
  - tieuDe: Hỏi AI khi chưa cho nó biết gì về mình
    huongDan: Tạo cuộc trò chuyện mới và gửi nguyên văn câu dưới đây.
    prompt: Tôi kinh doanh gì và khách hàng của tôi là ai?
    ketQua: >-
      Claude hỏi lại hoặc đưa ra một câu trả lời chung chung. Mọi điều nó tự phỏng đoán ở đây đều không
      phải sự thật về anh chị.
  - tieuDe: Đưa hai câu bối cảnh rồi hỏi lại
    huongDan: >-
      Sửa các chỗ trong ngoặc vuông bằng thông tin thật về mình (không có dữ liệu khách hàng), rồi gửi
      tiếp trong cùng cuộc trò chuyện.
    prompt: |-
      Tôi bán [sản phẩm/dịch vụ] cho [nhóm khách hàng] tại [khu vực].
      Khách thường tìm đến tôi khi [vấn đề họ gặp].
      Với thông tin này, khách hàng của tôi là ai và họ cần gì ở tôi?
    ketQua: >-
      Câu trả lời bám sát công việc của anh chị hơn hẳn lần đầu. Khác biệt đến từ bối cảnh anh chị đưa,
      không phải AI “thông minh lên”.
  - tieuDe: Tìm câu tự tin mà không có bằng chứng
    huongDan: >-
      Đọc lại câu trả lời vừa nhận. Đánh dấu một câu nghe rất chắc chắn nhưng anh chị chưa hề cung cấp dữ
      kiện cho nó. Tự hỏi: mình sẽ kiểm tra câu này bằng cách nào?
    ketQua: >-
      Anh chị chỉ ra được ít nhất một chỗ AI tự suy diễn: một con số, một nhu cầu, một thói quen của khách
      mà anh chị chưa nói.
  - tieuDe: Xác định mình đang ở cấp nào
    huongDan: >-
      Đọc bảng “Năm cấp dùng AI” bên dưới. Hiện anh chị dùng AI chủ yếu ở cấp nào? Hôm nay mình đi từ cấp
      1 lên cấp 2, và chạm tới cấp 3.
    ketQua: Anh chị gọi được tên cấp mình đang dùng và cấp mình muốn tới.
---

## AI không “hiểu”. Nó đoán chữ tiếp theo

Hình dung AI chọn chữ tiếp theo trong nhiều lựa chọn. Câu quen thuộc thì một lựa chọn trội hẳn, nên AI
trả lời gần như chắc chắn. Câu mơ hồ thì nhiều lựa chọn ngang nhau; thiếu bối cảnh, AI vẫn phải chọn
một cái và viết ra bằng giọng rất tự tin. **Chỗ nào nhiều lựa chọn ngang nhau, chỗ đó AI dễ bịa. Việc
càng mơ hồ, càng nhiều chỗ để bịa.** Vì vậy đừng vội chê AI: đưa thêm bối cảnh và tự kiểm tra lại.

## Mỗi AI học từ một kho khác nhau

Dữ liệu và cách huấn luyện khác nhau nên mỗi AI mạnh ở một kiểu việc. Bảng dưới là cảm nhận khi dùng
thực tế, không phải xếp hạng chính thức; tự thử với việc của mình để biết.

| AI | Gắn với | Hợp cho việc |
|---|---|---|
| Gemini | Google Tìm kiếm | Tra cứu kiến thức phổ biến |
| ChatGPT | Dùng đa năng, cân bằng | Việc chung; tạo và chỉnh ảnh |
| Grok | Mạng xã hội X | Tin trên mạng xã hội, giọng văn đời thường |
| Claude | Lập luận, cấu trúc | Sắp xếp thông tin, viết dài, dựng quy trình làm việc |

Hôm nay dùng Claude làm ví dụ chính. Cách nghĩ và cách giao việc dùng được cho mọi AI.

## Năm cấp dùng AI

| Cấp | Cách dùng | Ví dụ |
|---|---|---|
| 1. Hỏi đáp | Dùng thay Google, viết, dịch lặt vặt | “Cách chăm sóc khách hàng?” |
| 2. Có một nhân sự AI | AI biết công việc, công cụ và quy trình của anh chị | Trợ lý kinh doanh trong Project |
| 3. Trưởng phòng | Nhiều nhân sự AI, anh chị là người điều phối | Một trợ lý lo khách, một trợ lý lo nội dung |
| 4. Kinh doanh một người | Các AI tự phối hợp theo quy trình | Chuyên gia, người làm tự do dựng cả dây chuyền |
| 5. Cả tổ chức | Nhiều người dùng chung, mỗi người đúng quyền | Doanh nghiệp phân quyền theo phòng ban |

Cấp 3 giống biết lái xe; cấp 4 và 5 giống biết chế tạo xe. Phần lớn chúng ta chỉ cần lái giỏi. Năm cấp
là khung dễ nhớ của khóa học, không phải phân loại chính thức của Anthropic.

## AI là một thực tập sinh tài năng mới vào công ty

Rất giỏi, biết rất nhiều, nhưng chưa biết gì về công ty, khách hàng hay sản phẩm của anh chị. Vì vậy anh
chị phải đổi vai: làm người giao việc. **Cách giao việc quyết định chất lượng việc AI làm ra.** Đó là
chặng 2.
