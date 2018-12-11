import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

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
    this.window = null;
    this.navLinks = ['about', 'skills', 'resources', 'work', 'connect'];
    this.scrollDestination = null;
    this.state = {
      topBarClass: 'top-bar--unscrolled',
    };

    this.toggleOpacity = this.toggleOpacity.bind(this);
  }

  componentDidMount() {
    this.window = window;
    this.window.addEventListener('scroll', this.toggleOpacity);
  }

  componentWillUnmount() {
    this.window.removeEventListener('scroll', this.toggleOpacity);
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
        { this.props.location === 'home' ? (
          <button
            onClick={() => this.handleSmoothScroll(link)}
            onKeyDown={() => this.handleSmoothScroll(link)}
            style={styles.listItemStyle}
          >
            {link}
          </button>
        ) : (
          <Link
            to={`/#${link}`}
            href={`#${link}`}
            style={styles.listItemStyle}
          >
            {link}
          </Link>
        )}
      </li>
    ));
  }

  render() {
    return (
      <div className={`top-bar web-only ${this.state.topBarClass}`}>
        <div style={styles.topBarStyle}>
          { this.props.location === 'home' ? (
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
          ) : (
            <Link
              to="/"
              href="/"
              style={{ cursor: 'pointer' }}
            >
              <h2
                className="top-bar__logo"
                style={styles.logoStyle}
              >
                Soren Baird
              </h2>
            </Link>
          )}
          <ul className="nav" style={styles.navStyle}>
            {this.renderNavLinks()}
          </ul>
        </div>
      </div>
    );
  }
}

export default TopBar;

TopBar.propTypes = {
  location: PropTypes.string,
};

TopBar.defaultProps = {
  location: '',
};
