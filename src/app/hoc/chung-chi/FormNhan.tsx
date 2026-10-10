"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FormNhan({ hoTen }: { hoTen: string }) {
  const router = useRouter();
  const [ten, setTen] = useState(hoTen);
  const [dangGui, setDangGui] = useState(false);
  const [loi, setLoi] = useState("");

  async function nhan(e: React.FormEvent) {
    e.preventDefault();
    setDangGui(true);
    setLoi("");
    const r = await fetch("/api/chung-chi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hoTen: ten }),
    }).catch(() => null);
    const d = await r?.json().catch(() => null);
    setDangGui(false);
    if (r?.ok && d?.ma) router.push(`/chung-nhan/${d.ma}`);
    else setLoi(d?.error || "Chưa cấp được, thử lại.");
  }

  return (
    <form onSubmit={nhan} className="space-y-4 rounded-xl border border-line bg-white p-6">
      <label className="block">
        <span className="text-sm font-semibold text-navy">Họ tên in trên chứng chỉ</span>
        <input value={ten} onChange={(e) => setTen(e.target.value)} required maxLength={80} className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 text-lg outline-none focus:border-amber" />
        <span className="text-xs text-muted">Kiểm tra dấu tiếng Việt cho đúng. Sau khi cấp, muốn sửa tên cần liên hệ Gifty Tech.</span>
      </label>
      {loi && <p className="text-sm font-semibold text-red-700">{loi}</p>}
      <button disabled={dangGui} className="rounded-lg bg-emerald-600 px-6 py-3 font-bold text-white disabled:opacity-60">
        {dangGui ? "Đang cấp…" : "Nhận chứng chỉ"}
      </button>
    </form>
  );
}
