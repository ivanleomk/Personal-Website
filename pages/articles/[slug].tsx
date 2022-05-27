import matter from "gray-matter";
import { getAllPostSlugs, getPostdata } from "../../lib/articles";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/layout";
import Link from "next/link";
import PostTitle from "../../components/Post/PostTitle";
import PostCategory from "../../components/Post/PostCategory";
import { components } from "../../components/Layout/BlogLayout";
import { useEffect } from "react";
import { useRouter } from "next/router";

// TODO: Extract routes into a config file so that they're easily updated

export default function Post({ source, frontMatter }) {
  const { title, description, categories, date, display } = frontMatter;
  const router = useRouter();

  useEffect(() => {
    if (!display) {
      router.push("/");
    }
  }, []);

  if (!display) {
    return null;
  }

  return (
    <article>
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
