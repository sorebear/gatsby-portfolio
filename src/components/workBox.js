import React from 'react';

export default({ title, liveLink, gitHub }) => (
   <div style={styles.workBoxStyle}>
      <img style={styles.imageStyle} />
      <h2>{ title }</h2>
      <p>
         <a href={ liveLink } target="_blank">Live</a>
         <span> / </span>
         <a href={ gitHub } target="_blank">GitHub</a>
      </p>
   </div>
);

const styles = {
   workBoxStyle: {
      border: '1px solid black',
      width: '30%',
      textAlign: 'center',
      borderRadius: '5px'
   },
   imageStyle: {
      width: '100%'
   }
}