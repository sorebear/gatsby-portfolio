import React from 'react';
import Icon from '../components/icon';
import Button from '../components/button';
import bambooDivider from '../images/bamboo-divider.svg';
import reactIcon from '../images/react-original.svg';
import meteorIcon from '../images/meteor-original.svg';
import mongoDBIcon from '../images/mongodb-original.svg';
import nodeJSIcon from '../images/nodejs-original.svg';
import graphQLIcon from '../images/graphql-original.svg';

import BasicCard from '../components/basicCard';

export default () => (
    <div>
        <div style={styles.serviceStyle}>
            <BasicCard className="basic-card--offwhite">
                <Icon className="icon-basic-webpage-img-txt" />
                <img src={bambooDivider} style={{ marginBottom: 0}}/>
                <h4>Custom CMS Development</h4>
                <p>Do you need a blog or small business website? Why not have something custom that will allow you to easily add new content through a smooth, intuitive interface. I can help you build, maintain, and update your page.</p>
                <Button>Learn More</Button>
            </BasicCard>
            <BasicCard className="basic-card--offwhite">
                <Icon className="icon-basic-laptop" />
                <img src={bambooDivider} style={{ marginBottom: 0}}/>
                <h4>Web Development</h4>
                <p>Whether you want something built from scratch or you could use an extra set of hands on a current project, I can help you turn your idea into a beautiful, responsive, functional web application.</p>
                <Button>Learn More</Button>
            </BasicCard>
            <BasicCard className="basic-card--offwhite">
                <Icon className="icon-basic-smartphone" />
                <img src={bambooDivider} style={{ marginBottom: 0}}/>
                <h4>Mobile Development</h4>
                <p>Engage your users on the device that is always in their possesion. I can help build you a mobile app or contribute to your exisiting team of app developers</p>
                <Button>Learn More</Button>
            </BasicCard>
        </div>
        <div>
            <div className="technology-container" style={styles.technologiesStyle}>
                <img className="skill-icon gatsby" style={styles.iconStyle} src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg==" />
                <h3>+</h3>
                <img className="skill-icon react" style={styles.iconStyle} src={reactIcon} />
                <h3>+</h3>
                <img className="skill-icon graphql" style={styles.iconStyle} src={graphQLIcon} />
            </div>
        </div>
    </div>
)

const styles = {
    serviceStyle: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    iconStyle: {
        height: '200px'
    },
    technologiesStyle: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}