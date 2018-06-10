import React from 'react';
import styled from 'react-emotion';
import AllSections from 'components/AllSections';

const Page = styled.div`
  margin: 0 40px;
`;

export default ({ data }) => {
  return (
    <Page>
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
