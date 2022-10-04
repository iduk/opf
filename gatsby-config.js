require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `letsGetit`,
    description: `페이지 소개, 테스트페이지`,
    author: `iduk`,
    siteUrl: `https://letsby.gatsbyjs.io`,
    // nav
    menuLinks: [
      {
        name: `about`,
        url: `/about`,
        subMenu: [],
      },
      {
        name: `blog`,
        url: `/blog`,
        subMenu: [],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-giphy-random',
      options: {
        api_key: process.env.GATSBY_GIPHY_API_KEY,
        rating: 'G',
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'allMyNodes',
        imagePath: 'nodes[].imageUrl',
        name: 'remoteImage',
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      // options: {
      //   defaults: {
      //     formats: [`auto`, `webp`, `avif`],
      //     placeholder: `dominantColor`,
      //     quality: 80,
      //     breakpoints: [600, 900, 1200, 1920],
      //     backgroundColor: `transparent`,
      //     tracedSVGOptions: {},
      //     blurredOptions: {},
      //     jpgOptions: {},
      //     pngOptions: {},
      //     webpOptions: {},
      //     avifOptions: {},
      //   },
      // },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `letsby blog`,
        short_name: `letsby`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/assets/images/pixelduk.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-import'),
          require('postcss-preset-env')({
            stage: 0,
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `
          @import 'src/assets/scss/_variables.scss';
          @import 'src/assets/scss/_mixins.scss';
        `,
        cssLoaderOptions: {
          camelCase: false,
          modules: {
            localIdentName: '[local]__[hash:base64:5]',
            // exportLocalsConvention: 'camelCaseOnly',
          },
        },
        // useResolveUrlLoader: {
        //   options: {
        //     debug: true,
        //   },
        // },
      },
    },
    {
      resolve: 'gatsby-plugin-minify-classnames',
      options: {
        /* gatsby-plugin-minify-classnames options here */
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
