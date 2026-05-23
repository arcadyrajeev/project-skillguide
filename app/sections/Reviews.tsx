import Image from "next/image";
import ReviewCard from "../components/ReviewCard";

export default function Reviews() {
  const reviews = [
    {
      name: "Khaled",
      role: "Frontend Developer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      quote:
        "The guided learning path finally helped me connect concepts end to end.",
    },
    {
      name: "Myra",
      role: "Customer Support Specialist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      quote:
        "I had no technical background, but the courses were structured in a way that made complex ideas feel approachable and practical.",
    },
    {
      name: "Robert",
      role: "Product Designer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
      quote:
        "What stood out was the focus on real-world skills. Every course pushed me to apply what I learned.",
    },
    {
      name: "Cliff",
      role: "Self-taught Developer",
      image:
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop",
      quote:
        "The projects at the end of each module made a huge difference. I gained confidence.",
    },
    {
      name: "Peter",
      role: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1200&auto=format&fit=crop",
      quote:
        "Most platforms teach tools. These courses taught me how to think, make decisions, and solve real problems in my work.",
    },
    {
      name: "Zac",
      role: "Architecture Graduate",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=1200&auto=format&fit=crop",
      quote:
        "The structured paths helped me move from basics to advanced skills without feeling overwhelmed.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_2fr]">
          {/* Left intro */}
          <div>
            {/* Avatars */}
            <div className="mb-8 flex -space-x-4">
              {reviews.slice(0, 4).map((review, index) => (
                <div
                  key={index}
                  className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md"
                >
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <p className="mb-3 body-text text-sm uppercase tracking-[0.25em] text-gray-500">
              Testimonials
            </p>

            <h2 className="heading text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Student
              <br />
              reviews.
            </h2>

            <p className="mt-5 body-text max-w-sm text-base leading-relaxed text-gray-600">
              Thousands of students trust our platform to build creative and
              practical skills that actually translate into real opportunities.
            </p>

            <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
              Explore Courses
              <span className="text-lg">→</span>
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
                avatar={review.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
