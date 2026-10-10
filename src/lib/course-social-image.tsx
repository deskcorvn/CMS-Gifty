/* eslint-disable @next/next/no-img-element -- Satori requires native img elements for image rendering. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/** Thiết kế theo OG người vận hành chọn; logo thật được đặt nguyên file, không tạo lại. */
export async function courseSocialImage() {
  const [poster, logo] = await Promise.all([
    readFile(join(process.cwd(), "public/images/khoa-hoc/og-course-reference.png")),
    readFile(join(process.cwd(), "public/brand/gifty-lockup-trang.png")),
  ]);
  const data = (bytes: Buffer) => `data:image/png;base64,${bytes.toString("base64")}`;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#fff" }}>
      <img src={data(poster)} alt="" width={1200} height={630} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <img src={data(logo)} alt="GiftyTech" width={130} height={46} style={{ position: "absolute", left: 16, top: 10 }} />
    </div>,
    { width: 1200, height: 630 },
  );
}
