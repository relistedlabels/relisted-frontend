"use client";

import React from "react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";

interface User {
  name: string;
}

interface UserTransactionsProps {
  user: User;
}

export default function UserTransactions({ user }: UserTransactionsProps) {
  const transactions = [
    {
      id: 1,
      type: "Rental Payment",
      description: "Payment for Designer Dress rental",
      amount: "₦15,000",
      date: "Jan 20, 2024",
      status: "Completed",
    },
    {
      id: 2,
      type: "Refund",
      description: "Security deposit refund",
      amount: "+₦5,000",
      date: "Jan 22, 2024",
      status: "Completed",
    },
  ];

  return (
    <div>
      <Paragraph3 className="text-lg font-bold mb-4 text-gray-900">
        Transaction History
      </Paragraph3>
      <div className="space-y-3">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex-1">
              <Paragraph1 className="font-semibold text-gray-900">
                {transaction.type}
              </Paragraph1>
              <Paragraph1 className="text-xs text-gray-500 mt-1">
                {transaction.description}
              </Paragraph1>
            </div>
            <div className="text-right">
              <Paragraph1
                className={`font-bold ${
                  transaction.amount.startsWith("+")
                    ? "text-green-600"
                    : "text-gray-900"
                }`}
              >
                {transaction.amount}
              </Paragraph1>
              <Paragraph1 className="text-xs text-gray-500 mt-1">
                {transaction.date}
              </Paragraph1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
