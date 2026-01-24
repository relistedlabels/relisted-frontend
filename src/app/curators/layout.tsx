import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function CuratorsLayout({
  children,
}: {
  children: ReactNode;
}) {
  // ✅ cookies() is async in your setup
  const cookieStore = await cookies();

  // ✅ serialize cookies correctly
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`, {
    headers: {
      cookie: cookieHeader,
    },
    cache: "no-store",
  });

  // ❌ not authenticated
  if (res.status === 401) {
    redirect("/");
  }

  const user = await res.json();

  // ❌ not a curator
  if (user.role !== "CURATOR") {
    redirect("/");
  }

  // ✅ authorized
  return <>{children}</>;
}
