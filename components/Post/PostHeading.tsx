import React from "react";
import { AST_NODE } from "../../types/posts";
import PostASTParser from "./PostASTParser";

type PostHeadingProps = {
  ast: AST_NODE;
};

const styling = {
  1: "mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",
  2: "mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl",
  3: "mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-xl",
  4: "mt-2 text-lg leading-8 font-extrabold tracking-tight text-gray-900 sm:text-lg",
  5: "mt-2 text-lg leading-8 font-bold tracking-tight text-gray-900 sm:text-md",
  6: "mt-2 text-md leading-8 font-semibold tracking-tight text-gray-900 sm:text-md",
};

const PostHeading = ({ ast }: PostHeadingProps) => {
  if (ast.type !== "heading") {
    return null;
  }

  return (
    <p className={styling[ast.depth]}>
      {ast.children.map((item, index) => (
        <PostASTParser key={`Heading-${ast.depth}-index`} ast={item} />
      ))}
    </p>
  );
};

export default PostHeading;
