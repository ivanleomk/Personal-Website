import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { onlyCapitalizeFirstLetter } from "./helper";

const postsDirectory = path.join(process.cwd(), "posts");

export function getCategories() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents).data.categories;
    const categories = matterResult
      ? matterResult
          .split(",")
          .map((item) => onlyCapitalizeFirstLetter(item.trim().toLowerCase()))
      : [];

    // const uniqueCategories =
    return categories;
  });

  const uniqueCategories = [...new Set(allPostsData.flat())];

  return uniqueCategories.sort();
}
