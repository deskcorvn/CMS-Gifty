import nodemailer from "nodemailer";
import { khoaHoc, nhanLichHoc } from "./noi-dung";

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
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
  }
  return null;
}

const nguoiGui = () => process.env.MAIL_FROM || `Gifty Tech <${process.env.SMTP_USER || process.env.EMAIL_USER}>`;

export async function guiEmail(den: string, tieuDe: string, html: string, vanBan: string) {
  const t = taoTransport();
  if (!t) {
    if (process.env.NODE_ENV !== "production") console.log(`[email:dev] → ${den} | ${tieuDe}\n${vanBan}`);
    return false;
  }
  try {
    await t.sendMail({ from: nguoiGui(), to: den, subject: tieuDe, html, text: vanBan });
    return true;
  } catch (err) {
    console.error("[email] gửi thất bại", err);
    return false;
  }
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

export function emailKichHoat(hoTen: string, link: string) {
  const diaDiem = khoaHoc.lop.diaDiem || "Gifty Tech sẽ gửi địa điểm trong email nhắc lịch.";
  const chuanBi = khoaHoc.chuanBi.map((c) => `<li>${esc(c)}</li>`).join("");
  return {
    tieuDe: `Đã nhận học phí — ${khoaHoc.ten} (${nhanLichHoc()})`,
    html: khung(`<p>Chào ${esc(hoTen)},</p>
<p>Gifty Tech đã nhận đủ học phí. Anh chị đã có chỗ trong lớp <b>${esc(khoaHoc.ten)}: ${esc(khoaHoc.tieuDePhu)}</b>.</p>
<p><b>Lịch học:</b> ${esc(nhanLichHoc())} · ${khoaHoc.thoiLuongPhut} phút<br><b>Địa điểm:</b> ${esc(diaDiem)}</p>
${nut(link, "Vào trang học của tôi")}
<p style="font-size:13px;color:#5b6b80">Link dùng được một lần trong 14 ngày. Hết hạn thì vào trang đăng nhập, nhập email này để nhận link mới.</p>
<p><b>Chuẩn bị trước buổi học:</b></p><ul>${chuanBi}</ul>`),
    vanBan: `Chào ${hoTen},\nGifty Tech đã nhận đủ học phí ${khoaHoc.ten}.\nLịch học: ${nhanLichHoc()}\nĐịa điểm: ${diaDiem}\nVào trang học: ${link}\n\nChuẩn bị:\n- ${khoaHoc.chuanBi.join("\n- ")}`,
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
