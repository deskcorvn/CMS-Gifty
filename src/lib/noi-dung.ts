import data from "@/generated/khoa-hoc.json";

export type Buoc = {
  id: string;
  tieuDe: string;
  huongDan: string;
  prompt: string;
  ketQua: string;
  neuKhongDuoc: string;
  /** Video minh họa không lời (giao diện mô phỏng) cho bước cần gói trả phí, skill hoặc connector. */
  minhHoa: MinhHoa[];
};

export type MinhHoa = { tieuDe: string; video: string };
/** Ảnh bìa của video minh họa: cùng tên, đuôi .jpg. */
export const anhMinhHoa = (video: string) => video.replace(/\.mp4$/, ".jpg");

export type Chang = {
  so: number;
  slug: string;
  tieuDe: string;
  /** Nhãn hiển thị: "Chặng 1"… hoặc "Thực hành thêm", "Chốt lại". */
  nhan: string;
  phut: number;
  mucTieu: string;
  ghiNho: string;
  sanPham: string[];
  nguon: string[];
  coVideo: boolean;
  /** Màn trình chiếu của chặng (giáo trình v3.0): giảng viên chiếu và đọc theo phụ đề. */
  man: Man[];
  noiDungHtml: string;
  buoc: Buoc[];
};

/** Một màn trình chiếu. "loi" là phụ đề: mỗi phần tử là một nhịp đọc, bấm tiếp để sang nhịp sau. */
export type Man = { kieu: string; loi: string[]; [k: string]: unknown };

export type LoTrinh = {
  dich: string;
  man: Man[];
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
    .map((b) => ({ chang: c.so, nhanChang: c.nhan, tenChang: c.tieuDe, buoc: b })),
);
