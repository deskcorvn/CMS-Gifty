import postgres from "postgres";

/**
 * Kết nối Postgres cho Vercel Functions. Dùng chuỗi pooled của Neon (host có "-pooler").
 * prepare:false bắt buộc khi đi qua pgbouncer transaction mode (giống PTI web/api/_lib/db.mjs).
 */
type Sql = ReturnType<typeof postgres>;
const g = globalThis as unknown as { __hoc_sql?: Sql };

export function db(): Sql {
  if (g.__hoc_sql) return g.__hoc_sql;
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("Chưa cấu hình DATABASE_URL");
  g.__hoc_sql = postgres(url, { max: 1, idle_timeout: 20, connect_timeout: 10, prepare: false });
  return g.__hoc_sql;
}

export type Tx = postgres.TransactionSql;
