import type { Metadata } from "next";
import DieuHuongHoc from "@/components/DieuHuongHoc";
import { dsChang } from "@/lib/noi-dung";
import DauTrang from "@/components/DauTrang";
import { duocVaoNoiDung } from "@/lib/mo-khoa";
import { batBuocHocVien } from "@/lib/phien";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function LayoutHoc({
  children,
}: {
  children: React.ReactNode;
}) {
  await batBuocHocVien();
  const daMo = await duocVaoNoiDung();
  return (
    <>
      <DauTrang dangHoc />
      <div className="learning-shell">
        <DieuHuongHoc
          chang={dsChang.map(({ so, tieuDe }) => ({ so, tieuDe }))}
          daMo={daMo}
        />
        <div className="learning-content">{children}</div>
      </div>
    </>
  );
}
