import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

type TypewriterProps = {
  words: string[];
};

const TypewriterContainer = ({ words }: TypewriterProps) => {
  return (
    <div className="text-indigo-600">
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          words.forEach((item) => {
            typewriter.typeString(item).start().deleteAll();
          });
        }}
      />
    </div>
  );
};

export default TypewriterContainer;
