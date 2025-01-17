"use client";

import { FileUploadError, FileUploadResponse } from "@/types/types";
import axios from "axios";
import { getCookie } from "cookies-next";

const user = getCookie("user");
const currentUser = user ? JSON.parse(user as string) : null;

export async function uploadFile(file: File): Promise<FileUploadResponse> {
  try {
    const response = await axios.post(
      `http://localhost:8000/api/profile-image/store/${currentUser?.id}`,
      {
        file,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("File upload failed");
    }

    if (response.status === 200 || response.status === 201) {
      window.location.reload();
    }

    console.log(response);

    return await response.data;
  } catch (error) {
    throw {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    } as FileUploadError;
  }
}
