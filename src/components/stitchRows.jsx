import React from 'react';
import PropTypes from 'prop-types';

import StitchColumns from './stitchColumns';

const styles = {
  horizontalLineContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  horiztonalLineMaskStyle: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    overflow: 'hidden',
    position: 'absolute',
  },
};

const StitchRows = props => (
  <div style={styles.horizontalLineContainer}>
    <div className="stitch-rows" style={{ position: 'relative', height: '5.8rem' }}>
      <div
        className="horizontal-line horizontal-line-top"
        style={{
          transform: `rotate(${props.rotate}deg)`,
          transformOrigin: props.rotate > 0 ? '100% 50%' : '0% 50%',
          left: props.rotate > 0 ? '1%' : 'unset',
          right: props.rotate > 0 ? 'unset' : '1%',
          width: '98%',
          position: 'absolute',
          height: '100px',
          bottom: '-95px',
          zIndex: 1,
        }}
      />
      <div
        className={`horizontal-line-mask 
                  ${props.section}__horizontal-line-mask 
                  ${props.section}__horizontal-line-mask--row-${props.rows[0]} 
                  ${props.section}__horizontal-line-mask--${props.set} `}
        style={{
          ...styles.horiztonalLineMaskStyle,
          left: props.rotate > 0 ? 0 : 'unset',
          right: props.rotate > 0 ? 'unset' : 0,
          // height: `${props.angledLineHeight + 5}px`,
          height: '125px',
          width: '100%',
          zIndex: 5,
        }}
      />
      <StitchColumns
        row={props.rows[0]}
        section={props.section}
        columnHeight={props.columnHeights[0]}
        angledLineHeight={props.angledLineHeight}
        percentArr={props.rotate > 0 ? [0.833, 0.5, 0.167] : [0.167, 0.5, 0.833]}
        skillSetArr={props.setArr}
      />
    </div>
    {props.children}
    <div className="stitch-rows" style={{ position: 'relative', height: '5.8rem' }}>
      <div
        className="horizontal-line horizontal-line-bottom"
        style={{
          transform: `rotate(${props.rotate}deg)`,
          transformOrigin: props.rotate < 0 ? '100% 50%' : '0% 50%',
          left: props.rotate < 0 ? '1%' : 'unset',
          right: props.rotate < 0 ? 'unset' : '1%',
          width: '98%',
          position: 'absolute',
          height: '100px',
          top: '-95px',
          zIndex: 1,
        }}
      />
      <div
        className={`horizontal-line-mask 
                  ${props.section}__horizontal-line-mask 
                  ${props.section}__horizontal-line-mask--row-${props.rows[0]} 
                  ${props.section}__horizontal-line-mask--${props.set} `}
        style={{
          ...styles.horiztonalLineMaskStyle,
          left: props.rotate < 0 ? 0 : 'unset',
          right: props.rotate < 0 ? 'unset' : 0,
          // height: `${props.angledLineHeight + 5}px`,
          height: '125px',
          width: '100%',
          zIndex: 5,
        }}
      />
      <StitchColumns
        row={props.rows[1]}
        section={props.section}
        columnHeight={props.columnHeights[1]}
        angledLineHeight={props.angledLineHeight}
        percentArr={props.rotate > 0 ? [0.833, 0.5, 0.167] : [0.167, 0.5, 0.833]}
        skillSetArr={props.setArr}
      />
    </div>
  </div>
);

export default StitchRows;

StitchRows.propTypes = {
  section: PropTypes.string.isRequired,
  columnHeights: PropTypes.array.isRequired,
  setArr: PropTypes.array.isRequired,
  rotate: PropTypes.number.isRequired,
  angledLineHeight: PropTypes.number.isRequired,
  rows: PropTypes.array.isRequired,
  set: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};
