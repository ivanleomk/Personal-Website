import React from "react";
import { AST_NODE } from "../../types/posts";
import PostTOCItem from "./PostTOCItem";

type PostTOCProps = {
  children: AST_NODE[];
};

const PostTOC = ({ children }: PostTOCProps) => {
  const headings = children.filter((item) => item.type === "heading");
  return (
    <div className="mx-2">
      {headings.map((item) => (
        <PostTOCItem item={item} />
      ))}
    </div>
  );
};

export default PostTOC;
