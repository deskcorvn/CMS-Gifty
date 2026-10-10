import { db } from "@/lib/db";
import { taoLinkDangNhap } from "@/lib/dang-nhap";
import { emailDangNhap, guiEmail } from "@/lib/email";
import { chuoiSach, docJson, emailHopLe, traJson } from "@/lib/http";

const THONG_BAO = "Nếu email này đã đăng ký và đóng học phí, link đăng nhập vừa được gửi tới hộp thư. Kiểm tra cả mục Spam/Quảng cáo.";

/** Gửi link đăng nhập. Luôn trả cùng một thông báo để không lộ email nào đã đăng ký. */
export async function POST(req: Request) {
  const email = chuoiSach((await docJson(req))?.email, 200).toLowerCase();
  if (!emailHopLe(email)) return traJson(400, { error: "Email chưa đúng định dạng." });
  const sql = db();
  const [hv] = await sql<{ id: string; ho_ten: string }[]>`
    select id, ho_ten from hoc_vien where email = ${email} and kich_hoat_at is not null
  `;
  if (hv) {
    // Tối đa 3 link mỗi 15 phút cho một học viên, chống bị dùng để spam hộp thư.
    const [{ n }] = await sql<{ n: number }[]>`
      select count(*)::int as n from ma_dang_nhap where hoc_vien_id = ${hv.id} and created_at > now() - interval '15 minutes'
    `;
    if (n < 3) {
      const m = emailDangNhap(hv.ho_ten, await taoLinkDangNhap(hv.id));
      await guiEmail(email, m.tieuDe, m.html, m.vanBan);
    }
  }
  return traJson(200, { thongBao: THONG_BAO });
}
