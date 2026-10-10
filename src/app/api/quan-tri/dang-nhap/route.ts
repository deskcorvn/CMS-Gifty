import { NextResponse } from "next/server";
import { datPhienQuanTri, khoaDung, xoaPhienQuanTri } from "@/lib/quan-tri";

export async function POST(req: Request) {
  const form = await req.formData();
  const goc = new URL(req.url).origin;
  if (form.get("thoat")) {
    await xoaPhienQuanTri();
    return NextResponse.redirect(`${goc}/quan-tri`, 303);
  }
  if (!khoaDung(String(form.get("khoa") || ""))) {
    await new Promise((r) => setTimeout(r, 800)); // làm chậm dò khóa
    return NextResponse.redirect(`${goc}/quan-tri?loi=1`, 303);
  }
  await datPhienQuanTri();
  return NextResponse.redirect(`${goc}/quan-tri`, 303);
}
