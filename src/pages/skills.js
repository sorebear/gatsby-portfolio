import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../components/icon';
import Button from '../components/button';
import StitchBox from '../components/stitchBox';

import bambooDivider from '../images/bamboo-divider.svg';
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
				rotate: 7.5
			},
			{
				name: 'Web Development',
				icon: 'icon-basic-laptop',
				rotate: -7.5
			},
			{
				name: 'Mobile Development',
				icon: 'icon-basic-smartphone',
				rotate: 7.5
			}]
		this.state = {
         translate: 0,
         activeService: 'cms-development'
		};
	}

	setTranslate(position, activeService) {
		this.setState({
         translate: position,
         activeService : activeService
		});
	}

	renderSkillSets() {
		return this.skillSets.map((skillSet, index) => {
			const parsedName = skillSet.name.replace(/\ /g, '-').toLowerCase();
			return (
				<div key={index} className={`skills__skill-type-card--${parsedName}`} style={styles.typeCardWrapperStyle}>
					<StitchBox style={{ transform: `rotate(${skillSet.rotate}deg`}}>
						<div
							onClick={() => this.props.updateSkillSet(parsedName, 'skills')}
							className='skills__skill-type-card'
							style={{...styles.typeCardStyle, transform: `rotate(${skillSet.rotate * -1}deg`}}
						>
							<Icon className={`${skillSet.icon} skills__skill-type-icon`} />
							<h4 style={{ marginTop: 0 }}>{skillSet.name}</h4>
						</div>
					</StitchBox>
				</div>
			)
		});
	}

	render() {
		return (
			<div className={`skills ${this.props.activeSkillSet}`}>
				<div className="container">
					<div
						className="skills__types-container"
						style={styles.typesContainerStyle}
					>
						{ this.renderSkillSets() } 
					</div>
					<div className="vertical-line-container vertical-line-container--row-1" style={styles.verticalLineContainer}>
						<div className="vertical-line-mask skills__vertical-line-mask--first-row skills__vertical-line-mask--cms-development" style={styles.verticalMaskStyle}>
							<div className="border-vertical" />
						</div>
						<div className="vertical-line-mask skills__vertical-line-mask--first-row skills__vertical-line-mask--web-development" style={styles.verticalMaskStyle}>
							<div className="border-vertical" />
						</div>
						<div className="vertical-line-mask skills__vertical-line-mask--first-row skills__vertical-line-mask--mobile-development" style={styles.verticalMaskStyle}>
							<div className="border-vertical" />
						</div>
					</div>
				</div>

				<div className="skills__details-wrapper" style={styles.skillsDetailsWrapperStyle}>
					<div
						className="skills__details"
						style={{
							...styles.skillsDetailsStyle,
							transform: `translateX(${this.state.translate * -33.33}%)`
						}}
					>
						<div
							className="skills__details--cms-development"
							style={styles.skillsDetailsItemStyle}
						>
							<div className="container">
								<div className="skills__technology-container" style={styles.technologiesStyle}>
									<img
										className="skill-icon gatsby"
										style={styles.iconStyle}
										src={
											'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg=='
										}
									/>
									<h3 style={{marginBottom: 0}}>&amp;&amp;</h3>
									<img
										className="skill-icon graphql"
										style={styles.iconStyle}
										src={graphQLIcon}
									/>
									<h3 style={{marginBottom: 0}}>&amp;&amp;</h3>
									<img
										className="skill-icon netlify"
										style={styles.iconStyle}
										src={netlifyIcon}
									/>
									<h3 style={{marginBottom: 0}}>||</h3>
									<img
										className="skill-icon wordpress"
										style={styles.iconStyle}
										src={wordpressIcon}
									/>
									<h3 style={{marginBottom: 0}}>||</h3>
									<img
										className="skill-icon drupal"
										style={styles.iconStyle}
										src={drupalIcon}
									/>
								</div>
								<p style={styles.detailsDescription}>
									I primarily build modern, fast, and secure CMS solutions with
									Gatsby.js, GraphQL and Netlify. 
								</p>
								<p style={styles.detailsDescription}>
									I also build traditional CMS sites using Wordpress and Drupal.
								</p>
							</div>
						</div>
						<div
							className="skills__details--web-development"
							style={styles.skillsDetailsItemStyle}
						>
							<div className="container">
								<div className="skills__technology-container" style={styles.technologiesStyle}>
									<img
										className="skill-icon meteor"
										style={styles.iconStyle}
										src={meteorIcon}
									/>
									<h3 style={{marginBottom: 0}}>&amp;&amp;</h3>
									<img
										className="skill-icon react"
										style={styles.iconStyle}
										src={reactIcon}
									/>
									<h3 style={{marginBottom: 0}}>&amp;&amp;</h3>
									<img
										className="skill-icon nodejs"
										style={styles.iconStyle}
										src={nodeJSIcon}
									/>
									<h3 style={{marginBottom: 0}}>&amp;&amp;</h3>
									<img
										className="skill-icon mongodb"
										style={styles.iconStyle}
										src={mongoDBIcon}
									/>
									<h3 style={{marginBottom: 0}}>||</h3>
									<img
										className="skill-icon php"
										style={styles.iconStyle}
										src={phpIcon}
									/>
								</div>
								<p style={styles.detailsDescription}>
									I primarily build full-stack web applications using the Meteor Framework with React, Node.js and MongoDB.
								</p>
								<p style={styles.detailsDescription}>
									I also build a variety of other web applications using JavaScript and PHP.
								</p>
							</div>
						</div>
						<div
							className="skills__details--mobile-development"
							style={styles.skillsDetailsItemStyle}
						>
							<div className="container">
								<div className="skills__technology-container" style={styles.technologiesStyle}>
									<img
										className="skill-icon react-native"
										style={styles.iconStyle}
										src={reactIcon}
									/>
									<h3 style={{marginBottom: 0}}>||</h3>
									<img
										className="skill-icon meteor"
										style={styles.iconStyle}
										src={meteorIcon}
									/>
									<h3 style={{marginBottom: 0}}>||</h3>
									<img
										className="skill-icon android"
										style={styles.iconStyle}
										src={androidIcon}
									/>
									<h3 style={{marginBottom: 0}}>&amp;&amp;</h3>
									<img
										className="skill-icon java"
										style={styles.iconStyle}
										src={javaIcon}
									/>
								</div>

								<p style={styles.detailsDescription}>
									I build Android and iOS mobile applications using React Native and Meteor with Cordova.
								</p>
								<p style={styles.detailsDescription}>
									I also build native Android applications using Java and Android Studio.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;

const styles = {
	typesContainerStyle: {
		display: 'flex',
		position: 'relative',
		justifyContent: 'space-between',
	},
	typeCardWrapperStyle: {
		width: '33.33%'
	},
	typeCardStyle: {
      textAlign: 'center',
	},
	typesSelectorLineStyle: {
		// height: '4rem',
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
		alignItems: 'center',
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
		position: 'absolute',
		display: 'flex',
		justifyContent: 'center',
		overflow: 'hidden'
	}
};
