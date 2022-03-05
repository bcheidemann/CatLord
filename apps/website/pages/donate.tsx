import Image from 'next/image';
import panorama from '../public/panorama_cropped_1000.webp';
import {
  config as cmsConfig,
  Content,
  fetchContentForRoute,
} from '@catlord/lib-cms';
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

const DonateButton = styled.a`
  background: #290f7c url(https://donorbox.org/images/red_logo.png) no-repeat 37px;
  color: #fff;
  text-decoration: none;
  font-family: Verdana,sans-serif;
  display: inline-block;
  font-size: 16px;
  margin-top: 16px;
  padding: 15px 38px;
  padding-left: 75px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 #1f5a89;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
`;

export function Donate({ content }: Props) {
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
      <DonateButton
        href="https://donorbox.org/catlord"
        target="_blank"
      >
        Donate
      </DonateButton>
    </>
  );
}

type ServerProps = GetServerSidePropsResult<PropsWithSanityConfig<Props>>;

export async function getServerSideProps(): Promise<ServerProps> {
  const content = await fetchContentForRoute('/donate');

  return {
    props: {
      content,
      config: cmsConfig,
    },
  };
}

export default provideSanityContext(Donate);
