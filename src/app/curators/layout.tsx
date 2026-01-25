"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMe } from "@/lib/queries/auth/useMe";

export default function CuratorsLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: user, isLoading } = useMe();

  // ⛔ absolutely nothing renders until check finishes
  if (isLoading) return null;

  // ⛔ unauthenticated → redirect before render
  if (!user) {
    router.replace("/auth/sign-in");
    return null;
  }

  // optional role gate
  // if (user.role !== "CURATOR") {
  //   router.replace("/");
  //   return null;
  // }

  // ✅ safe: checks completed, authorized
  return <>{children}</>;
}
