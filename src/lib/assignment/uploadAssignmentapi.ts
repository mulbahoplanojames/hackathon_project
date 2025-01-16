"use client";

import { FileUploadError, FileUploadResponse } from "@/types/types";
import axios from "axios";

export async function uploadAssignment(
  file: File,
  assignmentId: string
): Promise<FileUploadResponse> {
  const formData = new FormData();
  formData.append("file", file);
  console.log(formData);
  console.log("Assignment File:", file);

  console.log("ID", assignmentId);
  try {
    const response = await axios.post(
      `http://localhost:8000/api/courses/assigment/submit/${assignmentId}`,
      {
        file: file,
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

    console.log(response);

    return await response.data;
  } catch (error) {
    console.log("Error from the catch Assignment:", error);

    throw {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    } as FileUploadError;
  }
}
