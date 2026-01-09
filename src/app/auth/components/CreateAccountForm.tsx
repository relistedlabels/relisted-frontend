import React, { useState } from "react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";
import {
  HiOutlineUser,
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiEyeSlash,
} from "react-icons/hi2";
import SocialSignInOptions from "./SocialSignInOptions";

const CreateAccountForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("You must agree to the Terms of use and Privacy Policy.");
      return;
    }
    console.log("Submitting account creation...");
  };

  return (
    <div className="font-sans">
      <div className="max-w- w-full bg-white p-4 md:p-8 pb-[100px] sm:pb-0 sm:rounded-3xl text-gray-900">
        {/* Header */}
        <div className="mb-8 text-center flex-col items-center flex justify-center">
          <img src="/images/logo1.svg" alt="" className="h-10 w-10 mb-4" />
          <Paragraph3 className="text-2xl font-bold text-gray-900 mb-1">
            Create an account
          </Paragraph3>
          <Paragraph1 className="text-sm text-gray-600 max-w-[300px] leading-relaxed">
            Join the Relisted community and unlock endless wardrobe
            possibilities.
          </Paragraph1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="full-name" className="block mb-2">
              <Paragraph1 className="text-sm font-medium text-gray-900">
                Full Name
              </Paragraph1>
            </label>
            <div className="relative">
              <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="full-name"
                required
                placeholder="Enter your full name"
                className="w-full  p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-black focus:border-black"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2">
              <Paragraph1 className="text-sm font-medium text-gray-900">
                Email Address
              </Paragraph1>
            </label>
            <div className="relative">
              <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                className="w-full p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-black focus:border-black"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-2">
              <Paragraph1 className="text-sm font-medium text-gray-900">
                Password
              </Paragraph1>
            </label>
            <div className="relative">
              <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                placeholder="Enter your password"
                className="w-full p-4 pl-12 pr-12 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-black focus:border-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <HiEyeSlash className="w-5 h-5" />
                ) : (
                  <HiOutlineEye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3 pt-1">
            <input
              type="checkbox"
              id="terms"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 w-4 h-4 border-gray-300 rounded focus:ring-black cursor-pointer"
            />
            <label htmlFor="terms" className="leading-relaxed">
              <Paragraph1 className="text-sm text-gray-700">
                By creating an account, I agree to the{" "}
                <a
                  href="#"
                  className="underline font-medium hover:text-gray-900"
                >
                  Terms of use
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline font-medium hover:text-gray-900"
                >
                  Privacy Policy
                </a>
                .
              </Paragraph1>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={!agreedToTerms}
            className="w-full py-4 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create account
          </button>
        </form>

        {/* Social Login */}
        <div className="mt-8">
          <SocialSignInOptions />
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
