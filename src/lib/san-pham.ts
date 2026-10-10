import type { MaSanPham } from "./noi-dung";

export type OSanPham = {
  ten: string;
  nhan: string;
  kieu: "text" | "textarea" | "checkbox";
  goiY?: string;
  dem?: { min: number; max: number }; // đếm chữ, chỉ để nhắc
  batBuoc?: boolean;
};

/** Các ô của form từng sản phẩm. Ô bắt buộc khớp với O_BAT_BUOC trong hoan-thanh.ts. */
export const FORM_SAN_PHAM: Record<MaSanPham, OSanPham[]> = {
  SP01: [
    { ten: "uuTien", nhan: "5 mối quan hệ ưu tiên (kèm lý do và việc tiếp theo)", kieu: "textarea", batBuoc: true, goiY: "Dán bảng ưu tiên Claude trả về sau khi đã kiểm tra chéo." },
    { ten: "keHoach", nhan: "Kế hoạch chăm sóc Ngày 1 đến Ngày 7", kieu: "textarea", batBuoc: true },
    { ten: "tinNhan", nhan: "3 tin nhắn Zalo đã soạn", kieu: "textarea", batBuoc: true },
    { ten: "canXacMinh", nhan: "Thông tin còn thiếu cần xác minh", kieu: "textarea" },
    { ten: "viecLamNgay", nhan: "Một hành động tôi làm ngay", kieu: "text" },
    { ten: "soat12Ma", nhan: "Đủ 12 mã KH01–KH12, không thêm khách hàng", kieu: "checkbox" },
    { ten: "soatKH12", nhan: "KH12 không nằm trong danh sách liên hệ; KH04 không bị thúc ép", kieu: "checkbox" },
    { ten: "soatKhongBia", nhan: "Không có giá, nhu cầu, doanh thu hay lời hứa tự bịa", kieu: "checkbox" },
  ],
  SP02: [
    { ten: "toiLaAi", nhan: "Tôi là ai / nghề nghiệp", kieu: "text" },
    { ten: "phucVuAi", nhan: "Tôi phục vụ ai", kieu: "text" },
    { ten: "giaTri", nhan: "Tôi bán/cung cấp giá trị gì", kieu: "text" },
    { ten: "khachHayHoi", nhan: "Khách hàng hay hỏi điều gì", kieu: "text" },
    { ten: "khongDuocDoan", nhan: "Điều AI không được tự đoán", kieu: "text" },
    { ten: "viecMoiTuan", nhan: "Công việc muốn AI hỗ trợ mỗi tuần", kieu: "text" },
    { ten: "cachTrinhBay", nhan: "Cách tôi muốn AI trình bày", kieu: "text" },
    { ten: "huongDan", nhan: "Hướng dẫn dự án (Project Instructions) tôi đã dán vào Claude", kieu: "textarea", batBuoc: true },
    { ten: "cauThu", nhan: "Câu tôi đã thử hỏi trợ lý", kieu: "text", batBuoc: true, goiY: "Ví dụ: Tôi nên ưu tiên công việc nào hôm nay…" },
    { ten: "ghiChuThu", nhan: "Trợ lý trả lời ra sao, tôi đã sửa hướng dẫn chỗ nào", kieu: "textarea" },
  ],
  SP03: [
    { ten: "nganh", nhan: "Ngành nghề chính", kieu: "text" },
    { ten: "khachMucTieu", nhan: "Khách hàng mục tiêu", kieu: "text" },
    { ten: "vanDe", nhan: "Vấn đề tôi giải quyết", kieu: "text" },
    { ten: "diemManh", nhan: "Hai điểm mạnh có bằng chứng", kieu: "textarea" },
    { ten: "dinhVi", nhan: "Một câu định vị dễ nhớ", kieu: "text", batBuoc: true },
    { ten: "gioiThieu", nhan: "Đoạn giới thiệu 70–100 chữ", kieu: "textarea", batBuoc: true, dem: { min: 70, max: 100 } },
    { ten: "loi30s", nhan: "Lời giới thiệu khoảng 30 giây", kieu: "textarea", batBuoc: true },
  ],
  SP04: [
    { ten: "cauLenh", nhan: "Câu lệnh chỉnh ảnh tôi đã dùng (hoặc sẽ dùng sau lớp)", kieu: "textarea", goiY: "Có ảnh đã chỉnh hoặc có câu lệnh là đủ." },
    { ten: "ghiChu", nhan: "Ghi chú (ảnh gốc ở đâu, cần chỉnh thêm gì)", kieu: "textarea" },
    { ten: "soatKhuonMat", nhan: "Khuôn mặt vẫn giống người thật, không thêm/mất chi tiết", kieu: "checkbox" },
    { ten: "soatNen", nhan: "Ánh sáng, nền dễ nhìn khi thu nhỏ; trang phục hợp chuyên môn", kieu: "checkbox" },
  ],
};

export const demChu = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
