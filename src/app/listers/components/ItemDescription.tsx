"use client";

import React from "react";
import { Paragraph1 } from "@/common/ui/Text";
import { useProductDraftStore } from "@/store/useProductDraftStore";

export const ItemDescription: React.FC = () => {
  const { data, setField } = useProductDraftStore();

  const handleCareStepsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Ensure it's always a string
    setField("careSteps", e.target.value);
  };

  return (
    <div className="w-full rounded-xl border border-gray-200 p-4 space-y-4">
      <div>
        <Paragraph1 className="mb-2 text-xs font-medium text-gray-700">
          Description
        </Paragraph1>
        <textarea
          value={data.description}
          onChange={(e) => setField("description", e.target.value)}
          placeholder="Describe your item..."
          className="w-full h-24 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black resize-none"
        />
      </div>

      <div>
        <Paragraph1 className="mb-2 text-xs font-medium text-gray-700">
          Care Instructions
        </Paragraph1>
        <textarea
          value={data.careInstruction}
          onChange={(e) => setField("careInstruction", e.target.value)}
          placeholder="How to care for this item..."
          className="w-full h-24 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black resize-none"
        />
      </div>

      <div>
        <Paragraph1 className="mb-2 text-xs font-medium text-gray-700">
          Care Steps
        </Paragraph1>
        <textarea
          value={typeof data.careSteps === "string" ? data.careSteps : ""}
          onChange={handleCareStepsChange}
          placeholder="Step-by-step care instructions..."
          className="w-full h-24 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black resize-none"
        />
      </div>

      <div>
        <Paragraph1 className="mb-2 text-xs font-medium text-gray-700">
          Styling Tips
        </Paragraph1>
        <textarea
          value={data.stylingTip}
          onChange={(e) => setField("stylingTip", e.target.value)}
          placeholder="How to style this item..."
          className="w-full h-24 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black resize-none"
        />
      </div>
    </div>
  );
};
