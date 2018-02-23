import React from 'react';

export default ({ title, subtitle, image }) => {
    return (
        <div id='home' style={{...styles.heroImageStyle, backgroundImage: `url(${image})`}}>
            <h1 style={styles.titleStyle}>
               <span style={styles.mainTitleStyle}>{ title }</span>
               <span>{ subtitle }</span> 
            </h1>
        </div>
    )
}

const styles = {
    heroImageStyle: {
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundAttachment: 'fixed'
    },
    titleStyle: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        color: 'white',
        textShadow: '0px 4px 2px rgba(0, 0, 0, .7)'
    },
    mainTitleStyle: {
        fontSize: '4rem',
        color: '#e49f00'
    }
}

