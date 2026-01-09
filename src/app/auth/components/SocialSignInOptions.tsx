import React from "react";
import { Paragraph1 } from "@/common/ui/Text";
import { FaGoogle, FaApple } from "react-icons/fa"; // Using react-icons/fa for Google and Apple logos
import { useRouter } from "next/navigation";

const SocialSignInOptions: React.FC = () => {
  const router = useRouter();

  // Placeholder handlers for social sign-in actions
  const handleGoogleSignIn = () => {
    console.log("Attempting sign in with Google...");
    // Integration logic here (e.g., Firebase, Auth0, etc. redirects)
  };

  const handleAppleSignIn = () => {
    console.log("Attempting sign in with Apple...");
    // Integration logic here
  };

  const handleLoginRedirect = () => {
    console.log("Redirecting to Login page...");
    router.push("/auth/sign-in");
  };

  return (
    <div className="font-sans w-full ">
      {/* OR Separator */}
      <div className="flex items-center my-6">
        <div className="grow border-t border-gray-300"></div>
        <span className="shrink mx-4 text-sm font-medium text-gray-500">
          OR
        </span>
        <div className="grow border-t border-gray-300"></div>
      </div>

      <div className="space-y-4">
        {/* Continue with Google Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center space-x-3 py-3 px-4 border  rounded-lg text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition duration-150 "
        >
          {/* Using a placeholder for the Google logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3A12.9 12.9 0 1 1 24 10.9c3.5 0 6.6 1.3 9 3.4l6-6A21.8 21.8 0 0 0 24 2 22 22 0 1 0 46 24c0-1.3-.1-2.7-.4-3.9z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.9A12.9 12.9 0 0 1 24 10.9c3.5 0 6.6 1.3 9 3.4l6-6A21.8 21.8 0 0 0 24 2 22 22 0 0 0 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 46c5.8 0 11-2.2 15-5.8l-7-5.7A12.7 12.7 0 0 1 24 36a12.9 12.9 0 0 1-11.2-6.7l-6.6 5A22 22 0 0 0 24 46z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3a13 13 0 0 1-4.4 5.7l7 5.7A22 22 0 0 0 46 24c0-1.3-.1-2.7-.4-3.9z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Continue with Apple Button */}
        <button
          onClick={handleAppleSignIn}
          className="w-full flex items-center justify-center space-x-3 py-3 px-4 border rounded-lg text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition duration-150"
        >
          {/* Using a placeholder for the Apple logo */}
          <FaApple className="w-5 h-5 text-gray-900" />
          <span>Continue with Apple</span>
        </button>
      </div>

      {/* Already have an account? Log In link */}
      <div className="text-center mt-6">
        <Paragraph1 className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={handleLoginRedirect}
            className="font-bold text-black hover:underline"
          >
            Log In
          </button>
        </Paragraph1>
      </div>
    </div>
  );
};

// --- Example Usage (Combining with the sign-up form for context) ---

/*
const FullSignUpPage: React.FC = () => {
    return (
        <div className="font-sans bg-gray-50 min-h-screen flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white p-6 md:p-10 rounded-xl shadow-2xl text-gray-900">
                
                // ... The CreateAccountForm (Email, Name, Password) would go here ...

                <SocialSignInOptions />
            </div>
        </div>
    );
};
*/

export default SocialSignInOptions;
