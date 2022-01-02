import React from "react";
import { getSortedPostsData } from "../lib/posts";
import { getCategories } from "../lib/categories";

const Blog = ({ allPostsData, categoryData }) => {
  return (
    <div>
      <h1>Posts</h1>
      <p>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </p>
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const categoryData = getCategories();

  return {
    props: {
      allPostsData,
      categoryData,
    },
  };
}
