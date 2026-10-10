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
  noiDungHtml: string;
  buoc: Buoc[];
};

export type SanPhamKhoa = { ma: MaSanPham; ten: string; dieuKien: string; chang: number };
export type MaSanPham = "SP01" | "SP02" | "SP03" | "SP04";

export type KhoaHoc = {
  ten: string;
  tieuDePhu: string;
  moTa: string;
  camKet: string;
  hocPhi: number;
  thoiLuongPhut: number;
  phienBanGiaoTrinh: string;
  lop: { ngay: string; gio: string; thu: string; diaDiem: string };
  doiTuong: string;
  khongThuoc: string;
  sanPham: SanPhamKhoa[];
  chuanBi: string[];
  chungChi: { danhHieu: string; nguoiKy: string; chucDanh: string; donVi: string };
  video: { tieuDe: string; url: string };
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
export const timSanPham = (ma: string) => khoaHoc.sanPham.find((s) => s.ma === ma);
export const timNguon = (ma: string) => khoaHoc.nguon.find((n) => n.ma === ma);

export const dinhDangTien = (n: number) => `${n.toLocaleString("vi-VN")}đ`;

/** "14:00 Thứ Tư, 21/10/2026" */
export function nhanLichHoc() {
  const [y, m, d] = khoaHoc.lop.ngay.split("-");
  return `${khoaHoc.lop.gio} ${khoaHoc.lop.thu}, ${d}/${m}/${y}`;
}

export const tatCaPrompt = dsChang.flatMap((c) =>
  c.buoc.filter((b) => b.prompt).map((b) => ({ chang: c.so, tenChang: c.tieuDe, buoc: b })),
);
