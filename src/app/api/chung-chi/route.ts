import { chuoiSach, docJson, traJson } from "@/lib/http";
import { capChungChi } from "@/lib/chung-chi";
import { tinhTrangHocVien } from "@/lib/hoan-thanh";
import { THONG_BAO_CHUA_MO, duocVaoNoiDung } from "@/lib/mo-khoa";
import { hocVienHienTai } from "@/lib/phien";

/** Cấp chứng chỉ "Hoàn thành xuất sắc" khi đã hoàn thành đủ 9 chặng (4 sản phẩm là tùy chọn). Ai đủ điều kiện cũng như nhau. */
export async function POST(req: Request) {
  const hv = await hocVienHienTai();
  if (!hv) return traJson(401, { error: "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." });
  if (!(await duocVaoNoiDung())) return traJson(403, { error: THONG_BAO_CHUA_MO });
  const tt = await tinhTrangHocVien(hv.id);
  if (tt.chungChi) return traJson(200, { ma: tt.chungChi.ma });
  if (!tt.duDieuKien) return traJson(400, { error: "Chưa đủ điều kiện: cần bấm hoàn thành đủ 9 chặng." });

  const hoTen = chuoiSach((await docJson(req))?.hoTen, 80) || hv.ho_ten;
  if (hoTen.length < 2) return traJson(400, { error: "Vui lòng nhập họ tên in trên chứng chỉ." });

  const ma = await capChungChi(hv, hoTen);
  if (!ma) return traJson(500, { error: "Không cấp được chứng chỉ, vui lòng thử lại." });
  return traJson(200, { ma });
}
