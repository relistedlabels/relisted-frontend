"use client";

import React, { useState } from "react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";
import { Plus } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useUserProducts } from "@/lib/queries/product/useUserProducts";
import { useRouter } from "next/router";


// --- Item Data Structure ---
interface InventoryItem {
  id: string;
  name: string;
  size: string;
  color: string;
  pricePerDay: string;
  itemValue: string;
  listedDate: string;
  isAvailable: boolean;
  isRented: boolean;
  status: "Active" | "Disabled";
  imageUrl: string;
}

// --- Individual Item Card ---
const InventoryItemCard: React.FC<InventoryItem> = ({
  id, // ✅ bring id into scope
  name,
  size,
  color,
  pricePerDay,
  itemValue,
  listedDate,
  isAvailable,
  isRented,
  imageUrl,
}) => {
  let statusText = isAvailable ? "Available" : isRented ? "Rented" : "Disabled";
  let dotClass = isAvailable
    ? "bg-green-600"
    : isRented
      ? "bg-blue-600"
      : "bg-gray-400";

  const router = useRouter();

  const handleManage = (e: React.MouseEvent) => {
    e.preventDefault(); // keep this so the parent Link doesn't trigger
    router.push(`/listers/inventory/product-details/${id}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div
        // href="/listers/inventory/product-details/id"
        className="flex items-center flex-wrap gap-4 justify-between p-2 sm:pr-4 border border-gray-200 rounded-xl bg-white hover:shadow-md transition-shadow duration-150"
      >
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-14 h-14 bg-gray-100 rounded-lg overflow-hidden shrink-0">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <div className="flex items-center space-x-2">
              <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`}></span>
              <Paragraph1
                className={`text-xs font-semibold ${
                  isAvailable
                    ? "text-green-600"
                    : isRented
                      ? "text-blue-600"
                      : "text-gray-600"
                }`}
              >
                {statusText}
              </Paragraph1>
            </div>
            <Paragraph1 className="font-semibold text-gray-800 truncate">
              {name}
            </Paragraph1>
            <Paragraph1 className="text-sm text-gray-500">
              Size: {size} | Color: {color}
            </Paragraph1>
          </div>
        </div>

        <div className="text-left">
          <Paragraph1 className="text-xs text-gray-500">Price/Day</Paragraph1>
          <Paragraph1 className="font-medium text-black">
            {pricePerDay}
          </Paragraph1>
        </div>

        <div className="text-left">
          <Paragraph1 className="text-xs text-gray-500">Item Value</Paragraph1>
          <Paragraph1 className="font-medium text-black">
            {itemValue}
          </Paragraph1>
        </div>

        <div className="text-left">
          <Paragraph1 className="text-xs text-gray-500">Listed</Paragraph1>
          <Paragraph1 className="font-medium text-black">
            {listedDate}
          </Paragraph1>
        </div>

        <span
          className={`px-3 py-1 text-sm font-semibold rounded-lg ${
            isAvailable
              ? "text-green-800 bg-green-100"
              : isRented
                ? "text-blue-600 bg-blue-100"
                : "text-gray-600 bg-gray-200"
          }`}
        >
          <Paragraph1>{statusText}</Paragraph1>
        </span>

        <button
          type="button"
          onClick={handleManage}
          className="px-4 py-2 text-sm font-semibold w-full flex sm:w-fit items-center justify-center text-white bg-black rounded-lg hover:bg-gray-800 transition duration-150"
        >
          Manage
        </button>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
const InventoryList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Active" | "Disabled">("Active");

  const { data, isLoading } = useUserProducts();

// if (isLoading) {
//   return <div>Loading inventory...</div>;
// }

  const mappedInventory: InventoryItem[] =
    data?.map((item) => ({
      id: item.id, // ✅ UUID stays a string
      name: item.name,
      size: item.size,
      color: item.color,
      pricePerDay: `₦${item.pricePerDay.toLocaleString()}`,
      itemValue: `₦${item.originalValue.toLocaleString()}`,
      listedDate: new Date(item.createdAt).toLocaleDateString(),
      isAvailable: item.status === "ACTIVE" && !item.isRented,
      isRented: item.isRented,
      status: item.status === "ACTIVE" ? "Active" : "Disabled",
      imageUrl: item.attachments?.[0]?.url ?? "/images/placeholder.png",
    })) ?? [];

  const filteredInventory = mappedInventory.filter(
    (item) => item.status === activeTab,
  );

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <Paragraph3 className="text-2xl font-semibold text-black">
          Inventory
        </Paragraph3>
        <Link
          href="/listers/inventory/product-upload"
          className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition duration-150"
        >
          <Plus className="w-4 h-4" />
          <Paragraph1>Add New Item</Paragraph1>
        </Link>
      </div>

      {/* Tab Switcher with Shared Layout Animation */}
      <div className="mb-6 p-1 bg-white rounded-xl shadow-sm inline-flex border border-gray-200 relative">
        {(["Active", "Disabled"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2 text-sm font-semibold rounded-lg transition duration-150 z-10 ${
              activeTab === tab
                ? "text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-black rounded-lg -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            {tab}
          </button>
        ))}
      </div>

      {/* Inventory List with AnimatePresence */}
      <motion.div layout className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredInventory.length > 0 ? (
            filteredInventory.map((item) => (
              <InventoryItemCard key={item.id} {...item} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 text-center text-gray-500 bg-white rounded-xl border border-gray-200"
            >
              No {activeTab} inventory items found.
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default InventoryList;
