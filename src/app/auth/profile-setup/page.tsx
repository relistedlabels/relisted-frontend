"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { useUserStore } from "@/store/useUserStore";

import CompleteProfileFlow from "../components/CompleteProfileFlow";
import CompleteBusinessProfileFlow from "../components/CompleteBusinessProfileFlow";

function Page() {
  const router = useRouter();
  const role = useUserStore((s) => s.role);

  // Safety: no role selected → go back
  useEffect(() => {
    if (!role) {
      router.replace("/auth/create-account");
    }
  }, [role, router]);

  return (
    <div className="relative w-full bg-gray-100 bg-cover bg-center">
      <motion.div
        className="relative flex flex-col items-center justify-center sm:px-6 sm:py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <div>
            {role === "DRESSER" && <CompleteProfileFlow />}
            {role === "CURATOR" && <CompleteBusinessProfileFlow />}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Page;
