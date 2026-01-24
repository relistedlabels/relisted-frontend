import { apiFetch } from "./http";

export const updateProfile = (userId: string, data: any) =>
  apiFetch(`/profile/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
