import React from 'react';
import styled from 'react-emotion';
import AllSections from 'components/AllSections';
import Hero from 'components/Hero';
import styles from 'config/styles';

const HeroWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const Page = styled.div`
  margin: 0 auto;
  max-width: 960px;
  box-sizing: border-box;
  padding: 0 10px;

  @media (max-width: ${styles.breakpoints.mobile}) {
    padding: 0 40px;
  }
`;

export default ({ data }) => {
  return (
    <Page>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <AllSections data={data} />
    </Page>
  );
};

export const query = graphql`
  query MainQuery {
    ...Work
    ...Projects
    ...BlogPosts
  }
`;
