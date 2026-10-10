import { db } from "@/lib/db";
import { chuoiSach, docJson, emailHopLe, sdtSach, traJson } from "@/lib/http";
import { hocVienHienTai } from "@/lib/phien";
import { guiEmailKichHoat } from "@/lib/sau-thanh-toan";

/** Học viên đang đăng nhập tự sửa email / số điện thoại. Đổi email thì gửi lại email đăng ký thành công tới địa chỉ mới. */
export async function POST(req: Request) {
  const hv = await hocVienHienTai();
  if (!hv) return traJson(401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
  const b = await docJson(req);
  const email = chuoiSach(b?.email, 200).toLowerCase();
  const sdt = sdtSach(chuoiSach(b?.sdt, 30));
  if (!emailHopLe(email)) return traJson(400, { error: "Email chưa đúng định dạng." });
  if (sdt.replace(/\D/g, "").length < 9) return traJson(400, { error: "Số điện thoại chưa đúng." });
  const sql = db();
  const [trung] = await sql`select id from hoc_vien where email = ${email} and id <> ${hv.id}`;
  if (trung) return traJson(409, { error: "Email này đã được dùng cho một tài khoản khác." });
  await sql`update hoc_vien set email = ${email}, sdt = ${sdt} where id = ${hv.id}`;
  if (email === hv.email) return traJson(200, { ok: true, thongBao: "Đã lưu thông tin." });
  const kq = await guiEmailKichHoat(hv.id);
  return traJson(200, {
    ok: true,
    thongBao: kq.ok ? `Đã lưu. Email xác nhận đã gửi tới ${email}.` : `Đã lưu email mới, nhưng chưa gửi được email xác nhận (${kq.loi}).`,
  });
}
