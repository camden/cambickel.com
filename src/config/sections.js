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
      linkColor: 'lightpink',
    },
    cta: {
      text: 'My résumé ↗',
      url: 'https://resume.cambickel.com',
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
          link
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
          subtitle
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
          subtitle
          link
        }
      }
    }
  }
`;
