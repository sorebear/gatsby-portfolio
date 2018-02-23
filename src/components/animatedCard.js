import React from 'react';

export default ({ children, style, className }) => (
   <div style={ styles.animatedCardContainerStyle } className={ className }>
      <div style={ styles.animatedCardStyle }>
         <div style={ styles.frontStyle }> 
            { children }
         </div>
         <div style={ styles.backStyle }>
            <h2>Hello!</h2>
         </div>
      </div>
   </div>
);

const styles = {
   animatedCardContainerStyle: {
      maxWidth: '350px',
      borderRadius: '5px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: '2rem'
   },
   animatedCardStyle: {
      transition: '.3s',
      backfaceVisibility: 'hidden'
   },
   frontStyle: {
      backfaceVisibility: 'hidden'
   },
   backStyle: {
      position: 'absolute',
      backgroundColor: 'blue',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // transform: 'rotateY(180deg)',
      backfaceVisibility: 'hidden'
   }
}