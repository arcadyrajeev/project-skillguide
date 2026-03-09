import CategorySidebar from "./components/Categories";
import CoursesGrid from "./components/CourseGrid";

export default function CoursesPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-10">
      <div className="flex flex-col mt-20 lg:flex-row gap-10">
        {/* Sidebar */}
        <CategorySidebar />

        {/* Courses */}
        <CoursesGrid />
      </div>
    </div>
  );
}
