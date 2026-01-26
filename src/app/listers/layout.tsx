// app/curators/layout.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMe } from "@/lib/queries/auth/useMe";
import FullPageLoader from "@/common/ui/FullPageLoader";

export default function CuratorsLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: user, isLoading } = useMe();

  // ⛔ block render until auth check completes
  if (isLoading) return <FullPageLoader />;

  // ⛔ unauthenticated → redirect before render
  if (!user) {
    router.replace("/auth/sign-in");
    return <FullPageLoader />;
  }

  // optional role gate
  // if (user.role !== "CURATOR") {
  //   router.replace("/dev");
  //   return <FullPageLoader />;
  // }

  // ✅ authorized
  return <>{children}</>;
}
