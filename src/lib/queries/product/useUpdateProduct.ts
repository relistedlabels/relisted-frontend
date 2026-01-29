import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/http";
import {
  useProductDraftStore,
  ProductDraft,
} from "@/store/useProductDraftStore";

export const useUpdateProduct = (productId: string) => {
  const reset = useProductDraftStore((state) => state.reset);

  return useMutation({
    mutationFn: async (draft: ProductDraft) => {
      // Map store format to backend expected format
      const payload = {
        name: draft.name,
        subText: draft.subText,
        description: draft.description,
        condition: draft.condition,
        composition: draft.composition,
        measurement: draft.measurement,
        originalValue: draft.originalValue,
        dailyPrice: draft.dailyRentalPrice,
        quantity: draft.quantity,
        color: draft.color, // Already a string
        warning: draft.warning,
        careInstruction: draft.careInstruction,
        careSteps: draft.careSteps, // Already a string
        stylingTip: draft.stylingTip,
        attachments: draft.attachments.map((att) => att.url),
        categoryId: draft.categoryId,
        tagId: draft.tagId,
        brandId: draft.brandId,
      };

      return apiFetch<any>(`/product/${productId}`, {
        method: "PATCH",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      reset();
    },
  });
};
