"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function FormMaDangKy() {
  const router = useRouter();
  const [dangGui, setDangGui] = useState(false);
  const [loi, setLoi] = useState("");

  async function gui(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDangGui(true);
    setLoi("");
    const ma = new FormData(e.currentTarget).get("ma");
    const r = await fetch("/api/dang-nhap-ma", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ma }),
    }).catch(() => null);
    const d = await r?.json().catch(() => null);
    setDangGui(false);
    if (r?.ok) router.push("/hoc");
    else setLoi(d?.error || "Không đăng nhập được, vui lòng thử lại.");
  }

  return (
    <form onSubmit={gui} aria-busy={dangGui} className="form-card mt-5 space-y-4">
      <div>
        <h2>Đăng nhập bằng mã đăng ký</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Nhập nhầm email lúc đăng ký? Dùng mã <b>GTAI…</b> trong nội dung chuyển khoản (xem lại trong lịch sử giao dịch ở app
          ngân hàng) hoặc trong email xác nhận.
        </p>
      </div>
      <label className="block">
        <span className="text-sm font-semibold text-navy">Mã đăng ký</span>
        <input
          name="ma"
          autoComplete="off"
          autoCapitalize="characters"
          placeholder="GTAI……"
          required
          className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 uppercase tracking-wider outline-none focus:border-amber"
        />
      </label>
      {loi && <p role="alert" className="text-sm font-semibold text-red-700">{loi}</p>}
      <button
        type="submit"
        disabled={dangGui}
        className="w-full rounded-lg border border-navy/30 bg-white px-5 py-3 font-bold text-navy hover:bg-navy hover:text-white disabled:opacity-60"
      >
        {dangGui ? "Đang kiểm tra…" : "Đăng nhập bằng mã"}
      </button>
    </form>
  );
}

export default function FormDangNhap() {
  return (
    <>
      <FormEmail />
      <FormMaDangKy />
    </>
  );
}

function FormEmail() {
  const [dangGui, setDangGui] = useState(false);
  const [kq, setKq] = useState<{ ok: boolean; text: string } | null>(null);

  async function gui(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDangGui(true);
    setKq(null);
    const email = new FormData(e.currentTarget).get("email");
    const r = await fetch("/api/dang-nhap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    }).catch(() => null);
    const d = await r?.json().catch(() => null);
    setDangGui(false);
    setKq(
      r?.ok
        ? { ok: true, text: d.thongBao }
        : { ok: false, text: d?.error || "Không gửi được, vui lòng thử lại." },
    );
  }

  return (
    <form onSubmit={gui} aria-busy={dangGui} className="form-card space-y-5">
      <div>
        <h2>Đăng nhập trang học</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Nhập email đã đăng ký. Gifty Tech sẽ gửi link đăng nhập vào hộp thư.
        </p>
      </div>
      <label className="block">
        <span className="text-sm font-semibold text-navy">
          Email đã dùng khi đăng ký
        </span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="anhchi@example.com"
          required
          className="mt-1 w-full rounded-lg border border-line px-3 py-2.5 outline-none focus:border-amber"
        />
      </label>
      {kq && (
        <p
          role={kq.ok ? "status" : "alert"}
          className={`text-sm font-semibold ${kq.ok ? "text-emerald-700" : "text-red-700"}`}
        >
          {kq.text}
        </p>
      )}
      <button
        type="submit"
        disabled={dangGui}
        className="w-full rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205] hover:bg-amber-light disabled:opacity-60"
      >
        {dangGui ? "Đang gửi…" : "Gửi link đăng nhập"}
      </button>
      <p className="text-xs leading-6 text-muted">
        Chưa thấy email? Kiểm tra cả mục Thư rác / Spam. Nhập nhầm email lúc đăng ký thì đăng nhập bằng mã đăng ký
        ở ô bên dưới.
      </p>
    </form>
  );
}
