module.exports = {
  siteMetadata: {
    title: 'brandon kearns',
    description: 'learn. earn. sojourn. repeat.',
    author: '@brandon_kearns',
    navLinks: [
      {
        name: 'learn',
        link: '/learn'
      },
      {
        name: 'earn',
        link: '/earn'
      },
      {
        name: 'sojourn',
        link: '/sojourn'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
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
        plugins:[
          {
            resolve: `@fs/gatsby-plugin-drive`,
            options: {
              folderId: `16Mk3nteftpnMDrnsKnGvRYupFMNzNNFm`,
              keyFile: `${__dirname}/credentials.json`,
              destination: `${__dirname}/posts/`,
            },
          },
        ],
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600
            } 
          }
        ]
      }
    },
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
