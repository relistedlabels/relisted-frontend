"use client";

import React, { useState } from "react";
import { Paragraph1, Paragraph2 } from "@/common/ui/Text";
import { Star, Edit2, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Calendar from "./Calendar";
import DeleteProductModal from "./DeleteProductModal";
import { useProductDetailsStore } from "@/store/useProductDetailsStore";

interface InventoryItemDetailsHeaderProps {
  onEdit?: () => void;
  onDisable?: () => void;
}

const InventoryItemDetailsHeader: React.FC<InventoryItemDetailsHeaderProps> = ({
  onEdit,
  onDisable,
}) => {
  const router = useRouter();
  const product = useProductDetailsStore((state) => state.product);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  if (!product) return null;

  const status = "Active"; // TODO: Add status to Product type from backend
  const rating = product.rating || 4.9;
  const reviewCount = product.reviewCount || 0;

  const handleEdit = () => {
    router.push(`/listers/inventory/product-edit/${product.id}`);
  };

  return (
    <>
      <div className="w-full max-w-2xl bg-transparent">
        {/* Title & Status */}
        <div className="flex flex-row justify-between items-start gap-2 mb-1">
          <div className="flex flex-wrap items-center gap-2">
            <Paragraph2 className="text-2xl sm:text-3xl font-bold text-black">
              {product.name}
            </Paragraph2>
            <Paragraph1 className="px-3 py-0.5 bg-gray-200 text-gray-700 text-xs font-bold rounded uppercase tracking-wider">
              {status}
            </Paragraph1>
          </div>
          <Calendar />
        </div>

        {/* Description */}
        <Paragraph1 className="text-gray-500 mb-2">
          {product.subText}
        </Paragraph1>

        {/* Rating */}
        <div className="flex flex-wrap items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm font-bold text-black ml-1">{rating}</span>
          <span className="text-sm text-gray-500 ml-1">
            ({reviewCount} Reviews)
          </span>
        </div>

        {/* Details Box */}
        <div className="bg-[#F7F7F7] border border-gray-300 rounded-[10px] p-4 mb-4">
          {/* Prices */}
          <div className="flex flex-row justify-between gap-4 mb-2 border-b border-gray-300 pb-2">
            <div>
              <Paragraph1 className="text-xs font-medium text-gray-500 uppercase mb-1">
                Daily Rental Price
              </Paragraph1>
              <Paragraph2 className="text-xl sm:text-2xl font-bold text-black">
                ₦{product.dailyPrice.toLocaleString()}
              </Paragraph2>
            </div>

            <div>
              <Paragraph1 className="text-xs font-medium text-gray-500 uppercase mb-1">
                Item Value
              </Paragraph1>
              <Paragraph2 className="text-xl sm:text-2xl font-bold text-black">
                ₦{product.originalValue.toLocaleString()}
              </Paragraph2>
            </div>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
            <div>
              <Paragraph1 className="text-xs font-medium text-gray-500 uppercase mb-1">
                Size
              </Paragraph1>
              <Paragraph1 className="font-bold text-black">
                {product.measurement}
              </Paragraph1>
            </div>
            <div>
              <Paragraph1 className="text-xs font-medium text-gray-500 uppercase mb-1">
                Color
              </Paragraph1>
              <Paragraph1 className="font-bold text-black">
                {product.color}
              </Paragraph1>
            </div>
            <div>
              <Paragraph1 className="text-xs font-medium text-gray-500 uppercase mb-1">
                Condition
              </Paragraph1>
              <Paragraph1 className="font-bold text-black">
                {product.condition}
              </Paragraph1>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleEdit}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#33332D] text-white font-semibold hover:bg-black transition-colors"
          >
            <Edit2 className="w-4 h-4" />
            Edit Item
          </button>
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors border border-red-200"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      {/* Delete Modal */}
      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        productId={product.id}
        productName={product.name}
      />
    </>
  );
};

export default InventoryItemDetailsHeader;
