/** SePay API v2, chỉ gọi phía server (token toàn quyền). Rút gọn từ PTI web/api/_lib/sepay.mjs. */
import type { PayloadSePay } from "./thanh-toan";

const BASE = "https://userapi.sepay.vn/v2";

export type GiaoDichSePay = {
  id: string | number;
  transaction_date: string;
  account_number?: string;
  va?: string;
  amount_in: string | number;
  transaction_content?: string;
  reference_number?: string;
  code?: string | null;
  transfer_type: string;
  bank_brand_name?: string;
};

const ngu = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function layGiaoDichVao(tuNgay: string, token = process.env.SEPAY_API_TOKEN || "") {
  if (!token) throw new Error("Chưa đặt SEPAY_API_TOKEN");
  const ds: GiaoDichSePay[] = [];
  for (let trang = 1; trang <= 20; trang++) {
    const r = await fetch(
      `${BASE}/transactions?transfer_type=in&transaction_date_from=${encodeURIComponent(tuNgay)}&per_page=100&page=${trang}`,
      { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" }, signal: AbortSignal.timeout(8000) },
    );
    const body = await r.json().catch(() => null);
    if (!r.ok || body?.status !== "success") throw new Error(`SePay ${r.status}: ${body?.message || "không đọc được phản hồi"}`);
    ds.push(...(body.data || []));
    if (!body.meta?.pagination?.has_more) break;
    await ngu(350); // SePay giới hạn 3 request/giây
  }
  return ds;
}

/** Giao dịch API → payload giống webhook để chạy lại đúng quy trình xử lý. */
export function thanhPayload(t: GiaoDichSePay): PayloadSePay {
  return {
    id: t.id != null ? String(t.id) : null,
    gateway: t.bank_brand_name || "",
    transactionDate: t.transaction_date,
    accountNumber: t.account_number || "",
    subAccount: t.va || "",
    code: t.code || null,
    content: t.transaction_content || "",
    transferType: "in",
    transferAmount: Number(t.amount_in || 0),
    referenceCode: t.reference_number || null,
    nguon: "doi_soat",
  };
}
