import React, { useState } from "react";
import { Paragraph1 } from "@/common/ui/Text";
// Importing icons needed for the form fields
import { MapPin, Briefcase, UploadCloud, ChevronDown } from "lucide-react";
import { FileUploader } from "@/common/ui/FileUploader";
import { useProfileStore } from "@/store/useProfileStore";
import { PhoneInput } from "./PhoneInput";
import { StateSelect } from "./StateSelect";
import { CityLGASelect } from "./CityLGASelect";

// Define props for the component
interface StepOnePersonalProps {
  onNext: () => void; // Function passed down from the flow to advance the step
}

const StepOnePersonal: React.FC<StepOnePersonalProps> = ({ onNext }) => {
  // State for all form fields
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [address, setAddress] = useState("");
  const [cityLGA, setCityLGA] = useState("");
  const [state, setState] = useState("");
  const [bvn, setBvn] = useState("");
  const [identificationFiles, setIdentificationFiles] = useState<File[]>([]);
  const setProfile = useProfileStore((s) => s.setProfile);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber || !address || !cityLGA || !state || !bvn) {
      alert("Please fill in all required fields.");
      return;
    }

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

  // Handler for file upload (drag and drop or click)
  const handleUpload = (data: { id: string; url?: string }) => {
    console.log("ninuploadid", data.id);
    setProfile({
      ninUploadId: data.id,
    });
  };

  // Prevents default for drag over event
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* 1. Phone Number Input */}
      <PhoneInput value={phoneNumber} onChange={(val) => setPhoneNumber(val)} />

      {/* 2. Address Input */}
      <div>
        <label htmlFor="address" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Address
          </Paragraph1>
        </label>
        <div className="relative">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            id="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Street address"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* 3. City and State (Side-by-side) */}
      <div className="flex space-x-4">
        {/* City Input */}
        <CityLGASelect value={cityLGA} onChange={setCityLGA} />

        {/* State Dropdown */}
        <StateSelect value={state} onChange={setState} />
      </div>

      {/* 4. BVN Input */}
      <div>
        <label htmlFor="bvn" className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            BVN
          </Paragraph1>
        </label>
        <div className="relative">
          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text" // BVN is typically treated as a string/text field
            id="bvn"
            required
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
            placeholder="Enter your BVN"
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
          />
        </div>
      </div>

      {/* 5. Means of Identification (File Upload) */}
      <div>
        <label className="block mb-2">
          <Paragraph1 className="text-sm font-medium text-gray-800">
            Means of Identification
          </Paragraph1>
        </label>
        <FileUploader
          helperText="International Passport, NIN, Driver's License"
          onUploaded={handleUpload}
        />
        {/* Display uploaded files */}
        {identificationFiles.length > 0 && (
          <div className="mt-2 text-sm text-gray-600">
            <Paragraph1>
              Files selected:{" "}
              {identificationFiles.map((f) => f.name).join(", ")}
            </Paragraph1>
          </div>
        )}
      </div>

      {/* Next Button */}
      <button
        type="submit"
        className="w-full py-3 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition duration-150 mt-8"
      >
        <Paragraph1>Next</Paragraph1>
      </button>
    </form>
  );
};

export default StepOnePersonal;
