import React from 'react';
import GenericItem from 'components/GenericItem';

const BlogPostItem = ({ data }) => {
  return <GenericItem title={data.title} />;
};

export default BlogPostItem;
