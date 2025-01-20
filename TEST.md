import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
const pathname = request.nextUrl.pathname;

// const get the token from the cookie
const token = request.cookies.get("token")?.value || "";
const user = request.cookies.get("user")?.value || "";
const currentUser = user ? JSON.parse(user) : null;
const userRole = currentUser?.roles[0]?.title || "";
console.log("User : ", currentUser);
console.log("User Rolw: ", userRole);

// Define public paths that don't require authentication
const isPublicPath = pathname === "/login" || pathname === "/signup";

// Define paths that are accessible both when logged in and logged out
const isSharedPath =
pathname === "/" || pathname === "/about" || pathname === "/team";

// Define paths that are accessible to a user with a role of teacher
const isTeacherPath =
pathname === "/teacher-dashboard" ||
pathname === "add-assignments" ||
pathname === "view-assignments" ||
pathname === "add-courses" ||
pathname === "lecturer-courses";

// Define paths that are accessible to a user with a role of students
const isStudentPath =
pathname === "/dashboard" ||
pathname === "courses" ||
pathname === "assignments" ||
pathname === "enroll-courses" ||
pathname === "book-doctor" ||
pathname === "enroll-courses" ||
pathname === "market-place" ||
pathname === "notifications" ||
pathname === "study-with-chat";

// Only redirect from login/signup to dashboard if user is logged in
// if (isPublicPath && token) {
// return NextResponse.redirect(new URL("/dashboard", request.url));
// }

// Allow access to shared paths for everyone
if (isSharedPath) {
return NextResponse.next();
}

// If no token, redirect to login except for public paths
if (!token && !isPublicPath) {
return NextResponse.redirect(new URL("/login", request.url));
}

// Teacher route protection
if (isTeacherPath) {
if (userRole !== "teacher") {
return NextResponse.redirect(new URL("/", request.url));
}
return NextResponse.next();
}

// Student route protection
if (isStudentPath) {
if (userRole !== "student") {
return NextResponse.redirect(new URL("/", request.url));
}
return NextResponse.next();
}

return NextResponse.next();
}

// Exclude middleware from being applied to these routes
export const config = {
matcher: [
/\*

- Match all request paths except for the ones starting with:
- - api (API routes)
- - \_next/static (static files)
- - \_next/data (data files)
- - favicon.ico (favicon file)
    _/
    "/((?!api|\_next/static|\_next/data|favicon.ico)._)",
    ],
    };
