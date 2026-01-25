import { useMutation } from "@tanstack/react-query";
import { productApi, ProductPayload } from "@/lib/api/product";

export function useUpdateProduct(id: string) {
  return useMutation({
    mutationFn: (data: Partial<ProductPayload>) => productApi.update(id, data),
  });
}
