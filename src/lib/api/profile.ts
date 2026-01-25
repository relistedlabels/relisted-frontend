import { apiFetch } from "./http";

/** Co-located type */
export interface Profile {
  id: string;
  name: string | null;
  avatar?: string | null;
  role?: "curator" | "dresser";
}

export const getProfile = (userId: string) =>
  apiFetch<Profile | null>(`/profile/${userId}`, {
    method: "GET",
  });


/** API contract */
export interface UpdateProfilePayload {
  phoneNumber?: string;
  bvn?: string;

  emergencyContacts?: {
    name: string;
    relationship: string;
    phoneNumber: string;
    city: string;
    state: string;
  };

  businessInfo?: {
    businessName: string;
    businessEmail: string;
    businessRegistrationNumber: string;
    businessAddress: string;
    businessCity: string;
    businessState: string;
  };

  bankAccounts?: {
    bankName: string;
    accountNumber: string;
    nameOfAccount: string;
  };

  address?: {
    street: string;
    city: string;
    state: string;
    country: string;
  };

  avatarUploadId?: string;
  ninUploadId?: string;
}

export const updateProfile = (userId: string, data: UpdateProfilePayload) =>
  apiFetch(`/profile/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

