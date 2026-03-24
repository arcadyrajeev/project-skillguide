"use client";

import Link from "next/link";

export default function SignupForm() {
  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-6">CREATE ACCOUNT</h2>

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-lg px-4 py-3 mb-4"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded-lg px-4 py-3 mb-4"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border rounded-lg px-4 py-3 mb-6"
      />

      <button className="w-full bg-blue-600 text-white py-3 rounded-full mb-4">
        Create Account
      </button>

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-blue-600">
          Sign in
        </Link>
      </p>
    </>
  );
}
