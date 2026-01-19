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
    // ✅ If user is on root, send to waitlist
    if (pathname === "/") {
      router.replace("/waitlist");
      return;
    }

    const isPublic = PUBLIC_PATHS.some(
      (path) => pathname === path || pathname.startsWith(`${path}/`),
    );

    // ✅ Public routes: allow immediately
    if (isPublic) {
      setChecked(true);
      return;
    }

    // 🔒 Protected routes
    if (!devAuth.hasAccess()) {
      router.replace("/dev");
      return;
    }

    // ✅ Authorized
    setChecked(true);
  }, [pathname, router]);

  // ⛔ Block rendering until checks are done
  if (!checked) {
    return null; // or a loader
  }

  return <>{children}</>;
}
