import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "/pages/articles");
console.log(process.cwd());

export const getSortedPosts = () => {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((item) => item.includes(".mdx"));

  return filenames.map((item) => {
    const { meta } = require(`../pages/articles/${item}`);
    return { ...meta, slug: item.replace(".mdx", ""), display: true };
  });
};
