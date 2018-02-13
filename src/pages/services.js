import React from 'react';
import ServiceBox from '../components/serviceBox';

export default () => (
    <div style={styles.serviceStyle}>
        <ServiceBox service="Custom CMS Development">
            <p>We build clean, beautiful, responsive designs</p>
        </ServiceBox>
        <ServiceBox service="Web Development">
            <p>We build clean, beautiful, responsive designs</p>
        </ServiceBox>
        <ServiceBox service="Mobile Development">
            <p>We build clean, beautiful, responsive designs</p>
        </ServiceBox>
    </div>
)

const styles = {
    serviceStyle: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRight: '1rem solid white'
    }
}