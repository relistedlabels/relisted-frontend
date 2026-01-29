// lib/stores/productDraftStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/queries/product/useGetProductById";

export type Tag = {
  id: string;
  value: string;
  isNew?: boolean;
};

export type Attachment = {
  id: string;
  url: string;
  name: string;
  progress: number;
  type?: string;
  slotId?: string;
};

export type ProductDraft = {
  name: string;
  subText: string;
  description: string;
  condition: string;
  composition: string;
  measurement: string;

  originalValue: number;
  dailyRentalPrice: number;
  quantity: number;

  color: string[];
  warning: string;
  size: string;

  careInstruction: string;
  careSteps: string[];
  stylingTip: string;

  tags: Tag[];
  attachments: Attachment[];
  categoryId: string;
  brandId: string;
};

type ProductDraftStore = {
  data: ProductDraft;
  setField: <K extends keyof ProductDraft>(
    key: K,
    value: ProductDraft[K],
  ) => void;
  mergeData: (partial: Partial<ProductDraft>) => void;
  populateFromProduct: (product: Product) => void;
  reset: () => void;
};

const initialState: ProductDraft = {
  name: "",
  subText: "",
  description: "",
  condition: "",
  composition: "",
  measurement: "",

  originalValue: 0,
  dailyRentalPrice: 0,
  quantity: 1,

  color: [],
  warning: "",
  size: "",

  careInstruction: "",
  careSteps: [],
  stylingTip: "",

  tags: [],
  attachments: [],
  categoryId: "",
  brandId: "",
};

export const useProductDraftStore = create<ProductDraftStore>()(
  persist(
    (set) => ({
      data: initialState,

      setField: (key, value) =>
        set((state) => ({
          data: { ...state.data, [key]: value },
        })),

      mergeData: (partial) =>
        set((state) => ({
          data: { ...state.data, ...partial },
        })),

      populateFromProduct: (product: Product) =>
        set({
          data: {
            name: product.name,
            subText: product.subText,
            description: product.description,
            condition: product.condition,
            composition: product.composition,
            measurement: product.measurement,
            originalValue: product.originalValue,
            dailyRentalPrice: product.dailyPrice,
            quantity: product.quantity,
            color: product.color.split(", ").filter(Boolean),
            warning: product.warning,
            size: product.measurement,
            careInstruction: product.careInstruction,
            careSteps: product.careSteps.split(", ").filter(Boolean),
            stylingTip: product.stylingTip,
            tags: product.tagId
              ? [{ id: product.tagId, value: product.tagId }]
              : [],
            attachments: product.attachments.map((url, idx) => ({
              id: `${idx}`,
              url,
              name: `Image ${idx + 1}`,
              progress: 100,
              type: "image",
            })),
            categoryId: product.categoryId,
            brandId: product.brandId,
          },
        }),

      reset: () => set({ data: initialState }),
    }),
    { name: "product-draft-store" },
  ),
);
