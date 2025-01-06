import { NextResponse } from "next/server";
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
      const data = response.data;

      return NextResponse.json(data, { status: 201 });
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
