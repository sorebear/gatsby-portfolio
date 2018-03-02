import React, { Component } from 'react';

class StitchRows extends Component {
   constructor(props) {
      super(props);
      this.topAttachment = this.props.rotate > 0 ? { left: 0 } : { right: 0 }
      this.bottomAttachment = this.props.rotate > 0 ? { right: 0 } : { left: 0 }
      this.topTransformOrigin = this.props.rotate > 0 ? '100% 50%' : '0% 50%';
      this.bottomTransformOrigin = this.props.rotate > 0 ? '0% 50%' : '100% 50%';
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
                     transformOrigin: this.topTransformOrigin,
                     width: '100%',
                     position: 'absolute',
                     bottom: 0
                  }}
               />
               <div
                  className={
                     `horizontal-line-mask 
                     ${section}__horizontal-line-mask 
                     ${section}__horizontal-line-mask--row-${rows[0]} 
                     ${section}__horizontal-line-mask--${set} `}
                  style={{
                     ...styles.horiztonalLineMaskStyle,
                     ...this.topAttachment,
                     width: '100%'
                  }}
               />
               
            </div>
            {children}
            <div className="stitch-rows" style={{ position: 'relative' }}>
               <div
                  className="horizontal-line"
                  style={{
                     transform: `rotate(${rotate}deg)`,
                     transformOrigin: this.bottomTransformOrigin,
                     width: '100%',
                     position: 'absolute',
                     top: 0
                  }}
               />
               <div
                  className={
                     `horizontal-line-mask 
                     ${section}__horizontal-line-mask 
                     ${section}__horizontal-line-mask--row-${rows[0]} 
                     ${section}__horizontal-line-mask--${set} `}
                  style={{
                     ...styles.horiztonalLineMaskStyle,
                     ...this.bottomAttachment,
                     width: '100%'
                  }}
               />
            </div>
         </div>
      );
   }
}

export default StitchRows;

const styles = {
   horizontalLineContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
   },
   horiztonalLineMaskStyle: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      overflow: 'hidden',
      position: 'absolute'
   }
};
