import { db } from "./db";
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
