"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useMe } from "@/lib/queries/auth/useMe";
import FullPageLoader from "@/common/ui/FullPageLoader";

export default function CuratorsLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data: user, isLoading } = useMe();

  if (isLoading) return <FullPageLoader />;

  if (!user) {
    router.replace("/auth/sign-in");
    return <FullPageLoader />;
  }

  // profile already comes from getMe
  // if (!user.profile) {
  //   router.replace("/auth/profile-setup");
  //   return <FullPageLoader />;
  // }

  return <>{children}</>;
}
