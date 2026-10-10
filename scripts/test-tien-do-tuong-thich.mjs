import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { boSungBuocDaTach } from "../src/lib/tien-do-tuong-thich.ts";

const { chang } = JSON.parse(readFileSync(new URL("../src/generated/khoa-hoc.json", import.meta.url), "utf8"));
const ids = chang.flatMap(c => c.buoc.map(b => b.id));
assert.equal(ids.length, 45);
const oldIds = ids.filter(id => id !== "c06-b08");
assert.deepEqual(boSungBuocDaTach(oldIds), new Set(ids), "44 bước cũ vẫn đủ điều kiện hoàn thành");
assert.deepEqual(boSungBuocDaTach([]), new Set(), "Người mới không được tự đánh dấu");
assert.deepEqual(boSungBuocDaTach(["c06-b01", "c06-b06"]), new Set(["c06-b01", "c06-b06"]), "Không cộng bước khi chưa xong b07");
assert.deepEqual(boSungBuocDaTach(ids), new Set(ids), "Tiến độ 45 bước không cộng trùng");
const withoutChapter6 = ids.filter(id => !id.startsWith("c06-"));
assert.deepEqual(boSungBuocDaTach(withoutChapter6), new Set(withoutChapter6), "Bỏ hoàn thành chặng 6 không còn bước suy ra");
assert.equal(boSungBuocDaTach(oldIds.filter(id => id !== "c01-b01")).size, 44, "Thiếu bước khác vẫn chưa đủ điều kiện");
console.log("Đạt: 45 bước, giữ tiến độ cũ, không cộng nhầm và bỏ hoàn thành đúng.");
