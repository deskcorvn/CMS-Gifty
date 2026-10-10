import { NextResponse } from "next/server";
import { xoaPhien } from "@/lib/phien";

export async function POST(req: Request) {
  await xoaPhien();
  return NextResponse.redirect(`${new URL(req.url).origin}/`, 303);
}
