"use client";

import React, { useState, useEffect } from "react";
import { Paragraph1 } from "@/common/ui/Text";
import { MapPin } from "lucide-react";
import { FileUploader } from "@/common/ui/FileUploader";
import { useProfileStore } from "@/store/useProfileStore";
import { PhoneInput } from "./PhoneInput";
import { StateSelect } from "./StateSelect";
import { CityLGASelect } from "./CityLGASelect";

interface StepOnePersonalProps {
  onNext: () => void;
}

const StepOnePersonal: React.FC<StepOnePersonalProps> = ({ onNext }) => {
  const profile = useProfileStore((s) => s);
  const setProfile = useProfileStore((s) => s.setProfile);

  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber);
  const [address, setAddress] = useState(profile.address.street);
  const [cityLGA, setCityLGA] = useState(profile.address.city);
  const [state, setState] = useState(profile.address.state);
  const [bvn, setBvn] = useState(profile.bvn);

  useEffect(() => {
    setPhoneNumber(profile.phoneNumber || "+234");
    setAddress(profile.address.street || "");
    setCityLGA(profile.address.city || "");
    setState(profile.address.state || "");
    setBvn(profile.bvn || "");
  }, [
    profile.phoneNumber,
    profile.address.street,
    profile.address.city,
    profile.address.state,
    profile.bvn,
  ]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !phoneNumber ||
      !address ||
      !cityLGA ||
      !state ||
      !bvn ||
      !profile.ninUploadId
    )
      return;

    setProfile({
      phoneNumber,
      bvn,
      address: {
        street: address,
        city: cityLGA,
        state,
        country: "Nigeria",
      },
    });

    onNext();
  };

  const handleUpload = (data: { id: string }) => {
    setProfile({ ninUploadId: data.id });
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      <PhoneInput value={phoneNumber} onChange={setPhoneNumber} />

      <div>
        <label className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Address
          </Paragraph1>
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-4 pl-12 border rounded-lg"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <CityLGASelect value={cityLGA} onChange={setCityLGA} />
        <StateSelect value={state} onChange={setState} />
      </div>

      {/* <div>
        <label className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            BVN
          </Paragraph1>
        </label>
        <div className="relative">
          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
            className="w-full p-4 pl-12 border rounded-lg"
          />
        </div>
      </div> */}

      <FileUploader
        helperText="International Passport, NIN, Driver's License"
        onUploaded={handleUpload}
      />

      <button className="w-full py-3 bg-black text-white rounded-lg">
        <Paragraph1>Next</Paragraph1>
      </button>
    </form>
  );
};

export default StepOnePersonal;
