"use client";

import React, { useState, useEffect } from "react";
import { Paragraph1 } from "@/common/ui/Text";
import { CreditCard, User, Phone, Heart } from "lucide-react"; // Added icons
import { useProfileStore } from "@/store/useProfileStore";
import { useRouter } from "next/navigation";
import { useUpdateProfile } from "@/lib/queries/user/useUpdateProfile";
import { BankSelect } from "./BankSelect";

interface StepFourPaymentProps {
  onBack: () => void;
}

const StepFourPayment: React.FC<StepFourPaymentProps> = ({ onBack }) => {
  // 1. Extract emergencyContacts from store
  const { bankAccounts, emergencyContacts, setProfile } = useProfileStore(
    (s) => ({
      bankAccounts: s.bankAccounts,
      emergencyContacts: s.emergencyContacts,
      setProfile: s.setProfile,
    }),
  );

  const [bankName, setBankName] = useState(bankAccounts.bankName);
  const [accountNumber, setAccountNumber] = useState(
    bankAccounts.accountNumber,
  );
  const [nameOnAccount, setNameOnAccount] = useState(
    bankAccounts.nameOfAccount,
  );

  const router = useRouter();
  const updateProfile = useUpdateProfile();
  const isLoading = updateProfile.isPending;

  useEffect(() => {
    setBankName(bankAccounts.bankName || "");
    setAccountNumber(bankAccounts.accountNumber || "");
    setNameOnAccount(bankAccounts.nameOfAccount || "");
  }, [bankAccounts]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !bankName || !accountNumber || !nameOnAccount) return;

    setProfile({
      bankAccounts: {
        bankName,
        accountNumber,
        nameOfAccount: nameOnAccount,
      },
    });

    updateProfile.mutate(undefined, {
      onSuccess: () => {
        router.replace("/listed/inventory");
      },
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* Emergency Contact Preview Section */}
      <div className="p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <Paragraph1 className="text-xs font-bold uppercase text-gray-500 mb-3">
          Emergency Contact (Review)
        </Paragraph1>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-gray-400" />
            <Paragraph1 className="text-sm">
              {emergencyContacts.name || "Not set"}
            </Paragraph1>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-gray-400" />
            <Paragraph1 className="text-sm">
              {emergencyContacts.relationship}
            </Paragraph1>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-400" />
            <Paragraph1 className="text-sm">
              {emergencyContacts.phoneNumber}
            </Paragraph1>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* Bank Account Section */}
      <BankSelect value={bankName} onChange={setBankName} />

      <div>
        <label className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Account Number
          </Paragraph1>
        </label>
        <div className="relative">
          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={accountNumber}
            onChange={(e) =>
              setAccountNumber(e.target.value.replace(/\D/g, ""))
            }
            maxLength={12}
            className="w-full p-4 pl-12 border rounded-lg"
          />
        </div>
      </div>

      <div>
        <label className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Name on Account
          </Paragraph1>
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={nameOnAccount}
            onChange={(e) => setNameOnAccount(e.target.value)}
            className="w-full p-4 pl-12 border rounded-lg"
          />
        </div>
      </div>

      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 py-3 border rounded-lg"
        >
          <Paragraph1>Previous</Paragraph1>
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-1/2 py-3 rounded-lg text-white transition ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          <Paragraph1>{isLoading ? "Submitting..." : "Submit"}</Paragraph1>
        </button>
      </div>
    </form>
  );
};

export default StepFourPayment;
