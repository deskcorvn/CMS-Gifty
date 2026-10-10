import { db } from "@/lib/db";
import { taoLinkDangNhap } from "@/lib/dang-nhap";
import { doiSoat } from "@/lib/doi-soat";
import { ghiCaiDat } from "@/lib/cai-dat";
import { emailThu, guiEmailChiTiet } from "@/lib/email";
import { chuoiSach, docJson, emailHopLe, traJson } from "@/lib/http";
import { laQuanTri } from "@/lib/quan-tri";
import { guiEmailKichHoat } from "@/lib/sau-thanh-toan";
import { congTienVaoDon } from "@/lib/thanh-toan";

export const maxDuration = 60;

/** Các thao tác vận hành: kích hoạt tay (đóng tiền mặt), khớp tay giao dịch, lấy link đăng nhập, thu hồi chứng chỉ, đối soát. */
export async function POST(req: Request) {
  if (!(await laQuanTri())) return traJson(401, { error: "Cần đăng nhập quản trị." });
  const b = await docJson(req);
  const loai = chuoiSach(b?.loai, 40);
  const sql = db();

  switch (loai) {
    case "kich-hoat": {
      const id = chuoiSach(b?.hocVienId, 60);
      const ghiChu = chuoiSach(b?.ghiChu, 200) || "kích hoạt tay";
      const [hv] = await sql<{ id: string }[]>`
        update hoc_vien set kich_hoat_at = now(), nguon_kich_hoat = ${"tay:" + ghiChu}
        where id = ${id} and kich_hoat_at is null returning id
      `;
      if (!hv) return traJson(400, { error: "Học viên không tồn tại hoặc đã kích hoạt." });
      // Đơn chuyển khoản còn treo thì hủy, để không ai lỡ chuyển thêm mà hệ thống cộng tiền âm thầm.
      await sql`
        update don_hang set trang_thai = 'HUY', ghi_chu = concat_ws(' | ', ghi_chu, ${"hủy do kích hoạt tay: " + ghiChu})
        where hoc_vien_id = ${hv.id} and trang_thai = 'CHO'
      `;
      const email = await guiEmailKichHoat(hv.id);
      return traJson(200, {
        ok: true,
        thongBao: email.ok ? "Đã kích hoạt và gửi email." : `Đã kích hoạt. Chưa gửi được email (${email.loi}) — lấy link đăng nhập để gửi qua Zalo.`,
      });
    }
    case "gui-lai-email": {
      const id = chuoiSach(b?.hocVienId, 60);
      const [hv] = await sql`select id from hoc_vien where id = ${id} and kich_hoat_at is not null`;
      if (!hv) return traJson(400, { error: "Học viên chưa được kích hoạt." });
      const email = await guiEmailKichHoat(id);
      return email.ok ? traJson(200, { ok: true, thongBao: "Đã gửi lại email đăng ký thành công." }) : traJson(502, { error: `Gửi thất bại: ${email.loi}` });
    }
    case "sua-email": {
      const id = chuoiSach(b?.hocVienId, 60);
      const email = chuoiSach(b?.email, 200).toLowerCase();
      if (!emailHopLe(email)) return traJson(400, { error: "Email mới chưa đúng định dạng." });
      const [trung] = await sql`select id from hoc_vien where email = ${email} and id <> ${id}`;
      if (trung) return traJson(409, { error: "Email này đã thuộc một học viên khác." });
      const [hv] = await sql`update hoc_vien set email = ${email} where id = ${id} returning id`;
      if (!hv) return traJson(404, { error: "Không có học viên này." });
      return traJson(200, { ok: true, thongBao: `Đã đổi email thành ${email}. Bấm "Gửi lại email" để gửi link vào học.` });
    }
    case "gui-email-thu": {
      const den = chuoiSach(b?.den, 200);
      if (!emailHopLe(den)) return traJson(400, { error: "Email nhận chưa đúng." });
      const m = emailThu();
      const kq = await guiEmailChiTiet(den, m.tieuDe, m.html, m.vanBan);
      return kq.ok ? traJson(200, { ok: true, thongBao: `Đã gửi email thử tới ${den}.` }) : traJson(502, { error: `Gửi thất bại: ${kq.loi}` });
    }
    case "mo-khoa-hoc": {
      const mo = b?.mo === true;
      await ghiCaiDat("mo_khoa_hoc", { mo, luc: new Date().toISOString() });
      return traJson(200, { ok: true, mo });
    }
    case "tai-khoan-thu": {
      // Tài khoản người vận hành tự đăng ký để thử: không tính vào số chỗ của lớp.
      const id = chuoiSach(b?.hocVienId, 60);
      const [hv] = await sql<{ la_thu: boolean }[]>`
        update hoc_vien set la_thu = ${b?.laThu === true} where id = ${id} returning la_thu
      `;
      if (!hv) return traJson(400, { error: "Học viên không tồn tại." });
      return traJson(200, { ok: true, laThu: hv.la_thu });
    }
    case "link-dang-nhap": {
      const id = chuoiSach(b?.hocVienId, 60);
      const [hv] = await sql`select id from hoc_vien where id = ${id} and kich_hoat_at is not null`;
      if (!hv) return traJson(400, { error: "Học viên chưa được kích hoạt." });
      return traJson(200, { ok: true, link: await taoLinkDangNhap(id, 60 * 24) });
    }
    case "khop-tay": {
      const gdId = Number(b?.giaoDichId);
      const ma = chuoiSach(b?.ma, 20).toUpperCase();
      const kq = await sql.begin(async (tx) => {
        const [gd] = await tx<{ id: number; so_tien: number; da_khop: boolean }[]>`
          select id, so_tien, da_khop from giao_dich where id = ${gdId} for update`;
        if (!gd) return { error: "Không có giao dịch này." };
        if (gd.da_khop) return { error: "Giao dịch đã được khớp trước đó." };
        const [don] = await tx<{ id: string; ma: string; hoc_vien_id: string; so_tien: number; da_nhan: number; ghi_chu: string | null; trang_thai: string }[]>`
          select id, ma, hoc_vien_id, so_tien, da_nhan, ghi_chu, trang_thai from don_hang where ma = ${ma} for update`;
        if (!don) return { error: `Không có đơn ${ma}.` };
        return congTienVaoDon(tx, don, gd.id, gd.so_tien, { lyDo: "khớp tay" });
      });
      if ("error" in kq) return traJson(400, kq);
      if ("kichHoatMoi" in kq && kq.kichHoatMoi) await guiEmailKichHoat(kq.kichHoatMoi);
      return traJson(200, { ok: true, ...kq });
    }
    case "sua-ten-cc": {
      const ma = chuoiSach(b?.ma, 20);
      const hoTen = chuoiSach(b?.hoTen, 80);
      if (hoTen.length < 2) return traJson(400, { error: "Họ tên chưa hợp lệ." });
      const [cc] = await sql`update chung_chi set ho_ten = ${hoTen} where ma = ${ma} returning ma`;
      if (!cc) return traJson(404, { error: "Không có chứng chỉ này." });
      return traJson(200, { ok: true });
    }
    case "thu-hoi": {
      const ma = chuoiSach(b?.ma, 20);
      const lyDo = chuoiSach(b?.lyDo, 200) || "Thu hồi theo quyết định của Gifty Tech";
      await sql`update chung_chi set thu_hoi_at = now(), ly_do_thu_hoi = ${lyDo} where ma = ${ma} and thu_hoi_at is null`;
      return traJson(200, { ok: true });
    }
    case "doi-soat": {
      if (!process.env.SEPAY_API_TOKEN) return traJson(400, { error: "Chưa đặt SEPAY_API_TOKEN." });
      try {
        return traJson(200, { ok: true, ...(await doiSoat(7)) });
      } catch (err) {
        return traJson(500, { error: String(err) });
      }
    }
    default:
      return traJson(400, { error: "Thao tác không hợp lệ." });
  }
}
