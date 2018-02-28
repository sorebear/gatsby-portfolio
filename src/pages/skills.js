import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../components/icon';
import Button from '../components/button';
import StitchBox from '../components/stitchBox';
import StitchColumns from '../components/stitchColumns';

const gatsbyIcon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg=='
import reactIcon from '../images/devicons/react.svg';
import meteorIcon from '../images/devicons/meteor.svg';
import mongoDBIcon from '../images/devicons/mongodb.svg';
import nodeJSIcon from '../images/devicons/nodejs.svg';
import graphQLIcon from '../images/devicons/graphql.svg';
import netlifyIcon from '../images/devicons/netlify.svg';
import androidIcon from '../images/devicons/android.svg';
import javaIcon from '../images/devicons/java.svg';
import drupalIcon from '../images/devicons/drupal.svg';
import wordpressIcon from '../images/devicons/wordpress.svg';
import phpIcon from '../images/devicons/php.svg';

import BasicCard from '../components/basicCard';

class Skills extends Component {
	constructor(props) {
		super(props);
		this.setTranslate = this.setTranslate.bind(this);
		this.skillSets = [
			{
				name: 'CMS Development',
				icon: 'icon-basic-webpage-img-txt',
				rotate: 7.5,
				details: {
					text: [
						'I primarily build modern, fast, and secure CMS solutions with Gatsby.js, GraphQL and Netlify.',
						'I also build traditional CMS sites using Wordpress and Drupal.'
					],
					icons: [
						{ icon: gatsbyIcon },
						{ separator: 'and' },
						{ icon: graphQLIcon },
						{ separator: 'and' },
						{ icon: netlifyIcon },
						{ separator: 'or' },
						{ icon: wordpressIcon },
						{ separator: 'or' },
						{ icon: drupalIcon }
					]
				}
			},
			{
				name: 'Web Development',
				icon: 'icon-basic-laptop',
				rotate: -7.5,
				details: {
					text: [
						'I primarily build full-stack web applications using the Meteor Framework with React, Node.js and MongoDB.',
						'I also build a variety of other web applications using JavaScript and PHP.'
					],
					icons: [
						{ icon: meteorIcon },
						{ separator: 'and' },
						{ icon: reactIcon },
						{ separator: 'and' },
						{ icon: nodeJSIcon },
						{ separator: 'and' },
						{ icon: mongoDBIcon },
						{ separator: 'or' },
						{ icon: phpIcon }
					]
				}
			},
			{
				name: 'Mobile Development',
				icon: 'icon-basic-smartphone',
				rotate: 7.5,
				details: {
					text: [
						'I build Android and iOS mobile applications using React Native and Meteor with Cordova.',
						'I also build native Android applications using Java and Android Studio.'
					],
					icons: [
						{ icon: reactIcon },
						{ separator: 'or' },
						{ icon: meteorIcon },
						{ separator: 'or' },
						{ icon: androidIcon },
						{ separator: 'and' },
						{ icon: javaIcon }
					]
				}
			}
		];
		this.state = {
			translate: 0,
			activeService: 'cms-development'
		};
	}

	setTranslate(position, activeService) {
		this.setState({
			translate: position,
			activeService: activeService
		});
	}

	renderSkillSets() {
		return this.skillSets.map((skillSet, index) => {
			const parsedName = skillSet.name.replace(/\ /g, '-').toLowerCase();
			return (
				<div
					key={index}
					className={`skills__skill-type-card--${parsedName}`}
					style={styles.typeCardWrapperStyle}
				>
					<StitchBox style={{ transform: `rotate(${skillSet.rotate}deg` }}>
						<div
							onClick={() => this.props.updateSkillSet(parsedName, 'skills', index)}
							className="skills__skill-type-card"
							style={{
								...styles.typeCardStyle,
								transform: `rotate(${skillSet.rotate * -1}deg`
							}}
						>
							<Icon className={`${skillSet.icon} skills__skill-type-icon`} />
							<h4 style={{ marginTop: 0 }}>{skillSet.name}</h4>
						</div>
					</StitchBox>
				</div>
			);
		});
	}

	renderSkillSetDetailsIcons(i) {
		return this.skillSets[i].details.icons.map((icon, index) => {
			if (icon.icon) {
				return (
					<img key={index} className={`skill-icon`} style={styles.iconStyle} src={icon.icon} />
				)
			}
			if (icon.separator === 'and') {
				return <h3 key={index} style={{ marginBottom: 0 }}>&amp;&amp;</h3>
			}
			return <h3 key={index} style={{ marginBottom: 0}}>||</h3>
		});
	}

	renderSkillSetDetailsText(i) {
		return this.skillSets[i].details.text.map((text, index) => {
			return <p key={index} style={styles.detailsDescription}>{text}</p>
		});
	}

	renderSkillSetDetails() {
		return this.skillSets.map((skillSetDetails, index) => {
			const parsedName = skillSetDetails.name.replace(/\ /g, '-').toLowerCase();
			return (
				<div key={index} className={`skills__details--${parsedName}`} style={styles.skillsDetailsItemStyle}>
					<div className="container">
						<div className="skills__technology-container" style={styles.technologiesStyle}>
							{ this.renderSkillSetDetailsIcons(index) }
						</div>
						{ this.renderSkillSetDetailsText(index) }
					</div>
				</div>
			)
		});
	}

	render() {
		return (
			<div className={`skills ${this.props.activeSkillSet}`}>
				<div className="container">
					<div className="skills__types-container" style={styles.typesContainerStyle}>
						{this.renderSkillSets()}
					</div>
					<StitchColumns row='1' section='skills' skillSetArr={['cms-development', 'web-development', 'mobile-development']} />
				</div>

				<div className="skills__details-wrapper" style={styles.skillsDetailsWrapperStyle}>
					<div
						className="skills__details"
						style={{
							...styles.skillsDetailsStyle,
							transform: `translateX(${this.props.activeIndex * -33.33}%)`
						}}
					>
						{ this.renderSkillSetDetails() }
					</div>
				</div>
				<StitchColumns row='2' section='skills' skillSetArr={['mobile-development', 'web-development', 'cms-development']} />
			</div>
		);
	}
}

export default Skills;

const styles = {
	typesContainerStyle: {
		display: 'flex',
		position: 'relative',
		justifyContent: 'space-between'
	},
	typeCardWrapperStyle: {
		width: '33.33%'
	},
	typeCardStyle: {
		textAlign: 'center'
	},
	typesSelectorLineStyle: {
		width: 0,
		borderRightWidth: 0,
		borderTopWidth: 0,
		borderBottomWidth: 0,
		position: 'absolute',
		left: '50%',
		transform: 'translateX(-50%)',
		transition: '1s',
		top: '100%'
	},
	iconStyle: {
		height: '5.5rem',
		marginBottom: 0
	},
	technologiesStyle: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	skillsDetailsWrapperStyle: {
		width: '100%',
		overflowX: 'hidden',
		position: 'relative'
	},
	skillsDetailsStyle: {
		width: '300%',
		borderLeftWidth: 0,
		borderRightWidth: 0,
		display: 'flex',
		transition: 'all 1s'
	},
	detailsDescription: {
		width: '100%',
		maxWidth: '625px',
		textAlign: 'center'
	},
	skillsDetailsItemStyle: {
		width: '33.33%'
	},
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
