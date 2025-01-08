import { createAxiosInstance } from "./axios";

const axiosInstance = createAxiosInstance();

// Fetch CSRF token
// async function fetchCsrfToken() {
//   try {
//     const response = await axiosInstance.get("/sanctum/csrf-cookie");
//     console.log("CSRF cookie fetched successfully.");
//     console.log("Response headers:", response.headers["set-cookie"]);
//     return true; // Indicates success
//   } catch (error) {
//     console.error("Error fetching CSRF cookie:", error);
//     return false;
//   }
// }

export async function fetchCsrfToken() {
  try {
    const response = await axiosInstance.get("/sanctum/csrf-cookie"); // Request CSRF cookie
    console.log("CSRF cookie fetched successfully.");
    const setCookieHeaders = response.headers["set-cookie"];
    console.log("Response headers:", response.headers["set-cookie"]);

    if (!setCookieHeaders) {
      console.error("No 'set-cookie' header found in response.");
      return null;
    }

    // Find and extract the XSRF-TOKEN
    const xsrfCookie = setCookieHeaders.find((cookie) =>
      cookie.startsWith("XSRF-TOKEN=")
    );
    if (!xsrfCookie) {
      console.error("XSRF-TOKEN cookie not found.");
      return null;
    }

    const csrfToken = decodeURIComponent(
      xsrfCookie.split("XSRF-TOKEN=")[1].split(";")[0]
    );
    // const csrfToken = xsrfCookie.split("XSRF-TOKEN=")[1].split(";")[0];
    // console.log("CSRF Token:", csrfToken);

    return csrfToken;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
    return null;
  }
}
