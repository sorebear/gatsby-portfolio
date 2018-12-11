import React, { Component } from 'react';
import axios from 'axios';
import Button from '../components/button';

const styles = {
  contactMeStyle: {},
  formStyle: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  inputContainerStyle: {
    display: 'flex',
  },
  inputStyle: {
    border: '.15rem solid white',
    color: 'white',
    outline: 'none',
    display: 'block',
    width: '100%',
    padding: '10px 15px',
    backgroundColor: 'transparent',
    resize: 'none',
    marginBottom: '20px',
  },
  sendStyle: {
    margin: 0,
    padding: 0,
  },
};

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      messageSent: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleMessageInput = this.handleMessageInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    axios.post('/.netlify/functions/mailer', {
      name,
      email,
      message,
    }).then(() => {
      this.setState({ messageSent: true });
    }).catch((error) => {
      console.log(error);
    });
  }

  handleNameInput(e) {
    this.setState({ name: e.target.value });
  }

  handleEmailInput(e) {
    this.setState({ email: e.target.value });
  }

  handleMessageInput(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    const { name, email, message, messageSent } = this.state;
    return (
      <div className="contact-me" style={styles.contactMeStyle}>
        <form
          onSubmit={this.handleSubmit}
          style={styles.formStyle}
          className="contact-me__form"
        >
          <div className="contact-me__input-container" style={styles.inputContainerStyle}>
            <input
              value={name}
              onChange={this.handleNameInput}
              name="name"
              type="text"
              placeholder="Name*"
              className="contact-me__input"
              style={{ ...styles.inputStyle, marginRight: '10px' }}
              required
            />
            <input
              value={email}
              onChange={this.handleEmailInput}
              name="email"
              type="email"
              placeholder="Email*"
              className="contact-me__input"
              style={{ ...styles.inputStyle, marginLeft: '10px' }}
              required
            />
          </div>
          <textarea
            value={message}
            onChange={this.handleMessageInput}
            name="message"
            rows="8"
            placeholder="Message*"
            className="contact-me__input"
            style={styles.inputStyle}
            required
          />
          { messageSent ? (
            <h2 style={{ color: 'white' }}>Message Sent!</h2>
          ) : (
            <Button
              type="submit"
              className="contact-me__submit-button"
              style={{ width: '160px' }}
            >
              Send
            </Button>
          )}
        </form>
      </div>
    );
  }
}

export default Contact;
