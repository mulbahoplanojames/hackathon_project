import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { setCookie } from "cookies-next";

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
    const cookies = registerResponse.headers["set-cookie"];
    const token = cookies ? cookies[0]?.split(";")[0].split("=")[1] : null;

    if (token) {
      const response = NextResponse.json(
        { message: "Token received" },
        { status: 201 }
      );
      // response.cookies.set("token", token, {
      //   httpOnly: true,
      //   secure: process.env.NODE_ENV === "production",
      //   sameSite: "lax",
      //   maxAge: 60 * 60 * 24 * 7, // 7 days
      // });
      const data = registerResponse.data;
      //console.log(data);
      setCookie("user", data, { req: request, res: response });
      setCookie("token", token, { req: request, res: response });
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
