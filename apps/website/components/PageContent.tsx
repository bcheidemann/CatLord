import styled from 'styled-components';

export const MAX_CONTENT_WIDTH = 1000;

const _PageContent = styled.div`
  background: #ddd;
  margin: auto;
  width: 100%;
  max-width: ${MAX_CONTENT_WIDTH - 40}px;
  padding: 0 20px 100px 20px;
  border: solid #ddd;
  border-width: 0 6px;
  box-shadow: 0px 0px 15px 10px #ddd;
  min-height: calc(100vh - 200px);

  &::before {
    position: fixed;
    content: ' ';
    height: 50px;
    bottom: 25px;
    left: 0;
    right: 0;
    background-image: url('/blocks-transition-small.png');
  }

  &::after {
    position: fixed;
    content: ' ';
    height: 25px;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('/blocks-small.png');
  }
`;

const Image = styled.img<{ $side: 'left' | 'right' }>`
  position: fixed;
  z-index: 1;
  bottom: -60px;

  ${({ $side }) => {
    switch ($side) {
      case 'left':
        return `
          left: -50px;
        `;
      case 'right':
        return `
          right: -50px;
        `;
    }
  }}
`;

const PageContent = ({ children }) => (
  <>
    <Image
      $side="left"
      src="/players/rohedin4.png"
      alt="rohedin4 dabbing"
    />
    <_PageContent>{children}</_PageContent>
    <Image
      $side="right"
      src="/players/catlord.png"
      alt="CatLord97 holding a pickaxe"
    />
  </>
);

export default PageContent;
