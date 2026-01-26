"use client";

import React from "react";
import { Paragraph3, Paragraph1 } from "@/common/ui/Text";
import { BrandSelector } from "./BrandSelector";
import { SizeSelector } from "./SizeSelector";
import { ColorSelector } from "./ColorSelector";
import { ConditionSelector } from "./ConditionSelector";
import { useProductDraftStore } from "@/store/useProductDraftStore";

export const BasicInformationForm: React.FC = () => {
   const { data, setField } = useProductDraftStore();
  return (
    <div className="w-full rounded-xl border border-gray-200 p-4">
      <div className="mb-4">
        <Paragraph3 className="text-sm font-semibold text-black">
          Basic Information
        </Paragraph3>
        <Paragraph1 className="text-xs text-gray-500">
          Upload atleast 5 high quality images and videos of your item
        </Paragraph1>
      </div>

      <div className="space-y-4">
        {/* Item Name */}
        <div>
          <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
            Item Name
          </Paragraph1>
          <input
            type="text"
            placeholder="eg. Fendi Arco Boots"
            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black" 
            value={data.name}
            onChange={(e)=>setField("name",e.target.name)}
          />
        </div>

        {/* Brand */}
        <BrandSelector />

        {/* Prices */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
              Daily Rental Price (₦)
            </Paragraph1>
            <input
              type="number"
              placeholder="15,000"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black"
              // value={data.}
              readOnly
            />
          </div>

          <div>
            <Paragraph1 className="mb-1 text-xs font-medium text-gray-700">
              Original Item Value (₦)
            </Paragraph1>
            <input
              type="number"
              placeholder="500,000"
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-black" 
              value={data.originalValue} 
              onChange={(e)=>setField("originalValue",Number(e.target.value))}
            />
          </div>
        </div>

        {/* Size & Color */}
        <div className="grid grid-cols-2 gap-4">
          <SizeSelector  />

          <ColorSelector/>
        </div>

        {/* Condition */}
        <ConditionSelector />
      </div>
    </div>
  );
};
