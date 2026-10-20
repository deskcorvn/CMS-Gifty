import Link from "next/link";
import { tinhTrangHocVien } from "@/lib/hoan-thanh";
import { dsChang, khoaHoc, nhanLichHoc, tongSoBuoc } from "@/lib/noi-dung";
import TrinhChieu from "@/components/TrinhChieu";
import NhomZalo from "@/components/NhomZalo";
import ThongTinCuaToi from "@/components/ThongTinCuaToi";
import { maDangKyCua } from "@/lib/ma-dang-ky";
import { duocVaoNoiDung } from "@/lib/mo-khoa";
import { batBuocHocVien, type HocVien } from "@/lib/phien";

export default async function TrangHoc() {
  const hv = await batBuocHocVien();
  const maDangKy = await maDangKyCua(hv.id);
  const thongTin = (
    <>
      <ThongTinCuaToi email={hv.email} sdt={hv.sdt ?? ""} maDangKy={maDangKy} />
      <NhomZalo sdt={hv.sdt ?? ""} />
    </>
  );
  if (!(await duocVaoNoiDung())) return <ManHinhCho hv={hv} thongTin={thongTin} />;
  const tt = await tinhTrangHocVien(hv.id);
  const soChangXong = dsChang.filter((c) => c.buoc.every((b) => tt.buocXong.has(b.id))).length;
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
          <span>{soChangXong}/{dsChang.length} chặng · {tt.sanPhamXong.length}/4 sản phẩm</span>
          <span className="text-amber-ink">{pct}%</span>
        </div>
        <div role="progressbar" aria-label="Tiến độ hoàn thành" aria-valuemin={0} aria-valuemax={tongSoBuoc} aria-valuenow={tt.soBuocXong} className="mt-2 h-2 overflow-hidden rounded-full bg-[#e8edf3]">
          <div className="h-full rounded-full bg-amber" style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {tt.chungChi ? (
            <Link href={`/chung-nhan/${tt.chungChi.ma}`} className="rounded-lg bg-emerald-700 px-5 py-2.5 font-bold text-white">Xem chứng chỉ của tôi</Link>
          ) : tt.duDieuKien ? (
            <Link href="/hoc/chung-chi" className="rounded-lg bg-emerald-700 px-5 py-2.5 font-bold text-white">Nhận chứng chỉ “{khoaHoc.chungChi.danhHieu}”</Link>
          ) : (
            <Link href={`/hoc/chang/${tiepTheo.so}`} className="rounded-lg bg-amber px-5 py-2.5 font-bold text-[#1a1205] hover:bg-amber-light">
              {chuaBatDau ? `Bắt đầu ${dsChang[0].nhan.toLowerCase()}` : `Học tiếp: ${tiepTheo.nhan.toLowerCase()}`}
            </Link>
          )}
          <Link href="/hoc/thu-vien" className="rounded-lg border border-navy/25 px-5 py-2.5 font-bold text-navy hover:bg-navy hover:text-white">Kết quả của tôi</Link>
        </div>
      </section>

      {thongTin}

      {chuaBatDau && (
        <section className="mt-6 rounded-xl border border-amber/40 bg-amber-soft p-5">
          <h2 className="font-bold text-amber-ink">Chuẩn bị trước buổi học</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-body">
            {khoaHoc.chuanBi.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </section>
      )}

      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">Bản đồ buổi học</h2>
        {khoaHoc.loTrinh?.dich && <p className="mt-1 text-body">{khoaHoc.loTrinh.dich}</p>}
        {khoaHoc.loTrinh?.man.length ? (
          <div className="mt-4">
            <TrinhChieu man={khoaHoc.loTrinh.man} nhan="Mở đầu" tieuDe="Bản đồ buổi học" />
          </div>
        ) : null}
        {(khoaHoc.loTrinh?.phan ?? [{ ten: `${dsChang.length} chặng`, moTa: "", chang: dsChang.map((c) => c.so) }]).map((phan, iPhan) => {
          const dsPhan = dsChang.filter((c) => phan.chang.includes(c.so));
          const soXong = dsPhan.filter((c) => c.buoc.every((b) => tt.buocXong.has(b.id))).length;
          return (
            <div key={phan.ten} className="mt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-navy">
                  {khoaHoc.loTrinh ? <span className="text-amber-ink">Phần {iPhan + 1} · </span> : null}
                  {phan.ten}
                </h3>
                <span className={`rounded-full px-3 py-0.5 text-xs font-semibold ${soXong === dsPhan.length ? "bg-emerald-50 text-emerald-800" : "bg-amber-soft text-amber-ink"}`}>
                  {soXong}/{dsPhan.length} chặng
                </span>
              </div>
              {phan.moTa && <p className="mt-1 text-sm text-muted">{phan.moTa}</p>}
              <ol className="mt-3 space-y-3">
                {dsPhan.map((c) => {
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
                            {c.nhan} · {c.phut} phút · {hetChang ? "đã hoàn thành" : xong > 0 ? "đang học" : "chưa học"}{c.sanPham.length ? ` · làm ${c.sanPham.join(", ")}` : ""}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
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

/** Đã đóng học phí nhưng quản trị chưa mở khóa học: chỉ hiện lịch, chuẩn bị và mục lục (không vào được bài). */
function ManHinhCho({ hv, thongTin }: { hv: HocVien; thongTin: React.ReactNode }) {
  return (
    <main id="noi-dung-chinh" className="mx-auto max-w-5xl px-4 py-10">
      <div className="learning-welcome">
        <p className="text-sm font-semibold text-amber-ink">Xin chào {hv.ho_ten}</p>
        <h1 className="mt-1 text-2xl font-bold text-navy md:text-3xl">{khoaHoc.ten}: {khoaHoc.tieuDePhu}</h1>
      </div>
      <section className="mt-6 rounded-xl border border-emerald-300 bg-emerald-50 p-5">
        <p className="text-lg font-bold text-emerald-800">✓ Anh chị đã đăng ký thành công</p>
        <p className="mt-2 text-body">
          <b>Lịch học:</b> {nhanLichHoc()} · {khoaHoc.thoiLuongPhut} phút<br />
          <b>Địa điểm:</b> {khoaHoc.lop.diaDiem || "Gifty Tech gửi địa điểm qua email"}
        </p>
        <p className="mt-3 text-sm text-body">
          Nội dung {dsChang.length} chặng sẽ mở khi lớp bắt đầu. Lúc đó anh chị quay lại trang này (đăng nhập bằng email hoặc mã đăng ký) để học theo từng chặng.
        </p>
      </section>
      {thongTin}
      <section className="mt-6 rounded-xl border border-amber/40 bg-amber-soft p-5">
        <h2 className="font-bold text-amber-ink">Chuẩn bị trước buổi học</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-body">
          {khoaHoc.chuanBi.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">Nội dung khóa học</h2>
        <ol className="mt-4 space-y-3">
          {dsChang.map((c) => (
            <li key={c.so} className="flex items-center gap-4 rounded-xl border border-line bg-white p-4 opacity-80">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8edf3] font-bold text-muted" aria-hidden="true">🔒</span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-navy">{c.nhan}: {c.tieuDe}</span>
                <span className="text-sm text-muted">{c.phut} phút · mở khi lớp bắt đầu</span>
              </span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
