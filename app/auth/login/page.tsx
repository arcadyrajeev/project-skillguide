import LoginForm from "@/app/components/auth/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex overflow-hidden">
      {/* Left Section */}
      <div className="relative hidden lg:flex w-1/2 bg-[#111111] text-white overflow-hidden">
        {/* Gradient Glow */}
        <div className="absolute top-[-120px] left-[-120px] h-[300px] w-[300px] rounded-full bg-blue-600 blur-3xl opacity-40" />
        <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-purple-600 blur-3xl opacity-40" />

        <div className="relative z-10 flex flex-col justify-between h-full w-full p-16">
          <div>
            <Link
              href="/"
              className="text-5xl font-black leading-[0.9] tracking-tight"
            >
              SKILL <br /> GUIDE
            </Link>
          </div>

          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
              Learning Platform
            </p>

            <h1 className="text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Learn Real Skills.
              <br />
              Build Real Careers.
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              Access guided learning paths, project-based courses, and
              industry-focused education designed for practical growth.
            </p>

            <div className="mt-12 flex gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 w-[180px]">
                <p className="text-4xl font-bold">250+</p>
                <p className="text-sm text-white/60 mt-1">Structured Courses</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-5 w-[180px]">
                <p className="text-4xl font-bold">12K+</p>
                <p className="text-sm text-white/60 mt-1">Active Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-md bg-white rounded-[32px] border border-black/5 shadow-[0_10px_50px_rgba(0,0,0,0.08)] p-10">
          <div className="mb-10">
            <p className="text-sm font-medium text-blue-600 mb-3">
              Welcome Back
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-black mb-3">
              Login to your account
            </h2>

            <p className="text-black/50 leading-relaxed">
              Continue your learning journey and access your enrolled courses.
            </p>
          </div>

          <LoginForm />

          <div className="mt-8 border-t border-black/5 pt-6 text-center">
            <p className="text-sm text-black/50">
              Don’t have an account?
              <Link
                href="/auth/signup"
                className="text-blue-600 font-semibold ml-2 hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
