import Image from 'next/image';
import panorama from '../public/panorama_cropped_1000.webp';
import { config as cmsConfig, Content, fetchContentForRoute } from '@catlord/lib-cms';
import { CommonPageProps } from '../types/CommonPageProps';
import React from 'react';
import PortableText from '../components/PortableText';
import {
  provideSanityContext,
  PropsWithSanityConfig,
} from '../components/SanityConfigProvider';
import { MAX_CONTENT_WIDTH } from '../components/PageContent';
import styled from 'styled-components';
import { GetServerSidePropsResult } from 'next';

type Props = CommonPageProps<{
  content: Content;
}>;

const aspectRatio = 2.685185;
const panoramaHeight = MAX_CONTENT_WIDTH / aspectRatio;

const TitleImage = styled.div`
  margin: 0 -20px;
`;

export function Index({ content }: Props) {
  return (
    <>
      <TitleImage>
        <Image
          src={panorama}
          alt="Panorama of the servers central shopping district"
          width={MAX_CONTENT_WIDTH}
          height={panoramaHeight}
          placeholder="blur"
        />
      </TitleImage>
      {content && <PortableText content={content} />}
    </>
  );
}

type ServerProps = GetServerSidePropsResult<PropsWithSanityConfig<Props>>;

export async function getServerSideProps(): Promise<ServerProps> {
  const content = await fetchContentForRoute('/');

  return {
    props: {
      content,
      config: cmsConfig,
    },
  };
}

export default provideSanityContext(Index);
