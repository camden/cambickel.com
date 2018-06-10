import React from 'react';
import sections from 'config/sections';
import Section from 'components/Section';
import styled from 'react-emotion';

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 460px) {
    display: block;
  }
`;

const SectionWrapper = styled.div`
  flex: 1;
`;

const AllSections = ({ data }) => {
  return (
    <Wrapper>
      {sections.map(section => (
        <SectionWrapper key={section.title}>
          <Section section={section} data={data} />
        </SectionWrapper>
      ))}
    </Wrapper>
  );
};

export default AllSections;
