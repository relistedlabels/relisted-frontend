"use client";

import React, { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { Paragraph1 } from "@/common/ui/Text";

const COLORS = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Red", hex: "#E11D48" },
  { name: "Green", hex: "#16A34A" },
  { name: "Blue", hex: "#2563EB" },
  { name: "Brown", hex: "#92400E" },
];

export const ColorSelector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<(typeof COLORS)[number] | null>(
    null,
  );

  return (
    <div className="relative w-full">
      <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
        Color
      </Paragraph1>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-black"
      >
        <span className="flex items-center gap-2">
          {selected ? (
            <>
              <span
                className="h-4 w-4 rounded-full border"
                style={{ backgroundColor: selected.hex }}
              />
              {selected.name}
            </>
          ) : (
            <span className="text-gray-400">Select color</span>
          )}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {open && (
        <div className="absolute z-40 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-sm">
          {COLORS.map((color) => (
            <button
              key={color.name}
              onClick={() => {
                setSelected(color);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-3 py-2 text-sm hover:bg-gray-50"
            >
              <span className="flex items-center gap-2">
                <span
                  className="h-4 w-4 rounded-full border"
                  style={{ backgroundColor: color.hex }}
                />
                {color.name}
              </span>
              {selected?.name === color.name && (
                <Check className="h-4 w-4 text-black" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
