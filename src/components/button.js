import React from 'react';

export default ({ children, type, style }) => (
   <button style={{...styles.buttonStyle, ...style}}>
      { children }
   </button>
);

const styles = {
   buttonStyle: {
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
      border: 'none',
      padding: '20px 50px',
      borderRadius: '5px',
      margin: '2.5rem 0',
      cursor: 'pointer'
   }
}