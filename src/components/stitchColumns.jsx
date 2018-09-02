
import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  verticalLineContainer: {
    width: '100%',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
  },
  verticalMaskStyle: {
    width: '33.33%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};

const StitchColumn = ({
  section,
  row,
  skillSetArr,
  alignItems,
  columnHeight,
}) => (
  <div
    className={`vertical-line-container vertical-line-container--row-${row}`}
    style={{
      ...styles.verticalLineContainer,
      top: row % 2 === 0 ? 0 : 'unset',
      bottom: row % 2 === 0 ? 'unset' : 0,
      flexDirection: row % 2 === 0 ? 'row-reverse' : 'row',
    }}
  >
    <div
      className={
        `vertical-line-mask
        ${section}__vertical-line-mask 
        ${section}__vertical-line-mask--row-${row} 
        ${section}__vertical-line-mask--${skillSetArr[0]}`
    }
      style={{ ...styles.verticalMaskStyle, alignItems }}
    >
      <div
        className="vertical-line"
        style={{
          // zIndex: -1,
          height: columnHeight,
          // marginTop: row % 2 === 0 ? `${angledLineHeight * percentArr[0]}px` : 0,
        }}
      />
    </div>
    <div
      className={
        `vertical-line-mask 
        ${section}__vertical-line-mask 
        ${section}__vertical-line-mask--row-${row} 
        ${section}__vertical-line-mask--${skillSetArr[1]}`
      }
      style={{ ...styles.verticalMaskStyle, alignItems }}
    >
      <div
        className="vertical-line"
        style={{
          // zIndex: -1,
          height: columnHeight,
          // marginTop: row % 2 === 0 ? `${angledLineHeight * percentArr[1]}px` : 0,
        }}
      />
    </div>
    <div
      className={
        `vertical-line-mask 
        ${section}__vertical-line-mask 
        ${section}__vertical-line-mask--row-${row} 
        ${section}__vertical-line-mask--${skillSetArr[2]}`
      }
      style={{ ...styles.verticalMaskStyle, alignItems }}
    >
      <div
        className="vertical-line"
        style={{
          // zIndex: -1,
          height: columnHeight,
          // marginTop: row % 2 === 0 ? `${angledLineHeight * percentArr[2]}px` : 0,
        }}
      />
    </div>
  </div>
);

export default StitchColumn;

StitchColumn.propTypes = {
  section: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  skillSetArr: PropTypes.array.isRequired,
  alignItems: PropTypes.string,
  // percentArr: PropTypes.array.isRequired,
  // angledLineHeight: PropTypes.number.isRequired,
  columnHeight: PropTypes.string.isRequired,
};

StitchColumn.defaultProps = {
  alignItems: 'flex-start',
};
