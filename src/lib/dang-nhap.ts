import { db } from "./db";
import { bam, chuoiNgauNhien } from "./bao-mat";

export const diaChiSite = () => (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");

/** Tạo link đăng nhập dùng một lần. Link trong email kích hoạt sống lâu hơn vì lớp học còn vài ngày nữa. */
export async function taoLinkDangNhap(hocVienId: string, phutHetHan = 30) {
  const token = chuoiNgauNhien(32);
  await db()`
    insert into ma_dang_nhap (token_hash, hoc_vien_id, het_han)
    values (${bam(token)}, ${hocVienId}, now() + ${`${phutHetHan} minutes`}::interval)
  `;
  // Link mở trang xác nhận (không đăng nhập ngay bằng GET): trình quét link của email
  // (Outlook Safe Links, Gmail) mở trước sẽ không đốt mất token của học viên.
  return `${diaChiSite()}/xac-thuc?t=${encodeURIComponent(token)}`;
}

/** Đổi token lấy id học viên; token chỉ dùng được một lần và trong hạn. */
export async function dungToken(token: string) {
  if (!token || token.length > 200) return null;
  const [r] = await db()<{ hoc_vien_id: string }[]>`
    update ma_dang_nhap set da_dung = now()
    where token_hash = ${bam(token)} and da_dung is null and het_han > now()
    returning hoc_vien_id
  `;
  return r?.hoc_vien_id ?? null;
}
