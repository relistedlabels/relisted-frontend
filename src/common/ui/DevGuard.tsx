"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { devAuth } from "@/lib/devAuth";

const PUBLIC_PATHS = ["/dev", "/waitlist"];

export default function DevGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isPublic = PUBLIC_PATHS.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );

    if (isPublic) return;

    if (!devAuth.hasAccess()) {
      router.replace("/dev");
    }
  }, [pathname, router]);

  return <>{children}</>;
}
