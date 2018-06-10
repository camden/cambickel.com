import React from 'react';
import styled from 'react-emotion';
import AllSections from 'components/AllSections';
import Hero from 'components/Hero';

const Page = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 960px;
`;

export default ({ data }) => {
  return (
    <Page>
      <Hero />
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
