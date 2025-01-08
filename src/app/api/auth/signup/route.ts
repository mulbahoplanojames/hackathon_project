import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const { firstName, lastName, email, password, rollNumber, phone } =
    await request.json();
  console.log({
    firstName,
    lastName,
    email,
    password,
    rollNumber,
    phone,
  });
  try {
    // Make registration request
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

    // Get token from request header and store in cookies
    const token = request.headers.get("Authorization");
    if (token) {
      const response = NextResponse.json(
        { message: "Token received" },
        { status: 200 }
      );
      response.cookies.set("token", token);
      return response;
    } else {
      return NextResponse.json(
        { error: "Token not found in request headers" },
        { status: 400 }
      );
    }

    // Ensure the response data is correctly formatted
    return NextResponse.json(registerResponse.data, { status: 201 });
  } catch (error) {
    console.error("Registration failed:", (error as Error).message);

    // More detailed error handling
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
