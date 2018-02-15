import React from 'react';

export default () => (
   <div style={styles.footerStyle}>
      <div style={styles.linkContainerStyle}>
         <a href="https://twitter.com/sore_bear" target="_blank">
            <img style={styles.socialMediaLinkStyle} src="static/twitter.png"/>
         </a>
         <a href="https://github.com/sorebear" target="_blank">
            <img style={styles.socialMediaLinkStyle} src="static/github.png"/>
         </a>
         <a href="https://www.linkedin.com/in/soren-baird/" target="_blank">
            <img style={styles.socialMediaLinkStyle} src="static/linked-in.png"/>
         </a>
         <a href="mailto:sorenbaird@protonmail.com" target="_blank">
            <img style={styles.socialMediaLinkStyle} src="static/email.png"/>
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