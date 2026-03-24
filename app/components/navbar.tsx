"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: "Teachers", href: "/teachers" },
    { name: "Pricing", href: "/pricing" },
    { name: "My Courses", href: "/courses" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  // Close on outside click
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
      <div className="mx-auto flex max-w-[90vw] items-center gap-4 rounded-xl bg-[#1B1B1B] px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-lg font-semibold leading-tight whitespace-nowrap"
        >
          SKILL <br /> GUIDE
        </Link>

        {/* Search (Tablet + Desktop) */}
        <div className="hidden md:block flex-1 ml-10 max-w-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses, categories, teachers..."
              className="w-full rounded-full bg-[#efefef] px-4 py-2 pr-10 text-sm text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
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
                className={`relative pb-1 ${
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

        {/* Desktop Actions */}
        <div className="hidden lg:flex ml-auto items-center gap-3">
          <Link
            href="/auth/signup"
            className="rounded-full border border-gray-500 px-4 py-2 text-sm text-white hover:border-white"
          >
            Sign up
          </Link>
          <Link
            href="/auth/login"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-500"
          >
            Login
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white ml-auto"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          {/* Panel */}
          <div
            ref={menuRef}
            className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[#1B1B1B] p-6 flex flex-col transform transition-transform duration-300"
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white mb-6"
            >
              <X size={24} />
            </button>

            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full bg-white px-4 py-2 pr-10 text-sm text-black"
              />
              <Search
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 text-white">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg ${
                      isActive ? "text-blue-500" : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="mt-auto flex flex-col gap-3">
              <Link
                href="/signup"
                className="rounded-full border border-gray-500 px-4 py-2 text-white text-center"
              >
                Sign up
              </Link>
              <Link
                href="/login"
                className="rounded-full bg-blue-600 px-4 py-2 text-white text-center"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
