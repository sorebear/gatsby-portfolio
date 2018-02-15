import React from 'react';
import Title from '../components/title';

import Icon from '../components/icon';
import BasicCard from '../components/basicCard';

export default ({ image }) => (
	<div style={{ ...styles.pricingWrapperStyle, backgroundImage: `url('./static/${image}` }}>
		<h3 style={styles.titleStyle}>Pricing</h3>
		<div style={styles.pricingStyle} className="container">
			<BasicCard style={{backgroundColor: 'rgba(245, 245, 245, .9)'}}>
            <Icon className="icon-basic-server-cloud" />
				<h3 style={{ marginTop: 0}}>Custom CMS w/Hosting</h3>
				<h2>$55/month</h2>
				<p>
					We will develop your designs into a custom CMS Site and maintain the hosting for you.
				</p>
			</BasicCard>
			<BasicCard style={{backgroundColor: 'rgba(245, 245, 245, .9)'}}>
            <Icon className="icon-basic-clock" />
				<h3 style={{ marginTop: 0}}>Pay By Time</h3>
				<h2>$35/hour</h2>
				<p>
					We will develop your designs into a custom CMS Site and maintain the hosting for you.
				</p>
			</BasicCard>
			<BasicCard style={{backgroundColor: 'rgba(245, 245, 245, .9)'}}>
            <Icon className="icon-basic-notebook-pencil" />
				<h3 style={{ marginTop: 0}}>Pay By Project</h3>
				<h2>Let's Talk!</h2>
				<p>
					We will develop your designs into a custom CMS Site and maintain the hosting for you.
				</p>
			</BasicCard>
		</div>
	</div>
);

const styles = {
	pricingWrapperStyle: {
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		padding: '5rem 0'
	},
	pricingStyle: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	titleStyle: {
		fontSize: '3rem',
		color: 'rgb(0, 106, 114)',
		marginBottom: '5rem',
		textAlign: 'center',
		textShadow: '0 4px 2px rgba(0, 0, 0, .3)'
	}
};
