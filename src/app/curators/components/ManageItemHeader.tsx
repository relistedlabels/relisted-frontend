"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";
import BackHeader from "@/common/ui/BackHeader";

interface ManageItemHeaderProps {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  onEdit?: () => void;
  onDisable?: () => void;
  isDisabled?: boolean;
}

const ManageItemHeader: React.FC<ManageItemHeaderProps> = ({
  title = "Manage Item",
  subtitle = "List a new fashion item for rent",
  onBack,
  onEdit,
  onDisable,
  isDisabled = false,
}) => {
  return (
    <div className="w-full flex sm:items-center flex-col sm:flex-row gap-4 sm:justify-between mb-4 bg-transparent">
      {/* Left Section: Back Button and Titles */}
     
      <BackHeader title={title} subtitle={subtitle} />

      {/* Right Section: Action Buttons */}
      <div className="flex items-center space-x-3">
        <button
          onClick={onDisable}
          className="px-6 py-2.5 w-full sm:w-fit border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all active:scale-95"
        >
          <Paragraph1>
            {" "}
            {isDisabled ? "Enable Item" : "Disable Item"}
          </Paragraph1>
        </button>

        <button
          onClick={onEdit}
          className="px-6 py-2.5 w-full sm:w-fit bg-[#33332D] text-white rounded-xl text-sm font-semibold hover:bg-black transition-all shadow-sm active:scale-95"
        >
          <Paragraph1> Edit Item</Paragraph1>
        </button>
      </div>
    </div>
  );
};

export default ManageItemHeader;
