import { FullProfile, UpdateProfilePayload } from "../../../types/profile";
import { apiFetch } from "./http";


export const getProfile = (userId: string) =>
  apiFetch<FullProfile>(`/profile/${userId}`, {
    method: "GET",
  });





export const updateProfile = (userId: string, data: UpdateProfilePayload) =>
  apiFetch(`/profile/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

