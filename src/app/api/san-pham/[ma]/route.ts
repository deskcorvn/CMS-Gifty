import { db } from "@/lib/db";
import { docJson, traJson } from "@/lib/http";
import { MA_SAN_PHAM, type MaSanPham } from "@/lib/noi-dung";
import { hocVienHienTai } from "@/lib/phien";
import { FORM_SAN_PHAM } from "@/lib/san-pham";

/** Lưu form một sản phẩm. Chỉ nhận đúng các ô đã khai báo; ảnh SP04 đi đường /api/anh-sp04. */
export async function POST(req: Request, ctx: { params: Promise<{ ma: string }> }) {
  const hv = await hocVienHienTai();
  if (!hv) return traJson(401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
  const ma = (await ctx.params).ma.toUpperCase() as MaSanPham;
  if (!MA_SAN_PHAM.includes(ma)) return traJson(404, { error: "Không có sản phẩm này." });
  const b = await docJson(req);
  if (!b) return traJson(400, { error: "Dữ liệu không hợp lệ." });

  const duLieu: Record<string, string | boolean> = {};
  for (const o of FORM_SAN_PHAM[ma]) {
    const v = b[o.ten];
    if (o.kieu === "checkbox") duLieu[o.ten] = v === true;
    else if (typeof v === "string") duLieu[o.ten] = v.slice(0, 20000);
  }
  // Giữ ảnh đã tải lên (SP04) khi lưu lại form chữ.
  await db()`
    insert into san_pham (hoc_vien_id, ma, du_lieu) values (${hv.id}, ${ma}, ${db().json(duLieu)})
    on conflict (hoc_vien_id, ma) do update set
      du_lieu = jsonb_strip_nulls(jsonb_build_object('anhUrl', san_pham.du_lieu->'anhUrl')) || excluded.du_lieu,
      cap_nhat_at = now()
  `;
  return traJson(200, { ok: true });
}
