import { db } from "@/lib/db";
import { khoaHoc } from "@/lib/noi-dung";

export type ChoNgoi = { toiDa: number; daDung: number; con: number };

/** Chỗ đã dùng = học viên đã kích hoạt (trả đủ tiền hoặc kích hoạt tay), trừ tài khoản thử. */
export async function tinhChoNgoi(): Promise<ChoNgoi> {
  const [r] = await db()<{ n: number }[]>`
    select count(*)::int as n from hoc_vien where kich_hoat_at is not null and not la_thu
  `;
  const toiDa = khoaHoc.soCho;
  return { toiDa, daDung: r.n, con: Math.max(0, toiDa - r.n) };
}
