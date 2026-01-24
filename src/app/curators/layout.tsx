import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CuratorsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = cookies();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
    headers: {
      cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  // ❌ Not logged in
  if (res.status === 401) {
    redirect("/");
  }

  const user = await res.json();

  // ❌ Logged in but not curator
  if (user.role !== "CURATOR") {
    redirect("/");
  }

  // ✅ Authorized
  return <>{children}</>;
}
