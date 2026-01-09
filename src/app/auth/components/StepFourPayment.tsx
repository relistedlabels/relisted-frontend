import React, { useState } from "react";
import { Paragraph1 } from "@/common/ui/Text";
// Importing icons needed for the form fields
import { Banknote, CreditCard, User, ChevronDown } from "lucide-react";

interface StepFourPaymentProps {
  onSubmit: () => void; // Function to handle final submission
  onBack: () => void; // Function to move to the previous step
}

const StepFourPayment: React.FC<StepFourPaymentProps> = ({
  onSubmit,
  onBack,
}) => {
  // State for all form fields
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [nameOnAccount, setNameOnAccount] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation check
    if (!bankName || !accountNumber || !nameOnAccount) {
      alert("Please fill in all bank details.");
      return;
    }

    // Simple account number validation (e.g., length check)
    if (accountNumber.length < 10) {
      alert("Account Number seems too short.");
      return;
    }

    console.log("Payment Details Collected:", {
      bankName,
      accountNumber,
      nameOnAccount,
    });
    // Trigger the final submission action
    onSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* 1. Bank Name Dropdown */}
      <div>
        <label htmlFor="bank-name" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Bank Name
          </Paragraph1>
        </label>
        <div className="relative">
          <Banknote className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            id="bank-name"
            required
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="w-full appearance-none p-4 pl-12 pr-10 border border-gray-300 rounded-lg bg-white text-gray-600 focus:ring-black focus:border-black"
          >
            <option value="" disabled>
              Select Bank
            </option>
            {/* Example options */}
            <option value="BankA">First National Bank</option>
            <option value="BankB">Apex Trust Bank</option>
            <option value="BankC">Global Finance Plc</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* 2. Account Number Input */}
      <div>
        <label htmlFor="account-number" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Account Number
          </Paragraph1>
        </label>
        <div className="relative">
          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            pattern="\d*" // Restrict to numbers (for mobile keyboards)
            id="account-number"
            required
            value={accountNumber}
            onChange={(e) =>
              setAccountNumber(e.target.value.replace(/[^0-9]/g, ""))
            } // Ensure only digits are stored
            placeholder="Enter number"
            maxLength={12} // Common max length
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* 3. Name on Account Input */}
      <div>
        <label htmlFor="name-on-account" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Name on Account
          </Paragraph1>
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="name-on-account"
            required
            value={nameOnAccount}
            onChange={(e) => setNameOnAccount(e.target.value)}
            placeholder="Enter name on account"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* Previous and Submit Buttons */}
      <div className="flex justify-between space-x-4 pt-4">
        {/* Previous Button (White Background, Black Text/Border) */}
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 py-3 text-base font-semibold text-gray-700 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition duration-150"
        >
          <Paragraph1>Previous</Paragraph1>
        </button>

        {/* Submit Button (Black Background, White Text) */}
        <button
          type="submit"
          className="w-1/2 py-3 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition duration-150"
        >
          <Paragraph1>Submit</Paragraph1>
        </button>
      </div>
    </form>
  );
};

export default StepFourPayment;
