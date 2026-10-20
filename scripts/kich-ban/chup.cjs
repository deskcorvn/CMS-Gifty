// Dựng PDF "Kịch bản giảng theo màn": ảnh từng màn (chiếu toàn màn hình, ẩn phụ đề) + lời giảng chi tiết
// từ kich-ban-pdf.mjs (bám cách trình bày của video gốc, kèm mốc thời gian để xem lại).
// Dùng: chạy site ở cổng 3100 với khóa học đã mở, đặt HV_COOKIE=<cookie "hv" của một học viên>, cài playwright,
// rồi `node scripts/kich-ban/chup.cjs`. Ảnh tạm vào scripts/kich-ban/anh/, PDF ra cùng thư mục (không commit).
const path = require('path');
const { chromium } = require('playwright');
const fs = require('fs');
const val = (process.env.HV_COOKIE ?? '').trim();
if (!val) throw new Error('Thiếu HV_COOKIE');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/generated/khoa-hoc.json'), 'utf8'));
fs.mkdirSync(path.join(__dirname, 'anh'), { recursive: true });
(async () => {
  const { default: KB } = await import('./kich-ban-pdf.mjs');
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1920, height: 1080 } });
  await ctx.addCookies([{ name: 'hv', value: val, domain: 'localhost', path: '/' }]);
  const p = await ctx.newPage();
  const phan = [{ ma: '00', url: '/hoc', ten: 'Mở đầu · Bản đồ buổi học', man: data.khoaHoc.loTrinh.man },
    ...data.chang.map(c => ({ ma: String(c.so).padStart(2, '0'), url: '/hoc/chang/' + c.so, ten: `${c.nhan} · ${c.tieuDe}`, man: c.man }))];
  const ds = [];
  for (const ph of phan) {
    const kb = KB[ph.ma];
    if (!kb || kb.length !== ph.man.length) throw new Error(`${ph.ma}: trang có ${ph.man.length} màn, kịch bản có ${kb?.length ?? 0}`);
    await p.goto('http://localhost:3100' + ph.url, { waitUntil: 'networkidle' });
    await p.getByRole('button', { name: 'Chiếu toàn màn hình' }).click();
    await p.waitForTimeout(500);
    await p.keyboard.press('p'); // ẩn phụ đề: PDF có lời đầy đủ riêng
    for (let k = 0; k < ph.man.length; k++) {
      await p.waitForTimeout(450);
      await p.evaluate(() => { for (const v of document.querySelectorAll('.tc-minh-hoa video')) { v.pause(); v.removeAttribute('src'); v.load(); } });
      await p.waitForTimeout(500);
      const f = `anh/${ph.ma}-${String(k + 1).padStart(2, '0')}.png`;
      await p.screenshot({ path: __dirname + '/' + f });
      ds.push({ phan: ph.ten, so: k + 1, tong: ph.man.length, anh: f, video: ph.man[k].video, ...kb[k] });
      for (let t = 0; t < ph.man[k].loi.length; t++) await p.keyboard.press('ArrowRight');
    }
    await p.keyboard.press('Escape');
  }
  fs.writeFileSync(__dirname + '/ds.json', JSON.stringify(ds, null, 1));
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const font = 'file://' + path.resolve(__dirname, '../../src/assets/fonts') + '/';
  const tongLoi = ds.reduce((n, d) => n + d.loi.join(' ').split(/\s+/).length, 0);
  const html = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:B;src:url(${font}BeVietnamPro-Regular.ttf)}@font-face{font-family:B;font-weight:700;src:url(${font}BeVietnamPro-Bold.ttf)}
@page{size:A4;margin:13mm 14mm 14mm}body{font-family:B;color:#24262c;margin:0;font-size:11.5pt;line-height:1.6}
.trang{page-break-after:always}.dau{display:flex;justify-content:space-between;align-items:baseline;gap:8mm;font-size:9.5pt;font-weight:700;color:#9f1b2d;margin-bottom:3mm}
.dau .moc{font-weight:400;color:#626873}
img{display:block;width:72%;margin:0 auto;border:1px solid #dedfe3;border-radius:5px}
.loi{margin-top:4mm}.loi p{margin:0 0 2.6mm;text-align:justify}
.hop{margin-top:3.5mm;border-left:3px solid #b51f34;background:#fcf1f3;padding:2.5mm 4mm;font-size:10.5pt}
.hop.xam{border-color:#626873;background:#f4f4f5}.hop b{display:block;font-size:9pt;letter-spacing:.04em;text-transform:uppercase;margin-bottom:1mm;color:#9f1b2d}
.hop.xam b{color:#626873}.hop p{margin:0 0 1.5mm}
.bia{display:flex;flex-direction:column;justify-content:center;height:262mm}.bia h1{font-size:26pt;margin:0 0 6mm;line-height:1.2}.bia p{font-size:12pt;color:#3d4148;margin:0 0 3mm}
.bia ul{font-size:11.5pt;color:#3d4148;padding-left:6mm}.bia li{margin:1.5mm 0}
</style>
<div class="trang bia"><p style="color:#b51f34;font-weight:700">Gifty Tech · Khóa AI thực chiến cho chủ doanh nghiệp</p><h1>Kịch bản giảng theo màn</h1>
<p>Giáo trình ${esc(data.khoaHoc.phienBanGiaoTrinh)} · ${ds.length} màn · khoảng ${Math.round(tongLoi / 100) * 100} chữ lời giảng.</p>
<p>Lời giảng bám sát cách trình bày của buổi “Từ ô chat đến một đội AI cùng làm việc” (kênh Trương Phương, khách mời Hưng Kescy). Mỗi trang có mốc thời gian của đoạn video gốc để xem lại trước buổi học. Tài liệu dùng riêng cho giảng viên, không phát cho học viên.</p>
<ul>
<li><b>Cách dùng trên lớp:</b> mở trang chặng, bấm “Chiếu toàn màn hình”, bấm P để ẩn phụ đề, rồi giảng theo lời trong file này. Hết ý của một màn thì bấm → sang màn sau (bấm vài lần cho hết các nhịp phụ đề).</li>
<li><b>Hộp đỏ “Chuyện kể của diễn giả gốc”:</b> là trải nghiệm riêng của anh Hưng Kescy. Kể lại dưới dạng “một anh làm đào tạo AI kể…”, không kể như chuyện của mình.</li>
<li><b>Hộp xám “Khi giảng”:</b> ghi chú về thời lượng, chỗ dừng hỏi lớp, phần Gifty Tech thêm vào.</li>
</ul></div>
${ds.map(d => `<div class="trang"><div class="dau"><span>${esc(d.phan)} · màn ${d.so}/${d.tong}</span>${d.moc ? `<span class="moc">Video gốc ${esc(d.moc)}</span>` : ''}</div><img src="${d.anh}">
${d.video ? `<p style="font-size:9.5pt;color:#626873;margin:2mm 0 0;text-align:center">Màn này chiếu video minh họa không lời: daotao.giftytech.com${esc(d.video)}</p>` : ''}
<div class="loi">${d.loi.map(l => `<p>${esc(l)}</p>`).join('')}</div>
${d.ke ? `<div class="hop"><b>Chuyện kể của diễn giả gốc</b>${d.ke.map(l => `<p>${esc(l)}</p>`).join('')}</div>` : ''}
${d.luuY ? `<div class="hop xam"><b>Khi giảng</b><p>${esc(d.luuY)}</p></div>` : ''}
</div>`).join('')}`;
  fs.writeFileSync(__dirname + '/kich-ban.html', html);
  const q = await ctx.newPage();
  await q.goto('file://' + __dirname + '/kich-ban.html', { waitUntil: 'networkidle' });
  await q.evaluate(() => document.fonts.ready);
  await q.pdf({ path: __dirname + '/Kich-ban-giang-theo-man-K01-v3.pdf', format: 'A4', printBackground: true });
  console.log('màn:', ds.length, '· chữ lời giảng:', tongLoi);
  await b.close();
})();
