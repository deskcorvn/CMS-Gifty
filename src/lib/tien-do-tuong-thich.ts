/**
 * Ngày 10/10/2026: c06-b07 (phép thử và lưu SP02) tách thành b07 + b08.
 * Bước cũ đã bao gồm cả hai việc, nên giữ tiến độ cho người đã hoàn thành.
 * API hiện đánh dấu/bỏ đánh dấu cả chặng; không có thao tác hoàn thành b07 riêng.
 *
 * Ngày 20/10/2026 (giáo trình v2.1): chặng 4 thêm c04-b04 (góp ý làm theo được) và c04-b05 (soát lại bằng
 * cuộc trò chuyện thứ hai). Người đã hoàn thành chặng 4 theo bản cũ (có c04-b03) giữ nguyên trạng thái xong.
 */
export function boSungBuocDaTach(ids: Iterable<string>): Set<string> {
  const xong = new Set(ids);
  if (xong.has("c06-b07")) xong.add("c06-b08");
  if (xong.has("c04-b03")) {
    xong.add("c04-b04");
    xong.add("c04-b05");
  }
  return xong;
}
