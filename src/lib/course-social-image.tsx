/* eslint-disable @next/next/no-img-element -- Satori requires native img elements for image rendering. */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { COURSE_INSTRUCTOR, COURSE_MESSAGE } from "./course-brand";
import { khoaHoc } from "./noi-dung";

/** Nền đỏ–trắng theo mẫu đã chọn; chân dung và logo dùng nguyên file, chữ dùng font thật. */
export async function courseSocialImage() {
  const [background, portrait, logo, regular, semibold, bold] = await Promise.all([
    readFile(join(process.cwd(), "public/images/khoa-hoc/og-course-core-background.png")),
    readFile(join(process.cwd(), "public", COURSE_INSTRUCTOR.portrait)),
    readFile(join(process.cwd(), "public/brand/gifty-lockup-trang.png")),
    readFile(join(process.cwd(), "src/assets/fonts/BeVietnamPro-Regular.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/BeVietnamPro-SemiBold.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/BeVietnamPro-Bold.ttf")),
  ]);
  const experienceHours = COURSE_INSTRUCTOR.experience.split(" ")[0];
  const data = (bytes: Buffer) => `data:image/png;base64,${bytes.toString("base64")}`;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#fff", color: "#24262c", fontFamily: "Be Vietnam Pro" }}>
      <img src={data(background)} alt="" width={1200} height={630} style={{ position: "absolute", width: "100%", height: "100%" }} />
      <img src={data(logo)} alt="Gifty Tech" width={136} height={48} style={{ position: "absolute", left: 28, top: 22 }} />
      <div style={{ position: "absolute", right: 42, top: 26, display: "flex", padding: "10px 16px", borderRadius: 8, border: "1px solid #ead9db", background: "#fff", color: "#b51f34", fontSize: 21, fontWeight: 600 }}>
        {khoaHoc.lop.gio} · {khoaHoc.lop.ngay.split("-").reverse().join("/")}
      </div>
      <div style={{ position: "absolute", left: 58, top: 124, display: "flex", flexDirection: "column", width: 742 }}>
        <span style={{ color: "#9e2335", fontSize: 22, fontWeight: 600, letterSpacing: 2 }}>KHÓA HỌC THỰC HÀNH</span>
        <span style={{ color: "#b51f34", fontSize: 80, fontWeight: 700, letterSpacing: -3, lineHeight: 1.2, marginTop: 18 }}>Hiểu AI,</span>
        <span style={{ fontSize: 54, fontWeight: 700, letterSpacing: -2, lineHeight: 1.3 }}>biết cách giao việc</span>
        <span style={{ fontSize: 22, lineHeight: 1.6, color: "#55525a", marginTop: 14 }}>{COURSE_MESSAGE.takeaway}</span>
      </div>
      <div style={{ position: "absolute", left: 58, top: 418, display: "flex", gap: 18 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 250, height: 150, padding: "14px 24px", borderRadius: 12, background: "#b51f34", color: "#fff" }}>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: 1.5 }}>THỜI LƯỢNG KHÓA HỌC</span>
          <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, letterSpacing: -3, marginTop: 4 }}>{khoaHoc.thoiLuongPhut}</span>
          <span style={{ fontSize: 21, fontWeight: 600 }}>phút thực hành</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 432, height: 150, padding: "12px 26px", borderRadius: 12, border: "2px solid #b51f34", background: "#fff", color: "#b51f34" }}>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: 1.5 }}>KINH NGHIỆM GIẢNG VIÊN</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginTop: 4 }}>
            <span style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.1, letterSpacing: -3 }}>{experienceHours}</span>
            <span style={{ fontSize: 21, fontWeight: 600 }}>giờ</span>
          </div>
          <span style={{ fontSize: 21, fontWeight: 600, color: "#24262c" }}>sử dụng AI</span>
        </div>
      </div>
      <img src={data(portrait)} alt="" width={374} height={561} style={{ position: "absolute", right: 20, bottom: 0 }} />
      <div style={{ position: "absolute", right: 26, bottom: 35, width: 352, padding: "16px 10px", borderRadius: 10, border: "1px solid #ead9db", background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <span style={{ fontSize: 25, fontWeight: 700, color: "#b51f34" }}>{COURSE_INSTRUCTOR.name}</span>
        <span style={{ fontSize: 18, fontWeight: 600, marginTop: 6 }}>{COURSE_INSTRUCTOR.position}</span>
      </div>
      <span style={{ position: "absolute", left: 58, bottom: 21, color: "#fff", fontSize: 19 }}>daotao.giftytech.com</span>
    </div>,
    {
      width: 1200, height: 630,
      fonts: [
        { name: "Be Vietnam Pro", data: regular, weight: 400, style: "normal" },
        { name: "Be Vietnam Pro", data: semibold, weight: 600, style: "normal" },
        { name: "Be Vietnam Pro", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
