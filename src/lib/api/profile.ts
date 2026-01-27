import { FullProfile, UpdateProfilePayload } from "../../../types/profile";
import { apiFetch } from "./http";


export const getProfile = (profileId: string) =>
  apiFetch<FullProfile>(`/profile/${profileId}`, {
    method: "GET",
  });





export const updateProfile = (data: UpdateProfilePayload) =>
  apiFetch("/profile", {
    method: "POST",
    body: JSON.stringify(data),
  });

