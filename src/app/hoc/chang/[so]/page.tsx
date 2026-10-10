import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tinhTrangHocVien } from "@/lib/hoan-thanh";
import { dsChang, khoaHoc, timChang, timNguon, timSanPham } from "@/lib/noi-dung";
import { batBuocHocVien } from "@/lib/phien";
import DanhSachBuoc from "./DanhSachBuoc";

type Props = { params: Promise<{ so: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const c = timChang(Number((await params).so));
  return { title: c ? `Chặng ${c.so}: ${c.tieuDe}` : "Chặng học" };
}

function nhungVideo(url: string) {
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  if (yt) return <iframe className="aspect-video w-full rounded-lg" src={`https://www.youtube-nocookie.com/embed/${yt[1]}`} title={khoaHoc.video.tieuDe} allowFullScreen />;
  return <video className="w-full rounded-lg" src={url} controls preload="metadata" />;
}

export default async function TrangChang({ params }: Props) {
  const c = timChang(Number((await params).so));
  if (!c) notFound();
  const hv = await batBuocHocVien();
  const tt = await tinhTrangHocVien(hv.id);
  const truoc = timChang(c.so - 1);
  const sau = timChang(c.so + 1);

  return (
    <main id="noi-dung-chinh">
      <header className="border-b border-line bg-white text-ink">
        <div className="mx-auto max-w-4xl pb-6">
          <Link href="/hoc" className="text-sm font-semibold text-amber-ink">← Trang học</Link>
          <p className="mt-4 text-xs font-semibold text-muted">Chặng {c.so}/{dsChang.length} · {c.phut} phút</p>
          <h1 className="mt-2 text-2xl font-bold leading-snug md:text-3xl">{c.tieuDe}</h1>
          <p className="mt-4 max-w-2xl leading-7 text-body">{c.mucTieu}</p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl pb-8">
        {c.coVideo && (
          <section className="mt-8 rounded-xl border border-line bg-white p-5">
            <h2 className="font-bold text-navy">{khoaHoc.video.tieuDe}</h2>
            <div className="mt-3">
              {khoaHoc.video.url ? nhungVideo(khoaHoc.video.url) : (
                <p className="rounded-lg bg-amber-soft px-4 py-3 text-sm text-amber-ink">Video được chiếu tại lớp. Bản xem lại sẽ có ở đây sau buổi học.</p>
              )}
            </div>
          </section>
        )}

        <div className="mt-8"><DanhSachBuoc buoc={c.buoc} daXong={c.buoc.filter((b) => tt.buocXong.has(b.id)).map((b) => b.id)} /></div>

        {c.noiDungHtml.trim() && (
          <section className="noi-dung mt-10 rounded-xl border border-line bg-white p-5 md:p-7" dangerouslySetInnerHTML={{ __html: c.noiDungHtml }} />
        )}

        {c.ghiNho && (
          <section className="mt-8 rounded-xl border border-line bg-[#f7f7f8] p-6 text-ink">
            <p className="text-xs font-bold text-amber-ink">Ghi nhớ</p>
            <p className="mt-2 text-lg leading-8">{c.ghiNho}</p>
          </section>
        )}

        {c.sanPham.length > 0 && (
          <section className="mt-8 grid gap-3 md:grid-cols-2">
            {c.sanPham.map((ma) => {
              const sp = timSanPham(ma);
              const xong = tt.sanPhamXong.includes(ma as never);
              return (
                <Link key={ma} href={`/hoc/san-pham/${ma}`} className="rounded-xl border-2 border-amber bg-amber-soft p-5 hover:bg-[#f7e8eb]">
                  <p className="text-sm font-bold text-amber-ink">{xong ? "✓ Đã lưu · bấm để sửa" : "Lưu sản phẩm " + ma}</p>
                  <p className="mt-1 font-semibold text-navy">{sp?.ten}</p>
                </Link>
              );
            })}
          </section>
        )}

        {c.nguon.length > 0 && (
          <p className="mt-8 text-sm text-muted">
            Nguồn: {c.nguon.map((n, i) => {
              const ng = timNguon(n);
              return <span key={n}>{i > 0 && " · "}<a href={ng?.url} target="_blank" rel="noopener noreferrer" className="underline">[{n}] {ng?.ten}</a></span>;
            })}
          </p>
        )}

        <nav className="mt-10 flex flex-wrap justify-between gap-3">
          {truoc ? <Link href={`/hoc/chang/${truoc.so}`} className="rounded-lg border border-line bg-white px-5 py-3 font-semibold text-navy">← Chặng {truoc.so}</Link> : <span />}
          {sau ? (
            <Link href={`/hoc/chang/${sau.so}`} className="rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205] hover:bg-amber-light">Chặng {sau.so}: {sau.tieuDe} →</Link>
          ) : (
            <Link href="/hoc/chung-chi" className="rounded-lg bg-emerald-600 px-5 py-3 font-bold text-white">Nhận chứng chỉ →</Link>
          )}
        </nav>
      </div>
    </main>
  );
}
