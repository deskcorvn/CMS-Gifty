import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DauTrang from "@/components/DauTrang";
import { docChungChi, linkChungChi, ngayVN } from "@/lib/chung-chi";
import { khoaHoc, nhanLichHoc } from "@/lib/noi-dung";
import NutChungChi from "./NutChungChi";

type Props = { params: Promise<{ ma: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cc = await docChungChi((await params).ma);
  if (!cc) return { title: "Không tìm thấy chứng chỉ" };
  return {
    title: `Chứng chỉ ${cc.ma} · ${cc.ho_ten}`,
    description: `${cc.ho_ten} đã hoàn thành ${khoaHoc.ten}: ${khoaHoc.tieuDePhu} (Gifty Tech).`,
    robots: { index: false },
    openGraph: { images: [`/chung-nhan/${cc.ma}/anh`] },
  };
}

/** Trang kiểm tra công khai: ai có link hoặc quét QR đều xem được tên, khóa học, ngày cấp và hiệu lực. */
export default async function TrangChungNhan({ params }: Props) {
  const cc = await docChungChi((await params).ma);
  if (!cc) notFound();
  const link = linkChungChi(cc.ma);
  const ngay = new Date(cc.cap_at);
  const linkedin =
    "https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME" +
    `&name=${encodeURIComponent(`${khoaHoc.ten}: ${khoaHoc.tieuDePhu}`)}&organizationName=${encodeURIComponent("Gifty Tech")}` +
    `&issueYear=${ngay.getFullYear()}&issueMonth=${ngay.getMonth() + 1}&certUrl=${encodeURIComponent(link)}&certId=${cc.ma}`;

  return (
    <>
      <div className="khong-in"><DauTrang /></div>
      <main className="mx-auto max-w-5xl px-4 py-10 print:p-0">
        <div className={`khong-in mb-6 rounded-xl border p-5 ${cc.thu_hoi_at ? "border-red-300 bg-red-50" : "border-emerald-300 bg-emerald-50"}`}>
          <p className={`text-lg font-bold ${cc.thu_hoi_at ? "text-red-800" : "text-emerald-800"}`}>
            {cc.thu_hoi_at ? "Chứng chỉ đã bị thu hồi" : "✓ Chứng chỉ hợp lệ, do Gifty Tech cấp"}
          </p>
          <dl className="mt-3 grid gap-x-6 gap-y-1 text-sm text-body sm:grid-cols-2">
            <div><dt className="inline text-muted">Họ tên: </dt><dd className="inline font-semibold">{cc.ho_ten}</dd></div>
            <div><dt className="inline text-muted">Mã: </dt><dd className="inline font-semibold">{cc.ma}</dd></div>
            <div><dt className="inline text-muted">Khóa học: </dt><dd className="inline font-semibold">{khoaHoc.ten}: {khoaHoc.tieuDePhu}</dd></div>
            <div><dt className="inline text-muted">Lớp: </dt><dd className="inline font-semibold">{nhanLichHoc()}</dd></div>
            <div><dt className="inline text-muted">Danh hiệu: </dt><dd className="inline font-semibold">{khoaHoc.chungChi.danhHieu}</dd></div>
            <div><dt className="inline text-muted">Ngày cấp: </dt><dd className="inline font-semibold">{ngayVN(cc.cap_at)}</dd></div>
            {cc.thu_hoi_at && <div className="sm:col-span-2"><dt className="inline text-muted">Lý do thu hồi: </dt><dd className="inline font-semibold">{cc.ly_do_thu_hoi}</dd></div>}
          </dl>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`/chung-nhan/${cc.ma}/anh`} alt={`Chứng chỉ ${khoaHoc.chungChi.danhHieu} của ${cc.ho_ten}`} className="w-full rounded-lg shadow-lg ring-1 ring-line print:rounded-none print:shadow-none print:ring-0" />
        <div className="mt-6"><NutChungChi ma={cc.ma} link={link} linkedin={linkedin} /></div>
      </main>
    </>
  );
}
