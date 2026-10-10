import { del, put } from "@vercel/blob";
import { db } from "@/lib/db";
import { traJson } from "@/lib/http";
import { THONG_BAO_CHUA_MO, duocVaoNoiDung } from "@/lib/mo-khoa";
import { hocVienHienTai } from "@/lib/phien";

const TOI_DA = 4 * 1024 * 1024; // dưới giới hạn 4,5 MB body của Vercel Functions
const LOAI = new Set(["image/jpeg", "image/png", "image/webp"]);

/** Tải ảnh đại diện đã chỉnh (SP04) lên Vercel Blob. Bắt buộc tick đồng ý; ảnh nằm ở URL khó đoán, không liệt kê công khai. */
export async function POST(req: Request) {
  const hv = await hocVienHienTai();
  if (!hv) return traJson(401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
  if (!(await duocVaoNoiDung())) return traJson(403, { error: THONG_BAO_CHUA_MO });
  if (!process.env.BLOB_READ_WRITE_TOKEN) return traJson(503, { error: "Chưa bật nơi lưu ảnh. Tạm lưu câu lệnh chỉnh ảnh thay ảnh." });
  const form = await req.formData();
  if (form.get("dongY") !== "1") return traJson(400, { error: "Cần tick ô đồng ý trước khi tải ảnh." });
  const f = form.get("anh");
  if (!(f instanceof File)) return traJson(400, { error: "Chưa chọn ảnh." });
  if (!LOAI.has(f.type)) return traJson(400, { error: "Chỉ nhận ảnh JPG, PNG hoặc WebP." });
  if (f.size > TOI_DA) return traJson(400, { error: "Ảnh lớn hơn 4 MB, vui lòng chọn ảnh nhỏ hơn." });

  const duoi = f.type === "image/png" ? "png" : f.type === "image/webp" ? "webp" : "jpg";
  const blob = await put(`sp04/${hv.id}.${duoi}`, f, { access: "public", addRandomSuffix: true, contentType: f.type });
  await db()`
    insert into san_pham (hoc_vien_id, ma, du_lieu) values (${hv.id}, 'SP04', ${db().json({ anhUrl: blob.url })})
    on conflict (hoc_vien_id, ma) do update set
      du_lieu = san_pham.du_lieu || jsonb_build_object('anhUrl', ${blob.url}::text), cap_nhat_at = now()
  `;
  return traJson(200, { ok: true, url: blob.url });
}

/** Xóa ảnh khỏi hồ sơ (học viên đổi ý). */
export async function DELETE() {
  const hv = await hocVienHienTai();
  if (!hv) return traJson(401, { error: "Phiên đăng nhập đã hết." });
  if (!(await duocVaoNoiDung())) return traJson(403, { error: THONG_BAO_CHUA_MO });
  const [cu] = await db()<{ url: string | null }[]>`
    update san_pham sp set du_lieu = sp.du_lieu - 'anhUrl', cap_nhat_at = now()
    from (select du_lieu->>'anhUrl' as url from san_pham where hoc_vien_id = ${hv.id} and ma = 'SP04') old
    where sp.hoc_vien_id = ${hv.id} and sp.ma = 'SP04'
    returning old.url
  `;
  if (cu?.url && process.env.BLOB_READ_WRITE_TOKEN) await del(cu.url).catch(() => {});
  return traJson(200, { ok: true });
}
