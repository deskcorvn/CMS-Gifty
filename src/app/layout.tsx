import type { Metadata } from "next";
import localFont from "next/font/local";
import { khoaHoc } from "@/lib/noi-dung";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const beVietnam = localFont({
  src: [
    { path: "../assets/fonts/BeVietnamPro-Regular.ttf", weight: "400" },
    { path: "../assets/fonts/BeVietnamPro-SemiBold.ttf", weight: "600" },
    { path: "../assets/fonts/BeVietnamPro-Bold.ttf", weight: "700" },
  ],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${khoaHoc.ten} — ${khoaHoc.tieuDePhu} | Gifty Tech`,
    template: "%s | Gifty Tech",
  },
  description: khoaHoc.moTa,
  applicationName: "Gifty Tech — Khóa học AI",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Gifty Tech",
    title: `${khoaHoc.tieuDePhu} | Gifty Tech`,
    description: khoaHoc.moTa,
  },
  twitter: {
    card: "summary_large_image",
    title: `${khoaHoc.tieuDePhu} | Gifty Tech`,
    description: khoaHoc.moTa,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="min-h-screen font-sans antialiased">
        <a href="#noi-dung-chinh" className="skip-link khong-in">
          Đến nội dung chính
        </a>
        {children}
      </body>
    </html>
  );
}
