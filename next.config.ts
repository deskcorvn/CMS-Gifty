import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Font chứng chỉ đọc bằng fs trong route ảnh — phải được đóng gói kèm function.
  outputFileTracingIncludes: {
    "/chung-nhan/[ma]/anh": ["./src/assets/fonts/**", "./public/chu-ky-hung.svg"],
  },
  images: { remotePatterns: [{ protocol: "https", hostname: "*.public.blob.vercel-storage.com" }] },
};

export default nextConfig;
