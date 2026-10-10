// Vẽ chữ ký "Hùng" thành SVG (đường nét, không cần font khi hiển thị): node scripts/ve-chu-ky.mjs <font.ttf> [out.svg]
// Font viết tay OFL (Alex Brush trên Google Fonts — Great Vibes làm vỡ chữ "ù"). Thêm một nét gạch lượn dưới chữ cho giống chữ ký tay.
import { readFileSync, writeFileSync } from "node:fs";
import opentype from "opentype.js";

const [fontPath, out = "public/chu-ky-hung.svg", chu = "Hùng"] = process.argv.slice(2);
const buf = readFileSync(fontPath);
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length));
const co = 160;
const scale = co / font.unitsPerEm;
let x = 10;
const duong = [];
for (const c of chu) {
  const g = font.charToGlyph(c);
  if (!g || g.index === 0) throw new Error(`Font thiếu ký tự "${c}"`);
  duong.push(g.getPath(x, co, co).toPathData(2));
  x += g.advanceWidth * scale;
}
const rong = Math.ceil(x + 30);
// Nét lượn: bắt đầu dưới chữ H, kéo sang phải và hất lên ở cuối.
const lượn = `M ${rong * 0.12} ${co * 1.13} C ${rong * 0.38} ${co * 1.02}, ${rong * 0.7} ${co * 1.2}, ${rong * 0.97} ${co * 0.93}`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${rong} ${Math.ceil(co * 1.3)}" width="${rong}" height="${Math.ceil(co * 1.3)}">
<g fill="#1f3a8a">${duong.map((d) => `<path d="${d}"/>`).join("")}</g>
<path d="${lượn}" fill="none" stroke="#1f3a8a" stroke-width="4.5" stroke-linecap="round"/>
</svg>
`;
writeFileSync(out, svg);
console.log(`Đã vẽ chữ ký "${chu}" → ${out} (${rong}×${Math.ceil(co * 1.3)})`);
