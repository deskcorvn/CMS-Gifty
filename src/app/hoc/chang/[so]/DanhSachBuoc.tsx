"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import KhoiPromptClient from "./KhoiPromptClient";
import type { Buoc } from "@/lib/noi-dung";

/**
 * Các bước của một chặng, đọc và làm theo thứ tự. Không bắt tích từng bước:
 * làm xong cả chặng thì bấm một nút "Hoàn thành chặng" (lưu lên máy chủ, đổi máy vẫn còn).
 */
export default function DanhSachBuoc({ buoc, xong }: { buoc: Buoc[]; xong: boolean }) {
  return (
    <ol className="space-y-6">
      {buoc.map((b, i) => (
        <li key={b.id} className={`rounded-xl border bg-white p-4 transition-colors md:p-7 ${xong ? "border-emerald-300" : "border-line"}`}>
          <div className="flex items-start gap-3 md:gap-4">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold md:h-10 md:w-10 md:text-lg ${xong ? "bg-emerald-700 text-white" : "bg-navy text-white"}`}>
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold leading-snug text-navy">{b.tieuDe}</h3>
              <p className="mt-2 text-[15px] leading-7 text-body">{b.huongDan}</p>
              {b.minhHoa.map((v) => (
                <figure key={v.video} className="mt-4">
                  <video className="aspect-video w-full rounded-lg border border-line bg-[#f4f2ec]" src={v.video} poster={v.video.replace(/\.mp4$/, ".jpg")} controls preload="none" playsInline aria-label={v.tieuDe} />
                  <figcaption className="mt-1 text-xs text-muted">Video minh họa: {v.tieuDe}. Giao diện mô phỏng, giao diện thật có thể khác.</figcaption>
                </figure>
              ))}
              {b.prompt && <KhoiPromptClient prompt={b.prompt} />}
              {b.ketQua && (
                <div className="mt-4 rounded-lg border border-[#dbe9d9] bg-[#f3f9f2] px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">Kết quả trông thế nào</p>
                  <p className="mt-1 text-sm leading-6 text-body">{b.ketQua}</p>
                </div>
              )}
              {b.neuKhongDuoc && (
                <details className="mt-3 rounded-lg border border-[#f0d8b9] bg-amber-soft px-4 py-3">
                  <summary className="cursor-pointer text-sm font-bold text-amber-ink">Nếu không được thì… <span className="font-normal">(bấm xem)</span></summary>
                  <p className="mt-2 text-sm leading-6 text-[#5c4a2f]">{b.neuKhongDuoc}</p>
                </details>
              )}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function NutHoanThanhChang({
  changSo,
  soBuoc,
  daXong,
  sanPham,
  lienKetSau,
}: {
  changSo: number;
  soBuoc: number;
  daXong: boolean;
  sanPham: { ma: string; daLuu: boolean }[];
  lienKetSau: { href: string; nhan: string };
}) {
  const router = useRouter();
  const [xong, setXong] = useState(daXong);
  const [dang, setDang] = useState(false);
  const [loi, setLoi] = useState("");
  const [chungChi, setChungChi] = useState<string | null>(null);
  const thieuSanPham = sanPham.filter((s) => !s.daLuu);

  async function danhDau(moi: boolean) {
    setDang(true);
    setLoi("");
    const r = await fetch("/api/tien-do", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ changSo, xong: moi }),
    }).catch(() => null);
    setDang(false);
    if (!r?.ok) {
      const d = await r?.json().catch(() => null);
      setLoi(r?.status === 401 ? "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." : d?.error || "Chưa lưu được, kiểm tra mạng rồi bấm lại.");
      return;
    }
    const d = await r.json().catch(() => null);
    setXong(moi);
    if (moi && d?.moiCap && d.chungChi) setChungChi(d.chungChi);
    router.refresh();
  }

  return (
      <section id="hoan-thanh" aria-live="polite" className={`mt-8 rounded-xl border-2 p-5 md:p-6 ${xong ? "border-emerald-400 bg-emerald-50" : "border-navy/20 bg-white"}`}>
        {xong ? (
          <>
            <p className="text-lg font-bold text-emerald-800">✓ Đã hoàn thành chặng này</p>
            {chungChi && (
              <p className="mt-2 rounded-lg bg-white px-4 py-3 text-body ring-1 ring-emerald-300">
                🎉 Chúc mừng anh chị đã hoàn thành cả khóa học! Chứng chỉ đã được cấp và gửi về email.{" "}
                <a href={`/chung-nhan/${chungChi}`} className="font-bold text-emerald-800 underline">Xem chứng chỉ</a>
              </p>
            )}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a href={lienKetSau.href} className="rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205] hover:bg-amber-light">{lienKetSau.nhan}</a>
              <button type="button" disabled={dang} onClick={() => danhDau(false)} className="text-sm text-muted underline disabled:opacity-60">
                Bỏ đánh dấu
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="font-bold text-navy">Làm xong {soBuoc} bước của chặng này?</p>
            {thieuSanPham.length > 0 && (
              <p className="mt-1 text-sm text-amber-ink">
                Muốn giữ lại kết quả để tra cứu sau lớp thì lưu {thieuSanPham.map((s) => s.ma).join(", ")} ở khung phía trên (không bắt buộc).
              </p>
            )}
            <button
              type="button"
              disabled={dang}
              onClick={() => danhDau(true)}
              className="mt-3 rounded-lg bg-emerald-700 px-6 py-3 font-bold text-white hover:bg-emerald-800 disabled:opacity-60"
            >
              {dang ? "Đang lưu…" : "✓ Hoàn thành chặng"}
            </button>
          </>
        )}
        {loi && <p role="alert" className="mt-2 text-sm font-semibold text-red-700">{loi}</p>}
      </section>
  );
}
