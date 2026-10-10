/**
 * POST /api/sepay/webhook — SePay báo khi có tiền vào. Cấu hình trên SePay: Bảo mật = API Key,
 * key trùng SEPAY_WEBHOOK_API_KEY. Khác bản cũ của giftyid và PTI: chưa đặt key thì TỪ CHỐI (không cho qua),
 * và so key bằng timingSafeEqual.
 */
import { bangNhau } from "@/lib/bao-mat";
import { db } from "@/lib/db";
import { traJson } from "@/lib/http";
import { guiEmailKichHoat } from "@/lib/sau-thanh-toan";
import { xuLyGiaoDich, type PayloadSePay } from "@/lib/thanh-toan";

function xacThuc(req: Request): string {
  const keys = [process.env.SEPAY_WEBHOOK_API_KEY, process.env.SEPAY_WEBHOOK_API_KEY_MOI]
    .map((k) => String(k ?? "").trim())
    .filter(Boolean);
  if (!keys.length) return "Máy chủ chưa đặt SEPAY_WEBHOOK_API_KEY.";
  const h = (req.headers.get("authorization") || "").trim();
  if (!h) return 'Thiếu header Authorization: trên SePay chọn Bảo mật = API Key.';
  const key = (h.match(/^Apikey\s+(.+)$/i)?.[1] ?? "").trim();
  if (!key) return 'Authorization không đúng dạng "Apikey <key>".';
  return keys.some((k) => bangNhau(k, key)) ? "" : "API Key không khớp.";
}

export async function POST(req: Request) {
  const loi = xacThuc(req);
  if (loi) {
    console.warn(`[webhook] từ chối: ${loi}`);
    return traJson(401, { success: false, error: "Unauthorized", ly_do: loi });
  }
  let p: PayloadSePay;
  try {
    p = await req.json();
  } catch {
    return traJson(400, { success: false, error: "Payload không hợp lệ." });
  }
  // Chỉ xử lý tiền VÀO; loại khác vẫn trả 200 để SePay khỏi gửi lại.
  if (p.transferType && p.transferType !== "in") return traJson(200, { success: true, skipped: "not incoming" });
  const soTien = Math.round(Number(p.transferAmount ?? p.amount ?? 0));
  if (!Number.isFinite(soTien) || soTien <= 0) return traJson(200, { success: true, skipped: "invalid amount" });

  try {
    const kq = await db().begin((tx) => xuLyGiaoDich(tx, p));
    if ("kichHoatMoi" in kq && kq.kichHoatMoi) await guiEmailKichHoat(kq.kichHoatMoi);
    return traJson(200, { success: true, ...kq });
  } catch (err) {
    console.error("[webhook]", err);
    // 500 để SePay gửi lại; khóa chống trùng bảo đảm không cộng tiền hai lần.
    return traJson(500, { success: false, error: "Lỗi hệ thống." });
  }
}
