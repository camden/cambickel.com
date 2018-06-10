import WorkItem from 'components/WorkItem';
import ProjectItem from 'components/ProjectItem';
import BlogPostItem from 'components/BlogPostItem';

export default [
  {
    title: 'Work',
    rootType: 'allWorkHJson',
    itemKey: 'name',
    itemComponent: WorkItem,
  },
  {
    title: 'Projects',
    rootType: 'allProjectsHJson',
    itemKey: 'name',
    itemComponent: ProjectItem,
  },
  {
    title: 'Blog Posts',
    rootType: 'allBlogPostsHJson',
    itemKey: 'title',
    itemComponent: BlogPostItem,
  },
];

export const workFragment = graphql`
  fragment Work on RootQueryType {
    allWorkHJson {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export const projectsFragment = graphql`
  fragment Projects on RootQueryType {
    allProjectsHJson {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export const blogPostsFragment = graphql`
  fragment BlogPosts on RootQueryType {
    allBlogPostsHJson {
      edges {
        node {
          title
        }
      }
    }
  }
`;
