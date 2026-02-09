"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent px-6 py-4">
      <div className="mx-auto flex max-w-[90vw] items-center justify-between rounded-xl bg-[#1B1B1B] px-6 py-3 ">
        {/* Left section */}
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
              className="w-96 rounded-full bg-[#efefef] px-4 py-2 pr-10 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* Center nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm">
          <Link href="/teachers" className="text-gray-300 hover:text-white">
            Teachers
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">
            Pricing
          </Link>
          <Link href="/courses" className="text-gray-300 hover:text-white">
            My Courses
          </Link>
        </div>

        {/* Right actions */}
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
