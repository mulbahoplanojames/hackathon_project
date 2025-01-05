## This is just a test middleware that will prevent user from accessing protected routes without a token

```js
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
// Get the token from the cookies
const token = request.cookies.get('token');

// Define protected routes that require authentication
const protectedRoutes = [
'/dashboard',
'/profile',
// Add other protected routes
];

// Check if the current path is a protected route
const isProtectedRoute = protectedRoutes.some(route =>
request.nextUrl.pathname.startsWith(route)
);

// If accessing a protected route without a token, redirect to login
if (isProtectedRoute && !token) {
return NextResponse.redirect(new URL('/login', request.url));
}

return NextResponse.next();
}

export const config = {
matcher: [
'/dashboard/:path*',
'/profile/:path*',
// Add other protected routes
],
};
```

## Second middleware for the authentication

```js
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';

interface JWTPayload {
  sub: string;
  role: string;
  exp: number;
}

export async function middleware(request: NextRequest) {
  // Get the current path
  const path = request.nextUrl.pathname;

  // Get the token from the cookies
  const token = request.cookies.get('token')?.value;

  // Define route groups
  const studentRoutes = path.startsWith('/student');
  const teacherRoutes = path.startsWith('/teacher');
  const homeRoutes = path.startsWith('/home') || path === '/';

  // Home routes are accessible to all
  if (homeRoutes) {
    return NextResponse.next();
  }

  // If no token is present and trying to access protected routes
  if (!token && (studentRoutes || teacherRoutes)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    if (token) {
      // Decode the JWT token
      const decoded = jwtDecode<JWTPayload>(token);

      // Check if token is expired
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTimestamp) {
        // Clear the expired token
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.delete('token');
        return response;
      }

      // Check role-based access
      if (studentRoutes && decoded.role !== 'student') {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }

      if (teacherRoutes && decoded.role !== 'teacher') {
        return NextResponse.redirect(new URL('/unauthorized', request.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    // If token is invalid, redirect to login
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    return response;
  }
}

// Update the matcher to include all relevant routes
export const config = {
  matcher: [
    '/student/:path*',
    '/teacher/:path*',
    '/home/:path*',
    '/',
    '/login',
    '/unauthorized',
  ],
};
```

## sending request to the login api route from the login form

```js
const response = await fetch("/api/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "user@example.com",
    password: "password",
  }),
});
```

## Sending request to the register api route from the register form

```js
const response = await fetch("/api/auth/signup", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john@example.com",
    password: "password",
    password_confirmation: "password",
    role: "student",
  }),
});
```
