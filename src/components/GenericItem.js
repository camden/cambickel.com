import React from 'react';
import styled from 'react-emotion';

const Title = styled.div`
  border-bottom: 1px dotted lightgrey;
  display: inline-block;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 0.8rem;
`;

const GenericItem = ({ title, subtitle }) => {
  return (
    <p>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </p>
  );
};

export default GenericItem;
