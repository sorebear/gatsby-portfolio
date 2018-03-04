import React from 'react';
import PropTypes from 'prop-types';
import StitchRows from '../components/stitchRows';
import enviventLogo from '../images/work/envivent.svg';

const styles = {
  mainWorkStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapperStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoContainerStyle: {
    flex: 1,
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  anchorStyle: {
    width: '75%',
    margin: 0,
  },
  logoStyle: {
    width: '100%',
  },
  textContainerStyle: {
    padding: '0 2rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
};

const MainWork = ({ activeSet }) => {
  const rotate = activeSet === 'web-development' ? -5 : 5;
  return (
    <div className="work__main-work-wrapper" style={styles.mainWorkStyle}>
      <StitchRows rows={['3', '4']} section="work" set={activeSet} rotate={rotate}>
        <div style={styles.contentWrapperStyle} className="work__main-work">
          <div style={styles.logoContainerStyle}>
            <a href="envivent.com" className="work__envivent-link" target="_blank" style={styles.anchorStyle}>
              <img src={enviventLogo} style={styles.logoStyle} alt="envivent web development logo" />
            </a>
          </div>
          <div style={styles.textContainerStyle}>
            <p>I am currently a full-time Web Developer at Envivent Web Development</p>
            <p>
              We work primarily with healthcare ad agencies, acting as their development partner
            </p>
            <p>
              We build traditional websites, content management systems, interactive tools, data
              management portals, closed loop marketing solutions, email campaigns, trade show
              panels, Salesforce.com apps/websites, and more
            </p>
          </div>
        </div>
      </StitchRows>
    </div>
  );
};

export default MainWork;

MainWork.propTypes = {
  activeSet: PropTypes.string.isRequired,
};
