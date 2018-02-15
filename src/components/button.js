import React from 'react';

export default ({ children, type, style }) => (
   <button style={{...styles.buttonStyle, ...style}}>
      { children }
   </button>
);

const styles = {
   buttonStyle: {
      backgroundColor: 'rgb(0, 106, 114)',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
      border: 'none',
      padding: '20px 50px',
      borderRadius: '5px',
      color: 'white',
      margin: '2.5rem 0'
   }
}