import Link from "next/link";
import { khoaHoc } from "@/lib/noi-dung";

/** Thanh đầu trang. dangHoc = đã đăng nhập: hiện lối vào trang học, thư viện, đăng xuất. */
export default function DauTrang({ dangHoc = false }: { dangHoc?: boolean }) {
  return (
    <header className="khong-in border-b border-white/10 bg-navy-dark text-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <Link href={dangHoc ? "/hoc" : "/"} className="flex items-baseline gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-cream">Gifty Tech</span>
          <span className="font-bold">{khoaHoc.ten}</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-semibold text-white/80">
          {dangHoc ? (
            <>
              <Link href="/hoc" className="hover:text-white">Trang học</Link>
              <Link href="/hoc/thu-vien" className="hover:text-white">Kết quả của tôi</Link>
              <form action="/api/dang-xuat" method="post">
                <button className="hover:text-white">Đăng xuất</button>
              </form>
            </>
          ) : (
            <Link href="/dang-nhap" className="hover:text-white">Đăng nhập</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
