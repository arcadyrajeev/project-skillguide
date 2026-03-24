"use client";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-1 bg-[#111] text-white p-12 flex-col justify-between relative">
        <div className="text-2xl font-semibold leading-tight">
          SKILL <br /> GUIDE
        </div>

        <div>
          <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-400 to-orange-400 bg-clip-text text-transparent">
            Start Your Learning Journey here
          </h1>
        </div>

        {/* Path Illustration */}
        <div className="relative h-32 mt-10">
          <div className="absolute w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 rounded-full" />
          <div className="flex justify-between mt-[-10px]">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-semibold"
              >
                {n}.
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex items-center justify-center bg-[#f3f3f3] p-6">
        <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
}
