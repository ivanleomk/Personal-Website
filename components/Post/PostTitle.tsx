import React from "react";

type postTitleProps = {
  title: string;
  description: string;
};

const PostTitle = ({ title, description }: postTitleProps) => {
  return (
    <div className="text-lg max-w-prose mx-auto">
      <h1>
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </span>
      </h1>
      <div className="flex flex-col items-center justify-center">
        <p className="mt-5 max-w-md text-base text-gray-500">{description}</p>
        <hr className="border-blue-400 max-w-xs mt-5 h-4 w-full" />
      </div>
    </div>
  );
};

export default PostTitle;
