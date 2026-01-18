import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/dev", "/waitlist"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next internals & static files
  if (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Allow public routes only
  const isPublic = PUBLIC_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`),
  );

  if (isPublic) {
    return NextResponse.next();
  }

  // Protect EVERYTHING else (including "/")
  const isAuthorized = req.cookies.get("dev_auth")?.value === "true";

  if (!isAuthorized) {
    const url = req.nextUrl.clone();
    url.pathname = "/dev";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next|favicon.ico|.*\\.).*)"],
};
