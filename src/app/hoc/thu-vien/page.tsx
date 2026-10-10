import type { Metadata } from "next";
import Link from "next/link";
import NutSaoChep from "@/components/NutSaoChep";
import { tinhTrangHocVien } from "@/lib/hoan-thanh";
import { khoaHoc, tatCaPrompt, type MaSanPham } from "@/lib/noi-dung";
import { batBuocDaMo } from "@/lib/mo-khoa";
import { batBuocHocVien } from "@/lib/phien";
import { FORM_SAN_PHAM } from "@/lib/san-pham";

export const metadata: Metadata = { title: "Kết quả của tôi" };

/** Ghép một sản phẩm thành văn bản để chép/tải về (Markdown đơn giản). */
function thanhVanBan(ma: MaSanPham, d: Record<string, unknown>) {
  const ten = khoaHoc.sanPham.find((s) => s.ma === ma)?.ten ?? ma;
  const dong = FORM_SAN_PHAM[ma]
    .filter((o) => o.kieu !== "checkbox" && typeof d[o.ten] === "string" && (d[o.ten] as string).trim())
    .map((o) => `## ${o.nhan}\n\n${(d[o.ten] as string).trim()}`);
  if (typeof d.anhUrl === "string") dong.push(`## Ảnh đã chỉnh\n\n${d.anhUrl}`);
  return `# ${ma} — ${ten}\n\n${dong.join("\n\n")}\n`;
}

export default async function ThuVien() {
  await batBuocDaMo();
  const hv = await batBuocHocVien();
  const tt = await tinhTrangHocVien(hv.id);

  return (
    <main id="noi-dung-chinh" className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-bold text-navy md:text-3xl">Kết quả của tôi</h1>
      <p className="mt-2 text-body">Mọi thứ anh chị làm trong khóa học. Quên cách làm thì quay lại đây chép câu lệnh dùng tiếp.</p>

      {tt.chungChi && (
        <Link href={`/chung-nhan/${tt.chungChi.ma}`} className="mt-6 block rounded-xl border border-emerald-300 bg-emerald-50 p-5">
          <p className="font-bold text-emerald-800">Chứng chỉ “{khoaHoc.chungChi.danhHieu}” · mã {tt.chungChi.ma}</p>
          <p className="text-sm text-body">Bấm để xem, tải ảnh hoặc chia sẻ link kiểm tra.</p>
        </Link>
      )}

      <section className="mt-8">
        <h2 className="text-xl font-bold text-navy">Bốn sản phẩm</h2>
        <div className="mt-4 space-y-4">
          {khoaHoc.sanPham.map((s) => {
            const d = tt.sanPham[s.ma];
            if (!d) {
              return (
                <div key={s.ma} className="rounded-xl border border-dashed border-line bg-white p-5">
                  <p className="font-semibold text-navy">{s.ma} · {s.ten}</p>
                  <Link href={`/hoc/san-pham/${s.ma}`} className="mt-2 inline-block text-sm font-semibold text-amber-ink underline">Chưa lưu, làm ngay</Link>
                </div>
              );
            }
            const vb = thanhVanBan(s.ma, d);
            return (
              <details key={s.ma} className="group rounded-xl border border-line bg-white p-5" open={false}>
                <summary className="flex cursor-pointer flex-wrap items-center justify-between gap-3">
                  <span className="font-semibold text-navy">{s.ma} · {s.ten}</span>
                  <span className="text-sm text-amber-ink">Bấm để xem</span>
                </summary>
                {typeof d.anhUrl === "string" && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={d.anhUrl} alt="Ảnh đại diện đã chỉnh" className="mt-4 h-40 w-40 rounded-lg object-cover" />
                )}
                <pre className="mt-4 max-h-96 overflow-auto whitespace-pre-wrap rounded-lg bg-paper p-4 text-sm leading-6 text-body ring-1 ring-line">{vb}</pre>
                <div className="mt-3 flex flex-wrap gap-3">
                  <NutSaoChep noiDung={vb} nhan="Chép toàn bộ" nhanXong="Đã chép" />
                  <a download={`${s.ma}.md`} href={`data:text/markdown;charset=utf-8,${encodeURIComponent(vb)}`} className="rounded-lg border border-line px-4 py-2 text-sm font-bold text-navy">Tải file .md</a>
                  <Link href={`/hoc/san-pham/${s.ma}`} className="rounded-lg border border-line px-4 py-2 text-sm font-bold text-navy">Sửa</Link>
                </div>
              </details>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Kho câu lệnh</h2>
        <p className="mt-1 text-sm text-muted">Toàn bộ câu lệnh mẫu của 9 chặng.</p>
        <div className="mt-4 space-y-3">
          {tatCaPrompt.map(({ chang, tenChang, buoc }) => (
            <details key={buoc.id} className="rounded-xl border border-line bg-white p-4">
              <summary className="cursor-pointer">
                <span className="text-xs font-bold text-amber-ink">Chặng {chang} · {tenChang}</span>
                <span className="block font-semibold text-navy">{buoc.tieuDe}</span>
              </summary>
              <pre className="mt-3 max-h-80 overflow-auto whitespace-pre-wrap rounded-lg bg-navy-dark p-4 font-mono text-[13px] leading-6 text-white/90">{buoc.prompt}</pre>
              <div className="mt-3"><NutSaoChep noiDung={buoc.prompt} /></div>
            </details>
          ))}
        </div>
      </section>

      {khoaHoc.video.url && (
        <section className="mt-10">
          <h2 className="text-xl font-bold text-navy">Video xem lại</h2>
          <Link href="/hoc/chang/8" className="mt-2 inline-block text-amber-ink underline">{khoaHoc.video.tieuDe}</Link>
        </section>
      )}

      <section className="mt-10">
        <h2 className="text-xl font-bold text-navy">Nguồn chính thức để kiểm tra lại</h2>
        <p className="mt-1 text-sm text-muted">
          Rà soát ngày {khoaHoc.ngayRaSoatNguon}. Tên mô hình, quyền sử dụng, giao diện Claude/ChatGPT có thể đã thay đổi; khi thấy khác, đối chiếu các trang dưới đây.
        </p>
        <ul className="mt-3 space-y-1.5 text-sm">
          {khoaHoc.nguon.map((n) => (
            <li key={n.ma}><a href={n.url} target="_blank" rel="noopener noreferrer" className="text-navy underline">[{n.ma}] {n.ten}</a></li>
          ))}
        </ul>
      </section>
    </main>
  );
}
