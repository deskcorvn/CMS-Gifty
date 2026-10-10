import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DauTrang from "@/components/DauTrang";
import ChanTrang from "@/components/ChanTrang";
import BieuTuong from "@/components/BieuTuong";
import AnhKhoaHoc from "@/components/AnhKhoaHoc";
import {
  dinhDangTien,
  dsChang,
  khoaHoc,
  nhanLichHoc,
  tongSoBuoc,
} from "@/lib/noi-dung";
import { hocVienHienTai } from "@/lib/phien";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: `${khoaHoc.tieuDePhu} | Gifty Tech`,
    description: khoaHoc.moTa,
    locale: "vi_VN",
    type: "website",
    siteName: "Gifty Tech",
  },
};
const cauHoi = [
  {
    hoi: "Chưa biết gì về AI, tôi có học được không?",
    dap: "Có. Khóa học bắt đầu từ cách AI hoạt động, thiết lập tài khoản rồi mới đến giao việc và thực hành. Anh chị không cần biết lập trình.",
  },
  {
    hoi: "Có cần mua Claude hay ChatGPT trả phí không?",
    dap: "Không. Buổi học sử dụng Claude Free và ChatGPT Free. Nếu hết hạn mức tạo ảnh, anh chị lưu câu lệnh và ảnh gốc để hoàn thiện sau lớp.",
  },
  {
    hoi: "Tôi cần mang dữ liệu khách hàng thật không?",
    dap: "Không cần. Lớp cung cấp dữ liệu giả lập KH01–KH12 để thực hành. Anh chị chuẩn bị laptop, sạc, tài khoản AI, một ảnh chân dung được phép chỉnh và mô tả ngắn về công việc của mình.",
  },
  {
    hoi: "Đăng ký xong, tôi vào học như thế nào?",
    dap: "Sau khi điền thông tin, anh chị chuyển khoản bằng mã VietQR. Khi hệ thống xác nhận đủ học phí, quyền học được mở. Những lần sau, dùng email đã đăng ký để nhận link đăng nhập, không cần mật khẩu.",
  },
  {
    hoi: "Khi nào tôi nhận được chứng chỉ?",
    dap: `Hoàn thành ${tongSoBuoc} bước và lưu đủ ${khoaHoc.sanPham.length} sản phẩm, anh chị nhận chứng chỉ “${khoaHoc.chungChi.danhHieu}” có mã QR kiểm tra trực tuyến. Khóa học không chấm điểm, không xếp loại.`,
  },
  {
    hoi: "Sau buổi học, tôi còn xem lại được gì?",
    dap: "Mục “Kết quả của tôi” lưu các sản phẩm, kho câu lệnh và nguồn tham khảo chính thức để tra cứu. Sản phẩm có thể sao chép hoặc tải về dạng Markdown. Video xem lại sẽ được bổ sung sau buổi học.",
  },
];

export default async function TrangChu() {
  const hv = await hocVienHienTai().catch(() => null);
  const href = hv ? "/hoc" : "/dang-ky";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${khoaHoc.ten}: ${khoaHoc.tieuDePhu}`,
    description: khoaHoc.moTa,
    url: siteUrl,
    inLanguage: "vi",
    provider: {
      "@type": "Organization",
      name: "Gifty Tech",
      url: "https://giftytech.com",
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
        <nav aria-label="Đường dẫn" className="breadcrumbs">
          <Link href="/">Khóa học</Link>
          <span aria-hidden="true">/</span>
          <span>Ứng dụng AI trong công việc</span>
        </nav>
        <div className="course-layout">
          <div className="course-intro">
            <p className="course-category">
              Khóa học thực hành · Dành cho người mới bắt đầu
            </p>
            <h1>{khoaHoc.tieuDePhu}</h1>
            <p className="course-description">{khoaHoc.moTa}</p>
            <a href="#giang-vien" className="instructor-line">
              <span className="instructor-avatar">
                <Image
                  src={khoaHoc.giangVien.anh}
                  alt=""
                  width={52}
                  height={52}
                />
              </span>
              <span>
                Giảng viên: <strong>{khoaHoc.giangVien.ten}</strong>
                <small>{khoaHoc.giangVien.kinhNghiem}</small>
              </span>
            </a>
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
                <Link href={href} className="button-primary">
                  {hv ? "Tiếp tục học" : "Đăng ký khóa học"}
                </Link>
                <p className="enrollment-login">
                  {hv ? (
                    "Tiến độ được lưu theo tài khoản của anh chị."
                  ) : (
                    <>
                      Đã đăng ký? <Link href="/dang-nhap">Đăng nhập</Link>
                    </>
                  )}
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
                    <BieuTuong ten="book" size={18} />
                    <span>Học bằng Claude Free & ChatGPT Free</span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>Chứng chỉ sau khi hoàn thành</span>
                  </li>
                </ul>
                <p className="enrollment-location">
                  {khoaHoc.lop.diaDiem ||
                    "Địa điểm được Gifty Tech gửi qua email sau khi đăng ký."}
                </p>
              </div>
            </div>
            <p className="sidebar-help">
              Cần xem trước nội dung?
              <br />
              <a href="#lo-trinh">
                Khám phá {dsChang.length} chặng học bên dưới
              </a>
            </p>
          </aside>
          <div className="course-main">
            <nav aria-label="Các mục khóa học" className="course-tabs">
              <a href="#tong-quan">Tổng quan</a>
              <a href="#lo-trinh">Nội dung</a>
              <a href="#giang-vien">Giảng viên</a>
              <a href="#cau-hoi">Hỏi đáp</a>
            </nav>
            <section id="tong-quan" className="course-section">
              <h2>Anh chị sẽ học được gì?</h2>
              <div className="outcomes-box">
                <ul>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>
                      Hiểu cách AI hoạt động, nhận biết khi AI có thể trả lời
                      sai.
                    </span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>
                      Thiết lập Claude, ChatGPT và giao việc bằng yêu cầu rõ
                      ràng.
                    </span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>
                      Biến dữ liệu mẫu thành kế hoạch chăm sóc mối quan hệ trong
                      7 ngày.
                    </span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>
                      Tạo trợ lý công việc và chuẩn bị hồ sơ thương hiệu cá
                      nhân.
                    </span>
                  </li>
                </ul>
              </div>
              <h3>Khóa học này dành cho ai?</h3>
              <p>{khoaHoc.doiTuong}</p>
              <p>
                Không yêu cầu biết lập trình. Các bài tập sử dụng dữ liệu giả
                lập, có hướng dẫn và kết quả mẫu để anh chị tự đối chiếu.
              </p>
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
                          <span>Chặng {c.so}</span>
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
                              <span>{b.tieuDe}</span>
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
              <h2>Sản phẩm sau buổi học</h2>
              <p className="section-caption">
                Lưu ngay trong tài khoản, xem lại và tải về sau buổi học.
              </p>
              <ol className="deliverables">
                {khoaHoc.sanPham.map((s) => (
                  <li key={s.ma}>
                    <span className="deliverable-code">{s.ma}</span>
                    <div>
                      <h3>{s.ten}</h3>
                      <p>{s.dieuKien}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="certificate-note">
                <BieuTuong ten="check" size={22} />
                <p>
                  Hoàn thành{" "}
                  <strong>
                    {tongSoBuoc} bước và {khoaHoc.sanPham.length} sản phẩm
                  </strong>{" "}
                  để nhận chứng chỉ “{khoaHoc.chungChi.danhHieu}” có mã QR xác
                  thực. Khóa học không chấm điểm, không xếp loại.
                </p>
              </div>
            </section>
            <section id="giang-vien" className="course-section">
              <h2>Giảng viên</h2>
              <div className="instructor-profile">
                <div className="instructor-photo">
                  <Image
                    src={khoaHoc.giangVien.anh}
                    alt={khoaHoc.giangVien.ten}
                    width={160}
                    height={190}
                    sizes="160px"
                  />
                </div>
                <div>
                  <h3>{khoaHoc.giangVien.ten}</h3>
                  <p>{khoaHoc.giangVien.chucDanh}</p>
                  <p className="instructor-experience">
                    {khoaHoc.giangVien.kinhNghiem}
                  </p>
                  <p>
                    Đồng hành cùng anh chị từ hiểu AI, giao việc đến kiểm tra
                    kết quả qua từng bài thực hành.
                  </p>
                  <a
                    className="text-link"
                    href={khoaHoc.giangVien.nguon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Đào tạo AI tại Gifty Tech ↗
                  </a>
                </div>
              </div>
            </section>
            <section id="chuan-bi" className="course-section">
              <h2>Chuẩn bị trước buổi học</h2>
              <ul className="preparation-list">
                {khoaHoc.chuanBi.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <details className="scope-note">
                <summary>Những nội dung nằm ngoài phạm vi buổi học</summary>
                <p>{khoaHoc.khongThuoc}</p>
              </details>
            </section>
            <section id="cau-hoi" className="course-section">
              <h2>Câu hỏi thường gặp</h2>
              <div className="faq-list">
                {cauHoi.map((q) => (
                  <details key={q.hoi}>
                    <summary>
                      {q.hoi}
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{q.dap}</p>
                  </details>
                ))}
              </div>
            </section>
            <section className="course-bottom-cta">
              <div>
                <h2>Sẵn sàng bắt đầu?</h2>
                <p>
                  {nhanLichHoc()} · {dinhDangTien(khoaHoc.hocPhi)}
                </p>
              </div>
              <Link href={href} className="button-primary">
                {hv ? "Vào trang học" : "Đăng ký khóa học"}
              </Link>
            </section>
          </div>
        </div>
      </main>
      <ChanTrang />
    </>
  );
}
