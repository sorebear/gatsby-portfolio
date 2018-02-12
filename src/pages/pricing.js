import React from 'react';
import Title from '../components/title';

import PricingBox from '../components/pricingBox';

export default ({ image }) => (
   <div style={{...styles.pricingWrapperStyle, backgroundImage: `url('./static/${image}`}}>
      <h3 style={styles.titleStyle}>Pricing</h3>
      <div style={styles.pricingStyle} className="container">
         <PricingBox image="Mobile Development">
            <h3>Custom CMS w/Hosing</h3>
            <h2>$55/month</h2>
            <p>We will develop your designs into a custom CMS Site and maintain the hosting for you.</p>
         </PricingBox>
         <PricingBox image="Web Development">
            <h3>Custom CMS w/Hosing</h3>
            <h2>$55/month</h2>
            <p>We will develop your designs into a custom CMS Site and maintain the hosting for you.</p>
         </PricingBox>
         <PricingBox image="Web Development">
            <h3>Custom CMS w/Hosing</h3>
            <h2>$55/month</h2>
            <p>We will develop your designs into a custom CMS Site and maintain the hosting for you.</p>
         </PricingBox>
      </div>
   </div>
);

const styles = {
   pricingWrapperStyle: {
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      padding: '5rem 0'
   },
   pricingStyle: {
      display: 'flex',
      justifyContent: 'space-between'
   },
   titleStyle: {
      fontSize: '3rem',
      color: 'deepskyblue',
      margin: '0 auto 5rem auto',
      textAlign: 'center'
  }
};