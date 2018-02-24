import React from 'react';

export default () => (
	<div>
		<h2 style={styles.titleStyle}>Hi, I'm Soren. 
			I'm a web developer, with an eye for design, and a love for learning new things and meeting new people.
		</h2>
		<p  style={styles.textStyle}>
			I started my career assuming relational and leadership roles in College Student Development and Human Resources.
			Though I love to connect and build relationships, I also love to design, build, and create which brought me to Development.
		</p>
		<p style={styles.textStyle}>
			I recently took the plunge, left my previous career and dove head first into programming. I spent three months learning and 
			developing at an accelerated Web Development Program in Orange County, and then started working at Envivent as a full-time
			web developer. 
		</p>
		<p  style={styles.textStyle}>
			I could not be happier with my decision to change careers. I spend most of my extra time learning new technologies, going to
			web and mobile development events, and building side projects. 
			websites, web applications, custom emails, and more.
		</p>
		<p style={styles.textStyle}>
		I am available for hire for part-time freelance projects. Please send me a quick a message if you have a project you'd like help on, or if you just want to grab a coffee or a pint and talk about development. 
		</p>
	</div>
);

const styles = {
  titleStyle: {
    color: 'white'
  },
  textStyle: {
    color: 'white'
  }
}