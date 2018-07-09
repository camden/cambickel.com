import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import AllSections from 'components/AllSections';
import Hero from 'components/Hero';

const HeroWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

const Page = styled.div`
  margin: 0 auto;
  max-width: 960px;
  box-sizing: border-box;
  padding: 0 10px;
`;

export default ({ data }) => {
  return (
    <Page>
      <Helmet title={data.site.siteMetadata.title} />
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <AllSections data={data} />
    </Page>
  );
};

export const query = graphql`
  query MainQuery {
    site {
      siteMetadata {
        title
      }
    }
    ...Work
    ...Projects
    ...BlogPosts
  }
`;
