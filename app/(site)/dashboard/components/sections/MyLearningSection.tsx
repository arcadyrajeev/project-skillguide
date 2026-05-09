import CourseCard from "@/app/components/CourseCard";

type Props = {
  enrolledCourses: any[];
};

export default function MyLearningSection({ enrolledCourses }: Props) {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-600">
          Student Portal
        </p>

        <h1 className="text-5xl font-bold tracking-tight">My Learning</h1>

        <p className="mt-4 max-w-2xl text-gray-500">
          Continue learning from your enrolled creative courses and build your
          skills through hands-on practice.
        </p>
      </div>

      {/* Empty State */}
      {enrolledCourses.length === 0 && (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[40px] border border-dashed border-black/10 bg-white text-center">
          <h2 className="text-3xl font-bold">No enrolled courses yet</h2>

          <p className="mt-4 max-w-md text-gray-500">
            Explore creative courses and start learning new skills today.
          </p>

          <button
            onClick={() => {
              window.location.href = "/courses";
            }}
            className="mt-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Explore Courses
          </button>
        </div>
      )}

      {/* Courses */}
      {enrolledCourses.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {enrolledCourses.map((course: any) => (
            <CourseCard
              key={course.id}
              course={{
                ...course,

                isEnrolled: true,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
