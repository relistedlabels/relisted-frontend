import { NextRequest, NextResponse } from "next/server";

const USER_ROUTES = ["/dashboard", "/settings", "/profile"];
const ADMIN_ROUTES = ["/admin"];
const PUBLIC_ONLY_ROUTES = ["/login", "/auth"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isUserRoute = USER_ROUTES.some((r) => pathname.startsWith(r));
  const isAdminRoute = ADMIN_ROUTES.some((r) => pathname.startsWith(r));
  const isPublicOnly = PUBLIC_ONLY_ROUTES.some((r) => pathname.startsWith(r));

  // Skip everything else
  if (!isUserRoute && !isAdminRoute && !isPublicOnly) {
    return NextResponse.next();
  }

  // Ask backend who this request belongs to
  const authRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/user`,
    {
      headers: {
        cookie: req.headers.get("cookie") || "",
      },
    },
  );

  // 🔐 Block unauthenticated users from protected routes
  if ((isUserRoute || isAdminRoute) && authRes.status === 401) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🔁 Redirect logged-in users away from login/auth pages
  if (isPublicOnly && authRes.status === 200) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // 🔒 Admin role enforcement
  if (isAdminRoute && authRes.status === 200) {
    const user = await authRes.json();

    if (user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/403", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/settings/:path*",
    "/profile/:path*",
    "/admin/:path*",
    "/login",
    "/auth/:path*",
  ],
};
