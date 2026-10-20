"use client";

import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import type { Man } from "@/lib/noi-dung";

/**
 * Màn trình chiếu có phụ đề (giáo trình v3.0). Giảng viên chiếu toàn màn hình và đọc theo phụ đề;
 * học viên bấm xem lại trên trang chặng. Mỗi màn có nhiều nhịp phụ đề: bấm "Tiếp" đi hết các nhịp
 * rồi mới sang màn sau. Phím: → / Space tiếp, ← lùi, P bật/tắt phụ đề, F toàn màn hình.
 */

type Muc = { ten?: string; moTa?: string; nhan?: string };

/** **chữ** → nhấn màu chủ đạo. Nội dung do người soạn giáo trình viết, không nhận HTML. */
function Chu({ s }: { s?: unknown }) {
  if (typeof s !== "string") return null;
  return (
    <>
      {s.split(/(\*\*[^*]+\*\*)/).map((p, i) =>
        p.startsWith("**") && p.endsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : <Fragment key={i}>{p}</Fragment>,
      )}
    </>
  );
}

const mang = <T,>(v: unknown) => (Array.isArray(v) ? (v as T[]) : []);
const muc = (v: unknown): Muc => (typeof v === "string" ? { ten: v } : ((v ?? {}) as Muc));

function NoiDungMan({ m }: { m: Man }) {
  const tieuDe = m.tieuDe ? <h2 className="tc-tieu-de"><Chu s={m.tieuDe} /></h2> : null;
  const chot = m.chot ? <p className="tc-chot"><Chu s={m.chot} /></p> : null;
  const noiBat = Number(m.noiBat ?? 0);
  let than: ReactNode = null;

  switch (m.kieu) {
    case "bia":
      return (
        <div className="tc-bia">
          {m.so ? <p className="tc-bia-so">{String(m.so)}</p> : null}
          <h2 className="tc-bia-ten"><Chu s={m.tieuDe} /></h2>
          {m.phu ? <p className="tc-bia-phu"><Chu s={m.phu} /></p> : null}
        </div>
      );
    case "xacSuat":
      than = (
        <div className="tc-luoi tc-luoi-2">
          {mang<{ nhan: string; cau: string; luaChon: [string, number][] }>(m.cot).map((c) => (
            <div key={c.nhan} className="tc-the">
              <p className="tc-nhan">{c.nhan}</p>
              <p className="tc-cau">“{c.cau} <span className="tc-con-tro">_</span>”</p>
              <ul className="tc-thanh">
                {mang<[string, number]>(c.luaChon).map(([tu, pt]) => (
                  <li key={tu}>
                    <span className="tc-thanh-tu">{tu}</span>
                    <span className="tc-thanh-nen"><span style={{ width: `${Math.max(2, pt)}%` }} /></span>
                    <span className="tc-thanh-so">{pt}%</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
      break;
    case "chat":
      than = (
        <div className="tc-chat">
          <p className="tc-bong tc-bong-nguoi"><Chu s={m.hoi} /></p>
          <p className="tc-bong tc-bong-ai"><span className="tc-ai-nhan">AI</span><Chu s={m.dap} /></p>
        </div>
      );
      break;
    case "bang":
      than = (
        <div className="tc-bang-boc">
          <table className="tc-bang">
            <thead>
              <tr>{mang<string>(m.cotTieuDe).map((t) => <th key={t}>{t}</th>)}</tr>
            </thead>
            <tbody>
              {mang<string[]>(m.dong).map((d, i) => (
                <tr key={i} className={noiBat === i + 1 ? "tc-noi-bat" : ""}>
                  {d.map((o, j) => <td key={j}><Chu s={o} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      break;
    case "bac":
      than = (
        <ol className="tc-bac">
          {mang<Muc>(m.bac).map((b, i) => (
            <li key={i} className={noiBat === i + 1 ? "tc-noi-bat" : ""} style={{ ["--bac" as string]: i }}>
              <span className="tc-bac-ma">{b.nhan ?? `Cấp ${i + 1}`}</span>
              <span className="tc-bac-ten"><Chu s={b.ten} /></span>
              <span className="tc-bac-mo-ta"><Chu s={b.moTa} /></span>
              {noiBat === i + 1 && m.nhanNoiBat ? <span className="tc-tag">{String(m.nhanNoiBat)}</span> : null}
            </li>
          ))}
        </ol>
      );
      break;
    case "the": {
      const ds = mang<unknown>(m.the).map(muc);
      than = (
        <>
          <div className={`tc-luoi tc-luoi-${Math.min(ds.length, Number(m.cot) || (ds.length === 4 ? 2 : 3))}`}>
            {ds.map((t, i) => (
              <div key={i} className={`tc-the ${noiBat === i + 1 ? "tc-noi-bat" : ""}`}>
                {m.danhSo !== false ? <span className="tc-so">{i + 1}</span> : null}
                <p className="tc-the-ten"><Chu s={t.ten} /></p>
                {t.moTa ? <p className="tc-the-mo-ta"><Chu s={t.moTa} /></p> : null}
                {t.nhan ? <span className="tc-tag">{t.nhan}</span> : null}
              </div>
            ))}
          </div>
          {Array.isArray(m.duoi) ? (
            <div className="tc-luong tc-luong-nho">
              {mang<string>(m.duoi).map((d, i) => (
                <Fragment key={i}>
                  {i > 0 && <span className="tc-mui-ten" aria-hidden="true">→</span>}
                  <span className="tc-o">{d}</span>
                </Fragment>
              ))}
            </div>
          ) : null}
        </>
      );
      break;
    }
    case "ds":
      than = (
        <ol className={`tc-ds ${m.dau === "tich" ? "tc-ds-tich" : ""}`}>
          {mang<unknown>(m.ds).map(muc).map((d, i) => (
            <li key={i}>
              <span className="tc-so" aria-hidden="true">{m.dau === "tich" ? "✓" : i + 1}</span>
              <span>
                <span className="tc-ds-ten"><Chu s={d.ten} /></span>
                {d.moTa ? <span className="tc-ds-mo-ta"><Chu s={d.moTa} /></span> : null}
              </span>
            </li>
          ))}
        </ol>
      );
      break;
    case "vs": {
      const tr = (m.trai ?? {}) as { nhan?: string; noi?: string; ghiChu?: string };
      const ph = (m.phai ?? {}) as { nhan?: string; noi?: string; ghiChu?: string };
      than = (
        <div className="tc-luoi tc-luoi-2">
          <div className="tc-the tc-vs-truoc">
            <p className="tc-nhan">{tr.nhan}</p>
            <p className="tc-cau"><Chu s={tr.noi} /></p>
            {tr.ghiChu ? <p className="tc-the-mo-ta"><Chu s={tr.ghiChu} /></p> : null}
          </div>
          <div className="tc-the tc-vs-sau">
            <p className="tc-nhan">{ph.nhan}</p>
            <p className="tc-cau"><Chu s={ph.noi} /></p>
            {ph.ghiChu ? <p className="tc-the-mo-ta"><Chu s={ph.ghiChu} /></p> : null}
          </div>
        </div>
      );
      break;
    }
    case "luong": {
      const nh = m.nhanh as { hoi?: string; co?: string; chua?: string } | undefined;
      than = (
        <>
          <div className={`tc-luong ${m.vong ? "tc-luong-vong" : ""}`}>
            {mang<unknown>(m.buoc).map(muc).map((b, i) => (
              <Fragment key={i}>
                {i > 0 && <span className="tc-mui-ten" aria-hidden="true">→</span>}
                <div className={`tc-o ${noiBat === i + 1 ? "tc-noi-bat" : ""}`}>
                  <span className="tc-o-ten"><Chu s={b.ten} /></span>
                  {b.moTa ? <span className="tc-o-mo-ta"><Chu s={b.moTa} /></span> : null}
                </div>
              </Fragment>
            ))}
          </div>
          {m.vong ? <p className="tc-vong-ve" aria-hidden="true">↺ quay lại vòng đầu khi cần nâng cấp</p> : null}
          {nh ? (
            <div className="tc-nhanh">
              <p className="tc-nhanh-hoi">{nh.hoi}</p>
              <p className="tc-nhanh-co"><b>Có →</b> <Chu s={nh.co} /></p>
              <p className="tc-nhanh-chua"><b>Chưa →</b> <Chu s={nh.chua} /></p>
            </div>
          ) : null}
        </>
      );
      break;
    }
    case "songSong":
      than = (
        <div className="tc-ss">
          <div className="tc-o tc-noi-bat"><span className="tc-o-ten">{String(m.dieuPhoi)}</span></div>
          <span className="tc-mui-ten" aria-hidden="true">→</span>
          <div className="tc-ss-cot">
            <p className="tc-nhan">Chạy song song</p>
            {mang<unknown>(m.songSong).map(muc).map((b, i) => (
              <div key={i} className="tc-o"><span className="tc-o-ten">{b.ten}</span>{b.moTa ? <span className="tc-o-mo-ta">{b.moTa}</span> : null}</div>
            ))}
          </div>
          <span className="tc-mui-ten" aria-hidden="true">→</span>
          <div className="tc-ss-cot">
            <p className="tc-nhan">Rồi chạy tuần tự</p>
            {mang<unknown>(m.tuanTu).map(muc).map((b, i) => (
              <div key={i} className="tc-o"><span className="tc-o-ten">{b.ten}</span>{b.moTa ? <span className="tc-o-mo-ta">{b.moTa}</span> : null}</div>
            ))}
          </div>
        </div>
      );
      break;
    case "minhHoa":
      // Video minh họa không lời: bấm vào video không chuyển màn.
      than = (
        <div className="tc-minh-hoa" onClick={(e) => e.stopPropagation()}>
          <video src={String(m.video)} poster={String(m.video).replace(/\.mp4$/, ".jpg")} controls autoPlay muted playsInline preload="metadata" aria-label={String(m.tieuDe)} />
        </div>
      );
      break;
    case "hop":
      return (
        <div className="tc-hop">
          {tieuDe}
          <p className="tc-hop-noi"><Chu s={m.noi} /></p>
          {m.phu ? <p className="tc-chot"><Chu s={m.phu} /></p> : null}
        </div>
      );
  }

  return (
    <div className="tc-man-trong">
      {tieuDe}
      <div className="tc-than">{than}</div>
      {chot}
    </div>
  );
}

export default function TrinhChieu({ man, nhan, tieuDe }: { man: Man[]; nhan: string; tieuDe: string }) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [phuDe, setPhuDe] = useState(true);
  const [toan, setToan] = useState(false);
  const khung = useRef<HTMLDivElement>(null);
  const san = useRef<HTMLDivElement>(null);
  const noiDung = useRef<HTMLDivElement>(null);
  const m = man[i];

  // Màn nào dài hơn khung 16:9 thì thu nhỏ dần nội dung cho vừa, để chiếu không bao giờ bị cắt chữ.
  useLayoutEffect(() => {
    const s = san.current;
    const nd = noiDung.current;
    if (!s || !nd) return;
    let z = 1;
    nd.style.zoom = "1";
    while (s.scrollHeight > s.clientHeight + 1 && z > 0.7) {
      z -= 0.04;
      nd.style.zoom = String(z);
    }
  }, [i, j, phuDe, toan]);

  const tiep = useCallback(() => {
    if (j < man[i].loi.length - 1) setJ(j + 1);
    else if (i < man.length - 1) {
      setI(i + 1);
      setJ(0);
    }
  }, [i, j, man]);
  const lui = useCallback(() => {
    if (j > 0) setJ(j - 1);
    else if (i > 0) {
      setI(i - 1);
      setJ(man[i - 1].loi.length - 1);
    }
  }, [i, j, man]);
  const denMan = useCallback(
    (k: number) => {
      setI(Math.max(0, Math.min(man.length - 1, k)));
      setJ(0);
    },
    [man.length],
  );
  const batToan = useCallback(() => {
    const el = khung.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  }, []);

  useEffect(() => {
    const doi = () => setToan(document.fullscreenElement === khung.current);
    document.addEventListener("fullscreenchange", doi);
    return () => document.removeEventListener("fullscreenchange", doi);
  }, []);

  // Phím chỉ có tác dụng khi đang chiếu toàn màn hình hoặc khung đang được chọn (không chặn cuộn trang).
  const phim = useCallback(
    (e: KeyboardEvent | React.KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) tiep();
      else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) lui();
      else if (e.key === "Home") denMan(0);
      else if (e.key === "End") denMan(man.length - 1);
      else if (e.key.toLowerCase() === "p") setPhuDe((v) => !v);
      else if (e.key.toLowerCase() === "f") batToan();
      else return;
      e.preventDefault();
    },
    [tiep, lui, denMan, batToan, man.length],
  );
  useEffect(() => {
    if (!toan) return;
    const nghe = (e: KeyboardEvent) => phim(e);
    window.addEventListener("keydown", nghe);
    return () => window.removeEventListener("keydown", nghe);
  }, [toan, phim]);

  if (!m) return null;
  const tongNhip = m.loi.length;

  return (
    <div className="tc">
      <div
        ref={khung}
        className={`tc-khung ${toan ? "tc-toan" : ""}`}
        tabIndex={0}
        role="region"
        aria-roledescription="trình chiếu"
        aria-label={`${nhan}: ${tieuDe}. Màn ${i + 1} trên ${man.length}`}
        onKeyDown={toan ? undefined : phim}
      >
        <div className="tc-san" ref={san} onClick={tiep}>
          <div className="tc-dau">
            <span>{nhan}</span>
            <span className="tc-thuong-hieu">Gifty Tech</span>
          </div>
          <div className="tc-man" key={i}>
            <div ref={noiDung}>
              <NoiDungMan m={m} />
            </div>
          </div>
          {phuDe && (
            <p className={`tc-phu-de ${m.loi[j].length > 140 ? "tc-phu-de-dai" : ""}`} aria-live="polite">
              <Chu s={m.loi[j]} />
            </p>
          )}
          <div className="tc-tien-do" aria-hidden="true">
            <span style={{ width: `${((i + (j + 1) / tongNhip) / man.length) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="tc-dieu-khien">
        <button type="button" onClick={lui} disabled={i === 0 && j === 0} aria-label="Lùi">← Lùi</button>
        <span className="tc-dem">
          Màn {i + 1}/{man.length}
          {tongNhip > 1 ? ` · câu ${j + 1}/${tongNhip}` : ""}
        </span>
        <button type="button" onClick={tiep} disabled={i === man.length - 1 && j === tongNhip - 1} className="tc-nut-chinh" aria-label="Tiếp">Tiếp →</button>
        <button type="button" onClick={() => setPhuDe(!phuDe)} aria-pressed={phuDe}>{phuDe ? "Ẩn phụ đề" : "Hiện phụ đề"}</button>
        <button type="button" onClick={batToan}>Chiếu toàn màn hình</button>
      </div>
      <p className="tc-goi-y">Chiếu tại lớp: bấm “Chiếu toàn màn hình”, dùng phím → và ← để chuyển, P để ẩn hoặc hiện phụ đề.</p>
    </div>
  );
}
