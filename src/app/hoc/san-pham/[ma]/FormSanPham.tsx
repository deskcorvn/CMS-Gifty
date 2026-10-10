"use client";

import { useRef, useState } from "react";
import { demChu, type OSanPham } from "@/lib/san-pham";

type Props = { ma: string; cacO: OSanPham[]; duLieu: Record<string, unknown>; coAnh: boolean };

export default function FormSanPham({ ma, cacO, duLieu, coAnh }: Props) {
  const [giaTri, setGiaTri] = useState<Record<string, unknown>>(duLieu);
  const [trangThai, setTrangThai] = useState<{ ok: boolean; text: string } | null>(null);
  const [dangLuu, setDangLuu] = useState(false);
  const [anhUrl, setAnhUrl] = useState(typeof duLieu.anhUrl === "string" ? duLieu.anhUrl : "");
  const [dangTai, setDangTai] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [dongY, setDongY] = useState(false);

  const dat = (k: string, v: unknown) => setGiaTri((g) => ({ ...g, [k]: v }));

  async function luu(e: React.FormEvent) {
    e.preventDefault();
    setDangLuu(true);
    const r = await fetch(`/api/san-pham/${ma}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(giaTri),
    }).catch(() => null);
    setDangLuu(false);
    const d = await r?.json().catch(() => null);
    setTrangThai(r?.ok ? { ok: true, text: "Đã lưu. Xem lại bất cứ lúc nào ở “Kết quả của tôi”." } : { ok: false, text: d?.error || "Chưa lưu được, thử lại." });
  }

  async function taiAnh() {
    const f = fileRef.current?.files?.[0];
    if (!f) return setTrangThai({ ok: false, text: "Chưa chọn ảnh." });
    setDangTai(true);
    const fd = new FormData();
    fd.append("anh", f);
    fd.append("dongY", dongY ? "1" : "0");
    const r = await fetch("/api/anh-sp04", { method: "POST", body: fd }).catch(() => null);
    const d = await r?.json().catch(() => null);
    setDangTai(false);
    if (r?.ok) {
      setAnhUrl(d.url);
      setTrangThai({ ok: true, text: "Đã tải ảnh lên hồ sơ." });
    } else setTrangThai({ ok: false, text: d?.error || "Chưa tải được ảnh." });
  }

  async function xoaAnh() {
    const r = await fetch("/api/anh-sp04", { method: "DELETE" }).catch(() => null);
    if (r?.ok) setAnhUrl("");
  }

  return (
    <form onSubmit={luu} className="space-y-5">
      {coAnh && (
        <div className="rounded-xl border border-line bg-white p-5">
          <p className="text-sm font-semibold text-navy">Ảnh đại diện đã chỉnh</p>
          {anhUrl ? (
            <div className="mt-3 flex flex-wrap items-end gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={anhUrl} alt="Ảnh đại diện đã chỉnh" className="h-40 w-40 rounded-lg border border-line object-cover" />
              <div className="flex gap-3">
                <a href={anhUrl} download className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-navy">Tải ảnh</a>
                <button type="button" onClick={xoaAnh} className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-red-700">Gỡ ảnh</button>
              </div>
            </div>
          ) : (
            <div className="mt-3 space-y-3">
              <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp" className="block text-sm" />
              <label className="flex items-start gap-2 text-sm text-body">
                <input type="checkbox" checked={dongY} onChange={(e) => setDongY(e.target.checked)} className="mt-1" />
                <span>Đây là ảnh của chính tôi. Tôi đồng ý lưu ảnh vào hồ sơ học tập để xem lại sau buổi học.</span>
              </label>
              <button type="button" disabled={dangTai} onClick={taiAnh} className="rounded-lg bg-navy px-4 py-2 text-sm font-bold text-white disabled:opacity-60">
                {dangTai ? "Đang tải…" : "Tải ảnh lên"}
              </button>
              <p className="text-xs text-muted">Không bắt buộc. Chưa kịp chỉnh ảnh thì chỉ cần lưu câu lệnh bên dưới.</p>
            </div>
          )}
        </div>
      )}

      {cacO.map((o) => {
        const v = giaTri[o.ten];
        if (o.kieu === "checkbox") {
          return (
            <label key={o.ten} className="flex items-start gap-3 rounded-lg border border-line bg-white px-4 py-3 text-sm text-body">
              <input type="checkbox" checked={v === true} onChange={(e) => dat(o.ten, e.target.checked)} className="mt-1" />
              <span>{o.nhan}</span>
            </label>
          );
        }
        const s = typeof v === "string" ? v : "";
        const soChu = o.dem ? demChu(s) : 0;
        return (
          <label key={o.ten} className="block">
            <span className="text-sm font-semibold text-navy">{o.nhan}{o.batBuoc && <span className="text-amber-ink"> *</span>}</span>
            {o.goiY && <span className="block text-xs text-muted">{o.goiY}</span>}
            {o.kieu === "textarea" ? (
              <textarea value={s} onChange={(e) => dat(o.ten, e.target.value)} rows={o.dem ? 5 : 7} className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-[15px] leading-7 outline-none focus:border-amber" />
            ) : (
              <input value={s} onChange={(e) => dat(o.ten, e.target.value)} className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 outline-none focus:border-amber" />
            )}
            {o.dem && s && (
              <span className={`text-xs ${soChu >= o.dem.min && soChu <= o.dem.max ? "text-emerald-700" : "text-amber-ink"}`}>
                {soChu} chữ {soChu < o.dem.min ? `· gợi ý thêm cho đủ ${o.dem.min}` : soChu > o.dem.max ? `· gợi ý rút gọn dưới ${o.dem.max}` : "· vừa đẹp"}
              </span>
            )}
          </label>
        );
      })}

      {trangThai && <p className={`text-sm font-semibold ${trangThai.ok ? "text-emerald-700" : "text-red-700"}`}>{trangThai.text}</p>}
      <button disabled={dangLuu} className="rounded-lg bg-amber px-6 py-3 font-bold text-[#1a1205] hover:bg-amber-light disabled:opacity-60">
        {dangLuu ? "Đang lưu…" : `Lưu ${ma}`}
      </button>
    </form>
  );
}
