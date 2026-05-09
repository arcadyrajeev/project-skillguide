"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";

import { usePathname } from "next/navigation";

import { useState, useRef, useEffect } from "react";

import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const pathname = usePathname();

  const { user, logout, loading } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    {
      name: "Teachers",
      href: "/teachers",
    },

    {
      name: "Pricing",
      href: "/pricing",
    },

    {
      name: "Courses",
      href: "/courses",
    },
  ];

  // Close mobile menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-4">
      <div className="mx-auto flex max-w-[90vw] items-center gap-4 rounded-2xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl px-4 py-3 shadow-[0_5px_10px_rgba(0,0,0,0.3)]">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-lg font-bold leading-tight whitespace-nowrap tracking-tight"
        >
          SKILL <br /> GUIDE
        </Link>

        {/* Search */}
        <div className="hidden md:block flex-1 ml-8 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses, teachers..."
              className="w-full rounded-full bg-[#f1f1f1] px-5 py-2.5 pr-10 text-sm text-black placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Search
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-blue-500" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex ml-auto items-center gap-4">
          {!loading && (
            <>
              {user ? (
                <>
                  {/* User Info */}
                  <Link
                    href="/dashboard"
                    className="flex cursor-pointer items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-sm font-bold text-white">
                      {user.name.charAt(0).toUpperCase()}
                    </div>

                    <div className="pr-2">
                      <p className="text-sm font-medium text-white leading-none">
                        {user.name}
                      </p>

                      <p className="mt-1 text-xs uppercase tracking-wide text-gray-400">
                        {user.role}
                      </p>
                    </div>
                  </Link>

                  {/* Logout */}
                  <button
                    onClick={logout}
                    className="rounded-full border border-white/10 px-5 py-2 text-sm text-white hover:border-white transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/signup"
                    className="rounded-full border border-white/10 px-5 py-2 text-sm text-white hover:border-white transition"
                  >
                    Sign up
                  </Link>

                  <Link
                    href="/auth/login"
                    className="rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Login
                  </Link>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden ml-auto text-white"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
          <div
            ref={menuRef}
            className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-[#111111] p-6 flex flex-col"
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white mb-6"
            >
              <X size={24} />
            </button>

            {/* Mobile Search */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full bg-white px-4 py-3 pr-10 text-sm text-black outline-none"
              />

              <Search
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {/* User */}
            {user && (
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="mb-8 flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <p className="text-white font-medium">{user.name}</p>

                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
              </Link>
            )}

            {/* Mobile Links */}
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg transition ${
                      isActive
                        ? "text-blue-500"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Actions */}
            <div className="mt-auto flex flex-col gap-3">
              {user ? (
                <button
                  onClick={logout}
                  className="rounded-full border border-white/10 px-5 py-3 text-white"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/auth/signup"
                    className="rounded-full border border-white/10 px-5 py-3 text-center text-white"
                  >
                    Sign up
                  </Link>

                  <Link
                    href="/auth/login"
                    className="rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-5 py-3 text-center text-white"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
