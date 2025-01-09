"use server";

import { cookies } from "next/headers";

export const getToken = async (): Promise<string | undefined> => {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return undefined;
    }

    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    return undefined;
  }
};
