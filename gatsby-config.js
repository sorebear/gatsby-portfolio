const envVars = require('./.env.development.js');

module.exports = {
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-graphcms`,
			options: {
            endpoint: envVars.endpoint,
            token: envVars.token,
            query: envVars.query
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography.js`
			}
		}
	]
};
