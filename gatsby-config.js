module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-transformer-hjson',
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
