import React from 'react';
import styled from 'react-emotion';
import styles from 'config/styles';

const MainText = styled.h2`
  font-family: 'Merriweather';
  font-weight: 300;
  font-style: italic;
  font-size: ${styles.text.xLarge};
  margin-left: 20px;

  @media (max-width: ${styles.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

const Name = styled.span`
  font-weight: 900;
  font-style: normal;
  font-size: 1.1em;

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
