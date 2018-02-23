import React from 'react';

export default ({ style, children }) => (
    <section style={{...styles.dividerStyle, ...style}}>
        { children }
    </section>
);

const styles = {
    dividerStyle: {
        height: '40vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        marginTop: '5rem'
    }
}
