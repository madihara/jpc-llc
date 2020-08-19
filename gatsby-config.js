require('dotenv').config({
  path: '.env'
});

module.exports = {
  siteMetadata: {
    title: `JPC, LLC`,
    description: `We are a commercial sewing company based out of Elkhart, IN. We are proud to provide quality textiles and impeccable service to our customers.`,
    author: `Madison Haradine`,
    social: {
      dummyContent:'',
    },
    business: {
      name: 'JPC,LLC',
      streetAddress: '2926 Paul Dr.',
      cityAddress: 'Elkhart, IN 99999',
      phone: '+1(574)293-8030',
      email: 'jpccustom@gmail.com'
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
