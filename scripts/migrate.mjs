// Tạo/cập nhật bảng: DATABASE_URL=... npm run db:migrate
// Cũng chạy tự động trước mỗi lần build (--neu-co): có DATABASE_URL thì tạo bảng, không có thì bỏ qua.
// Schema toàn "if not exists" nên chạy lại bao nhiêu lần cũng không mất dữ liệu.
import { readFileSync } from "node:fs";
import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) {
  if (process.argv.includes("--neu-co")) {
    console.log("Chưa có DATABASE_URL, bỏ qua tạo bảng.");
    process.exit(0);
  }
  console.error("Thiếu DATABASE_URL");
  process.exit(1);
}
const sql = postgres(url, { max: 1, onnotice: () => {} });
try {
  await sql.unsafe(readFileSync(new URL("../db/schema.sql", import.meta.url), "utf8"));
  console.log("Đã chạy db/schema.sql");
} finally {
  await sql.end();
}
