import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

class StitchRows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topAttachment: this.props.rotate > 0 ? { left: 0 } : { right: 0 },
      bottomAttachment: this.props.rotate > 0 ? { right: 0 } : { left: 0 },
      topTransformOrigin: this.props.rotate > 0 ? '100% 50%' : '0% 50%',
      bottomTransformOrigin: this.props.rotate > 0 ? '0% 50%' : '100% 50%',
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.rotate > 0) {
      this.setState({
        topAttachment: { left: 0 },
        bottomAttachment: { right: 0 },
        topTransformOrigin: '100% 50%',
        bottomTransformOrigin: '0 50%',
      });
    } else {
      this.setState({
        topAttachment: { right: 0 },
        bottomAttachment: { left: 0 },
        topTransformOrigin: '0% 50%',
        bottomTransformOrigin: '100% 50%',
      });
    }
  }

  render() {
    const { section, children, rotate, rows, set } = this.props;
    return (
      <div style={styles.horizontalLineContainer}>
        <div className="stitch-rows" style={{ position: 'relative' }}>
          <div
            className="horizontal-line"
            style={{
              transform: `rotate(${rotate}deg)`,
              transformOrigin: this.state.topTransformOrigin,
              width: '100%',
              position: 'absolute',
              bottom: 0,
            }}
          />
          <div
            className={`horizontal-line-mask 
                     ${section}__horizontal-line-mask 
                     ${section}__horizontal-line-mask--row-${rows[0]} 
                     ${section}__horizontal-line-mask--${set} `}
            style={{
              ...styles.horiztonalLineMaskStyle,
              ...this.state.topAttachment,
              width: '100%',
            }}
          />
        </div>
        {children}
        <div className="stitch-rows" style={{ position: 'relative' }}>
          <div
            className="horizontal-line"
            style={{
              transform: `rotate(${rotate}deg)`,
              transformOrigin: this.state.bottomTransformOrigin,
              width: '100%',
              position: 'absolute',
              top: 0,
            }}
          />
          <div
            className={`horizontal-line-mask 
                     ${section}__horizontal-line-mask 
                     ${section}__horizontal-line-mask--row-${rows[0]} 
                     ${section}__horizontal-line-mask--${set} `}
            style={{
              ...styles.horiztonalLineMaskStyle,
              ...this.state.bottomAttachment,
              width: '100%',
            }}
          />
        </div>
      </div>
    );
  }
}

export default StitchRows;

StitchRows.propTypes = {
  section: PropTypes.string.isRequired,
  rotate: PropTypes.number.isRequired,
  rows: PropTypes.array.isRequired,
  set: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};
