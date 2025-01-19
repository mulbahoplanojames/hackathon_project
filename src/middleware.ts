import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  //  Define public paths that don't require authentication
  const isPublicPath = pathname === "/login" || pathname === "/signup";

  // Define paths that are accessible both when logged in and logged out
  const isSharedPath =
    pathname === "/" || pathname === "/about" || pathname === "/team";

  // const get the token from the cookie
  const token = request.cookies.get("token")?.value;
  // const user = request.cookies.get("user")?.value;
  // console.log(JSON.parse(user));

  // Only redirect from login/signup to dashboard if user is logged in
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!isPublicPath && !isSharedPath && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// Exclude middleware from being applied to these routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/data (data files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/data|favicon.ico).*)",
  ],
};
