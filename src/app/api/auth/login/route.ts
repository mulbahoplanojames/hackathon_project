import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import api from "@/lib/api";
import { AuthResponseType, LoginRequestType } from "@/types/auth";
import axios from "axios";

export async function POST(request: Request) {
  try {
    const body: LoginRequestType = await request.json();

    const response = await api.post<AuthResponseType>("/api/auth/login", body);

    if (response.status === 200) {
      // Store the JWT token in an HTTP-only cookie
      const cookieStore = cookies();
      cookieStore.set("token", response.data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      // Preventing the token from being sent to the backend in the response for security
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { access_token, ...safeData } = response.data;

      return NextResponse.json(safeData, { status: 200 });
    }

    return NextResponse.json(
      { message: "Authentication failed" },
      { status: 401 }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          message: error.response?.data?.message || "Authentication failed",
          errors: error.response?.data?.errors,
        },
        { status: error.response?.status || 500 }
      );
    }

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
