import React from "react";

type PostCategoryProps = {
  category: string;
};

const PostCategory = ({ category }: PostCategoryProps) => {
  return (
    <a
      className="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400"
      href={`/categories/${category}`}
    >
      {category}
    </a>
  );
};

export default PostCategory;
