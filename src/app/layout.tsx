import type { Metadata } from "next";
import localFont from "next/font/local";
import { COURSE_MESSAGE } from "@/lib/course-brand";
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
    default: `${COURSE_MESSAGE.title} | Gifty Tech`,
    template: "%s | Gifty Tech",
  },
  description: COURSE_MESSAGE.description,
  applicationName: "Gifty Tech — Khóa học AI",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Gifty Tech",
    title: `${COURSE_MESSAGE.title} | Gifty Tech`,
    description: COURSE_MESSAGE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COURSE_MESSAGE.title} | Gifty Tech`,
    description: COURSE_MESSAGE.description,
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
