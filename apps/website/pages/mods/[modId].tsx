import {
  config,
  Content,
  fetchArticle,
  fetchContentForRoute,
} from '@catlord/lib-cms';
import PageContent from '../../components/PageContent';
import { GetServerSidePropsContext } from 'next';
import PortableText from '../../components/PortableText';
import {
  PropsWithSanityConfig,
  provideSanityContext,
} from '../../components/SanityConfigProvider';

type Props = {
  content?: Content;
};

export function News({ content }: Props) {
  return (
    <PageContent>{content && <PortableText content={content} />}</PageContent>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<{
  props: PropsWithSanityConfig<Props>;
}> {
  if (!context.params?.modId) {
    throw new Error('No such mod');
  }

  const content = await fetchContentForRoute(context.params.modId as string);

  return {
    props: {
      content,
      config,
    },
  };
}

export default provideSanityContext(News);
