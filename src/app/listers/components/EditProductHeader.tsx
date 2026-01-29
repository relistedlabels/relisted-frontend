"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Paragraph1 } from "@/common/ui/Text";
import BackHeader from "@/common/ui/BackHeader";
import { useUpdateProduct } from "@/lib/queries/product/useUpdateProduct";
import { useProductDraftStore } from "@/store/useProductDraftStore";

interface EditProductHeaderProps {
  productName?: string;
}

const EditProductHeader: React.FC<EditProductHeaderProps> = ({
  productName = "Edit Item",
}) => {
  const params = useParams();
  const productId = params.id as string;

  const { data } = useProductDraftStore();
  const updateProduct = useUpdateProduct(productId);

  const handleSubmit = () => {
    if (updateProduct.isPending) return;
    updateProduct.mutate(data);
  };

  const isUpdating = updateProduct.isPending;

  return (
    <div className="mb-4 flex w-full flex-col gap-4 bg-transparent sm:flex-row sm:items-center sm:justify-between">
      <BackHeader title="Edit Item" subtitle={`Updating: ${productName}`} />

      <div className="flex items-center space-x-3">
        <button
          onClick={handleSubmit}
          disabled={isUpdating}
          className={`w-full rounded-xl px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all active:scale-95 sm:w-fit ${
            isUpdating
              ? "cursor-not-allowed bg-gray-400"
              : "bg-[#33332D] hover:bg-black"
          }`}
        >
          <Paragraph1>{isUpdating ? "Updating…" : "Save Changes"}</Paragraph1>
        </button>
      </div>
    </div>
  );
};

export default EditProductHeader;