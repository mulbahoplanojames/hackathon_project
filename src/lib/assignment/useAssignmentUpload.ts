"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// import { uploadFile } from '../utils/api';
import { fileUploadSchema, FileUploadSchemaType } from "@/schema/zod-schema";
import { FileUploadError, FileUploadResponse } from "@/types/types";
import { uploadAssignment } from "./uploadAssignmentapi";

export function useAssignmentUpload(id: string) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<FileUploadResponse | null>(
    null
  );
  const [error, setError] = useState<FileUploadError | null>(null);

  const form = useForm<FileUploadSchemaType>({
    resolver: zodResolver(fileUploadSchema),
    defaultValues: {
      file: undefined,
    },
  });

  const onSubmit = async (data: FileUploadSchemaType) => {
    setIsUploading(true);
    setUploadResult(null);
    setError(null);

    try {
      const result = await uploadAssignment(data.file, id);
      setUploadResult(result);
    } catch (err) {
      setError(err as FileUploadError);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    form,
    onSubmit,
    isUploading,
    uploadResult,
    error,
  };
}
