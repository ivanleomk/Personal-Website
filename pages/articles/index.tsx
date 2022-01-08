import React, { useEffect, useState } from "react";
import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout";
import PostCard from "../../components/Post/PostCard";
import { Article } from "../../types/posts";
import { getSortedPosts } from "../../lib/articles";
import SearchBar from "../../components/SearchBar";
import Fuse from "fuse.js";

type ArticlesProp = {
  articles: Article[];
};

const Articles = ({ articles }: ArticlesProp) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [articleList, setArticleList] = useState([]);
  const [category, setCategory] = useState("");

  const fuse = new Fuse(articles, {
    includeScore: true,
    keys: ["title", "description", "categories"],
  });

  const checkCategory = (category: string, categories: string[]) => {
    if (category === "") {
      return true;
    }
    return categories.includes(category);
  };

  useEffect(() => {
    setArticleList((articles) =>
      articles.map((item) => {
        return { ...item, display: checkCategory(category, item.categories) };
      })
    );
  }, [category]);

  useEffect(() => {
    setArticleList(articles);
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setArticleList(articles);
      return;
    }
    setArticleList(
      fuse
        .search(searchTerm)
        .map(({ item }) => item)
        .sort((item) => item.score)
    );
  }, [searchTerm]);

  return (
    <Layout title="Articles">
      <main className="mb-auto divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 py-10 space-y-2 md:space-y-5 ">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Welcome to my personal blog where I talk about things that I've
            learnt, read and think about.
          </p>
        </div>

        <div className="py-10">
          {category === "" ? null : (
            <p className="py-2">
              You have selected posts that are tagged as <b>{category}</b>.{" "}
              <button className="" onClick={() => setCategory("")}>
                Reset selection?
              </button>
            </p>
          )}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          {articleList
            .filter((item) => item.display)
            .map((item, index) => (
              <PostCard key={index} Post={item} setCategory={setCategory} />
            ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPosts = getSortedPosts();

  return {
    props: {
      articles: allPosts,
    },
  };
}

export default Articles;
