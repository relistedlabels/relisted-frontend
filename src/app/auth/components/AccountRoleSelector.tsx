"use client";

import React from "react";
import { Paragraph1, Paragraph2, Paragraph3 } from "@/common/ui/Text";
import { RiBaseStationLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

interface RoleOptionProps {
  title: string;
  description: string;
  imageUrl: string;
  onContinue: (role: "dresser" | "curator") => void;
  roleKey: "dresser" | "curator";
}

const RoleOption: React.FC<RoleOptionProps> = ({
  title,
  description,
  imageUrl,
  onContinue,
  roleKey,
}) => {
  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg flex flex-col transition duration-300 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full rounded-xl object-cover"
        />
      </div>

      <div className="mt-4 flex flex-col grow">
        <Paragraph3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </Paragraph3>
        <Paragraph1 className="text-sm text-gray-600 grow mb-4">
          {description}
        </Paragraph1>
      </div>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={() => onContinue(roleKey)}
          className="w-full py-3 text-sm font-semibold text-white bg-[#231F20] rounded-lg hover:bg-gray-800 transition duration-150"
        >
          <Paragraph1> Continue as a {title}</Paragraph1>
        </button>
      </div>
    </div>
  );
};

const AccountRoleSelector: React.FC = () => {
  const router = useRouter();

  const handleRoleSelection = (role: "dresser" | "curator") => {
    console.log(`User selected to continue as a ${role}`);

    // Save role in localStorage or global state if needed
    localStorage.setItem("selectedRole", role);

    // Redirect user
    router.push("/auth/create-account/sign-up");
  };

  const dresserImageUrl = "/images/sin1.jpg";
  const curatorImageUrl = "/images/sin2.jpg";

  return (
    <div className="font-sans sm:py-[11px] min-h-screen- flex items-center sm:justify-center sm:p-4">
      <div className="max-w-4xl w-full bg-white py-16 sm:py-0 p-6 md:p-10 sm:rounded-xl shadow-2xl text-center">
        <div className="mb-6 flex w-full justify-center">
          <img src="/images/logo1.svg" alt="" />{" "}
        </div>

        <Paragraph3 className="text-2xl font-bold text-gray-900 mb-2">
          Who are you joining as?
        </Paragraph3>
        <Paragraph1 className="text-sm text-gray-600 mb-8">
          Choose your role to get started. You can only sign up as one at a
          time.
        </Paragraph1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RoleOption
            title="Dresser"
            description="I want to rent stylish, quality pieces for events, everyday wear, or content creation."
            imageUrl={dresserImageUrl}
            onContinue={handleRoleSelection}
            roleKey="dresser"
          />

          <RoleOption
            title="Curator"
            description="I want to list my fashion pieces and earn by sharing my wardrobe with others."
            imageUrl={curatorImageUrl}
            onContinue={handleRoleSelection}
            roleKey="curator"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountRoleSelector;
