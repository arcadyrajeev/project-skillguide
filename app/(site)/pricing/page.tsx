import React from "react";
import PricingSection from "./components/Pricing";
import MonetizeCTA from "./components/CTAHero";
import FAQSection from "@/app/sections/Faq";

const page = () => {
  return (
    <div>
      <PricingSection />
      <MonetizeCTA />
      <FAQSection />
    </div>
  );
};

export default page;
