import { groq } from "next-sanity";

const routesQuery = groq`
  *[_type == 'page'] {
    name,
    path
  }
`;

export { routesQuery };
