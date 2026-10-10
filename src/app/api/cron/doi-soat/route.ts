import { bangNhau } from "@/lib/bao-mat";
import { doiSoat } from "@/lib/doi-soat";
import { traJson } from "@/lib/http";

export const maxDuration = 60;

/** Vercel Cron gọi kèm "Authorization: Bearer <CRON_SECRET>". Thiếu secret là từ chối. */
export async function GET(req: Request) {
  const s = process.env.CRON_SECRET;
  const h = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!s || !bangNhau(h, s)) return traJson(401, { ok: false });
  if (!process.env.SEPAY_API_TOKEN) return traJson(200, { ok: true, skipped: "Chưa đặt SEPAY_API_TOKEN" });
  try {
    return traJson(200, { ok: true, ...(await doiSoat(3)) });
  } catch (err) {
    console.error("[doi-soat]", err);
    return traJson(500, { ok: false, error: String(err) });
  }
}
