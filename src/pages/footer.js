import React from 'react';
import twitter from '../images/social/twitter.png';
import github from '../images/social/github.png';
import linkedIn from '../images/social/linked-in.png';
import email from '../images/social/email.png';

export default () => (
   <div style={styles.footerStyle}>
      <div style={styles.linkContainerStyle}>
         <a href="https://twitter.com/sore_bear" target="_blank">
            <img style={styles.socialMediaLinkStyle} src={twitter}/>
         </a>
         <a href="https://github.com/sorebear" target="_blank">
            <img style={styles.socialMediaLinkStyle} src={github}/>
         </a>
         <a href="https://www.linkedin.com/in/soren-baird/" target="_blank">
            <img style={styles.socialMediaLinkStyle} src={linkedIn}/>
         </a>
         <a href="mailto:sorenbaird@protonmail.com" target="_blank">
            <img style={styles.socialMediaLinkStyle} src={email}/>
         </a>
      </div>
      <p style={styles.textStyle}>&copy; Soren Baird - {new Date().getFullYear()}</p>
   </div>
);

const styles = {
   footerStyle: {
      minHeight: '20vh',
      backgroundColor: '#333',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
   },
   linkContainerStyle: {
      display: 'flex',
      justifyContent: 'space-around'
   },
   socialMediaLinkStyle: {
      height: '100px',
      padding: '10px'
      
   },
   textStyle: {
      color: 'white'
   }
}