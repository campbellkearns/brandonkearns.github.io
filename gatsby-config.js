module.exports = {
  siteMetadata: {
    title: 'brandon kearns',
    description: 'learn. earn. sojourn. repeat.',
    author: '@brandon_kearns',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'brandon-kearns',
        short_name: 'bk',
        start_url: '/',
        background_color: '#369369',
        theme_color: '#4d4d4d',
        display: 'minimal-ui',
        icon: 'src/images/frogo.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
