import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, href, value, className, onClick, children, style }) => {
  return href ? (
    <a
      value={value}
      className={className}
      style={{ ...style }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h5>{children}</h5>
    </a>
  ) : (
    <button
      type={type}
      value={value}
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <h5>{children}</h5>
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
  href: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  style: {},
  className: '',
  href: '',
  onClick: () => {},
  type: '',
  value: '',
};
