/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient, groq } from 'next-sanity';
import { sanityConfig } from './config';

export const sanityClient = createClient(sanityConfig);

const pageQuery = (route: string) => groq`
  *[_type == 'page' && path == '${route}'] {
    content
  }
`;

export async function fetchContentForRoute(route: string) {
  const [page] = await sanityClient.fetch(pageQuery(route));
  if (!page) {
    return null;
  }
  return page.content;
}
