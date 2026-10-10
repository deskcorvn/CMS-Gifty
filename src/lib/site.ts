/** Dùng chung URL công khai cho canonical, sitemap và ảnh chia sẻ. */
export const siteUrl = (
  process.env.SITE_URL || "https://daotao.giftytech.com"
).replace(/\/$/, "");
