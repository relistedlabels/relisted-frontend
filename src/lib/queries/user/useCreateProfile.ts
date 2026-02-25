// lib/queries/user/useCreateProfile.ts
import { useMutation } from "@tanstack/react-query";
import { createProfile } from "@/lib/api/profile";
import { useProfileStore } from "@/store/useProfileStore";

export function useCreateProfile() {
  const profile = useProfileStore((s) => s);
  const resetProfile = useProfileStore((s) => s.resetProfile);

  return useMutation({
    mutationFn: () => {
      const payload = {
        phoneNumber: profile.phoneNumber,

        address: {
          street: profile.address.street,
          city: profile.address.city,
          state: profile.address.state,
          country: profile.address.country,
        },

        businessInfo: {
          businessName: profile.businessInfo.businessName,
          businessEmail: profile.businessInfo.businessEmail,
          businessRegistrationNumber:
            profile.businessInfo.businessRegistrationNumber,
          businessAddress: profile.businessInfo.businessAddress,
          businessCity: profile.businessInfo.businessCity,
          businessState: profile.businessInfo.businessState,
        },

        emergencyContacts: [
          {
            name: profile.emergencyContacts.name,
            phoneNumber: profile.emergencyContacts.phoneNumber,
            relationship: profile.emergencyContacts.relationship,
            city: profile.emergencyContacts.city,
            state: profile.emergencyContacts.state,
          },
        ],

        bankAccounts: [
          {
            bankName: profile.bankAccounts.bankName,
            accountNumber: profile.bankAccounts.accountNumber,
            nameOfAccount: profile.bankAccounts.nameOfAccount,
          },
        ],
      };

      return createProfile(payload);
    },

    onSuccess: () => {
      console.log("Profile sent successfully");
      // resetProfile();
    },
  });
}
