import React from 'react';
import styled from 'react-emotion';
import { selectProjects } from '../utils/selectors';

const Page = styled.div`
  margin: 0 40px;
`;

export default ({ data }) => {
  const projects = selectProjects(data);
  return (
    <Page>
      <h2>Projects</h2>
      {projects.map(p => (
        <div>
          <h4>{p.name}</h4>
          <p>{p.description}</p>
        </div>
      ))}
    </Page>
  );
};

export const PageQuery = graphql`
  query PageQuery {
    allProjectsHJson {
      edges {
        node {
          name
          description
        }
      }
    }
  }
`;
