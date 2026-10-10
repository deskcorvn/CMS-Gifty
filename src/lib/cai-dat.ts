import { db } from "./db";

export async function docCaiDat<T>(khoa: string): Promise<T | null> {
  const [r] = await db()<{ gia_tri: T }[]>`select gia_tri from cai_dat where khoa = ${khoa}`;
  return r?.gia_tri ?? null;
}

export async function ghiCaiDat(khoa: string, giaTri: unknown) {
  await db()`
    insert into cai_dat (khoa, gia_tri) values (${khoa}, ${db().json(giaTri as never)})
    on conflict (khoa) do update set gia_tri = excluded.gia_tri, cap_nhat_at = now()
  `;
}

/** Nội dung bài học chỉ mở khi quản trị bấm "Mở khóa học" (mặc định khóa: trả tiền xong chỉ thấy lịch và phần chuẩn bị). */
export async function khoaHocDaMo() {
  return (await docCaiDat<{ mo: boolean }>("mo_khoa_hoc"))?.mo === true;
}
