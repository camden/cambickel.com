import React from 'react';
import sections from 'config/sections';
import Section from 'components/Section';
import styled from 'react-emotion';
import styles from 'config/styles';
import FancyLink from 'components/shared/FancyLink';

const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${styles.breakpoints.mobile}) {
    display: block;
  }
`;

const SectionWrapper = styled.div`
  flex: 1 1 auto;
  min-width: 200px;

  margin: 0 20px;
`;

const AllSections = ({ data }) => {
  return (
    <Wrapper>
      {sections.map(section => (
        <SectionWrapper key={section.title}>
          <Section section={section} data={data} styling={section.styling} />
          {section.cta && (
            <CTALink
              hoverInsetAmount={'-8px'}
              href={section.cta.url}
              target={'_blank'}
              rel="noopener noreferrer"
            >
              {section.cta.text}
            </CTALink>
          )}
        </SectionWrapper>
      ))}
    </Wrapper>
  );
};

const CTALink = styled(FancyLink)`
  font-size: ${styles.text.small};
`;

export default AllSections;
