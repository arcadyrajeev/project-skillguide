export default function Categories() {
  const categories = [
    "Expertise",
    "Expertise",
    "Expertise",
    "Expertise",
    "Expertise",
  ];

  return (
    <section className="bg-[#f3f3f3] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-16 text-center heading text-4xl font-semibold text-black">
          Categories
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-y-12 body-text gap-x-8 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Circle */}
              <div className="mb-4 aspect-square w-28 sm:w-32 lg:w-36 rounded-full bg-white" />

              {/* Label */}
              <p className="text-sm text-gray-600">{category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
