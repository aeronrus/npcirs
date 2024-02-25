import React from 'react';
import ContentLoader from 'react-content-loader';

const CardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1200}
    height={800}
    viewBox="0 0 1200 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="584" cy="279" r="270" />
    <rect x="324" y="572" rx="0" ry="0" width="520" height="106" />
    <rect x="224" y="697" rx="0" ry="0" width="720" height="64" />
  </ContentLoader>
);

export default CardSkeleton;
