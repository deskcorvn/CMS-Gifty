import nodemailer from "nodemailer";
import { ghiCaiDat } from "./cai-dat";
import { khoaHoc, nhanLichHoc, soLienHe } from "./noi-dung";

/**
 * Gửi email. Ưu tiên SMTP_HOST (bất kỳ nhà cung cấp nào); không có thì dùng Gmail EMAIL_USER/EMAIL_PASS
 * (App Password) như giftyid. Chưa cấu hình gì thì không gửi: bản dev in link ra console, bản thật trả false
 * để giao diện nhắc học viên liên hệ — quản trị lấy được link đăng nhập trong trang /quan-tri.
 */
function taoTransport() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: { user: process.env.SMTP_USER?.trim(), pass: process.env.SMTP_PASS },
    });
  }
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: "gmail",
      // Google hiển thị App Password thành 4 cụm có dấu cách ("abcd efgh ijkl mnop"); bỏ dấu cách cho chắc.
      auth: { user: process.env.EMAIL_USER.trim(), pass: process.env.EMAIL_PASS.replace(/\s+/g, "") },
    });
  }
  return null;
}

export const emailDaCauHinh = () => Boolean(process.env.SMTP_HOST || (process.env.EMAIL_USER && process.env.EMAIL_PASS));

const nguoiGui = () => process.env.MAIL_FROM || `Gifty Tech <${(process.env.SMTP_USER || process.env.EMAIL_USER || "").trim()}>`;

export type KetQuaEmail = { ok: boolean; loi?: string };

/** Gửi và trả lý do lỗi (không chứa mật khẩu). Ghi lần gửi gần nhất vào cai_dat để trang quản trị hiện ra. */
export async function guiEmailChiTiet(den: string, tieuDe: string, html: string, vanBan: string): Promise<KetQuaEmail> {
  const t = taoTransport();
  let kq: KetQuaEmail;
  if (!t) {
    if (process.env.NODE_ENV !== "production") console.log(`[email:dev] → ${den} | ${tieuDe}\n${vanBan}`);
    kq = { ok: false, loi: "Chưa cấu hình EMAIL_USER/EMAIL_PASS hoặc SMTP_*" };
  } else {
    try {
      await t.sendMail({ from: nguoiGui(), to: den, subject: tieuDe, html, text: vanBan });
      kq = { ok: true };
    } catch (err) {
      const e = err as { message?: string; code?: string; responseCode?: number };
      console.error("[email] gửi thất bại", err);
      kq = { ok: false, loi: [e.code, e.responseCode, e.message].filter(Boolean).join(" · ").slice(0, 400) };
    }
  }
  await ghiCaiDat("email_gan_nhat", { ...kq, den, tieuDe, luc: new Date().toISOString() }).catch(() => {});
  return kq;
}

export async function guiEmail(den: string, tieuDe: string, html: string, vanBan: string) {
  return (await guiEmailChiTiet(den, tieuDe, html, vanBan)).ok;
}

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

function khung(noiDung: string) {
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#1a2233;line-height:1.6">
  <div style="background:#0f1f33;color:#fff;padding:20px 24px;border-radius:10px 10px 0 0">
    <div style="font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#ffd9a8">Gifty Tech</div>
    <div style="font-size:20px;font-weight:bold;margin-top:4px">${esc(khoaHoc.ten)}</div>
  </div>
  <div style="background:#fff;border:1px solid #dce6ef;border-top:0;padding:24px;border-radius:0 0 10px 10px">${noiDung}</div>
</div>`;
}

const nut = (href: string, nhan: string) =>
  `<p style="margin:24px 0"><a href="${esc(href)}" style="background:#e08a2b;color:#1a1205;padding:12px 22px;border-radius:8px;font-weight:bold;text-decoration:none">${esc(nhan)}</a></p>`;

export function emailKichHoat(hoTen: string, link: string, maDangKy: string | null = null) {
  const diaDiem = khoaHoc.lop.diaDiem || "Gifty Tech sẽ gửi địa điểm trong email nhắc lịch.";
  const chuanBi = khoaHoc.chuanBi.map((c) => `<li>${esc(c)}</li>`).join("");
  return {
    tieuDe: `Đăng ký thành công — ${khoaHoc.ten} (${nhanLichHoc()})`,
    html: khung(`<p>Chào ${esc(hoTen)},</p>
<p>Anh chị đã <b>đăng ký thành công</b> lớp <b>${esc(khoaHoc.ten)}: ${esc(khoaHoc.tieuDePhu)}</b>. Gifty Tech đã nhận đủ học phí.</p>
<p><b>Lịch học:</b> ${esc(nhanLichHoc())} · ${khoaHoc.thoiLuongPhut} phút<br><b>Địa điểm:</b> ${esc(diaDiem)}</p>
${maDangKy ? `<p style="background:#fff7ec;border:1px solid #f0d8b9;border-radius:8px;padding:12px 16px"><b>Mã đăng ký: ${esc(maDangKy)}</b><br><span style="font-size:13px">Lưu lại mã này. Khi không nhận được email đăng nhập, anh chị đăng nhập bằng mã đăng ký. Mã cũng nằm trong nội dung chuyển khoản ở app ngân hàng.</span></p>` : ""}
<p>Nội dung khóa học sẽ mở khi lớp bắt đầu. Trước đó, anh chị vào trang học để xem lịch và danh sách chuẩn bị.</p>
<p>${khoaHoc.nhomZalo.link ? `Nhóm Zalo của lớp: <a href="${esc(khoaHoc.nhomZalo.link)}">bấm để vào nhóm</a>.` : "Gifty Tech sẽ mời anh chị vào nhóm Zalo của lớp qua số điện thoại đã đăng ký."} Cần hỏi gì, nhắn Zalo <b>${esc(soLienHe)}</b>.</p>
${nut(link, "Vào trang học của tôi")}
<p style="font-size:13px;color:#5b6b80">Link dùng được một lần trong 14 ngày. Hết hạn thì vào trang đăng nhập, nhập email này để nhận link mới.</p>
<p><b>Chuẩn bị trước buổi học:</b></p><ul>${chuanBi}</ul>`),
    vanBan: `Chào ${hoTen},\nAnh chị đã đăng ký thành công ${khoaHoc.ten}: ${khoaHoc.tieuDePhu}. Gifty Tech đã nhận đủ học phí.\nLịch học: ${nhanLichHoc()}\nĐịa điểm: ${diaDiem}\n${maDangKy ? `Mã đăng ký: ${maDangKy} (lưu lại để đăng nhập khi cần)\n` : ""}Nội dung khóa học mở khi lớp bắt đầu.\n${khoaHoc.nhomZalo.link ? `Nhóm Zalo của lớp: ${khoaHoc.nhomZalo.link}` : "Gifty Tech sẽ mời anh chị vào nhóm Zalo của lớp qua số điện thoại đã đăng ký."}\nCần hỏi gì, nhắn Zalo ${soLienHe}.\nVào trang học: ${link}\n\nChuẩn bị:\n- ${khoaHoc.chuanBi.join("\n- ")}`,
  };
}

export function emailThu() {
  return {
    tieuDe: `Email thử — ${khoaHoc.ten}`,
    html: khung(`<p>Đây là email thử từ trang quản trị. Nhận được email này nghĩa là cấu hình gửi email đã đúng.</p>`),
    vanBan: "Đây là email thử từ trang quản trị. Nhận được email này nghĩa là cấu hình gửi email đã đúng.",
  };
}

export function emailDangNhap(hoTen: string, link: string) {
  return {
    tieuDe: `Link đăng nhập — ${khoaHoc.ten}`,
    html: khung(`<p>Chào ${esc(hoTen)},</p><p>Bấm nút dưới đây để vào trang học. Link dùng một lần, hết hạn sau 30 phút.</p>
${nut(link, "Đăng nhập")}
<p style="font-size:13px;color:#5b6b80">Không phải anh chị yêu cầu? Bỏ qua email này, tài khoản vẫn an toàn.</p>`),
    vanBan: `Chào ${hoTen},\nLink đăng nhập (dùng một lần, hết hạn sau 30 phút): ${link}`,
  };
}

export function emailChungChi(hoTen: string, link: string) {
  return {
    tieuDe: `Chứng chỉ ${khoaHoc.chungChi.danhHieu} — ${khoaHoc.ten}`,
    html: khung(`<p>Chúc mừng ${esc(hoTen)},</p>
<p>Anh chị đã hoàn thành <b>${esc(khoaHoc.ten)}</b> và nhận chứng chỉ <b>${esc(khoaHoc.chungChi.danhHieu)}</b>.</p>
${nut(link, "Xem và tải chứng chỉ")}
<p style="font-size:13px;color:#5b6b80">Trang chứng chỉ công khai, có mã QR để người khác kiểm tra. Bốn sản phẩm và câu lệnh của anh chị vẫn ở mục “Kết quả của tôi”.</p>`),
    vanBan: `Chúc mừng ${hoTen}, anh chị đã nhận chứng chỉ ${khoaHoc.chungChi.danhHieu}: ${link}`,
  };
}
