import { useMutation } from "@tanstack/react-query";
import { uploadAvatar } from "@/lib/api/profile";

export function useUploadAvatar() {
  return useMutation({
    mutationFn: (file: File) => uploadAvatar(file),
  });
}
