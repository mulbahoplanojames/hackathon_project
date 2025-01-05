import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import type { AuthResponseType, RegisterRequestType } from "@/types/auth";
import axios from "axios";
import api from "@/lib/axios";

export async function POST(request: Request) {
  try {
    const body: RegisterRequestType = await request.json();

    const response = await api.post<AuthResponseType>(
      "/api/auth/register",
      body
    );

    if (response.status === 201) {
      // Store the JWT token in an HTTP-only cookie
      const cookieStore = cookies();
      cookieStore.set("token", response.data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      });

      // Preventing the token from being sent to the backend in the response for security
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { access_token, ...safeData } = response.data;

      return NextResponse.json(safeData, { status: 201 });
    }

    return NextResponse.json(
      { message: "Registration failed" },
      { status: 400 }
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        {
          message: error.response?.data?.message || "Registration failed",
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
