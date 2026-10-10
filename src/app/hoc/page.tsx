import Link from "next/link";
import { tinhTrangHocVien } from "@/lib/hoan-thanh";
import { dsChang, khoaHoc, nhanLichHoc, tongSoBuoc } from "@/lib/noi-dung";
import { batBuocHocVien } from "@/lib/phien";

export default async function TrangHoc() {
  const hv = await batBuocHocVien();
  const tt = await tinhTrangHocVien(hv.id);
  const pct = Math.round((tt.soBuocXong / tongSoBuoc) * 100);
  const chuaBatDau = tt.soBuocXong === 0;
  const tiepTheo = dsChang.find((c) => c.buoc.some((b) => !tt.buocXong.has(b.id))) ?? dsChang[0];

  return (
    <main id="noi-dung-chinh" className="mx-auto max-w-5xl px-4 py-10">
      <div className="learning-welcome">
        <p className="text-sm font-semibold text-amber-ink">Xin chào {hv.ho_ten}</p>
        <h1 className="mt-1 text-2xl font-bold text-navy md:text-3xl">{khoaHoc.ten}: {khoaHoc.tieuDePhu}</h1>
        <p className="mt-2 text-body">Lớp học: {nhanLichHoc()} · {khoaHoc.lop.diaDiem || "địa điểm Gifty Tech gửi qua email"}</p>
      </div>
      <section aria-label="Tiến độ khóa học" className="mt-6 rounded-xl border border-line bg-white p-5">
        <div className="flex items-center justify-between text-sm font-bold text-navy">
          <span>{tt.soBuocXong}/{tongSoBuoc} bước · {tt.sanPhamXong.length}/4 sản phẩm</span>
          <span className="text-amber-ink">{pct}%</span>
        </div>
        <div role="progressbar" aria-label="Số bước đã hoàn thành" aria-valuemin={0} aria-valuemax={tongSoBuoc} aria-valuenow={tt.soBuocXong} className="mt-2 h-2 overflow-hidden rounded-full bg-[#e8edf3]">
          <div className="h-full rounded-full bg-amber" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {tt.chungChi ? (
            <Link href={`/chung-nhan/${tt.chungChi.ma}`} className="rounded-lg bg-emerald-700 px-5 py-2.5 font-bold text-white">Xem chứng chỉ của tôi</Link>
          ) : tt.duDieuKien ? (
            <Link href="/hoc/chung-chi" className="rounded-lg bg-emerald-700 px-5 py-2.5 font-bold text-white">Nhận chứng chỉ “{khoaHoc.chungChi.danhHieu}”</Link>
          ) : (
            <Link href={`/hoc/chang/${tiepTheo.so}`} className="rounded-lg bg-amber px-5 py-2.5 font-bold text-[#1a1205] hover:bg-amber-light">
              {chuaBatDau ? "Bắt đầu chặng 1" : `Học tiếp chặng ${tiepTheo.so}`}
            </Link>
          )}
          <Link href="/hoc/thu-vien" className="rounded-lg border border-navy/25 px-5 py-2.5 font-bold text-navy hover:bg-navy hover:text-white">Kết quả của tôi</Link>
        </div>
      </section>

      {chuaBatDau && (
        <section className="mt-6 rounded-xl border border-amber/40 bg-amber-soft p-5">
          <h2 className="font-bold text-amber-ink">Chuẩn bị trước buổi học</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-body">
            {khoaHoc.chuanBi.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>
      )}

      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">9 chặng</h2>
        <ol className="mt-4 space-y-3">
          {dsChang.map((c) => {
            const xong = c.buoc.filter((b) => tt.buocXong.has(b.id)).length;
            const hetChang = xong === c.buoc.length;
            return (
              <li key={c.so}>
                <Link href={`/hoc/chang/${c.so}`} className={`flex items-center gap-4 rounded-xl border bg-white p-4 transition hover:border-amber ${hetChang ? "border-emerald-300" : "border-line"}`}>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-bold ${hetChang ? "bg-emerald-700 text-white" : "bg-navy text-white"}`}>
                    {hetChang ? "✓" : c.so}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-navy">{c.tieuDe}</span>
                    <span className="text-sm text-muted">
                      {c.phut} phút · {xong}/{c.buoc.length} bước{c.sanPham.length ? ` · làm ${c.sanPham.join(", ")}` : ""}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-8 grid gap-3 md:grid-cols-4">
        {khoaHoc.sanPham.map((s) => {
          const xong = tt.sanPhamXong.includes(s.ma);
          return (
            <Link key={s.ma} href={`/hoc/san-pham/${s.ma}`} className={`rounded-xl border bg-white p-4 hover:border-amber ${xong ? "border-emerald-300" : "border-line"}`}>
              <p className="text-xs font-bold text-amber-ink">{s.ma} · {xong ? "Đã lưu ✓" : "Chưa lưu"}</p>
              <p className="mt-1 text-sm font-semibold text-navy">{s.ten}</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
