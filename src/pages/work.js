import React from 'react';
import WorkBox from '../components/workBox';

export default () => (
   <div style={styles.workStyle}>
      <WorkBox title="Puzzle Me" liveLink="http://puzzleme.sorenbaird.com" gitHub="https://github.com/sorebear/puzzle_me" />
      <WorkBox title="Inventory Memory Match" liveLink="http://sorenbaird.com/apps/memory_match" gitHub="https://github.com/sorebear/inventor_memory_match" />
      <WorkBox title="Todo List" liveLink="http://todo.sorenbaird.com" gitHub="https://github.com/sorebear/todo_list" />
   </div>
);

const styles = {
   workStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '5rem 0'
   }
}