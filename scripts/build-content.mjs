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
for (const k of ["ten", "chucDanh", "kinhNghiem", "anh", "nguon"]) {
  if (!chuoi(khoaHoc?.giangVien?.[k])) {
    loi.push(`content/khoa-hoc.yml: thiếu giangVien.${k}`);
  }
}
if (!Number.isInteger(khoaHoc?.soCho) || khoaHoc.soCho <= 0) {
  loi.push("content/khoa-hoc.yml: soCho phải là số nguyên dương");
}
if (!/^0\d{9}$/.test(chuoi(khoaHoc?.lienHe?.dienThoai))) {
  loi.push("content/khoa-hoc.yml: lienHe.dienThoai phải là số di động 10 chữ số, vd 0913332282");
}
khoaHoc.nhomZalo = { link: chuoi(khoaHoc?.nhomZalo?.link) };
khoaHoc.ketQuaMau = (khoaHoc?.ketQuaMau ?? []).filter((k, i) => {
  if (chuoi(k?.anh) && chuoi(k?.chuThich)) return true;
  loi.push(`content/khoa-hoc.yml: ketQuaMau dòng ${i + 1} cần đủ "anh" và "chuThich"`);
  return false;
});
for (const sp of khoaHoc?.sanPham ?? []) {
  if (!chuoi(sp?.loiIch)) loi.push(`content/khoa-hoc.yml: sản phẩm ${sp?.ma} thiếu loiIch`);
  sp.tuyChon = sp?.tuyChon === true;
}
// Màn trình chiếu (giáo trình v3.0): mỗi chặng một file content/man/NN.yml, 00.yml là màn mở đầu.
// Giảng viên chiếu tại lớp và đọc theo phụ đề; học viên bấm xem lại trên trang chặng.
const KIEU_MAN = {
  bia: ["tieuDe"],
  xacSuat: ["tieuDe", "cot"],
  chat: ["tieuDe", "hoi", "dap"],
  bang: ["tieuDe", "cotTieuDe", "dong"],
  bac: ["tieuDe", "bac"],
  the: ["tieuDe", "the"],
  ds: ["tieuDe", "ds"],
  vs: ["tieuDe", "trai", "phai"],
  luong: ["tieuDe", "buoc"],
  hop: ["noi"],
  minhHoa: ["tieuDe", "video"],
  songSong: ["tieuDe", "dieuPhoi", "songSong", "tuanTu"],
};
// Video minh họa (giao diện mô phỏng, không lời) nằm ở public/minh-hoa/<ten>.mp4, ảnh bìa cùng tên .jpg.
function kiemMinhHoa(url, noi) {
  if (!/^\/minh-hoa\/[\w-]+\.mp4$/.test(chuoi(url))) {
    loi.push(`${noi}: video minh họa phải có dạng /minh-hoa/ten-file.mp4`);
    return;
  }
  for (const duoi of [".mp4", ".jpg"]) {
    try {
      readFileSync(join(ROOT, "public", url.replace(/\.mp4$/, duoi)));
    } catch {
      loi.push(`${noi}: thiếu tệp public${url.replace(/\.mp4$/, duoi)}`);
    }
  }
}
function docMan(file) {
  let raw;
  try {
    raw = readFileSync(join(ROOT, file), "utf8");
  } catch {
    return [];
  }
  const ds = parseYaml(raw)?.man;
  if (!Array.isArray(ds) || !ds.length) {
    loi.push(`${file}: cần danh sách "man"`);
    return [];
  }
  return ds.map((m, i) => {
    const noi = `${file}: màn ${i + 1}`;
    const can = KIEU_MAN[m?.kieu];
    if (!can) loi.push(`${noi}: kieu "${m?.kieu}" không hợp lệ (${Object.keys(KIEU_MAN).join(", ")})`);
    for (const k of can ?? []) if (m?.[k] == null || m[k] === "") loi.push(`${noi}: thiếu "${k}"`);
    if (m?.kieu === "minhHoa") kiemMinhHoa(m.video, noi);
    const loiNoi = (Array.isArray(m?.loi) ? m.loi : [m?.loi]).map(chuoi).filter(Boolean);
    if (!loiNoi.length) loi.push(`${noi}: thiếu phụ đề "loi"`);
    return { ...m, loi: loiNoi };
  });
}
const pad = (n) => String(n).padStart(2, "0");
const loTrinh = khoaHoc?.loTrinh;
khoaHoc.loTrinh = loTrinh
  ? {
      dich: chuoi(loTrinh.dich),
      man: docMan("content/man/00.yml"),
      phan: (loTrinh.phan ?? []).map((p, i) => {
        if (!chuoi(p?.ten)) loi.push(`content/khoa-hoc.yml: loTrinh.phan dòng ${i + 1} thiếu "ten"`);
        const ds = Array.isArray(p?.chang) ? p.chang.map(Number) : [];
        if (!ds.length) loi.push(`content/khoa-hoc.yml: loTrinh.phan dòng ${i + 1} thiếu danh sách "chang"`);
        return { ten: chuoi(p?.ten), moTa: chuoi(p?.moTa), chang: ds };
      }),
    }
  : null;
// Tiền tố mã bước: v3.0 đổi cấu trúc chặng nên mã bước mới không được trùng mã bước cũ (luật 4).
const tienTo = chuoi(khoaHoc?.maBuocTienTo);
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
    return {
      so,
      slug: f.replace(/\.md$/, ""),
      tieuDe: chuoi(data.tieuDe),
      nhan: chuoi(data.nhan) || `Chặng ${so}`,
      phut: Number(data.phut) || 0,
      mucTieu: chuoi(data.mucTieu),
      ghiNho: chuoi(data.ghiNho),
      sanPham: data.sanPham ?? [],
      nguon: data.nguon ?? [],
      coVideo: Boolean(data.coVideo),
      man: docMan(`content/man/${pad(so)}.yml`),
      noiDungHtml: marked.parse(body, { async: false }),
      buoc: buoc.map((b, i) => {
        if (!chuoi(b?.tieuDe)) loi.push(`${file}: bước ${i + 1} thiếu tieuDe`);
        if (!chuoi(b?.huongDan)) loi.push(`${file}: bước ${i + 1} thiếu huongDan`);
        return {
          id: `${tienTo}c${pad(so)}-b${pad(i + 1)}`,
          tieuDe: chuoi(b?.tieuDe),
          huongDan: chuoi(b?.huongDan),
          prompt: typeof b?.prompt === "string" ? b.prompt.replace(/\s+$/, "") : "",
          ketQua: chuoi(b?.ketQua),
          neuKhongDuoc: chuoi(b?.neuKhongDuoc),
          minhHoa: (Array.isArray(b?.minhHoa) ? b.minhHoa : b?.minhHoa ? [b.minhHoa] : []).map((v, k) => {
            kiemMinhHoa(v?.video, `${file}: bước ${i + 1}, minh họa ${k + 1}`);
            if (!chuoi(v?.tieuDe)) loi.push(`${file}: bước ${i + 1}, minh họa ${k + 1} thiếu tieuDe`);
            return { tieuDe: chuoi(v?.tieuDe), video: chuoi(v?.video) };
          }),
        };
      }),
    };
  })
  .sort((a, b) => a.so - b.so);

chang.forEach((c, i) => {
  if (c.so !== i + 1) loi.push(`Số chặng phải liên tục từ 1: đang thấy chặng ${c.so} ở vị trí ${i + 1}`);
});
if (khoaHoc.loTrinh) {
  const daXep = khoaHoc.loTrinh.phan.flatMap((p) => p.chang);
  const thieu = chang.map((c) => c.so).filter((so) => !daXep.includes(so));
  const trung = daXep.filter((so, i) => daXep.indexOf(so) !== i);
  if (thieu.length) loi.push(`content/khoa-hoc.yml: loTrinh chưa xếp chặng ${thieu.join(", ")} vào phần nào`);
  if (trung.length) loi.push(`content/khoa-hoc.yml: loTrinh xếp chặng ${trung.join(", ")} vào nhiều phần`);
  for (const so of daXep) if (!chang.some((c) => c.so === so)) loi.push(`content/khoa-hoc.yml: loTrinh có chặng ${so} không tồn tại`);
}

if (loi.length) {
  console.error("Nội dung khóa học có lỗi:\n- " + loi.join("\n- "));
  process.exit(1);
}

mkdirSync(join(ROOT, "src/generated"), { recursive: true });
writeFileSync(join(ROOT, "src/generated/khoa-hoc.json"), JSON.stringify({ khoaHoc, chang }, null, 2));
const tongBuoc = chang.reduce((n, c) => n + c.buoc.length, 0);
console.log(`Nội dung khóa học: ${chang.length} chặng, ${tongBuoc} bước → src/generated/khoa-hoc.json`);
