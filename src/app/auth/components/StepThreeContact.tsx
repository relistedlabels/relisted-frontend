"use client";

import React, { useState } from "react";
import { Paragraph1 } from "@/common/ui/Text";
import { User, Users, MapPin, ChevronDown } from "lucide-react";
import { useProfileStore } from "@/store/useProfileStore";
import { CityLGASelect } from "./CityLGASelect";
import { StateSelect } from "./StateSelect";
import { PhoneInput } from "./PhoneInput";
import { RelationshipSelect } from "./RelationshipSelect";

interface StepTwoContactProps {
  onNext: () => void;
  onBack: () => void;
}

const StepTwoContact: React.FC<StepTwoContactProps> = ({ onNext, onBack }) => {
  const [fullName, setFullName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const setProfile = useProfileStore((s) => s.setProfile);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !relationship || !phoneNumber || !city || !state) {
      alert("Please fill in all Emergency Contact details.");
      return;
    }

    // ✅ ONLY store data — NO backend call here
    setProfile({
      emergencyContacts: {
        name: fullName,
        relationship,
        phoneNumber,

        city,
        state,
      },
    });

    // ✅ Move to Step 4 (Account Number)
    onNext();
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* Full Name */}
      <div>
        <label className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Full Name
          </Paragraph1>
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-4 pl-12 border rounded-lg"
          />
        </div>
      </div>

      {/* Relationship */}
      <RelationshipSelect value={relationship} onChange={setRelationship} />

      {/* Phone */}
      <PhoneInput value={phoneNumber} onChange={(val) => setPhoneNumber(val)} />

      {/* Address */}
      <div>
        <label className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Address
          </Paragraph1>
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-4 pl-12 border rounded-lg"
          />
        </div>
      </div>

      {/* City & State */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* City Input */}
        <CityLGASelect value={city} onChange={setCity} />

        {/* State Dropdown */}
        <StateSelect value={state} onChange={setState} />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="w-1/2 py-3 border rounded-lg"
        >
          Previous
        </button>

        <button
          type="submit"
          className="w-1/2 py-3 bg-black text-white rounded-lg"
        >
          Continue
        </button>
      </div>
    </form>
  );
};

export default StepTwoContact;
