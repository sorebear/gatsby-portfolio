// import React, { Component } from 'react';
// import Button from '../components/button';

// class Contact extends Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	handleSubmit(e) {
// 		console.log('Submitted!');
// 		// e.preventDefault();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<form
// 				   target="_blank"
// 					method="POST"
// 					style={styles.formStyle}
// 					action='https://formspree.io/sorenbaird@protonmail.com'
// 					onSubmit={this.handleSubmit.bind(this)}
// 				>
// 					<label htmlFor="name" style={ styles.labelStyle }>
// 						Your Name
// 					</label>
// 					<input 
// 						name="name" 
// 						type="text" 
// 						placeholder="James P. Sullivan" 
// 						style={styles.inputStyle} 
// 						required 
// 					/>
// 					<label htmlFor="_replyto" style={styles.labelStyle}>
// 						Your Email
// 					</label>
// 					<input
// 						name="_repolyto"
// 						type="email"
// 						placeholder="sully@monstersuniversity.edu"
// 						style={styles.inputStyle}
// 						required
// 					/>
// 					<label 
// 						htmlFor="body" 
// 						style={styles.labelStyle}
// 						required
// 					>
// 						Your Message
// 					</label>
// 					<textarea name="body" rows="5" style={styles.inputStyle} />
// 					<Button type="submit" value="Send">
// 						Send
// 					</Button>
// 				</form>
// 			</div>
// 		);
// 	}
// }

// export default Contact;

// const styles = {
// 	formStyle: {
// 		textAlign: 'center'
// 	},
// 	labelStyle: {
// 		display: 'block',
// 		fontSize: '1.5rem',
// 		color: 'rgb(0, 106, 114)',
// 		textAlign: 'left'
// 	},
// 	inputStyle: {
// 		border: '2px solid #333',
// 		outline: 'none',
// 		borderRadius: '5px',
// 		display: 'block',
// 		width: '100%',
// 		padding: '10px 15px',
// 		marginBottom: '2rem',
// 		backgroundColor: 'transparent'
// 	}
// };


import React from 'react';
import Button from '../components/button';

export default () => (
	<div className="contact-me" style={styles.contactMeStyle}>
		<form
			target="_blank"
			method="POST"
			style={styles.formStyle}
			className="contact-me__form"
			action='https://formspree.io/sorenbaird@protonmail.com'
		>
			<div className="contact-me__input-container" style={styles.inputContainerStyle}>
				<input
					name="name"
					type="text"
					placeholder="Name*"
					className="contact-me__input"
					style={{ ...styles.inputStyle, marginRight: '10px' }}
				/>
				<input
					name="_repolyto"
					type="email"
					placeholder="Email*"
					className="contact-me__input"
					style={{ ...styles.inputStyle, marginLeft: '10px' }}
				/>
			</div>
         <textarea 
            name="body" 
            rows="8" 
				placeholder="Message*"
				className="contact-me__input" 
            style={styles.inputStyle} 
         />
			<Button
				type="submit" 
				value="Send" 
				className="contact-me__submit-button"
				style={{ width: '160px' }}>
					Send
			</Button>
		</form>
	</div>
);

const styles = {
	contactMeStyle: {
	
	},
	formStyle: {
      maxWidth: '800px',
		margin: '0 auto',
		textAlign: 'center'
	},
	inputContainerStyle: {
      display: 'flex',
	},
	inputStyle: {
		border: '2px solid black',
		color: 'black',
		outline: 'none',
		display: 'block',
		width: '100%',
		padding: '10px 15px',
		marginBottom: '2rem',
      backgroundColor: 'transparent',
      resize: 'none',
      marginBottom: '20px'
   },
   sendStyle: {
      margin: 0,
      padding: 0
   }
};
