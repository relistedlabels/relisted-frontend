import { apiClient } from "./client";

export interface User {
  id: string;
  name: string;
  email: string;
}

export const getUsers = () => apiClient<User[]>("/users");

export const getUserById = (id: string) => apiClient<User>(`/users/${id}`);
