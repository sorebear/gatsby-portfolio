import React from 'react';
import Title from '../components/title';

import Icon from '../components/icon';
import BasicCard from '../components/basicCard';
import Button from '../components/button';

export default ({ image }) => (
	<div style={{ ...styles.pricingWrapperStyle, backgroundImage: `url('./static/${image}` }} >
		<h3 style={styles.titleStyle}>Pricing</h3>
		<div style={styles.pricingStyle} className="container">
			<BasicCard className="basic-card--white">
            <Icon className="icon-basic-server-cloud" />
				<h3 style={{ marginTop: 0}}>Custom CMS w/Hosting</h3>
				<h2>$55/month</h2>
				<p>
					We will develop your designs into a custom CMS Site and maintain the hosting for you.
				</p>
            <Button style={{ justifySelf: 'flex-end'}}>
               Hire Me
            </Button>
			</BasicCard>
			<BasicCard className="basic-card--white">
            <Icon className="icon-basic-clock" />
				<h3 style={{ marginTop: 0}}>Hire Me By The Hour</h3>
				<h2>$35/hour</h2>
				<p>
					Do you have a project that needs someone to quickly jump in and help? Or perhaps an ongoing project and you are uncertain about the total amount of work required? Hiring by the hour might be best for you.
				</p>
            <Button>
               Hire Me
            </Button>
			</BasicCard>
			<BasicCard className="basic-card--white">
            <Icon className="icon-basic-notebook-pencil" />
				<h3 style={{ marginTop: 0}}>Hire Me By The Project</h3>
				<h2>Let's Talk!</h2>
				<p>
					Do you have a specific project you would like built or you quickly need someone to jump in and get a product to completion? Hiring by the project might be best for you. Let's talk about the scope of your project and negotiate a fair price.
				</p>
				<Button>
					Get Started
				</Button>
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
