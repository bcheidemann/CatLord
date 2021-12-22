import { Content } from '@catlord/lib-cms';
import _PortableText from 'react-portable-text';
import styled from 'styled-components';
import useImageBuilder from '../utlis/useImageBuilder';

function convertToEmbedLink(url) {
  const embedUrl = new URL(url);
  embedUrl.hostname = 'www.youtube-nocookie.com';
  embedUrl.pathname = '/embed' + embedUrl.pathname;
  return embedUrl.toString();
}

// TODO: refactor out these components to a shared library with CMS app
const Youtube = ({ url }) => (
  <div
    style={{
      marginTop: '1em',
      marginBottom: '1em',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <iframe
      style={{
        aspectRatio: 'calc(560/315)',
        width: '100%',
        maxWidth: '80vh',
      }}
      src={convertToEmbedLink(url)}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const Info = styled.div<{ $level: string }>`
  padding: 1px 16px;
  border-radius: 16px;
  background-color: ${({ $level }) => {
    switch ($level) {
      case 'warning':
        return 'yellow';
      case 'error':
        return 'red';
      default:
        return $level;
    }
  }};
`;

type ImageData = {
  _key: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

type Props = {
  content: Content;
};

const PortableText = ({ content }: Props) => {
  const builder = useImageBuilder();

  return (
    <_PortableText
      content={content}
      className="portable-text"
      serializers={{
        // eslint-disable-next-line react/display-name
        image: ({ asset }: ImageData) => (
          // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
          <img src={builder.image(asset).url() as string} />
        ),
        // eslint-disable-next-line react/display-name
        info: ({ level, content }) => (
          <Info $level={level}>
            <PortableText content={content} />
          </Info>
        ),
        // eslint-disable-next-line react/display-name
        youtube: ({ url }) => <Youtube url={url} />,
      }}
    />
  );
};

export default PortableText;
