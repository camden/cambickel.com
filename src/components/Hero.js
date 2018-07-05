import React from 'react';
import styled from 'react-emotion';

const MainText = styled.h2`
  font-weight: normal;
  font-size: 4rem;
`;

const Hero = () => {
  return (
    <div>
      <MainText>
        Hi, my name is <br />
        <strong>Camden Bickel.</strong>
      </MainText>
    </div>
  );
};

export default Hero;
