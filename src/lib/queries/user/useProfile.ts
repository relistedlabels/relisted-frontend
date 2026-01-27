import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/lib/api/profile";
import { FullProfile } from "../../../../types/profile";

// export const useProfile = (userId?: string) =>
//   useQuery<FullProfile>({
//     queryKey: ["profile", userId],
//     queryFn: () => getProfile(userId as string),
//     enabled: !!userId,
//     staleTime: 5 * 60 * 1000,
//   });


export const useProfile = (profileId?: string) =>
  useQuery<FullProfile>({
    queryKey: ["profile", profileId],
    queryFn: () => getProfile(profileId!), // must pass profileId
    enabled: !!profileId,
  });
