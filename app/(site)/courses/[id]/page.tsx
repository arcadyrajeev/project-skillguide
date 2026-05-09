import { prisma } from "@/lib/prisma";

type Props = {
  params: {
    id: string;
  };
};

export default async function CoursePage({ params }: Props) {
  const course = await prisma.course.findUnique({
    where: {
      id: params.id,
    },

    include: {
      teacher: true,
    },
  });

  if (!course) {
    return (
      <div className="mt-40 text-center text-2xl font-bold">
        Course not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] px-6 py-12">
      <div className="mx-auto mt-24 max-w-6xl">
        {/* Hero */}
        <div className="overflow-hidden rounded-[40px] bg-white shadow-sm">
          <img
            src={course.thumbnail || "https://placehold.co/1200x600"}
            alt={course.title}
            className="h-[450px] w-full object-cover"
          />

          <div className="p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-600">
              Creative Course
            </p>

            <h1 className="text-6xl font-bold tracking-tight">
              {course.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-500">
              {course.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-xl font-bold text-white">
                {course.teacher.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="text-sm text-gray-500">Instructor</p>

                <h3 className="text-lg font-semibold">{course.teacher.name}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="mt-10 overflow-hidden rounded-[40px] bg-black shadow-xl">
          <video controls className="w-full" src={course.videoUrl || ""} />
        </div>
      </div>
    </div>
  );
}
