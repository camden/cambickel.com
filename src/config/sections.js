import WorkItem from 'components/WorkItem';
import ProjectItem from 'components/ProjectItem';
import BlogPostItem from 'components/BlogPostItem';

export default [
  {
    title: 'Work',
    rootType: 'allWorkHJson',
    itemKey: 'name',
    itemComponent: WorkItem,
    styling: {
      linkColor: 'hotpink',
    },
  },
  {
    title: 'Projects',
    rootType: 'allProjectsHJson',
    itemKey: 'name',
    itemComponent: ProjectItem,
    styling: {
      linkColor: 'mediumaquamarine',
    },
  },
  {
    title: 'Blog Posts',
    rootType: 'allBlogPostsHJson',
    itemKey: 'title',
    itemComponent: BlogPostItem,
    styling: {
      linkColor: 'peachpuff',
    },
  },
];

export const workFragment = graphql`
  fragment Work on RootQueryType {
    allWorkHJson {
      edges {
        node {
          name
          position
          current
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
          link
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
          link
        }
      }
    }
  }
`;
