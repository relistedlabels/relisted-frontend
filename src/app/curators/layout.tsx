"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMe } from "@/lib/queries/auth/useMe";

export default function CuratorsLayout({ children }: { children: ReactNode }) {
  const { data: user, isLoading } = useMe();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    // Not logged in → home
    if (!user) {
      router.replace("/");
      return;
    }

    // Logged in but not a curator → home
    if (user.role !== "CURATOR") {
      router.replace("/");
    }
  }, [user, isLoading, router]);

  // Prevent flash / render until auth is resolved
  if (isLoading || !user || user.role !== "CURATOR") {
    return null;
  }

  return <>{children}</>;
}
