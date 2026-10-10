import { db } from "@/lib/db";
import { docJson, traJson } from "@/lib/http";
import { timChang } from "@/lib/noi-dung";
import { THONG_BAO_CHUA_MO, duocVaoNoiDung } from "@/lib/mo-khoa";
import { hocVienHienTai } from "@/lib/phien";

/**
 * Đánh dấu hoàn thành (hoặc bỏ đánh dấu) CẢ MỘT CHẶNG. Vẫn lưu theo từng bước trong bảng tien_do
 * để giữ nguyên quy tắc cấp chứng chỉ (đủ mọi bước) và dữ liệu cũ.
 */
export async function POST(req: Request) {
  const hv = await hocVienHienTai();
  if (!hv) return traJson(401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
  if (!(await duocVaoNoiDung())) return traJson(403, { error: THONG_BAO_CHUA_MO });
  const b = await docJson<{ changSo?: number; xong?: boolean }>(req);
  const chang = timChang(Number(b?.changSo));
  if (!chang) return traJson(400, { error: "Chặng không hợp lệ." });
  const ids = chang.buoc.map((x) => x.id);
  if (b?.xong) {
    await db()`
      insert into tien_do (hoc_vien_id, buoc_id)
      select ${hv.id}, unnest(${ids}::text[])
      on conflict do nothing
    `;
  } else {
    await db()`delete from tien_do where hoc_vien_id = ${hv.id} and buoc_id = any(${ids}::text[])`;
  }
  return traJson(200, { ok: true });
}
