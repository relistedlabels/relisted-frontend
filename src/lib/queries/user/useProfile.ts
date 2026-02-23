// lib/queries/profile/useProfile.ts
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/lib/api/profile";
import { useUserStore } from "@/store/useUserStore";
import { FullProfile } from "@/types/profile";

export function useProfile() {
  const userId = useUserStore((s) => s.userId);

  return useQuery<{ data: any }>({
    queryKey: ["profile", userId],
    enabled: !!userId,
    queryFn: async () => {
      if (!userId) throw new Error("No userId in store");
      const profile = await getProfile(userId);
      console.log("PROFILE FETCHED:", profile);
      return profile;
    },
    retry: false,
  });
}
