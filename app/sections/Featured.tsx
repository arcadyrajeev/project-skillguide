import CourseCard from "../components/CourseCard";

export default function Featured() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex items-start justify-between gap-6">
          <h2 className="text-4xl font-bold heading text-gray-900">
            Featured Courses
          </h2>
          <p className="max-w-xs text-sm uppercase body-text tracking-wide text-gray-600">
            A curated list of our top rated and most popular courses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <CourseCard
            title="Course Title | Course Name"
            creator="Creator’s name"
            duration="1hr 30minutes"
            views="30,345 views"
            likes="3k likes"
          />
          <CourseCard
            title="Course Title | Course Name"
            creator="Creator’s name"
            duration="1hr 30minutes"
            views="30,345 views"
            likes="3k likes"
          />
          <CourseCard
            title="Course Title | Course Name"
            creator="Creator’s name"
            duration="1hr 30minutes"
            views="30,345 views"
            likes="3k likes"
          />
          <CourseCard
            title="Course Title | Course Name"
            creator="Creator’s name"
            duration="1hr 30minutes"
            views="30,345 views"
            likes="3k likes"
          />
        </div>
      </div>
    </section>
  );
}
