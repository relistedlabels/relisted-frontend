"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paragraph1 } from "@/common/ui/Text";

// --- Tab Types ---
type TabID = "details" | "styling" | "care";

interface Tab {
  id: TabID;
  label: string;
  content: string;
}

const tabs: Tab[] = [
  {
    id: "details",
    label: "Product details",
    content:
      "Office ipsum you must be muted. Watches chime tent manage submit event hill no-brainer dive. Pushback respectively it's if well. Focus of they see eco-system quick-win. Winning first create skulls field base start.",
  },
  {
    id: "styling",
    label: "Styling",
    content:
      "High-waist trousers or a sleek midi skirt would complement these boots perfectly. Consider a monochromatic look to let the hagfish leather texture stand out.",
  },
  {
    id: "care",
    label: "Product Care",
    content:
      "Wipe with a damp cloth after use. Store in a cool, dry place away from direct sunlight. Use a specialized leather conditioner every 6 months to maintain suppleness.",
  },
];

const ProductInfoTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabID>("details");

  return (
    <div className="w-full max-w-2xl  border border-gray-300 rounded-2xl p-4  mt-6">
      {/* 1. Tab Switcher Header */}
      <div className="relative flex p-1 bg-gray-50 border border-gray-300 rounded-xl mb-6 w-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative w-full px-6 py-2 text-sm font-semibold transition-colors duration-200 z-10 ${
                isActive ? "text-white" : "text-gray-600 hover:text-black"
              }`}
            >
              {/* Animated Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#33332D] rounded-lg z-[-1]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Paragraph1>{tab.label} </Paragraph1>
            </button>
          );
        })}
      </div>

      {/* 2. Tab Content Area */}
      <div className="min-h-[100px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Paragraph1 className="text-gray-600 leading-relaxed">
              {tabs.find((t) => t.id === activeTab)?.content}
            </Paragraph1>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductInfoTabs;
