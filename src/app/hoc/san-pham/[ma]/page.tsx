import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import { MA_SAN_PHAM, timChang, timSanPham, type MaSanPham } from "@/lib/noi-dung";
import { batBuocDaMo } from "@/lib/mo-khoa";
import { batBuocHocVien } from "@/lib/phien";
import { FORM_SAN_PHAM } from "@/lib/san-pham";
import FormSanPham from "./FormSanPham";

type Props = { params: Promise<{ ma: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `Sản phẩm ${(await params).ma.toUpperCase()}` };
}

export default async function TrangSanPham({ params }: Props) {
  const ma = (await params).ma.toUpperCase() as MaSanPham;
  if (!MA_SAN_PHAM.includes(ma)) notFound();
  const sp = timSanPham(ma)!;
  await batBuocDaMo();
  const hv = await batBuocHocVien();
  const [r] = await db()<{ du_lieu: Record<string, unknown> }[]>`select du_lieu from san_pham where hoc_vien_id = ${hv.id} and ma = ${ma}`;
  const chang = timChang(sp.chang);

  return (
    <main id="noi-dung-chinh" className="mx-auto max-w-3xl px-4 py-10">
      <Link href={chang ? `/hoc/chang/${chang.so}` : "/hoc"} className="text-sm font-semibold text-amber-ink">← {chang ? `Chặng ${chang.so}` : "Trang học"}</Link>
      <p className="mt-4 text-sm font-bold text-amber-ink">{ma}</p>
      <h1 className="text-2xl font-bold text-navy">{sp.ten}</h1>
      <p className="mt-2 rounded-lg bg-white px-4 py-3 text-sm leading-6 text-body ring-1 ring-line"><b>Điều kiện:</b> {sp.dieuKien}</p>
      <p className="mt-3 text-sm text-muted">Ô có dấu * cần điền để lưu. Dữ liệu giả lập, không nhập thông tin thật của khách hàng.</p>
      <div className="mt-6">
        <FormSanPham ma={ma} cacO={FORM_SAN_PHAM[ma]} duLieu={r?.du_lieu ?? {}} coAnh={ma === "SP04"} />
      </div>
    </main>
  );
}
