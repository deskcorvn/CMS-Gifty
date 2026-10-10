import type { Metadata } from "next";
import localFont from "next/font/local";
import { khoaHoc } from "@/lib/noi-dung";
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
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: { default: `${khoaHoc.ten} — ${khoaHoc.tieuDePhu} | Gifty Tech`, template: `%s | ${khoaHoc.ten}` },
  description: khoaHoc.moTa,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
