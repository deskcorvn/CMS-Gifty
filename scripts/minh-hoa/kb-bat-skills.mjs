// Minh họa: bật Skills trên bản miễn phí (Settings → Capabilities → Customize → Skills). Theo nguồn N19.
import { ben, oNhap, cuaSo } from "./ui.mjs";

const chatTrong = (menu = false) =>
  cuaSo(`${ben()}<div class="chinh"><div class="chat"><div class="chao">Chào Hùng, hôm nay mình làm gì?</div></div>${oNhap({ goiY: "How can I help you today?" })}</div>
  ${menu ? `<div class="menu" style="left:30px;top:372px"><div>Profile</div><div class="on" data-id="m-settings">Settings</div><div>Help</div><div>Log out</div></div>` : ""}`);

const caiDat = (bat) =>
  cuaSo(`${ben()}<div class="trang"><h1>Settings</h1><div class="phu">Cài đặt tài khoản</div><div class="cai-dat">
  <div class="nav"><div>General</div><div>Account</div><div>Privacy</div><div>Billing</div><div class="on">Capabilities</div><div>Connectors</div></div>
  <div class="noi">
    <div class="dong"><div><div class="t">Memory</div><div class="m">Nhớ thông tin từ các cuộc trò chuyện để dùng khi liên quan.</div></div><span class="cong bat"></span></div>
    <div class="dong noi-bat"><div><div class="t">Code execution and file creation</div><div class="m">Cho Claude chạy mã và tạo tệp (Excel, Word, PDF…). Skills cần bật mục này.</div></div><span class="cong ${bat ? "bat" : ""}" data-id="cong-code"></span></div>
    <div class="dong"><div><div class="t">Web search</div><div class="m">Tìm thông tin trên mạng khi cần.</div></div><span class="cong bat"></span></div>
  </div></div></div>`, "Claude · Settings");

const SKILLS = [
  ["skill-creator", "Tạo skill mới từ một quy trình anh chị mô tả hoặc vừa làm cùng Claude."],
  ["docx", "Tạo và sửa tài liệu Word."],
  ["xlsx", "Tạo và sửa bảng tính Excel."],
  ["pptx", "Tạo bài trình chiếu PowerPoint."],
  ["pdf", "Đọc và tạo tệp PDF."],
];
const skills = (batCreator) =>
  cuaSo(`${ben("skills")}<div class="trang"><h1>Skills</h1><div class="phu">Customize → Skills · bật hoặc tắt từng skill</div>
  ${SKILLS.map(([t, m], i) => `<div class="dong ${i === 0 ? "noi-bat" : ""}"><div><div class="t">${t}</div><div class="m">${m}</div></div><span class="cong ${i === 0 ? (batCreator ? "bat" : "") : "bat"}" ${i === 0 ? 'data-id="cong-creator"' : ""}></span></div>`).join("")}
  </div>`, "Claude · Customize");

const kb = {
  bia: 2,
  buoc: [
    { ve: () => chatTrong(), tro: "ben-user", chu: "Bấm vào tên tài khoản ở góc dưới bên trái.", giu: 0.8 },
    { ve: () => chatTrong(true), tro: "m-settings", chu: "Chọn <b>Settings</b> (Cài đặt).", giu: 0.8 },
    { ve: () => caiDat(false), tro: "cong-code", chu: "Mở <b>Capabilities</b>, bật <b>Code execution and file creation</b>. Skills cần mục này.", giu: 0.6 },
    { ve: () => caiDat(true), chu: "Đã bật. Bản miễn phí cũng có.", giu: 2.2 },
    { ve: () => skills(false), tro: "cong-creator", chu: "Vào <b>Customize → Skills</b>, bật <b>skill-creator</b>: skill dùng để tạo skill mới.", giu: 0.6 },
    { ve: () => skills(true), chu: "Xong. Từ giờ chỉ cần nói “dùng skill-creator đóng gói việc vừa làm”.", giu: 3.5 },
  ],
};

export default kb;
