import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { tinhTrangHocVien } from "@/lib/hoan-thanh";
import { dsChang, khoaHoc } from "@/lib/noi-dung";
import { batBuocDaMo } from "@/lib/mo-khoa";
import { batBuocHocVien } from "@/lib/phien";
import FormNhan from "./FormNhan";
import NutXongChang from "./NutXongChang";

export const metadata: Metadata = { title: "Nhận chứng chỉ" };

export default async function TrangNhanChungChi() {
  await batBuocDaMo();
  const hv = await batBuocHocVien();
  const tt = await tinhTrangHocVien(hv.id);
  if (tt.chungChi) redirect(`/chung-nhan/${tt.chungChi.ma}`);

  const changDo = dsChang.filter((c) => c.buoc.some((b) => !tt.buocXong.has(b.id)));

  return (
    <main id="noi-dung-chinh" className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-bold text-navy">Chứng chỉ “{khoaHoc.chungChi.danhHieu}”</h1>
      {tt.duDieuKien ? (
        <div className="mt-6"><FormNhan hoTen={hv.ho_ten} /></div>
      ) : (
        <div className="mt-6 rounded-xl border border-line bg-white p-6">
          <p className="font-semibold text-navy">Còn {changDo.length} chặng anh chị chưa bấm hoàn thành. Làm xong chặng nào thì bấm ngay ở đây, xong hết là nhận chứng chỉ.</p>
          <ul className="mt-3 text-sm">
            {changDo.map((c) => (
              <li key={c.so} className="flex flex-wrap items-center justify-between gap-3 border-b border-line py-2 last:border-0">
                <Link href={`/hoc/chang/${c.so}`} className="text-amber-ink underline">{c.nhan}: {c.tieuDe}</Link>
                <NutXongChang changSo={c.so} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
