// ./neighborly-market/pages/_middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  if (req.ua?.isBot) {
    return new Response("Plz don't be a bot. Be human.", { status: 403 });
  }
  if (!req.url.includes("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.carrotsession) {
      return NextResponse.redirect(new URL("/enter", req.url));
    }
  }
}

