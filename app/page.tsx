import Categories from "./sections/Categories";
import Featured from "./sections/Featured";
import Hero from "./sections/Hero";
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
    </div>
  );
}
