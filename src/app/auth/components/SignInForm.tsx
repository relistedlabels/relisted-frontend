import React, { useState } from "react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";
import {
  HiOutlineEnvelope,
  HiOutlineLockClosed,
  HiOutlineEye,
  HiEyeSlash,
} from "react-icons/hi2";
import SocialSignInOptions from "./SocialSignInOptions";
import Link from "next/link";

const SignInForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting sign in...");
  };

  return (
    <div className="font-sans">
      <div className="max-w-xl w-full bg-white p-4 md:p-8 pb-[100px] sm:pb-0 sm:rounded-3xl text-gray-600">
        {/* Header */}
        <div className="mb-8 text-center flex-col items-center flex justify-center">
          <img src="/images/logo1.svg" alt="" className="h-10 w-10 mb-4" />
          <Paragraph3 className="text-2xl font-bold text-black mb-1">
            Welcome Back
          </Paragraph3>
          <Paragraph1 className="text-sm text-gray-600 max-w-[350px] leading-relaxed">
            Explore fashion at your fingertips — rent unique pieces or manage
            your listings with ease.
          </Paragraph1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2">
              <Paragraph1 className="text-sm font-medium text-gray-600">
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
                className="w-full sm:w-[450px] p-4 pl-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-2">
              <Paragraph1 className="text-sm font-medium text-gray-600">
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
                className="w-full p-4 pl-12 pr-12 border border-gray-300 rounded-lg bg-white text-gray-600 placeholder-gray-400 focus:ring-black focus:border-black"
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

            {/* Forgot Password Link */}
            <div className="flex justify-end mt-2">
              <Link
                href="/auth/forgot-password"
                className="text-sm text-gray-700 hover:text-black font-medium"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-4 text-base font-semibold text-white bg-black rounded-lg hover:bg-gray-800"
          >
            Log in{" "}
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

export default SignInForm;
