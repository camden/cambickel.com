import React from 'react';
import R from 'ramda';
import styled from 'react-emotion';
import styles from 'config/styles';

const getItems = ({ section, data }) =>
  R.path([section.rootType, 'edges'], data).map(edge => edge.node);

const Section = ({ section, data, styling }) => {
  const items = getItems({ section, data });
  const { title, itemComponent: ItemComponent } = section;

  return (
    <div>
      <Title>{title}</Title>
      {items.map(item => (
        <ItemComponent key={item[item.itemKey]} data={item} styling={styling} />
      ))}
    </div>
  );
};

const Title = styled.h3`
  color: ${styles.colors.sectionTitle};
  font-size: 1.2rem;
`;

export default Section;
