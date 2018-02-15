import React, { Component } from 'react';
import smoothScroll from 'smoothscroll';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.navLinks = ['services', 'about', 'work', 'pricing', 'contact'];
        this.state = {
            backgroundColor: 'transparent',
            color: 'white'
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.toggleOpacity.bind(this));
    }

    toggleOpacity(e) {
        if (e.pageY !== 0) {
            this.setState({ backgroundColor: 'rgb(51, 51, 51)', color: 'rgb(228, 159, 0)' });
        } else {
            this.setState({ backgroundColor: 'transparent', color: 'rgb(255, 255, 255)' });
        }
    }

    handleSmoothScroll(anchor) {
        const scrollDestination = document.getElementById(anchor);
        smoothScroll(scrollDestination);
    }

    renderNavLinks() {
        return this.navLinks.map((link, index) => {
            return (
                <li key={index} onClick={() => this.handleSmoothScroll(link)} style={styles.listItemStyle}>
                    { link }
                </li>
            )
        })
    }

    render() {
        return (
            <div className="top-bar" style={this.state}>
                <div style={styles.topBarStyle}>
                    <h2 onClick={() => this.handleSmoothScroll('home')} style={styles.logoStyle}>Sore Bear</h2>
                    <ul className="nav" style={styles.navStyle}>
                        {this.renderNavLinks()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopBar;

const ListItem = ({ children }) => (
    <li onClick={() => this.handleSmoothScroll(children)} style={styles.listItemStyle}>
        { children }
    </li>
);

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
    },
    navStyle: {
        display: 'flex',
        listStyle: 'none',
        padding: 0,
        margin: 0
    },
    listItemStyle: {
        margin: '0 1rem',
        textTransform: 'capitalize',
        cursor: 'pointer'
    },
    logoStyle: {
        margin: '0 1rem',
        color: 'white',
        cursor: 'pointer'
    }
}