import React from 'react';

export default ({ text, style }) => (
	<div style={styles.titleContainerStyle}>
		<h3 style={{ ...styles.titleStyle, ...style }} className="section-title">
			{text}
		</h3>
		<div style={styles.borderWrapperStyle}>
			<div className="section-title__animated-border" style={styles.animatedBorderStyle} />
		</div>
	</div>
);

const styles = {
	titleContainerStyle: {
		display: 'block',
		textAlign: 'center',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
        height: '15rem',
        flexDirection: 'column'
	},
	borderWrapperStyle: {
        overflow: 'hidden',
        width: '200px'
	},
	animatedBorderStyle: {
        borderBottom: '5px dotted black',
        width: '1000px'
	},
	titleStyle: {
		fontSize: '3rem',
		display: 'inline-block',
		borderWidth: '0 0 5px 0',
		margin: 0
	}
};
