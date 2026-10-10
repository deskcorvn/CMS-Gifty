import { db } from "./db";
import { emailChungChi, guiEmail } from "./email";
import { diaChiSite } from "./dang-nhap";

const BANG = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";

/** Mã chứng chỉ dạng GT-2026-7K3MQ: năm cấp + 5 ký tự ngẫu nhiên (không đoán được để dò danh sách). */
export function sinhMaChungChi(nam = new Date().getFullYear()) {
  let s = "";
  for (let i = 0; i < 5; i++) s += BANG[Math.floor(Math.random() * BANG.length)];
  return `GT-${nam}-${s}`;
}

export const linkChungChi = (ma: string) => `${diaChiSite()}/chung-nhan/${ma}`;

export type ChungChiCongKhai = { ma: string; ho_ten: string; cap_at: Date; thu_hoi_at: Date | null; ly_do_thu_hoi: string | null };

export async function docChungChi(ma: string) {
  if (!/^GT-\d{4}-[0-9A-Z]{5}$/.test(ma)) return null;
  const [cc] = await db()<ChungChiCongKhai[]>`
    select ma, ho_ten, cap_at, thu_hoi_at, ly_do_thu_hoi from chung_chi where ma = ${ma}
  `;
  return cc ?? null;
}

export const ngayVN = (d: Date) =>
  new Intl.DateTimeFormat("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", day: "2-digit", month: "2-digit", year: "numeric" }).format(d);

/** Cấp chứng chỉ (một học viên một chứng chỉ) và gửi email. Đã có thì trả lại mã cũ, không gửi lại email. */
export async function capChungChi(hv: { id: string; email: string }, hoTen: string) {
  const [co] = await db()<{ ma: string }[]>`select ma from chung_chi where hoc_vien_id = ${hv.id}`;
  if (co) return co.ma;
  for (let lan = 0; lan < 5; lan++) {
    const [r] = await db()<{ ma: string }[]>`
      insert into chung_chi (ma, hoc_vien_id, ho_ten) values (${sinhMaChungChi()}, ${hv.id}, ${hoTen})
      on conflict do nothing returning ma
    `;
    if (r) {
      const m = emailChungChi(hoTen, linkChungChi(r.ma));
      await guiEmail(hv.email, m.tieuDe, m.html, m.vanBan);
      return r.ma;
    }
    // Có thể vừa cấp ở tab khác (unique hoc_vien_id) → trả lại mã đó.
    const [vua] = await db()<{ ma: string }[]>`select ma from chung_chi where hoc_vien_id = ${hv.id}`;
    if (vua) return vua.ma;
  }
  return null;
}
