import {
  config as cmsConfig,
  Content,
  fetchContentForRoute,
} from '@catlord/lib-cms';
import { GetStaticPropsContext, GetStaticPathsResult, GetStaticPropsResult } from 'next';
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
    <>{content && <PortableText content={content} />}</>
  );
}

type StaticPropsResult = GetStaticPropsResult<PropsWithSanityConfig<Props>>;

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<StaticPropsResult> {
  if (!context.params?.modId) {
    throw new Error('No such mod');
  }

  const content = await fetchContentForRoute(`/mods/${context.params.modId as string}`);

  return {
    props: {
      content,
      config: cmsConfig,
    },
  };
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [
      { params: { modId: 'catcrafting' } },
      // { params: { modId: 'yerawizard' } },
      // { params: { modId: 'chestframes' } },
    ],
    fallback: false,
  }
}

export default provideSanityContext(News);
