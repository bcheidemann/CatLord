import { config, fetchArticles } from '@catlord/lib-cms';
import ArticleCard from '../components/ArticleCard';
import PageContent from '../components/PageContent';
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
    <PageContent>
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </PageContent>
  );
}

export async function getServerSideProps(): Promise<{
  props: PropsWithSanityConfig<Props>;
}> {
  const articles = await fetchArticles();

  return {
    props: {
      articles,
      config,
    },
  };
}

export default provideSanityContext(News);
