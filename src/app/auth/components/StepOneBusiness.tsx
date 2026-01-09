import React, { useState } from "react";
import { Paragraph1 } from "@/common/ui/Text";
// Importing icons needed for the form fields
import { MapPin, Briefcase, UploadCloud, ChevronDown } from "lucide-react";

// Define props for the component
interface StepOnePersonalProps {
  onNext: () => void; // Function passed down from the flow to advance the step
}

const StepOnePersonal: React.FC<StepOnePersonalProps> = ({ onNext }) => {
  // State for all form fields
  const [phoneNumber, setPhoneNumber] = useState("+234");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [bvn, setBvn] = useState("");
  const [identificationFiles, setIdentificationFiles] = useState<File[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation check (replace with comprehensive validation)
    if (
      !phoneNumber ||
      !address ||
      !city ||
      !state ||
      !bvn ||
      identificationFiles.length === 0
    ) {
      alert("Please fill in all fields and upload identification documents.");
      return;
    }

    console.log("Personal Info Collected:", {
      phoneNumber,
      address,
      city,
      state,
      bvn,
      identificationFiles,
    });
    // Move to the next step in the main flow component
    onNext();
  };

  // Handler for file upload (drag and drop or click)
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
  ) => {
    let files: FileList | null = null;

    if ("files" in e.target) {
      files = e.target.files;
    } else if ("dataTransfer" in e) {
      e.preventDefault();
      files = e.dataTransfer.files;
    }

    if (files) {
      setIdentificationFiles(Array.from(files));
      // In a real app, you would handle file size, type, and upload process here
    }
  };

  // Prevents default for drag over event
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {/* 1. Phone Number Input */}
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
              id="phone-number"
              required
              // Placeholder for the rest of the number input, as the prefix is static
              placeholder="Enter number"
              onChange={(e) => {
                // In a real app, you would handle the number input separately from the country code
              }}
              className="w-full p-4 border-none outline-none bg-transparent text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>
      </div>

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
        <div className="flex-1">
          <label htmlFor="city" className="block mb-2">
            <Paragraph1 className="text-sm font-medium text-gray-800">
              City
            </Paragraph1>
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="city"
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
          <label htmlFor="state" className="block mb-2">
            <Paragraph1 className="text-sm font-medium text-gray-800">
              State
            </Paragraph1>
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              id="state"
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
            {/* Custom chevron icon to override default select appearance */}
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
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
        <div
          onDrop={handleFileUpload}
          onDragOver={handleDragOver}
          className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 cursor-pointer hover:border-black transition duration-150 relative"
        >
          <UploadCloud className="w-8 h-8 text-gray-500 mb-2" />
          <Paragraph1 className="text-sm text-gray-600">
            Drop your files here or{" "}
            <label
              htmlFor="file-upload"
              className="text-black font-semibold cursor-pointer hover:underline"
            >
              Click to upload
            </label>
          </Paragraph1>
          <Paragraph1 className="text-xs text-gray-400 mt-1">
            International Passport, NIN, Driver's License
          </Paragraph1>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleFileUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
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
