import { Article } from './types';
import client from '../client';
import { articlesQuery } from '../queries';

export type ArticleSummary = Pick<
  Article,
  'author' | 'id' | 'name' | 'publishAt' | 'tags'
>;

const fetchArticles = async (): Promise<ArticleSummary[]> => {
  const articles = await client.fetch(articlesQuery);
  return articles;
};

export { fetchArticles };
