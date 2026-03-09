"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Teachers", href: "/teachers" },
    { name: "Pricing", href: "/pricing" },
    { name: "My Courses", href: "/courses" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent px-6 py-4">
      <div className="mx-auto flex max-w-[90vw] items-center justify-between rounded-xl bg-[#1B1B1B] px-6 py-3">
        {/* Left */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-white heading text-xl font-semibold tracking-wide leading-tight"
          >
            SKILL
            <br />
            GUIDE
          </Link>

          <button className="flex items-center ml-10 gap-1 text-sm text-gray-300 hover:text-white">
            Browse
            <span className="text-xs">▼</span>
          </button>

          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search courses, categories, teachers and more"
              className="w-96 rounded-full bg-[#efefef] px-4 py-2 pr-10 text-sm text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Center Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="rounded-full border border-gray-500 px-5 py-2 text-sm text-white hover:border-white"
          >
            Sign up
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-500"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
