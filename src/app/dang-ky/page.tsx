import type { Metadata } from "next";
import Link from "next/link";
import DauTrang from "@/components/DauTrang";
import ChanTrang from "@/components/ChanTrang";
import { dinhDangTien, khoaHoc, nhanLichHoc } from "@/lib/noi-dung";
import FormDangKy from "./FormDangKy";

const description =
  "Đăng ký khóa học Hiểu AI và làm việc cùng AI của Gifty Tech. Điền thông tin, thanh toán VietQR và nhận link vào học qua email.";
export const metadata: Metadata = {
  title: "Đăng ký khóa học",
  description,
  alternates: { canonical: "/dang-ky" },
  openGraph: {
    title: "Đăng ký khóa học AI | Gifty Tech",
    description,
    url: "/dang-ky",
    locale: "vi_VN",
    type: "website",
    siteName: "Gifty Tech",
  },
};

export default function TrangDangKy() {
  return (
    <>
      <DauTrang />
      <main id="noi-dung-chinh" className="site-container auth-layout">
        <div className="auth-intro">
          <Link href="/" className="auth-back">
            ← Về trang khóa học
          </Link>
          <p className="eyebrow">Đăng ký khóa học</p>
          <h1>{khoaHoc.tieuDePhu}</h1>
          <p>
            {khoaHoc.tieuDePhu}. Thực hành từng bước để tạo ra bốn sản phẩm anh
            chị có thể lưu và dùng lại.
          </p>
          <dl className="auth-summary">
            <div>
              <dt>Lịch học</dt>
              <dd>{nhanLichHoc()}</dd>
            </div>
            <div>
              <dt>Thời lượng</dt>
              <dd>{khoaHoc.thoiLuongPhut} phút</dd>
            </div>
            <div>
              <dt>Học phí</dt>
              <dd className="price">{dinhDangTien(khoaHoc.hocPhi)}</dd>
            </div>
          </dl>
          <p>
            {khoaHoc.lop.diaDiem ||
              "Gifty Tech sẽ gửi địa điểm qua email sau khi anh chị đăng ký."}
          </p>
          <div className="auth-note">
            Không cần biết lập trình hay mua gói AI trả phí. Anh chị chuẩn bị
            laptop, sạc và đăng nhập sẵn Claude Free, ChatGPT Free.
          </div>
        </div>
        <div>
          <FormDangKy hocPhi={khoaHoc.hocPhi} />
          <p className="mt-6 text-center text-sm leading-6 text-muted">
            Đã đăng ký trước đó?{" "}
            <Link
              href="/dang-nhap"
              className="font-semibold text-amber-ink underline underline-offset-4"
            >
              Đăng nhập vào học
            </Link>
          </p>
        </div>
      </main>
      <ChanTrang />
    </>
  );
}
