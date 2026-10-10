# CMS-Gifty — hướng dẫn cho Claude

Trang học "Khóa đào tạo AI" của Gifty Tech (Next.js 16, Postgres, Vercel). Đọc README.md trước.

## Luật
1. **Nội dung chỉ lấy từ giáo trình.** File `content/` bám *Giáo trình Buổi 1 v2.0 (10/10/2026)*. Không thêm
   con số, tính năng Claude/ChatGPT hay lời hứa không có trong giáo trình hoặc nguồn N01–N17. Giao diện AI thay đổi
   thì sửa theo nguồn chính thức và cập nhật `ngayRaSoatNguon`.
2. **Không chấm điểm, không phân loại.** Ai xong 44 bước và lưu đủ 4 sản phẩm đều nhận "Hoàn thành xuất sắc" như
   nhau (chốt 10/10/2026). Quiz làm sau, khi người vận hành yêu cầu.
3. **Thanh toán giữ đúng quy tắc PTI** (`src/lib/thanh-toan.ts`):
   - chống cộng trùng;
   - không tự đoán đơn cho khoản tiền thiếu mã;
   - sai tài khoản thì không cộng;
   - webhook thiếu key là từ chối.
   Sửa phần này phải chạy lại bộ thử webhook (trả thiếu, gửi trùng, cùng mã tham chiếu khác id, sai tài khoản,
   không mã, trả thừa).
4. **Không đổi mã bước đã phát hành.** Tiến độ lưu theo `cNN-bNN`; thêm bước mới vào cuối chặng.
5. **Credential không vào repo.** Mọi khóa đọc từ env (xem `.env.example`). Không echo secret ra log.
6. **Dữ liệu học viên:** chỉ dữ liệu giả lập KH01–KH12 trong bài tập; không thêm ô nhập dữ liệu khách hàng thật.
   Ảnh SP04 phải có ô đồng ý.

## Kiểm tra trước khi push
`npm run lint && npm run typecheck && npm run build`. Sửa giao diện thì chụp màn hình cả desktop lẫn 390px.
