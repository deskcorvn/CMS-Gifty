import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { tinhTrangHocVien } from "@/lib/hoan-thanh";
import { dsChang, khoaHoc, tongSoBuoc } from "@/lib/noi-dung";
import { batBuocDaMo } from "@/lib/mo-khoa";
import { batBuocHocVien } from "@/lib/phien";
import FormNhan from "./FormNhan";

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
      <p className="mt-2 text-body">
        Không chấm điểm, không xếp loại. Hoàn thành đủ 9 chặng là nhận chứng chỉ.
      </p>
      {tt.duDieuKien ? (
        <div className="mt-6"><FormNhan hoTen={hv.ho_ten} /></div>
      ) : (
        <div className="mt-6 rounded-xl border border-line bg-white p-6">
          <p className="font-semibold text-navy">Còn thiếu một chút:</p>
          <ul className="mt-3 space-y-2 text-sm">
            {changDo.map((c) => (
              <li key={c.so}><Link href={`/hoc/chang/${c.so}`} className="text-amber-ink underline">Chặng {c.so}: {c.tieuDe}</Link> · chưa bấm hoàn thành</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
