import type { Metadata } from "next";
import Link from "next/link";
import DauTrang from "@/components/DauTrang";
import ChanTrang from "@/components/ChanTrang";
import Image from "next/image";
import { COURSE_INSTRUCTOR as giangVien } from "@/lib/course-brand";

export const metadata: Metadata = {
  title: "Nguyễn Mạnh Hùng · Giảng viên | Gifty Tech",
  description: "CEO & Founder Gifty Tech. Chuyên gia công nghệ & chuyển đổi số với 10.000 giờ sử dụng AI.",
  alternates: { canonical: "/giang-vien" },
  openGraph: { title: "Nguyễn Mạnh Hùng · CEO & Founder Gifty Tech", url: "/giang-vien", description: "Chuyên gia công nghệ & chuyển đổi số · 10.000 giờ sử dụng AI." },
};

export default function GiangVien() {
  return <>
    <DauTrang />
    <main id="noi-dung-chinh" className="site-container info-page instructor-page">
      <Link href="/" className="text-link">← Về khóa học</Link>
      <div className="expert-layout">
        <div className="expert-portrait">
          <Image src={giangVien.portrait} alt="Nguyễn Mạnh Hùng trong trang phục vest, khoanh tay" width={1024} height={1536} sizes="(max-width: 767px) 80vw, 360px" preload />
        </div>
        <div className="expert-content">
          <header className="info-heading">
            <p className="course-category">Giảng viên</p>
            <h1>{giangVien.name}</h1>
            <p className="expert-position">{giangVien.position}</p>
            <p>{giangVien.role}</p>
          </header>
          <p className="expert-experience"><strong>10.000 giờ</strong><span>sử dụng AI</span></p>
          <section className="course-section">
            <h2>Từ công nghệ đến công việc thực tế</h2>
            <p>Kết nối tư duy kỹ thuật với thực tiễn điều hành Gifty Tech. Trong lớp, anh trực tiếp hướng dẫn cách giao việc, kiểm chứng kết quả và hoàn thiện sản phẩm từ những tình huống kinh doanh cụ thể.</p>
          </section>
          <section className="course-section">
            <h2>Nền tảng chuyên môn</h2>
            <ul className="preparation-list">
              <li>Kỹ sư Công nghệ thông tin — Đại học Bách khoa Hà Nội.</li>
              <li>Thạc sĩ Tin học và Kỹ thuật máy tính (MICE) — Khoa Quốc tế, Đại học Quốc gia Hà Nội.</li>
            </ul>
            <a className="text-link" href={giangVien.linkedin} target="_blank" rel="noopener noreferrer">Hồ sơ LinkedIn ↗</a>
          </section>
          <Link href="/#lo-trinh" className="button-primary expert-course-link">Xem nội dung khóa học</Link>
        </div>
      </div>
    </main>
    <ChanTrang />
  </>;
}
