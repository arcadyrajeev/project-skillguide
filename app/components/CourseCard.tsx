import { Clock, Play, ThumbsUp } from "lucide-react";

interface CourseCardProps {
  title: string;
  creator: string;
  duration: string;
  views: string;
  likes: string;
}

export default function CourseCard({
  title,
  creator,
  duration,
  views,
  likes,
}: CourseCardProps) {
  return (
    <div className="w-full rounded-2xl bg-white p-3 sm:p-4 body-text shadow-sm">
      {/* Thumbnail */}
      <div className="mb-3 sm:mb-4 aspect-video w-full rounded-xl bg-gray-300" />

      {/* Meta */}
      <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.65rem] sm:text-xs text-gray-700">
        <div className="flex items-center gap-1">
          <Clock size={14} />
          {duration}
        </div>

        <div className="flex items-center gap-1">
          <Play size={14} />
          {views}
        </div>

        <div className="flex items-center gap-1">
          <ThumbsUp size={14} />
          {likes}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">
        {title}
      </h3>
      <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
        by {creator}
      </p>

      {/* CTA */}
      <button className="w-full rounded-xl bg-indigo-600 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-indigo-500">
        Start This Course
      </button>
    </div>
  );
}
