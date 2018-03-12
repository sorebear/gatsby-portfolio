import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  basicCardStyle: {
    padding: '2rem',
    maxWidth: '45%',
    textAlign: 'center',
    transition: '.3s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

const BasicCard = ({ children, style, className }) => (
  <div style={{ ...styles.basicCardStyle, ...style }} className={className}>
    {children}
  </div>
);

export default BasicCard;

BasicCard.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  style: PropTypes.object,
};

BasicCard.defaultProps = {
  style: {},
};
