import * as reactDomJsx from "../routes/articles/react-dom-jsx.mdx";

export type ArticleAttributes = {
  title: string;
  author: string;
  description: string;
  date: string;
  slug: string;
};

function articleFromModule(mod: {
  filename: string;
  attributes: {
    meta: {
      title: string;
      author: string;
      description: string;
      date: string;
    };
  };
}): ArticleAttributes {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export const getAllArticles = () => {
  const articles = [reactDomJsx];
  return articles.map(articleFromModule);
};
