import { ArrowUpRight, DollarSign, Play, Sparkles, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-16 lg:py-32">
      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={16} className="text-indigo-600" />

            <span className="body-text text-sm font-medium text-gray-700">
              Build your creator business
            </span>
          </div>

          {/* Heading */}
          <h1 className="heading text-5xl font-semibold leading-[1.05] tracking-tight text-black sm:text-6xl lg:text-7xl">
            Turn your
            <br />
            passion into
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-orange-500 bg-clip-text text-transparent">
              income.
            </span>
          </h1>

          {/* Paragraph */}
          <p className="body-text mt-8 max-w-xl text-lg leading-relaxed text-gray-600">
            Teach what you know, build an audience, and create sustainable
            earnings through structured courses, live sessions, and project-led
            learning experiences.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-800">
              Start Teaching
              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            <button className="inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-medium text-black transition hover:bg-neutral-100">
              <Play size={16} fill="black" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10">
            <div>
              <p className="heading text-3xl font-semibold text-black">12K+</p>

              <p className="body-text mt-1 text-sm text-gray-500">
                Active students
              </p>
            </div>

            <div>
              <p className="heading text-3xl font-semibold text-black">
                $2.4M+
              </p>

              <p className="body-text mt-1 text-sm text-gray-500">
                Creator earnings
              </p>
            </div>

            <div>
              <p className="heading text-3xl font-semibold text-black">150+</p>

              <p className="body-text mt-1 text-sm text-gray-500">
                Expert teachers
              </p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex items-center justify-center">
          {/* Main Card */}
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            {/* Top Creator Card */}
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-500 p-6 text-white">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <Users size={22} />
                  </div>

                  <div>
                    <p className="body-text text-sm text-white/70">
                      Creative Mentor
                    </p>

                    <p className="body-text font-medium">Sarah Williams</p>
                  </div>
                </div>

                <div className="rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                  Live
                </div>
              </div>

              <h3 className="heading text-3xl font-semibold leading-tight">
                Photography
                <br />
                Masterclass
              </h3>

              <div className="mt-8 flex items-center gap-6">
                <div>
                  <p className="text-2xl font-semibold">8.2K</p>

                  <p className="body-text text-sm text-white/70">Students</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">$48K</p>

                  <p className="body-text text-sm text-white/70">Revenue</p>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-10 bottom-16 rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <DollarSign size={24} className="text-green-600" />
                </div>

                <div>
                  <p className="body-text text-sm text-gray-500">
                    Monthly Earnings
                  </p>

                  <p className="heading text-2xl font-semibold text-black">
                    +$12,450
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 top-10 rounded-[1.5rem] border border-black/5 bg-black p-5 text-white shadow-2xl">
              <p className="body-text text-sm text-white/60">Student Growth</p>

              <p className="heading mt-2 text-3xl font-semibold">+240%</p>
            </div>

            {/* Bottom Transformation */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#f5f5f5] p-4">
                <p className="body-text text-sm text-gray-500">Passion</p>

                <p className="mt-2 text-lg font-semibold text-black">Skill</p>
              </div>

              <div className="rounded-2xl bg-[#f5f5f5] p-4">
                <p className="body-text text-sm text-gray-500">Audience</p>

                <p className="mt-2 text-lg font-semibold text-black">Growth</p>
              </div>

              <div className="rounded-2xl bg-black p-4 text-white">
                <p className="body-text text-sm text-white/60">Result</p>

                <p className="mt-2 text-lg font-semibold">Earnings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
