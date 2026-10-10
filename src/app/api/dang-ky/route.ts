import { db } from "@/lib/db";
import { chuoiSach, docJson, emailHopLe, sdtSach, traJson } from "@/lib/http";
import { tinhChoNgoi } from "@/lib/cho-ngoi";
import { khoaHoc, soLienHe } from "@/lib/noi-dung";
import { ghiDonCho } from "@/lib/phien";
import { noiDungChuyenKhoan, qrUrl, sinhMa, taiKhoanNhan } from "@/lib/thanh-toan";

/** Đăng ký: tạo (hoặc dùng lại) đơn học phí và trả QR chuyển khoản. Học viên đã kích hoạt thì chuyển sang đăng nhập. */
export async function POST(req: Request) {
  const b = await docJson(req);
  const hoTen = chuoiSach(b?.hoTen, 120);
  const email = chuoiSach(b?.email, 200).toLowerCase();
  const sdt = sdtSach(chuoiSach(b?.sdt, 30));
  if (hoTen.length < 2) return traJson(400, { error: "Vui lòng nhập họ tên." });
  if (!emailHopLe(email)) return traJson(400, { error: "Email chưa đúng định dạng." });
  if (sdt.replace(/\D/g, "").length < 9) return traJson(400, { error: "Số điện thoại chưa đúng." });
  if (!taiKhoanNhan().soTk) return traJson(503, { error: "Cổng thanh toán đang được cấu hình, vui lòng quay lại sau." });

  const sql = db();
  const [hv] = await sql<{ id: string; kich_hoat_at: Date | null }[]>`
    insert into hoc_vien (email, ho_ten, sdt) values (${email}, ${hoTen}, ${sdt})
    on conflict (email) do update set
      ho_ten = case when hoc_vien.kich_hoat_at is null then excluded.ho_ten else hoc_vien.ho_ten end,
      sdt    = case when hoc_vien.kich_hoat_at is null then excluded.sdt else hoc_vien.sdt end
    returning id, kich_hoat_at
  `;
  if (hv.kich_hoat_at) {
    return traJson(200, { daKichHoat: true, thongBao: "Email này đã đăng ký và đóng học phí. Vui lòng đăng nhập." });
  }
  // Lớp đủ chỗ thì không phát mã chuyển khoản mới. Đơn đã phát trước đó vẫn được cộng tiền như thường.
  if ((await tinhChoNgoi()).con === 0) {
    return traJson(409, {
      error: `Lớp đã đủ ${khoaHoc.soCho} chỗ. Anh chị nhắn Zalo ${soLienHe} để Gifty Tech báo khi có lớp sau.`,
    });
  }

  // Còn đơn chờ/thiếu thì dùng lại, tránh một người có nhiều mã chuyển khoản.
  let [don] = await sql<{ id: string; ma: string; so_tien: number; da_nhan: number }[]>`
    select id, ma, so_tien, da_nhan from don_hang
    where hoc_vien_id = ${hv.id} and trang_thai in ('CHO', 'THIEU')
    order by created_at desc limit 1
  `;
  // Đơn cũ chưa nhận đồng nào mà tạo lúc học phí khác (vd giá thử 2.000đ) thì đưa về học phí hiện tại.
  if (don && don.da_nhan === 0 && don.so_tien !== khoaHoc.hocPhi) {
    [don] = await sql<{ id: string; ma: string; so_tien: number; da_nhan: number }[]>`
      update don_hang set so_tien = ${khoaHoc.hocPhi}
      where id = ${don.id} and da_nhan = 0
      returning id, ma, so_tien, da_nhan
    `;
  }
  for (let lan = 0; !don && lan < 5; lan++) {
    [don] = await sql<{ id: string; ma: string; so_tien: number; da_nhan: number }[]>`
      insert into don_hang (ma, hoc_vien_id, so_tien) values (${sinhMa()}, ${hv.id}, ${khoaHoc.hocPhi})
      on conflict (ma) do nothing
      returning id, ma, so_tien, da_nhan
    `;
  }
  if (!don) return traJson(500, { error: "Không tạo được mã thanh toán, vui lòng thử lại." });

  await ghiDonCho(don.id);
  const conThieu = don.so_tien - don.da_nhan;
  const tk = taiKhoanNhan();
  return traJson(200, {
    ma: don.ma,
    soTien: don.so_tien,
    conThieu,
    noiDung: noiDungChuyenKhoan(don.ma),
    qr: qrUrl(don.ma, conThieu),
    taiKhoan: { nganHang: tk.tenNganHang, soTk: tk.soTk, chuTk: tk.chuTk },
  });
}
