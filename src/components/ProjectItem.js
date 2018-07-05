import React from 'react';
import GenericItem from 'components/GenericItem';

const ProjectItem = ({ data, styling }) => {
  return <GenericItem title={data.name} styling={styling} />;
};

export default ProjectItem;
