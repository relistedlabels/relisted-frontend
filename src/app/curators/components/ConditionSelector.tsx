"use client";

import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Paragraph1 } from "@/common/ui/Text";

/**
 * ConditionSelector
 * - Self contained
 * - Dummy data only
 * - No parent interaction
 */

const CONDITIONS = [
  "Brand New",
  "Like New",
  "Gently Used",
  "Used",
  "Heavily Used",
];

export const ConditionSelector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
        Condition
      </Paragraph1>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-black"
      >
        <span className={selected ? "text-black" : "text-gray-400"}>
          {selected ?? "Select condition"}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {open && (
        <div className="absolute z-40 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-sm">
          {CONDITIONS.map((condition) => (
            <button
              key={condition}
              onClick={() => {
                setSelected(condition);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-gray-50"
            >
              {condition}
              {selected === condition && (
                <Check className="h-4 w-4 text-black" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
