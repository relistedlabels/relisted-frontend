import { useQuery } from "@tanstack/react-query";
import { getProfile, type Profile } from "@/lib/api/profile";

export const useProfile = (userId?: string) =>
  useQuery<Profile | null>({
    queryKey: ["profile", userId],
    queryFn: () => getProfile(userId as string),
    enabled: !!userId,
  });
