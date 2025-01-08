import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { createAxiosInstance } from "@/lib/axios";
import { fetchCsrfToken } from "@/lib/csrfTokenFetch";

// Axios instance
const axiosInstance = createAxiosInstance();

export async function POST(request: NextRequest) {
  try {
    const userData = await request.json();

    // Fetch CSRF token
    const csrfToken = await fetchCsrfToken();
    if (!csrfToken) {
      return NextResponse.json(
        { error: "Failed to fetch CSRF token" },
        { status: 500 }
      );
    }

    // Make registration request
    const registerResponse = await axiosInstance.post("/register", userData, {
      headers: {
        "X-XSRF-TOKEN": csrfToken, // Add CSRF token to headers
      },
    });

    return NextResponse.json(registerResponse.data, { status: 201 });
  } catch (error) {
    console.error(
      "Registration failed:",
      axios.isAxiosError(error) ? error.response?.data : error.message
    );
    return NextResponse.json(
      {
        error: axios.isAxiosError(error)
          ? error.response?.data?.message || "Registration failed"
          : error.message || "Unknown error",
      },
      {
        status: axios.isAxiosError(error) ? error.response?.status || 500 : 500,
      }
    );
  }
}
