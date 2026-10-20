import type { Metadata } from "next";
import Image from "next/image";
import { COURSE_INSTRUCTOR, COURSE_MESSAGE } from "@/lib/course-brand";
import Link from "next/link";
import DauTrang from "@/components/DauTrang";
import ChanTrang from "@/components/ChanTrang";
import BieuTuong from "@/components/BieuTuong";
import AnhKhoaHoc from "@/components/AnhKhoaHoc";
import { tinhChoNgoi } from "@/lib/cho-ngoi";
import {
  batDauLop,
  dinhDangTien,
  dsChang,
  khoaHoc,
  linkZalo,
  nhanLichHoc,
  soLienHe,
  tongSoBuoc,
} from "@/lib/noi-dung";
import { hocVienHienTai } from "@/lib/phien";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: { absolute: `${COURSE_MESSAGE.title} | Gifty Tech` },
  description: COURSE_MESSAGE.description,
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${COURSE_MESSAGE.title} | Gifty Tech`,
    description: COURSE_MESSAGE.description,
    locale: "vi_VN",
    type: "website",
    siteName: "Gifty Tech",
  },
};

export default async function TrangChu() {
  const [hv, cho] = await Promise.all([
    hocVienHienTai().catch(() => null),
    tinhChoNgoi().catch(() => null),
  ]);
  const hetCho = !hv && cho?.con === 0;
  const href = hv ? "/hoc" : "/dang-ky";
  const nhanCho = cho
    ? cho.con === 0
      ? `Đã đủ ${cho.toiDa} chỗ`
      : `Còn ${cho.con}/${cho.toiDa} chỗ`
    : `Tối đa ${khoaHoc.soCho} học viên`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: COURSE_MESSAGE.title,
    description: COURSE_MESSAGE.description,
    url: siteUrl,
    inLanguage: "vi",
    provider: {
      "@type": "Organization",
      name: "Gifty Tech",
      url: "https://giftytech.com",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      startDate: batDauLop,
      courseWorkload: `PT${khoaHoc.thoiLuongPhut}M`,
      maximumAttendeeCapacity: khoaHoc.soCho,
      instructor: { "@type": "Person", name: COURSE_INSTRUCTOR.name, jobTitle: COURSE_INSTRUCTOR.position, sameAs: COURSE_INSTRUCTOR.linkedin },
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: khoaHoc.hocPhi,
      priceCurrency: "VND",
      url: `${siteUrl}/dang-ky`,
      availability:
        cho?.con === 0
          ? "https://schema.org/SoldOut"
          : "https://schema.org/InStock",
    },
  };
  return (
    <>
      <DauTrang dangHoc={Boolean(hv)} />
      <main id="noi-dung-chinh" className="site-container course-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <div className="course-layout">
          <div className="course-intro">
            <p className="course-category">
              Khóa học thực hành · Dành cho người mới bắt đầu
            </p>
            <h1>{COURSE_MESSAGE.title}</h1>
            <p className="hero-schedule">
              <BieuTuong ten="calendar" size={16} />
              <span>
                Lớp <strong>{nhanLichHoc()}</strong>
              </span>
            </p>
            <Link href="/giang-vien" className="instructor-line">
              <span className="instructor-avatar">
                <Image
                  src={COURSE_INSTRUCTOR.portrait}
                  alt=""
                  width={52}
                  height={52}
                />
              </span>
              <span>
                Giảng viên: <strong>{COURSE_INSTRUCTOR.displayName}</strong>
                <small>{COURSE_INSTRUCTOR.position} · Xem hồ sơ →</small>
              </span>
            </Link>
            <dl className="course-stats">
              <div>
                <dt>Thời lượng</dt>
                <dd>{khoaHoc.thoiLuongPhut} phút</dd>
              </div>
              <div>
                <dt>Nội dung</dt>
                <dd>
                  {dsChang.length} chặng · {tongSoBuoc} bước
                </dd>
              </div>
              <div>
                <dt>Thực hành</dt>
                <dd>{khoaHoc.sanPham.length} sản phẩm</dd>
              </div>
            </dl>
          </div>
          <aside className="enrollment-sidebar" aria-label="Thông tin đăng ký">
            <div className="enrollment-card">
              <AnhKhoaHoc />
              <div className="enrollment-body">
                <p className="enrollment-price">
                  {dinhDangTien(khoaHoc.hocPhi)}
                  <span> / học viên</span>
                </p>
                {hetCho ? (
                  <a
                    href={linkZalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                  >
                    Lớp đã đủ chỗ · Nhắn Zalo
                  </a>
                ) : (
                  <Link href={href} className="button-primary">
                    {hv ? "Tiếp tục học" : "Đăng ký khóa học"}
                  </Link>
                )}
                <p className="enrollment-login">
                  {hv ? (
                    "Tiến độ được lưu theo tài khoản của anh chị."
                  ) : (
                    <>
                      Đã đăng ký? <Link href="/dang-nhap">Đăng nhập</Link>
                    </>
                  )}
                </p>
                <p className="enrollment-contact">
                  Cần hỏi trước?{" "}
                  <a href={linkZalo} target="_blank" rel="noopener noreferrer">
                    Nhắn Zalo {soLienHe}
                  </a>
                </p>
                <h2>Thông tin lớp học</h2>
                <ul className="enrollment-details">
                  <li>
                    <BieuTuong ten="calendar" size={18} />
                    <span>{nhanLichHoc()}</span>
                  </li>
                  <li>
                    <BieuTuong ten="clock" size={18} />
                    <span>{khoaHoc.thoiLuongPhut} phút, có nghỉ giữa giờ</span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>{nhanCho}</span>
                  </li>
                </ul>
                <p className="enrollment-location">
                  {khoaHoc.lop.diaDiem ||
                    "Địa điểm được Gifty Tech gửi qua email sau khi đăng ký."}
                </p>
              </div>
            </div>
          </aside>
          <div className="course-main">
            <nav aria-label="Các mục khóa học" className="course-tabs">
              <a href="#tong-quan">Tổng quan</a>
              <a href="#lo-trinh">Nội dung</a>
              <Link href="/giang-vien">Giảng viên</Link>
              <Link href="/hoi-dap">Hỏi đáp</Link>
            </nav>
            <section id="tong-quan" className="course-section">
              <h2>Anh chị sẽ học được gì?</h2>
              <div className="outcomes-box">
                <ul>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>
                      Hiểu AI và kiểm chứng câu trả lời.
                    </span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>
                      Thiết lập công cụ và giao việc rõ ràng.
                    </span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>
                      Lập kế hoạch chăm sóc mối quan hệ trong 7 ngày.
                    </span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>
                      Tạo trợ lý kinh doanh và hồ sơ thương hiệu cá nhân.
                    </span>
                  </li>
                </ul>
              </div>
              <h3>Khóa học này dành cho ai?</h3>
              <p>{khoaHoc.doiTuong}</p>
            </section>
            <section id="lo-trinh" className="course-section">
              <div className="section-title-row">
                <h2>Nội dung khóa học</h2>
                <span>
                  {dsChang.length} chặng · {tongSoBuoc} bước
                </span>
              </div>
              <p className="section-caption">
                {khoaHoc.thoiLuongPhut} phút, gồm 10 phút nghỉ giữa giờ. Mở từng
                chặng để xem các bước thực hành.
              </p>
              <ol className="syllabus">
                {dsChang.map((c) => (
                  <li key={c.so}>
                    <details className="curriculum-item">
                      <summary>
                        <span className="chapter-chevron" aria-hidden="true">
                          ⌄
                        </span>
                        <span className="chapter-title">
                          <span>{c.nhan}</span>
                          <strong>{c.tieuDe}</strong>
                        </span>
                        <span className="chapter-duration">{c.phut} phút</span>
                      </summary>
                      <div className="chapter-body">
                        <p>{c.mucTieu}</p>
                        <ol>
                          {c.buoc.map((b) => (
                            <li key={b.id}>
                              <BieuTuong ten="book" size={16} />
                              <span>{b.tieuDe.replace(/ Free/g, "")}</span>
                            </li>
                          ))}
                        </ol>
                        {c.sanPham.length > 0 && (
                          <p className="chapter-output">
                            Sản phẩm thực hành: {c.sanPham.join(", ")}
                          </p>
                        )}
                        <Link
                          href={hv ? `/hoc/chang/${c.so}` : "/dang-ky"}
                          className="text-link"
                        >
                          {hv ? "Vào học chặng này" : "Đăng ký để thực hành"} →
                        </Link>
                      </div>
                    </details>
                  </li>
                ))}
              </ol>
            </section>
            <section id="san-pham" className="course-section">
              <h2>Anh chị mang về gì</h2>
              <p className="section-caption">
                Làm ngay trong buổi học, lưu vào tài khoản để xem lại và tải về.
              </p>
              <ol className="deliverables">
                {khoaHoc.sanPham.map((s) => (
                  <li key={s.ma}>
                    <span className="deliverable-code">{s.ma}</span>
                    <div>
                      <h3>
                        {s.ten}
                        {s.tuyChon && (
                          <span className="deliverable-optional">Tùy chọn</span>
                        )}
                      </h3>
                      <p>{s.loiIch}</p>
                    </div>
                  </li>
                ))}
              </ol>
              {khoaHoc.ketQuaMau.length > 0 && (
                <div className="sample-results">
                  {khoaHoc.ketQuaMau.map((k) => (
                    <figure key={k.anh}>
                      <Image
                        src={k.anh}
                        alt={k.chuThich}
                        width={640}
                        height={400}
                        sizes="(max-width: 767px) 100vw, 320px"
                      />
                      <figcaption>{k.chuThich}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              <div className="certificate-note">
                <BieuTuong ten="check" size={22} />
                <p>
                  Hoàn thành{" "}
                  <strong>
                    đủ {dsChang.length} chặng
                  </strong>{" "}
                  để nhận chứng chỉ “{khoaHoc.chungChi.danhHieu}” có mã QR xác
                  thực.
                </p>
              </div>
            </section>
            <nav className="course-more" aria-label="Tìm hiểu thêm">
              <Link href="/giang-vien"><strong>Gặp giảng viên</strong><span>Hồ sơ và kinh nghiệm →</span></Link>
              <Link href="/hoi-dap"><strong>Trước khi đăng ký</strong><span>Chuẩn bị, hỗ trợ và hỏi đáp →</span></Link>
            </nav>
            <section className="course-bottom-cta">
              <div>
                <h2>Sẵn sàng bắt đầu?</h2>
                <p>
                  {nhanLichHoc()} · {dinhDangTien(khoaHoc.hocPhi)} · {nhanCho}
                </p>
              </div>
              {hetCho ? (
                <a
                  href={linkZalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary"
                >
                  Nhắn Zalo {soLienHe}
                </a>
              ) : (
                <Link href={href} className="button-primary">
                  {hv ? "Vào trang học" : "Đăng ký khóa học"}
                </Link>
              )}
            </section>
          </div>
        </div>
      </main>
      <div className="mobile-cta khong-in" aria-label="Đăng ký nhanh">
        <div>
          <strong>{dinhDangTien(khoaHoc.hocPhi)}</strong>
          <span>{nhanLichHoc()}</span>
        </div>
        <a
          href={linkZalo}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta-zalo"
        >
          Zalo
        </a>
        {!hetCho && (
          <Link href={href} className="button-primary">
            {hv ? "Vào học" : "Đăng ký"}
          </Link>
        )}
      </div>
      <ChanTrang />
    </>
  );
}
