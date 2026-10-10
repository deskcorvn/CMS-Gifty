import { db } from "./db";
import { guiEmailKichHoat } from "./sau-thanh-toan";
import { layGiaoDichVao, thanhPayload } from "./sepay";
import { taiKhoanNhan, xuLyGiaoDich } from "./thanh-toan";

const CHO_MS = 3 * 60e3; // giao dịch vừa xảy ra có thể đang trên đường tới webhook

/**
 * Đối soát SePay ↔ hệ thống (theo PTI /api/doi-soat): giao dịch SePay có mà hệ thống chưa có (webhook lỡ)
 * thì chạy lại đúng quy trình webhook. Giao dịch không có mã tham chiếu không tự bổ sung (không soát trùng được).
 */
export async function doiSoat(soNgay = 3) {
  const tuNgay = new Date(Date.now() + 7 * 3600e3 - (soNgay - 1) * 86400e3).toISOString().slice(0, 10);
  const tk = taiKhoanNhan().soTk.toUpperCase();
  const ds = (await layGiaoDichVao(tuNgay)).filter(
    (t) =>
      t.transfer_type === "in" &&
      Number(t.amount_in) > 0 &&
      (!tk || [t.account_number, t.va].some((v) => String(v ?? "").toUpperCase() === tk)),
  );
  const daCo = new Set(
    (await db()<{ tham_chieu: string }[]>`select tham_chieu from giao_dich where tham_chieu is not null`).map((r) => r.tham_chieu),
  );
  const boSung: { thamChieu: string; soTien: number; ketQua: string }[] = [];
  const khongThamChieu: { luc: string; soTien: number; noiDung: string }[] = [];
  for (const t of ds) {
    const luc = Date.parse(String(t.transaction_date).replace(" ", "T") + "+07:00");
    if (Number.isFinite(luc) && Date.now() - luc < CHO_MS) continue;
    if (!t.reference_number) {
      khongThamChieu.push({ luc: t.transaction_date, soTien: Number(t.amount_in), noiDung: t.transaction_content || "" });
      continue;
    }
    if (daCo.has(t.reference_number)) continue;
    const kq = await db().begin((tx) => xuLyGiaoDich(tx, thanhPayload(t)));
    if ("kichHoatMoi" in kq && kq.kichHoatMoi) await guiEmailKichHoat(kq.kichHoatMoi);
    boSung.push({
      thamChieu: t.reference_number,
      soTien: Number(t.amount_in),
      ketQua: "skipped" in kq ? `chưa khớp: ${kq.skipped}` : `khớp ${kq.ma}${kq.trangThai === "DA_DU" ? " · đủ tiền" : ""}`,
    });
  }
  return { tuNgay, tong: ds.length, boSung, khongThamChieu };
}
