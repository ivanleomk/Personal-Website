import React from "react";
import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import PostCard from "../components/Post/PostCard";
import { PostObject } from "../types/posts";

type BlogProps = {
  allPostsData: PostObject[];
  categoryData: string[];
};

const Articles = ({ allPostsData, categoryData }: BlogProps) => {
  console.log(categoryData);
  return (
    <Layout title="Articles">
      <main className="mb-auto divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 py-10 space-y-2 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Welcome to my personal blog where I talk about things that I've
            learnt, read and think about.
          </p>
        </div>
        <div className="py-10">
          {allPostsData.map((PostObject, index) => (
            <PostCard key={`Post-${index}`} Post={PostObject} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const categoryData: string[] = allPostsData
    .map((item) => item.categories)
    .flat();

  return {
    props: {
      allPostsData,
      categoryData: [...Array.from(new Set(categoryData))],
    },
  };
}

export default Articles;
