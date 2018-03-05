import React from 'react';
import PropTypes from 'prop-types';
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
    wordBreak: 'keep-all',
  },
  titleStyle: {
    fontSize: '3rem',
    margin: 0,
    cursor: 'default',
  },
};

const SectionTitle = ({ id, children, style }) => (
  <div
    id={id}
    className={`section-title section-title--${children.replace(/ /g, '-').toLowerCase()}`}
    style={{ ...styles.titleContainerStyle, ...style }}
  >
    <StichText style={{ cursor: 'default' }}>
      <h3 style={styles.titleStyle}>{children}</h3>
    </StichText>
  </div>
);

export default SectionTitle;

SectionTitle.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

SectionTitle.defaultProps = {
  style: {},
  id: '',
};
