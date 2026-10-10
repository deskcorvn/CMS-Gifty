import { db } from "./db";
import { taoLinkDangNhap } from "./dang-nhap";
import { emailKichHoat, guiEmailChiTiet, type KetQuaEmail } from "./email";

/** Gửi email kèm link vào học cho học viên vừa được kích hoạt. Gọi SAU khi transaction đã commit. */
export async function guiEmailKichHoat(hocVienId: string): Promise<KetQuaEmail> {
  const [hv] = await db()<{ email: string; ho_ten: string }[]>`select email, ho_ten from hoc_vien where id = ${hocVienId}`;
  if (!hv) return { ok: false, loi: "Không có học viên" };
  const link = await taoLinkDangNhap(hocVienId, 60 * 24 * 14);
  const m = emailKichHoat(hv.ho_ten, link);
  return guiEmailChiTiet(hv.email, m.tieuDe, m.html, m.vanBan);
}
