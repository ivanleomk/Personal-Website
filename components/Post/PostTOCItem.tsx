import React from "react";
import { AST_NODE } from "../../types/posts";

type PostTOCItemProps = {
  item: AST_NODE;
};

const spacing = ["px-2", "px-6", "px-10", "px-14", "px-20", "px-24"];

// TODO
// 1. Add suppport for nested lists by finding an algorithm which compresses these lists
// 2. Add in support for click navigation

const PostTOCItem = ({ item }: PostTOCItemProps) => {
  console.log(item);
  if (item.type !== "heading") {
    return null;
  }

  if (item.children[0].type !== "text") {
    return null;
  }

  return (
    <div className={`my-2 text-lg ${spacing[item.depth - 1]}`}>
      {item.children[0].value}
    </div>
  );
};

export default PostTOCItem;
