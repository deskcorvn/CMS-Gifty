import type { Metadata } from "next";
import DauTrang from "@/components/DauTrang";
import { batBuocHocVien } from "@/lib/phien";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function LayoutHoc({ children }: { children: React.ReactNode }) {
  await batBuocHocVien();
  return (
    <>
      <DauTrang dangHoc />
      {children}
    </>
  );
}
