export type Article = {
  title: string;
  categories: string[];
  date: string;
  description: string;
  slug: string[];
  display: true;
  score: number;
};

export type ArticleMetaData = {
  title: string;
  description: string;
  date: string;
  categories: string[];
};
