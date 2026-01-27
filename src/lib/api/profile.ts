import { FullProfile, UpdateProfilePayload } from "../../../types/profile";
import { apiFetch } from "./http";


export const getProfile = (userId: string) =>
  apiFetch<FullProfile>(`/profile/${userId}`, {
    method: "GET",
  });





export const updateProfile = (data: UpdateProfilePayload) =>
  apiFetch("/profile", {
    method: "POST",
    body: JSON.stringify(data),
  });

