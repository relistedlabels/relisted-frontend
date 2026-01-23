// lib/queries/useUpload.ts
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "@/lib/api/upload";

export function useUpload() {
  return useMutation({
    mutationFn: uploadFile,
  });
}
