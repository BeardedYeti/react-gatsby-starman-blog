module.exports = {
  siteMetadata: {
    title: 'CaptStarman.io',
    description: 'Blog/Portfolio Gatsby.js Starter',
    author: {
      name: 'Colin Smith',
      email: 'cmsgoboston41@gmail.com',
      telegram: '#',
      twitter: '@CaptStarman',
      github: 'BeardedYeti',
      rss: '#',
      vk: '#'
    },
    siteUrl: 'https://festive-visvesvaraya-a91ac4.netlify.com',
    subtitle: 'Starman-Blog-Portfolio',
    disqusShortname: 'https-festive-visvesvaraya-a91ac4-netlify-com',
  },
  plugins: [    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          `gatsby-remark-emoji`,
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],
      },
    },
    `gatsby-plugin-fastclick`,
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