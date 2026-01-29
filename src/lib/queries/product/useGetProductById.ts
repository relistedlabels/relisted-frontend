import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/http";

export type Product = {
  id: string;
  name: string;
  subText: string;
  description: string;
  condition: string;
  composition: string;
  measurement: string;
  originalValue: number;
  dailyPrice: number;
  quantity: number;
  color: string;
  warning: string;
  careInstruction: string;
  careSteps: string;
  stylingTip: string;
  attachments: string[];
  categoryId: string;
  tagId: string;
  brandId: string;
  rating?: number;
  reviewCount?: number;
};

export const useGetProductById = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      return apiFetch<Product>(`/product/${productId}`);
    },
    enabled: !!productId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
