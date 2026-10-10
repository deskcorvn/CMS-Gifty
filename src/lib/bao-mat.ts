import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export function bangNhau(a: string, b: string) {
  const x = Buffer.from(String(a));
  const y = Buffer.from(String(b));
  return x.length === y.length && timingSafeEqual(x, y);
}

export const bam = (s: string) => createHash("sha256").update(s).digest("hex");
export const chuoiNgauNhien = (bytes = 32) => randomBytes(bytes).toString("base64url");

function biMat() {
  const s = process.env.SESSION_SECRET;
  if (!s || s.length < 32) throw new Error("SESSION_SECRET phải là chuỗi ngẫu nhiên ≥ 32 ký tự");
  return s;
}

/** Ký một payload JSON thành "payload.chữ-ký" (base64url). */
export function ky(obj: object) {
  const p = Buffer.from(JSON.stringify(obj)).toString("base64url");
  return `${p}.${createHmac("sha256", biMat()).update(p).digest("base64url")}`;
}

export function moKy<T>(token: string | undefined): T | null {
  if (!token) return null;
  const [p, s] = token.split(".");
  if (!p || !s) return null;
  try {
    if (!bangNhau(s, createHmac("sha256", biMat()).update(p).digest("base64url"))) return null;
    return JSON.parse(Buffer.from(p, "base64url").toString("utf8")) as T;
  } catch {
    return null;
  }
}
