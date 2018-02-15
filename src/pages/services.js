import React from 'react';
import Icon from '../components/icon';
import Button from '../components/button';
import bambooDivider from '../images/bamboo-divider.svg';

import BasicCard from '../components/basicCard';

export default () => (
    <div style={styles.serviceStyle}>
        <BasicCard>
            <Icon className="icon-basic-webpage-img-txt" />
            <img src={bambooDivider} style={{ marginBottom: 0}}/>
            <h4>Custom CMS Development</h4>
            <p>Do you need a blog or small business website? Why not have something custom that will allow you to easily add new content through a smooth, intuitive interface. I can help you build, maintain, and update your page.</p>
            <Button>Learn More</Button>
        </BasicCard>
        <BasicCard>
            <Icon className="icon-basic-laptop" />
            <img src={bambooDivider} style={{ marginBottom: 0}}/>
            <h4>Web Development</h4>
            <p>Whether you want something built from scratch or you could use an extra set of hands on a current project, I can help you turn your idea into a beautiful, responsive, functional web application.</p>
            <Button>Learn More</Button>
        </BasicCard>
        <BasicCard>
            <Icon className="icon-basic-smartphone" />
            <img src={bambooDivider} style={{ marginBottom: 0}}/>
            <h4>Mobile Development</h4>
            <p>Engage your users on the device that is always in their possesion. I can help build you a mobile app or contribute to your exisiting team of app developers</p>
            <Button>Learn More</Button>
        </BasicCard>
    </div>
)

const styles = {
    serviceStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRight: '1rem solid white'
    }
}