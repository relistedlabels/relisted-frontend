"use client";

import React from "react";
import { Formik, Form } from "formik";
import { Paragraph1 } from "@/common/ui/Text";
import { MapPin, Briefcase, ChevronDown } from "lucide-react";
import { FileUploader } from "@/common/ui/FileUploader";
import { useProfileStore } from "@/store/useProfileStore";

interface StepOnePersonalProps {
  onNext: () => void;
}

const StepOnePersonal: React.FC<StepOnePersonalProps> = ({ onNext }) => {
  const { setProfile, resetProfile, ...stored } = useProfileStore();

  return (
    <Formik
      initialValues={stored}
      onSubmit={(values) => {
        setProfile(values);
        onNext();
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form className="space-y-6">
          {/* Phone Number */}
          <div>
            <Paragraph1 className="text-sm font-medium text-gray-800 mb-2">
              Phone Number
            </Paragraph1>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <div className="px-4 py-4 border-r text-gray-600">
                {values.phoneNumber}
                <ChevronDown className="inline ml-2 w-4 h-4" />
              </div>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleChange}
                className="flex-1 p-4 outline-none"
              />
            </div>
          </div>

          {/* Street Address */}
          <div>
            <Paragraph1 className="text-sm font-medium text-gray-800 mb-2">
              Address
            </Paragraph1>
            <input
              name="address.street"
              value={values.address.street}
              onChange={handleChange}
              className="w-full p-4 pl-12 border border-gray-300 rounded-lg"
            />
          </div>

          {/* City / State */}
          <div className="flex space-x-4">
            <input
              name="address.city"
              value={values.address.city}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />

            <select
              name="address.state"
              value={values.address.state}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
            >
              <option value="" disabled>
                Select State
              </option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja FCT</option>
              <option value="Rivers">Rivers</option>
            </select>
          </div>

          {/* BVN */}
          <div>
            <Paragraph1 className="text-sm font-medium text-gray-800 mb-2">
              BVN
            </Paragraph1>
            <input
              name="bvn"
              value={values.bvn}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Identification */}
          <div>
            <Paragraph1 className="text-sm font-medium text-gray-800 mb-2">
              Means of Identification
            </Paragraph1>
            <FileUploader
              onUploaded={(data) => {
                setFieldValue("ninUploadId", data.id);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg"
          >
            <Paragraph1>Next</Paragraph1>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default StepOnePersonal;
