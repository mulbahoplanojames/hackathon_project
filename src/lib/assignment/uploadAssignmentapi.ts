"use client";

import { getCookie } from "cookies-next";
import { FileUploadError, FileUploadResponse } from "@/types/types";
import axios from "axios";
import toast from "react-hot-toast";

const user = getCookie("user");
const currentUser = user ? JSON.parse(user as string) : null;
const user_id = currentUser ? currentUser.id : null;

export async function uploadAssignment(
  file: File,
  assignmentId: string
): Promise<FileUploadResponse> {
  console.log("Assignment File:", file);

  console.log("ID", assignmentId);
  try {
    const response = await axios.post(
      `http://localhost:8000/api/courses/assigment/submit/${assignmentId}`,
      {
        file,
        user_id,
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
      toast.error("File upload failed, please try again");
    }

    if (response.status === 200 || response.status === 201) {
      toast.success("Assignment submitted successfully");
      window.location.reload();
    }

    console.log("Assignment Response:", response.data);

    return await response.data;
  } catch (error) {
    console.log("Error from the catch Assignment:", error);
    toast.error("File upload failed, please try again");

    throw {
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    } as FileUploadError;
  }
}
