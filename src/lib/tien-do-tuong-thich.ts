/**
 * Ngày 10/10/2026: c06-b07 (phép thử và lưu SP02) tách thành b07 + b08.
 * Bước cũ đã bao gồm cả hai việc, nên giữ tiến độ cho người đã hoàn thành.
 * API hiện đánh dấu/bỏ đánh dấu cả chặng; không có thao tác hoàn thành b07 riêng.
 */
export function boSungBuocDaTach(ids: Iterable<string>): Set<string> {
  const xong = new Set(ids);
  if (xong.has("c06-b07")) xong.add("c06-b08");
  return xong;
}
