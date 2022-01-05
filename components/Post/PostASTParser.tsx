import Link from "next/link";
import React from "react";
import { AST_NODE } from "../../types/posts";
import SmartLink from "../SmartLink";
import PostCodeChunk from "./PostCodeChunk";
import PostHeading from "./PostHeading";
import PostList from "./PostList";

type PostASTParserProps = {
  ast: AST_NODE;
};

// TODO
// 1. Add support for bold/italic/underlined text
// 2. Add support for tables. I don't have a current implementation for this

const PostASTParser = ({ ast }: PostASTParserProps) => {
  switch (ast.type) {
    case "heading":
      return <PostHeading ast={ast} />;
    case "text":
      return <span>{ast.value}</span>;
    case "paragraph":
      return (
        <p className="pt-4">
          {ast.children.map((item, index) => (
            <PostASTParser key={`paragraph-${index}`} ast={item} />
          ))}
        </p>
      );
    case "link":
      const children = ast.children.map((item, index) => (
        <PostASTParser key={`Link-${index}`} ast={item} />
      ));
      return (
        <span className="text-base font-medium rounded-md text-indigo-600 underline py-2 hover:bg-indigo-700">
          <SmartLink url={ast.url} link={children} />
        </span>
      );
    case "blockquote":
      return (
        <>
          <blockquote className="relative ">
            <div className="rounded-t-lg px-6 py-2 sm:px-10 sm:pt-10 sm:pb-8">
              <div className="relative text-lg text-gray-700 font-medium mt-8">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative">
                  {ast.children.map((item, index) => (
                    <PostASTParser key={`paragraph-${index}`} ast={item} />
                  ))}
                </p>
              </div>
            </div>
          </blockquote>
        </>
      );
    case "code":
      return <PostCodeChunk ast={ast} />;
    case "list":
      return <PostList ast={ast} />;
    default:
      return <>Parsed</>;
  }
};

export default PostASTParser;
