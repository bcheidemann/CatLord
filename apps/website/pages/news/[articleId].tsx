import { Article, config, fetchArticle, fetchArticles } from '@catlord/lib-cms';
import { PageLoading } from '../../components/PageLoading';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import PortableText from '../../components/PortableText';
import {
  PropsWithSanityConfig,
  provideSanityContext,
} from '../../components/SanityConfigProvider';
import Tags from '../../components/Tags';

type Props = {
  article?: Article | null;
};

export function News({ article }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return <PageLoading />;
  }

  if (!article) {
    if (typeof window !== 'undefined') {
      router.replace('/news');
    }
    return <PageLoading />;
  }

  return (
    <>
      <h2>{article.name}</h2>
      <h3>
        {article.author} - {new Date(article.publishAt).toLocaleDateString()}
      </h3>
      <Tags>
        {article.tags.map((tag) => (
          <Tags.Tag key={tag}>{tag}</Tags.Tag>
        ))}
      </Tags>
      <PortableText content={article.content} />
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<{
  props: PropsWithSanityConfig<Props>;
}> {
  if (!context.params) {
    throw new Error('Params expected');
  }

  const article = await fetchArticle(context.params.articleId as string);

  return {
    props: {
      article,
      config,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const articles = await fetchArticles();

  return {
    paths: articles.map(({ id }) => ({
      params: { articleId: id },
    })),
    fallback: true,
  };
}

export default provideSanityContext(News);
