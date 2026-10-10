import type { Metadata } from "next";
import Link from "next/link";
import DauTrang from "@/components/DauTrang";
import ChanTrang from "@/components/ChanTrang";
import BieuTuong from "@/components/BieuTuong";
import { cauHoi } from "@/lib/cau-hoi";
import { dsChang, khoaHoc, tatCaPrompt, linkZalo, soLienHe } from "@/lib/noi-dung";

export const metadata: Metadata = {
  title: "Hỏi đáp & chuẩn bị trước buổi học | Gifty Tech",
  description: "Giải đáp về đăng ký, công cụ, chuẩn bị và hỗ trợ sau khóa học thực hành 180 phút.",
  alternates: { canonical: "/hoi-dap" },
  openGraph: { title: "Hỏi đáp khóa học | Gifty Tech", url: "/hoi-dap", description: "Chuẩn bị trước buổi học, đăng ký và hỗ trợ sau lớp." },
};

export default function HoiDap() {
  return <>
    <DauTrang />
    <main id="noi-dung-chinh" className="site-container info-page">
      <Link href="/" className="text-link">← Về khóa học</Link>
      <header className="info-heading">
        <p className="course-category">Thông tin học viên</p>
        <h1>Hỏi đáp & chuẩn bị</h1>
        <p>Những điều cần biết trước và sau buổi thực hành.</p>
      </header>
      <nav className="info-nav" aria-label="Các mục hỗ trợ">
        <a href="#cau-hoi">Hỏi đáp</a><a href="#chuan-bi">Chuẩn bị</a><a href="#sau-buoi-hoc">Sau buổi học</a>
      </nav>
      <section id="cau-hoi" className="course-section">
        <h2>Câu hỏi thường gặp</h2>
        <div className="faq-list">{cauHoi.map(q => <details key={q.hoi}><summary>{q.hoi}<span aria-hidden="true">+</span></summary><p>{q.dap}</p></details>)}</div>
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

      <section className="course-bottom-cta">
        <div><h2>Cần trao đổi thêm?</h2><p>Gọi hoặc nhắn Zalo {soLienHe}.</p></div>
        <a href={linkZalo} target="_blank" rel="noopener noreferrer" className="button-primary">Nhắn Gifty Tech</a>
      </section>
    </main>
    <ChanTrang />
  </>;
}
