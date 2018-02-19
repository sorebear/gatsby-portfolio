import React from 'react';
import BasicCard from '../components/basicCard';

export default () => (
   <div style={styles.workStyle}>
      <BasicCard className="basic-card--white">
         <img src='static/puzzle-me.jpg' style={styles.imageStyle} />
         <h2 style={styles.titleStyle}>Puzzle Me</h2>
         <p>
            <a href="http://puzzleme.sorenbaird.com" style={styles.linkStyle} target="_blank">Live</a>
            <span> / </span>
            <a href="https://github.com/sorebear/puzzle_me" style={styles.linkStyle} target="_blank">GitHub</a>
         </p>
      </BasicCard>
      <BasicCard className="basic-card--white">
         <img src='static/memory-match.jpg' style={styles.imageStyle} />
         <h2 style={styles.titleStyle}>Inventor Memory Match</h2>
         <p>
            <a href="http://sorenbaird.com/apps/memory_match" style={styles.linkStyle} target="_blank">Live</a>
            <span> / </span>
            <a href="https://github.com/sorebear/inventor_memory_match" style={styles.linkStyle} target="_blank">GitHub</a>
         </p>
      </BasicCard>
      <BasicCard className="basic-card--white">
         <img src='static/todo-list.jpg' style={styles.imageStyle} />
         <h2 style={styles.titleStyle}>Todo List</h2>
         <p>
            <a href="http://sorenbaird.com/apps/todo_list" style={styles.linkStyle} target="_blank">Live</a>
            <span> / </span>
            <a href="https://github.com/sorebear/todo_list" style={styles.linkStyle} target="_blank">GitHub</a>
         </p>
      </BasicCard>
   </div>
);

const styles = {
   workStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '5rem 0'
   },
   workBoxStyle: {
      backgroundColor: 'whitesmoke',
      padding: '10px',
      width: '30%',
      textAlign: 'center',
      borderRadius: '5px',
      color: 'rgb(0, 104, 114)',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)'
   },
   imageStyle: {
      width: '100%',
      borderRadius: '3px',
      border: '3px solid white'
   },
   titleStyle: {
      color: 'black'
   },
   linkStyle: {
      color: 'rgb(0, 104, 114)',
      textDecoration: 'none',
      textShadow: 'none',
      backgroundImage: 'none'
   }
}