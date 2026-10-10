import type { Metadata } from "next";
import { db } from "@/lib/db";
import { dinhDangTien, dsChang, khoaHoc } from "@/lib/noi-dung";
import { DO_DAI_KHOA_TOI_THIEU, khoaMayChuHopLe, laQuanTri } from "@/lib/quan-tri";
import { docCaiDat } from "@/lib/cai-dat";
import { emailDaCauHinh } from "@/lib/email";
import { NutDoiSoat, NutEmailThu, NutGuiLaiEmail, NutKhopTay, NutKichHoat, NutLinkDangNhap, NutMoKhoaHoc, NutSuaEmail, NutSuaTenCc, NutThuHoi } from "./HanhDong";

export const metadata: Metadata = { title: "Quản trị", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

type Dong = {
  id: string; ho_ten: string; email: string; sdt: string | null; created_at: Date;
  kich_hoat_at: Date | null; nguon_kich_hoat: string | null;
  ma_don: string | null; trang_thai: string | null; da_nhan: number | null; ghi_chu: string | null;
  buoc_xong: string[]; so_sp: number; ma_cc: string | null; ten_cc: string | null; cc_thu_hoi: Date | null;
};

const gio = (d: Date | null) =>
  d ? new Intl.DateTimeFormat("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", dateStyle: "short", timeStyle: "short" }).format(d) : "";

const csv = (rows: (string | number | null)[][]) =>
  "﻿" + rows.map((r) => r.map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");

function DangNhapQuanTri({ loi }: { loi?: string }) {
  return (
    <main id="noi-dung-chinh" className="mx-auto max-w-sm px-4 py-20">
      <h1 className="text-xl font-bold text-navy">Quản trị {khoaHoc.ten}</h1>
      <form action="/api/quan-tri/dang-nhap" method="post" className="mt-6 space-y-3">
        <input name="khoa" type="password" placeholder="Khóa quản trị (ADMIN_KEY)" required className="w-full rounded-lg border border-line px-3 py-2.5" />
        {!khoaMayChuHopLe() ? (
          <p className="text-sm text-red-700">
            ADMIN_KEY trên Vercel chưa đặt hoặc ngắn hơn {DO_DAI_KHOA_TOI_THIEU} ký tự nên trang quản trị đang khóa. Đặt lại khóa dài hơn rồi Redeploy.
          </p>
        ) : loi ? (
          <p className="text-sm text-red-700">Khóa không đúng.</p>
        ) : null}
        <button className="w-full rounded-lg bg-navy px-4 py-2.5 font-bold text-white">Vào</button>
      </form>
    </main>
  );
}

export default async function QuanTri({ searchParams }: { searchParams: Promise<{ loi?: string }> }) {
  if (!(await laQuanTri())) return <DangNhapQuanTri loi={(await searchParams).loi} />;
  const sql = db();
  const [ds, gdChuaKhop, moKhoa, emailGanNhat] = await Promise.all([
    sql<Dong[]>`
      select h.id, h.ho_ten, h.email, h.sdt, h.created_at, h.kich_hoat_at, h.nguon_kich_hoat,
             d.ma as ma_don, d.trang_thai, d.da_nhan, d.ghi_chu,
             (select coalesce(array_agg(t.buoc_id), '{}') from tien_do t where t.hoc_vien_id = h.id) as buoc_xong,
             (select count(*)::int from san_pham s where s.hoc_vien_id = h.id) as so_sp,
             c.ma as ma_cc, c.ho_ten as ten_cc, c.thu_hoi_at as cc_thu_hoi
      from hoc_vien h
      left join lateral (select * from don_hang where hoc_vien_id = h.id order by created_at desc limit 1) d on true
      left join chung_chi c on c.hoc_vien_id = h.id
      order by h.created_at desc
    `,
    sql<{ id: number; so_tien: number; noi_dung: string | null; ly_do: string | null; thoi_gian: Date }[]>`
      select id, so_tien, noi_dung, ly_do, thoi_gian from giao_dich where not da_khop order by thoi_gian desc limit 100
    `,
    docCaiDat<{ mo: boolean; luc: string }>("mo_khoa_hoc"),
    docCaiDat<{ ok: boolean; loi?: string; den: string; tieuDe: string; luc: string }>("email_gan_nhat"),
  ]);
  const daMo = moKhoa?.mo === true;
  const soChang = (d: Dong) => dsChang.filter((c) => c.buoc.every((b) => d.buoc_xong.includes(b.id))).length;
  const daKichHoat = ds.filter((d) => d.kich_hoat_at).length;
  const tongThu = ds.reduce((n, d) => n + (d.da_nhan ?? 0), 0);
  const fileCsv = csv([
    ["Họ tên", "Email", "SĐT", "Đăng ký", "Mã đơn", "Trạng thái", "Đã nhận", "Kích hoạt", "Chặng", "Sản phẩm", "Chứng chỉ"],
    ...ds.map((d) => [d.ho_ten, d.email, d.sdt, gio(d.created_at), d.ma_don, d.trang_thai, d.da_nhan, d.nguon_kich_hoat, `${soChang(d)}/${dsChang.length} chặng`, `${d.so_sp}/4`, d.ma_cc]),
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

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className={`rounded-xl border p-5 ${daMo ? "border-emerald-300 bg-emerald-50" : "border-amber/50 bg-amber-soft"}`}>
          <p className="text-sm font-bold text-navy">Nội dung khóa học</p>
          <p className={`mt-1 text-lg font-bold ${daMo ? "text-emerald-800" : "text-amber-ink"}`}>{daMo ? "Đang mở" : "Đang khóa"}</p>
          <p className="mt-1 text-sm text-body">
            {daMo
              ? `Học viên đã đóng học phí vào học được 9 chặng.${moKhoa?.luc ? ` Mở lúc ${gio(new Date(moKhoa.luc))}.` : ""}`
              : "Học viên đã đóng học phí chỉ thấy lịch học và phần chuẩn bị. Bạn (đang đăng nhập quản trị) vẫn xem trước được."}
          </p>
          <div className="mt-3"><NutMoKhoaHoc daMo={daMo} /></div>
        </div>
        <div className="rounded-xl border border-line bg-white p-5">
          <p className="text-sm font-bold text-navy">Gửi email</p>
          <p className="mt-1 text-sm text-body">
            {emailDaCauHinh() ? "Đã cấu hình." : "Chưa cấu hình EMAIL_USER/EMAIL_PASS — học viên không nhận được email."}
          </p>
          {emailGanNhat && (
            <p className={`mt-1 text-sm ${emailGanNhat.ok ? "text-emerald-800" : "text-red-700"}`}>
              Lần gần nhất ({gio(new Date(emailGanNhat.luc))}, tới {emailGanNhat.den}): {emailGanNhat.ok ? "gửi thành công" : `thất bại — ${emailGanNhat.loi}`}
            </p>
          )}
          <div className="mt-3"><NutEmailThu /></div>
        </div>
      </section>

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
                <td className="px-3 py-2">{soChang(d)}/{dsChang.length} chặng<br />{d.so_sp}/4 SP</td>
                <td className="px-3 py-2">
                  {d.ma_cc ? <a href={`/chung-nhan/${d.ma_cc}`} target="_blank" className="underline">{d.ma_cc}</a> : "—"}
                  {d.cc_thu_hoi && <><br /><span className="text-red-700">đã thu hồi</span></>}
                </td>
                <td className="space-y-1 px-3 py-2">
                  {d.kich_hoat_at ? <><NutLinkDangNhap hocVienId={d.id} /><div><NutGuiLaiEmail hocVienId={d.id} /></div></> : <NutKichHoat hocVienId={d.id} />}
                  <div><NutSuaEmail hocVienId={d.id} email={d.email} /></div>
                  {d.ma_cc && !d.cc_thu_hoi && <div><NutSuaTenCc ma={d.ma_cc} hoTen={d.ten_cc ?? d.ho_ten} /></div>}
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
