import { NextResponse } from "next/server";

export const traJson = (code: number, body: unknown) => NextResponse.json(body, { status: code });

export async function docJson<T = Record<string, unknown>>(req: Request): Promise<T | null> {
  try {
    const b = await req.json();
    return b && typeof b === "object" ? (b as T) : null;
  } catch {
    return null;
  }
}

export const chuoiSach = (v: unknown, toiDa = 200) => (typeof v === "string" ? v.trim().slice(0, toiDa) : "");
export const emailHopLe = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e) && e.length <= 200;
export const sdtSach = (s: string) => s.replace(/[^0-9+]/g, "").slice(0, 15);
