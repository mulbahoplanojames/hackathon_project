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
    const token = loginResponse.headers["authorization"];
    if (token) {
      const response = NextResponse.json(
        { message: "Token received" },
        { status: 201 }
      );
      response.cookies.set("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      return response;
    } else {
      return NextResponse.json(
        { error: "Token not received" },
        { status: 401 }
      );
    }

    // redirect to the home page if login is successful
    if (loginResponse.status === 201) {
      return NextResponse.redirect(new URL("/", request.url));
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
