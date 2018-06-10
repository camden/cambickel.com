import React from 'react';
import GenericItem from 'components/GenericItem';

const ProjectItem = ({ data }) => {
  return <GenericItem title={data.name} />;
};

export default ProjectItem;
