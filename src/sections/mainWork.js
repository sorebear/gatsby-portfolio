import React from 'react';
import StitchRows from '../components/stitchRows'
import enviventLogo from '../images/work/envivent.svg';

export default ({ props }) => {
   console.log(props);
   const rotate = props.activeSet === 'web-development' ? -5 : 5;
   return (
   <div className="work__main-work-wrapper" style={styles.mainWorkStyle}>
      <StitchRows rows={['3', '4']} section="work" set={props.activeSet} rotate={rotate}>
      <div style={styles.contentWrapperStyle} className='work__main-work'>
         <div style={styles.logoContainerStyle}>
            <a href='envivent.com' target='_blank' style={styles.anchorStyle}>
               <img src={enviventLogo} style={styles.logoStyle} />
            </a>
         </div>
         <div style={styles.textContainerStyle}>
            <p>I am currently a full-time Web Developer at Envivent Web Development</p>
            <p>We work primarily with healthcare ad agencies, acting as their development partner</p>
            <p>We build traditional websites, content management systems, interactive tools, data management portals, closed loop marketing solutions, email campaigns, trade show panels, Salesforce.com apps/websites, and more</p>
         </div>
      </div>
      </StitchRows>
   </div>
);
}

const styles = {
   mainWorkStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: 'grey',
      // color: 'white'
   },
   contentWrapperStyle: {
      display: 'flex',
      flexDirection: 'row'
   },
   logoContainerStyle: {
      width: '50%',
      padding: '0 2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
   },
   anchorStyle: {
      width: '75%',
      margin: 0
   },
   logoStyle: {
      width: '100%'
   },
   textContainerStyle: {
      padding: '0 2rem',
      width: '50%',
      display: 'flex',
      flexDirection: 'column'
   }
}