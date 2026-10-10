import { db } from "@/lib/db";
import { docJson, traJson } from "@/lib/http";
import { tatCaBuocId } from "@/lib/noi-dung";
import { hocVienHienTai } from "@/lib/phien";

const hopLe = new Set(tatCaBuocId);

/** Đánh dấu / bỏ đánh dấu một bước. */
export async function POST(req: Request) {
  const hv = await hocVienHienTai();
  if (!hv) return traJson(401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
  const b = await docJson<{ buocId?: string; xong?: boolean }>(req);
  if (!b?.buocId || !hopLe.has(b.buocId)) return traJson(400, { error: "Bước không hợp lệ." });
  if (b.xong) {
    await db()`insert into tien_do (hoc_vien_id, buoc_id) values (${hv.id}, ${b.buocId}) on conflict do nothing`;
  } else {
    await db()`delete from tien_do where hoc_vien_id = ${hv.id} and buoc_id = ${b.buocId}`;
  }
  return traJson(200, { ok: true });
}
