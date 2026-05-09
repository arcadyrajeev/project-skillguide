"use client";

import { useEffect, useState } from "react";

import CategorySidebar from "./components/Categories";
import CoursesGrid from "./components/CourseGrid";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");

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
    <div className="min-h-screen bg-[#f5f5f7] mt-26">
      <div className="max-w-[1500px] mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <CategorySidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Grid */}
          <CoursesGrid courses={courses} loading={loading} />
        </div>
      </div>
    </div>
  );
}
