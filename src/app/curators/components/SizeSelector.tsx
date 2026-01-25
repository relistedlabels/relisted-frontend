"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Paragraph1 } from "@/common/ui/Text";
import { useProductDraftStore } from "@/store/useProductDraftStore";

const SIZES = ["6", "7", "8", "9", "10", "11", "12"];
const UNITS = ["UK", "US", "EU"];

export const SizeSelector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<string | null>(null);
  const [unit, setUnit] = useState("UK");

  const { setField } = useProductDraftStore();

  const commitToStore = (s: string, u: string) => {
    setField("measurement", `${s}-${u}`);
  };

  return (
    <div className="relative w-full">
      <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
        Size
      </Paragraph1>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-black"
      >
        <span className={size ? "text-black" : "text-gray-400"}>
          {size ? `${size} (${unit})` : "Select size"}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {open && (
        <div className="absolute z-40 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-sm">
          {/* Unit selector */}
          <div className="flex border-b border-gray-100">
            {UNITS.map((u) => (
              <button
                key={u}
                onClick={() => {
                  setUnit(u);
                  if (size) commitToStore(size, u);
                }}
                className={`flex-1 px-3 py-2 text-xs font-medium ${
                  unit === u ? "bg-gray-100 text-black" : "text-gray-500"
                }`}
              >
                {u}
              </button>
            ))}
          </div>

          {/* Size grid */}
          <div className="grid grid-cols-4 gap-2 p-2">
            {SIZES.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  commitToStore(s, unit);
                  setOpen(false);
                }}
                className={`rounded-md border px-2 py-1 text-sm ${
                  size === s
                    ? "border-black text-black"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
