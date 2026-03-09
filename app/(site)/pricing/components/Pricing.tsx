export default function PricingSection() {
  return (
    <section className="bg-[#f3f3f3] py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="mt-10 text-3xl md:text-4xl heading font-bold text-gray-900">
          Smart and transparent payment plans for smooth learning
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Get access to thousands of courses and teachers to start learning
          today and follow your passion
        </p>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 items-center">
          {/* Basic */}
          <div className="bg-white border border-gray-300 rounded-3xl p-10 flex flex-col justify-between h-[420px]">
            <h3 className="text-xl font-semibold text-gray-700">Basic Plan</h3>

            <button className="mt-auto border border-gray-400 rounded-full px-6 py-3 text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              • Get Basic Plan
            </button>
          </div>

          {/* Pro (Highlighted) */}
          <div className="bg-[#3c3c3c] text-white rounded-3xl p-10 flex flex-col justify-between h-[480px] relative shadow-xl scale-100 md:scale-105">
            {/* Recommended badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-orange-400">
              Recommended
            </div>

            <h3 className="text-xl font-semibold">Pro Plan</h3>

            <button className="mt-auto bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full px-6 py-3 text-sm flex items-center justify-center gap-2 hover:opacity-90 transition">
              • Get Pro Plan
            </button>
          </div>

          {/* Premium */}
          <div className="bg-white border border-gray-300 rounded-3xl p-10 flex flex-col justify-between h-[420px]">
            <h3 className="text-xl font-semibold text-gray-700">
              Premium Plan
            </h3>

            <button className="mt-auto border border-gray-400 rounded-full px-6 py-3 text-sm flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              • Get Premium Plan
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient lines */}
      <div className="hidden md:block absolute right-0 top-40 w-72 h-72 pointer-events-none">
        <div className="absolute w-260 h-3 bg-gradient-to-r from-indigo-500 to-orange-500 -rotate-45 -translate-x-10 rounded-full"></div>
        <div className="absolute w-200 h-3 bg-gradient-to-r from-purple-500 to-orange-500 -rotate-45 translate-y-10 rounded-full"></div>
      </div>
    </section>
  );
}
