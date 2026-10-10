# Giao diện khóa học và ảnh chia sẻ

Ngày thực hiện: 10/10/2026. Nhánh: `feat/course-experience-refresh`.

## Thiết kế

Bố cục tham khảo các mẫu LMS: thông tin khóa học, giảng viên, thời lượng và đăng ký nằm cùng khu vực đầu trang; giáo trình mở theo từng chặng; trang học có điều hướng chặng trên desktop và menu thu gọn trên điện thoại.

- [Coursera — AI for Everyone](https://www.coursera.org/learn/ai-for-everyone): thứ bậc thông tin khóa học, giảng viên, kết quả học tập và giáo trình.
- [Udemy — Artificial Intelligence](https://www.udemy.com/topic/artificial-intelligence/): nền trung tính, nội dung rõ ràng, hành động đăng ký dễ tìm.
- [Moodle — Course homepage](https://docs.moodle.org/500/en/Course_homepage): mục lục khóa học và điều hướng giữa các phần.

Dùng trắng, xám và đỏ Gifty Tech. Không đưa đánh giá sao, số học viên, đối tác hay lời chứng thực chưa có căn cứ vào giao diện.

## Ảnh và nội dung giảng viên

- Nguồn tham khảo: [trang đào tạo AI Gifty Tech](https://www.giftytech.com/khoa-hoc-ai-thuc-chien) và [poster cũ](https://www.giftytech.com/images/khoa-hoc/poster.png).
- `public/images/nguyen-manh-hung.png` là chân dung được công cụ tạo ảnh xử lý từ poster cũ để bỏ nền và chữ. Đây là ảnh phái sinh, không phải bản ảnh gốc chưa chỉnh sửa.
- “10.000 giờ sử dụng AI” là thông tin người vận hành cung cấp trong yêu cầu ngày 10/10/2026; không suy ra từ số buổi của khóa học trước.
- Thông tin giảng viên trên trang nằm trong `content/khoa-hoc.yml`, có trường sửa trong Pages CMS.
- Ảnh OG dựng bằng `next/og`, kích thước 1200×630, font tiếng Việt lưu cục bộ. Có tên giảng viên, chân dung và điểm nhấn 10.000 giờ; không có học phí thử nghiệm trên ảnh.
- Lịch học, học phí, 9 chặng, 44 bước và 4 sản phẩm theo giáo trình hiện tại. Không lấy học phí hoặc giáo trình 6 buổi từ poster cũ.
- Giữ `hocPhi: 2000` theo yêu cầu tiếp tục thử chuyển khoản.

## SEO và truy cập

Canonical và sitemap dùng `SITE_URL`, mặc định `https://daotao.giftytech.com`. OG có locale `vi_VN`, Twitter dùng `summary_large_image`. Trang nội bộ không được lập chỉ mục. Có liên kết bỏ qua đầu trang, focus bàn phím, nhãn tiến độ và thông báo trạng thái cho form.

## Phạm vi kiểm tra

Chạy bản production cục bộ với Postgres tách biệt, học viên và tài khoản ngân hàng giả lập. Kiểm tra responsive 320, 390, 768 và 1440px; chụp desktop/mobile; kiểm tra axe WCAG 2A/AA và 2.1AA trên các màn hình chính.

Luồng kiểm tra: tạo đơn 2.000đ và đối chiếu bản ghi DB, hiển thị QR giả lập, đăng nhập bằng token một lần, lưu tiến độ rồi tải lại, lưu SP03 rồi tải lại, thư viện kết quả, đăng xuất và gửi yêu cầu đăng nhập. Kiểm tra metadata, ảnh OG, sitemap, favicon và điều hướng bàn phím.

Không thực hiện chuyển khoản thật hoặc gửi email thật. Không sửa logic đối soát, webhook thanh toán, quy tắc cấp chứng chỉ hay mã bước đã phát hành.

Kết quả: `npm run lint`, `npm run typecheck`, `npm run build` đều thành công. Các luồng DB nêu trên đạt; 12 lượt quét axe không báo vi phạm; không có lỗi JavaScript trong trình duyệt hoặc tràn ngang ở các kích thước đã kiểm tra. Kiểm tra tự động không thay thế thử nghiệm với người dùng hoặc thanh toán/email trên hệ thống thật.

Kiểm tra bổ sung trên bản build cuối: form đăng ký desktop/mobile tiếp tục đạt axe; menu học trên mobile mở/đóng và tự thu khi chuyển chặng; trạng thái chặng hiện tại và liên kết vào đúng chặng từ trang giới thiệu đều đúng.
