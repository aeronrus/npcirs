import React from 'react';
import ContentLoader from 'react-content-loader';

const HomeSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={1400}
    height={600}
    viewBox="0 0 1400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="8" y="16" rx="4" ry="4" width="1335" height="45" />
    <rect x="50" y="72" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="72" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="121" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="121" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="170" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="170" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="219" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="219" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="268" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="268" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="317" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="317" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="366" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="366" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="415" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="415" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="464" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="464" rx="4" ry="4" width="35" height="45" />
    <rect x="50" y="513" rx="4" ry="4" width="1300" height="45" />
    <rect x="8" y="513" rx="4" ry="4" width="35" height="45" />{' '}
  </ContentLoader>
);
export default HomeSkeleton;
