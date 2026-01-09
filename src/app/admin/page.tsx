import React from "react";
import AdminLayout from "./components/AdminLayout";
import AnalyticsHeader from "./components/AnalyticsHeader";
import StatCard from "./components/StatCard";
import AnalyticsStats from "./components/AnalyticsStats";
import AnalyticsDashboard from "./components/AnalyticsDashboard";

function page() {
  return (
    <AdminLayout>
      <div>
        <AnalyticsHeader />
        <AnalyticsStats />
        <AnalyticsDashboard />
      </div>
    </AdminLayout>
  );
}

export default page;
