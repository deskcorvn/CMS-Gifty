import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { ImageResponse } from "next/og";
import { khoaHoc, nhanLichHoc } from "@/lib/noi-dung";

export const alt = `${khoaHoc.tieuDePhu}, lớp ${nhanLichHoc()} — ${khoaHoc.giangVien.ten}, ${khoaHoc.giangVien.kinhNghiem}. Gifty Tech.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [regular, bold, portrait] = await Promise.all([
    readFile(join(process.cwd(), "src/assets/fonts/BeVietnamPro-Regular.ttf")),
    readFile(join(process.cwd(), "src/assets/fonts/BeVietnamPro-Bold.ttf")),
    readFile(join(process.cwd(), "public", khoaHoc.giangVien.anh)),
  ]);
  const extension = extname(khoaHoc.giangVien.anh).slice(1).toLowerCase();
  const mime =
    extension === "jpg" ? "jpeg" : extension === "svg" ? "svg+xml" : extension;
  const [soGio, donVi, ...kinhNghiem] = khoaHoc.giangVien.kinhNghiem.split(" ");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#fff",
        color: "#24262c",
        fontFamily: "Be Vietnam Pro",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 420,
          height: 630,
          background: "#f7f0f1",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 1200,
          height: 9,
          background: "#b51f34",
          display: "flex",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "48px 0 42px 56px",
          width: 750,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#b51f34",
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#b51f34"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8h18v4H3V8Zm2 4v9h14v-9M12 8v13M12 8C4 8 4 1 8 3c2 1 4 5 4 5Zm0 0c8 0 8-7 4-5-2 1-4 5-4 5Z" />
          </svg>
          <span>Gifty Tech</span>
          <span
            style={{
              marginLeft: 10,
              paddingLeft: 22,
              borderLeft: "1px solid #d7d4d5",
              color: "#626873",
              fontSize: 16,
              fontWeight: 400,
            }}
          >
            Đào tạo AI thực hành
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 53,
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.23,
            letterSpacing: -2,
          }}
        >
          <span>Hiểu AI.</span>
          <span>Làm việc cùng AI.</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 28,
            fontSize: 22,
            lineHeight: 1.7,
          }}
        >
          <span>Học cùng người có</span>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              lineHeight: 1.3,
              marginTop: 8,
              color: "#b51f34",
            }}
          >
            <span style={{ fontSize: 43, fontWeight: 700, letterSpacing: -1 }}>
              {soGio} {donVi}
            </span>
            <span style={{ fontWeight: 700 }}>{kinhNghiem.join(" ")}</span>
          </span>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: "auto",
            paddingTop: 20,
            borderTop: "1px solid #dedfe3",
            width: 640,
            color: "#626873",
            fontSize: 17,
          }}
        >
          <span style={{ color: "#b51f34", fontWeight: 700 }}>
            {`Lớp ${nhanLichHoc()}`}
          </span>
          <span>·</span>
          <span>{`${khoaHoc.thoiLuongPhut} phút`}</span>
          <span>·</span>
          <span>{`Tối đa ${khoaHoc.soCho} học viên`}</span>
        </div>
      </div>
      {/* Satori renders this local image directly; next/image is for browser pages. */}
      <img
        src={`data:image/${mime};base64,${portrait.toString("base64")}`}
        alt=""
        width={530}
        height={506}
        style={{
          position: "absolute",
          right: -37,
          bottom: 56,
          objectFit: "contain",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: 0,
          bottom: 0,
          width: 420,
          padding: "24px 30px 25px",
          background: "#b51f34",
          color: "#fff",
        }}
      >
        <span style={{ fontSize: 25, fontWeight: 700 }}>
          {khoaHoc.giangVien.ten}
        </span>
        <span style={{ fontSize: 16, marginTop: 7 }}>
          {khoaHoc.giangVien.chucDanh}
        </span>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Be Vietnam Pro", data: regular, weight: 400, style: "normal" },
        { name: "Be Vietnam Pro", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
