import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { toJSON } from "flatted";

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, password, rollNumber, phone } =
    await request.json();

  try {
    const registerResponse = await axios.post(
      "http://localhost:8000/register",
      {
        firstName,
        lastName,
        email,
        password,
        rollNumber,
        phone,
      }
    );

    // get the token from the response header and store in cookies
    const token = registerResponse.headers["authorization"];
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
        { error: "Token not found in request headers" },
        { status: 400 }
      );
    }

    // Ensure the response data is correctly formatted
    return NextResponse.json(toJSON(registerResponse), { status: 201 });
  } catch (error) {
    console.error("Registration failed:", (error as Error).message);

    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || "Internal Server Error";
      return NextResponse.json({ status, message }, { status });
    }

    return NextResponse.json(
      {
        status: 500,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
