import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = pathname === "/login" || pathname === "/signup";

  // Define shared paths accessible to everyone, regardless of login status
  const isSharedPath =
    pathname === "/" || pathname === "/about" || pathname === "/team";

  // Define paths accessible only to teachers
  const isTeacherPath = [
    "/teacher-dashboard",
    "/add-assignments",
    "/view-assignments",
    "/add-courses",
    "/lecturer-courses",
  ].includes(pathname);

  // Define paths accessible only to students
  const isStudentPath = [
    "/dashboard",
    "/courses",
    "/assignments",
    "/enroll-courses",
    "/book-doctor",
    "/market-place",
    "/notifications",
    "/study-with-chat",
  ].includes(pathname);

  // Retrieve user token and roles from cookies
  const token = request.cookies.get("token")?.value;
  const userCookie = request.cookies.get("user")?.value;
  const user = userCookie ? JSON.parse(userCookie) : null;
  const userRole = user?.roles[0]?.title;
  // console.log("Middleware User Role: ", userRole);

  // Redirect logged-in users to appropriate dashboards from login/signup
  if (isPublicPath && token) {
    if (userRole === "teacher") {
      return NextResponse.redirect(new URL("/teacher-dashboard", request.url));
    }
    if (userRole === null || userRole === undefined) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  // Shared paths are accessible to everyone
  if (isSharedPath) {
    return NextResponse.next();
  }

  // Protect teacher-only routes
  if (isTeacherPath) {
    if (token && userRole === "teacher") {
      // Allow access to the requested route
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Protect student-only routes
  if (isStudentPath) {
    if ((token && userRole === null) || (token && userRole === undefined)) {
      // Allow access to the requested route
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Redirect unauthorized access to home page
  if (!token && !isPublicPath && !isSharedPath) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Exclude middleware from being applied to these routes
export const config = {
  matcher: ["/((?!api|_next/static|_next/data|favicon.ico).*)"],
};
