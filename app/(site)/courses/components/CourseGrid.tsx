import CourseCard from "@/app/components/CourseCard";

const courses = [
  {
    title: "Course Title | Course Name",
    creator: "Creator's name",
    duration: "1hr 30minutes",
    views: "30,345",
    likes: "3k",
  },
  {
    title: "Course Title | Course Name",
    creator: "Creator's name",
    duration: "1hr 30minutes",
    views: "30,345",
    likes: "3k",
  },
  {
    title: "Course Title | Course Name",
    creator: "Creator's name",
    duration: "1hr 30minutes",
    views: "30,345",
    likes: "3k",
  },
  {
    title: "Course Title | Course Name",
    creator: "Creator's name",
    duration: "1hr 30minutes",
    views: "30,345",
    likes: "3k",
  },
  {
    title: "Course Title | Course Name",
    creator: "Creator's name",
    duration: "1hr 30minutes",
    views: "30,345",
    likes: "3k",
  },
  {
    title: "Course Title | Course Name",
    creator: "Creator's name",
    duration: "1hr 30minutes",
    views: "30,345",
    likes: "3k",
  },
];

export default function CoursesGrid() {
  return (
    <div className="flex-1">
      <div className="mb-6 text-sm text-gray-500">
        Courses <span className="mx-2">›</span> Art & Craft
      </div>

      <div className="rounded-2xl border border-gray-200 p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard
              key={i}
              title={course.title}
              creator={course.creator}
              duration={course.duration}
              views={course.views}
              likes={course.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
