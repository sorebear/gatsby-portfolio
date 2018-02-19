import React from 'react';

export default ({ text }) => (
    <h3 style={styles.titleStyle} className="section-title">{text}</h3>
);

const styles = {
    titleStyle: {
        fontSize: '3rem',
        paddingTop: '5rem',
        marginBottom: '5rem',
        textAlign: 'center',
        textShadow: '0 4px 2px rgba(0, 0, 0, .3)'
    }
}