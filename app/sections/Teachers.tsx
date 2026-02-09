export default function Teachers() {
  const teachers = [
    { name: "Teacher’s name", expertise: "Expertise" },
    { name: "Teacher’s name", expertise: "Expertise" },
    { name: "Teacher’s name", expertise: "Expertise" },
    { name: "Teacher’s name", expertise: "Expertise" },
  ];

  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <h2 className="mb-12 text-4xl heading font-bold text-black">
          Our Top Teachers
        </h2>

        {/* Cards */}
        <div className="flex gap-8 overflow-x-auto pb-4 body-text sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <div key={index} className="min-w-[260px] sm:min-w-0">
              {/* Image placeholder */}
              <div className="mb-4 h-64 w-full rounded-3xl bg-gray-300" />

              {/* Text */}
              <p className="text-base font-medium text-black">{teacher.name}</p>
              <p className="text-sm text-gray-500">{teacher.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
