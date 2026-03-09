export default function JourneySection() {
  return (
    <section className="bg-[#f3f3f3] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-16">
          Your Journey to the Head of the Class
        </h2>

        <div className="relative">
          {/* Curved path (hidden on small screens) */}

          {/* Steps */}
          <div className="space-y-16 md:space-y-0">
            {/* Step 1 */}
            <div className=" md:left-0 md:top-16 max-w-xs">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700">
                  Plan Your Curriculum
                </h3>
                <div className="w-full h-[30vh]"></div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Use our “Course Outline” template to structure your lessons and
                define your learning outcomes.
              </p>
            </div>

            {/* Step 2 */}
            <div className=" md:right-0 md:top-[360px] max-w-xs ml-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700">
                  Record & Upload
                </h3>
                <div className="w-full h-[30vh]"></div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Film your content (even a smartphone works) and upload it to our
                secure servers.
              </p>
            </div>

            {/* Step 3 */}
            <div className=" md:left-0 md:bottom-[160px] max-w-xs">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700">
                  Launch & Earn
                </h3>
                <div className="w-full h-[30vh]"></div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                Set your price, hit publish, and watch your community grow.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-24">
            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium shadow-md hover:scale-105 transition">
              Start your Teaching Journey →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
