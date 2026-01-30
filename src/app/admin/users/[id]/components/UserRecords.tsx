"use client";

import React from "react";
import { Paragraph1, Paragraph3 } from "@/common/ui/Text";

interface User {
  name: string;
}

interface UserRecordsProps {
  user: User;
}

export default function UserRecords({ user }: UserRecordsProps) {
  const records = [
    {
      id: 1,
      item: "Designer Dress",
      owner: "Tunde Adebayo",
      startDate: "Jan 15, 2024",
      endDate: "Jan 20, 2024",
      status: "Completed",
      amount: "₦15,000",
    },
    {
      id: 2,
      item: "Evening Gown",
      owner: "Zainab Hassan",
      startDate: "Jan 25, 2024",
      endDate: "Feb 1, 2024",
      status: "Active",
      amount: "₦12,000",
    },
  ];

  return (
    <div>
      <Paragraph3 className="text-lg font-bold mb-4 text-gray-900">
        Rental History
      </Paragraph3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Item
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Owner
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Start Date
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                End Date
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Status
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr
                key={record.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-4 text-gray-900">{record.item}</td>
                <td className="py-3 px-4 text-gray-600">{record.owner}</td>
                <td className="py-3 px-4 text-gray-600">{record.startDate}</td>
                <td className="py-3 px-4 text-gray-600">{record.endDate}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      record.status === "Completed"
                        ? "bg-green-50 text-green-700"
                        : "bg-blue-50 text-blue-700"
                    }`}
                  >
                    {record.status}
                  </span>
                </td>
                <td className="py-3 px-4 font-semibold text-gray-900">
                  {record.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
