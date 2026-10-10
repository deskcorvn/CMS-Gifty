import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import DauTrang from "@/components/DauTrang";
import { hocVienHienTai } from "@/lib/phien";
import FormDangNhap from "./FormDangNhap";

export const metadata: Metadata = { title: "Đăng nhập", robots: { index: false } };

export default async function TrangDangNhap({ searchParams }: { searchParams: Promise<{ loi?: string }> }) {
  if (await hocVienHienTai().catch(() => null)) redirect("/hoc");
  const { loi } = await searchParams;
  return (
    <>
      <DauTrang />
      <main className="mx-auto max-w-md px-4 py-12">
        <h1 className="text-2xl font-bold text-navy">Đăng nhập trang học</h1>
        <p className="mt-2 text-body">Không cần mật khẩu. Nhập email, Gifty Tech gửi link đăng nhập vào hộp thư.</p>
        {loi === "het-han" && (
          <p className="mt-4 rounded-lg bg-amber-soft px-4 py-3 text-sm text-amber-ink">Link đã hết hạn hoặc đã dùng. Nhập email để nhận link mới.</p>
        )}
        <div className="mt-6"><FormDangNhap /></div>
        <p className="mt-6 text-sm text-muted">Chưa đăng ký? <Link href="/dang-ky" className="font-semibold text-amber-ink underline">Đăng ký khóa học</Link></p>
      </main>
    </>
  );
}
