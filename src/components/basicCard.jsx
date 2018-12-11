import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  basicCardStyle: {
    padding: '2rem',
    // textAlign: 'center',
    transition: '.3s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '620px',
    maxWidth: '100%',
    margin: '0 2% 4% 2%',
  },
};

const BasicCard = ({ children, style, className }) => (
  <div style={{ ...styles.basicCardStyle, ...style }} className={`basic-card ${className}`}>
    {children}
  </div>
);

export default BasicCard;

BasicCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  style: PropTypes.object,
};

BasicCard.defaultProps = {
  className: '',
  style: {},
};
