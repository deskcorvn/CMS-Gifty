"use client";

import { useCallback, useState } from "react";

/** Nút sao chép một chạm (từ PracticeLabPage của giftyid), có dự phòng execCommand cho webview cũ. */
export default function NutSaoChep({ noiDung, nhan = "Sao chép", nhanXong = "Đã chép, dán vào AI" }: { noiDung: string; nhan?: string; nhanXong?: string }) {
  const [daChep, setDaChep] = useState(false);
  const chep = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(noiDung);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = noiDung;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setDaChep(true);
    window.setTimeout(() => setDaChep(false), 2000);
  }, [noiDung]);

  return (
    <button
      type="button"
      onClick={chep}
      aria-live="polite"
      className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition ${
        daChep ? "bg-emerald-600 text-white" : "bg-amber text-[#1a1205] hover:bg-amber-light"
      }`}
    >
      {daChep ? "✓ " + nhanXong : nhan}
    </button>
  );
}
