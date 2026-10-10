"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NutSaoChep from "@/components/NutSaoChep";
import { goiYEmail } from "@/lib/goi-y-email";

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
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const goiY = goiYEmail(email);
  const [trangThai, setTrangThai] = useState<{
    trangThai: string;
    conThieu: number;
  } | null>(null);

  // Hỏi trạng thái mỗi 4 giây; đủ tiền thì máy chủ đặt phiên đăng nhập luôn cho trình duyệt này.
  useEffect(() => {
    if (!don || trangThai?.trangThai === "DA_DU") return;
    const t = window.setInterval(async () => {
      const r = await fetch(`/api/don/${don.ma}`, { cache: "no-store" }).catch(
        () => null,
      );
      if (!r?.ok) return;
      const d = await r.json();
      setTrangThai(d);
      if (d.trangThai === "DA_DU")
        window.setTimeout(() => router.push("/hoc"), 8000);
    }, 4000);
    return () => window.clearInterval(t);
  }, [don, trangThai?.trangThai, router]);

  async function gui(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoi("");
    setDangGui(true);
    const f = new FormData(e.currentTarget);
    if (email.trim().toLowerCase() !== email2.trim().toLowerCase()) {
      setDangGui(false);
      return setLoi("Hai ô email chưa giống nhau. Kiểm tra lại giúp Gifty Tech nhé.");
    }
    const r = await fetch("/api/dang-ky", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hoTen: f.get("hoTen"),
        email: email.trim(),
        sdt: f.get("sdt"),
      }),
    }).catch(() => null);
    setDangGui(false);
    const d = await r?.json().catch(() => null);
    if (!r?.ok) return setLoi(d?.error || "Không gửi được, vui lòng thử lại.");
    if (d.daKichHoat) return setThongBao(d.thongBao);
    setDon(d);
  }

  if (thongBao) {
    return (
      <div className="form-card" role="status">
        <p className="text-body">{thongBao}</p>
        <a
          href="/dang-nhap"
          className="mt-4 inline-block rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205]"
        >
          Đăng nhập
        </a>
      </div>
    );
  }

  if (don) {
    const conThieu = trangThai?.conThieu ?? don.conThieu;
    if (trangThai?.trangThai === "DA_DU") {
      return (
        <div
          role="status"
          className="rounded-xl border border-emerald-300 bg-emerald-50 p-6"
        >
          <p className="text-lg font-bold text-emerald-800">
            Đã nhận đủ học phí. Cảm ơn anh chị!
          </p>
          <p className="mt-3 rounded-lg border border-amber/40 bg-white px-4 py-3 text-body">
            <b>Mã đăng ký của anh chị: {don.ma}</b>
            <br />
            <span className="text-sm">
              Chụp màn hình hoặc lưu lại mã này. Mã dùng để đăng nhập khi không nhận được email, và luôn tra lại được
              trong nội dung chuyển khoản ở app ngân hàng.
            </span>
          </p>
          <p className="mt-3 text-sm text-body">Đang chuyển vào trang học…</p>
        </div>
      );
    }
    return (
      <div className="form-card" role="status">
        <h2 className="text-lg font-bold text-navy">Quét mã để chuyển khoản</h2>
        <p className="mt-2 rounded-lg bg-paper px-3 py-2 text-sm text-body ring-1 ring-line">
          Email nhận link vào học: <b>{email}</b> · Mã đăng ký: <b>{don.ma}</b>
        </p>
        <p className="mt-1 text-sm text-muted">
          Mã QR đã điền sẵn số tiền và nội dung. Trang sẽ tự cập nhật khi
          hệ thống nhận được xác nhận thanh toán.
        </p>
        <div className="mt-5 grid gap-6 xl:grid-cols-[180px_1fr]">
          {don.qr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={don.qr}
              alt={`Mã VietQR chuyển ${tien(conThieu)} nội dung ${don.noiDung}`}
              className="w-full rounded-lg border border-line"
            />
          ) : null}
          <dl className="space-y-3 text-sm">
            <div>
              <dt className="text-muted">Ngân hàng</dt>
              <dd className="font-bold">{don.taiKhoan.nganHang}</dd>
            </div>
            <div>
              <dt className="text-muted">Số tài khoản</dt>
              <dd className="flex flex-wrap items-center gap-3 font-bold">
                {don.taiKhoan.soTk}{" "}
                <NutSaoChep noiDung={don.taiKhoan.soTk} nhanXong="Đã chép" />
              </dd>
            </div>
            <div>
              <dt className="text-muted">Chủ tài khoản</dt>
              <dd className="font-bold">{don.taiKhoan.chuTk}</dd>
            </div>
            <div>
              <dt className="text-muted">
                Số tiền {conThieu < don.soTien ? "còn thiếu" : ""}
              </dt>
              <dd className="text-lg font-bold text-amber-ink">
                {tien(conThieu)}
              </dd>
            </div>
            <div>
              <dt className="text-muted">
                Nội dung chuyển khoản (bắt buộc đúng)
              </dt>
              <dd className="flex flex-wrap items-center gap-3 text-lg font-bold">
                {don.noiDung}{" "}
                <NutSaoChep noiDung={don.noiDung} nhanXong="Đã chép" />
              </dd>
            </div>
          </dl>
        </div>
        <p
          role="status"
          className="mt-5 rounded-lg bg-amber-soft px-4 py-3 text-sm text-amber-ink"
        >
          {trangThai?.trangThai === "THIEU"
            ? `Đã nhận một phần. Vui lòng chuyển thêm ${tien(conThieu)} với cùng nội dung.`
            : "Đang chờ tiền về… Giữ trang này mở. Nếu đã chuyển mà 10 phút chưa thấy xác nhận, nhắn Gifty Tech kèm mã " +
              don.ma +
              "."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={gui} aria-busy={dangGui} className="form-card space-y-5">
      <div>
        <h2>Thông tin học viên</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Dùng email anh chị thường kiểm tra để nhận link vào học và chứng chỉ.
        </p>
      </div>
      {[
        {
          name: "hoTen",
          label: "Họ và tên",
          type: "text",
          auto: "name",
          placeholder: "Họ và tên đầy đủ",
        },
        {
          name: "sdt",
          label: "Số điện thoại / Zalo",
          type: "tel",
          auto: "tel",
          placeholder: "Số điện thoại liên hệ",
        },
      ].map((o) => (
        <label key={o.name} className="block">
          <span className="text-sm font-semibold text-navy">{o.label}</span>
          <input
            name={o.name}
            type={o.type}
            autoComplete={o.auto}
            placeholder={o.placeholder}
            required
            className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 outline-none focus:border-amber"
          />
        </label>
      ))}
      <label className="block">
        <span className="text-sm font-semibold text-navy">Email (nhận link vào học và chứng chỉ)</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="anhchi@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 outline-none focus:border-amber"
        />
        {goiY && (
          <span className="mt-1 block text-sm text-amber-ink">
            Có phải ý anh chị là <b>{goiY}</b>?{" "}
            <button type="button" className="font-semibold underline" onClick={() => { setEmail(goiY); setEmail2(""); }}>
              Dùng email này
            </button>
          </span>
        )}
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-navy">Nhập lại email</span>
        <input
          name="email2"
          type="email"
          autoComplete="off"
          placeholder="Gõ lại email ở trên"
          required
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
          onPaste={(e) => e.preventDefault()}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 outline-none focus:border-amber"
        />
        {email2 && email2.trim().toLowerCase() !== email.trim().toLowerCase() && (
          <span className="mt-1 block text-sm text-red-700">Chưa giống email ở trên.</span>
        )}
      </label>
      {loi && (
        <p role="alert" className="text-sm font-semibold text-red-700">
          {loi}
        </p>
      )}
      <button
        type="submit"
        disabled={dangGui}
        className="w-full rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205] hover:bg-amber-light disabled:opacity-60"
      >
        {dangGui
          ? "Đang tạo mã thanh toán…"
          : `Tiếp tục thanh toán ${tien(hocPhi)}`}
      </button>
      <p className="text-xs leading-5 text-muted">
        Thông tin chỉ dùng để quản lý lớp học, gửi link vào học và cấp chứng
        chỉ.
      </p>
    </form>
  );
}
