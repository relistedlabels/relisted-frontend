import { useMutation } from "@tanstack/react-query";
import { productApi, ProductPayload } from "@/lib/api/product";

export function useCreateProduct() {
  return useMutation({
    mutationFn: (data: ProductPayload) => productApi.create(data),
  });
}
