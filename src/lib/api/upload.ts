// lib/api/upload.ts
import { apiFetch } from "./http";

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file); // REQUIRED

  return apiFetch<{ id: string; url?: string }>("/upload", {
    method: "POST",
    body: formData,
  });
};
