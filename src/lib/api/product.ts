// lib/api/product.ts
import { apiFetch } from "./http";
type Attachment = {
  id: string;
  url: string;
  name: string;
  progress:number
  type?:string
  slotId?:string
};


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
  color: string[];
  warning: string;
  size :string
  careInstruction: string;
  careSteps: string[];
  stylingTip: string;
  attachments: Attachment[];
  categoryId: string;
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


