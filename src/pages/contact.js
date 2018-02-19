import React, { Component } from 'react';
import Button from '../components/button';

class Contact extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		console.log('Submitted!');
		// e.preventDefault();
	}

	render() {
		return (
			<div>
				<form
				   target="_blank"
					method="POST"
					style={styles.formStyle}
					action='https://formspree.io/sorenbaird@protonmail.com'
					onSubmit={this.handleSubmit.bind(this)}
				>
					<label htmlFor="name" style={ styles.labelStyle }>
						Your Name
					</label>
					<input 
						name="name" 
						type="text" 
						placeholder="James P. Sullivan" 
						style={styles.inputStyle} 
						required 
					/>
					<label htmlFor="_replyto" style={styles.labelStyle}>
						Your Email
					</label>
					<input
						name="_repolyto"
						type="email"
						placeholder="sully@monstersuniversity.edu"
						style={styles.inputStyle}
						required
					/>
					<label 
						htmlFor="body" 
						style={styles.labelStyle}
						required
					>
						Your Message
					</label>
					<textarea name="body" rows="5" style={styles.inputStyle} />
					<Button type="submit" value="Send">
						Send
					</Button>
				</form>
			</div>
		);
	}
}

export default Contact;

const styles = {
	formStyle: {
		textAlign: 'center'
	},
	labelStyle: {
		display: 'block',
		fontSize: '1.5rem',
		color: 'rgb(0, 106, 114)',
		textAlign: 'left'
	},
	inputStyle: {
		border: '2px solid #333',
		outline: 'none',
		borderRadius: '5px',
		display: 'block',
		width: '100%',
		padding: '10px 15px',
		marginBottom: '2rem',
		backgroundColor: 'transparent'
	}
};
