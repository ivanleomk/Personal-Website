import fs from "fs";
import path from "path";
import matter from "gray-matter";

type frontMatterInformation = {
  title: string;
  description: string;
  date: string;
  categories: string[];
};

const postsDirectory = path.join(process.cwd(), "posts");

const postDirectory = path.join(process.cwd(), "posts");

export const getPostCategories = () => {
  const fileNames = fs.readdirSync(postDirectory);

  const allPostsData = fileNames
    .map((filename) => {
      const slug = filename.replace(".mdx", "");

      const fullPath = path.join(postDirectory, filename);
      //Extracts contents of the MDX file
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      const frontmatter = {
        ...data,
        date: data.date,
      };
      return frontmatter;
    })
    .map((item: frontMatterInformation) => {
      return item.categories;
    });
  const allCategories: string[][] = allPostsData.concat(["latest"]);
  const uniqueCategories = new Set(allCategories.flat());
  return Array.from(uniqueCategories).map((item) => {
    return {
      params: {
        slug: item,
      },
    };
  });
};

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
