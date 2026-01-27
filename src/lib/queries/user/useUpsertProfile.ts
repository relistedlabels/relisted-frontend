// lib/queries/user/useUpsertProfile.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProfile, updateProfile } from "@/lib/api/profile";
import { useProfileStore } from "@/store/useProfileStore";
import { FullProfile, UpdateProfilePayload } from "@/types/profile";

export function useUpsertProfile(profile?: FullProfile | null) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const state = useProfileStore.getState();

      // ✅ build payload explicitly
      const payload: UpdateProfilePayload = {
        phoneNumber: state.phoneNumber || undefined,
        bvn: state.bvn || undefined,

        emergencyContacts: state.emergencyContacts.name
          ? state.emergencyContacts
          : undefined,

        businessInfo: state.businessInfo.businessName
          ? state.businessInfo
          : undefined,

        bankAccounts: state.bankAccounts.accountNumber
          ? state.bankAccounts
          : undefined,

        address: state.address.street ? state.address : undefined,

        avatarUploadId: state.avatarUploadId,
        ninUploadId: state.ninUploadId,
      };

      if (profile?.id) {
        return updateProfile(payload);
      }

      return createProfile(payload);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}
