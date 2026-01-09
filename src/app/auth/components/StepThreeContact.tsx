import React, { useState } from "react";
import { Paragraph1 } from "@/common/ui/Text";
// Importing icons needed for the form fields
import { User, Users, MapPin, ChevronDown } from "lucide-react";

interface StepTwoContactProps {
  onNext: () => void; // Function to handle final submission
  onBack: () => void; // Function to move to the previous step
}

const StepTwoContact: React.FC<StepTwoContactProps> = ({
  onNext,
  onBack,
}) => {
  // State for all form fields
  const [fullName, setFullName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+234"); // Prefix placeholder
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation check
    if (
      !fullName ||
      !relationship ||
      !phoneNumber ||
      !address ||
      !city ||
      !state
    ) {
      alert("Please fill in all Emergency Contact details.");
      return;
    }

    console.log("Emergency Contact Details Collected:", {
      fullName,
      relationship,
      phoneNumber,
      address,
      city,
      state,
    });
    // Trigger the final submission action
    onNext();
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* 1. Full Name Input */}
      <div>
        <label htmlFor="full-name" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Full Name
          </Paragraph1>
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="full-name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter name"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* 2. Relationship Dropdown */}
      <div>
        <label htmlFor="relationship" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Relationship
          </Paragraph1>
        </label>
        <div className="relative">
          <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            id="relationship"
            required
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full appearance-none p-4 pl-12 pr-10 border border-gray-300 rounded-lg bg-white text-gray-600 focus:ring-black focus:border-black"
          >
            <option value="" disabled>
              Select Relationship
            </option>
            <option value="Spouse">Spouse</option>
            <option value="Parent">Parent</option>
            <option value="Sibling">Sibling</option>
            <option value="Friend">Friend</option>
            <option value="Other">Other</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* 3. Phone Number Input (Same format as Step 1) */}
      <div>
        <label htmlFor="phone-number" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Phone Number
          </Paragraph1>
        </label>
        <div className="relative">
          <div className="flex items-center w-full border border-gray-300 rounded-lg bg-white overflow-hidden focus-within:ring-2 focus-within:ring-black focus-within:border-black">
            {/* Static Country Code Area */}
            <div className="flex items-center px-4 py-4 text-gray-600 border-r border-gray-300">
              <Paragraph1 className="mr-2">{phoneNumber}</Paragraph1>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>

            {/* Actual Input Field */}
            <input
              type="tel"
              id="phone-number-contact" // Different ID to avoid collision
              required
              placeholder="Enter number"
              onChange={(e) => {
                // In a real app, you would handle the number input separately from the country code
              }}
              className="w-full p-4 border-none outline-none bg-transparent text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

      {/* 4. Address Input */}
      <div>
        <label htmlFor="address-contact" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Address
          </Paragraph1>
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="address-contact"
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
          <label htmlFor="city-contact" className="block mb-2">
            <Paragraph1 className="text-sm font-medium text-gray-800">
              City
            </Paragraph1>
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="city-contact"
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
          <label htmlFor="state-contact" className="block mb-2">
            <Paragraph1 className="text-sm font-medium text-gray-800">
              State
            </Paragraph1>
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              id="state-contact"
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
          <Paragraph1>Continue</Paragraph1>
        </button>
      </div>
    </form>
  );
};

export default StepTwoContact;
