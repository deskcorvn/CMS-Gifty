import { dsChang, khoaHoc, soLienHe } from "@/lib/noi-dung";

export const cauHoi = [
  {
    hoi: "Chưa biết gì về AI, tôi có học được không?",
    dap: "Có. Khóa học bắt đầu từ cách AI hoạt động, thiết lập tài khoản rồi mới đến giao việc và thực hành. Anh chị không cần biết lập trình.",
  },
  {
    hoi: "Có bắt buộc mang laptop không?",
    dap: "Nên mang. Phần thực hành phải dán dữ liệu, sửa câu lệnh và tạo Project trên Claude, làm trên laptop dễ hơn nhiều. Điện thoại chỉ tiện để xem hướng dẫn và chép câu lệnh.",
  },
  {
    hoi: "Có cần mua Claude hay ChatGPT trả phí không?",
    dap: "Không bắt buộc mua gói trả phí. Tài khoản miễn phí có giới hạn lượt dùng; giảng viên hướng dẫn phân bổ lượt cho phần thực hành chính. Nếu hết hạn mức, anh chị lưu câu lệnh để hoàn thiện sau.",
  },
  {
    hoi: "Tài khoản miễn phí hết lượt giữa buổi thì sao?",
    dap: "Giảng viên làm mẫu một số bước trên màn hình để anh chị để dành lượt cho phần thực hành chính. Nếu vẫn hết lượt, câu lệnh đã nằm sẵn trong trang học, anh chị làm nốt khi tài khoản có lượt trở lại.",
  },
  {
    hoi: "Tôi cần mang dữ liệu khách hàng thật không?",
    dap: "Không cần. Lớp cung cấp dữ liệu giả lập KH01–KH12 để thực hành. Anh chị chuẩn bị laptop, sạc, tài khoản AI, một ảnh chân dung được phép chỉnh và mô tả ngắn về công việc của mình.",
  },
  {
    hoi: "Đăng ký xong, tôi vào học như thế nào?",
    dap: "Sau khi điền thông tin, anh chị chuyển khoản bằng mã VietQR. Khi hệ thống xác nhận đủ học phí, anh chị nhận mã đăng ký và có thể xem lịch, hướng dẫn chuẩn bị. Nội dung thực hành mở khi giảng viên bắt đầu lớp. Những lần sau, nhập email để nhận link đăng nhập, hoặc đăng nhập bằng mã đăng ký nếu email không tới.",
  },
  {
    hoi: "Lớp có bao nhiêu người?",
    dap: `Tối đa ${khoaHoc.soCho} học viên, để giảng viên kịp xem màn hình và gỡ vướng cho từng người. Đủ chỗ thì trang đăng ký tự đóng.`,
  },
  {
    hoi: "Lỡ buổi học hoặc đến muộn thì sao?",
    dap: `Trang học giữ đủ ${dsChang.length} chặng với hướng dẫn và câu lệnh từng bước, anh chị làm lại theo được. Chỗ nào vướng thì hỏi trong nhóm Zalo của lớp.`,
  },
  {
    hoi: "Sau buổi học có ai hỗ trợ không?",
    dap: "Có. Học viên được vào nhóm Zalo của lớp để hỏi tiếp khi tự làm ở nhà.",
  },
  {
    hoi: "Khi nào tôi nhận được chứng chỉ?",
    dap: `Hoàn thành đủ 9 chặng, anh chị nhận chứng chỉ “${khoaHoc.chungChi.danhHieu}” có mã QR kiểm tra trực tuyến.`,
  },
  {
    hoi: "Sau buổi học, tôi còn xem lại được gì?",
    dap: "Mục “Kết quả của tôi” lưu các sản phẩm, kho câu lệnh và nguồn tham khảo chính thức để tra cứu. Sản phẩm có thể sao chép hoặc tải về máy.",
  },
  {
    hoi: "Muốn hỏi thêm trước khi đăng ký?",
    dap: `Gọi hoặc nhắn Zalo ${soLienHe}, Gifty Tech trả lời trực tiếp.`,
  },
];

