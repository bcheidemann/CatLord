import { config, fetchArticles } from '@catlord/lib-cms';
import { GetServerSidePropsResult } from 'next';
import ArticleCard from '../components/ArticleCard';
import {
  PropsWithSanityConfig,
  provideSanityContext,
} from '../components/SanityConfigProvider';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  articles: any[];
};

export function News({ articles }: Props) {
  return (
    <>
      <h2>News</h2>
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </>
  );
}

type ServerSidePropsResult = GetServerSidePropsResult<PropsWithSanityConfig<Props>>;

export async function getServerSideProps(): Promise<ServerSidePropsResult> {
  const articles = await fetchArticles();

  return {
    props: {
      articles,
      config,
    },
  };
}

export default provideSanityContext(News);
