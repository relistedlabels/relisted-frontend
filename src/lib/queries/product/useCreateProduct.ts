import { useMutation } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/http";
import {
  useProductDraftStore,
  ProductDraft,
} from "@/store/useProductDraftStore";

export const useCreateProduct = () => {
  const reset = useProductDraftStore((state) => state.reset);

  return useMutation({
    mutationFn: async (draft: ProductDraft) => {
      // Extract only image URLs from attachments
      const imageUrls = draft.attachments
        .filter((att) => att.type === "image")
        .map((att) => att.url);

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
        color: draft.color,
        warning: draft.warning,
        careInstruction: draft.careInstruction,
        careSteps: draft.careSteps,
        stylingTip: draft.stylingTip,
        attachments: imageUrls, // Only image URLs
        categoryId: draft.categoryId,
        tagId: draft.tagId,
        brandId: draft.brandId,
      };

      return apiFetch<any>("/product", {
        method: "POST",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      reset();
    },
  });
};
