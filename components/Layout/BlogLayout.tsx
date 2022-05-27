import Link from "next/link";
import React from "react";
import Layout from "../layout";
import PostCategory from "../Post/PostCategory";
import PostTitle from "../Post/PostTitle";

import Blockquote from "../../components/Articles/Blockquote";
import Heading from "../../components/Articles/Heading";
import ListContainer from "../../components/Articles/ListContainer";
import ListItem from "../../components/Articles/ListItem";
import Paragraph from "../../components/Articles/Paragraph";
import Table from "../../components/Articles/Table";
import Thead from "../../components/Articles/Thead";
import THeadCell from "../../components/Articles/THeadCell";
import SmartLink from "../SmartLink";
import CodeBlock from "../CodeBlock";

export const components = {
  table: Table,
  thead: Thead,
  th: THeadCell,
  h1: (props) => <Heading depth={1} {...props} />,
  h2: (props) => <Heading depth={2} {...props} />,
  h3: (props) => <Heading depth={3} {...props} />,
  h4: (props) => <Heading depth={4} {...props} />,
  h5: (props) => <Heading depth={5} {...props} />,
  h6: (props) => <Heading depth={6} {...props} />,
  p: Paragraph,
  ol: (props) => <ListContainer ordered={true} {...props} />,
  ul: (props) => <ListContainer ordered={false} {...props} />,
  li: ListItem,
  blockquote: Blockquote,
  a: ({ href, children }) => <SmartLink url={href} link={children} />,
  code: (props) => <CodeBlock {...props} />,
};

type metaProps = {
  categories: string[];
  date: string;
  description: string;
  title: string;
};

type MainProps = {
  meta: metaProps;
  children: any;
};

const BlogLayout = (props: MainProps) => {
  // const { meta } = props;
  // const { title, description, categories, date }: metaProps = meta;

  return <div>p</div>;
};

export default BlogLayout;
