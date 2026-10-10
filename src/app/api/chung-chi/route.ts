import { db } from "@/lib/db";
import { emailChungChi, guiEmail } from "@/lib/email";
import { chuoiSach, docJson, traJson } from "@/lib/http";
import { linkChungChi, sinhMaChungChi } from "@/lib/chung-chi";
import { tinhTrangHocVien } from "@/lib/hoan-thanh";
import { THONG_BAO_CHUA_MO, duocVaoNoiDung } from "@/lib/mo-khoa";
import { hocVienHienTai } from "@/lib/phien";

/** Cấp chứng chỉ "Hoàn thành xuất sắc" khi đã xong mọi bước và lưu đủ 4 sản phẩm. Ai đủ điều kiện cũng như nhau. */
export async function POST(req: Request) {
  const hv = await hocVienHienTai();
  if (!hv) return traJson(401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
  if (!(await duocVaoNoiDung())) return traJson(403, { error: THONG_BAO_CHUA_MO });
  const tt = await tinhTrangHocVien(hv.id);
  if (tt.chungChi) return traJson(200, { ma: tt.chungChi.ma });
  if (!tt.duDieuKien) return traJson(400, { error: "Chưa đủ điều kiện: cần hoàn thành đủ 9 chặng và lưu đủ 4 sản phẩm." });

  const hoTen = chuoiSach((await docJson(req))?.hoTen, 80) || hv.ho_ten;
  if (hoTen.length < 2) return traJson(400, { error: "Vui lòng nhập họ tên in trên chứng chỉ." });

  let ma: string | null = null;
  for (let lan = 0; !ma && lan < 5; lan++) {
    const [r] = await db()<{ ma: string }[]>`
      insert into chung_chi (ma, hoc_vien_id, ho_ten) values (${sinhMaChungChi()}, ${hv.id}, ${hoTen})
      on conflict do nothing returning ma
    `;
    ma = r?.ma ?? null;
    if (!ma) {
      // Có thể vừa cấp ở tab khác (unique hoc_vien_id) → trả lại mã đó.
      const [co] = await db()<{ ma: string }[]>`select ma from chung_chi where hoc_vien_id = ${hv.id}`;
      if (co) return traJson(200, { ma: co.ma });
    }
  }
  if (!ma) return traJson(500, { error: "Không cấp được chứng chỉ, vui lòng thử lại." });
  const m = emailChungChi(hoTen, linkChungChi(ma));
  await guiEmail(hv.email, m.tieuDe, m.html, m.vanBan);
  return traJson(200, { ma });
}
