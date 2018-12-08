import React from 'react';
import smoothScroll from 'smoothscroll';

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
    <BasicCard className="basic-card--white">
      <div>
        <h3 style={{ marginTop: 0 }}>Hire Me By The Hour</h3>
        <p>
          Do you have a project that needs someone to quickly jump in and help? Or, perhaps an
          ongoing project and you are uncertain about the total amount of work required? Hiring by
          the hour might be best for you.
        </p>
      </div>
      <Button onClick={() => smoothScroll(document.getElementById('contact'))} value="35" type="button">Hire Me</Button>
    </BasicCard>
  </div>
);
