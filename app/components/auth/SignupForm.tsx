"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [role, setRole] = useState("STUDENT");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/auth/register", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message || "Signup failed");

        return;
      }

      router.push("/auth/login");
    } catch (error) {
      console.log(error);

      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label className="text-sm font-medium text-black/70 block mb-2">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none focus:border-blue-500 transition bg-[#fafafa]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium text-black/70 block mb-2">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none focus:border-blue-500 transition bg-[#fafafa]"
        />
      </div>

      {/* Role */}
      <div>
        <label className="text-sm font-medium text-black/70 block mb-2">
          Account Type
        </label>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole("STUDENT")}
            className={`h-14 rounded-2xl border text-sm font-semibold transition ${
              role === "STUDENT"
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-black/10 bg-[#fafafa] text-black/60"
            }`}
          >
            Student
          </button>

          <button
            type="button"
            onClick={() => setRole("TEACHER")}
            className={`h-14 rounded-2xl border text-sm font-semibold transition ${
              role === "TEACHER"
                ? "border-purple-600 bg-purple-50 text-purple-600"
                : "border-black/10 bg-[#fafafa] text-black/60"
            }`}
          >
            Teacher
          </button>
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium text-black/70 block mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-14 rounded-2xl border border-black/10 px-5 outline-none focus:border-blue-500 transition bg-[#fafafa]"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-500">
          {error}
        </div>
      )}

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="h-14 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white font-semibold text-lg mt-2 hover:scale-[1.01] active:scale-[0.99] transition disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
};

export default SignupForm;
