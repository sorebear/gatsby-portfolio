import React from 'react';

export default ({ children, style }) => (
    <div style={{...styles.servieBoxStyle, ...style}}>
        { children }
    </div>
);

const styles = {
    servieBoxStyle: {
        backgroundColor: 'whitesmoke',
        padding: '2rem',
        color: 'black',
        maxWidth: '350px',
        borderRadius: '5px',
        boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
        textAlign: 'center'
    }
}