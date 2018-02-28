import React from 'react';

export default ({ children, style }) => (

   <div className="stitch-box" style={{ position: 'relative', ...style }}>
      { children }
      <div className="stitch-box__top-border-mask" style={styles.topBorderMaskStyle}>
         <div className="stitch-box__top-border stitch-box__border" style={styles.topBorderStyle} />
      </div>
      <div className="stitch-box__bottom-border-mask" style={styles.bottomBorderMaskStyle}>
         <div className="stitch-box__bottom-border stitch-box__border" style={styles.bottomBorderStyle} />
      </div>
      <div className="stitch-box__left-border-mask" style={styles.leftBorderMaskStyle}>
         <div className="stitch-box__left-border stitch-box__border" style={styles.leftBorderStyle} />
      </div>
      <div className="stitch-box__right-border-mask" style={styles.rightBorderMaskStyle}>
         <div className="stitch-box__right-border stitch-box__border" style={styles.rightBorderStyle} />
      </div>
   </div>
);

const styles = {
	componentStyle: {
      position: 'relative',
      display: 'inline-block'
	},
	topBorderStyle: {
		position: 'absolute',
		width: '500px',
		top: 0,
		left: 0
	},
	bottomBorderStyle: {
		position: 'absolute',
		width: '500px',
		bottom: 0,
		right: 0
   },
   leftBorderStyle: {
		position: 'absolute',
		width: '500px',
		bottom: 0,
		left: 0
	},
	rightBorderStyle: {
		position: 'absolute',
		width: '500px',
		top: 0,
		right: 0
	},
	topBorderMaskStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		overflow: 'hidden'
	},
	bottomBorderMaskStyle: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		overflow: 'hidden'
   },
   leftBorderMaskStyle: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		overflow: 'hidden'
	},
	rightBorderMaskStyle: {
		position: 'absolute',
		top: 0,
		right: 0,
		overflow: 'hidden'
	}
};
