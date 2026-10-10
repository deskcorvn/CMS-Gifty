import { db } from "@/lib/db";
import { traJson } from "@/lib/http";
import { datPhien, donChoCuaTrinhDuyet } from "@/lib/phien";

/** Trang đăng ký hỏi trạng thái đơn mỗi vài giây. Chỉ trình duyệt đã tạo đơn mới hỏi được. */
export async function GET(_req: Request, ctx: { params: Promise<{ ma: string }> }) {
  const { ma } = await ctx.params;
  const donCho = await donChoCuaTrinhDuyet();
  if (!donCho) return traJson(404, { error: "Không tìm thấy đơn." });
  const [don] = await db()<{ id: string; trang_thai: string; so_tien: number; da_nhan: number; hoc_vien_id: string }[]>`
    select id, trang_thai, so_tien, da_nhan, hoc_vien_id from don_hang where ma = ${ma.toUpperCase()} and id = ${donCho}
  `;
  if (!don) return traJson(404, { error: "Không tìm thấy đơn." });
  if (don.trang_thai === "DA_DU") await datPhien(don.hoc_vien_id);
  return traJson(200, { trangThai: don.trang_thai, daNhan: don.da_nhan, conThieu: Math.max(0, don.so_tien - don.da_nhan) });
}
