import React, { Component } from 'react';
import Icon from '../components/icon';
import Button from '../components/button';
import bambooDivider from '../images/bamboo-divider.svg';
import reactIcon from '../images/devicons/react.svg';
import meteorIcon from '../images/devicons/meteor.svg';
import mongoDBIcon from '../images/devicons/mongodb.svg';
import nodeJSIcon from '../images/devicons/nodejs.svg';
import graphQLIcon from '../images/devicons/graphql.svg';
import netlifyIcon from '../images/devicons/netlify.svg';
import androidIcon from '../images/devicons/android.svg';
import javaIcon from '../images/devicons/java.svg';

import BasicCard from '../components/basicCard';

class Services extends Component {
	constructor(props) {
		super(props);
		this.setTranslate = this.setTranslate.bind(this);
		this.state = {
         translate: 0,
         activeService: 'custom-cms'
		};
	}

	setTranslate(position, activeService) {
		this.setState({
         translate: position,
         activeService : activeService
		});
	}

	render() {
		return (
			<div className={`services ${this.state.activeService}`}>
				<div className="container">
					<div
						className="services__types-container"
						style={styles.typesContainerStyle}
					>
						<div
							className="services__types-selector--box"
							style={{
								...styles.typesSelectorStyle,
								left: `${this.state.translate * 50}%`,
								transform: `translateX(${this.state.translate * -50}%)`
							}}
						>
                     <div className="services__types-selector--line" style={styles.typesSelectorLineStyle}>
                     </div>
                  </div>
						<div
							onClick={() => this.setTranslate(0, 'custom-cms')}
							className="services__service-type-card services__service-type-card--custom-cms"
							style={styles.typeCardStyle}
						>
							<Icon className="icon-basic-webpage-img-txt services__service-type-icon" />
							<h4 style={{ marginTop: 0 }}>Custom CMS Development</h4>
						</div>
						<div
							onClick={() => this.setTranslate(1, 'web-development')}
							className="services__service-type-card services__service-type-card--web-development"
							style={styles.typeCardStyle}
						>
							<Icon className="icon-basic-laptop" />
							<h4 style={{ marginTop: 0 }}>Web Development</h4>
						</div>
						<div
							onClick={() => this.setTranslate(2, 'mobile-development')}
							className="services__service-type-card services__service-type-card--mobile-development"
							style={styles.typeCardStyle}
						>
							<Icon className="icon-basic-smartphone" />
							<h4 style={{ marginTop: 0 }}>Mobile Development</h4>
						</div>
					</div>
				</div>

				<div className="services__details-wrapper" style={styles.servicesDetailsWrapperStyle}>
					<div
						className="services__details"
						style={{
							...styles.servicesDetailsStyle,
							transform: `translateX(${this.state.translate * -33.33}%)`
						}}
					>
						<div
							className="services__details--custom-cms"
							style={styles.servicesDetailsItemStyle}
						>
							<div className="container">
								<div className="technology-container" style={styles.technologiesStyle}>
									<img
										className="skill-icon gatsby"
										style={styles.iconStyle}
										src={
											'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg=='
										}
									/>
									<h3>&amp;&amp;</h3>
									<img
										className="skill-icon react"
										style={styles.iconStyle}
										src={reactIcon}
									/>
									<h3>&amp;&amp;</h3>
									<img
										className="skill-icon graphql"
										style={styles.iconStyle}
										src={graphQLIcon}
									/>
									<h3>&amp;&amp;</h3>
									<img
										className="skill-icon netlify"
										style={styles.iconStyle}
										src={netlifyIcon}
									/>
								</div>
								<p>
									Do you need a blog or small business website? Why not have something
									custom that will allow you to easily add new content through a smooth,
									intuitive interface. I can help you build, maintain, and update your
									page.
								</p>
								<p>
									I specialize in building modern, fast, and secure CMS solutions with
									Gatsby.js, React.js, GraphQL, and Netlify.
								</p>
							</div>
						</div>
						<div
							className="services__details--web-development"
							style={styles.servicesDetailsItemStyle}
						>
							<div className="container">
								<div className="technology-container" style={styles.technologiesStyle}>
									<img
										className="skill-icon meteor"
										style={styles.iconStyle}
										src={meteorIcon}
									/>
									<h3>&amp;&amp;</h3>
									<img
										className="skill-icon react"
										style={styles.iconStyle}
										src={reactIcon}
									/>
									<h3>&amp;&amp;</h3>
									<img
										className="skill-icon nodejs"
										style={styles.iconStyle}
										src={nodeJSIcon}
									/>
									<h3>&amp;&amp;</h3>
									<img
										className="skill-icon mongodb"
										style={styles.iconStyle}
										src={mongoDBIcon}
									/>
								</div>
								<p>
									Whether you want something built from scratch or you could use an extra
									set of hands on a current project, I can help you turn your idea into a
									beautiful, responsive, functional web application.
								</p>
							</div>
						</div>
						<div
							className="services__details--mobile-development"
							style={styles.servicesDetailsItemStyle}
						>
							<div className="container">
								<div className="technology-container" style={styles.technologiesStyle}>
									<img
										className="skill-icon react-native"
										style={styles.iconStyle}
										src={reactIcon}
									/>
									<h3>||</h3>
									<img
										className="skill-icon meteor"
										style={styles.iconStyle}
										src={meteorIcon}
									/>
									<h3>||</h3>
									<img
										className="skill-icon android"
										style={styles.iconStyle}
										src={androidIcon}
									/>
									<h3>&amp;&amp;</h3>
									<img
										className="skill-icon java"
										style={styles.iconStyle}
										src={javaIcon}
									/>
								</div>

								<p>
									Engage your users on the device that is always in their possesion. I can
									help build you a mobile app or contribute to your exisiting team of app
									developers
								</p>
								<p>
									I can build cross-platform mobile applications using React Native or Meteor. I also build native Android applications using Java and Android Studio.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Services;

const styles = {
	typesContainerStyle: {
		display: 'flex',
		position: 'relative',
		justifyContent: 'space-between',
		marginBottom: '5rem'
	},
	typeCardStyle: {
		width: '33.33%',
		padding: '2rem',
      textAlign: 'center',
	},
	typesSelectorStyle: {
		position: 'absolute',
		width: '33.33%',
		height: '100%',
		top: 0,
		left: 0,
      borderWidth: '7px',
      borderStyle: 'dotted',
      zIndex: 50,
      transition: 'all 1s'
	},
	typesSelectorLineStyle: {
		width: 0,
		height: '4rem',
		borderWidth: '0 0 0 7px',
		position: 'absolute',
		left: '50%',
		transform: 'translateX(-50%)',
		transition: '1s',
		top: '106%'
	},
	iconStyle: {
		height: '150px'
	},
	technologiesStyle: {
		display: 'flex',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	servicesDetailsWrapperStyle: {
      width: '100%',
		overflowX: 'hidden',
		position: 'relative'
	},
	servicesDetailsStyle: {
      width: '300%',
      paddingTop: '5rem',
      paddingBottom: '3.55rem',
      borderWidth: '7px 0',
      borderTopStyle: 'dotted',
      borderBottomStyle: 'dotted',
		display: 'flex',
		transition: 'all 1s'
	},
	servicesDetailsItemStyle: {
		width: '33.33%'
	}
};
