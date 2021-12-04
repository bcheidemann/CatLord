import Image from 'next/image';
import panorama from '../public/panorama_cropped_1000.webp';
import styled from 'styled-components';
import { config, fetchContentForRoute } from '@catlord/lib-cms';
import { CommonPageProps } from '../types/CommonPageProps';
import React from 'react';
import PortableText from '../components/PortableText';
import { provideSanityContext, PropsWithSanityConfig } from '../components/SanityConfigProvider';

type Props = CommonPageProps<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
}>;

const maxContentWidth = 1000;
const aspectRatio = 2.685185;
const panoramaHeight = maxContentWidth / aspectRatio;

const Content = styled.div`
  margin: auto;
  width: 100%;
  max-width: ${maxContentWidth}px;
`;

export function Index({ content }: Props) {
  return (
    <Content>
      <Image
        src={panorama}
        alt="Panorama of the servers central shopping district"
        width={maxContentWidth}
        height={panoramaHeight}
        placeholder="blur"
      />
      {content && (
        <PortableText
          content={content}
        />
      )}
    </Content>
  );
}

export async function getServerSideProps(): Promise<{ props: PropsWithSanityConfig<Props> }> {
  const content = await fetchContentForRoute('/');

  return {
    props: {
      content,
      config,
    },
  };
}

export default provideSanityContext(Index);
