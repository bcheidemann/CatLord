import { config, fetchArticle } from '@catlord/lib-cms';
import { GetServerSidePropsContext } from 'next';
import PortableText from '../../components/PortableText';
import {
  PropsWithSanityConfig,
  provideSanityContext,
} from '../../components/SanityConfigProvider';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  article?: any;
};

export function News({ article }: Props) {
  return <div>{article && <PortableText content={article.content} />}</div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext): Promise<{
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

export default provideSanityContext(News);
