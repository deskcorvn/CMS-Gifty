// Minh họa: Cowork dọn thư mục Tải về — đề xuất trước, duyệt rồi mới làm, trợ lý phụ chạy song song (nguồn N11, N12, N14).
// Số tệp trên màn là số mô phỏng.
import { ben, oNhap, cuaSo } from "./ui.mjs";

const CAU = "Xem thư mục Downloads. Chỉ đọc tên, loại, dung lượng, ngày sửa. ĐỪNG di chuyển hay xóa gì. Đề xuất cách sắp xếp, kèm thư mục “can-xoa” cho tệp nên bỏ. Chờ tôi duyệt.";

const khung = (inner, o = {}) =>
  cuaSo(`${ben()}<div class="chinh"><div class="chat">${inner}</div>${oNhap({ tab: true, cowork: o.cowork, thuMuc: o.thuMuc, chu: o.chu ?? "", goiY: o.cowork ? "Mô tả việc cần làm…" : "Reply to Claude…" })}</div>${o.them ?? ""}`, o.cowork ? "Claude Desktop · Cowork" : "Claude Desktop");

const chao = `<div class="chao" style="font-size:24px">Giao việc cho Claude</div>`;
const chonThuMuc = `<div class="hop-thoai"><div class="khung"><h2>Chọn thư mục cho Claude làm việc</h2>
<div class="dong" style="margin-top:12px"><div><div class="t">📁 Documents</div></div></div>
<div class="dong noi-bat" data-id="tm-downloads"><div><div class="t">📁 Downloads</div><div class="m">Claude chỉ đọc, ghi trong thư mục này</div></div></div>
<div class="dong"><div><div class="t">📁 Desktop</div></div></div>
<div style="text-align:right;margin-top:6px"><span class="nut" data-id="nut-cho-phep">Cho phép</span></div></div></div>`;

const keHoach = (duyet = false) => `<div class="bong-nguoi" style="font-size:13.5px">${CAU}</div>
<div class="bong-ai" style="width:88%"><div class="chip"><span class="dot"></span>Đã xem 312 tệp · chưa thay đổi gì</div>
<div style="font-weight:700">Đề xuất sắp xếp (chờ bạn duyệt)</div>
<table class="bang"><tr><th>Nhóm</th><th>Số tệp</th><th>Thư mục đích</th></tr>
<tr><td>Ảnh sự kiện, ảnh sản phẩm</td><td>148</td><td>Anh/2026-10</td></tr>
<tr><td>Báo giá, hợp đồng (PDF, Word)</td><td>64</td><td>Tai-lieu/Bao-gia</td></tr>
<tr><td>Bảng tính</td><td>37</td><td>Tai-lieu/Bang-tinh</td></tr>
<tr><td>Bộ cài đặt, tệp trùng</td><td>63</td><td><b style="color:#b51f34">can-xoa</b> (bạn tự xóa)</td></tr></table>
<div style="margin-top:10px;display:flex;gap:10px">${duyet ? `<span class="nut xanh">✓ Bạn đã duyệt</span>` : `<span class="nut" data-id="nut-dong-y">Đồng ý</span><span class="nut phu">Góp ý</span>`}</div></div>`;

const tien = (a, b, c) => `<div class="bong-ai" style="width:88%"><div style="font-weight:700;margin-bottom:8px">Đang làm · 3 trợ lý phụ chạy song song</div>
${[["Trợ lý 1 · Ảnh", a], ["Trợ lý 2 · Tài liệu", b], ["Trợ lý 3 · Tệp nên bỏ", c]].map(([t, v]) => `<div class="dong" style="padding:10px 14px;margin-bottom:8px;display:block"><div style="display:flex;justify-content:space-between;font-size:14px"><b>${t}</b><span>${v >= 100 ? "✓ xong" : v + "%"}</span></div><div class="tien"><span style="width:${v}%"></span></div></div>`).join("")}</div>`;

const baoCao = `<div class="bong-ai" style="width:88%"><div class="chip"><span class="dot"></span>Hoàn tất</div>
<div style="font-weight:700">Báo cáo</div>
<div>✓ Đã chuyển 249 tệp vào đúng thư mục.<br>✓ 63 tệp nằm trong <b>can-xoa</b>, <b>chưa xóa tệp nào</b>: bạn xem lại rồi tự xóa.<br>• 2 tệp không rõ nhóm, để nguyên chỗ cũ, cần bạn quyết.</div></div>`;

const kb = {
  bia: 4,
  buoc: [
    { ve: () => khung(chao), tro: "tab-cowork", chu: "Ở ô nhập, chọn <b>Cowork</b> (gói trả phí; làm việc với tệp trên máy cần ứng dụng Claude Desktop).", giu: 0.8 },
    { ve: () => khung(chao, { cowork: true }), tro: "nut-cong", chu: "Bấm <b>+</b> để thêm thư mục cho Claude làm việc.", giu: 0.5 },
    { ve: () => khung(chao, { cowork: true, them: chonThuMuc }), tro: "nut-cho-phep", chu: "Chỉ cho phép <b>đúng thư mục cần dọn</b>. Đừng bao giờ giao cả ổ C.", giu: 0.8 },
    { ve: (go) => khung("", { cowork: true, thuMuc: "Downloads", chu: go }), go: CAU, tro: "o-nhap", chu: "Giao việc kèm câu <b>“đề xuất trước, chờ tôi duyệt”</b>.", giu: 0.6 },
    { ve: () => khung(keHoach(), { cowork: true, thuMuc: "Downloads" }), tro: "nut-dong-y", chu: "AI xem thông tin tệp rồi <b>đề xuất</b>, chưa đụng vào tệp nào. Ưng thì bấm Đồng ý; chưa ưng thì góp ý cụ thể.", giu: 3 },
    { ve: () => khung(tien(35, 20, 50), { cowork: true, thuMuc: "Downloads" }), chu: "Duyệt xong mới làm thật. Việc độc lập được chia cho <b>trợ lý phụ chạy song song</b>.", giu: 1 },
    { ve: () => khung(tien(80, 65, 100), { cowork: true, thuMuc: "Downloads" }), chu: "Mỗi trợ lý phụ chỉ lo đúng phần việc của mình.", giu: 1 },
    { ve: () => khung(tien(100, 100, 100), { cowork: true, thuMuc: "Downloads" }), chu: "Xong cả ba phần.", giu: 0.8 },
    { ve: () => khung(baoCao, { cowork: true, thuMuc: "Downloads" }), chu: "AI <b>báo cáo</b>: đã làm gì, còn gì chờ bạn quyết. Việc xóa vẫn do người làm.", giu: 3.4 },
  ],
};

export default kb;
