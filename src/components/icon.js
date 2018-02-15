import React from 'react';

export default ({ className, style }) => (
   <i className={ className } style={{...styles.iconStyle, ...style}}></i>
);

const styles = {
   iconStyle: {
      fontSize: '8rem',
      paddingTop: '1rem',
      backgroundImage: `linear-gradient(to top, rgb(53, 53, 53), rgb(0, 106, 114))`,
      backgroundSize: `cover`,
      WebkitBackgroundClip: 'text',
      color: 'transparent'
   }
}