import type { Metadata } from "next";
import DauTrang from "@/components/DauTrang";
import { dinhDangTien, khoaHoc, nhanLichHoc } from "@/lib/noi-dung";
import FormDangKy from "./FormDangKy";

export const metadata: Metadata = { title: "Đăng ký" };

export default function TrangDangKy() {
  return (
    <>
      <DauTrang />
      <main className="mx-auto max-w-2xl px-4 py-10">
        <h1 className="text-2xl font-bold text-navy">Đăng ký {khoaHoc.ten}</h1>
        <p className="mt-2 text-body">
          {khoaHoc.tieuDePhu} · {nhanLichHoc()} · {khoaHoc.thoiLuongPhut} phút · học phí {dinhDangTien(khoaHoc.hocPhi)}
        </p>
        <div className="mt-6">
          <FormDangKy hocPhi={khoaHoc.hocPhi} />
        </div>
      </main>
    </>
  );
}
