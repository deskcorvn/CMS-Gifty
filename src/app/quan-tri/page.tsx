import type { Metadata } from "next";
import { db } from "@/lib/db";
import { dinhDangTien, khoaHoc, tongSoBuoc } from "@/lib/noi-dung";
import { laQuanTri } from "@/lib/quan-tri";
import { NutDoiSoat, NutKhopTay, NutKichHoat, NutLinkDangNhap, NutThuHoi } from "./HanhDong";

export const metadata: Metadata = { title: "Quản trị", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

type Dong = {
  id: string; ho_ten: string; email: string; sdt: string | null; created_at: Date;
  kich_hoat_at: Date | null; nguon_kich_hoat: string | null;
  ma_don: string | null; trang_thai: string | null; da_nhan: number | null; ghi_chu: string | null;
  so_buoc: number; so_sp: number; ma_cc: string | null; cc_thu_hoi: Date | null;
};

const gio = (d: Date | null) =>
  d ? new Intl.DateTimeFormat("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", dateStyle: "short", timeStyle: "short" }).format(d) : "";

const csv = (rows: (string | number | null)[][]) =>
  "﻿" + rows.map((r) => r.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");

function DangNhapQuanTri({ loi }: { loi?: string }) {
  return (
    <main className="mx-auto max-w-sm px-4 py-20">
      <h1 className="text-xl font-bold text-navy">Quản trị {khoaHoc.ten}</h1>
      <form action="/api/quan-tri/dang-nhap" method="post" className="mt-6 space-y-3">
        <input name="khoa" type="password" placeholder="Khóa quản trị (ADMIN_KEY)" required className="w-full rounded-lg border border-line px-3 py-2.5" />
        {loi && <p className="text-sm text-red-700">Khóa không đúng.</p>}
        <button className="w-full rounded-lg bg-navy px-4 py-2.5 font-bold text-white">Vào</button>
      </form>
    </main>
  );
}

export default async function QuanTri({ searchParams }: { searchParams: Promise<{ loi?: string }> }) {
  if (!(await laQuanTri())) return <DangNhapQuanTri loi={(await searchParams).loi} />;
  const sql = db();
  const [ds, gdChuaKhop] = await Promise.all([
    sql<Dong[]>`
      select h.id, h.ho_ten, h.email, h.sdt, h.created_at, h.kich_hoat_at, h.nguon_kich_hoat,
             d.ma as ma_don, d.trang_thai, d.da_nhan, d.ghi_chu,
             (select count(*)::int from tien_do t where t.hoc_vien_id = h.id) as so_buoc,
             (select count(*)::int from san_pham s where s.hoc_vien_id = h.id) as so_sp,
             c.ma as ma_cc, c.thu_hoi_at as cc_thu_hoi
      from hoc_vien h
      left join lateral (select * from don_hang where hoc_vien_id = h.id order by created_at desc limit 1) d on true
      left join chung_chi c on c.hoc_vien_id = h.id
      order by h.created_at desc
    `,
    sql<{ id: number; so_tien: number; noi_dung: string | null; ly_do: string | null; thoi_gian: Date }[]>`
      select id, so_tien, noi_dung, ly_do, thoi_gian from giao_dich where not da_khop order by thoi_gian desc limit 100
    `,
  ]);
  const daKichHoat = ds.filter((d) => d.kich_hoat_at).length;
  const tongThu = ds.reduce((n, d) => n + (d.da_nhan ?? 0), 0);
  const fileCsv = csv([
    ["Họ tên", "Email", "SĐT", "Đăng ký", "Mã đơn", "Trạng thái", "Đã nhận", "Kích hoạt", "Bước", "Sản phẩm", "Chứng chỉ"],
    ...ds.map((d) => [d.ho_ten, d.email, d.sdt, gio(d.created_at), d.ma_don, d.trang_thai, d.da_nhan, d.nguon_kich_hoat, `${d.so_buoc}/${tongSoBuoc}`, `${d.so_sp}/4`, d.ma_cc]),
  ]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-navy">Quản trị · {khoaHoc.ten}</h1>
        <div className="flex flex-wrap items-start gap-3">
          <NutDoiSoat />
          <a download="hoc-vien.csv" href={`data:text/csv;charset=utf-8,${encodeURIComponent(fileCsv)}`} className="rounded-lg border border-line bg-white px-4 py-2 text-sm font-bold text-navy">Xuất CSV</a>
          <form action="/api/quan-tri/dang-nhap" method="post"><input type="hidden" name="thoat" value="1" /><button className="px-2 py-2 text-sm text-muted underline">Thoát</button></form>
        </div>
      </div>
      <p className="mt-2 text-sm text-body">
        {ds.length} người đăng ký · {daKichHoat} đã kích hoạt · đã thu {dinhDangTien(tongThu)} · {ds.filter((d) => d.ma_cc && !d.cc_thu_hoi).length} chứng chỉ
      </p>

      {gdChuaKhop.length > 0 && (
        <section className="mt-6 rounded-xl border border-amber/50 bg-amber-soft p-4">
          <h2 className="font-bold text-amber-ink">Giao dịch cần đối chiếu ({gdChuaKhop.length})</h2>
          <table className="mt-3 w-full text-left text-sm">
            <thead><tr className="text-muted"><th className="py-1">Lúc</th><th>Số tiền</th><th>Nội dung</th><th>Lý do</th><th /></tr></thead>
            <tbody>
              {gdChuaKhop.map((g) => (
                <tr key={g.id} className="border-t border-amber/30 align-top">
                  <td className="py-2 pr-3 whitespace-nowrap">{gio(g.thoi_gian)}</td>
                  <td className="pr-3 font-semibold">{dinhDangTien(g.so_tien)}</td>
                  <td className="pr-3">{g.noi_dung}</td>
                  <td className="pr-3 text-amber-ink">{g.ly_do}</td>
                  <td><NutKhopTay giaoDichId={g.id} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <div className="mt-6 overflow-x-auto rounded-xl border border-line bg-white">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>{["Học viên", "Đơn", "Kích hoạt", "Tiến độ", "Chứng chỉ", "Thao tác"].map((h) => <th key={h} className="px-3 py-2 font-semibold">{h}</th>)}</tr>
          </thead>
          <tbody>
            {ds.map((d) => (
              <tr key={d.id} className="border-t border-line align-top">
                <td className="px-3 py-2"><b>{d.ho_ten}</b><br /><span className="text-muted">{d.email}<br />{d.sdt}</span></td>
                <td className="px-3 py-2">
                  {d.ma_don ? <><b>{d.ma_don}</b><br />{d.trang_thai} · {dinhDangTien(d.da_nhan ?? 0)}{d.ghi_chu && <><br /><span className="text-amber-ink">{d.ghi_chu}</span></>}</> : "—"}
                </td>
                <td className="px-3 py-2">{d.kich_hoat_at ? <>{gio(d.kich_hoat_at)}<br /><span className="text-muted">{d.nguon_kich_hoat}</span></> : <span className="text-muted">Chưa</span>}</td>
                <td className="px-3 py-2">{d.so_buoc}/{tongSoBuoc} bước<br />{d.so_sp}/4 SP</td>
                <td className="px-3 py-2">
                  {d.ma_cc ? <a href={`/chung-nhan/${d.ma_cc}`} target="_blank" className="underline">{d.ma_cc}</a> : "—"}
                  {d.cc_thu_hoi && <><br /><span className="text-red-700">đã thu hồi</span></>}
                </td>
                <td className="space-y-1 px-3 py-2">
                  {d.kich_hoat_at ? <NutLinkDangNhap hocVienId={d.id} /> : <NutKichHoat hocVienId={d.id} />}
                  {d.ma_cc && !d.cc_thu_hoi && <div><NutThuHoi ma={d.ma_cc} /></div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
