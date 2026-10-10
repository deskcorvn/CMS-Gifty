import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/giang-vien`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/hoi-dap`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/dang-ky`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
