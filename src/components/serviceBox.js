import React from 'react';
import mobileDevelopment from '../images/mobile-development.svg';
import webDevelopment from '../images/web-development.svg';
import customCMSDevelopment from '../images/custom-cms-development.svg';
import bambooDivider from '../images/bamboo-divider.svg';

const images = {
    "Web Development": webDevelopment,
    "Mobile Development": mobileDevelopment,
    "Custom CMS Development": customCMSDevelopment
}

export default ({ service, children }) => (
    <div style={styles.servieBoxStyle}>
        <i className="feature-box__icon icon-basic-compass" style={styles.iconStyle}></i>
        <img src={bambooDivider} style={{ marginBottom: 0}}/>
        <h4>{ service }</h4>
        <div>
            <div></div>
            <div></div>
        </div>
        
        { children }
    </div>
);

const styles = {
    servieBoxStyle: {
        backgroundColor: 'whitesmoke',
        textAlign: 'center',
        padding: '2rem',
        borderWidth: '1rem 0 1rem 1rem',
        borderColor: 'white',
        borderStyle: 'solid',
        color: 'black'
    },
    bambooStyle: {
        backgroundImage: `url('static/bamboo-sunrise.jpg')`,
        WebkitBackgroundClip: 'border-box'
    },
    iconStyle: {
        fontSize: '8rem',
        paddingTop: '1rem',
        backgroundImage: `url('static/bamboo-sunrise.jpg')`,
        backgroundSize: `cover`,
        WebkitBackgroundClip: 'text',
        color: 'transparent'
    }
}