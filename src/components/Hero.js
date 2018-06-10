import React from 'react';
import styled from 'react-emotion';

const MainText = styled.h2`
  font-weight: normal;
`;

const Hero = () => {
  return (
    <div>
      <MainText>
        Hi, my name is <strong>Camden Bickel.</strong>
      </MainText>
    </div>
  );
};

export default Hero;
