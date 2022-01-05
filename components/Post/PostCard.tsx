import daysToWeeks from "date-fns/daysToWeeks/index";
import Link from "next/link";
import React from "react";
import { PostObject } from "../../types/posts";
import PostCategory from "./PostCategory";

type PostCardProps = {
  Post: PostObject;
  key: string;
};

const PostCard = ({ Post, key }: PostCardProps) => {
  const { title, date, id, categories, description } = Post;

  return (
    <article className="py-4">
      <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline ">
        <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
          {date}
        </p>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6 ">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight cursor-pointer">
                <a
                  className="text-gray-900 dark:text-gray-100"
                  href={`/posts/${id}`}
                >
                  {title}
                </a>
              </h2>
              <div className="flex flex-wrap pt-4">
                {categories.map((item, ind) => (
                  <PostCategory key={ind} category={item} />
                ))}
              </div>
            </div>
            <div className="prose text-gray-500 max-w-none dark:text-gray-400">
              {description}
            </div>
          </div>
          <div className="text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
            <Link href={`/posts/${id}`} aria-label="Read More">
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </article>
    // <li key={id}>
    //   {title}
    //   <br />
    //   {id}
    //   <br />
    //   {date}
    // </li>
  );
};

export default PostCard;
