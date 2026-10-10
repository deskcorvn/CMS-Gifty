/** Gợi ý sửa lỗi gõ tên miền email phổ biến (gmial.com → gmail.com). Trả null nếu không nghi sai. */
const SUA: Record<string, string> = {
  "gmial.com": "gmail.com", "gamil.com": "gmail.com", "gmai.com": "gmail.com", "gmal.com": "gmail.com",
  "gnail.com": "gmail.com", "gmail.co": "gmail.com", "gmail.con": "gmail.com", "gmail.vn": "gmail.com",
  "gmaill.com": "gmail.com", "gmail.cm": "gmail.com", "gmail.om": "gmail.com", "gmeil.com": "gmail.com",
  "yaho.com": "yahoo.com", "yahooo.com": "yahoo.com", "yahoo.co": "yahoo.com", "yahoo.con": "yahoo.com",
  "hotmial.com": "hotmail.com", "hotmai.com": "hotmail.com", "hotmail.co": "hotmail.com",
  "outlok.com": "outlook.com", "outloo.com": "outlook.com", "outlook.co": "outlook.com",
  "icloud.co": "icloud.com", "iclod.com": "icloud.com",
};

export function goiYEmail(email: string) {
  const [ten, mien] = email.trim().toLowerCase().split("@");
  if (!ten || !mien) return null;
  const dung = SUA[mien];
  return dung ? `${ten}@${dung}` : null;
}
