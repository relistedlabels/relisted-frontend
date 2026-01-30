// lib/api/product.ts
import { apiFetch } from "./http";

export type UserProduct = {
  id: string;
  name: string;
   measurement: string;
   dailyPrice:string,
   isAvailable:"AVAILABLE"|
 "RENTED"|
 "MAINTENANCE"|
  "RESERVED",
  color: string;
  pricePerDay: number;
  originalValue: number;
  createdAt: string;
  isActive: "ACTIVE" | "DISABLED";
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
  dailyPrice: number; // ✅ Correct field name (not pricePerDay)
  quantity: number; // ✅ Added missing field
  color: string; // ✅ String, not array
  warning: string;
  careInstruction: string;
  careSteps: string; // ✅ String, not array
  stylingTip: string;
  attachments: string[]; // ✅ Array of IDs (strings)
  categoryId: string; // ✅ Category ID only
  tagId: string; // ✅ Tag ID separate
  brandId: string;
};

export type ProductResponse = {
  message: string; // ✅ Backend returns message, not id
};

type ProductsResponse = {
  product: UserProduct[];
};


export const productApi = {
  create: (data: ProductPayload) =>
    apiFetch<ProductResponse>("/product", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getById: (id: string) =>
    apiFetch<ProductPayload>(`/product/${id}`, {
      method: "GET",
    }),

  update: (id: string, data: Partial<ProductPayload>) =>
    apiFetch<ProductResponse>(`/product/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  remove: (id: string) =>
    apiFetch<ProductResponse>(`/product/${id}`, {
      method: "DELETE",
    }),

  getUserProducts: () =>
    apiFetch<ProductsResponse>("/product/user-products", {
      method: "GET",
    }),
};
