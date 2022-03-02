let contentfulConfig
try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
      host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com'
    },
  }
}

const { spaceId, accessToken } = contentfulConfig.production
if (!spaceId || !accessToken) {
  throw new Error('Contentful space ID and access token need to be provided.')
}

module.exports = {
  siteMetadata: {
    title: `Harim Blog`,
    description:
      `Harim kim's Blog`,
    siteUrl: 'https://harimkim.netlify.app/',
    image: '/images/blog_meta_image.png',
    menuLinks: [
      {
        name: 'Home',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Contact',
        slug: '/contact/',
      },
    ],
    postsPerFirstPage: 7,
    postsPerPage: 6,
    basePath: '/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans+KR\:100,300,400,500,700,900`
          ],
        display: "swap",
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-lodash',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: '@jonsully/gatsby-remark-prismjs',
            options: {
              aliases: { sh: 'bash' },
              showDiffHighlight: true,
            }
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images-contentful',
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-external-links"
          }
        ],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GOOGLE_ANALYTICS || 'G-XXXXXXXXXX',
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Harim Kim's Blog`,
        short_name: 'GCN',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#6730ec',
        display: 'minimal-ui',
        icon: './static/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-schema-snapshot',
      options: {
        path: './src/gatsby/schema/schema.gql',
        update: process.env.GATSBY_UPDATE_SCHEMA_SNAPSHOT,
      },
    },
    'gatsby-plugin-netlify',
  ],
}
