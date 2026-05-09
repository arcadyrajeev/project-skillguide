"use client";

import { Clock3 } from "lucide-react";

import { useState } from "react";

type Props = {
  course: any;
};

export default function CourseCard({ course }: Props) {
  const [loading, setLoading] = useState(false);

  async function handleEnroll() {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      // Not logged in
      if (!token) {
        alert("Please login first");

        window.location.href = "/login";

        return;
      }

      const response = await fetch("/api/courses/enroll", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify({
          courseId: course.id,
        }),
      });

      const data = await response.json();

      // Error
      if (!data.success) {
        alert(data.message);

        return;
      }

      // Success
      alert("Successfully enrolled");

      // Redirect to course page
      window.location.href = `/courses/${course.id}`;
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="group overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={course.thumbnail || "https://placehold.co/600x400"}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Badge */}
        <div className="absolute bottom-5 left-5 rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
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
        <h2 className="line-clamp-2 text-2xl font-bold leading-tight">
          {course.title}
        </h2>

        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-500">
          {course.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock3 size={16} />

            <span>Self Paced</span>
          </div>

          {/* Enroll */}
          <button
            onClick={handleEnroll}
            disabled={loading}
            className="rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 px-5 py-2 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Enrolling..." : "Enroll"}
          </button>
        </div>
      </div>
    </div>
  );
}
