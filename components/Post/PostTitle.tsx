import { format, parseISO } from "date-fns";
import React from "react";

type postTitleProps = {
  title: string;
  description: string;
  categories: string[];
  date: string;
};

const PostTitle = ({ date, title, description }: postTitleProps) => {
  const dateISO = parseISO(date);
  return (
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1 text-center">
        <time
          dateTime={date}
          className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
        >
          {format(dateISO, "eeee LLLL d,yyyy")}
        </time>
        <div>
          <h1 className="text-3xl pt-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {title}
          </h1>
          <p className="mt-5 text-base text-gray-500">{description}</p>
        </div>
      </div>
    </header>
  );
};

export default PostTitle;
