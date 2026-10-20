---
so: 1
tieuDe: AI là gì, vì sao có thể sai?
phut: 15
video:
  tieuDe: "AI là gì, vì sao có thể sai? (hỏi đáp, 2 phút)"
  url: /video/h1-chang-1.mp4
mucTieu: >-
  Hiểu AI đưa ra câu trả lời dựa trên mô hình đã học và ngữ cảnh đang có. Câu văn tự tin không có
  nghĩa là đúng.
ghiNho: "AI có thể hỗ trợ rất tốt, nhưng anh chị vẫn là người chịu trách nhiệm với quyết định kinh doanh."
nguon: [N16, N17]
buoc:
  - tieuDe: Thử đoán tiếp hai câu
    huongDan: >-
      Tự hoàn thành trong đầu hai câu sau: “Một con vịt xòe…” và “Khi rảnh, tôi thường…”. Câu đầu,
      gần như ai cũng đoán giống nhau. Câu thứ hai thì mỗi người một kiểu.
    ketQua: >-
      Anh chị thấy: khi có mẫu quen thuộc, việc đoán rất dễ. Sau “Một con vịt xòe hai cái…” gần như
      chỉ có một lựa chọn là “cánh”. Sau “Khi rảnh, tôi thường…” có rất nhiều lựa chọn ngang nhau. Khi
      thiếu thông tin về riêng mình, AI cũng chỉ có thể đoán, hoặc dựa vào ngữ cảnh anh chị đưa cho nó. Đây là cách giải thích giản
      lược để nhập môn, không phải mô tả đầy đủ cách một hệ thống AI hiện đại hoạt động.
  - tieuDe: Hỏi AI khi chưa cho nó biết gì về mình
    huongDan: Mở claude.ai, tạo cuộc trò chuyện mới và gửi nguyên văn câu dưới đây.
    prompt: Tôi kinh doanh gì và khách hàng của tôi là ai?
    ketQua: >-
      Claude sẽ hỏi lại hoặc đưa ra một câu trả lời chung chung. Mọi thông tin nó tự phỏng đoán
      ở đây đều không phải là sự thật về anh chị.
  - tieuDe: Đưa hai câu bối cảnh rồi hỏi lại
    huongDan: >-
      Sửa các chỗ trong ngoặc vuông bằng thông tin thật của anh chị (chỉ thông tin về mình, không
      có dữ liệu khách hàng), rồi gửi tiếp trong cùng cuộc trò chuyện.
    prompt: |-
      Tôi bán [sản phẩm/dịch vụ] cho [nhóm khách hàng] tại [khu vực].
      Khách thường tìm đến tôi khi [vấn đề họ gặp].
      Với thông tin này, khách hàng của tôi là ai và họ cần gì ở tôi?
    ketQua: >-
      Câu trả lời bám sát công việc của anh chị hơn hẳn lần đầu. Khác biệt đến từ ngữ cảnh anh chị
      cung cấp, không phải AI “thông minh lên”.
  - tieuDe: Tìm câu tự tin mà không có bằng chứng
    huongDan: >-
      Đọc lại câu trả lời vừa nhận. Đánh dấu một câu nghe rất chắc chắn nhưng anh chị chưa hề cung
      cấp dữ kiện cho nó. Tự hỏi: mình sẽ kiểm tra câu này bằng cách nào?
    ketQua: >-
      Anh chị chỉ ra được ít nhất một chỗ AI tự suy diễn: một con số, một nhu cầu, một thói quen của
      khách mà anh chị chưa nói.
---

## Vì sao AI có thể sai

Hình dung AI chọn từ tiếp theo trong nhiều lựa chọn. Câu quen thuộc thì một lựa chọn trội hẳn, nên AI
trả lời gần như chắc chắn. Câu mơ hồ thì nhiều lựa chọn ngang nhau; thiếu bối cảnh, AI vẫn phải chọn
một cái và viết ra bằng giọng rất tự tin. Chỗ đó dễ sai nhất. Việc của anh chị là đưa thêm bối cảnh
và kiểm tra lại.

## Ba điều cần nhớ

1. AI giỏi nhận diện mẫu và tạo nội dung từ những gì được học, được cung cấp và từ công cụ được
   phép dùng.
2. Không có dữ kiện thì AI có thể đưa ra câu nghe hợp lý nhưng sai: sai số liệu, sai tên, sai
   nguồn, sai tình huống.
3. Khi thông tin ảnh hưởng khách hàng, tiền bạc, pháp lý hoặc danh tiếng, con người phải kiểm chứng.

Hôm nay chúng ta không học lập trình. Chúng ta học cách dùng AI như một người cộng sự: biết giao
việc và biết kiểm tra.
