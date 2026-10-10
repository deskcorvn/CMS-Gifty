"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function DieuHuongHoc({
  chang,
  daMo,
}: {
  chang: { so: number; tieuDe: string }[];
  daMo: boolean;
}) {
  const pathname = usePathname();
  const [mo, setMo] = useState(false);
  const lienKet = (
    href: string,
    label: React.ReactNode,
    className?: string,
  ) => (
    <Link
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      className={className}
      onClick={() => setMo(false)}
    >
      {label}
    </Link>
  );
  return (
    <aside className="learning-nav">
      <div className="learning-nav-inner">
        <button
          className="learning-nav-toggle"
          aria-expanded={mo}
          aria-controls="dieu-huong-hoc"
          onClick={() => setMo(!mo)}
        >
          Nội dung khóa học <span aria-hidden="true">{mo ? "−" : "+"}</span>
        </button>
        <p className="learning-nav-title">Khóa học của tôi</p>
        <nav
          id="dieu-huong-hoc"
          aria-label="Điều hướng học tập"
          data-expanded={mo}
        >
          {lienKet("/hoc", "Tổng quan & tiến độ")}
          <div className="learning-nav-divider" />
          {chang.map((c) => (
            <div key={c.so}>
              {!daMo ? (
                <span className="chapter-nav-link" aria-disabled="true" title="Mở khi lớp bắt đầu" style={{ opacity: 0.55, cursor: "not-allowed" }}>
                  <span>{String(c.so).padStart(2, "0")}</span>
                  <span>{c.tieuDe} 🔒</span>
                </span>
              ) : lienKet(
                `/hoc/chang/${c.so}`,
                <>
                  <span>{String(c.so).padStart(2, "0")}</span>
                  <span>{c.tieuDe}</span>
                </>,
                "chapter-nav-link",
              )}
            </div>
          ))}
          <div className="learning-nav-divider" />
          {daMo && lienKet("/hoc/thu-vien", "Kết quả của tôi")}
          {daMo && lienKet("/hoc/chung-chi", "Chứng chỉ")}
        </nav>
      </div>
    </aside>
  );
}
