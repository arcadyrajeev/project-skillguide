"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is this platform for?",
    answer:
      "This platform helps creators turn their expertise into structured online courses and build a global teaching business.",
  },
  {
    question: "Who are the courses for?",
    answer:
      "Courses are designed for learners who want practical skills taught by experts across various fields.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No prior experience is required. Many courses are structured for beginners and gradually move toward advanced topics.",
  },
  {
    question: "How long do I have access to the courses?",
    answer:
      "Once enrolled, you typically receive lifetime access unless otherwise stated by the instructor.",
  },
  {
    question: "How are the courses structured?",
    answer:
      "Courses are broken into modules and lessons with videos, resources, and assignments.",
  },
  {
    question: "What are guided learning paths?",
    answer:
      "Guided paths organize multiple courses into a structured progression so learners can master a subject step by step.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f3f3f3] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl heading font-semibold text-center mb-14">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="divide-y body-text divide-gray-300">
          {faqs.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  {/* Q Icon */}
                  <div className="text-blue-600 font-bold text-lg">Q</div>

                  <span className="text-lg text-gray-800">{faq.question}</span>
                </div>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 mt-4"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden pl-8 text-gray-600">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
