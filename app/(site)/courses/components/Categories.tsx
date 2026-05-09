"use client";

type Props = {
  selectedCategory: string;

  setSelectedCategory: (category: string) => void;
};

const categories = [
  "All",
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Artificial Intelligence",
  "Photography",
  "Music",
  "Writing",
  "Animation",
  "UI UX",
  "Productivity",
];

export default function CategorySidebar({
  selectedCategory,
  setSelectedCategory,
}: Props) {
  return (
    <aside className="w-full lg:w-[280px] lg:sticky lg:top-28 h-fit">
      <div className="rounded-[32px] bg-white border border-black/5 shadow-sm p-6">
        <h3 className="text-lg font-bold mb-6">Categories</h3>

        <div className="space-y-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full cursor-pointer rounded-2xl px-5 py-4 text-left text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
