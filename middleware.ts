import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("snack-house-cookie");
  if (!token && !req.nextUrl.pathname.startsWith("/auth/")) {
    const url = req.nextUrl.clone();
    url.pathname = "/auth/sign-in";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/((?!_next/static|_next/image|api|favicon.ico|images|logo).*)",
};
