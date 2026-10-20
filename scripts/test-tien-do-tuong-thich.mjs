import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { BUOC_V2, boSungBuocDaTach } from "../src/lib/tien-do-tuong-thich.ts";

const { chang } = JSON.parse(readFileSync(new URL("../src/generated/khoa-hoc.json", import.meta.url), "utf8"));
const ids = chang.flatMap(c => c.buoc.map(b => b.id));
assert.equal(chang.length, 6, "Giáo trình v3.0 có 4 chặng chính + thực hành thêm + chốt lại");
assert.ok(ids.every(id => id.startsWith("v3-")), "Mã bước v3.0 mang tiền tố v3-, không trùng mã bản 2.x");
assert.equal(new Set(ids).size, ids.length, "Mã bước không trùng nhau");
assert.equal(BUOC_V2.length, 47, "Bản 2.1 có 47 bước");

// Người đã hoàn thành trọn bản 2.1 (hoặc 44 bước bản cũ hơn, suy ra đủ 47) vẫn đủ điều kiện ở bản mới.
assert.deepEqual(new Set([...boSungBuocDaTach(BUOC_V2, ids)].filter(id => ids.includes(id))), new Set(ids), "Xong 47 bước v2.1 → xong v3.0");
const cu44 = BUOC_V2.filter(id => !["c06-b08", "c04-b04", "c04-b05"].includes(id));
assert.deepEqual(new Set([...boSungBuocDaTach(cu44, ids)].filter(id => ids.includes(id))), new Set(ids), "Xong 44 bước v2.0 → xong v3.0");
// Làm dở bản cũ thì không được cộng bước mới.
const doDang = BUOC_V2.filter(id => id !== "c01-b01");
assert.equal([...boSungBuocDaTach(doDang, ids)].filter(id => ids.includes(id)).length, 0, "Làm dở bản cũ không cộng bước v3.0");
// Bước v3.0 tự đánh dấu thì giữ nguyên.
assert.deepEqual(boSungBuocDaTach([ids[0], ids[1]], ids), new Set([ids[0], ids[1]]), "Bước mới giữ nguyên");
console.log(`Đạt: ${ids.length} bước v3.0, giữ hoàn thành cho người đã xong trọn bản cũ, mã mới không trùng mã cũ.`);
