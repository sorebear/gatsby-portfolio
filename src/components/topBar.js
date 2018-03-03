import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';
import StitchText from '../components/stitchText';

const styles = {
  topBarStyle: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'inherit',
    transition: '.3s',
    top: 0,
    left: 0,
    height: '50px',
    width: '100%',
    zIndex: 100,
  },
  navStyle: {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItemStyle: {
    margin: '0 1rem',
    textTransform: 'capitalize',
    cursor: 'pointer',
  },
  logoStyle: {
    margin: '0 1rem',
    color: '#e49f00',
    cursor: 'pointer',
  },
};

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.navLinks = ['skills', 'about', 'work', 'contact'];
    this.state = {
      topBarClass: 'top-bar--unscrolled',
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.toggleOpacity.bind(this));
  }

  toggleOpacity() {
    if (window.pageYOffset !== 0) {
      this.setState({ topBarClass: 'top-bar--scrolled' });
    } else {
      this.setState({ topBarClass: 'top-bar--unscrolled' });
    }
  }

  handleSmoothScroll(anchor) {
    const scrollDestination = document.getElementById(anchor);
    smoothScroll(scrollDestination);
  }

  renderNavLinks() {
    return this.navLinks.map((link, index) => {
      return (
        <li
          key={index}
          onClick={() => this.handleSmoothScroll(link)}
          className="top-bar__nav-link"
          style={styles.listItemStyle}
        >
          <StitchText>{link}</StitchText>
        </li>
      );
    });
  }

  render() {
    return (
      <div className={`top-bar ${this.state.topBarClass}`}>
        <div style={styles.topBarStyle}>
          <h2
            onClick={() => this.handleSmoothScroll('home')}
            className="top-bar__logo"
            style={styles.logoStyle}
          >
            Soren Baird
          </h2>
          <ul className="nav" style={styles.navStyle}>
            {this.renderNavLinks()}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopBar;
