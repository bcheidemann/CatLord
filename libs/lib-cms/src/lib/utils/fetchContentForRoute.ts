import client from "../client";
import { pageQuery } from "../queries";

const fetchContentForRoute = async (route: string) => {
  const [page] = await client.fetch(pageQuery(route));
  if (!page) {
    return null;
  }
  return page.content;
};

export { fetchContentForRoute };
