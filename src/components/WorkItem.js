import React from 'react';
import GenericItem from 'components/GenericItem';

const WorkItem = ({ data }) => {
  return <GenericItem title={data.name} subtitle={data.position} />;
};

export default WorkItem;
