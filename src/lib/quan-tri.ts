import { cookies } from "next/headers";
import { bangNhau, ky, moKy } from "./bao-mat";

const COOKIE = "qt";
const TUOI = 60 * 60 * 12;

/** Khóa quản trị: ADMIN_KEY trong env. Thiếu key là khóa cửa luôn (không bao giờ "chưa đặt thì cho qua"). */
export function khoaDung(khoa: string) {
  const k = process.env.ADMIN_KEY;
  return Boolean(k && k.length >= 16 && khoa && bangNhau(khoa, k));
}

export async function datPhienQuanTri() {
  (await cookies()).set(COOKIE, ky({ qt: 1, iat: Date.now() }), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: TUOI,
    path: "/",
  });
}

export async function xoaPhienQuanTri() {
  (await cookies()).set(COOKIE, "", { maxAge: 0, path: "/" });
}

export async function laQuanTri() {
  if (!process.env.ADMIN_KEY) return false;
  const p = moKy<{ qt: number; iat: number }>((await cookies()).get(COOKIE)?.value);
  return Boolean(p?.qt && Date.now() - p.iat < TUOI * 1000);
}
