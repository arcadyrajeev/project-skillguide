import Image from "next/image";

export default function Categories() {
  const categories = [
    {
      title: "Photography",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Pottery",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Painting",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Jewelry Making",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Digital Art",
      image:
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Embroidery",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#f3f3f3] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 body-text text-sm uppercase tracking-[0.25em] text-gray-500">
              Explore Skills
            </p>

            <h2 className="heading text-4xl font-semibold text-black sm:text-5xl">
              Top Categories
            </h2>
          </div>

          <button className="hidden rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-black hover:text-white md:block">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="relative overflow-hidden rounded-[2rem] bg-white">
                <div className="aspect-[1/1.15] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="body-text text-base font-medium text-white">
                    {category.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
