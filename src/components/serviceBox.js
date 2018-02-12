import React from 'react';
import mobileDevelopment from '../images/mobile-development.svg';
import webDevelopment from '../images/web-development.svg';

const images = {
    "Web Development": webDevelopment,
    "Mobile Development": mobileDevelopment
}

export default ({ service, children }) => (
    <div>
        <img src={ images[service] }/>
        <h5>{ service}</h5>
        <div>
            <div></div>
            <div></div>
        </div>
        { children }
    </div>
)