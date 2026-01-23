"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { devAuth } from "@/lib/devAuth";

const PUBLIC_PATHS = ["/dev", "/waitlist"];

export default function DevGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const hasAccess = devAuth.hasAccess();

    // 🏠 Root path logic
    if (pathname === "/") {
      if (!hasAccess) {
        router.replace("/waitlist");
        return;
      }

      // ✅ Has access → stay on /
      setChecked(true);
      return;
    }

    const isPublic = PUBLIC_PATHS.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );

    // ✅ Public routes are always allowed
    if (isPublic) {
      setChecked(true);
      return;
    }

    // 🔒 Protected routes
    if (!hasAccess) {
      router.replace("/dev");
      return;
    }

    // ✅ Authorized
    setChecked(true);
  }, [pathname, router]);

  // ⛔ Block rendering until checks are complete
  if (!checked) return null;

  return <>{children}</>;
}
