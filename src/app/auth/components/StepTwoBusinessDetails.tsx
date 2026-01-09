import React, { useState } from "react";
import { Paragraph1 } from "@/common/ui/Text";
// Importing icons needed for the form fields
import { User, Mail, Hash, MapPin, ChevronDown } from "lucide-react";

interface StepTwoBusinessDetailsProps {
  onNext: () => void; // Function to move to the next step (or final submission)
  onBack: () => void; // Function to skip this step
}

const StepTwoBusinessDetails: React.FC<StepTwoBusinessDetailsProps> = ({
  onNext,
  onBack,
}) => {
  // State for all form fields
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation check (excluding optional email)
    if (!businessName || !registrationNumber || !address || !city || !state) {
      alert("Please fill in all required Business details.");
      return;
    }

    console.log("Business Details Collected:", {
      businessName,
      businessEmail,
      registrationNumber,
      address,
      city,
      state,
    });
    // Trigger the continuation action (e.g., move to Step 3 or finalize)
    onNext();
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* 1. Business / Brand Name Input */}
      <div>
        <label htmlFor="business-name" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Business / Brand Name
          </Paragraph1>
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="business-name"
            required
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter name"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* 2. Business Email Input (Optional) */}
      <div>
        <label htmlFor="business-email" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Business Email{" "}
            <span className="text-gray-500 font-normal">(Optional)</span>
          </Paragraph1>
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            id="business-email"
            value={businessEmail}
            onChange={(e) => setBusinessEmail(e.target.value)}
            placeholder="Enter Email"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* 3. Business Registration Number Input */}
      <div>
        <label htmlFor="registration-number" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Business Registration Number
          </Paragraph1>
        </label>
        <div className="relative">
          <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="registration-number"
            required
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            placeholder="0000"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* 4. Business Address Input */}
      <div>
        <label htmlFor="business-address" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Business Address
          </Paragraph1>
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="business-address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street address"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* 5. City and State (Side-by-side) */}
      <div className="flex space-x-4">
        {/* City Input */}
        <div className="flex-1">
          <label htmlFor="city-business" className="block mb-2">
            <Paragraph1 className="text-sm font-medium text-gray-800">
              City
            </Paragraph1>
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="city-business"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter City"
              className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
            />
          </div>
        </div>

        {/* State Dropdown */}
        <div className="flex-1">
          <label htmlFor="state-business" className="block mb-2">
            <Paragraph1 className="text-sm font-medium text-gray-800">
              State
            </Paragraph1>
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              id="state-business"
              required
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full appearance-none p-4 pl-12 pr-10 border border-gray-300 rounded-lg bg-white text-gray-600 focus:ring-black focus:border-black"
            >
              <option value="" disabled>
                Select State
              </option>
              {/* Example options */}
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja FCT</option>
              <option value="Rivers">Rivers</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Skip and Continue Buttons */}
      <div className="flex justify-between space-x-4 pt-4">
        {/* Skip Button (White Background, Black Text/Border) */}
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 py-3 text-base font-semibold text-gray-700 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition duration-150"
        >
          <Paragraph1>Previous</Paragraph1>
        </button>

        {/* Continue Button (Black Background, White Text) */}
        <button
          type="submit"
          className="w-1/2 py-3 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition duration-150"
        >
          <Paragraph1>Continue</Paragraph1>
        </button>
      </div>
    </form>
  );
};

export default StepTwoBusinessDetails;









