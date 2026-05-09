"use client";

import {
  LayoutDashboard,
  BookOpen,
  Compass,
  Settings,
  PlusSquare,
  Library,
} from "lucide-react";

import { DashboardSection } from "../page";

type SidebarProps = {
  user: {
    name: string;
    email: string;
    role: string;
  };

  activeSection: DashboardSection;

  setActiveSection: (section: DashboardSection) => void;
};

export default function Sidebar({
  user,
  activeSection,
  setActiveSection,
}: SidebarProps) {
  // Base navigation
  const navItems = [
    {
      name: "Dashboard",
      key: "dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "My Learning",
      key: "learning",
      icon: BookOpen,
    },

    {
      name: "Explore",
      key: "explore",
      icon: Compass,
    },
  ];

  // Teacher-only navigation
  const teacherNavItems = [
    {
      name: "Create Course",
      key: "create-course",
      icon: PlusSquare,
    },

    {
      name: "Your Courses",
      key: "your-courses",
      icon: Library,
    },
  ];

  // Settings always last
  const settingsItem = {
    name: "Settings",
    key: "settings",
    icon: Settings,
  };

  // Final nav
  const finalNavItems = [
    ...navItems,

    ...(user.role === "TEACHER" ? teacherNavItems : []),

    settingsItem,
  ];

  return (
    <div className="w-full lg:w-[300px] rounded-3xl bg-[#111111] p-4 text-white h-fit sticky top-28 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      {/* User */}
      <div className="flex flex-col items-center text-center px-4 pt-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-4xl font-bold shadow-lg">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <h2 className="mt-5 text-2xl font-bold tracking-tight">{user.name}</h2>

        <p className="mt-2 text-sm text-gray-400 break-all">{user.email}</p>

        <div className="mt-5 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
          {user.role}
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-white/10" />

      {/* Navigation */}
      <div className="space-y-2">
        {finalNavItems.map((item) => {
          const Icon = item.icon;

          const isActive = activeSection === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setActiveSection(item.key as DashboardSection)}
              className={`w-full cursor-pointer flex items-center gap-4 rounded-xl px-5 py-4 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white shadow-lg"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={18} />

              <span>{item.name}</span>
            </button>
          );
        })}
      </div>

      {/* Teacher CTA */}
      {user.role === "TEACHER" && (
        <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-orange-500/10 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-300">
            Teacher Workspace
          </p>

          <h3 className="mt-3 text-lg font-bold leading-tight">
            Build and manage your courses
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            Upload lessons, manage students and grow your teaching business.
          </p>
        </div>
      )}
    </div>
  );
}
