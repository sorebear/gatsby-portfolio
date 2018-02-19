import React from 'react';

export default ({ children, style, className }) => (
    <div style={{...styles.servieBoxStyle, ...style}} className={ className }> 
        { children }
    </div>
);

const styles = {
    servieBoxStyle: {
        padding: '2rem',
        maxWidth: '350px',
        borderRadius: '5px',
        textAlign: 'center',
        transition: '.3s'
    }
}