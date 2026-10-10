import { khoaHoc, linkZalo, soLienHe } from "@/lib/noi-dung";

/** Hộp nhóm Zalo của lớp trên trang học: có link mời thì hiện nút, chưa có thì báo sẽ mời qua số đã đăng ký. */
export default function NhomZalo({ sdt }: { sdt: string }) {
  const link = khoaHoc.nhomZalo.link;
  return (
    <section className="mt-6 rounded-xl border border-line bg-white p-5">
      <h2 className="font-bold text-navy">Nhóm Zalo của lớp</h2>
      <p className="mt-1 text-sm leading-6 text-body">
        {link
          ? "Vào nhóm để nhận thông báo của lớp và hỏi tiếp khi tự làm ở nhà."
          : `Gifty Tech sẽ mời anh chị vào nhóm qua số ${sdt || "đã đăng ký"}. Số chưa đúng thì sửa ở mục “Thông tin của tôi”.`}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#0068ff] px-4 py-2 font-bold text-white">
            Vào nhóm Zalo
          </a>
        )}
        <span className="text-muted">
          Cần hỗ trợ ngay:{" "}
          <a href={linkZalo} target="_blank" rel="noopener noreferrer" className="font-semibold text-amber-ink underline underline-offset-4">
            Zalo {soLienHe}
          </a>
        </span>
      </div>
    </section>
  );
}
