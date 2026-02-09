export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3f3f3] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-10 text-5xl heading font-bold text-black">
          Why choose us?
        </h2>

        {/* Card */}
        <div className="rounded-3xl bg-[#181818] body-text px-6 py-10 sm:px-10 sm:py-14 text-white">
          {/* Top text */}
          <p className="mb-24 max-w-4xl text-base sm:text-3xl leading-relaxed text-gray-100">
            Unlike generic tutorials, our platform is built around real-world
            skills, guided learning paths, and project-based courses that
            prepare you for actual roles, not just theory.
          </p>

          {/* Pills */}
          <div className="mb-24 grid grid-cols-2 gap-10 sm:grid-cols-4">
            <div className="h-32 rounded-full bg-white" />
            <div className="h-32 rounded-full bg-white" />
            <div className="h-32 rounded-full bg-white" />
            <div className="h-32 rounded-full bg-white" />
          </div>

          {/* Bottom text */}
          <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-gray-300">
            By the end of each course or learning path, you’ll have practical
            skills, completed projects, and the confidence to apply what you’ve
            learned in real-world scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}
