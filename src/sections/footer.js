import React from 'react';
import twitter from '../images/social/twitter.svg';
import github from '../images/social/github.svg';
import linkedIn from '../images/social/linked-in.svg';
import StitchBox from '../components/stitchBox';

const styles = {
  footerStyle: {
    minHeight: '20vh',
    backgroundColor: '#333',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  stitchBoxStyle: {
    height: '75px',
    width: '75px',
    margin: '10px',
  },
  linkContainerStyle: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  socialMediaLinkStyle: {
    margin: '5px',
  },
  textStyle: {
    color: 'white',
  },
};

export default () => (
  <div className="footer" style={styles.footerStyle}>
    <div style={styles.linkContainerStyle}>
      <a href="https://twitter.com/sore_bear" rel="noopener noreferrer" target="_blank">
        <StitchBox style={styles.stitchBoxStyle}>
          <img style={styles.socialMediaLinkStyle} src={twitter} alt="twitter logo" />
        </StitchBox>
      </a>

      <a href="https://github.com/sorebear" rel="noopener noreferrer" target="_blank">
        <StitchBox style={styles.stitchBoxStyle}>
          <img style={styles.socialMediaLinkStyle} src={github} alt="github logo" />
        </StitchBox>
      </a>
      <a href="https://www.linkedin.com/in/soren-baird/" rel="noopener noreferrer" target="_blank">
        <StitchBox style={styles.stitchBoxStyle}>
          <img style={styles.socialMediaLinkStyle} src={linkedIn} alt="linked-in logo" />
        </StitchBox>
      </a>
    </div>
    <p style={styles.textStyle}>&copy; Soren Baird - {new Date().getFullYear()}</p>
  </div>
);
