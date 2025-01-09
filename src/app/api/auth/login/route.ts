import { NextResponse } from "next/server";
// import { cookies } from "next/headers";
import { LoginRequestType } from "@/types/auth";
import axios from "axios";
// import { toJSON, stringify } from "flatted";

export async function POST(request: Request) {
  try {
    const { email, password }: LoginRequestType = await request.json();

    // Make login request
    const loginResponse = await axios.post("http://localhost:8000/login", {
      email,
      password,
    });

    // get the token from the response header and store in cookies
    const cookies = loginResponse.headers["set-cookie"];
    const token = cookies ? cookies[0]?.split(";")[0].split("=")[1] : null;

    if (token) {
      const response = NextResponse.json(
        { message: "Token received" },
        { status: 201 }
      );
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return response;
    } else {
      return NextResponse.json(
        { error: "Token not found in request headers" },
        { status: 400 }
      );
    }

    // Return the login response
    return NextResponse.json(loginResponse.data, {
      status: 201,
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message || "Invalid credentials" },
      { status: 401 }
    );
  }
}
