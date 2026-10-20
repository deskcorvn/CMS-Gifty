// Các mảnh giao diện MÔ PHỎNG (không phải ảnh chụp thật) để dựng video minh họa.
// Chủ ý: bố cục chung chung, không logo, không màu nhận diện của hãng; nhãn "Minh họa" luôn hiện.
export const CSS = `
*{box-sizing:border-box;margin:0;padding:0}
body{width:1280px;height:720px;overflow:hidden;font-family:B,sans-serif;background:#e9e7e2;color:#2b2a27}
#san{position:relative;width:1280px;height:720px}
.cuaso{position:absolute;left:28px;top:22px;width:1224px;height:584px;background:#fbfaf7;border-radius:14px;box-shadow:0 10px 34px rgba(0,0,0,.14);overflow:hidden;display:flex}
.thanh-tieu-de{position:absolute;left:0;top:0;right:0;height:34px;background:#f1efe9;border-bottom:1px solid #e3e0d8;display:flex;align-items:center;padding:0 14px;gap:7px;z-index:2}
.thanh-tieu-de i{width:11px;height:11px;border-radius:50%;background:#d6d2c8;display:block}
.thanh-tieu-de span{margin-left:12px;font-size:13px;color:#8a867c}
.nhan-mh{position:absolute;right:16px;top:7px;z-index:5;background:#b51f34;color:#fff;font-size:12px;font-weight:700;padding:3px 10px;border-radius:999px}
.ben{width:214px;margin-top:34px;background:#f4f2ec;border-right:1px solid #e6e3db;padding:16px 12px;display:flex;flex-direction:column;gap:4px;font-size:14px}
.ben .ten-app{font-weight:700;font-size:17px;padding:2px 8px 12px}
.ben .muc{padding:8px 10px;border-radius:8px;color:#4a4740}
.ben .muc.on{background:#e7e3d9;font-weight:700;color:#2b2a27}
.ben .muc.con{padding-left:26px;font-size:13px}
.ben .duoi{margin-top:auto;display:flex;align-items:center;gap:8px;padding:8px}
.av{width:28px;height:28px;border-radius:50%;background:#5b5a55;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center}
.chinh{flex:1;margin-top:34px;position:relative;display:flex;flex-direction:column}
.chat{flex:1;padding:26px 60px 0;display:flex;flex-direction:column;gap:14px;overflow:hidden}
.chao{margin:auto;text-align:center;font-size:30px;color:#3b3934}
.bong-nguoi{align-self:flex-end;max-width:72%;background:#ebe7dd;border-radius:14px;padding:12px 16px;font-size:15px;line-height:1.5}
.bong-ai{align-self:flex-start;max-width:86%;font-size:15px;line-height:1.6}
.bong-ai b{font-weight:700}
.chip{display:inline-flex;align-items:center;gap:6px;border:1px solid #dcd8ce;background:#fff;border-radius:8px;padding:5px 10px;font-size:13px;color:#5a574f;margin-bottom:8px}
.chip .dot{width:8px;height:8px;border-radius:50%;background:#3d8b5a}
.o-nhap{margin:12px 60px 18px;border:1px solid #d9d5cb;background:#fff;border-radius:16px;padding:14px 16px 10px;min-height:94px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.o-nhap .chu{font-size:15px;line-height:1.5;color:#2b2a27;min-height:22px}
.o-nhap .chu.goi-y{color:#9a968c}
.o-nhap .hang{display:flex;align-items:center;gap:8px;margin-top:8px}
.nut-tron{width:32px;height:32px;border-radius:9px;border:1px solid #d9d5cb;display:flex;align-items:center;justify-content:center;font-size:20px;color:#5a574f;background:#fff}
.nut-gui{margin-left:auto;width:34px;height:34px;border-radius:9px;background:#3b3934;color:#fff;display:flex;align-items:center;justify-content:center;font-size:17px}
.tab2{display:inline-flex;border:1px solid #d9d5cb;border-radius:9px;overflow:hidden;font-size:13px}
.tab2 span{padding:6px 12px;color:#5a574f}
.tab2 span.on{background:#3b3934;color:#fff;font-weight:700}
.menu{position:absolute;background:#fff;border:1px solid #dcd8ce;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.12);padding:6px;font-size:14px;min-width:210px;z-index:4}
.menu div{padding:8px 12px;border-radius:7px}
.menu div.on{background:#efece4;font-weight:700}
.trang{flex:1;margin-top:34px;padding:30px 40px;overflow:hidden}
.trang h1{font-size:26px;margin-bottom:6px}
.trang .phu{color:#76726a;font-size:14px;margin-bottom:20px}
.cai-dat{display:flex;gap:26px}
.cai-dat .nav{width:180px;display:flex;flex-direction:column;gap:2px;font-size:14px}
.cai-dat .nav div{padding:8px 12px;border-radius:8px;color:#4a4740}
.cai-dat .nav div.on{background:#e7e3d9;color:#2b2a27;font-weight:700}
.cai-dat .noi{flex:1}
.dong{display:flex;align-items:center;justify-content:space-between;gap:20px;border:1px solid #e3e0d8;background:#fff;border-radius:12px;padding:14px 18px;margin-bottom:10px}
.dong .t{font-weight:700;font-size:15px}
.dong .m{font-size:13px;color:#76726a;margin-top:3px;max-width:600px}
.dong.noi-bat{border:2px solid #b51f34;background:#fdf5f6}
.cong{width:44px;height:25px;border-radius:999px;background:#cfcbc1;position:relative;flex-shrink:0}
.cong::after{content:"";position:absolute;left:3px;top:3px;width:19px;height:19px;border-radius:50%;background:#fff;transition:none}
.cong.bat{background:#2f7d4f}
.cong.bat::after{left:22px}
.luoi{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.the{border:1px solid #e3e0d8;background:#fff;border-radius:12px;padding:14px;display:flex;gap:12px;align-items:flex-start}
.the.noi-bat{border:2px solid #b51f34;background:#fdf5f6}
.vuong{width:36px;height:36px;border-radius:9px;color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:15px;flex-shrink:0}
.the .t{font-weight:700;font-size:15px}
.the .m{font-size:12.5px;color:#76726a;margin-top:2px;line-height:1.4}
.nut{display:inline-block;border-radius:9px;padding:9px 18px;font-weight:700;font-size:14px;background:#3b3934;color:#fff}
.nut.phu{background:#fff;color:#3b3934;border:1px solid #cfcbc1}
.nut.xanh{background:#2f7d4f}
.hop-thoai{position:absolute;inset:0;background:rgba(40,38,34,.35);display:flex;align-items:center;justify-content:center;z-index:3}
.hop-thoai .khung{background:#fff;border-radius:14px;padding:26px 28px;width:560px;box-shadow:0 14px 40px rgba(0,0,0,.2)}
.hop-thoai h2{font-size:20px;margin-bottom:8px}
.hop-thoai p{font-size:14px;color:#5a574f;line-height:1.55}
.bang{width:100%;border-collapse:collapse;font-size:13.5px;margin-top:8px}
.bang th{text-align:left;background:#f1efe9;padding:7px 10px;font-weight:700;border-bottom:1px solid #e3e0d8}
.bang td{padding:7px 10px;border-bottom:1px solid #eeebe4}
.tien{height:8px;border-radius:999px;background:#ebe7dd;overflow:hidden;margin-top:6px}
.tien span{display:block;height:100%;background:#2f7d4f}
.lich{display:grid;grid-template-columns:56px repeat(5,1fr);border:1px solid #e3e0d8;border-radius:12px;overflow:hidden;background:#fff;font-size:12.5px}
.lich .o{border-left:1px solid #eeebe4;border-top:1px solid #eeebe4;height:44px;position:relative}
.lich .gio{border-top:1px solid #eeebe4;height:44px;color:#8a867c;padding:4px 6px;text-align:right}
.lich .dau{background:#f6f4ef;font-weight:700;text-align:center;padding:8px 0;border-left:1px solid #eeebe4}
.su-kien{position:absolute;left:4px;right:4px;top:2px;height:22px;border-radius:6px;background:#2f6fb5;color:#fff;font-size:11.5px;padding:3px 7px;font-weight:700;white-space:nowrap;overflow:hidden}
.ma{font-family:ui-monospace,Menlo,monospace;font-size:13px;background:#f6f4ef;border:1px solid #e3e0d8;border-radius:10px;padding:12px 14px;line-height:1.6;white-space:pre-wrap}
.chu-thich{position:absolute;left:0;right:0;bottom:0;height:96px;background:#24262c;color:#fff;display:flex;align-items:center;gap:18px;padding:0 40px}
.chu-thich .so{flex-shrink:0;min-width:44px;height:44px;border-radius:999px;background:#b51f34;font-weight:700;font-size:18px;display:flex;align-items:center;justify-content:center;padding:0 10px}
.chu-thich .t{font-size:21px;line-height:1.4}
.chu-thich .t b{color:#ffd2d8}
#tro{position:absolute;z-index:9;width:26px;height:30px;pointer-events:none}
#bam{position:absolute;z-index:8;width:40px;height:40px;border-radius:50%;border:3px solid #b51f34;opacity:0}
`;

export const truLoi = `<svg viewBox="0 0 26 30" width="26" height="30"><path d="M2 2 L2 24 L8 18.5 L12.5 28 L16.5 26 L12 17 L20 17 Z" fill="#111" stroke="#fff" stroke-width="2" stroke-linejoin="round"/></svg>`;

const VAN = ["#5b7fbf", "#c46a3c", "#3d8b5a", "#7a5bbf", "#b5455a", "#4a8fa3"];

export function ben(on = "") {
  const m = (id, t, cls = "") => `<div class="muc ${cls} ${on === id ? "on" : ""}" data-id="ben-${id}">${t}</div>`;
  return `<div class="ben"><div class="ten-app">Claude</div>${m("moi", "＋ New chat")}${m("chats", "Chats")}${m("projects", "Projects")}${m("customize", "Customize")}${on === "skills" || on === "connectors" ? m("skills", "Skills", "con") + m("connectors", "Connectors", "con") : ""}<div class="duoi" data-id="ben-user"><span class="av">H</span><span>Hùng</span></div></div>`;
}

export function oNhap({ chu = "", goiY = "Reply to Claude…", tab = false, cowork = false, thuMuc = "" } = {}) {
  return `<div class="o-nhap" data-id="o-nhap">
    <div class="chu ${chu ? "" : "goi-y"}">${chu || goiY}</div>
    <div class="hang"><span class="nut-tron" data-id="nut-cong">+</span>${tab ? `<span class="tab2" data-id="tab"><span class="${cowork ? "" : "on"}" data-id="tab-chat">Chat</span><span class="${cowork ? "on" : ""}" data-id="tab-cowork">Cowork</span></span>` : ""}${thuMuc ? `<span class="chip" style="margin:0">📁 ${thuMuc}</span>` : ""}<span class="nut-gui" data-id="nut-gui">↑</span></div></div>`;
}

export const cuaSo = (trong, tieuDe = "Claude") =>
  `<div class="cuaso"><div class="thanh-tieu-de"><i></i><i></i><i></i><span>${tieuDe}</span></div><span class="nhan-mh">Minh họa · giao diện thật có thể khác</span>${trong}</div>`;

export const chuThich = (so, t) => `<div class="chu-thich"><span class="so">${so}</span><span class="t">${t}</span></div>`;

export const theApp = (ds, noiBat = -1) =>
  `<div class="luoi">${ds.map(([ten, mo], i) => `<div class="the ${i === noiBat ? "noi-bat" : ""}" data-id="app-${i}"><span class="vuong" style="background:${VAN[i % VAN.length]}">${ten[0]}</span><div><div class="t">${ten}</div><div class="m">${mo}</div></div></div>`).join("")}</div>`;
