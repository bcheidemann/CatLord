import Image from 'next/image';
import panorama from '../public/panorama_cropped_1000.webp';
import styled from 'styled-components';

const maxContentWidth = 1000;
const aspectRatio = 2.685185;
const panoramaHeight = maxContentWidth/aspectRatio;

const Content = styled.div`
  margin: auto;
  width: 100%;
  max-width: ${maxContentWidth}px;
`;

export function Index() {
  return (
    <Content>
      <Image
        src={panorama}
        alt="Panorama of the servers central shopping district"
        width={maxContentWidth}
        height={panoramaHeight}
        placeholder="blur"
      />
    </Content>
  );
}

export default Index;
