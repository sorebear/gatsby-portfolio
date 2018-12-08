import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';
// import StitchText from '../components/stitchText';

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
    color: '#b10000',
    cursor: 'pointer',
  },
};

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.navLinks = ['about', 'skills', 'pricing', 'work', 'connect'];
    this.scrollDestination = null;
    this.state = {
      topBarClass: 'top-bar--unscrolled',
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.toggleOpacity.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.toggleOpacity.bind(this));
  }

  toggleOpacity() {
    if (window.pageYOffset !== 0) {
      this.setState({ topBarClass: 'top-bar--scrolled' });
    } else {
      this.setState({ topBarClass: 'top-bar--unscrolled' });
    }
  }

  handleSmoothScroll(anchor) {
    this.scrollDestination = document.getElementById(anchor);
    smoothScroll(this.scrollDestination);
  }

  renderNavLinks() {
    return this.navLinks.map(link => (
      <li
        key={`navlink-${link}`}
        className="top-bar__nav-link"
        style={{ margin: 0 }}
      >
        <button
          onClick={() => this.handleSmoothScroll(link)}
          onKeyDown={() => this.handleSmoothScroll(link)}
          style={styles.listItemStyle}
        >
          {link}
        </button>
      </li>
    ));
  }

  render() {
    return (
      <div className={`top-bar web-only ${this.state.topBarClass}`}>
        <div style={styles.topBarStyle}>
          <button
            onClick={() => this.handleSmoothScroll('home')}
            onKeyDown={() => this.handleSmoothScroll('home')}
            style={{ cursor: 'pointer' }}
          >
            <h2
              className="top-bar__logo"
              style={styles.logoStyle}
            >
              Soren Baird
            </h2>
          </button>
          <ul className="nav" style={styles.navStyle}>
            {this.renderNavLinks()}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopBar;
