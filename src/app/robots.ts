import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/", disallow: ["/hoc", "/quan-tri", "/api", "/chung-nhan", "/xac-thuc"] }] };
}
