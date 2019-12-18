import React from 'react';
import PropTypes from 'prop-types';

import SectionTitle from '../components/sectionTitle';
import StitchRows from '../components/stitchRows';
import bcgroup from '../images/work/360logo.png';

const styles = {
  mainWorkStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  contentWrapperStyle: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 10,
  },
  logoContainerStyle: {
    minWidth: '50%',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  workSectionTitleStyle: {
    position: 'absolute',
    top: '8.7rem',
    transform: 'translateY(-50%)',
  },
  anchorStyle: {
    // width: '75%',
    margin: 0,
  },
  logoStyle: {
    width: '100%',
    maxWidth: '300px',
  },
  textContainerStyle: {
    padding: '0 2rem',
    minWidth: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const MainWork = ({ activeSet, angledLineHeight }) => {
  const rotate = activeSet === 'web-development' ? -5 : 5;
  return (
    <div className="work__main-work-wrapper" style={styles.mainWorkStyle}>
      <SectionTitle style={styles.workSectionTitleStyle}>
        Professional Experience
      </SectionTitle>
      <StitchRows
        rows={[3, 4]}
        section="work"
        set={activeSet}
        columnHeights={['18.85rem', '18.85rem']}
        setArr={['mobile-development', 'cms-development', 'web-development']}
        angledLineHeight={angledLineHeight}
        rotate={rotate}
      >
        <div style={styles.contentWrapperStyle} className="work__main-work">
          <div style={styles.logoContainerStyle}>
            <a
              href="https://www.360bcgroup.com/"
              className="work__360bc-group-link"
              rel="noopener noreferrer"
              target="_blank"
              style={styles.anchorStyle}
            >
              <img src={bcgroup} style={styles.logoStyle} alt="360 BC Group Logo" />
            </a>
          </div>
          <div style={styles.textContainerStyle}>
            <p>
              I am currently a full-time CMS Developer at <a href="https://www.360bcgroup.com/" target="_blank" rel="noopener noreferrer">360 BC Group Inc.</a>, a parent corporation for three B2B companies: 360Biz, 360Civic, and 360Circuits.
            </p>
            <p>
              I work primarily with 360Civic, building websites for public sector entities
              (school districts, utiliaties, municipalities) and nonprofit organizations.
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
  angledLineHeight: PropTypes.number.isRequired,
};
