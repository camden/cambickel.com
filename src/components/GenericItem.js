import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';

const Title = styled.div`
  line-height: 1.2;
  margin-bottom: 6px;
  display: inline-block;
  font-weight: bold;
  font-size: 1.8rem;
  transition: all 100ms ease-out;
  cursor: pointer;
  box-shadow: inset 0 -2px 0 0 ${props => props.linkColor || styles.colors.defaultLinkUnderlineColor};

  &:hover {
    box-shadow: inset 0 -14px 0 0 ${props => props.linkColor || styles.colors.defaultLinkUnderlineColor};
  }
`;

const Subtitle = styled.div`
  font-size: 1rem;
  font-style: oblique;
`;

const GenericItem = ({ title, subtitle, styling }) => {
  return (
    <p>
      <Title linkColor={styling && styling.linkColor}>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </p>
  );
};

export default GenericItem;
