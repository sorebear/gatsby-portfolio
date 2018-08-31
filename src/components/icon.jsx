import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  iconStyle: {
    fontSize: '8rem',
    backgroundSize: 'cover',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
};

const Icon = ({ className, style }) => (
  <i className={className} style={{ ...styles.iconStyle, ...style }} />
);

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Icon.defaultProps = {
  style: {},
};

export default Icon;
