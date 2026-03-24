"use client";

import Link from "next/link";

export default function LoginForm() {
  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-6">SIGN IN</h2>

      {/* Email */}
      <input
        type="email"
        placeholder="youremail@gmail.com"
        className="w-full border rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="••••••••"
        className="w-full border rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-between text-sm mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Keep me logged in
        </label>
        <span className="text-red-500 cursor-pointer">Forgot Password?</span>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-full mb-4 hover:bg-blue-500">
        Sign in
      </button>

      <p className="text-center text-sm mb-4">
        Don’t have an account?{" "}
        <Link href="/auth/signup" className="text-blue-600">
          Create one
        </Link>
      </p>

      {/* Social */}
      <div className="text-center text-sm mb-4">or login using</div>

      <div className="flex justify-center gap-6">
        <div className="w-10 h-10 bg-white border rounded-full flex items-center justify-center cursor-pointer">
          G
        </div>
        <div className="w-10 h-10 bg-white border rounded-full flex items-center justify-center cursor-pointer">
          f
        </div>
        <div className="w-10 h-10 bg-white border rounded-full flex items-center justify-center cursor-pointer">
          t
        </div>
      </div>
    </>
  );
}
