// lib/queries/profile/useProfile.ts
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/lib/api/profile";
import { FullProfile } from "@/types/profile";

export const useProfile = () =>
  useQuery<FullProfile>({
    queryKey: ["profile"],
    queryFn: getProfile,
   
    retry: false, // important: 404 means "no profile"
  });


  // export function useMe() {
  //   return useQuery({
  //     queryKey: ["auth", "me"],
  //     queryFn: getMe,
  //     retry: false,
  //   });
  // }
  