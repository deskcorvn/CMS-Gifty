import Link from "next/link";
import Image from "next/image";

export default function DauTrang({ dangHoc = false }: { dangHoc?: boolean }) {
  return (
    <header className="site-header khong-in">
      <div className="site-container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Gifty Tech — Trang chủ khóa học"
        >
          <span className="brand-lockup"><Image src="/brand/gifty-lockup-trang.png" alt="Gifty Tech" width={124} height={44} /></span>
          <small>Học tập</small>
        </Link>
        <nav aria-label="Điều hướng chính" className="header-nav">
          {dangHoc ? (
            <>
              <Link href="/hoc">Khóa học của tôi</Link>
              <Link href="/hoc/thu-vien" className="nav-secondary">
                Kết quả của tôi
              </Link>
              <form action="/api/dang-xuat" method="post">
                <button className="nav-login">Đăng xuất</button>
              </form>
            </>
          ) : (
            <>
              <Link href="/#lo-trinh" className="nav-secondary">
                Nội dung khóa học
              </Link>
              <Link href="/giang-vien" className="nav-secondary">
                Giảng viên
              </Link>
              <Link href="/dang-nhap" className="nav-login">
                Đăng nhập
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
