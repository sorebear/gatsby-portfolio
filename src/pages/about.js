import React from 'react';

export default () => (
   <div style={styles.aboutMeStyle}>
      <h2 style={styles.titleStyle}>
         Hi, I'm Soren. I'm a web and mobile developer with an eye for design, and a love for learning new things and
         meeting new people.
      </h2>
      <p style={styles.textStyle}>
         I recently made the career change from working in Leadership Development and Human Resources,
         and I could not be happier with the decision. I now work as a full-time and freelance
         developer, spending most of my free time learning new technologies and building side projects.
      </p>
      {/* <p style={styles.textStyle}>
			I recently took the plunge, left my previous career and dove head first into programming. I spent three months learning and 
			developing at an accelerated Web Development Program in Orange County, and then started working at Envivent as a full-time
			web developer. 
		</p>
		<p  style={styles.textStyle}>
			I could not be happier with my decision to change careers. I spend most of my extra time learning new technologies, going to
			web and mobile development events, and building side projects. 
			websites, web applications, custom emails, and more.
		</p> */}
      <p style={styles.textStyle}>
         If you're interested in hiring me for a project or just grabbing a coffee, tea, or pint, send me a messag!
      </p>
   </div>
);

const styles = {
   aboutMeStyle: {
      paddingTop: '5rem',
      width: '60%',
      marginLeft: 'auto'
   },
   titleStyle: {
      color: 'white',
      display: 'inline-block',
   },
   textStyle: {
      color: 'white'
   }
};
