"use client";

import React from "react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";

interface User {
  walletBalance: string;
}

interface UserWalletProps {
  user: User;
}

export default function UserWallet({ user }: UserWalletProps) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-lg">
        <Paragraph1 className="text-sm font-semibold uppercase mb-2 opacity-90">
          Wallet Balance
        </Paragraph1>
        <Paragraph3 className="text-4xl font-bold">
          {user.walletBalance}
        </Paragraph3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="px-4 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition">
          <Paragraph1>Top Up Wallet</Paragraph1>
        </button>
        <button className="px-4 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition">
          <Paragraph1>Withdraw Funds</Paragraph1>
        </button>
      </div>

      <div>
        <Paragraph3 className="text-lg font-bold mb-4 text-gray-900">
          Wallet Activity
        </Paragraph3>
        <Paragraph1 className="text-sm text-gray-600">
          No recent wallet activity
        </Paragraph1>
      </div>
    </div>
  );
}
