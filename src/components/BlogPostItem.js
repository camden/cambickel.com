import React from 'react';
import GenericItem from 'components/GenericItem';

const BlogPostItem = ({ data, styling }) => {
  return <GenericItem title={data.title} styling={styling} href={data.link} />;
};

export default BlogPostItem;
