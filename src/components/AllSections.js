import React from 'react';
import sections from 'config/sections';
import Section from 'components/Section';
import styled from 'react-emotion';
import styles from 'config/styles';

const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${styles.breakpoints.mobile}) {
    display: block;
    margin-bottom: 5rem;
  }
`;

const SectionWrapper = styled.div`
  flex: 1;
  margin: 0 20px;
`;

const AllSections = ({ data }) => {
  return (
    <Wrapper>
      {sections.map(section => (
        <SectionWrapper key={section.title}>
          <Section section={section} data={data} styling={section.styling} />
        </SectionWrapper>
      ))}
    </Wrapper>
  );
};

export default AllSections;
