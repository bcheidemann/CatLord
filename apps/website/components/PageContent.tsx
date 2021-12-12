import { ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  fullscreen?: boolean;
};

export const MAX_CONTENT_WIDTH = 1000;

const _PageContent = styled.main`
  background: #eee;
  margin: auto;
  width: 100%;
  max-width: min(${MAX_CONTENT_WIDTH - 40}px, calc(100% - 40px));
  padding: 0 20px 100px 20px;
  box-shadow: 0px 0px 150px 150px #eee;
  min-height: calc(100vh - 200px);
`;

const Footer = styled.footer`
  position: fixed;
  content: ' ';
  height: 75px;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('/blocks-transition-wide-min.webp');
  background-size: auto 100%;
  image-rendering: pixelated;
`;

const Image = styled.img<{ $side: 'left' | 'right'; $hide?: boolean }>`
  --transform-scale: 1;
  --translate-x: 0px;

  position: fixed;
  z-index: 1;
  bottom: -60px;
  transition: 0.5s;

  ${({ $side }) => {
    switch ($side) {
      case 'left':
        return `
          left: -50px;
          transform-origin: bottom left;
        `;
      case 'right':
        return `
          right: -50px;
          transform-origin: bottom right;
        `;
    }
  }}

  @media only screen and (max-width: 1564px) {
    --transform-scale: 0.75;
    bottom: -45px;
  }

  @media only screen and (max-width: 1264px) {
    --transform-scale: 0.5;
    bottom: -30px;
  }

  @media only screen and (max-width: 1000px) {
    opacity: 0;
  }

  &:hover {
    opacity: 0;
    --translate-x: ${({ $side }) => $side === 'left' && '-'}10%;
  }

  &:active {
    pointer-events: none;
  }

  transform: scale(var(--transform-scale)) translateX(var(--translate-x));

  display: ${({ $hide }) => ($hide ? 'none' : 'unset')};
`;

const PageContent = ({ children, fullscreen }: Props) => {
  const clientSide = typeof window !== 'undefined';
  const [shouldDisplayImages, setShouldDisplayImages] = useState(false);

  useEffect(() => {
    if (clientSide) {
      if (window.innerWidth >= 1000) {
        setShouldDisplayImages(true);
      } else {
        const onResize = () => {
          console.log(window.innerWidth);
          if (window.innerWidth >= 1000) {
            window.removeEventListener('resize', onResize);
            setShouldDisplayImages(true);
          }
        };
        window.addEventListener('resize', onResize);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {fullscreen ? children : <_PageContent>{children}</_PageContent>}
      <Image
        $side="left"
        $hide={!shouldDisplayImages}
        src="/players/rohedin4.webp"
        alt="rohedin4 dabbing"
      />
      <Image
        $side="right"
        $hide={!shouldDisplayImages}
        src="/players/catlord.png"
        alt="CatLord97 holding a pickaxe"
      />
      <Footer />
    </>
  );
};

export default PageContent;
