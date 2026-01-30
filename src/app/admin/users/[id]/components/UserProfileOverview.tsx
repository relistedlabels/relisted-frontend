"use client";

import React from "react";
import { Download, Eye } from "lucide-react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";

interface User {
  name: string;
  walletBalance: string;
  totalRentals: number;
  activeDisputes: number;
  joinDate: string;
  kyc: {
    fullName: string;
    nin: string;
    id: string;
    bvn: string;
  };
  emergencyContact: {
    fullName: string;
    relationship: string;
    phone: string;
    address: string;
  };
  email: string;
  phone: string;
}

interface UserProfileOverviewProps {
  user: User;
}

export default function UserProfileOverview({
  user,
}: UserProfileOverviewProps) {
  return (
    <div>
      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Wallet Balance
          </Paragraph1>
          <Paragraph3 className="text-xl font-bold text-gray-900">
            {user.walletBalance}
          </Paragraph3>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Total Rentals
          </Paragraph1>
          <Paragraph3 className="text-xl font-bold text-gray-900">
            {user.totalRentals}
          </Paragraph3>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Active Disputes
          </Paragraph1>
          <Paragraph3 className="text-xl font-bold text-gray-900">
            {user.activeDisputes}
          </Paragraph3>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Member Since
          </Paragraph1>
          <Paragraph3 className="text-xl font-bold text-gray-900">
            {user.joinDate}
          </Paragraph3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Account Overview */}
          <div>
            <Paragraph3 className="text-lg font-bold mb-4 text-gray-900">
              Account Overview
            </Paragraph3>
            <Paragraph1 className="text-sm text-gray-600">
              {user.name} is an active dresser on the RELISTED platform. They
              have completed 47 rentals with a current wallet balance of
              ₦125,000. Account created on Oct 2024. Currently has 1 open
              dispute.
            </Paragraph1>
          </div>

          {/* KYC Information */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <Paragraph3 className="text-lg font-bold text-gray-900">
                KYC Information
              </Paragraph3>
              <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">
                Verified
              </span>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    Full Name
                  </Paragraph1>
                  <Paragraph1 className="text-sm text-gray-700">
                    {user.kyc.fullName}
                  </Paragraph1>
                </div>
                <div>
                  <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    NIN
                  </Paragraph1>
                  <Paragraph1 className="text-sm text-gray-700">
                    {user.kyc.nin}
                  </Paragraph1>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    ID
                  </Paragraph1>
                  <Paragraph1 className="text-sm text-gray-700">
                    {user.kyc.id}
                  </Paragraph1>
                </div>
                <div>
                  <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    BVN
                  </Paragraph1>
                  <Paragraph1 className="text-sm text-gray-700">
                    {user.kyc.bvn}
                  </Paragraph1>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <Paragraph3 className="text-lg font-bold mb-4 text-gray-900">
              Emergency Contact
            </Paragraph3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    Full Name
                  </Paragraph1>
                  <Paragraph1 className="text-sm text-gray-700">
                    {user.emergencyContact.fullName}
                  </Paragraph1>
                </div>
                <div>
                  <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                    Relationship
                  </Paragraph1>
                  <Paragraph1 className="text-sm text-gray-700">
                    {user.emergencyContact.relationship}
                  </Paragraph1>
                </div>
              </div>
              <div>
                <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Phone
                </Paragraph1>
                <Paragraph1 className="text-sm text-gray-700">
                  {user.emergencyContact.phone}
                </Paragraph1>
              </div>
              <div>
                <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Address
                </Paragraph1>
                <Paragraph1 className="text-sm text-gray-700">
                  {user.emergencyContact.address}
                </Paragraph1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Document Preview */}
          <div>
            <Paragraph3 className="text-lg font-bold mb-4 text-gray-900">
              Document Preview
            </Paragraph3>
            <div className="bg-gray-100 rounded-lg p-8 mb-4 h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-2"></div>
                <Paragraph1 className="text-sm text-gray-600">
                  Document preview
                </Paragraph1>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Eye size={16} />
                <Paragraph1 className="text-sm">View</Paragraph1>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <Download size={16} />
                <Paragraph1 className="text-sm">Download</Paragraph1>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <Paragraph3 className="text-lg font-bold mb-4 text-gray-900">
              Contact Information
            </Paragraph3>
            <div className="space-y-4">
              <div>
                <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Email
                </Paragraph1>
                <Paragraph1 className="text-sm text-gray-700">
                  {user.email}
                </Paragraph1>
              </div>
              <div>
                <Paragraph1 className="text-xs font-semibold text-gray-500 uppercase mb-1">
                  Phone
                </Paragraph1>
                <Paragraph1 className="text-sm text-gray-700">
                  {user.phone}
                </Paragraph1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
