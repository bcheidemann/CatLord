import _PortableText from 'react-portable-text';
import useImageBuilder from '../utlis/useImageBuilder';

type ImageData = {
  _key: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
};

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
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
      }}
    />
  );
};

export default PortableText;
