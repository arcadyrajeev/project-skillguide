import Image from "next/image";

export default function Teachers() {
  const teachers = [
    {
      name: "Sophia Carter",
      expertise: "Photography",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Daniel Ross",
      expertise: "Digital Art",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Emily Stone",
      expertise: "Pottery & Ceramics",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "James Walker",
      expertise: "Painting",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 body-text text-sm uppercase tracking-[0.25em] text-gray-500">
              Learn From Experts
            </p>

            <h2 className="heading text-4xl font-semibold text-black sm:text-5xl">
              Our Top Teachers
            </h2>
          </div>

          <button className="hidden rounded-full border border-black/10 bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 md:block">
            View All
          </button>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <div key={index} className="group min-w-[280px] sm:min-w-0">
              {/* Image */}
              <div className="relative mb-5 overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[0.82] overflow-hidden">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Text */}
              <div>
                <p className="body-text text-lg font-semibold text-black">
                  {teacher.name}
                </p>

                <p className="body-text mt-1 text-sm text-gray-500">
                  {teacher.expertise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
