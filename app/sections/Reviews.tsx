import ReviewCard from "../components/ReviewCard";

export default function Reviews() {
  const reviews = [
    {
      name: "Khaled",
      role: "Frontend Developer",
      quote:
        "The guided learning path finally helped me connect concepts end to end.",
    },
    {
      name: "Myra",
      role: "Customer Support Specialist",
      quote:
        "I had no technical background, but the courses were structured in a way that made complex ideas feel approachable and practical.",
    },
    {
      name: "Robert",
      role: "Product Designer",
      quote:
        "What stood out was the focus on real-world skills. Every course pushed me to apply what I learned.",
    },
    {
      name: "Cliff",
      role: "Self-taught Developer",
      quote:
        "The projects at the end of each module made a huge difference. I gained confidence.",
    },
    {
      name: "Peter",
      role: "UX Designer",
      quote:
        "Most platforms teach tools. These courses taught me how to think, make decisions, and solve real problems in my work.",
    },
    {
      name: "Zac",
      role: "Architecture Graduate",
      quote:
        "The structured paths helped me move from basics to advanced skills without feeling overwhelmed.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr]">
          {/* Left intro */}
          <div>
            <div className="mb-6 flex -space-x-2">
              <div className="h-10 w-10 rounded-full bg-gray-300 border-2 border-white" />
              <div className="h-10 w-10 rounded-full bg-gray-300 border-2 border-white" />
              <div className="h-10 w-10 rounded-full bg-gray-300 border-2 border-white" />
              <div className="h-10 w-10 rounded-full bg-gray-300 border-2 border-white" />
            </div>

            <h2 className="text-5xl heading font-bold text-gray-900 leading-tight">
              Student <br /> reviews.
            </h2>

            <p className="mt-4 body-text max-w-xs text-gray-600">
              We're loved by thousands because we're simple.
            </p>

            <button className="mt-8 inline-flex cta-text items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-500">
              Try it yourself →
            </button>
          </div>

          {/* Reviews grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                name={review.name}
                role={review.role}
                quote={review.quote}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
