"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Your Courses", href: "/dashboard/courses" },
  { name: "Personalization", href: "/dashboard/personalization" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-[260px] bg-white lg:h-[calc(100vh-80px)] rounded-2xl p-4">
      <h2 className="text-sm text-gray-500 mb-6">Instructor’s Dashboard</h2>

      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-3 rounded-xl text-sm transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
