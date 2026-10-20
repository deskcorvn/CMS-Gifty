---
so: 3
nhan: Chặng 3
tieuDe: Nhân sự AI — Instruction, Memory, Knowledge, Skill, Tools
phut: 50
mucTieu: >-
  Biết sáu thành phần của một “nhân sự AI” và mỗi thứ được dùng khi nào. Tạo “Trợ lý kinh doanh của tôi”
  trong Project, cho nó bối cảnh công việc thật, thử lại bài toán 12 mối quan hệ để thấy khác biệt; biết
  cách nối công cụ và đóng gói một việc thành skill.
sanPham: [SP02]
ghiNho: >-
  Skill là quy trình: phải làm tay cùng AI ra kết quả ưng ý rồi mới đóng gói. Nhảy thẳng sang tự động
  hóa khi chưa rõ mục tiêu và bối cảnh thì bối cảnh đổi là hỏng.
nguon: [N01, N03, N06, N07, N15, N18, N19, N20]
buoc:
  - tieuDe: Viết hướng dẫn chung cho Claude (Instruction cấp tài khoản)
    huongDan: >-
      Mở cài đặt → phần hướng dẫn chung cho Claude (Instructions for Claude). Ở tầng tài khoản chỉ nên
      đặt tư duy làm việc, áp dụng cho mọi cuộc trò chuyện. Chép mẫu dưới đây, sửa ngành nghề rồi dán vào.
    prompt: |-
      Tôi làm việc trong lĩnh vực [ngành nghề] tại Việt Nam.
      Tôi thích cách trình bày rõ ràng, tự nhiên, dễ áp dụng; ưu tiên tiếng Việt.
      Khi đề xuất giải pháp, ưu tiên cách bền vững, dễ duy trì hơn cách rẻ nhất trước mắt; cách đơn giản trước, chỉ phức tạp khi thật cần.
      Khi thông tin chưa đủ, hãy nêu rõ điều còn thiếu và hỏi lại, không tự tạo số liệu, giá bán, thời hạn hay lời hứa.
      Khi có nhiều phương án, giải thích ưu và nhược điểm ngắn gọn.
    ketQua: Hướng dẫn đã lưu; từ cuộc trò chuyện sau, Claude theo các nguyên tắc này.
  - tieuDe: Xem mục Memory
    huongDan: >-
      Mở cài đặt → Memory (nếu tài khoản có). Đọc xem Claude đang ghi nhớ gì về anh chị từ các cuộc trò
      chuyện. Anh chị sửa hoặc xóa được từng mục.
    ketQua: Anh chị biết Claude có thể nhớ thông tin giữa các cuộc trò chuyện, và biết chỗ để xem lại.
    neuKhongDuoc: >-
      Giao diện và lựa chọn có thể khác giữa các tài khoản (nguồn N07). Không thấy mục này thì bỏ qua.
  - tieuDe: Nhìn chỗ chọn mô hình
    huongDan: >-
      Nhìn cạnh nút gửi: có chỗ chọn mô hình (Model), có thể có mức suy luận (Effort) và chế độ suy luận
      (Thinking). Chỉ cần biết vị trí, chưa cần thay đổi. Đọc phần “Chọn mô hình” bên dưới.
    ketQua: Anh chị chỉ được chỗ chọn mô hình trên màn hình của mình và biết khi nào nên đổi.
  - tieuDe: Tạo Project “Trợ lý kinh doanh của tôi”
    huongDan: >-
      Vào mục Projects, chọn tạo dự án mới (New Project). Đặt tên: “Trợ lý kinh doanh của tôi”. Mỗi
      Project giống một nhân sự phụ trách một mảng việc.
    ketQua: Dự án mới hiện trong danh sách Projects.
  - tieuDe: Nói tự do để Claude viết hướng dẫn dự án
    huongDan: >-
      Mở một cuộc trò chuyện thường, kể tự do 3–5 câu về công việc của mình vào chỗ trong ngoặc vuông
      rồi gửi. Claude viết lại thành hướng dẫn. Đọc lại, sửa chỗ chưa đúng, dán vào phần hướng dẫn dự án
      (Project Instructions) và lưu. Muốn tự viết thì dùng “Mẫu hướng dẫn dự phòng” ở cuối trang.
    prompt: |-
      Hãy viết hướng dẫn cho "Trợ lý kinh doanh của tôi" từ phần tôi kể bên dưới. Hướng dẫn gồm:
      1. Vai trò: trợ lý kinh doanh của tôi, tôi là ai, bán gì, cho ai.
      2. Nhiệm vụ chính: sắp xếp thông tin mối quan hệ, nhắc lời hứa và lịch hẹn có trong dữ liệu, đề xuất bước chăm sóc, soạn lời nhắn để tôi xem trước.
      3. Nguyên tắc: không tự tạo số điện thoại, nhu cầu, giá bán, ưu đãi, doanh thu, lời hứa hay xác nhận của khách; không gợi ý liên hệ người đã yêu cầu ngừng liên hệ; thiếu thông tin thì ghi "chưa rõ"; chỉ soạn nháp, không tự gửi.
      4. Cách trả lời: bảng ngắn "Ai / Vì sao / Việc cần làm / Thời hạn / Cần xác minh".
      Viết ngắn gọn, xưng "bạn" với trợ lý. Không thêm thông tin tôi chưa kể.
      Phần tôi kể: [mình là ai, bán gì cho ai, điểm mạnh đã chứng minh được, khách hay hỏi gì]
    ketQua: Hướng dẫn đã lưu trong dự án, có đủ vai trò, nhiệm vụ, nguyên tắc và cách trả lời.
  - tieuDe: Thêm mô tả dịch vụ ngắn (Knowledge)
    huongDan: >-
      Thêm vào dự án một đoạn mô tả sản phẩm/dịch vụ do anh chị tự viết. Chỉ đưa tài liệu thật sự cần tra;
      tải nhiều tệp lên thì kết quả lúc thừa lúc thiếu. Không tải tài liệu nhạy cảm.
    ketQua: Trợ lý có bối cảnh về công việc thật của anh chị.
  - tieuDe: Hỏi trợ lý việc hôm nay với dữ liệu 12 mối quan hệ
    huongDan: Mở cuộc trò chuyện mới BÊN TRONG dự án vừa tạo, dán khối dưới đây và gửi.
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

      Tôi nên ưu tiên công việc nào hôm nay, và liên hệ ra sao cho phù hợp với nghề của tôi?
    ketQua: >-
      Câu trả lời trình bày theo bảng “Ai / Vì sao / Việc cần làm / Thời hạn / Cần xác minh” và dùng ngôn
      ngữ của ngành anh chị, dù câu hỏi rất ngắn. So với chặng 2: lần này anh chị không phải viết lại 5
      yếu tố, vì hướng dẫn dự án đã có sẵn.
  - tieuDe: Phép thử 60 giây và lưu SP02
    huongDan: >-
      Thay một dòng bối cảnh nghề nghiệp trong hướng dẫn dự án, hỏi lại đúng câu hỏi trên. Thấy câu trả
      lời đổi theo thì bấm “Lưu sản phẩm SP02” ở cuối trang, ghi lại hướng dẫn và câu hỏi thử (tùy chọn,
      không phải điều kiện nhận chứng chỉ).
    ketQua: >-
      Anh chị thấy rõ trợ lý chỉ dùng những gì có trong dự án; sửa bối cảnh là câu trả lời đổi theo.
  - tieuDe: Nối một công cụ (Tools) — tùy chọn
    huongDan: >-
      Vào Customize → Connectors (hoặc nút “+” trong ô chat → Connectors), chọn Google Calendar, bấm kết
      nối và cấp quyền bằng tài khoản Google của chính mình. Rồi gửi câu dưới đây. Lớp chủ yếu xem giảng
      viên làm mẫu; ai muốn thử thì làm với lịch cá nhân của mình.
    prompt: Tạo lịch "Gửi hồ sơ năng lực cho khách số 9" lúc 9 giờ sáng mai, dài 15 phút, trong Google Calendar của tôi.
    ketQua: >-
      Lịch mới hiện trong Google Calendar. Claude chỉ làm được trong phạm vi quyền anh chị cấp; mỗi
      connector ghi rõ thao tác đọc/ghi được ở trang của nó (nguồn N20).
    neuKhongDuoc: >-
      Danh sách connector và quyền khác nhau theo tài khoản. Không thấy Google Calendar, hoặc không muốn
      cấp quyền lịch cá nhân, thì bỏ qua bước này và xem giảng viên làm mẫu.
  - tieuDe: Làm trước, gói sau — đóng gói thành skill (tùy chọn)
    huongDan: >-
      Skill là “công thức” cho một việc lặp lại. Khi kết quả bước hỏi trợ lý đã ưng ý, gửi tiếp câu dưới đây
      trong cùng cuộc trò chuyện. Nếu Claude báo chưa bật, vào Settings → Capabilities bật code execution,
      rồi bật skill-creator trong Customize → Skills (nguồn N19).
    prompt: |-
      Dùng skill-creator đóng gói việc vừa làm thành một skill tên "ke-hoach-cham-soc-7-ngay".
      Đầu vào: bảng mối quan hệ dạng "Mã | Nhóm | Ghi chú".
      Đầu ra: danh sách 5 ưu tiên kèm lý do và việc tiếp theo, kế hoạch Ngày 1–7, 3 tin nhắn nháp, danh sách thông tin cần xác minh.
      Giữ nguyên các nguyên tắc: không bịa dữ kiện, không liên hệ người đã yêu cầu ngừng liên hệ, chỉ soạn nháp.
    ketQua: >-
      Claude tạo bản nháp skill để anh chị xem và lưu. Lần sau chỉ cần dán bảng mới và nói một câu. Thấy
      bước nào chưa hợp lý thì bảo Claude “cập nhật skill này”.
    neuKhongDuoc: Hết lượt dùng hoặc chưa bật được thì xem giảng viên làm mẫu; skill làm tiếp ở nhà được.
---

## Sáu thành phần của một nhân sự AI

| Thành phần | Là gì | Được dùng khi nào |
|---|---|---|
| Instruction | Vai trò, cách xưng hô, nguyên tắc làm việc | Luôn luôn, ở mọi cuộc trò chuyện |
| Memory | Những gì AI nhớ về anh chị | Khi liên quan |
| Knowledge | Tài liệu anh chị đưa vào | Khi cần tra cứu |
| Skill | Công thức cho một việc | Khi yêu cầu khớp với việc đó |
| Tools | Công cụ AI dùng được (lịch, Notion, Drive…) | Khi cần dùng |
| Model | Bộ não suy nghĩ | Xử lý câu anh chị gõ để ra câu trả lời |

**Dễ nhớ như một gian bếp:** tools là nồi niêu, skill là công thức nấu, câu lệnh là nguyên liệu,
instruction là quy tắc vệ sinh an toàn thực phẩm, memory là khẩu vị riêng của chủ nhà.

## Instruction: tài khoản hay dự án?

- **Cấp tài khoản** (cài đặt): chỉ đặt tư duy làm việc chung. Ví dụ: ưu tiên giải pháp bền vững hơn giải
  pháp rẻ nhất; không nói thì AI thường đề xuất cách miễn phí, rẻ trước.
- **Cấp dự án** (Project): mỗi Project như một nhân sự riêng, hoặc một khách hàng riêng, có hướng dẫn
  riêng chỉ áp dụng bên trong dự án. Bản miễn phí của Claude có Projects, tối đa năm dự án.
- Không cần tự viết hướng dẫn cho đẹp: nói thoải mái về công việc rồi nhờ Claude viết lại.

## Chọn mô hình

Cùng là nhân viên nhưng có người xử lý nhanh việc thường ngày, có người chuyên bài phân tích phức tạp.
Tại thời điểm soạn giáo trình, Claude có các dòng như Opus (cho việc cần suy nghĩ kỹ), Sonnet (việc hằng
ngày), Haiku (việc nhanh, đơn giản). Danh sách mô hình, mức Effort và Thinking khác nhau theo gói và đổi
theo thời gian (nguồn N01). Bốn hiểu lầm cần bỏ:

1. Tăng Effort không phải đổi sang mô hình khác.
2. Tăng Effort không đảm bảo đúng; thiếu dữ liệu vẫn sai.
3. Câu trả lời dài hơn không có nghĩa là tốt hơn.
4. Hết lượt dùng là chuyện hạn mức, không phải Claude “kém thông minh”.

## Memory và Knowledge

- **Memory** được lưu từ lịch sử trò chuyện, anh chị xem, sửa, xóa được, và chỉ được dùng khi liên quan.
- **Knowledge** là tài liệu (quy chế, sản phẩm, khách hàng) để AI tra. Chỉ đưa tài liệu cần thiết, ngắn
  gọn; nhiều tệp quá thì kết quả lúc thừa lúc thiếu.
- Hướng dẫn dự án chỉ áp dụng trong dự án. Không phải mọi chi tiết ở các cuộc trò chuyện khác đều tự trở
  thành kiến thức của dự án.

## Tools: nối công cụ để AI làm thay thao tác

Connector cho Claude dùng ứng dụng của anh chị: tạo lịch trong Google Calendar chỉ bằng một câu, tìm
bản ghi cuộc họp rồi viết tóm tắt, lưu kết quả vào Notion. Claude làm được đến đâu tùy quyền anh chị cấp
trong ứng dụng đó (nguồn N20). Mỗi connector có trang riêng liệt kê thao tác đọc/ghi được.

## Làm trước, gói sau

Skill là quy trình. **Phải làm tay ra kết quả ưng ý rồi mới gói được.**

Làm tay cùng AI (duyệt từng bước) → ra kết quả ưng ý (sửa tới khi ưng) → đóng gói bằng skill-creator →
dùng lại (dữ liệu mới, một câu) → nâng cấp (“cập nhật skill này”).

Quy trình sinh ra từ công việc, công việc sinh ra từ mục tiêu và bối cảnh. Nhiều nơi bỏ tiền xây hệ
thống tự động rồi để đó, vì bỏ qua các bước đầu. Bắt đầu từ những việc thủ công, lặp lại mỗi tuần: báo
giá, hợp đồng, tóm tắt cuộc họp. Skill lấy của người khác có thể không khớp bối cảnh của mình; skill của
chính mình thì sửa rất nhanh. Skills có trên cả bản miễn phí (nguồn N18).

## Phiếu “Trợ lý kinh doanh của tôi”

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
