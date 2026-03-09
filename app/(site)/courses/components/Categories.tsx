"use client";

const categories = [
  "Art & Craft",
  "Illustration",
  "Craft",
  "Marketing & Business",
  "Photography & Video",
  "Design",
  "3D & Animation",
  "Architecture & Spaces",
  "Writing",
  "Fashion",
  "Web & App Design",
  "Calligraphy & Typography",
  "Music & Audio",
  "Culinary",
  "Artificial Intelligence",
  "Wellness",
  "How to become",
];

export default function CategorySidebar() {
  return (
    <aside className="w-full lg:w-[260px] lg:border-r lg:pr-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-4">Categories</h3>

      <ul className="space-y-4">
        {categories.map((cat, i) => (
          <li
            key={i}
            className={`text-sm cursor-pointer hover:text-blue-600 ${
              i === 0 ? "text-blue-600 font-medium" : "text-gray-600"
            }`}
          >
            {cat}

            {i === 0 && (
              <div className="h-[2px] w-20 bg-blue-600 mt-1 rounded"></div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
