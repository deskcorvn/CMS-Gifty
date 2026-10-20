import data from "@/generated/khoa-hoc.json";

export type Buoc = {
  id: string;
  tieuDe: string;
  huongDan: string;
  prompt: string;
  ketQua: string;
  neuKhongDuoc: string;
};

export type Chang = {
  so: number;
  slug: string;
  tieuDe: string;
  phut: number;
  mucTieu: string;
  ghiNho: string;
  sanPham: string[];
  nguon: string[];
  coVideo: boolean;
  /** Video bài học của chặng (giáo trình v2.1): chiếu tại lớp, học viên xem lại trên trang học. */
  video: VideoBai | null;
  noiDungHtml: string;
  buoc: Buoc[];
};

export type VideoBai = { tieuDe: string; url: string };

export type LoTrinh = {
  dich: string;
  video: VideoBai | null;
  phan: { ten: string; moTa: string; chang: number[] }[];
};

export type SanPhamKhoa = {
  ma: MaSanPham;
  ten: string;
  dieuKien: string;
  chang: number;
  loiIch: string;
  tuyChon: boolean;
};
export type MaSanPham = "SP01" | "SP02" | "SP03" | "SP04";

export type KhoaHoc = {
  ten: string;
  tieuDePhu: string;
  moTa: string;
  camKet: string;
  giangVien: {
    ten: string;
    chucDanh: string;
    kinhNghiem: string;
    anh: string;
    nguon: string;
  };
  hocPhi: number;
  thoiLuongPhut: number;
  soCho: number;
  lienHe: { dienThoai: string };
  nhomZalo: { link: string };
  ketQuaMau: { anh: string; chuThich: string }[];
  phienBanGiaoTrinh: string;
  lop: { ngay: string; gio: string; thu: string; diaDiem: string };
  doiTuong: string;
  khongThuoc: string;
  sanPham: SanPhamKhoa[];
  chuanBi: string[];
  chungChi: {
    danhHieu: string;
    nguoiKy: string;
    chucDanh: string;
    donVi: string;
  };
  video: { tieuDe: string; url: string };
  loTrinh: LoTrinh | null;
  cauChot: string;
  ngayRaSoatNguon: string;
  nguon: { ma: string; ten: string; url: string }[];
};

export const khoaHoc = data.khoaHoc as KhoaHoc;
export const dsChang = data.chang as Chang[];
export const MA_SAN_PHAM: MaSanPham[] = ["SP01", "SP02", "SP03", "SP04"];
export const tatCaBuocId = dsChang.flatMap((c) => c.buoc.map((b) => b.id));
export const tongSoBuoc = tatCaBuocId.length;

export const timChang = (so: number) => dsChang.find((c) => c.so === so);
export const timSanPham = (ma: string) =>
  khoaHoc.sanPham.find((s) => s.ma === ma);
export const timNguon = (ma: string) => khoaHoc.nguon.find((n) => n.ma === ma);

/** Video tự host trong public/video có ảnh bìa cùng tên (.jpg) để chưa bấm phát vẫn thấy tiêu đề. */
export const anhBia = (url: string) => (/^\/video\/[\w-]+\.mp4$/.test(url) ? url.replace(/\.mp4$/, ".jpg") : undefined);

export const dinhDangTien = (n: number) => `${n.toLocaleString("vi-VN")}đ`;

/** "0913 332 282" để dễ đọc; link Zalo và tel dùng số liền. */
export const soLienHe = khoaHoc.lienHe.dienThoai.replace(/^(\d{4})(\d{3})(\d{3})$/, "$1 $2 $3");
export const linkZalo = `https://zalo.me/${khoaHoc.lienHe.dienThoai}`;

/** Giờ bắt đầu lớp dạng ISO có múi giờ Việt Nam, cho JSON-LD. */
export const batDauLop = `${khoaHoc.lop.ngay}T${khoaHoc.lop.gio}:00+07:00`;

/** "14:00 Thứ Tư, 21/10/2026" */
export function nhanLichHoc() {
  const [y, m, d] = khoaHoc.lop.ngay.split("-");
  return `${khoaHoc.lop.gio} ${khoaHoc.lop.thu}, ${d}/${m}/${y}`;
}

export const tatCaPrompt = dsChang.flatMap((c) =>
  c.buoc
    .filter((b) => b.prompt)
    .map((b) => ({ chang: c.so, tenChang: c.tieuDe, buoc: b })),
);
