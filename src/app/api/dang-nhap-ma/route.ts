import { db } from "@/lib/db";
import { chuoiSach, docJson, traJson } from "@/lib/http";
import { chuanHoaMa } from "@/lib/ma-dang-ky";
import { datPhien } from "@/lib/phien";

const TOI_DA_SAI = 10; // mỗi IP, trong 15 phút

const ipCua = (req: Request) =>
  (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "khong-ro";

/**
 * Đăng nhập bằng mã đăng ký (mã chuyển khoản GTAI…). Dành cho học viên nhập nhầm email/số điện thoại:
 * mã luôn tra lại được trong nội dung chuyển khoản ở app ngân hàng.
 */
export async function POST(req: Request) {
  const ma = chuanHoaMa(chuoiSach((await docJson(req))?.ma, 40));
  const ip = ipCua(req);
  const sql = db();
  const [{ n }] = await sql<{ n: number }[]>`
    select count(*)::int as n from thu_dang_nhap where ip = ${ip} and luc > now() - interval '15 minutes'
  `;
  if (n >= TOI_DA_SAI) return traJson(429, { error: "Nhập sai quá nhiều lần. Vui lòng thử lại sau 15 phút." });

  const [r] = ma
    ? await sql<{ hoc_vien_id: string; kich_hoat: boolean }[]>`
        select d.hoc_vien_id, h.kich_hoat_at is not null as kich_hoat
        from don_hang d join hoc_vien h on h.id = d.hoc_vien_id
        where d.ma = ${ma}`
    : [];
  if (!r) {
    await sql`insert into thu_dang_nhap (ip) values (${ip})`;
    return traJson(400, { error: "Không tìm thấy mã đăng ký này. Kiểm tra lại mã GTAI… trong nội dung chuyển khoản." });
  }
  if (!r.kich_hoat) {
    return traJson(400, { error: "Mã này chưa được xác nhận thanh toán. Nếu đã chuyển khoản, vui lòng chờ vài phút hoặc liên hệ Gifty Tech." });
  }
  await datPhien(r.hoc_vien_id);
  return traJson(200, { ok: true });
}
