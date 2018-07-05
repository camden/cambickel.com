import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';

const MainText = styled.h2`
  font-weight: normal;
  font-size: 4rem;

  @media (max-width: ${styles.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

const Name = styled.span`
  font-weight: bold;

  &::before {
    content: '';
    display: block;
  }

  @media (max-width: ${styles.breakpoints.mobile}) {
    &::before {
      content: '';
      display: inline;
    }
  }
`;

const Hero = () => {
  return (
    <div>
      <MainText>
        Hi, my name is <Name>Camden Bickel.</Name>
      </MainText>
    </div>
  );
};

export default Hero;
