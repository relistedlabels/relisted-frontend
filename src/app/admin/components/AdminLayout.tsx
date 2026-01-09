"use client";

import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
  activePageId?: string;
}

const AdminLayout = ({
  children,
  activePageId = "overview",
}: AdminLayoutProps) => {
  const [activePage, setActivePage] = useState(activePageId);

  const handleNavigation = (id: string) => {
    console.log("Navigating to:", id);
    setActivePage(id);
  };

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="flex  h-screen bg-gray-100 overflow-hidden">
      <AdminSidebar
        userAvatarUrl="https://i.pravatar.cc/150?img=30"
        userName="Jane Graham"
        userRole="ADMIN"
        activePageId={activePage}
        onNavigate={handleNavigation}
        onLogout={handleLogout}
      />

      {/* Main content injected per page */}
      <main className="flex-1 p-8 py-[100px] hide-scrollbar overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
