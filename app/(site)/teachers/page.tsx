import Teachers from "@/app/sections/Teachers";
import React from "react";
import Hero from "./components/Teachers-hero";
import JourneySection from "./components/JourneySection";
import FAQSection from "@/app/sections/Faq";
import Reviews from "@/app/sections/Reviews";

const teachers = () => {
  return (
    <div>
      <Hero />
      <Teachers />
      <JourneySection />
      <Reviews />
      <FAQSection />
    </div>
  );
};

export default teachers;
