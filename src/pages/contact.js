import React, { Component } from 'react';
import Button from '../components/button';

class Contact extends Component {
	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		console.log("Submitted!");
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<form style={styles.formStyle} onSubmit={this.handleSubmit.bind(this)}>
					<label htmlFor="name" style={styles.labelStyle}>
						Your Name
					</label>
					<input name="name" type="text" placeholder="John Doe" style={styles.inputStyle} />
					<label htmlFor="email" style={styles.labelStyle}>
						Your Email
					</label>
					<input
						name="email"
						type="email"
						placeholder="john@sample.com"
						style={styles.inputStyle}
					/>
					<label htmlFor="message" style={styles.labelStyle}>
						Your Message
					</label>
					<textarea name="message" rows="5" style={styles.inputStyle} />
					<Button type="submit" style={{ margin: '0 0 5rem 0'}}>Send</Button>
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
		marginBottom: '2rem'
   }
};
