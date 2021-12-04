import { groq } from "next-sanity";

const pageQuery = (route: string) => groq`
  *[_type == 'page' && path == '${route}'] {
    content
  }
`;

export { pageQuery };
