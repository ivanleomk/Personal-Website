// import { useRouter } from "next/router";
// import React from "react";
// import { getSinglePost, getSortedPosts } from "../../lib/articles";

import matter from "gray-matter";
import { getAllPostSlugs, getPostdata } from "../../lib/articles";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/layout";
import Link from "next/link";
import PostTitle from "../../components/Post/PostTitle";
import PostCategory from "../../components/Post/PostCategory";
import { components } from "../../components/Layout/BlogLayout";

// const Post = () => {
//   return <div></div>;
// };

// export async function getStaticProps({ params }) {
//   const router = useRouter();
//   const { slug } = router.query;
//   const slugId = slug as string;
//   const post = await getSinglePost(slugId);
//   return {
//     props: { post },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: getSortedPosts().map((post) => {
//       slug: post.slug;
//     }),
//     fallback: false,
//   };
// }

// export default Post;

export default function Post({ source, frontMatter }) {
  const { title, description, categories, date } = frontMatter;
  return (
    <article>
      <Layout title={"Sample"}>
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
                  {" "}
                  <MDXRemote {...source} components={components} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </article>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
