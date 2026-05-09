type Props = {
  enrolledCourses: any[];
};

export default function MyLearningSection({ enrolledCourses }: Props) {
  return (
    <div className="flex-1">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-600 mb-3">
          Student Portal
        </p>

        <h1 className="text-5xl font-bold tracking-tight">My Learning</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {enrolledCourses.map((course: any) => (
          <div
            key={course.id}
            className="rounded-[32px] overflow-hidden bg-white border border-black/5 shadow-sm"
          >
            <img
              src={course.thumbnail || "https://placehold.co/600x400"}
              alt={course.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">{course.title}</h2>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {course.description}
              </p>

              <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-5 py-3 text-sm font-semibold text-white">
                Continue Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
