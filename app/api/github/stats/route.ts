import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  const res = await fetch("https://ghchart.rshah.org/r2hu1", {
    cache: "no-store",
  });

  return new NextResponse(res.body, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-store",
    },
  });
}
