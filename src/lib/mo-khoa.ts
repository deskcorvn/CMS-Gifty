import { redirect } from "next/navigation";
import { khoaHocDaMo } from "./cai-dat";
import { laQuanTri } from "./quan-tri";

/** Được xem nội dung bài học: khóa học đã mở, hoặc người đang có phiên quản trị (để giảng viên xem trước). */
export async function duocVaoNoiDung() {
  return (await khoaHocDaMo()) || (await laQuanTri());
}

export async function batBuocDaMo() {
  if (!(await duocVaoNoiDung())) redirect("/hoc");
}

export const THONG_BAO_CHUA_MO = "Nội dung khóa học chưa mở. Gifty Tech sẽ mở khi lớp bắt đầu.";
