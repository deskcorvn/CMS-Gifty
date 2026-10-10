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

export function NutMoKhoaHoc({ daMo }: { daMo: boolean }) {
  const [dang, setDang] = useState(false);
  return (
    <button
      disabled={dang}
      className={`rounded-lg px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60 ${daMo ? "bg-red-700" : "bg-emerald-700"}`}
      onClick={async () => {
        const hoi = daMo
          ? "Khóa lại nội dung khóa học? Học viên sẽ chỉ còn thấy lịch học và phần chuẩn bị."
          : "Mở nội dung khóa học cho TẤT CẢ học viên đã đóng học phí?";
        if (!window.confirm(hoi)) return;
        setDang(true);
        const { ok, d } = await goi({ loai: "mo-khoa-hoc", mo: !daMo });
        if (ok) window.location.reload();
        else { setDang(false); window.alert(d?.error || "Lỗi"); }
      }}
    >
      {daMo ? "Khóa lại nội dung" : "Mở khóa học"}
    </button>
  );
}

export function NutEmailThu() {
  const [kq, setKq] = useState("");
  return (
    <span className="inline-flex flex-col gap-1">
      <button className={nutCss} onClick={async () => {
        const den = window.prompt("Gửi email thử tới địa chỉ:");
        if (!den) return;
        setKq("Đang gửi…");
        const { ok, d } = await goi({ loai: "gui-email-thu", den });
        setKq(ok ? d.thongBao : d?.error || "Lỗi");
      }}>Gửi email thử</button>
      {kq && <span className="max-w-md text-xs text-muted">{kq}</span>}
    </span>
  );
}

export function NutGuiLaiEmail({ hocVienId }: { hocVienId: string }) {
  const [kq, setKq] = useState("");
  return (
    <span className="inline-flex flex-col gap-1">
      <button className={nutCss} onClick={async () => {
        setKq("Đang gửi…");
        const { ok, d } = await goi({ loai: "gui-lai-email", hocVienId });
        setKq(ok ? d.thongBao : d?.error || "Lỗi");
      }}>Gửi lại email</button>
      {kq && <span className="max-w-xs text-xs text-muted">{kq}</span>}
    </span>
  );
}

export function NutSuaEmail({ hocVienId, email }: { hocVienId: string; email: string }) {
  return (
    <button className={nutCss} onClick={async () => {
      const moi = window.prompt("Email đúng của học viên:", email);
      if (!moi || moi.trim().toLowerCase() === email) return;
      const { ok, d } = await goi({ loai: "sua-email", hocVienId, email: moi.trim() });
      window.alert(ok ? d.thongBao : d?.error || "Lỗi");
      if (ok) window.location.reload();
    }}>Sửa email</button>
  );
}

export function NutSuaTenCc({ ma, hoTen }: { ma: string; hoTen: string }) {
  return (
    <button className={nutCss} onClick={async () => {
      const moi = window.prompt(`Họ tên đúng in trên chứng chỉ ${ma}:`, hoTen);
      if (!moi || moi.trim() === hoTen) return;
      const { ok, d } = await goi({ loai: "sua-ten-cc", ma, hoTen: moi.trim() });
      if (ok) window.location.reload(); else window.alert(d?.error || "Lỗi");
    }}>Sửa tên CC</button>
  );
}

export function NutTaiKhoanThu({ hocVienId, laThu }: { hocVienId: string; laThu: boolean }) {
  return (
    <button className={nutCss} title="Tài khoản thử không tính vào số chỗ của lớp" onClick={async () => {
      const { ok, d } = await goi({ loai: "tai-khoan-thu", hocVienId, laThu: !laThu });
      if (ok) window.location.reload(); else window.alert(d?.error || "Lỗi");
    }}>{laThu ? "Bỏ đánh dấu thử" : "Tài khoản thử"}</button>
  );
}

export function NutXoaHocVien({ hocVienId, email }: { hocVienId: string; email: string }) {
  return (
    <button className={`${nutCss} border-red-300 text-red-700`} onClick={async () => {
      const xacNhan = window.prompt(
        `Xóa hẳn tài khoản ${email}: tiến độ, sản phẩm, chứng chỉ và đơn học phí sẽ mất, không khôi phục được. Giao dịch ngân hàng vẫn giữ để đối soát.\n\nGõ lại email để xác nhận:`,
      );
      if (!xacNhan) return;
      const { ok, d } = await goi({ loai: "xoa-hoc-vien", hocVienId, xacNhan: xacNhan.trim() });
      if (ok) window.location.reload(); else window.alert(d?.error || "Lỗi");
    }}>Xóa tài khoản</button>
  );
}
