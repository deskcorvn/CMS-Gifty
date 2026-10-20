// Minh họa: nối Google Calendar rồi tạo lịch bằng một câu (nguồn N20: nút "+" → Connectors → Manage connectors).
import { ben, oNhap, cuaSo, theApp } from "./ui.mjs";

const CAU = "Tạo lịch “Gửi hồ sơ năng lực cho khách số 9” lúc 9 giờ sáng mai, dài 15 phút, trong Google Calendar của tôi.";

const chat = ({ menu = 0, chu = "", nguoi = "", ai = "" } = {}) =>
  cuaSo(`${ben()}<div class="chinh"><div class="chat">${nguoi ? "" : `<div class="chao">Chào Hùng, hôm nay mình làm gì?</div>`}
    ${nguoi ? `<div class="bong-nguoi">${nguoi}</div>` : ""}${ai}</div>${oNhap({ chu })}
    ${menu ? `<div class="menu" style="left:66px;top:300px"><div>Add files or photos</div><div class="${menu === 1 ? "on" : ""}" data-id="m-connectors">Connectors ›</div><div>Projects ›</div></div>` : ""}
    ${menu === 2 ? `<div class="menu" style="left:286px;top:330px"><div>Web search</div><div class="on" data-id="m-manage">Manage connectors</div></div>` : ""}
  </div>`);

const APPS = [
  ["Google Calendar", "Xem, tạo, sửa sự kiện trong lịch của bạn."],
  ["Gmail", "Đọc và soạn thư nháp."],
  ["Google Drive", "Tìm và đọc tệp trong Drive."],
  ["Notion", "Tạo và cập nhật trang, cơ sở dữ liệu."],
  ["Canva", "Tạo và chỉnh thiết kế."],
  ["Slack", "Đọc kênh, gửi tin nhắn."],
];
const danhMuc = (noiBat = -1) =>
  cuaSo(`${ben("connectors")}<div class="trang"><h1>Connectors</h1><div class="phu">Thư mục connector · mỗi connector ghi rõ đọc/ghi được gì</div>${theApp(APPS, noiBat)}</div>`, "Claude · Connectors");

const chiTiet = (daNoi = false) =>
  cuaSo(`${ben("connectors")}<div class="trang"><h1>Google Calendar</h1><div class="phu">Connector · Customize → Connectors</div>
  <div class="dong"><div><div class="t">Claude làm được gì</div><div class="m">Xem lịch · tạo sự kiện · đổi giờ · xóa sự kiện. Chỉ trong phạm vi quyền bạn cấp.</div></div></div>
  <div class="dong"><div><div class="t">Quyền</div><div class="m">Đăng nhập bằng tài khoản Google của chính bạn. Gỡ kết nối bất cứ lúc nào.</div></div></div>
  <div style="margin-top:16px">${daNoi ? `<span class="nut xanh">✓ Đã kết nối</span>` : `<span class="nut" data-id="nut-connect">Connect</span>`}</div></div>`, "Claude · Connectors");

const capQuyen = () =>
  chiTiet(false).replace(
    /<\/div>$/,
    `<div class="hop-thoai"><div class="khung"><h2>Cho phép Claude truy cập lịch?</h2><p>Màn đăng nhập của Google (minh họa). Kiểm tra đúng tài khoản của mình, đọc các quyền, rồi mới bấm cho phép.</p><div style="margin-top:18px;display:flex;gap:10px;justify-content:flex-end"><span class="nut phu">Hủy</span><span class="nut" data-id="nut-cho-phep">Cho phép</span></div></div></div></div>`,
  );

const traLoi = `<div class="bong-ai"><div class="chip"><span class="dot"></span>Google Calendar · tạo sự kiện</div><div>Đã tạo sự kiện <b>“Gửi hồ sơ năng lực cho khách số 9”</b>, 9:00–9:15 sáng mai. Bạn có muốn thêm lời nhắc trước 10 phút không?</div></div>`;

const lich = () => {
  const ngay = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"];
  const gio = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
  let o = `<div class="dau" style="border-left:0"></div>${ngay.map((n, i) => `<div class="dau">${n}${i === 3 ? " · mai" : ""}</div>`).join("")}`;
  for (const [h, g] of gio.entries()) {
    o += `<div class="gio">${g}</div>`;
    for (let d = 0; d < 5; d++) o += `<div class="o">${h === 1 && d === 3 ? `<div class="su-kien" data-id="su-kien">9:00 Gửi hồ sơ năng lực cho khách số 9</div>` : ""}${h === 5 && d === 0 ? `<div class="su-kien" style="background:#8a867c">Họp nhóm</div>` : ""}</div>`;
  }
  return cuaSo(`<div class="trang" style="padding:52px 40px 20px"><h1 style="font-size:22px">Lịch của Hùng</h1><div class="phu">Ứng dụng lịch (minh họa)</div><div class="lich">${o}</div></div>`, "Google Calendar");
};

const kb = {
  bia: 6,
  buoc: [
    { ve: () => chat(), tro: "nut-cong", chu: "Trong ô chat, bấm nút <b>+</b>.", giu: 0.6 },
    { ve: () => chat({ menu: 1 }), tro: "m-connectors", chu: "Chọn <b>Connectors</b>…", giu: 0.5 },
    { ve: () => chat({ menu: 2 }), tro: "m-manage", chu: "… rồi <b>Manage connectors</b>. (Hoặc vào Customize → Connectors.)", giu: 0.6 },
    { ve: () => danhMuc(), tro: "app-0", chu: "Trong danh sách connector, chọn <b>Google Calendar</b>.", giu: 0.6 },
    { ve: () => chiTiet(), tro: "nut-connect", chu: "Đọc Claude làm được gì với lịch, rồi bấm <b>Connect</b>.", giu: 0.8 },
    { ve: () => capQuyen(), tro: "nut-cho-phep", chu: "Đăng nhập Google <b>của chính mình</b>, đọc quyền, rồi cho phép.", giu: 0.8 },
    { ve: () => chiTiet(true), chu: "Đã kết nối. Gỡ được bất cứ lúc nào.", giu: 1.6 },
    { ve: (go) => chat({ chu: go }), go: CAU, tro: "o-nhap", chu: "Quay lại ô chat, giao việc bằng <b>một câu</b>.", giu: 0.8 },
    { ve: () => chat({ nguoi: CAU, ai: traLoi }), chu: "Claude tự dùng connector Google Calendar để tạo sự kiện.", giu: 2.6 },
    { ve: () => lich(), tro: "su-kien", bam: false, chu: "Sự kiện đã nằm trong lịch. Tạo, đổi giờ, xóa đều nói bằng lời được.", giu: 3.2 },
  ],
};

export default kb;
