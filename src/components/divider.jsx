import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  dividerStyle: {
    height: '40vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
};

const Divider = ({ style, children }) => (
  <section style={{ ...styles.dividerStyle, ...style }}>{children}</section>
);

export default Divider;

Divider.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
