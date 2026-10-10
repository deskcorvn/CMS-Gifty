import type { Metadata } from "next";
import Link from "next/link";
import DauTrang from "@/components/DauTrang";
import ChanTrang from "@/components/ChanTrang";
import { tinhChoNgoi } from "@/lib/cho-ngoi";
import { dinhDangTien, khoaHoc, linkZalo, nhanLichHoc, soLienHe } from "@/lib/noi-dung";
import FormDangKy from "./FormDangKy";

export const dynamic = "force-dynamic";
const description = `Đăng ký lớp ${khoaHoc.tieuDePhu} lúc ${nhanLichHoc()}, tối đa ${khoaHoc.soCho} học viên. Điền thông tin, thanh toán VietQR và nhận link vào học qua email.`;
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

export default async function TrangDangKy() {
  const cho = await tinhChoNgoi().catch(() => null);
  const hetCho = cho?.con === 0;
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
            Ba giờ thực hành từng bước, ra về với kế hoạch chăm sóc khách hàng,
            trợ lý Claude của riêng mình và hồ sơ thương hiệu cá nhân.
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
            <div>
              <dt>Số chỗ</dt>
              <dd>
                {cho
                  ? hetCho
                    ? `Đã đủ ${cho.toiDa} chỗ`
                    : `Còn ${cho.con}/${cho.toiDa} chỗ`
                  : `Tối đa ${khoaHoc.soCho} học viên`}
              </dd>
            </div>
          </dl>
          <p>
            {khoaHoc.lop.diaDiem ||
              "Gifty Tech sẽ gửi địa điểm qua email sau khi anh chị đăng ký."}
          </p>
          <div className="auth-note">
            Không cần biết lập trình hay mua gói AI trả phí. Anh chị chuẩn bị
            laptop, sạc và đăng nhập sẵn tài khoản Claude, ChatGPT.
          </div>
        </div>
        <div>
          {hetCho ? (
            <div className="form-card" role="status">
              <h2>Lớp này đã đủ {khoaHoc.soCho} chỗ</h2>
              <p className="mt-2 text-body">
                Cảm ơn anh chị đã quan tâm. Nhắn Zalo cho Gifty Tech để được
                báo khi mở lớp sau.
              </p>
              <a
                href={linkZalo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205]"
              >
                Nhắn Zalo {soLienHe}
              </a>
            </div>
          ) : (
            <FormDangKy hocPhi={khoaHoc.hocPhi} soLienHe={soLienHe} linkZalo={linkZalo} />
          )}
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
