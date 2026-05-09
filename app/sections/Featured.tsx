"use client";

import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

export default function Featured() {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch("/api/courses");

        const data = await response.json();

        setCourses(data.courses || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-600">
              Featured Courses
            </p>

            <h2 className="text-5xl font-bold tracking-tight text-gray-900">
              Learn From Experts
            </h2>
          </div>

          <p className="max-w-sm text-sm uppercase tracking-wide text-gray-500">
            A curated list of our top rated and most popular courses.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex h-[300px] items-center justify-center">
            <p className="text-gray-500">Loading courses...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {courses.slice(0, 4).map((course: any) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
