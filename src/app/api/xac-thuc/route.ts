import { NextResponse } from "next/server";
import { dungToken } from "@/lib/dang-nhap";
import { datPhien } from "@/lib/phien";

/** Form trên trang /xac-thuc POST về đây. Token đúng thì đặt phiên và vào trang học. */
export async function POST(req: Request) {
  const form = await req.formData();
  const id = await dungToken(String(form.get("t") || ""));
  const goc = new URL(req.url).origin;
  if (!id) return NextResponse.redirect(`${goc}/dang-nhap?loi=het-han`, 303);
  await datPhien(id);
  return NextResponse.redirect(`${goc}/hoc`, 303);
}
