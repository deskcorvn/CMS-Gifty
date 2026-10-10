import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Font chứng chỉ đọc bằng fs trong route ảnh — phải được đóng gói kèm function.
  outputFileTracingIncludes: {
    "/{opengraph-image,dang-ky/opengraph-image}": [
      "./public/brand/gifty-lockup-trang.png",
      "./public/images/khoa-hoc/og-course-reference.png",
    ],
    "/chung-nhan/[ma]/anh": ["./src/assets/fonts/**", "./public/chu-ky-hung.svg"],
  },
  images: { remotePatterns: [{ protocol: "https", hostname: "*.public.blob.vercel-storage.com" }] },
};

export default nextConfig;
