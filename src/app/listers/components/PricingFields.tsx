// components/PricingFields.tsx
"use client";

import React, { useMemo, useEffect } from "react";
import { Paragraph1 } from "@/common/ui/Text";
import { useProductDraftStore } from "@/store/useProductDraftStore";

const formatNumber = (value: number) =>
  value ? value.toLocaleString("en-US") : "";

const parseNumber = (value: string) => Number(value.replace(/,/g, "") || 0);

export const PricingFields: React.FC = () => {
  const { data, setField } = useProductDraftStore();

  const suggestedDailyRentalPrice = useMemo(
    () => Math.round((data.originalValue || 0) * 0.1),
    [data.originalValue],
  );

  useEffect(() => {
    setField("dailyRentalPrice", suggestedDailyRentalPrice);
  }, [suggestedDailyRentalPrice, setField]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
          Original Item Value (₦)
        </Paragraph1>
        <input
          type="text"
          inputMode="numeric"
          placeholder="500,000"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black"
          value={formatNumber(data.originalValue)}
          onChange={(e) =>
            setField("originalValue", parseNumber(e.target.value))
          }
        />
      </div>

      <div>
        <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
          Daily Rental Price (₦)
        </Paragraph1>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm"
          value={formatNumber(data.dailyRentalPrice )}
          onChange={(e) =>
            setField("dailyRentalPrice", parseNumber(e.target.value))
          }
        />
        <p className="mt-1 text-[11px] text-gray-500">
          Suggested ≈ ₦{formatNumber(suggestedDailyRentalPrice)} 
        </p>
      </div>
    </div>
  );
};
