import Image from "next/image";
import React from "react";
import SmartLink from "./SmartLink";

const AboutMe = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="flex flex-col items-center justify-content">
        <div className="max-w-lg">
          <h1 className="text-lg font-bold">My Short Bio</h1>
          <p>
            Hi I'm Ivan. I do computer science at Yale-NUS and I'm a software
            engineer. I'm fascinated by the intersection of technology and art,
            writing, armchair philosophy and good conversation.
          </p>
          <p className="mt-4">
            Feel free to
            <a
              className="px-1 text-indigo-600"
              href="https://twitter.com/ivanleomk"
            >
              ping
            </a>{" "}
            me @ivanleomk on twitter. I'm trying to be active there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
