import React from 'react';

export default ({ id, className, style, children }) => (
   <section id={id} className={`basic-section ${className}`} style={{...styles.basicSectionStyle, ...style }}>
      <div className={`container ${className}__container`}>
         { children }      
      </div>
   </section>
);

const styles = {
   basicSectionStyle: {
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      borderWidth: 0
   }
}