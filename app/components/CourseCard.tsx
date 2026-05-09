"use client";

import { Clock3 } from "lucide-react";

type Props = {
  course: any;
};

export default function CourseCard({ course }: Props) {
  return (
    <div className="group overflow-hidden rounded-[32px] bg-white border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={course.thumbnail || "https://placehold.co/600x400"}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5 rounded-full bg-white/20 backdrop-blur-md px-4 py-2 text-xs font-medium text-white">
          Premium Course
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Teacher */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-sm font-bold text-white">
            {course.teacher?.name?.charAt(0)?.toUpperCase()}
          </div>

          <div>
            <p className="text-sm text-gray-500">Instructor</p>

            <h3 className="font-semibold">{course.teacher?.name}</h3>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold leading-tight">{course.title}</h2>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {course.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock3 size={16} />

            <span>Self Paced</span>
          </div>

          <button className="rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}
