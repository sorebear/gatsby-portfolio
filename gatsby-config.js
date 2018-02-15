const graphqlConfig = require('./graphqlConfig.env');

module.exports = {
    plugins: [
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-source-graphcms`,
        options: graphqlConfig
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
    ],
  };
  
  