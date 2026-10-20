// Dựng video minh họa không lời từ kịch bản các bước (giao diện mô phỏng, con trỏ, gõ chữ, chú thích).
// node scripts/minh-hoa/dung.mjs <ten>   → scripts/minh-hoa/out/<ten>.mp4 (chép sang public/minh-hoa/) + out/<ten>.jpg (ảnh bìa) + out/<ten>-NN.jpg (ảnh từng bước)
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { CSS, truLoi, chuThich } from "./ui.mjs";

const require = createRequire("/opt/node22/lib/node_modules/playwright/package.json");
const { chromium } = require("playwright");
const sharp = createRequire("/home/user/cms-gifty/package.json")("sharp");

const DIR = new URL(".", import.meta.url).pathname;
const ten = process.argv[2];
const { default: kb } = await import(`./kb-${ten}.mjs`);
const FPS = 15;
const tam = `${DIR}work/${ten}`;
rmSync(tam, { recursive: true, force: true });
mkdirSync(tam, { recursive: true });
mkdirSync(`${DIR}out`, { recursive: true });

const font = "file:///home/user/cms-gifty/src/assets/fonts/";
writeFileSync(`${tam}/goc.html`, `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:B;src:url(${font}BeVietnamPro-Regular.ttf)}
@font-face{font-family:B;font-weight:700;src:url(${font}BeVietnamPro-Bold.ttf)}
${CSS}</style><div id="san"><div id="nd"></div><div id="ct"></div><div id="bam"></div><div id="tro">${truLoi}</div></div>`);

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
await p.goto(`file://${tam}/goc.html`);
await p.evaluate(async () => { await document.fonts.load("16px B"); await document.fonts.load("700 16px B"); await document.fonts.ready; });
const coFont = await p.evaluate(() => document.fonts.check("700 16px B"));
if (!coFont) throw new Error("Không nạp được font Be Vietnam Pro");

let so = 0;
const ds = []; // [file, giây]
let tro = { x: 900, y: 420 };
const chup = async (giay) => {
  const f = `${tam}/f${String(so++).padStart(4, "0")}.png`;
  await p.screenshot({ path: f });
  ds.push([f, giay]);
};
const dat = (html, ct, x, y, bam = 0) =>
  p.evaluate(
    ([html, ct, x, y, bam]) => {
      document.getElementById("nd").innerHTML = html;
      document.getElementById("ct").innerHTML = ct;
      const t = document.getElementById("tro");
      t.style.left = x + "px";
      t.style.top = y + "px";
      const r = document.getElementById("bam");
      r.style.left = x - 18 + "px";
      r.style.top = y - 18 + "px";
      r.style.opacity = String(bam);
      r.style.transform = `scale(${1.4 - bam * 0.6})`;
    },
    [html, ct, x, y, bam],
  );
const viTri = (id) =>
  p.evaluate((id) => {
    const e = document.querySelector(`[data-id="${id}"]`);
    if (!e) return null;
    const r = e.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }, id);

const anhBuoc = [];
for (const [i, bu] of kb.buoc.entries()) {
  const ct = chuThich(bu.so ?? i + 1, bu.chu);
  const ve = (go) => bu.ve(go);
  const day = bu.go ?? "";
  await dat(ve(day ? "" : undefined), ct, tro.x, tro.y);
  if (bu.tro) {
    const dich = await viTri(bu.tro);
    if (!dich) throw new Error(`${ten} bước ${i + 1}: không thấy data-id="${bu.tro}"`);
    await chup(0.6);
    const n = 12;
    for (let k = 1; k <= n; k++) {
      const t = k / n;
      const e = t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;
      await dat(ve(day ? "" : undefined), ct, tro.x + (dich.x - tro.x) * e, tro.y + (dich.y - tro.y) * e);
      await chup(1 / FPS);
    }
    tro = dich;
    if (bu.bam !== false) {
      for (const a of [1, 0.7, 0.4]) {
        await dat(ve(day ? "" : undefined), ct, tro.x, tro.y, a);
        await chup(1 / FPS);
      }
    }
  }
  if (day) {
    const buocGo = Math.min(45, Math.max(10, Math.ceil(day.length / 2)));
    for (let k = 1; k <= buocGo; k++) {
      await dat(ve(day.slice(0, Math.round((day.length * k) / buocGo))), ct, tro.x, tro.y);
      await chup(1 / FPS);
    }
  }
  await dat(ve(day || undefined), ct, tro.x, tro.y);
  await chup((bu.giu ?? 2.5) * 1.4);
  anhBuoc.push(ds[ds.length - 1][0]);
}
await b.close();

// Ghép bằng concat demuxer (ảnh tĩnh giữ lâu thì nén rất nhỏ).
const dong = ds.map(([f, g]) => `file '${f}'\nduration ${g.toFixed(3)}`).join("\n") + `\nfile '${ds[ds.length - 1][0]}'\n`;
writeFileSync(`${tam}/ds.txt`, dong);
execFileSync("ffmpeg", ["-v", "error", "-y", "-f", "concat", "-safe", "0", "-i", `${tam}/ds.txt`, "-vf", "fps=15,format=yuv420p", "-c:v", "libx264", "-preset", "slow", "-crf", "24", "-movflags", "+faststart", "-an", `${DIR}out/${ten}.mp4`]);
await sharp(anhBuoc[kb.bia ?? 0]).jpeg({ quality: 84, mozjpeg: true }).toFile(`${DIR}out/${ten}.jpg`);
for (const [k, f] of anhBuoc.entries()) await sharp(f).jpeg({ quality: 84, mozjpeg: true }).toFile(`${DIR}out/${ten}-${String(k + 1).padStart(2, "0")}.jpg`);
const giay = ds.reduce((n, [, g]) => n + g, 0);
console.log(`${ten}: ${kb.buoc.length} bước, ${giay.toFixed(1)} giây, ${so} khung`);
