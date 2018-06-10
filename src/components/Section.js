import React from 'react';
import R from 'ramda';

const getItems = ({ section, data }) =>
  R.path([section.rootType, 'edges'], data).map(edge => edge.node);

const Section = ({ section, data }) => {
  const items = getItems({ section, data });
  const { title, itemComponent: ItemComponent } = section;

  return (
    <div>
      <h3>{title}</h3>
      {items.map(item => (
        <ItemComponent key={item[item.itemKey]} data={item} />
      ))}
    </div>
  );
};

export default Section;
