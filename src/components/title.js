import React from 'react';
import StichText from './stitchText';

const styles = {
  titleContainerStyle: {
    zIndex: 15,
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleStyle: {
    fontSize: '3rem',
    margin: 0,
    cursor: 'default',
  },
};

export default ({ id, text, style }) => (
  <div
    id={id}
    className={`section-title section-title--${text.replace(/\ /g, '-').toLowerCase()}`}
    style={{ ...styles.titleContainerStyle, ...style }}
  >
    <StichText style={{ cursor: 'default' }}>
      <h3 style={styles.titleStyle}>{text}</h3>
    </StichText>
  </div>
);
