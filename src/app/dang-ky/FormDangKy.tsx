"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NutSaoChep from "@/components/NutSaoChep";

type Don = {
  ma: string;
  soTien: number;
  conThieu: number;
  noiDung: string;
  qr: string | null;
  taiKhoan: { nganHang: string; soTk: string; chuTk: string };
};

const tien = (n: number) => `${n.toLocaleString("vi-VN")}đ`;

export default function FormDangKy({ hocPhi }: { hocPhi: number }) {
  const router = useRouter();
  const [dangGui, setDangGui] = useState(false);
  const [loi, setLoi] = useState("");
  const [thongBao, setThongBao] = useState("");
  const [don, setDon] = useState<Don | null>(null);
  const [trangThai, setTrangThai] = useState<{ trangThai: string; conThieu: number } | null>(null);

  // Hỏi trạng thái mỗi 4 giây; đủ tiền thì máy chủ đặt phiên đăng nhập luôn cho trình duyệt này.
  useEffect(() => {
    if (!don || trangThai?.trangThai === "DA_DU") return;
    const t = window.setInterval(async () => {
      const r = await fetch(`/api/don/${don.ma}`, { cache: "no-store" }).catch(() => null);
      if (!r?.ok) return;
      const d = await r.json();
      setTrangThai(d);
      if (d.trangThai === "DA_DU") window.setTimeout(() => router.push("/hoc"), 2500);
    }, 4000);
    return () => window.clearInterval(t);
  }, [don, trangThai?.trangThai, router]);

  async function gui(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoi("");
    setDangGui(true);
    const f = new FormData(e.currentTarget);
    const r = await fetch("/api/dang-ky", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hoTen: f.get("hoTen"), email: f.get("email"), sdt: f.get("sdt") }),
    }).catch(() => null);
    setDangGui(false);
    const d = await r?.json().catch(() => null);
    if (!r?.ok) return setLoi(d?.error || "Không gửi được, vui lòng thử lại.");
    if (d.daKichHoat) return setThongBao(d.thongBao);
    setDon(d);
  }

  if (thongBao) {
    return (
      <div className="rounded-xl border border-line bg-white p-6">
        <p className="text-body">{thongBao}</p>
        <a href="/dang-nhap" className="mt-4 inline-block rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205]">Đăng nhập</a>
      </div>
    );
  }

  if (don) {
    const conThieu = trangThai?.conThieu ?? don.conThieu;
    if (trangThai?.trangThai === "DA_DU") {
      return (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-6">
          <p className="text-lg font-bold text-emerald-800">Đã nhận đủ học phí. Cảm ơn anh chị!</p>
          <p className="mt-2 text-body">Đang chuyển vào trang học… Email xác nhận kèm danh sách chuẩn bị cũng đã được gửi.</p>
        </div>
      );
    }
    return (
      <div className="rounded-xl border border-line bg-white p-6">
        <h2 className="text-lg font-bold text-navy">Quét mã để chuyển khoản</h2>
        <p className="mt-1 text-sm text-muted">Mã QR đã điền sẵn số tiền và nội dung. Hệ thống tự xác nhận trong khoảng 1 phút sau khi tiền về.</p>
        <div className="mt-5 grid gap-6 md:grid-cols-[260px_1fr]">
          {don.qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={don.qr} alt={`Mã VietQR chuyển ${tien(conThieu)} nội dung ${don.noiDung}`} className="w-full rounded-lg border border-line" />
          ) : null}
          <dl className="space-y-3 text-sm">
            <div><dt className="text-muted">Ngân hàng</dt><dd className="font-bold">{don.taiKhoan.nganHang}</dd></div>
            <div><dt className="text-muted">Số tài khoản</dt><dd className="flex items-center gap-3 font-bold">{don.taiKhoan.soTk} <NutSaoChep noiDung={don.taiKhoan.soTk} nhanXong="Đã chép" /></dd></div>
            <div><dt className="text-muted">Chủ tài khoản</dt><dd className="font-bold">{don.taiKhoan.chuTk}</dd></div>
            <div><dt className="text-muted">Số tiền {conThieu < don.soTien ? "còn thiếu" : ""}</dt><dd className="text-lg font-bold text-amber-ink">{tien(conThieu)}</dd></div>
            <div><dt className="text-muted">Nội dung chuyển khoản (bắt buộc đúng)</dt><dd className="flex items-center gap-3 text-lg font-bold">{don.noiDung} <NutSaoChep noiDung={don.noiDung} nhanXong="Đã chép" /></dd></div>
          </dl>
        </div>
        <p className="mt-5 rounded-lg bg-amber-soft px-4 py-3 text-sm text-amber-ink">
          {trangThai?.trangThai === "THIEU"
            ? `Đã nhận một phần. Vui lòng chuyển thêm ${tien(conThieu)} với cùng nội dung.`
            : "Đang chờ tiền về… Giữ trang này mở. Nếu đã chuyển mà 10 phút chưa thấy xác nhận, nhắn Gifty Tech kèm mã " + don.ma + "."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={gui} className="space-y-4 rounded-xl border border-line bg-white p-6">
      {[
        { name: "hoTen", label: "Họ và tên", type: "text", auto: "name" },
        { name: "email", label: "Email (nhận link vào học và chứng chỉ)", type: "email", auto: "email" },
        { name: "sdt", label: "Số điện thoại / Zalo", type: "tel", auto: "tel" },
      ].map((o) => (
        <label key={o.name} className="block">
          <span className="text-sm font-semibold text-navy">{o.label}</span>
          <input name={o.name} type={o.type} autoComplete={o.auto} required className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 outline-none focus:border-amber" />
        </label>
      ))}
      {loi && <p className="text-sm font-semibold text-red-700">{loi}</p>}
      <button disabled={dangGui} className="w-full rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205] hover:bg-amber-light disabled:opacity-60">
        {dangGui ? "Đang tạo mã thanh toán…" : `Tiếp tục thanh toán ${tien(hocPhi)}`}
      </button>
      <p className="text-xs leading-5 text-muted">Thông tin chỉ dùng để quản lý lớp học, gửi link vào học và cấp chứng chỉ.</p>
    </form>
  );
}
