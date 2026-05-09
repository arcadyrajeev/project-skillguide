import CourseCard from "@/app/components/CourseCard";

type Props = {
  courses: any[];
  loading: boolean;
};

export default function CoursesGrid({ courses, loading }: Props) {
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        Loading courses...
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Top Bar */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Showing all courses</p>

          <h2 className="mt-1 text-3xl font-bold">{courses.length} Courses</h2>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium hover:bg-gray-50">
            Latest
          </button>

          <button className="rounded-full border border-black/10 bg-white px-5 py-2 text-sm font-medium hover:bg-gray-50">
            Popular
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {courses.map((course: any) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
