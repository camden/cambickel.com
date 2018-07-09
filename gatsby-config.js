module.exports = {
  siteMetadata: {
    title: 'Camden Bickel',
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
  ],
};
