module.exports = {
  siteMetadata: {
    title: 'Camden Bickel',
    meta: {
      description: 'Camden Bickel, developer and designer living in Boston.',
    },
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-transformer-hjson',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: 'src/data/',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-71680879-1',
        head: true,
      },
    },
  ],
};
