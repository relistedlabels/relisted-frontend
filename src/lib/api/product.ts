// lib/api/product.ts
import { apiFetch } from "./http";

export type UserProduct = {
  id: string;
  name: string;
  size: string;
  color: string;
  pricePerDay: number;
  originalValue: number;
  createdAt: string;
  status: "ACTIVE" | "DISABLED";
  isRented: boolean;
  attachments: {
    url: string;
  }[];
};

export type ProductPayload = {
  name: string;
  subText: string;
  description: string;
  condition: string;
  composition: string;
  measurement: string;
  originalValue: number;
  dailyPrice: number; // ✅ Match backend
  quantity: number; // ✅ Add missing field
  color: string;
  warning: string;
  careInstruction: string;
  careSteps: string;
  stylingTip: string;
  attachments: string[]; // ✅ Array of IDs (strings), NOT objects
  categoryId: string;
  tagId: string;
  brandId: string;
};

export const productApi = {
  create: (data: ProductPayload) =>
    apiFetch<{ id: string }>("/product", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getById: (id: string) =>
    apiFetch<ProductPayload>(`/product/${id}`, {
      method: "GET",
    }),

  update: (id: string, data: Partial<ProductPayload>) =>
    apiFetch<void>(`/product/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  remove: (id: string) =>
    apiFetch<void>(`/product/${id}`, {
      method: "DELETE",
    }),

  getUserProducts: () =>
    apiFetch<UserProduct[]>("/product/user-products", {
      method: "GET",
    }),
};
