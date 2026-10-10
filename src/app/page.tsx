import Link from "next/link";
import DauTrang from "@/components/DauTrang";
import { dinhDangTien, dsChang, khoaHoc, nhanLichHoc } from "@/lib/noi-dung";
import { hocVienHienTai } from "@/lib/phien";

export const dynamic = "force-dynamic";

export default async function TrangChu() {
  const hv = await hocVienHienTai().catch(() => null);
  return (
    <>
      <DauTrang dangHoc={Boolean(hv)} />
      <main>
        <section className="bg-navy-dark text-white">
          <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cream">{khoaHoc.ten}</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">{khoaHoc.tieuDePhu}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{khoaHoc.moTa}</p>
            <dl className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-white/15 p-4">
                <dt className="text-xs uppercase tracking-wider text-white/60">Lịch học</dt>
                <dd className="mt-1 font-bold">{nhanLichHoc()}</dd>
              </div>
              <div className="rounded-lg border border-white/15 p-4">
                <dt className="text-xs uppercase tracking-wider text-white/60">Thời lượng</dt>
                <dd className="mt-1 font-bold">{khoaHoc.thoiLuongPhut} phút</dd>
              </div>
              <div className="rounded-lg border border-white/15 p-4">
                <dt className="text-xs uppercase tracking-wider text-white/60">Học phí</dt>
                <dd className="mt-1 font-bold">{dinhDangTien(khoaHoc.hocPhi)}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-white/65">
              Địa điểm: {khoaHoc.lop.diaDiem || "Gifty Tech gửi địa điểm qua email sau khi anh chị đăng ký."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={hv ? "/hoc" : "/dang-ky"} className="rounded-lg bg-amber px-6 py-3.5 font-bold text-[#1a1205] hover:bg-amber-light">
                {hv ? "Vào trang học" : "Đăng ký và thanh toán"}
              </Link>
              {!hv && (
                <Link href="/dang-nhap" className="rounded-lg border border-white/30 px-6 py-3.5 font-bold hover:bg-white/10">
                  Đã đăng ký? Đăng nhập
                </Link>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="text-2xl font-bold text-navy">Bốn thứ anh chị mang về</h2>
          <p className="mt-2 max-w-3xl text-body">{khoaHoc.camKet}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {khoaHoc.sanPham.map((s) => (
              <div key={s.ma} className="rounded-xl border border-line bg-white p-5">
                <p className="text-xs font-bold tracking-wider text-amber-ink">{s.ma}</p>
                <h3 className="mt-1 font-bold text-navy">{s.ten}</h3>
                <p className="mt-2 text-sm leading-6 text-body">{s.dieuKien}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Học xong 9 chặng và lưu đủ 4 sản phẩm, anh chị nhận chứng chỉ “{khoaHoc.chungChi.danhHieu}” có mã QR kiểm tra
            trực tuyến. Mọi kết quả được lưu lại để tra cứu sau buổi học.
          </p>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-2xl font-bold text-navy">9 chặng trong {khoaHoc.thoiLuongPhut} phút</h2>
            <ol className="mt-6 grid gap-3 md:grid-cols-3">
              {dsChang.map((c) => (
                <li key={c.so} className="rounded-lg border border-line p-4">
                  <p className="text-xs font-bold text-amber-ink">Chặng {c.so} · {c.phut} phút</p>
                  <p className="mt-1 font-semibold text-navy">{c.tieuDe}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-muted">Có 10 phút nghỉ giữa giờ.</p>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-4 py-12 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy">Dành cho ai</h2>
            <p className="mt-2 leading-7 text-body">{khoaHoc.doiTuong}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{khoaHoc.khongThuoc}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy">Chuẩn bị trước buổi học</h2>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 text-body">
              {khoaHoc.chuanBi.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © Gifty Tech · Giáo trình phiên bản {khoaHoc.phienBanGiaoTrinh}
      </footer>
    </>
  );
}
