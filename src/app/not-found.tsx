import Link from "next/link";

export default function KhongThay() {
  return (
    <main id="noi-dung-chinh" className="mx-auto max-w-md px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-navy">Không tìm thấy trang</h1>
      <p className="mt-2 text-body">Link có thể đã sai hoặc nội dung đã được chuyển.</p>
      <Link href="/" className="mt-6 inline-block rounded-lg bg-amber px-5 py-3 font-bold text-[#1a1205]">Về trang khóa học</Link>
    </main>
  );
}
