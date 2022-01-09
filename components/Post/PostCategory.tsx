import { useRouter } from "next/router";
import React from "react";

type PostCategoryProps = {
  category: string;
};

const PostCategory = ({ category }: PostCategoryProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/articles/category/${category}`);
  };
  return (
    <p
      className="mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
      onClick={() => handleClick()}
    >
      {category}
    </p>
  );
};

export default PostCategory;
