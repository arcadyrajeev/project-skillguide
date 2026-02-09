import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full flex px-4 lg:px-16">
      <div className=" flex flex-col w-full min-h-[90vh] bg-[#1B1B1B] rounded-b-[3rem] pt-[9rem] px-6 lg:px-14">
        <h1 className="text-neutral-300 heading text-3xl lg:text-[4rem] max-w-6xl leading-[1.2]">
          <span className=" bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">
            Boost your &quot;Passion & Creativity&quot; <br />{" "}
          </span>
          with Guided Learning Paths
        </h1>
        <div className="w-full  flex flex-col lg:flex-row justify-between gap-12 pt-12 pb-10 lg:pb-0">
          <div className="flex items-center flex-col gap-2">
            <div className="flex group cursor-pointer relative overflow-hidden items-center mt-auto bg-blue-700 w-full lg:w-100 h-16 lg:h-20 rounded-full px-8">
              {" "}
              <div className="rounded-full w-5 h-5 bg-white"></div>{" "}
              <h2 className=" text-lg lg:text-xl ml-4 lg:ml-10 cta-text text-white">
                View All Learning Paths
              </h2>
              <div className="absolute top-0 left-50 w-[80%]  h-50 bg-gradient-to-b from-white/50 to-white/0 rounded-full group-hover:-translate-x-5 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out"></div>
            </div>
            <p className="text-md ml-0 body-text text-neutral-300">
              Upskill yourself with our best coaches
            </p>
          </div>{" "}
          <Image
            src={"/images/hero-image.svg"}
            alt="guided path image"
            height={300}
            width={400}
            className="w-full lg:w-[30vw] "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
