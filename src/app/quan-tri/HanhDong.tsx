"use client";

import { useState } from "react";

async function goi(body: Record<string, unknown>) {
  const r = await fetch("/api/quan-tri/hanh-dong", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).catch(() => null);
  const d = await r?.json().catch(() => null);
  return { ok: Boolean(r?.ok), d };
}

const nutCss = "rounded border border-line bg-white px-2.5 py-1 text-xs font-semibold text-navy hover:bg-navy hover:text-white disabled:opacity-50";

export function NutKichHoat({ hocVienId }: { hocVienId: string }) {
  const [kq, setKq] = useState("");
  return (
    <span className="inline-flex flex-col gap-1">
      <button className={nutCss} onClick={async () => {
        const ghiChu = window.prompt("Ghi chú kích hoạt tay (vd: đóng tiền mặt tại lớp):", "đóng tiền mặt");
        if (ghiChu === null) return;
        const { ok, d } = await goi({ loai: "kich-hoat", hocVienId, ghiChu });
        setKq(ok ? d.thongBao : d?.error || "Lỗi");
        if (ok) window.setTimeout(() => window.location.reload(), 1200);
      }}>Kích hoạt tay</button>
      {kq && <span className="text-xs text-muted">{kq}</span>}
    </span>
  );
}

export function NutLinkDangNhap({ hocVienId }: { hocVienId: string }) {
  const [link, setLink] = useState("");
  return (
    <span className="inline-flex flex-col gap-1">
      <button className={nutCss} onClick={async () => {
        const { ok, d } = await goi({ loai: "link-dang-nhap", hocVienId });
        if (ok) { setLink(d.link); navigator.clipboard?.writeText(d.link).catch(() => {}); }
      }}>Link đăng nhập</button>
      {link && <span className="max-w-xs break-all text-xs text-emerald-700">Đã chép (hạn 24 giờ): {link}</span>}
    </span>
  );
}

export function NutThuHoi({ ma }: { ma: string }) {
  return (
    <button className={nutCss} onClick={async () => {
      const lyDo = window.prompt(`Lý do thu hồi chứng chỉ ${ma}:`);
      if (!lyDo) return;
      const { ok, d } = await goi({ loai: "thu-hoi", ma, lyDo });
      if (ok) window.location.reload(); else window.alert(d?.error || "Lỗi");
    }}>Thu hồi</button>
  );
}

export function NutKhopTay({ giaoDichId }: { giaoDichId: number }) {
  return (
    <button className={nutCss} onClick={async () => {
      const ma = window.prompt("Khớp giao dịch này vào đơn có mã (GTAI……):");
      if (!ma) return;
      const { ok, d } = await goi({ loai: "khop-tay", giaoDichId, ma });
      if (ok) window.location.reload(); else window.alert(d?.error || "Lỗi");
    }}>Khớp tay</button>
  );
}

export function NutDoiSoat() {
  const [kq, setKq] = useState("");
  const [dang, setDang] = useState(false);
  return (
    <span className="inline-flex flex-col gap-1">
      <button disabled={dang} className="rounded-lg bg-navy px-4 py-2 text-sm font-bold text-white disabled:opacity-60" onClick={async () => {
        setDang(true);
        const { ok, d } = await goi({ loai: "doi-soat" });
        setDang(false);
        setKq(ok ? `SePay có ${d.tong} giao dịch vào từ ${d.tuNgay}; bổ sung ${d.boSung.length}; không mã tham chiếu ${d.khongThamChieu.length}.` : d?.error || "Lỗi");
      }}>{dang ? "Đang đối soát…" : "Đối soát SePay 7 ngày"}</button>
      {kq && <span className="text-xs text-muted">{kq}</span>}
    </span>
  );
}
