// lib/api/profile.ts
import { apiFetch } from "./http";
import { FullProfile, UpdateProfilePayload } from "../../types/profile";

/** Get all users profile */
export const getAllProfiles = () =>
  apiFetch<FullProfile>(`/users/profile`, {
    method: "GET",
  });

/** Get user profile by id */
export const getProfile = async (userId: string) => {
  const response = await apiFetch<{ data: FullProfile }>(
    `/users/profile/${userId}`,
    {
      method: "GET",
    },
  );
  return response;
};

/** Create profile */
export const createProfile = (data: any) =>
  apiFetch<FullProfile>("/users/profile", {
    method: "POST",
    body: JSON.stringify(data),
  });

/** Update profile */
export const updateProfile = (data: UpdateProfilePayload) =>
  apiFetch<FullProfile>("/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  });

/** Upload avatar image */
export const uploadAvatar = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);
  return apiFetch<FullProfile>("/users/profile/avatar", {
    method: "POST",
    body: formData,
  });
};
