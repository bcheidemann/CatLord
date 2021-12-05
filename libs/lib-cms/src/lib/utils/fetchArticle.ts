import { Article } from './types';
import client from '../client';
import { articleQuery } from '../queries';

const fetchArticle = async (id: string): Promise<Article | null> => {
  const [article] = await client.fetch(articleQuery, { id });
  if (!article) {
    return null;
  }
  return article;
};

export { fetchArticle };
