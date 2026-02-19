import { categoryApi } from "@/lib/api/category";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useCategory() {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => categoryApi.getCategories(),
    retry: false,
  });
}

export function useCreateCategory() {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (data: { name: string }) => categoryApi.createCategory(data),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["category"] });
    },
  });
}
