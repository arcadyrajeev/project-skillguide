export default function Hero() {
  return (
    <section className="w-full bg-[#f3f3f3] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mt-10 text-black">
            Turn Your Passion Into
            <br />
            Progress: Join Our
            <br />
            <span className="text-indigo-600">Teaching Community</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
            Whether you're a coding wizard, a marketing guru, or a master of the
            fine arts, our platform gives you the tools to build a global
            classroom and a lasting legacy.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium shadow-lg hover:scale-105 transition">
              Start your Teaching Journey
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center items-center relative">
          <div className="relative w-[260px] h-[220px]">
            {/* Passion box */}
            <div className="absolute top-0 right-0 bg-gray-700 text-white w-32 h-32 rounded-xl flex items-center justify-center text-lg font-semibold shadow-lg">
              Passion
            </div>

            {/* Arrow */}
            <div className="absolute top-14 left-20 text-4xl rotate-45">↘</div>

            {/* Progress box */}
            <div className="absolute bottom-0 left-0 bg-black text-white w-36 h-36 rounded-xl flex flex-col items-center justify-center text-lg font-semibold shadow-xl">
              <span>Progress</span>
              <span className="text-xl mt-2">$$$</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
