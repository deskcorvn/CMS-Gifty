# CMS-Gifty: Khóa đào tạo AI

Trang học của Gifty Tech cho **Khóa đào tạo AI: Hiểu AI và làm việc cùng AI**. Khóa học 180 phút, lớp đầu tiên
lúc 14:00 thứ Tư 21/10/2026, học phí 300.000đ.

Học viên đi theo trình tự:
1. Đăng ký, quét VietQR để trả tiền. SePay xác nhận rồi hệ thống tự mở quyền học.
2. Học theo **9 chặng / 44 bước**. Mỗi bước có hướng dẫn, câu lệnh bấm-để-sao-chép, phần "kết quả trông thế nào"
   và tiến độ được lưu theo tài khoản.
3. Lưu **4 sản phẩm** SP01–SP04: bảng ưu tiên + kế hoạch 7 ngày, trợ lý Claude, hồ sơ thương hiệu, ảnh/câu lệnh
   chỉnh ảnh.
4. Xong 44 bước và lưu đủ 4 sản phẩm thì tự nhận **chứng chỉ "Hoàn thành xuất sắc"**. Khóa không chấm điểm,
   không xếp loại. Chứng chỉ có ảnh A4 với chữ ký, mã QR và trang kiểm tra công khai `/chung-nhan/<mã>`.
5. Sau buổi học, mục **"Kết quả của tôi"** giữ lại cho học viên tra cứu: 4 sản phẩm (chép được, tải được file `.md`),
   kho câu lệnh, video và các nguồn chính thức.

Nội dung lấy từ *Giáo trình Buổi 1, phiên bản 2.0 (10/10/2026)*. Chỉ giữ phần dành cho học viên; phần chỉ dành
cho giảng viên (tổ chức lớp, kịch bản quay video, phương án dự phòng) không đưa lên site.

## Công nghệ (kế thừa, không viết lại)

| Phần | Cách làm | Lấy từ |
|---|---|---|
| Khung | Next.js 16 + Tailwind 4 trên Vercel | giống giftyid |
| Nội dung | Markdown/YAML trong `content/`, biên dịch sang JSON khi build | cơ chế `build-posts.mjs` của giftyid |
| Sửa bài không cần code | [Pages CMS](https://pagescms.org) (MIT), cấu hình ở `.pages.yml` | |
| Trang học theo bước | `DanhSachBuoc`, `NutSaoChep` | `PracticeLabPage` của giftyid |
| Thanh toán | VietQR + webhook SePay; đơn CHO/THIEU/DA_DU; chống cộng trùng theo `sepay_id` và mã tham chiếu; đối soát; khớp tay | PTI `web/api/_lib/xu-ly-giao-dich.mjs` |
| Cơ sở dữ liệu | Postgres (Neon) qua thư viện `postgres` | PTI |
| Đăng nhập | Link một lần gửi qua email (không mật khẩu), cookie ký HMAC | cách ký cookie của giftyid |
| Chứng chỉ | `next/og` + font Be Vietnam Pro + QR; chữ ký `public/chu-ky-hung.svg` | cách giftyid làm ảnh OG |

## Chạy trên máy

```bash
npm install
cp .env.example .env.local      # điền DATABASE_URL, SESSION_SECRET, VIETQR_*, SEPAY_WEBHOOK_API_KEY, ADMIN_KEY…
npm run db:migrate              # tạo bảng (chạy lại nhiều lần không sao)
npm run dev
```

Chưa cấu hình email thì link đăng nhập được in ra console (chỉ ở môi trường dev).

Kiểm tra trước khi push: `npm run lint && npm run typecheck && npm run build`.

## Triển khai lần đầu (khoảng 30 phút)

1. **Neon**: tạo project (region Singapore), lấy chuỗi *pooled* làm `DATABASE_URL`, rồi chạy
   `DATABASE_URL=... npm run db:migrate`.
2. **Vercel**: Import repo `deskcorvn/CMS-Gifty`, đặt đủ biến trong `.env.example`. Bật **Blob** cho project
   (dùng để lưu ảnh SP04).
   - Gói Hobby (miễn phí) **không cho dùng thương mại hay nhận thanh toán**. Thu học phí thì dùng gói Pro.
   - Gói Hobby chỉ chạy cron mỗi ngày một lần. Lên Pro thì đổi `vercel.json` sang `"0 * * * *"` để đối soát mỗi giờ
     như PTI.
3. **Tên miền**: thêm `cms.giftytech.com` trong Vercel → Domains, rồi đặt `SITE_URL=https://cms.giftytech.com`.
   Trên Cloudflare (DNS của giftytech.com) thêm bản ghi `CNAME  cms  →  cname.vercel-dns.com`, để
   **DNS only (mây xám)** cho Vercel tự cấp chứng chỉ SSL.
4. **SePay**: tạo webhook mới, URL `https://cms.giftytech.com/api/sepay/webhook`, *Bảo mật = API Key*, key trùng
   `SEPAY_WEBHOOK_API_KEY`. Webhook này chỉ khớp nội dung có mã `GTAI…`; giao dịch khác hiện ở mục "Giao dịch cần
   đối chiếu" trong trang quản trị.
5. **Email**: điền SMTP, hoặc Gmail App Password (`EMAIL_USER`/`EMAIL_PASS`).
6. **Chạy thử**: tự đăng ký một tài khoản, chuyển 300.000đ thật (hoặc dùng SePay Test mode), kiểm tra email kích
   hoạt, làm thử một chặng, rồi mở `/quan-tri`.

## Vận hành

- **`/quan-tri`** (khóa `ADMIN_KEY`):
  - xem danh sách học viên, tiền đã nhận, tiến độ, chứng chỉ; xuất CSV;
  - **Kích hoạt tay** cho người đóng tiền mặt (đơn chuyển khoản đang treo sẽ bị hủy);
  - **Link đăng nhập** (hạn 24 giờ) để gửi qua Zalo khi email không tới;
  - **Khớp tay** giao dịch thiếu mã hoặc sai mã;
  - **Thu hồi** chứng chỉ;
  - **Đối soát SePay** 7 ngày.
- **Sửa nội dung**: vào app.pagescms.org, đăng nhập GitHub, chọn repo, sửa "Các chặng học" hoặc "Thông tin khóa"
  rồi bấm Save. Vercel tự build lại.
  - Nội dung sai cấu trúc sẽ bị `scripts/build-content.mjs` chặn khi build, site đang chạy không bị ảnh hưởng.
  - Commit từ Pages CMS mang tên tài khoản GitHub của người sửa. Nếu Vercel chỉ deploy commit của thành viên team,
    hãy đăng nhập Pages CMS bằng tài khoản trong team.
- **Đổi lịch, địa điểm, học phí, link video**: sửa ở "Thông tin khóa" (`content/khoa-hoc.yml`).
  - Địa điểm đang để trống: trang web và email sẽ ghi "Gifty Tech gửi địa điểm qua email".
- **Thêm hoặc bớt bước**: tiến độ lưu theo mã bước `c05-b03` (chặng 5, bước 3). Chèn bước vào giữa chặng sẽ làm
  dịch mã các bước phía sau. Sau khi đã có học viên, nên thêm bước mới vào **cuối** chặng.
- **Vẽ lại chữ ký**: `node scripts/ve-chu-ky.mjs <font.ttf> public/chu-ky-hung.svg Hùng` (font OFL Alex Brush).

## Còn để sau

- Quiz và chấm điểm (đã thống nhất làm sau).
- Một đơn đăng ký cho nhiều người (công ty cử nhân viên đi học), giống PTI.
- Email nhắc lịch trước 48 giờ (hiện danh sách chuẩn bị gửi kèm email xác nhận thanh toán).
