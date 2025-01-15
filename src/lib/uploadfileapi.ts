"use client";

import { FileUploadError, FileUploadResponse } from "@/types/types";
import axios from "axios";
import { getCookie } from "cookies-next";

const user = getCookie("user");
const currentUser = user ? JSON.parse(user as string) : null;

export async function uploadFile(file: File): Promise<FileUploadResponse> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      `http://localhost:8000/api/profile/store/${currentUser?.id}`,
      {
        file: formData,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("File upload failed");
    }

    return await response.data;
  } catch (error) {
    throw {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    } as FileUploadError;
  }
}
