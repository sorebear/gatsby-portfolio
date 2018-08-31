module.exports = {
  siteMetadata: {
    title: 'Soren Baird | Web Developer, CMS Developer, Mobile Developer',
    author: 'Soren Baird',
    description: 'I\'m a web and mobile developer with an eye for design, and a love for learning new things and meeting new people.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
  ],
};
