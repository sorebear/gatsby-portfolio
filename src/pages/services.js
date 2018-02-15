import React from 'react';
import Icon from '../components/icon';
import bambooDivider from '../images/bamboo-divider.svg';

import BasicCard from '../components/basicCard';

export default () => (
    <div style={styles.serviceStyle}>
        <BasicCard>
            <Icon className="icon-basic-webpage-img-txt" />
            <img src={bambooDivider} style={{ marginBottom: 0}}/>
            <h4>Custom CMS Development</h4>
            <p>We build clean, beautiful, responsive designs</p>
        </BasicCard>
        <BasicCard>
            <Icon className="icon-basic-laptop" />
            <img src={bambooDivider} style={{ marginBottom: 0}}/>
            <h4>Web Development</h4>
            <p>We build clean, beautiful, responsive designs</p>
        </BasicCard>
        <BasicCard>
            <Icon className="icon-basic-smartphone" />
            <img src={bambooDivider} style={{ marginBottom: 0}}/>
            <h4>Mobile Development</h4>
            <p>We build clean, beautiful, responsive designs</p>
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