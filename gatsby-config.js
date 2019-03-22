module.exports = {
  siteMetadata: {
    title: 'CaptStarman.io',
    description: 'Blog/Portfolio Gatsby.js Starter',
    author: {
      name: 'Colin Smith',
      email: 'cmsgoboston41@gmail.com',
      telegram: '#',
      twitter: '@thecolinsmith',
      github: 'BeardedYeti',
      rss: '#',
      vk: '#'
    },
    subtitle: 'Gatsby-Starman',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background: `#ddd`,
        theme_color: `#005`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        include_favicon: true,
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*.js': [
            'Cache-Control: public, max-age=0, must-revalidate'
          ],
          '/**/*.html': [
            'Cache-Control: public, max-age=0, must-revalidate'
          ],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    }
  ],
};