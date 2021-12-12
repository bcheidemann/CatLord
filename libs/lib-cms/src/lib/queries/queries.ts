import { groq } from "next-sanity";

const articleQuery = groq`
  *[_type == 'article' && id == $id]
`;

const articlesQuery = groq`
  *[_type == 'article'] {
    id,
    name,
    author,
    tags,
    publishAt,
  } | order(publishAt desc)
`;

const pageQuery = groq`
  *[_type == 'page' && path == $route] {
    content
  }
`;

export {
  articleQuery,
  articlesQuery,
  pageQuery,
};
