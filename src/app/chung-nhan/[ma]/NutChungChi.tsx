"use client";

import NutSaoChep from "@/components/NutSaoChep";

export default function NutChungChi({ ma, link, linkedin }: { ma: string; link: string; linkedin: string }) {
  return (
    <div className="khong-in flex flex-wrap gap-3">
      <a href={`/chung-nhan/${ma}/anh`} download={`chung-chi-${ma}.png`} className="rounded-lg bg-amber px-5 py-2.5 font-bold text-[#1a1205] hover:bg-amber-light">Tải ảnh chứng chỉ</a>
      <button type="button" onClick={() => window.print()} className="rounded-lg border border-line bg-white px-5 py-2.5 font-bold text-navy">In / Lưu PDF</button>
      <NutSaoChep noiDung={link} nhan="Chép link kiểm tra" nhanXong="Đã chép link" />
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-line bg-white px-5 py-2.5 font-bold text-navy">Thêm vào LinkedIn</a>
    </div>
  );
}
