import React, { Component } from 'react';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: 'transparent',
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', this.toggleOpacity.bind(this));
    }

    toggleOpacity(e) {
        if (e.pageY !== 0) {
            this.setState({ backgroundColor: 'rgb(51, 51, 51)', color: 'deepskyblue' });
        } else {
            this.setState({ backgroundColor: 'transparent', color: 'black' });
        }
    }

    render() {
        return (
            <div className="top-bar" style={this.state}>
                <div style={styles.topBarStyle}>
                    <h2 style={styles.logoStyle}>Soren Baird</h2>
                    <ul className="nav" style={styles.navStyle}>
                        <ListItem>services</ListItem>
                        <ListItem>about</ListItem>
                        <ListItem>skills</ListItem>
                        <ListItem>work</ListItem>
                        <ListItem>references</ListItem>
                        <ListItem>contact</ListItem>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopBar;

const ListItem = ({ children }) => (
    <li style={styles.listItemStyle}>
        <a href={`#${children}`} style={styles.anchorStyle}>{ children }</a>
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
        margin: '0 1rem'
    },
    logoStyle: {
        margin: '0 1rem',
        color: 'white'
    },
    anchorStyle: {
        textTransform: 'capitalize',
        textDecoration: 'none',
        backgroundImage: 'none',
        textShadow: 'none',
        color: 'inherit'

    }
}