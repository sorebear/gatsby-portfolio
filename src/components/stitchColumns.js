import React from 'react';

export default ({ section, row, heightArr=[], alignItems='flex-start', skillSetArr=[] }) => (
	<div
		className={`vertical-line-container vertical-line-container--row-${row}`}
		style={styles.verticalLineContainer}
	>
		<div
			className={`vertical-line-mask ${section}__vertical-line-mask ${section}__vertical-line-mask--row-${row} ${section}__vertical-line-mask--${skillSetArr[0]}`}
			style={{...styles.verticalMaskStyle, alignItems: alignItems}}
		>
			<div className="vertical-line" style={{ height: heightArr[0] }} />
		</div>
		<div
			className={`vertical-line-mask ${section}__vertical-line-mask ${section}__vertical-line-mask--row-${row} ${section}__vertical-line-mask--${skillSetArr[1]}`}
			style={{...styles.verticalMaskStyle, alignItems: alignItems}}
		>
			<div className="vertical-line" style={{ height: heightArr[1] }} />
		</div>
		<div
         className={`vertical-line-mask ${section}__vertical-line-mask ${section}__vertical-line-mask--row-${row} ${section}__vertical-line-mask--${skillSetArr[2]}`}
			style={{...styles.verticalMaskStyle, alignItems: alignItems}}
		>
			<div className="vertical-line" style={{ height: heightArr[2] }} />
		</div>
	</div>
);

const styles = {
	verticalLineContainer: {
		width: '100%',
		display: 'flex',
		position: 'relative',
		justifyContent: 'space-between'
	},
	verticalMaskStyle: {
		width: '33.33%',
		display: 'flex',
		justifyContent: 'center',
		overflow: 'hidden'
	}
};
