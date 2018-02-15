import React, { Component } from 'react';

class Contact extends Component {
	render() {
		return (
			<div>
				<form style={styles.formStyle}>
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
					<button type="submit" style={styles.buttonStyle}>Send</button>
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
   },
   buttonStyle: {
      backgroundColor: 'rgb(0, 106, 114)',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
      border: 'none',
      padding: '20px 50px',
      borderRadius: '5px',
      color: 'white',
      margin: '0 auto'
   }
};
