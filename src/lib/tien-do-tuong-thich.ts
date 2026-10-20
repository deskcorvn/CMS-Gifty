/**
 * Giữ tiến độ khi nội dung đổi bước.
 *
 * Bản 2.x (10/10 → 20/10/2026) có 9 chặng, mã bước "cNN-bNN". Ngày 20/10/2026 giáo trình v3.0 đổi sang
 * 4 chặng chính + thực hành thêm + chốt lại, mã bước mới có tiền tố "v3-" nên không trùng nghĩa với mã cũ.
 * Người đã hoàn thành trọn bản 2.x (đủ 47 bước) vẫn giữ trạng thái hoàn thành ở bản mới; ai mới làm dở thì
 * học lại theo cấu trúc mới (mã cũ không còn được đếm).
 */
const CHANG_V2 = [4, 7, 4, 5, 6, 8, 5, 4, 4]; // số bước của chặng 1–9 ở bản 2.1
const pad = (n: number) => String(n).padStart(2, "0");
export const BUOC_V2 = CHANG_V2.flatMap((soBuoc, i) =>
  Array.from({ length: soBuoc }, (_, j) => `c${pad(i + 1)}-b${pad(j + 1)}`),
);

export function boSungBuocDaTach(ids: Iterable<string>, hienCo: readonly string[] = []): Set<string> {
  const xong = new Set(ids);
  // Bản 2.0 tách c06-b07 thành b07 + b08, và bản 2.1 thêm c04-b04, c04-b05: suy ra như trước.
  if (xong.has("c06-b07")) xong.add("c06-b08");
  if (xong.has("c04-b03")) {
    xong.add("c04-b04");
    xong.add("c04-b05");
  }
  if (BUOC_V2.every((id) => xong.has(id))) for (const id of hienCo) xong.add(id);
  return xong;
}
