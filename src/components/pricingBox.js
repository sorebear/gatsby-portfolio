import React from 'react';
import mobileDevelopment from '../images/mobile-development.svg';
import webDevelopment from '../images/web-development.svg';

const images = {
   "Web Development": webDevelopment,
   "Mobile Development": mobileDevelopment
}

export default ({ children, image }) => (
   <div style={styles.pricingBoxStyle}>
      <img src={images[image]}/>
      { children }
   </div>
);

const styles = {
   pricingBoxStyle: {
      padding: '2rem',
      maxWidth: '350px',
      borderRadius: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.85)'
   }
}