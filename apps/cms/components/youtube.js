import React from 'react';

function convertToEmbedLink(url) {
  const embedUrl = new URL(url);
  embedUrl.hostname = 'www.youtube-nocookie.com';
  embedUrl.pathname = '/embed' + embedUrl.pathname;
  return embedUrl.toString();
}

export default ({ value }) => {
  if (!value || !value.url) {
    return null;
  }

  return (
    <iframe
      style={{
        aspectRatio: 'calc(560/315)',
        width: '100%',
      }}
      src={convertToEmbedLink(value.url)}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
