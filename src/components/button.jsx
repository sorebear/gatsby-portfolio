import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  buttonStyle: {
    padding: '16px 20px',
    width: '100%',
    maxWidth: '250px',
    textAlign: 'center',
    color: 'white',
    border: '.15rem solid white',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    margin: '0 auto',
  },
  textStyle: {
    margin: 0,
    padding: 0,
  },
};

const Button = ({ type, value, className, onClick, children, style }) => (
  <button
    type={type}
    value={value}
    className={className}
    style={{ ...styles.buttonStyle, ...style }}
    onClick={onClick}
  >
    <h5 style={styles.textStyle}>{children}</h5>
  </button>
);

export default Button;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Button.defaultProps = {
  style: {},
  className: '',
};
