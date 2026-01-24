"use client";

import { useMe } from "@/lib/queries/auth/useMe";
import Link from "next/link";

export function Header() {
  const { data: user, isLoading } = useMe();

    if (isLoading) return null;
    

    // if (!user) {
    //   return <p>Please log in to continue</p>;
    // }
  return (
    <div className=" bg-white text-[14px] fixed left-1/2 bottom-4 z-9999 w-fit p-4 border text-black">
      {user ? (
        <span>
          Logged in as {user.email} at {user.id}
        </span>
      ) : (
        <span>Not logged in</span>
      )}  {" >>> "}
      {user ? (
        <>
          <span>Welcome</span>
          <Link href="/dashboard">Dashboard</Link>
        </>
      ) : (
        <>
          <Link href="/auth/sign-in">Login</Link>
        </>
      )}
    </div>
  );
}


