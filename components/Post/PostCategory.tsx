import React from "react";

type PostCategoryProps = {
  category: string;
  setCategory: (string) => void;
};

const PostCategory = ({ category, setCategory }: PostCategoryProps) => {
  return (
    <p
      className="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
      onClick={() => setCategory(category)}
    >
      {category}
    </p>
  );
};

export default PostCategory;
