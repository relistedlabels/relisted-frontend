"use client";

import React, { useState } from "react";
import { ChevronDown, Plus, Check } from "lucide-react";
import { Paragraph1 } from "@/common/ui/Text";

/**
 * BrandSelector
 * - Fully self-contained
 * - Uses local dummy data
 * - No props, no parent communication
 * - New brands stored locally (DB later)
 */

const INITIAL_BRANDS = [
  "Fendi",
  "Gucci",
  "Louis Vuitton",
  "Prada",
  "Balenciaga",
  "Dior",
  "Versace",
];

export const BrandSelector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [brands, setBrands] = useState<string[]>(INITIAL_BRANDS);
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = brands.filter((brand) =>
    brand.toLowerCase().includes(query.toLowerCase()),
  );

  const canAdd = query.length > 0 && filtered.length === 0;

  return (
    <div className="relative w-full">
      <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
        Brand / Designer
      </Paragraph1>

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-black"
      >
        <span className={selected ? "text-black" : "text-gray-400"}>
          {selected ?? "Select brand"}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-sm">
          {/* Search */}
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search brand..."
            className="w-full border-b border-gray-100 px-3 py-2 text-sm outline-none"
          />

          <div className="max-h-48 overflow-y-auto">
            {/* Options */}
            {filtered.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => {
                  setSelected(brand);
                  setOpen(false);
                  setQuery("");
                }}
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm hover:bg-gray-50"
              >
                {brand}
                {selected === brand && <Check className="h-4 w-4 text-black" />}
              </button>
            ))}

            {/* Add new */}
            {canAdd && (
              <button
                type="button"
                onClick={() => {
                  setBrands((prev) => [...prev, query]);
                  setSelected(query);
                  setOpen(false);
                  setQuery("");
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-gray-50"
              >
                <Plus className="h-4 w-4" />
                Add “{query}”
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
