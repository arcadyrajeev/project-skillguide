export default function MonetizeCTA() {
  return (
    <section className="relative bg-[#f3f3f3] py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Content */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            Here To Monetize Your
            <br />
            Expertise?
          </h2>

          <p className="text-gray-600 text-lg md:text-xl mt-6">
            Join our 10,000+ community of teachers
          </p>

          {/* CTA */}
          <button className="mt-10 flex items-center gap-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition">
            <span className="text-sm">●</span>
            Start your Teaching Journey
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Decorative Path */}
      <svg
        className="absolute left-0 bottom-0 w-full h-[260px] md:h-[320px]"
        viewBox="0 0 1200 300"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ctaGradient">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>

        <path
          d="M0 200 C200 120 400 260 600 180 C800 120 1000 260 1200 40"
          stroke="url(#ctaGradient)"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </section>
  );
}
