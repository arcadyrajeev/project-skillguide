import { ArrowRight, BookOpen, DollarSign, Upload } from "lucide-react";

export default function JourneySection() {
  const steps = [
    {
      number: "01",
      title: "Plan Your Curriculum",
      description:
        "Structure your lessons, define outcomes, and create a clear learning path students can actually follow.",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Record & Upload",
      description:
        "Upload videos, resources, and projects with a simple creator workflow built for speed and consistency.",
      icon: Upload,
    },
    {
      number: "03",
      title: "Launch & Earn",
      description:
        "Publish your course, grow your audience, and turn your expertise into recurring income.",
      icon: DollarSign,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] px-6 py-28">
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 body-text text-sm uppercase tracking-[0.25em] text-gray-500">
            Your Creator Journey
          </p>

          <h2 className="heading text-4xl font-semibold leading-tight text-black sm:text-5xl lg:text-6xl">
            From knowledge
            <br />
            to income.
          </h2>

          <p className="body-text mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            A streamlined teaching workflow designed to help creators launch
            faster, grow communities, and build sustainable revenue through
            education.
          </p>
        </div>

        {/* Journey Path */}
        <div className="relative">
          {/* Desktop path */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-200 lg:block" />

          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className={`relative ${
                    index === 1 ? "lg:translate-y-16" : ""
                  }`}
                >
                  {/* Connector dot */}
                  <div className="absolute left-1/2 top-0 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#f3f3f3] bg-indigo-600 lg:block" />

                  {/* Card */}
                  <div className="group relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_10px_50px_rgba(0,0,0,0.05)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                    {/* Glow */}
                    <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition group-hover:bg-indigo-500/20" />

                    {/* Step Number */}
                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white">
                        <Icon size={28} />
                      </div>

                      <span className="heading text-5xl font-semibold text-gray-100">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="heading text-2xl font-semibold text-black">
                        {step.title}
                      </h3>

                      <p className="body-text mt-4 text-base leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Visual */}
                    <div className="mt-10 flex items-center justify-between rounded-2xl bg-[#f7f7f7] px-5 py-4">
                      <p className="body-text text-sm font-medium text-gray-700">
                        Step {step.number}
                      </p>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-24 flex flex-col items-center justify-center text-center">
            <div className="mb-8 rounded-full border border-black/10 bg-white px-6 py-3 shadow-sm">
              <p className="body-text text-sm text-gray-600">
                Start building your creator business today
              </p>
            </div>

            <button className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-orange-200/40 transition hover:scale-[1.02] hover:shadow-xl">
              Start Your Teaching Journey
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
