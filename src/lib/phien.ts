import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "./db";
import { ky, moKy } from "./bao-mat";

const COOKIE_HV = "hv";
const COOKIE_DON = "don_cho";
const TUOI_PHIEN = 60 * 60 * 24 * 120; // 120 ngày: còn tra cứu được thư viện sau lớp

const tuyChon = (maxAge: number) => ({
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  maxAge,
  path: "/",
});

export type HocVien = {
  id: string;
  email: string;
  ho_ten: string;
  sdt: string | null;
  kich_hoat_at: Date;
};

export async function datPhien(hocVienId: string) {
  (await cookies()).set(COOKIE_HV, ky({ id: hocVienId, iat: Date.now() }), tuyChon(TUOI_PHIEN));
}

export async function xoaPhien() {
  (await cookies()).set(COOKIE_HV, "", tuyChon(0));
}

/** Học viên đang đăng nhập và đã được kích hoạt; null nếu không. */
export async function hocVienHienTai(): Promise<HocVien | null> {
  const p = moKy<{ id: string; iat: number }>((await cookies()).get(COOKIE_HV)?.value);
  if (!p?.id || Date.now() - p.iat > TUOI_PHIEN * 1000) return null;
  const [hv] = await db()<HocVien[]>`
    select id, email, ho_ten, sdt, kich_hoat_at from hoc_vien where id = ${p.id} and kich_hoat_at is not null
  `;
  return hv ?? null;
}

export async function batBuocHocVien() {
  const hv = await hocVienHienTai();
  if (!hv) redirect("/dang-nhap");
  return hv;
}

/** Đánh dấu trình duyệt vừa tạo đơn: trả đủ tiền thì chính trình duyệt này được vào học luôn. */
export async function ghiDonCho(donId: string) {
  (await cookies()).set(COOKIE_DON, ky({ don: donId }), tuyChon(60 * 60 * 24 * 30));
}

export async function donChoCuaTrinhDuyet() {
  return moKy<{ don: string }>((await cookies()).get(COOKIE_DON)?.value)?.don ?? null;
}
