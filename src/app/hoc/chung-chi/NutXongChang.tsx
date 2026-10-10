"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/** Đánh dấu hoàn thành một chặng ngay trên trang chứng chỉ; xong chặng cuối thì sang trang chứng chỉ vừa cấp. */
export default function NutXongChang({ changSo }: { changSo: number }) {
  const router = useRouter();
  const [dang, setDang] = useState(false);
  const [loi, setLoi] = useState("");
  return (
    <span className="inline-flex flex-col">
      <button
        type="button"
        disabled={dang}
        onClick={async () => {
          setDang(true);
          setLoi("");
          const r = await fetch("/api/tien-do", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ changSo, xong: true }),
          }).catch(() => null);
          const d = await r?.json().catch(() => null);
          setDang(false);
          if (!r?.ok) return setLoi(d?.error || "Chưa lưu được, thử lại.");
          if (d?.chungChi) router.push(`/chung-nhan/${d.chungChi}`);
          else router.refresh();
        }}
        className="rounded-lg bg-emerald-700 px-3 py-1.5 text-sm font-bold text-white disabled:opacity-60"
      >
        {dang ? "Đang lưu…" : "✓ Đã làm xong"}
      </button>
      {loi && <span className="mt-1 text-xs text-red-700">{loi}</span>}
    </span>
  );
}
