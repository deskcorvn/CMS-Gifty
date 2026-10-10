import type { Metadata } from "next";
import DauTrang from "@/components/DauTrang";

export const metadata: Metadata = { title: "Xác nhận đăng nhập", robots: { index: false } };

/** Trang trung gian: bấm nút mới đăng nhập, để trình quét link của email không đốt mất link dùng-một-lần. */
export default async function TrangXacThuc({ searchParams }: { searchParams: Promise<{ t?: string }> }) {
  const { t = "" } = await searchParams;
  return (
    <>
      <DauTrang />
      <main className="mx-auto max-w-md px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-navy">Vào trang học</h1>
        <p className="mt-2 text-body">Bấm nút dưới đây để đăng nhập trên thiết bị này.</p>
        <form action="/api/xac-thuc" method="post" className="mt-8">
          <input type="hidden" name="t" value={t} />
          <button className="rounded-lg bg-amber px-8 py-3.5 font-bold text-[#1a1205] hover:bg-amber-light">Đăng nhập</button>
        </form>
      </main>
    </>
  );
}
