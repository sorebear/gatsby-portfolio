import React from 'react';
import twitter from '../images/social/twitter.svg';
import github from '../images/social/github.svg';
import linkedIn from '../images/social/linked-in.svg';
import StitchBox from '../components/stitchBox';
import stitchColumns from '../components/stitchColumns';

export default () => (
	<div className="footer" style={styles.footerStyle}>
		<div style={styles.linkContainerStyle}>
			<a href="https://twitter.com/sore_bear" target="_blank">
				<StitchBox style={styles.stitchBoxStyle}>
					<img style={styles.socialMediaLinkStyle} src={twitter} />
				</StitchBox>
			</a>

			<a href="https://github.com/sorebear" target="_blank">
				<StitchBox style={styles.stitchBoxStyle}>
					<img style={styles.socialMediaLinkStyle} src={github} />
				</StitchBox>
			</a>
			<a href="https://www.linkedin.com/in/soren-baird/" target="_blank">
				<StitchBox style={styles.stitchBoxStyle}>
					<img style={styles.socialMediaLinkStyle} src={linkedIn} />
				</StitchBox>
			</a>
		</div>
		<p style={styles.textStyle}>&copy; Soren Baird - {new Date().getFullYear()}</p>
	</div>
);

const styles = {
	footerStyle: {
		minHeight: '20vh',
		backgroundColor: '#333',
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column'
	},
	stitchBoxStyle: {
		height: '75px',
      width: '75px',
      margin: '10px'
	},
	linkContainerStyle: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	socialMediaLinkStyle: {
		margin: '5px'
	},
	textStyle: {
		color: 'white'
	}
};
