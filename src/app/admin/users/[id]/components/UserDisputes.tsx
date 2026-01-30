"use client";

import React from "react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";

interface User {
  name: string;
}

interface UserDisputesProps {
  user: User;
}

export default function UserDisputes({ user }: UserDisputesProps) {
  const disputes = [
    {
      id: 1,
      title: "Item Not Returned",
      description:
        "Renter did not return the designer dress on the agreed date",
      status: "Pending",
      date: "Jan 20, 2024",
      amount: "₦15,000",
    },
  ];

  return (
    <div>
      <Paragraph3 className="text-lg font-bold mb-4 text-gray-900">
        Active Disputes
      </Paragraph3>
      {disputes.length > 0 ? (
        <div className="space-y-4">
          {disputes.map((dispute) => (
            <div
              key={dispute.id}
              className="border border-gray-200 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <Paragraph3 className="font-bold text-gray-900">
                    {dispute.title}
                  </Paragraph3>
                  <Paragraph1 className="text-sm text-gray-600 mt-1">
                    {dispute.description}
                  </Paragraph1>
                </div>
                <span className="px-2 py-1 bg-yellow-50 text-yellow-700 rounded text-xs font-medium">
                  {dispute.status}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mt-3">
                <span>{dispute.date}</span>
                <span className="font-semibold text-gray-900">
                  {dispute.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Paragraph1 className="text-sm text-gray-600">
          No disputes found
        </Paragraph1>
      )}
    </div>
  );
}
