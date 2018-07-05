import React from 'react';
import GenericItem from 'components/GenericItem';

const ProjectItem = ({ data, styling }) => {
  return (
    <GenericItem
      title={data.name}
      subtitle={data.subtitle}
      href={data.link}
      styling={styling}
    />
  );
};

export default ProjectItem;
