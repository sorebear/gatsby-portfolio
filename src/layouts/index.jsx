import React from 'react';
import Helmet from 'react-helmet';

import '../scss/main.scss';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Soren Baird: Web Developer, CMS Developer, Mobile Developer' },
            { name: 'keywords', content: 'Web Developer, HTML, CSS, JavaScript, PHP, Drupal, React, MySQL, Firebase, MongoDB'}
          ]}
        >
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        </Helmet>
        <div>
          {this.props.children()}
        </div>
      </div>
    );
  }
}

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;