import React from 'react';
import StichText from './stitchText';

export default ({ id, text, style }) => (
	<div id={id} className="section-title" style={{...styles.titleContainerStyle, ...style}}>
		<StichText style={{ cursor: 'default'}}>
			<h3 style={styles.titleStyle}>{ text }</h3>
		</StichText>
	</div>
);

const styles = {
	titleContainerStyle: {
		display: 'inline-block',
		zIndex: 15,
		textAlign: 'center',
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	titleStyle: {
		fontSize: '3rem',
		margin: 0,
		cursor: 'default'
	}
};
