import React from 'react';

export default ({ className, style }) => (
   <i className={ className } style={{...styles.iconStyle, ...style}}></i>
);

const styles = {
   iconStyle: {
      fontSize: '8rem',
      paddingTop: '1rem',
      backgroundSize: `cover`,
      WebkitBackgroundClip: 'text',
      color: 'transparent'
   }
}