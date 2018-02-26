import React, { Component } from 'react';
import AnimatedCard from '../components/animatedCard';
import BasicCard from '../components/basicCard';

import envivent from '../images/work/envivent.svg';
import puzzleMe from '../images/work/puzzle-me.jpg';
import memoryMatch from '../images/work/memory-match.jpg';
import todoList from '../images/work/todo-list.jpg';

// export default () => (
//    <div style={styles.workStyle}>
//       <BasicCard className="basic-card basic-card--white">
//          <img src={puzzleMe} style={styles.imageStyle} />
//          <h2 style={styles.titleStyle}>Puzzle Me</h2>
//          <p>
//             <a href="http://puzzleme.sorenbaird.com" style={styles.linkStyle} target="_blank">Live</a>
//             <span> / </span>
//             <a href="https://github.com/sorebear/puzzle_me" style={styles.linkStyle} target="_blank">GitHub</a>
//          </p>
//       </BasicCard>
//       <BasicCard className="basic-card basic-card--white">
//          <img src={memoryMatch} style={styles.imageStyle} />
//          <h2 style={styles.titleStyle}>Inventor Memory Match</h2>
//          <p>
//             <a href="http://sorenbaird.com/apps/memory_match" style={styles.linkStyle} target="_blank">Live</a>
//             <span> / </span>
//             <a href="https://github.com/sorebear/inventor_memory_match" style={styles.linkStyle} target="_blank">GitHub</a>
//          </p>
//       </BasicCard>
//       <BasicCard className="basic-card basic-card--white">
//          <img src={todoList} style={styles.imageStyle} />
//          <h2 style={styles.titleStyle}>Todo List</h2>
//          <p>
//             <a href="http://sorenbaird.com/apps/todo_list" style={styles.linkStyle} target="_blank">Live</a>
//             <span> / </span>
//             <a href="https://github.com/sorebear/todo_list" style={styles.linkStyle} target="_blank">GitHub</a>
//          </p>
//       </BasicCard>
//    </div>
// );

class Work extends Component {
   constructor(props) {
      super(props);
      this.myWork = [
         {
            type: 'Main',
            image: envivent,
            title: 'Envivent, Inc.',
            liveLink: 'http://todo.sorenbaird.com',
            githubLink: 'https://github.com/sorebear/todo_list'
         },
         {
            type: 'CMS',
            image: todoList,
            title: 'Todo List',
            liveLink: 'http://todo.sorenbaird.com',
            githubLink: 'https://github.com/sorebear/todo_list'
         },
         {
            type: 'Web',
            image: puzzleMe,
            title: 'Puzzle Me',
            liveLink: 'http://puzzleme.sorenbaird.com',
            githubLink: 'https://github.com/sorebear/puzzle_me'
         },
         {
            type: 'Mobile',
            image: memoryMatch,
            title: 'Inventor Memory Match',
            liveLink: 'http://sorenbaird.com/apps/memory_match',
            githubLink: 'https://github.com/sorebear/inventor_memory_match'
         },
         {
            type: 'Web',
            image: memoryMatch,
            title: 'Inventor Memory Match',
            liveLink: 'http://sorenbaird.com/apps/memory_match',
            githubLink: 'https://github.com/sorebear/inventor_memory_match'
         }
      ];
      this.updateDisplayedWork = this.updateDisplayedWork.bind(this);
      this.state = {
         displayedWork: 'main'
      };
   }

   updateDisplayedWork(workType) {
      console.log('Updating Work Types', workType);
      this.setState({ displayedWork: workType });
   }

   renderWorks() {
      let typeAlreadyRendered = [];
      return this.myWork.map((project, index) => {
         if (!typeAlreadyRendered.includes(project.type)) {
            typeAlreadyRendered.push(project.type);
            return (
               <div
                  key={index}
                  className={`work__type work__type--${project.type.toLowerCase()}`}
                  style={{ position: 'relative', marginBottom: '1.16rem' }}
               >
                  <h3
                     onClick={() => this.updateDisplayedWork(project.type)}
                     className="work__type-name"
                     style={styles.typeStyle}
                  >
                     {project.type}
                  </h3>
                  <div className="work__horizontal-line" style={styles.horizontalLineStyle} />
                  <div className="work__vertical-line" style={styles.verticalLineStyle} />
               </div>
            );
         }
      });
   }

   renderProjects() {
      return this.myWork.map((project, index) => {
         return (
            <div
               key={index}
               className={`work__individual-project work__individual-project--${project.type.toLowerCase()}`}
               style={styles.individualProjectStyle}
            >
               <img
                  src={project.image}
                  style={styles.individualProjectImageStyle}
                  className="work__individual-project__image"
               />
               <h5 className="work__individual-project__title">{project.title}</h5>
               <p>
                  <a href={project.liveLink} target="_blank">Live</a>
                  <span> / </span>
                  <a href={project.githubLink} target="_blank">GitHub</a>
               </p>
            </div>
         );
      });
   }

   render() {
      console.log(this.state);
      return (
         <div className={`work work__displaying-${this.state.displayedWork.toLowerCase()}`} style={styles.workStyle}>
            <div className="work__types-container" style={styles.typesContainerStyle}>
               {this.renderWorks()}
            </div>
            <div className="work__horizontal-line-space" style={styles.lineContainerStyle} />
            <div className="work__projects-container" style={styles.projectsContainerStyle}>
               <div className="work__vertical-line--main" style={styles.verticalLineStyle} />
               <div className="work__vertical-line--cms" style={styles.verticalLineStyle} />
               <div className="work__vertical-line--web" style={styles.verticalLineStyle} />
               <div className="work__vertical-line--mobile" style={styles.verticalLineStyle} />
               {this.renderProjects()}
            </div>
         </div>
      );
   }
}

export default Work;

const styles = {
   workStyle: {
      display: 'flex',
      justifyContent: 'space-between',
   },
   typesContainerStyle: {
      width: '25%',
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingTop: '1.45rem'
   },
   lineContainerStyle: {
      width: '25%'
   },
   projectsContainerStyle: {
      width: '50%',
      position: 'relative',
      paddingLeft: '1.25rem',
      transition: 'border-left 1s'
   },
   individualProjectStyle: {
      display: 'none',
      flexDirection: 'column',
      textAlign: 'center'
   },
   individualProjectImageStyle: {
      width: '100%'
   },
   titleStyle: {
      color: 'black'
   },
   typeStyle: {
      cursor: 'pointer',
      position: 'relative',
      borderRight: '0.35rem dotted transparent',
      paddingRight: '.5rem',
      transition: 'border-right .1s',
      zIndex: 5,
      // display: 'inline-block',
      marginBottom: 0
   },
   typeSpanStyle: {
      display: 'inline-block',
      position: 'absolute',
      top: 0,
      left: 0
   },
   linkStyle: {
      color: 'rgb(0, 104, 114)',
      textDecoration: 'none',
      textShadow: 'none',
      backgroundImage: 'none'
   },
   horizontalLineStyle: {
      borderBottom: '0.35rem dotted black',
      position: 'absolute',
      left: '100%',
      top: '50%',
      transform: 'translate(-100%, -50%)',
      width: '94%'
   },
   verticalLineStyle: {
      position: 'absolute',
      borderLeft: '.35rem dotted black',
      right: '100%',
      height: '0%'
   }
};
