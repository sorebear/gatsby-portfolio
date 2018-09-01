import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  basicSectionStyle: {
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    borderWidth: 0,
  },
};

const BasicSection = ({ id, className, style, children }) => (
  <section
    id={id}
    className={`basic-section ${className}`}
    style={{ ...styles.basicSectionStyle, ...style }}
  >
    <div className={`container ${className}__container`}>{children}</div>
  </section>
);

export default BasicSection;

BasicSection.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  style: PropTypes.object,
};

BasicSection.defaultProps = {
  style: {},
};
