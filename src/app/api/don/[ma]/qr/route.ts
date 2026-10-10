import { db } from "@/lib/db";
import { traJson } from "@/lib/http";
import { donChoCuaTrinhDuyet } from "@/lib/phien";
import { qrUrl } from "@/lib/thanh-toan";

/**
 * Tải ảnh VietQR về máy (img.vietqr.io không cho tải thẳng vì khác tên miền). Học viên mở trang đăng ký
 * trên chính điện thoại thì không quét được, phải lưu ảnh rồi chọn ảnh trong app ngân hàng.
 */
export async function GET(_req: Request, ctx: { params: Promise<{ ma: string }> }) {
  const { ma } = await ctx.params;
  const donCho = await donChoCuaTrinhDuyet();
  if (!donCho) return traJson(404, { error: "Không tìm thấy đơn." });
  const [don] = await db()<{ ma: string; so_tien: number; da_nhan: number }[]>`
    select ma, so_tien, da_nhan from don_hang
    where ma = ${ma.toUpperCase()} and id = ${donCho} and trang_thai in ('CHO', 'THIEU')
  `;
  const url = don ? qrUrl(don.ma, don.so_tien - don.da_nhan) : null;
  if (!url) return traJson(404, { error: "Không tìm thấy đơn." });
  const r = await fetch(url, { cache: "no-store" }).catch(() => null);
  if (!r?.ok) return traJson(502, { error: "Chưa tải được ảnh QR, vui lòng thử lại." });
  return new Response(await r.arrayBuffer(), {
    headers: {
      "Content-Type": r.headers.get("content-type") ?? "image/png",
      "Content-Disposition": `attachment; filename="${don.ma}-vietqr.png"`,
      "Cache-Control": "private, no-store",
    },
  });
}
