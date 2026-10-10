import { db } from "./db";
import { TIEN_TO_MA } from "./thanh-toan";

/** "gtai 9ld-thy" / "9LDTHY" → "GTAI9LDTHY". Trả "" nếu không giống mã đăng ký. */
export function chuanHoaMa(v: string) {
  let s = String(v || "").toUpperCase().replace(/[^0-9A-Z]/g, "");
  if (!s.startsWith(TIEN_TO_MA)) s = TIEN_TO_MA + s;
  return /^GTAI[0-9A-Z]{6}$/.test(s) ? s : "";
}

/** Mã đăng ký của học viên = mã chuyển khoản của đơn gần nhất (ưu tiên đơn đã đủ tiền). */
export async function maDangKyCua(hocVienId: string) {
  const [r] = await db()<{ ma: string }[]>`
    select ma from don_hang where hoc_vien_id = ${hocVienId}
    order by (trang_thai = 'DA_DU') desc, created_at desc limit 1
  `;
  return r?.ma ?? null;
}
