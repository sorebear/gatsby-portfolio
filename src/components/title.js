import React from 'react';

export default ({ text }) => (
    <h3 style={styles.titleStyle}>{text}</h3>
);

const styles = {
    titleStyle: {
        fontSize: '3rem',
        color: 'deepskyblue',
        margin: '5rem auto',
        textAlign: 'center'
    }
}