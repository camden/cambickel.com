import React from 'react';
import GenericItem from 'components/GenericItem';

const WorkItem = ({ data, styling }) => {
  return (
    <GenericItem
      title={data.name}
      subtitle={data.position}
      href={data.link}
      styling={styling}
    />
  );
};

export default WorkItem;
