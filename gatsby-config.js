module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mf4pweenjnan`,
        accessToken: `f1349ea4ccd4808bab1866ffa2737f03385de09c8b0740cd25fd1db4b555c669`,
      },
    },
  ],
};
