// Minh họa: làm trước, gói sau — dùng skill-creator đóng gói việc vừa làm, rồi dùng lại bằng một câu (nguồn N18, N19).
import { ben, oNhap, cuaSo } from "./ui.mjs";

const CAU = "Dùng skill-creator đóng gói việc vừa làm thành skill “ke-hoach-cham-soc-7-ngay”. Đầu vào: bảng Mã | Nhóm | Ghi chú. Đầu ra: 5 ưu tiên, kế hoạch Ngày 1–7, 3 tin nhắn nháp, thông tin cần xác minh. Giữ nguyên các nguyên tắc.";
const CAU2 = "Lập kế hoạch chăm sóc 7 ngày cho bảng này. [dán bảng mới]";
const CAU3 = "Cập nhật skill này: thêm cột “Thời hạn” vào bảng ưu tiên.";

const ketQuaCu = `<div class="bong-ai"><div style="font-weight:700;margin-bottom:6px">5 mối quan hệ cần ưu tiên</div>
<table class="bang"><tr><th>Mã</th><th>Lý do</th><th>Việc tiếp theo</th></tr>
<tr><td>KH09</td><td>Đề nghị gửi hồ sơ năng lực hôm nay</td><td>Gửi hồ sơ trước 17:00</td></tr>
<tr><td>KH01</td><td>Báo giá đã hứa từ hôm qua</td><td>Gửi báo giá, xin lỗi vì chậm</td></tr>
<tr><td>KH05</td><td>Muốn đặt lịch demo trong 2 ngày</td><td>Đưa hai khung giờ để khách chọn</td></tr></table>
<div style="color:#76726a;font-size:13px;margin-top:6px">… kế hoạch Ngày 1–7, 3 tin nhắn nháp, thông tin cần xác minh</div></div>`;

const duAn = (inner, chu = "") =>
  cuaSo(`${ben("projects")}<div class="chinh"><div style="padding:14px 60px 0;font-size:13px;color:#76726a">Projects › <b style="color:#2b2a27">Trợ lý kinh doanh của tôi</b></div><div class="chat" style="padding-top:12px">${inner}</div>${oNhap({ chu })}</div>`);

const banNhap = (luu = false) => `<div class="bong-nguoi" style="font-size:13.5px">${CAU}</div>
<div class="bong-ai" style="width:86%"><div class="chip"><span class="dot"></span>Đang dùng skill · skill-creator</div>
<div class="ma">name: ke-hoach-cham-soc-7-ngay
mô tả: Lập kế hoạch chăm sóc 7 ngày từ bảng mối quan hệ.
Các bước: 1. Đọc bảng, giữ nguyên mọi mã  2. Chọn 5 ưu tiên kèm lý do
          3. Kế hoạch Ngày 1–7  4. 3 tin nhắn nháp + thông tin cần xác minh
Nguyên tắc: không bịa dữ kiện · không liên hệ người đã từ chối · chỉ soạn nháp</div>
<div style="margin-top:10px">${luu ? `<span class="nut xanh">✓ Đã lưu skill</span>` : `<span class="nut" data-id="nut-luu">Save skill</span>`}</div></div>`;

const dsSkill = () =>
  cuaSo(`${ben("skills")}<div class="trang"><h1>Skills</h1><div class="phu">Customize → Skills</div>
  <div class="dong noi-bat"><div><div class="t">ke-hoach-cham-soc-7-ngay <span style="font-weight:400;color:#b51f34;font-size:13px">· của bạn</span></div><div class="m">Lập kế hoạch chăm sóc 7 ngày từ bảng mối quan hệ.</div></div><span class="cong bat"></span></div>
  <div class="dong"><div><div class="t">skill-creator</div><div class="m">Tạo skill mới từ một quy trình.</div></div><span class="cong bat"></span></div>
  <div class="dong"><div><div class="t">xlsx</div><div class="m">Tạo và sửa bảng tính Excel.</div></div><span class="cong bat"></span></div></div>`, "Claude · Customize");

const chatMoi = (inner, chu = "") =>
  cuaSo(`${ben("moi")}<div class="chinh"><div class="chat">${inner}</div>${oNhap({ chu })}</div>`);
const dungLai = `<div class="bong-nguoi">${CAU2}</div><div class="bong-ai"><div class="chip"><span class="dot"></span>Dùng skill · ke-hoach-cham-soc-7-ngay</div>
<div><b>1. Năm ưu tiên</b> · <b>2. Kế hoạch Ngày 1–7</b> · <b>3. Ba tin nhắn nháp</b> · <b>4. Thông tin cần xác minh</b></div>
<div style="color:#76726a;font-size:13px;margin-top:4px">Đúng khuôn như lần làm tay, chỉ cần một câu.</div></div>`;
const capNhat = `${dungLai}<div class="bong-nguoi">${CAU3}</div><div class="bong-ai"><div class="chip"><span class="dot"></span>skill-creator · cập nhật</div><div>Đã cập nhật skill <b>ke-hoach-cham-soc-7-ngay</b>: bảng ưu tiên có thêm cột “Thời hạn”. Lần sau sẽ dùng bản mới.</div></div>`;

export default {
  bia: 3,
  buoc: [
    { ve: () => duAn(ketQuaCu), chu: "Làm tay trước: kết quả ở chặng 3 đã <b>ưng ý</b> sau vài lần sửa.", giu: 2.2 },
    { ve: (go) => duAn(ketQuaCu, go), go: CAU, tro: "o-nhap", chu: "Ngay trong cuộc trò chuyện đó, nhờ <b>skill-creator</b> đóng gói: nói rõ đầu vào, đầu ra.", giu: 0.8 },
    { ve: () => duAn(banNhap()), tro: "nut-luu", chu: "Claude soạn bản nháp skill: tên, mô tả, các bước, nguyên tắc. Đọc lại rồi lưu.", giu: 2.2 },
    { ve: () => duAn(banNhap(true)), chu: "Đã lưu.", giu: 1 },
    { ve: () => dsSkill(), chu: "Skill mới nằm trong <b>Customize → Skills</b>, bật sẵn.", giu: 2 },
    { ve: (go) => chatMoi("", go), go: CAU2, tro: "o-nhap", chu: "Lần sau: mở cuộc trò chuyện mới, dán dữ liệu mới, nói <b>một câu</b>.", giu: 0.6 },
    { ve: () => chatMoi(dungLai), chu: "Claude tự nhận ra yêu cầu khớp skill và làm đúng các bước đã gói.", giu: 2.4 },
    { ve: (go) => chatMoi(dungLai, go), go: CAU3, tro: "o-nhap", chu: "Thấy bước nào chưa hợp lý thì bảo: <b>“cập nhật skill này”</b>.", giu: 0.6 },
    { ve: () => chatMoi(capNhat), chu: "Skill được sửa ngay. Sửa skill nhanh hơn nhiều so với đổi thói quen của người.", giu: 3.2 },
  ],
};
