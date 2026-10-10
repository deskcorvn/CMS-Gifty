---
so: 3
tieuDe: Nhiều mô hình AI để làm gì?
phut: 20
mucTieu: >-
  Biết cách lựa chọn mô hình và mức suy luận cho từng loại việc. Chọn mô hình không phải “bấm nút
  thông minh hơn”, mà là chọn hệ thống phù hợp với công việc.
ghiNho: >-
  Không học thuộc tên phiên bản hay vị trí nút. Danh sách mô hình, các mức Effort và khả năng bật/tắt
  Thinking tùy tài khoản và thay đổi theo phiên bản.
nguon: [N01, N04]
buoc:
  - tieuDe: Đọc bảng thuật ngữ
    huongDan: >-
      Đọc bảng “Thuật ngữ trên màn hình” bên dưới. Đối chiếu với màn hình Claude của mình: chỗ nào là
      mô hình, chỗ nào là mức suy luận (nếu tài khoản có).
    ketQua: Anh chị giải thích được bằng lời của mình sự khác nhau giữa mô hình, mức suy luận và hạn mức.
  - tieuDe: Thử một việc đơn giản ở chế độ mặc định
    huongDan: Dán câu dưới đây, thay lời chào bằng một lời chào anh chị hay dùng với khách.
    prompt: |-
      Viết lại lời chào khách hàng sau trong khoảng 40 chữ, giọng thân thiện, tự nhiên:
      [dán lời chào của anh chị]
    ketQua: Chế độ, mức mặc định thường đã đủ cho việc đơn giản như thế này.
  - tieuDe: Thử một việc nhiều ràng buộc
    huongDan: >-
      Việc phức tạp cần dữ liệu đầu vào đầy đủ, và có thể cần mức suy luận cao hơn nếu tài khoản có.
      Sửa phần trong ngoặc rồi gửi.
    prompt: |-
      So sánh ba phương án sau cho việc kinh doanh của tôi: [phương án 1], [phương án 2], [phương án 3].
      Ràng buộc: ngân sách [ ], thời gian [ ], nhân sự [ ].
      Trình bày bảng ưu điểm, nhược điểm, rủi ro. Chỗ nào thiếu dữ liệu thì ghi "chưa rõ", không tự đoán.
    ketQua: >-
      Câu trả lời có cấu trúc và chỉ ra chỗ thiếu dữ liệu. Câu trả lời dài hơn không có nghĩa là
      đúng hơn.
  - tieuDe: Tự soát bốn hiểu lầm
    huongDan: Đọc bốn hiểu lầm bên dưới. Đánh dấu hiểu lầm nào anh chị từng nghĩ là đúng.
    ketQua: Anh chị nói lại được vì sao cả bốn câu đều sai.
---

## Ví dụ dễ hiểu

Cùng là nhân viên nhưng có người xử lý nhanh các việc thường ngày, có người chuyên giải những bài
phân tích phức tạp. Nhà cung cấp AI cũng có nhiều mô hình với cân bằng khác nhau giữa tốc độ, khả
năng và nguồn lực xử lý.

## Thuật ngữ trên màn hình

| Thuật ngữ | Giải thích cho doanh nhân | Khi cần dùng |
|---|---|---|
| Model (mô hình) | Hệ thống AI được chọn để xử lý câu hỏi | Việc đơn giản/việc phức tạp có thể chọn khác nhau |
| Effort (mức suy luận) | Mức nguồn lực AI dành cho việc phân tích yêu cầu | Tăng khi cần đánh giá nhiều bước hoặc đối chiếu kỹ |
| Thinking (chế độ suy luận) | Chức năng cho phép Claude dành thêm quá trình xử lý | Tùy mô hình/gói, có thể bật mặc định hoặc điều chỉnh |
| Context (bối cảnh) | Thông tin giúp AI hiểu tình huống | Có ngành nghề, sản phẩm, mục tiêu, tài liệu |
| Usage limit (hạn mức) | Ngân sách sử dụng theo tài khoản và thời gian | Biết để phân chia lượt thực hành |
| Context window (giới hạn ngữ cảnh) | Lượng thông tin mô hình có thể xem xét trong một lần xử lý | Khác với số lượt chat được phép |

## Bốn hiểu lầm cần gỡ bỏ

1. **Tăng Effort đồng nghĩa đổi sang mô hình mạnh hơn.** Sai: vẫn là mô hình đang chọn nhưng điều
   chỉnh mức suy luận.
2. **Tăng Effort luôn ra câu trả lời đúng.** Sai: có thể giải bài khó tốt hơn nhưng vẫn thiếu dữ
   liệu hoặc đánh giá sai.
3. **Câu trả lời càng dài càng tốt.** Sai: cần đo mức chính xác, đúng nhu cầu và khả năng triển khai.
4. **Có ít lượt dùng thì Claude “kém thông minh”.** Sai: hạn mức sử dụng khác năng lực mô hình.
