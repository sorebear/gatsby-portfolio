import React from 'react';
import Link from 'gatsby-link';

import BasicCard from '../components/basicCard';
import Button from '../components/button';

const styles = {
  pricingStyle: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleStyle: {
    fontSize: '3rem',
    color: 'rgb(0, 106, 114)',
    textAlign: 'center',
    textShadow: '0 4px 2px rgba(0, 0, 0, .3)',
  },
  priceStyle: {
    display: 'inline-block',
  },
};

export default () => (
  <div className="pricing__card-container" style={styles.pricingStyle}>
    <BasicCard className="basic-card basic-card--white">
      <div>
        <h3 style={{ marginTop: 0 }}>JAMstack</h3>
        <p>
          This site is built on the JAMstack. It is a static site built with React using Gatsby.js.
          It also utilizes an AWS Lambda Function to handle the contact form submission.
          It is deployed with Continious Integration on Netlify.
        </p>
        <p>
          Click below to learn more about JAMstack.
        </p>
      </div>
      <Link className="button" href="/jamstack" to="/jamstack">JAMstack Resources</Link>
    </BasicCard>
  </div>
);
