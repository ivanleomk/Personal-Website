import React from "react";
import { AST_NODE } from "../../types/posts";
import PostListItem from "./PostListItem";

type PostListProps = {
  ast: AST_NODE;
};

const PostList = ({ ast }: PostListProps) => {
  if (ast.type !== "list") {
    return null;
  }

  if (ast.ordered) {
    return (
      <ol className="list-decimal pl-4">
        {ast.children.map((item, index) => {
          return <PostListItem ast={item} key={index} />;
        })}
      </ol>
    );
  }
  return (
    <ul className="list-disc pl-4">
      {ast.children.map((item, index) => {
        return <PostListItem ast={item} key={index} />;
      })}
    </ul>
  );
};

export default PostList;
