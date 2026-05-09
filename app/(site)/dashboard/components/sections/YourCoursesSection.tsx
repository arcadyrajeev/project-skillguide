import Link from "next/link";

import { BookOpen, Eye, PlayCircle } from "lucide-react";

type Props = {
  createdCourses: any[];
};

export default function YourCoursesSection({ createdCourses }: Props) {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-600">
          Teacher Workspace
        </p>

        <h1 className="text-5xl font-bold tracking-tight">Your Courses</h1>

        <p className="mt-4 max-w-2xl text-gray-500">
          Manage your published courses, track engagement, and continue growing
          your creative teaching library.
        </p>
      </div>

      {/* Empty State */}
      {createdCourses.length === 0 && (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[40px] border border-dashed border-black/10 bg-white text-center">
          <h2 className="text-3xl font-bold">No courses published yet</h2>

          <p className="mt-4 max-w-md text-gray-500">
            Start sharing your creative knowledge by publishing your first
            course.
          </p>

          <Link
            href="/create-course"
            className="mt-8 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Create Course
          </Link>
        </div>
      )}

      {/* Courses */}
      {createdCourses.length > 0 && (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          {createdCourses.map((course: any) => (
            <div
              key={course.id}
              className="group overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Thumbnail */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={course.thumbnail || "https://placehold.co/1200x600"}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Published Badge */}
                <div className="absolute left-6 top-6 rounded-full bg-green-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
                  Published
                </div>

                {/* Course Stats */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md">
                    <BookOpen size={16} />

                    <span>Course</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-md">
                    <PlayCircle size={16} />

                    <span>Video</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h2 className="line-clamp-2 text-3xl font-bold leading-tight">
                  {course.title}
                </h2>

                {/* Description */}
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500">
                  {course.description}
                </p>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between">
                  {/* Left */}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Eye size={16} />

                    <span>Published Course</span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/courses/${course.id}`}
                      className="cursor-pointer rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      View Course
                    </Link>

                    <Link
                      href={`/courses/${course.id}`}
                      className="cursor-pointer rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      Manage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
