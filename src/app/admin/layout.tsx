"use client";

import React from "react";
import AdminSidebar from "./dashboard/components/AdminSidebar";
import AdminTopNavbar from "./components/AdminTopNavbar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <AdminTopNavbar onLogout={handleLogout} />
      <AdminSidebar
        userAvatarUrl="https://i.pravatar.cc/150?img=30"
        userName="Jane Graham"
        userRole="ADMIN"
        onLogout={handleLogout}
      />

      <main className="flex-1 p-8 pt-24 hide-scrollbar overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
