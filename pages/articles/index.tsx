import { MDXProvider } from "@mdx-js/react";
import Image from "next/image";
import Link from "next/link";
import Blockquote from "../../components/Articles/Blockquote";
import Heading from "../../components/Articles/Heading";
import ListContainer from "../../components/Articles/ListContainer";
import ListItem from "../../components/Articles/ListItem";
import Paragraph from "../../components/Articles/Paragraph";
import Table from "../../components/Articles/Table";
import Thead from "../../components/Articles/Thead";
import THeadCell from "../../components/Articles/THeadCell";
import Layout from "../../components/layout";
import PostCategory from "../../components/Post/PostCategory";
import PostTitle from "../../components/Post/PostTitle";

const components = {
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
};

type metaProps = {
  categories: string[];
  date: string;
  description: string;
  title: string;
};

const Post = (props) => {
  const { meta, children } = props;
  const { categories, date, description, title }: metaProps = meta;

  return (
    <MDXProvider components={components}>
      <Layout title={title}>
        <div>
          <div className="relative  bg-white overflow-hidden">
            <div className="relative px-4 sm:px-6 lg:px-8">
              <PostTitle
                title={title}
                description={description}
                categories={categories}
                date={date}
              />
              <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 mt-10">
                <div>
                  <div className="prose prose-lg">Tags</div>
                  {categories.map((item, index) => (
                    <PostCategory key={index} category={item} />
                  ))}
                  <p className="mt-10 cursor-pointer text-blue-400">
                    <Link href="/articles">← Back to the blog</Link>
                  </p>
                </div>
                <div className="col-span-3">
                  <main {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </MDXProvider>
  );
};

export default Post;
