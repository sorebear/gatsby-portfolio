import React from 'react';

const styles = {
  componentStyle: {
    position: 'relative',
    display: 'inline-block',
  },
  topBorderStyle: {
    position: 'absolute',
    width: '500px',
    top: 0,
    left: 0,
  },
  bottomBorderStyle: {
    position: 'absolute',
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

export default ({ children, style }) => (
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
