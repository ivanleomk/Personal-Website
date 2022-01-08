import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

const postDirectory = path.join(process.cwd(), "posts");

export const getSortedPosts = () => {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const fullPath = path.join(postDirectory, filename);
    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const frontmatter = {
      ...data,
      date: data.date,
    };
    return {
      slug,
      display: true,
      ...frontmatter,
    };
  });

  return allPostsData;
};

export const fetchPostSlugs = () => fs.promises.readdir(postsDirectory);

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace(".mdx", ""),
      },
    };
  });
};

export const getPostdata = async (slug) => {
  const fullPath = path.join(postDirectory, `${slug}.mdx`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
