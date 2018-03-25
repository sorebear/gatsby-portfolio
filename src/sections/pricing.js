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
    <BasicCard className="basic-card basic-card--white">
      <div>
        {/* <Icon className="icon-basic-clock" /> */}
        <h3 style={{ marginTop: 0 }}>Hire Me By The Hour</h3>
        <h4 style={styles.priceStyle}>$35/hour</h4>
        <p>
          Do you have a project that needs someone to quickly jump in and help? Or, perhaps an
          ongoing project and you are uncertain about the total amount of work required? Hiring by
          the hour might be best for you.
        </p>
      </div>
      <Button onClick={() => smoothScroll(document.getElementById('contact'))} type="button">Hire Me</Button>
    </BasicCard>
    <BasicCard className="basic-card basic-card--white">
      <div>
        {/* <Icon className="icon-basic-notebook-pencil" /> */}
        <h3 style={{ marginTop: 0 }}>Hire Me By The Project</h3>
        <h4 style={styles.priceStyle}>$200+</h4>
        <p>
          Do you have a new application you need built? Or, you need someone to quickly jump in
          and get a current app to completion? Hiring by the project might be best for you.
          Let&apos;s talk about the scope of your project and colloborate on a fair price.
        </p>
      </div>
      <Button onClick={() => smoothScroll(document.getElementById('contact'))} type="button">Let&apos;s Talk</Button>
    </BasicCard>
  </div>
);
