import type { Metadata } from "next";
import Image from "next/image";
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
  tatCaPrompt,
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
    description: `Lớp ${nhanLichHoc()}, tối đa ${khoaHoc.soCho} học viên. ${khoaHoc.moTa}`,
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
    hoi: "Có bắt buộc mang laptop không?",
    dap: "Nên mang. Phần thực hành phải dán dữ liệu, sửa câu lệnh và tạo Project trên Claude, làm trên laptop dễ hơn nhiều. Điện thoại chỉ tiện để xem hướng dẫn và chép câu lệnh.",
  },
  {
    hoi: "Có cần mua Claude hay ChatGPT trả phí không?",
    dap: "Không. Buổi học sử dụng Claude Free và ChatGPT Free. Nếu hết hạn mức tạo ảnh, anh chị lưu câu lệnh và ảnh gốc để hoàn thiện sau lớp.",
  },
  {
    hoi: "Tài khoản Free hết lượt giữa buổi thì sao?",
    dap: "Giảng viên làm mẫu một số bước trên màn hình để anh chị để dành lượt cho phần thực hành chính. Nếu vẫn hết lượt, câu lệnh đã nằm sẵn trong trang học, anh chị làm nốt khi tài khoản có lượt trở lại.",
  },
  {
    hoi: "Tôi cần mang dữ liệu khách hàng thật không?",
    dap: "Không cần. Lớp cung cấp dữ liệu giả lập KH01–KH12 để thực hành. Anh chị chuẩn bị laptop, sạc, tài khoản AI, một ảnh chân dung được phép chỉnh và mô tả ngắn về công việc của mình.",
  },
  {
    hoi: "Đăng ký xong, tôi vào học như thế nào?",
    dap: "Sau khi điền thông tin, anh chị chuyển khoản bằng mã VietQR. Khi hệ thống xác nhận đủ học phí, tài khoản được kích hoạt và anh chị nhận mã đăng ký. Những lần sau, nhập email để nhận link đăng nhập, hoặc đăng nhập bằng mã đăng ký nếu email không tới.",
  },
  {
    hoi: "Lớp có bao nhiêu người?",
    dap: `Tối đa ${khoaHoc.soCho} học viên, để giảng viên kịp xem màn hình và gỡ vướng cho từng người. Đủ chỗ thì trang đăng ký tự đóng.`,
  },
  {
    hoi: "Lỡ buổi học hoặc đến muộn thì sao?",
    dap: `Trang học giữ đủ ${dsChang.length} chặng với hướng dẫn và câu lệnh từng bước, anh chị làm lại theo được. Chỗ nào vướng thì hỏi trong nhóm Zalo của lớp.`,
  },
  {
    hoi: "Sau buổi học có ai hỗ trợ không?",
    dap: "Có. Học viên được vào nhóm Zalo của lớp để hỏi tiếp khi tự làm ở nhà.",
  },
  {
    hoi: "Khi nào tôi nhận được chứng chỉ?",
    dap: `Hoàn thành đủ 9 chặng, anh chị nhận chứng chỉ “${khoaHoc.chungChi.danhHieu}” có mã QR kiểm tra trực tuyến.`,
  },
  {
    hoi: "Sau buổi học, tôi còn xem lại được gì?",
    dap: "Mục “Kết quả của tôi” lưu các sản phẩm, kho câu lệnh và nguồn tham khảo chính thức để tra cứu. Sản phẩm có thể sao chép hoặc tải về máy.",
  },
  {
    hoi: "Muốn hỏi thêm trước khi đăng ký?",
    dap: `Gọi hoặc nhắn Zalo ${soLienHe}, Gifty Tech trả lời trực tiếp.`,
  },
];

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
    name: `${khoaHoc.ten}: ${khoaHoc.tieuDePhu}`,
    description: khoaHoc.moTa,
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
      instructor: { "@type": "Person", name: khoaHoc.giangVien.ten },
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
            <h1>{khoaHoc.tieuDePhu}</h1>
            <p className="course-description">{khoaHoc.moTa}</p>
            <p className="hero-schedule">
              <BieuTuong ten="calendar" size={16} />
              <span>
                Lớp <strong>{nhanLichHoc()}</strong> · {nhanCho}
              </span>
            </p>
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
                  <li>
                    <BieuTuong ten="book" size={18} />
                    <span>Học bằng Claude Free & ChatGPT Free</span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>Chứng chỉ sau khi hoàn thành</span>
                  </li>
                  <li>
                    <BieuTuong ten="check" size={18} />
                    <span>Nhóm Zalo hỗ trợ sau buổi học</span>
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
                      Tạo “Trợ lý kinh doanh của tôi” trên Claude và chuẩn bị
                      hồ sơ thương hiệu cá nhân.
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
                    đủ 9 chặng
                  </strong>{" "}
                  để nhận chứng chỉ “{khoaHoc.chungChi.danhHieu}” có mã QR xác
                  thực.
                </p>
              </div>
            </section>
            <section id="sau-buoi-hoc" className="course-section">
              <h2>Sau buổi học, anh chị vẫn giữ</h2>
              <ul className="after-class">
                <li>
                  <BieuTuong ten="book" size={18} />
                  <span>
                    <strong>Trang học riêng</strong> với đủ {dsChang.length} chặng
                    và {tatCaPrompt.length} câu lệnh mẫu, quên bước nào mở lại
                    bước đó.
                  </span>
                </li>
                <li>
                  <BieuTuong ten="check" size={18} />
                  <span>
                    <strong>Kết quả của tôi</strong>: các sản phẩm đã lưu, chép
                    hoặc tải về máy lúc nào cũng được.
                  </span>
                </li>
                <li>
                  <BieuTuong ten="check" size={18} />
                  <span>
                    <strong>Chứng chỉ có mã QR</strong> để người khác kiểm tra
                    trực tuyến, chia sẻ lên Facebook hoặc Zalo.
                  </span>
                </li>
                <li>
                  <BieuTuong ten="check" size={18} />
                  <span>
                    <strong>Nhóm Zalo của lớp</strong> để hỏi tiếp khi tự làm ở
                    nhà.
                  </span>
                </li>
              </ul>
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
                    Trực tiếp đứng lớp, làm mẫu từng bước trên màn hình rồi đi
                    cùng anh chị qua phần thực hành.
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
