import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
import { LoginRequestType } from "@/types/auth";
import { createAxiosInstance } from "@/lib/axios";
import { fetchCsrfToken } from "@/lib/csrfTokenFetch";

// Axios instance
const axiosInstance = createAxiosInstance();

export async function POST(request: Request) {
  try {
    const body: LoginRequestType = await request.json();

    // Fetch CSRF token
    const csrfToken = await fetchCsrfToken();
    if (!csrfToken) {
      return NextResponse.json(
        { error: "CSRF token mismatch" },
        { status: 419 }
      );
    }

    // Make login request
    const loginResponse = await axiosInstance.post("/login", body, {
      headers: {
        "X-XSRF-TOKEN": csrfToken, // Add CSRF token to headers
      },
    });

    return NextResponse.json(loginResponse.data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Invalid credentials" },
      { status: 401 }
    );
  }
}
