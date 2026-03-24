import Link from "next/link";
import SignupForm from "@/app/components/auth/SignupForm";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-[100vh] w-full">
      <div className="w-1/2 bg-blue-900 p-30 flex h-full">
        <Link
          href="/"
          className="text-white text-5xl font-bold leading-[1] whitespace-nowrap"
        >
          SKILL <br /> GUIDE
        </Link>
      </div>
      <div className="w-1/2 py-30 px-40 flex flex-col">
        <SignupForm />
      </div>
    </div>
  );
};

export default LoginPage;
