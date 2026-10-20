import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/hoc",
          "/quan-tri",
          "/api",
          "/chung-nhan",
          "/xac-thuc",
          "/dang-nhap",
          "/video",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
