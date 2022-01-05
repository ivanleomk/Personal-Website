import React from "react";
import { AST_NODE } from "../../types/posts";
import PostASTParser from "./PostASTParser";

type PostListItemProps = {
  ast: AST_NODE;
};

const PostListItem = ({ ast }) => {
  return (
    <li className="my-1">
      {ast.children.map((item, index) => {
        return <PostASTParser key={index} ast={item} />;
      })}
    </li>
  );
};

export default PostListItem;
