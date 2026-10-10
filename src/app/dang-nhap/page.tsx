import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import DauTrang from "@/components/DauTrang";
import ChanTrang from "@/components/ChanTrang";
import BieuTuong from "@/components/BieuTuong";
import { hocVienHienTai } from "@/lib/phien";
import FormDangNhap from "./FormDangNhap";

export const metadata: Metadata = {
  title: "Đăng nhập",
  robots: { index: false, follow: false },
};
export default async function TrangDangNhap({
  searchParams,
}: {
  searchParams: Promise<{ loi?: string }>;
}) {
  if (await hocVienHienTai().catch(() => null)) redirect("/hoc");
  const { loi } = await searchParams;
  return (
    <>
      <DauTrang />
      <main id="noi-dung-chinh" className="site-container auth-layout">
        <div className="auth-intro">
          <Link href="/" className="auth-back">
            ← Về trang khóa học
          </Link>
          <p className="eyebrow">Tài khoản học viên</p>
          <h1>Đăng nhập để tiếp tục học</h1>
          <p>
            Các bước đã hoàn thành, câu lệnh và sản phẩm của anh chị được lưu
            theo tài khoản để tiếp tục học và tra cứu.
          </p>
          <div className="login-art">
            <span>
              <BieuTuong ten="mail" size={30} />
            </span>
            <div>
              <p className="font-semibold text-navy">Đăng nhập bằng email</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Không cần nhớ thêm mật khẩu.
                <br />
                Mỗi link đăng nhập chỉ dùng một lần.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-14">
          {loi === "het-han" && (
            <p
              role="alert"
              className="mb-5 rounded-lg bg-amber-soft px-4 py-3 text-sm leading-6 text-amber-ink"
            >
              Link đã hết hạn hoặc đã dùng. Nhập email để nhận link mới.
            </p>
          )}
          <FormDangNhap />
          <p className="mt-6 text-center text-sm text-muted">
            Chưa đăng ký?{" "}
            <Link
              href="/dang-ky"
              className="font-semibold text-amber-ink underline underline-offset-4"
            >
              Đăng ký khóa học
            </Link>
          </p>
        </div>
      </main>
      <ChanTrang />
    </>
  );
}
