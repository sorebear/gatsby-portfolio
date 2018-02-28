import React from 'react';

export default ({ children, style, hoverContent }) => (
   <div className="animated-border-box" style={styles.boxStyle}>
      { children }
      <div className="animated-border-box__overlay" style={styles.overlayStyle} />
      <div className="animated-border-box__inner-box" style={{...styles.innerBoxStyle, ...style}}>
         <div className="animated-border-box__top-border" style={styles.topBorderStyle} />
         <div className="animated-border-box__right-border" style={styles.rightBorderStyle} />
         <div className="animated-border-box__bottom-border" style={styles.bottomBorderStyle} />
         <div className="animated-border-box__left-border" style={styles.leftBorderStyle} />
         <div className="animated-border-box__hover-content">
            <div style={{ position: 'relative' }}>
               <h3>{hoverContent.title}</h3>
               <div className="animated-border-box__bottom-border" style={styles.bottomBorderStyle} />
            </div>
            <p>
               <a href={hoverContent.links[0].href}>{hoverContent.links[0].title}</a>
               <span> / </span>
               <a href={hoverContent.links[1].href}>{hoverContent.links[1].title}</a>
            </p>
         </div>
      </div>
   </div>
);

const styles = {
   boxStyle: {
      position: 'relative'
   },
   overlayStyle: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
   },
   innerBoxStyle: {
      margin: '10px',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
   },
   topBorderStyle: {
      position: 'absolute',
      top: 0,
      left: 0
   },
   rightBorderStyle: {
      position: 'absolute',
      right: 0,
      top: 0
   },
   bottomBorderStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0
   },
   leftBorderStyle: {
      position: 'absolute',
      left: 0,
      top: 0
   },
}