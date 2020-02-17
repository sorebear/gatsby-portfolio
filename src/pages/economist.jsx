import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import axios from 'axios';

class Economist extends Component {
  constructor(props) {
    super(props);
    this.baseUrl = 'http://localhost:9000/.netlify/functions/economist';
    this.state = {
      // loggedIn: false,
      password: '',
    };
  }

  componentDidMount() {
    this.getStoredKey();
    this.fetchUrl('/');
  }

  getStoredKey() {
    const password = sessionStorage.getItem('economistApiPassowrd');
    if (password) {
      this.setState({ password });
    }
  }

  fetchUrl(url) {
    const { password } = this.state;
    // axios.get(`${this.baseUrl}?key=boobookitty&path=${url}`)
    console.log(password);
    fetch(`${this.baseUrl}/.netlify/functions/economist?key=boobookitty&page=${url}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    return (
      <div className="content-wrapper">
        <Helmet>
          <meta property="og:title" content="Economist | Soren Baird" />
          <name>Economist | Soren Baird</name>
          <meta property="og:image" content="https://res.cloudinary.com/sorebear/image/upload/v1544489724/portfolio/jamstack.png" />
          <meta property="og:url" content="https://sorenbaird.com/jamstack" />
          <meta property="og:description" content="Learn more about the JAMstack with these resources." />
        </Helmet>
      </div>
    );
  }
}

export default Economist;
