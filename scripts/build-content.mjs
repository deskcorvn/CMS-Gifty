// Biên dịch nội dung khóa học (content/) thành src/generated/khoa-hoc.json.
// Chạy tự động trước dev/build. Sai cấu trúc thì dừng build với thông báo rõ dòng nào sai,
// để ai sửa bài qua Pages CMS cũng biết ngay chứ không lên site một trang hỏng.
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { marked } from "marked";
import { parse as parseYaml } from "yaml";

const ROOT = new URL("..", import.meta.url).pathname;
const loi = [];

function tachFrontmatter(raw, file) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) {
    loi.push(`${file}: thiếu khối frontmatter --- ở đầu file`);
    return { data: {}, body: raw };
  }
  return { data: parseYaml(m[1]) ?? {}, body: m[2] };
}

const chuoi = (v) => (typeof v === "string" ? v.trim() : "");

const khoaHoc = parseYaml(readFileSync(join(ROOT, "content/khoa-hoc.yml"), "utf8"));
for (const k of ["ten", "tieuDePhu", "hocPhi", "lop", "sanPham", "chungChi", "nguon"]) {
  if (khoaHoc?.[k] == null) loi.push(`content/khoa-hoc.yml: thiếu trường "${k}"`);
}
if (!Number.isInteger(khoaHoc?.hocPhi) || khoaHoc.hocPhi <= 0) {
  loi.push("content/khoa-hoc.yml: hocPhi phải là số nguyên dương (đồng)");
}
const maNguon = new Set((khoaHoc?.nguon ?? []).map((n) => n.ma));
const maSanPham = new Set((khoaHoc?.sanPham ?? []).map((s) => s.ma));

const dir = join(ROOT, "content/chang");
const chang = readdirSync(dir)
  .filter((f) => f.endsWith(".md"))
  .sort()
  .map((f) => {
    const file = `content/chang/${f}`;
    const { data, body } = tachFrontmatter(readFileSync(join(dir, f), "utf8"), file);
    const so = Number(data.so);
    if (!Number.isInteger(so) || so < 1) loi.push(`${file}: "so" phải là số chặng (1, 2, 3…)`);
    if (!chuoi(data.tieuDe)) loi.push(`${file}: thiếu tieuDe`);
    const buoc = Array.isArray(data.buoc) ? data.buoc : [];
    if (!buoc.length) loi.push(`${file}: chặng phải có ít nhất một bước (buoc)`);
    for (const n of data.nguon ?? []) if (!maNguon.has(n)) loi.push(`${file}: nguồn ${n} không có trong khoa-hoc.yml`);
    for (const s of data.sanPham ?? []) if (!maSanPham.has(s)) loi.push(`${file}: sản phẩm ${s} không có trong khoa-hoc.yml`);
    const pad = (n) => String(n).padStart(2, "0");
    return {
      so,
      slug: f.replace(/\.md$/, ""),
      tieuDe: chuoi(data.tieuDe),
      phut: Number(data.phut) || 0,
      mucTieu: chuoi(data.mucTieu),
      ghiNho: chuoi(data.ghiNho),
      sanPham: data.sanPham ?? [],
      nguon: data.nguon ?? [],
      coVideo: Boolean(data.coVideo),
      noiDungHtml: marked.parse(body, { async: false }),
      buoc: buoc.map((b, i) => {
        if (!chuoi(b?.tieuDe)) loi.push(`${file}: bước ${i + 1} thiếu tieuDe`);
        if (!chuoi(b?.huongDan)) loi.push(`${file}: bước ${i + 1} thiếu huongDan`);
        return {
          id: `c${pad(so)}-b${pad(i + 1)}`,
          tieuDe: chuoi(b?.tieuDe),
          huongDan: chuoi(b?.huongDan),
          prompt: typeof b?.prompt === "string" ? b.prompt.replace(/\s+$/, "") : "",
          ketQua: chuoi(b?.ketQua),
          neuKhongDuoc: chuoi(b?.neuKhongDuoc),
        };
      }),
    };
  })
  .sort((a, b) => a.so - b.so);

chang.forEach((c, i) => {
  if (c.so !== i + 1) loi.push(`Số chặng phải liên tục từ 1: đang thấy chặng ${c.so} ở vị trí ${i + 1}`);
});

if (loi.length) {
  console.error("Nội dung khóa học có lỗi:\n- " + loi.join("\n- "));
  process.exit(1);
}

mkdirSync(join(ROOT, "src/generated"), { recursive: true });
writeFileSync(join(ROOT, "src/generated/khoa-hoc.json"), JSON.stringify({ khoaHoc, chang }, null, 2));
const tongBuoc = chang.reduce((n, c) => n + c.buoc.length, 0);
console.log(`Nội dung khóa học: ${chang.length} chặng, ${tongBuoc} bước → src/generated/khoa-hoc.json`);
