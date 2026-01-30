"use client";

import React from "react";
import { Paragraph1 } from "@/common/ui/Text";
import { useProductDraftStore } from "@/store/useProductDraftStore";

export const SubTextInput: React.FC = () => {
  const { data, setField } = useProductDraftStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField("subText", e.target.value);
  };

  return (
    <div className="w-full">
      <Paragraph1 className="mb-2 text-xs font-medium text-gray-700">
        Sub Text
      </Paragraph1>
      <input
        type="text"
        value={data.subText}
        onChange={handleChange}
        placeholder="e.g., Vintage Floral Maxi Dress"
        maxLength={100}
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition-colors focus:border-black focus:ring-1 focus:ring-black"
      />
      <p className="mt-1 text-xs text-gray-500">
        {(data.subText || "").length}/100 characters
      </p>
    </div>
  );
};
