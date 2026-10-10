"use client";

import { useState } from "react";

export default function FormDangNhap() {
  const [dangGui, setDangGui] = useState(false);
  const [kq, setKq] = useState<{ ok: boolean; text: string } | null>(null);

  async function gui(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDangGui(true);
    const email = new FormData(e.currentTarget).get("email");
    const r = await fetch("/api/dang-nhap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch(() => null);
    const d = await r?.json().catch(() => null);
    setDangGui(false);
    setKq(r?.ok ? { ok: true, text: d.thongBao } : { ok: false, text: d?.error || "Không gửi được, vui lòng thử lại." });
  }

  return (
    <form onSubmit={gui} className="space-y-4 rounded-xl border border-line bg-white p-6">
      <label className="block">
        <span className="text-sm font-semibold text-navy">Email đã dùng khi đăng ký</span>
        <input name="email" type="email" autoComplete="email" required className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 outline-none focus:border-amber" />
      </label>
      {kq && <p className={`text-sm font-semibold ${kq.ok ? "text-emerald-700" : "text-red-700"}`}>{kq.text}</p>}
      <button disabled={dangGui} className="w-full rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205] hover:bg-amber-light disabled:opacity-60">
        {dangGui ? "Đang gửi…" : "Gửi link đăng nhập"}
      </button>
    </form>
  );
}
