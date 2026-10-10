"use client";

import { useState } from "react";

/** Hộp "Thông tin của tôi" trên trang học: mã đăng ký + tự sửa email/số điện thoại nếu nhập nhầm. */
export default function ThongTinCuaToi({ email, sdt, maDangKy }: { email: string; sdt: string; maDangKy: string | null }) {
  const [sua, setSua] = useState(false);
  const [e, setE] = useState(email);
  const [p, setP] = useState(sdt);
  const [dang, setDang] = useState(false);
  const [kq, setKq] = useState<{ ok: boolean; text: string } | null>(null);

  async function luu(ev: React.FormEvent) {
    ev.preventDefault();
    setDang(true);
    setKq(null);
    const r = await fetch("/api/thong-tin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: e, sdt: p }),
    }).catch(() => null);
    const d = await r?.json().catch(() => null);
    setDang(false);
    if (r?.ok) {
      setKq({ ok: true, text: d.thongBao });
      setSua(false);
    } else setKq({ ok: false, text: d?.error || "Chưa lưu được, thử lại." });
  }

  return (
    <section className="mt-6 rounded-xl border border-line bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-navy">Thông tin của tôi</p>
          {maDangKy && (
            <p className="mt-1 text-sm text-body">
              Mã đăng ký: <b className="tracking-wider">{maDangKy}</b>
              <span className="block text-xs text-muted">Lưu lại mã này để đăng nhập khi không nhận được email.</span>
            </p>
          )}
          {!sua && (
            <p className="mt-2 text-sm text-body">
              Email: <b>{e}</b> · Điện thoại: <b>{p || "chưa có"}</b>
            </p>
          )}
        </div>
        {!sua && (
          <button type="button" onClick={() => setSua(true)} className="rounded-lg border border-line px-3 py-1.5 text-sm font-semibold text-navy">
            Sửa email / số điện thoại
          </button>
        )}
      </div>
      {sua && (
        <form onSubmit={luu} className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end">
          <label className="block text-sm">
            <span className="font-semibold text-navy">Email</span>
            <input type="email" required value={e} onChange={(x) => setE(x.target.value)} className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
          </label>
          <label className="block text-sm">
            <span className="font-semibold text-navy">Số điện thoại / Zalo</span>
            <input type="tel" required value={p} onChange={(x) => setP(x.target.value)} className="mt-1 w-full rounded-lg border border-line px-3 py-2" />
          </label>
          <div className="flex gap-2">
            <button disabled={dang} className="rounded-lg bg-amber px-4 py-2 text-sm font-bold text-[#1a1205] disabled:opacity-60">{dang ? "Đang lưu…" : "Lưu"}</button>
            <button type="button" onClick={() => { setSua(false); setE(email); setP(sdt); }} className="px-2 text-sm text-muted underline">Hủy</button>
          </div>
        </form>
      )}
      {kq && <p role={kq.ok ? "status" : "alert"} className={`mt-2 text-sm font-semibold ${kq.ok ? "text-emerald-700" : "text-red-700"}`}>{kq.text}</p>}
    </section>
  );
}
