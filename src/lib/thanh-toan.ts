/**
 * Học phí chuyển khoản VietQR + SePay. Quy tắc khớp tiền chép từ PTI (deskcorvn/pti web/api/_lib/xu-ly-giao-dich.mjs):
 *   - Trùng sepay_id, hoặc trùng mã tham chiếu + số tiền + tài khoản nhận → bỏ qua (SePay gửi lại không cộng hai lần).
 *   - Nhiều mã trong một lần chuyển, không có mã, mã không có đơn, sai tài khoản → không cộng, để quản trị khớp tay.
 *   - Cộng dồn tiền; đủ thì đơn DA_DU và học viên được kích hoạt. Dư tiền chỉ ghi chú "THỪA", không tự hoàn.
 * Khác PTI: không tự đoán đơn cho khoản tiền không mã (lớp ít người, quản trị khớp tay nhanh hơn và chắc hơn).
 */
import type { Tx } from "./db";

export const TIEN_TO_MA = "GTAI";
const BANG_KY_TU = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // bỏ 0/O, 1/I cho dễ đọc khi gõ tay

export function sinhMa() {
  let s = "";
  for (let i = 0; i < 6; i++) s += BANG_KY_TU[Math.floor(Math.random() * BANG_KY_TU.length)];
  return TIEN_TO_MA + s;
}

// Cho phép dấu cách/chấm/gạch khi gõ tay ("gtai 7k-3mqp") và bóc đúng 6 ký tự khi ngân hàng dính chữ phía sau.
const RE_MA = new RegExp(`${TIEN_TO_MA}[\\s._-]*((?:[0-9A-Z][\\s._-]*){6})`, "g");

export type PayloadSePay = {
  id?: string | number | null;
  gateway?: string;
  transactionDate?: string;
  accountNumber?: string | null;
  subAccount?: string | null;
  code?: string | null;
  content?: string | null;
  description?: string | null;
  transferType?: string;
  transferAmount?: number | string;
  amount?: number | string;
  referenceCode?: string | null;
  [k: string]: unknown;
};

/** Mọi mã GTAI… khác nhau trong payload (field code, nội dung, mô tả). */
export function bocCacMa(p: PayloadSePay) {
  const ra: string[] = [];
  for (const v of [p.code, p.content, p.description]) {
    const s = String(v ?? "").toUpperCase();
    for (const m of s.matchAll(RE_MA)) {
      const ma = TIEN_TO_MA + m[1].replace(/[\s._-]/g, "");
      if (!ra.includes(ma)) ra.push(ma);
    }
  }
  return ra;
}

export function tinhTrangThai(daNhan: number, tongTien: number) {
  if (daNhan >= tongTien) return { trangThai: "DA_DU" as const, thua: daNhan - tongTien };
  return { trangThai: daNhan > 0 ? ("THIEU" as const) : ("CHO" as const), thua: 0 };
}

export function taiKhoanNhan() {
  return {
    nganHang: process.env.VIETQR_BANK?.trim() || "",
    // Tên hiển thị cho người chuyển khoản; VIETQR_BANK có thể là mã BIN (vd 970432) nên cần tên riêng.
    tenNganHang: process.env.VIETQR_BANK_NAME?.trim() || process.env.VIETQR_BANK?.trim() || "",
    soTk: process.env.VIETQR_ACCOUNT?.trim() || "",
    chuTk: process.env.VIETQR_NAME?.trim() || "",
    // Một số ngân hàng liên kết SePay qua VA bắt buộc tiền tố nội dung (vd "SEVQR").
    tienTo: process.env.VIETQR_PREFIX?.trim() || "",
  };
}

export const noiDungChuyenKhoan = (ma: string) => {
  const t = taiKhoanNhan().tienTo;
  return t ? `${t} ${ma}` : ma;
};

/** Ảnh VietQR: quét là tự điền số tiền và nội dung. Chưa cấu hình tài khoản thì trả null (không bao giờ dùng số dự phòng). */
export function qrUrl(ma: string, soTien: number) {
  const tk = taiKhoanNhan();
  if (!tk.nganHang || !tk.soTk) return null;
  return (
    `https://img.vietqr.io/image/${encodeURIComponent(tk.nganHang)}-${encodeURIComponent(tk.soTk)}-compact2.png` +
    `?amount=${soTien}&addInfo=${encodeURIComponent(noiDungChuyenKhoan(ma))}&accountName=${encodeURIComponent(tk.chuTk)}`
  );
}

/** Tiền có về đúng tài khoản in trên QR không. Payload không ghi tài khoản (giao dịch thử) thì không chặn. */
export function khopTaiKhoan(p: PayloadSePay) {
  const muc = taiKhoanNhan().soTk.replace(/\s+/g, "").toUpperCase();
  if (!muc) return true;
  const co = [p.subAccount, p.accountNumber].map((v) => String(v ?? "").replace(/\s+/g, "").toUpperCase()).filter(Boolean);
  return co.length === 0 || co.includes(muc);
}

type DonKhoa = { id: string; ma: string; hoc_vien_id: string; so_tien: number; da_nhan: number; ghi_chu: string | null; trang_thai: string };

export type KetQuaGiaoDich =
  | { skipped: string; ma?: string | null; giaoDichId?: number }
  | { ma: string; trangThai: "CHO" | "THIEU" | "DA_DU"; daNhan: number; soTien: number; thua: number; kichHoatMoi: string | null };

/** Cộng tiền vào đơn đã khóa (for update). Đủ tiền thì kích hoạt học viên; trả id học viên nếu vừa kích hoạt lần đầu. */
export async function congTienVaoDon(
  tx: Tx,
  don: DonKhoa,
  gdId: number,
  soTien: number,
  { ghiChuThem = "", lyDo = null as string | null } = {},
): Promise<KetQuaGiaoDich> {
  const daNhan = don.da_nhan + soTien;
  const { trangThai, thua } = tinhTrangThai(daNhan, don.so_tien);
  const ghiChu =
    [don.ghi_chu, ghiChuThem, thua > 0 ? `THỪA ${thua.toLocaleString("vi-VN")}đ` : ""].filter(Boolean).join(" | ") || null;

  await tx`
    update don_hang set da_nhan = ${daNhan}, trang_thai = ${trangThai}, ghi_chu = ${ghiChu},
      paid_at = case when ${trangThai} = 'DA_DU' then coalesce(paid_at, now()) else paid_at end
    where id = ${don.id}
  `;
  await tx`update giao_dich set da_khop = true, don_id = ${don.id}, ly_do = ${lyDo} where id = ${gdId}`;

  let kichHoatMoi: string | null = null;
  if (trangThai === "DA_DU") {
    const [hv] = await tx<{ id: string }[]>`
      update hoc_vien set kich_hoat_at = now(), nguon_kich_hoat = ${"chuyen_khoan:" + don.ma}
      where id = ${don.hoc_vien_id} and kich_hoat_at is null
      returning id
    `;
    kichHoatMoi = hv?.id ?? null;
  }
  return { ma: don.ma, trangThai, daNhan, soTien: don.so_tien, thua, kichHoatMoi };
}

/** Xử lý MỘT giao dịch tiền vào trong transaction đang mở. Dùng chung cho webhook và đối soát. */
export async function xuLyGiaoDich(tx: Tx, p: PayloadSePay): Promise<KetQuaGiaoDich> {
  const soTien = Math.round(Number(p.transferAmount ?? p.amount ?? 0));
  const sepayId = p.id != null && p.id !== "" ? String(p.id) : p.referenceCode ? String(p.referenceCode) : null;
  const thamChieu = p.referenceCode ? String(p.referenceCode) : null;
  const cacMa = bocCacMa(p);
  const ma = cacMa[0] ?? null;
  const noiDung = String(p.content ?? p.description ?? "").slice(0, 500);
  const tkNhan = String(p.subAccount || p.accountNumber || "").trim() || null;

  // Cùng một giao dịch có thể đến hai đường (webhook id số, đối soát id UUID) → khóa theo mã tham chiếu.
  if (thamChieu) {
    await tx`select pg_advisory_xact_lock(hashtext(${"giao_dich:" + thamChieu}))`;
    const [co] = await tx`
      select id from giao_dich
      where tham_chieu = ${thamChieu} and so_tien = ${soTien} and coalesce(tk_nhan, '') = ${tkNhan ?? ""}
      limit 1
    `;
    if (co) return { skipped: "duplicate" };
  }

  const [gd] = await tx<{ id: number }[]>`
    insert into giao_dich (sepay_id, tham_chieu, ma_ck, so_tien, noi_dung, tk_nhan, raw)
    values (${sepayId}, ${thamChieu}, ${ma}, ${soTien}, ${noiDung}, ${tkNhan}, ${tx.json(p as never)})
    on conflict (sepay_id) do nothing
    returning id
  `;
  if (!gd) return { skipped: "duplicate" };

  const deLai = async (lyDo: string) => {
    await tx`update giao_dich set ly_do = ${lyDo} where id = ${gd.id}`;
    return { skipped: lyDo, ma, giaoDichId: gd.id };
  };

  if (cacMa.length > 1) return deLai(`Nhiều mã trong một lần chuyển: ${cacMa.join(", ")}`);
  if (!ma) return deLai("Không thấy mã GTAI trong nội dung chuyển khoản");

  const [don] = await tx<DonKhoa[]>`
    select id, ma, hoc_vien_id, so_tien, da_nhan, ghi_chu, trang_thai from don_hang where ma = ${ma} for update
  `;
  if (!don) return deLai(`Mã ${ma} không có đơn`);
  if (don.trang_thai === "HUY") return deLai(`Đơn ${ma} đã hủy`);
  if (!khopTaiKhoan(p)) return deLai(`Tiền về tài khoản ${tkNhan}, khác tài khoản in trên QR`);

  return congTienVaoDon(tx, don, gd.id, soTien);
}
