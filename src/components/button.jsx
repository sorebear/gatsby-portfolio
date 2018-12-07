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
    color: 'inherit',
  },
};

const Button = ({ type, href, value, className, onClick, children, style }) => {
  return href ? (
    <a
      value={value}
      className={className}
      style={{ ...styles.buttonStyle, ...style }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h5 style={styles.textStyle}>{children}</h5>
    </a>
  ) : (
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
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  href: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: {},
  className: '',
  href: '',
};
