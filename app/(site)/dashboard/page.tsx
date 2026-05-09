"use client";

import { useEffect, useState } from "react";

import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

export type DashboardSection =
  | "dashboard"
  | "learning"
  | "explore"
  | "create-course"
  | "your-courses"
  | "settings";

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [activeSection, setActiveSection] =
    useState<DashboardSection>("dashboard");

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("/api/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        setDashboardData(data.dashboard);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f3f3f3] mx-16 py-6 mt-26">
      <div className=" mx-auto flex flex-col lg:flex-row gap-6">
        <Sidebar
          user={dashboardData.user}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <DashboardContent
          dashboardData={dashboardData}
          activeSection={activeSection}
        />
      </div>
    </div>
  );
}
