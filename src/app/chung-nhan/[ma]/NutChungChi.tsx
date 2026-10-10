"use client";

import { useState } from "react";

const nutPhu = "rounded-lg border border-line bg-white px-5 py-2.5 font-bold text-navy hover:border-navy";

/**
 * Chia sẻ chứng chỉ lên Facebook / Zalo, tải ảnh, in.
 * Zalo không có link chia sẻ công khai khi chưa có Official Account: điện thoại dùng bảng chia sẻ của máy
 * (có sẵn Zalo); máy tính thì chép link rồi mở Zalo Web để dán vào cuộc trò chuyện.
 */
export default function NutChungChi({ ma, link, tieuDe }: { ma: string; link: string; tieuDe: string }) {
  const [nhac, setNhac] = useState("");

  async function chiaSeZalo() {
    const laDienThoai = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (laDienThoai && navigator.share) {
      try {
        await navigator.share({ title: tieuDe, text: tieuDe, url: link });
      } catch {
        /* người dùng đóng bảng chia sẻ */
      }
      return;
    }
    await navigator.clipboard?.writeText(link).catch(() => {});
    setNhac("Đã chép link chứng chỉ. Dán (Ctrl+V) vào cuộc trò chuyện Zalo vừa mở.");
    window.open("https://chat.zalo.me/", "_blank", "noopener");
  }

  return (
    <div className="khong-in space-y-3">
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#1877f2] px-5 py-2.5 font-bold text-white hover:opacity-90"
        >
          Chia sẻ Facebook
        </a>
        <button type="button" onClick={chiaSeZalo} className="rounded-lg bg-[#0068ff] px-5 py-2.5 font-bold text-white hover:opacity-90">
          Chia sẻ Zalo
        </button>
        <a href={`/chung-nhan/${ma}/anh`} download={`chung-chi-${ma}.png`} className={nutPhu}>Tải ảnh chứng chỉ</a>
        <button type="button" onClick={() => window.print()} className={nutPhu}>In / Lưu PDF</button>
      </div>
      {nhac && <p role="status" className="text-sm font-semibold text-emerald-700">{nhac}</p>}
    </div>
  );
}
