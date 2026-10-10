"use client";

import { useState } from "react";
import KhoiPromptClient from "./KhoiPromptClient";
import type { Buoc } from "@/lib/noi-dung";

/** Các bước của một chặng. Bấm "đã xong" lưu ngay lên máy chủ (đổi máy vẫn còn tiến độ). */
export default function DanhSachBuoc({ buoc, daXong }: { buoc: Buoc[]; daXong: string[] }) {
  const [xong, setXong] = useState(() => new Set(daXong));
  const [loi, setLoi] = useState("");

  async function bat(id: string) {
    const moi = !xong.has(id);
    const doi = (on: boolean) => setXong((s) => { const n = new Set(s); if (on) n.add(id); else n.delete(id); return n; });
    doi(moi);
    setLoi("");
    const r = await fetch("/api/tien-do", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ buocId: id, xong: moi }),
    }).catch(() => null);
    if (!r?.ok) {
      doi(!moi);
      setLoi(r?.status === 401 ? "Phiên đăng nhập đã hết, vui lòng đăng nhập lại." : "Chưa lưu được, kiểm tra mạng rồi bấm lại.");
    }
  }

  return (
    <>
      <div className="sticky top-0 z-20 -mx-4 mb-6 border-b border-line bg-white/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between text-sm font-bold text-navy">
          <span>{xong.size}/{buoc.length} bước</span>
          <span className="text-amber-ink">{Math.round((xong.size / buoc.length) * 100)}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e8edf3]">
          <div className="h-full rounded-full bg-amber transition-all duration-300" style={{ width: `${(xong.size / buoc.length) * 100}%` }} />
        </div>
        {loi && <p className="mt-2 text-sm font-semibold text-red-700">{loi}</p>}
      </div>
      <ol className="space-y-6">
        {buoc.map((b, i) => {
          const da = xong.has(b.id);
          return (
            <li key={b.id} className={`rounded-xl border bg-white p-4 transition-colors md:p-7 ${da ? "border-emerald-300" : "border-line"}`}>
              <div className="flex items-start gap-3 md:gap-4">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold md:h-10 md:w-10 md:text-lg ${da ? "bg-emerald-600 text-white" : "bg-navy text-white"}`}>
                  {da ? "✓" : i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold leading-snug text-navy">{b.tieuDe}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-body">{b.huongDan}</p>
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
                  <button
                    type="button"
                    onClick={() => bat(b.id)}
                    aria-pressed={da}
                    className={`mt-5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold transition ${
                      da ? "border-emerald-600 bg-emerald-600 text-white" : "border-navy/25 text-navy hover:bg-navy hover:text-white"
                    }`}
                  >
                    ✓ {da ? "Đã xong bước này" : "Đánh dấu đã xong"}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
