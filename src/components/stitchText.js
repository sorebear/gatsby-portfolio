import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  componentStyle: {
    position: 'relative',
    display: 'inline-block',
  },
  topBorderStyle: {
    position: 'absolute',
    borderColor: 'inherit',
    width: '500px',
    top: 0,
    left: 0,
  },
  bottomBorderStyle: {
    position: 'absolute',
    borderColor: 'inherit',
    width: '500px',
    bottom: 0,
    right: 0,
  },
  topBorderMaskStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  bottomBorderMaskStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
  },
};

const StitchText = ({ children }) => (
  <div className="stitch-text" style={{ position: 'relative' }}>
    {children}
    <div className="stitch-text__top-border-mask" style={styles.topBorderMaskStyle}>
      <div className="stitch-text__top-border" style={styles.topBorderStyle} />
    </div>
    <div className="stitch-text__bottom-border-mask" style={styles.bottomBorderMaskStyle}>
      <div className="stitch-text__bottom-border" style={styles.bottomBorderStyle} />
    </div>
  </div>
);

export default StitchText;

StitchText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};
