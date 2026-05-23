import {
  BriefcaseBusiness,
  GraduationCap,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Industry Focused",
      icon: BriefcaseBusiness,
    },
    {
      title: "Expert Mentors",
      icon: GraduationCap,
    },
    {
      title: "Project Based",
      icon: Rocket,
    },
    {
      title: "Trusted Learning",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="bg-[#f3f3f3] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-3 body-text text-sm uppercase tracking-[0.25em] text-gray-500">
            Why Students Choose Us
          </p>

          <h2 className="heading text-4xl font-semibold text-black sm:text-5xl">
            Learn Real Skills,
            <br />
            Not Just Theory
          </h2>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-[2.5rem] bg-[#151515] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Top */}
          <div className="mb-20 max-w-5xl">
            <p className="body-text text-lg leading-relaxed text-gray-200 sm:text-2xl lg:text-3xl">
              Unlike generic tutorials, our platform is built around real-world
              creative skills, guided learning paths, and project-based courses
              that prepare students for actual careers, not passive watching.
            </p>
          </div>

          {/* Pills */}
          <div className="mb-20 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <div
                  key={index}
                  className="group rounded-full border border-white/10 bg-violet-900 px-5 py-5 backdrop-blur-sm transition hover:bg-white hover:text-black"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black transition group-hover:bg-black group-hover:text-white">
                      <Icon size={24} strokeWidth={2} />
                    </div>

                    <p className="body-text text-sm font-medium sm:text-base">
                      {point.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="max-w-3xl">
            <p className="body-text text-sm leading-relaxed text-gray-400 sm:text-base">
              By the end of each course or learning path, students build
              practical experience, complete portfolio-ready projects, and gain
              the confidence to apply their skills in real-world creative work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
