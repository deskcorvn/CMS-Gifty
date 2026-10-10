import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import QRCode from "qrcode";
import { docChungChi, linkChungChi, ngayVN } from "@/lib/chung-chi";
import { khoaHoc, nhanLichHoc } from "@/lib/noi-dung";

export const runtime = "nodejs";

const W = 1754;
const H = 1240; // A4 ngang, 150 dpi

const docFont = (ten: string) => readFile(join(process.cwd(), "src/assets/fonts", ten));

/** Ảnh chứng chỉ PNG (A4 ngang). Chứng chỉ đã thu hồi vẫn hiện, kèm dấu "ĐÃ THU HỒI". */
export async function GET(_req: Request, ctx: { params: Promise<{ ma: string }> }) {
  const cc = await docChungChi((await ctx.params).ma);
  if (!cc) return new Response("Không tìm thấy chứng chỉ", { status: 404 });

  const [regular, semibold, bold, chuKy, qr] = await Promise.all([
    docFont("BeVietnamPro-Regular.ttf"),
    docFont("BeVietnamPro-SemiBold.ttf"),
    docFont("BeVietnamPro-Bold.ttf"),
    readFile(join(process.cwd(), "public/chu-ky-hung.svg")),
    QRCode.toDataURL(linkChungChi(cc.ma), { margin: 1, width: 300, color: { dark: "#14263b", light: "#ffffff" } }),
  ]);
  const chuKyUri = `data:image/svg+xml;base64,${chuKy.toString("base64")}`;
  const coTen = cc.ho_ten.length > 26 ? 76 : 96;

  return new ImageResponse(
    (
      <div style={{ width: W, height: H, display: "flex", background: "#fbf8f2", fontFamily: "BVP", color: "#14263b", padding: 44 }}>
        <div style={{ flex: 1, display: "flex", border: "6px solid #14263b", padding: 10 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", border: "2px solid #e08a2b", padding: "64px 90px 56px", position: "relative" }}>
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 10, color: "#8d581a" }}>GIFTY TECH</div>
            <div style={{ marginTop: 34, fontSize: 92, fontWeight: 700, letterSpacing: 6 }}>CHỨNG CHỈ</div>
            <div style={{ marginTop: 6, fontSize: 46, fontWeight: 600, color: "#e08a2b" }}>{khoaHoc.chungChi.danhHieu}</div>
            <div style={{ marginTop: 50, fontSize: 30, color: "#5b6b80" }}>Trao cho</div>
            <div style={{ marginTop: 10, fontSize: coTen, fontWeight: 700, textAlign: "center" }}>{cc.ho_ten}</div>
            <div style={{ width: 640, height: 3, background: "#e08a2b", marginTop: 14 }} />
            <div style={{ marginTop: 34, fontSize: 32, textAlign: "center", lineHeight: 1.5, color: "#24364d", maxWidth: 1180, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span>{`đã hoàn thành ${khoaHoc.ten}`}</span>
              <span style={{ fontWeight: 700, color: "#14263b" }}>{`“${khoaHoc.tieuDePhu}”`}</span>
              <span>{`${khoaHoc.thoiLuongPhut} phút · lớp ${nhanLichHoc()}`}</span>
            </div>

            <div style={{ position: "absolute", left: 90, right: 90, bottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 24 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qr} width={170} height={170} alt="" />
                <div style={{ display: "flex", flexDirection: "column", fontSize: 24, color: "#5b6b80", lineHeight: 1.6 }}>
                  <span>Mã chứng chỉ</span>
                  <span style={{ fontSize: 30, fontWeight: 700, color: "#14263b" }}>{cc.ma}</span>
                  <span>{`Ngày cấp ${ngayVN(cc.cap_at)}`}</span>
                  <span>Quét mã để kiểm tra</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 420 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={chuKyUri} width={300} height={162} alt="" />
                <div style={{ width: 380, height: 2, background: "#14263b", marginTop: 4 }} />
                <div style={{ marginTop: 12, fontSize: 32, fontWeight: 700 }}>{khoaHoc.chungChi.nguoiKy}</div>
                <div style={{ fontSize: 24, color: "#5b6b80" }}>{`${khoaHoc.chungChi.chucDanh} · ${khoaHoc.chungChi.donVi}`}</div>
              </div>
            </div>

            {cc.thu_hoi_at && (
              <div style={{ position: "absolute", top: 470, left: 360, fontSize: 120, fontWeight: 700, color: "rgba(185,28,28,0.75)", border: "10px solid rgba(185,28,28,0.75)", padding: "10px 40px", transform: "rotate(-14deg)" }}>
                ĐÃ THU HỒI
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
      fonts: [
        { name: "BVP", data: regular, weight: 400, style: "normal" },
        { name: "BVP", data: semibold, weight: 600, style: "normal" },
        { name: "BVP", data: bold, weight: 700, style: "normal" },
      ],
      headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" },
    },
  );
}
