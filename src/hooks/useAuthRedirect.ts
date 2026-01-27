// "use client";

// import { useRouter } from "next/navigation";
// import { useMe } from "@/lib/queries/auth/useMe";
// import { useProfile } from "@/lib/queries/user/useProfile";

// export function useAuthRedirect() {
//   const router = useRouter();
//   const { data: user, isLoading: userLoading } = useMe();
//   const profileId = user?.profile?.id
//   console.log("uuuuuu",user)
//   console.log("userme profile",profileId)
//   const { data: profile, isLoading: profileLoading } = useProfile(profileId);

//   const redirect = () => {
//     if (userLoading || profileLoading) return;

//     if (!user) {
//       router.replace("/auth/sign-in");
//       return;
//     }

//     if (!profile || !profile.name) {
//       router.replace("/auth/profile-setup");
//       return;
//     }

//     if (user.role === "CURATOR") {
//       router.replace("/listers/inventory");
//       return;
//     }

//     if (user.role === "DRESSER") {
//       router.replace("/shop");
//       return;
//     }
//   };

//   return {
//     redirect,
//     isReady: !userLoading && !profileLoading,
//   };
// }




"use client";

import { useRouter } from "next/navigation";
import { useMe } from "@/lib/queries/auth/useMe";
import { useProfile } from "@/lib/queries/user/useProfile";

export function useAuthRedirect() {
  const router = useRouter();
  const { data: user, isLoading: userLoading } = useMe();

  // Wait for user to load, then get profileId
  const profileId = user?.profile?.id;

  // Fetch profile only when profileId exists
  const { data: profile, isLoading: profileLoading } = useProfile(profileId);

  const redirect = () => {
    if (userLoading || profileLoading) return; // wait for both

    if (!user) {
      router.replace("/auth/sign-in");
      return;
    }

    if (!profileId) {
      router.replace("/auth/profile-setup");
      return;
    }

    // Redirect by role
    if (user.role === "CURATOR") {
      router.replace("/listers/inventory");
      return;
    }

    if (user.role === "DRESSER") {
      router.replace("/shop");
      return;
    }
  };

  return {
    redirect,
    isReady: !userLoading && !profileLoading,
  };
}
