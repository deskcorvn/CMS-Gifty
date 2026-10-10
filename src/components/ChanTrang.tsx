import Link from "next/link";
import { khoaHoc } from "@/lib/noi-dung";
export default function ChanTrang() {
  return (
    <footer className="site-footer">
      <div className="site-container flex flex-wrap items-start justify-between gap-6">
        <div>
          <Link href="/" className="text-lg font-bold text-navy">
            Gifty Tech<span className="text-amber-ink">.</span>
          </Link>
          <p className="mt-2 text-sm text-muted">
            Hiểu công nghệ. Ứng dụng vào công việc.
          </p>
        </div>
        <nav
          aria-label="Liên kết cuối trang"
          className="flex gap-6 text-sm font-semibold text-body"
        >
          <Link href="/#lo-trinh">Lộ trình</Link>
          <Link href="/#cau-hoi">Câu hỏi thường gặp</Link>
        </nav>
        <p className="w-full border-t border-line pt-5 text-xs leading-6 text-muted">
          © Gifty Tech · Giáo trình phiên bản {khoaHoc.phienBanGiaoTrinh}
        </p>
      </div>
    </footer>
  );
}
