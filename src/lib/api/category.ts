import { apiFetch } from "./http";

export type Category = {
  id: string;
  name: string;
  userId?: string;
  createdAt?: string;
};

export const categoryApi = {
  getCategories: () =>
    apiFetch<Category[]>("/categories", {
      method: "GET",
    }),
  createCategory: (data: { name: string }) =>
    apiFetch<Category>("/categories", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
