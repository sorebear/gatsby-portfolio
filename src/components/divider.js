import React from 'react';

export default ({ image, children }) => (
    <section style={{...styles.dividerStyle, backgroundImage: `url('./static/${image}')`}}>
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
