import React from "react";
import Typewriter from "../components/Typewriter";
import MainButton from "../components/MainButton";
import SecondaryButton from "../components/SecondaryButton";

const Hero = () => {
  return (
    <div
      style={{
        height: "80vh",
      }}
      className="flex flex-col items-center justify-center mt-10"
    >
      <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
        <span className="block text-gray-900">Hi I'm Ivan. I'm a </span>
        <Typewriter
          words={["Problem Solver", "Software Engineer", "Freelance Developer"]}
        />
      </span>

      {/* <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <MainButton text="Hire Me" />
        <SecondaryButton text="Contact Me" />
      </div> */}
    </div>
  );
};

export default Hero;
