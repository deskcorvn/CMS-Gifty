import { db } from "./db";
import { MA_SAN_PHAM, tatCaBuocId, tongSoBuoc, type MaSanPham } from "./noi-dung";

/** Ô bắt buộc của từng sản phẩm. Không chấm điểm: chỉ cần đã điền là tính đã lưu. */
export const O_BAT_BUOC: Record<MaSanPham, string[][]> = {
  SP01: [["uuTien"], ["keHoach"], ["tinNhan"]],
  SP02: [["huongDan"], ["cauThu"]],
  SP03: [["dinhVi"], ["gioiThieu"], ["loi30s"]],
  // SP04: có ảnh đã chỉnh HOẶC có câu lệnh (hết lượt tạo ảnh miễn phí thì lưu câu lệnh, hoàn thiện sau).
  SP04: [["anhUrl", "cauLenh"]],
};

export function sanPhamDuDieuKien(ma: MaSanPham, duLieu: Record<string, unknown> | undefined) {
  if (!duLieu) return false;
  const co = (k: string) => typeof duLieu[k] === "string" && (duLieu[k] as string).trim().length > 0;
  return O_BAT_BUOC[ma].every((nhom) => nhom.some(co));
}

export type TinhTrang = {
  buocXong: Set<string>;
  soBuocXong: number;
  sanPham: Partial<Record<MaSanPham, Record<string, unknown>>>;
  sanPhamXong: MaSanPham[];
  duDieuKien: boolean;
  chungChi: { ma: string; ho_ten: string; cap_at: Date; thu_hoi_at: Date | null } | null;
};

export async function tinhTrangHocVien(hocVienId: string): Promise<TinhTrang> {
  const sql = db();
  const [buoc, sp, cc] = await Promise.all([
    sql<{ buoc_id: string }[]>`select buoc_id from tien_do where hoc_vien_id = ${hocVienId}`,
    sql<{ ma: MaSanPham; du_lieu: Record<string, unknown> }[]>`select ma, du_lieu from san_pham where hoc_vien_id = ${hocVienId}`,
    sql<{ ma: string; ho_ten: string; cap_at: Date; thu_hoi_at: Date | null }[]>`
      select ma, ho_ten, cap_at, thu_hoi_at from chung_chi where hoc_vien_id = ${hocVienId}`,
  ]);
  // Chỉ đếm bước còn trong nội dung hiện tại (bài bị sửa bớt bước thì bước cũ không làm lệch tiến độ).
  const hienCo = new Set(tatCaBuocId);
  const buocXong = new Set(buoc.map((b) => b.buoc_id).filter((id) => hienCo.has(id)));
  const sanPham = Object.fromEntries(sp.map((s) => [s.ma, s.du_lieu]));
  const sanPhamXong = MA_SAN_PHAM.filter((m) => sanPhamDuDieuKien(m, sanPham[m]));
  return {
    buocXong,
    soBuocXong: buocXong.size,
    sanPham,
    sanPhamXong,
    // Chốt 10/10/2026: xong 9 chặng là đủ; 4 sản phẩm là tùy chọn để học viên lưu lại tra cứu.
    duDieuKien: buocXong.size === tongSoBuoc,
    chungChi: cc[0] ?? null,
  };
}
