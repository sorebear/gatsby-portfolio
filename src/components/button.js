import React from 'react';
import AnimatedBorderBox from './animatedBorderBox';

export default ({ type, value, className, children, style }) => (
   <button 
      type={type}
      value={value} 
      className={className}
      style={{...styles.buttonStyle, ...style}}>
         <h5 style={styles.textStyle}>{ children }</h5>
   </button>
);

const styles = {
   buttonStyle: {
		padding: '16px 20px',
      width: '100%',
		maxWidth: '250px',
		textAlign: 'center',
      color: 'black',
      border: '2px solid black',
		backgroundColor: 'transparent',
		cursor: 'pointer',
		margin: '0 auto'
	},
	textStyle: {
		margin: 0,
		padding: 0
	}
}