import Categories from "./sections/Categories";
import FAQSection from "./sections/Faq";
import Featured from "./sections/Featured";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import Teachers from "./sections/Teachers";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen  justify-center  font-serif">
      <Hero />
      <Featured />
      <Teachers />
      <Categories />
      <WhyChooseUs />
      <Reviews />
      <FAQSection />
    </div>
  );
}
