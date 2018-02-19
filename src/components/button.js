import React from 'react';

export default ({ children, type, value, style }) => (
	<div style={ styles.buttonContainerStyle }>
		<button style={{ ...styles.buttonStyle, ...style }} value={ value }>
			{children}
		</button>
	</div>
);

const styles = {
	buttonContainerStyle: {
		position: 'relative',
		margin: '2.5rem auto',
		width: '80%',
		height: '60px'
	},
	buttonStyle: {
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		maxWidth: '225px',
		height: '100%',
		border: 'none',
		borderRadius: '5px',
		cursor: 'pointer',
		transition: 'all .2s',
	}
};
