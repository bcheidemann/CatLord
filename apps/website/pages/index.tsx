import Image from 'next/image';
import panorama from '../public/panorama_cropped_1000.webp';
import styled from 'styled-components';
import { fetchContentForRoute } from '@catlord/cdn';
import PortableText from 'react-portable-text';

const maxContentWidth = 1000;
const aspectRatio = 2.685185;
const panoramaHeight = maxContentWidth/aspectRatio;

const Content = styled.div`
  margin: auto;
  width: 100%;
  max-width: ${maxContentWidth}px;
`;

export function Index({ content }) {
  return (
    <Content>
      <Image
        src={panorama}
        alt="Panorama of the servers central shopping district"
        width={maxContentWidth}
        height={panoramaHeight}
        placeholder="blur"
      />
      <PortableText
        content={content}
        className="portable-text"
        serializers={{}}
      />
    </Content>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      content: await fetchContentForRoute('/'),
    },
  }
};

export default Index;
