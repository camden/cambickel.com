import React from 'react';
import styled from 'react-emotion';
import AllSections from 'components/AllSections';
import Hero from 'components/Hero';

const HeroWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const Page = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 960px;
  box-sizing: border-box;
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
