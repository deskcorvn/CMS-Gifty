import Link from "next/link";


export default function DauTrang({ dangHoc = false }: { dangHoc?: boolean }) {
  return (
    <header className="site-header khong-in">
      <div className="site-container header-inner">
        <Link
          href="/"
          className="brand"
          aria-label="Gifty Tech — Trang chủ khóa học"
        >
          <svg className="brand-mark" viewBox="0 0 500 500" width="34" height="34" aria-hidden="true">
            <defs>
              <filter id="gifty-brand-red" colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values="0.37 0 0 0 0.63  1.12 0 0 0 -0.12  1.016 0 0 0 -0.016  0 0 0 1 0" />
              </filter>
            </defs>
            <image href="/brand/gifty-mark.png" width="500" height="500" filter="url(#gifty-brand-red)" />
          </svg>
          <span>Gifty <strong>Tech</strong></span>
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
