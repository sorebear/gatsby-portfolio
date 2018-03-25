import React from 'react';

const styles = {
  aboutMeStyle: {
    width: '60%',
    marginLeft: 'auto',
  },
  titleStyle: {
    color: 'white',
    display: 'inline-block',
  },
  textStyle: {
    color: 'white',
  },
};

export default () => (
  <div style={styles.aboutMeStyle}>
    <h2 style={styles.titleStyle}>
      Hi, I&apos;m Soren. I&apos;m a web and mobile developer with an eye for design, and a love for
      learning new things and meeting new people.
    </h2>
    <p style={styles.textStyle}>
      I recently made the career change from working in Leadership Development and Human Resources,
      and I could not be happier with the decision. I now work as a full-time and freelance
      developer, spending most of my free time learning new technologies and building side projects.
    </p>
    <p style={styles.textStyle}>
      If you&apos;re interested in hiring me for a project or just grabbing a drink and talking
      about technology and life, send me a message!
    </p>
  </div>
);
