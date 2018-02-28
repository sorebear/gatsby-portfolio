import React, { Component } from 'react';
import AnimatedCard from '../components/animatedCard';
import BasicCard from '../components/basicCard';
import AnimatedBorderBox from '../components/animatedBorderBox';
import Title from '../components/title';
import StitchColumns from '../components/stitchColumns';

import envivent from '../images/work/envivent.svg';
import puzzleMe from '../images/work/puzzle-me.jpg';
import memoryMatch from '../images/work/memory-match.jpg';
import todoList from '../images/work/todo-list.jpg';

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
      this.setState({ displayedWork: workType });
   }

   renderProjectTypes() {
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
               <AnimatedBorderBox hoverContent={{
                  title: project.title,
                  links: [
                     {
                        title: 'Live',
                        href: project.liveLink
                     },
                     {
                        title: 'GitHub',
                        href: project.githubLink
                     }
                  ]
               }}>
                  <img
                     src={project.image}
                     style={styles.individualProjectImageStyle}
                     className="work__individual-project__image"
                  />
               </AnimatedBorderBox>
            </div>
         );
      });
   }

   render() {
      return (
         <div>
            <div className="work__header" style={{ position: 'relative'}}>
               <StitchColumns row='3' section='work' skillSetArr={['mobile-development', 'web-development', 'cms-development']} />
               <Title text="Work" style={styles.workTitleStyle} />
            </div>
            <div className={`work work__displaying-${this.state.displayedWork.toLowerCase()}`} style={styles.workStyle}>
               <div className="work__types-container" style={styles.typesContainerStyle}>
                  {this.renderProjectTypes()}
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
         </div>
      );
   }
}

export default Work;

const styles = {
   workStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      borderWidth: 0
   },
   workTitleStyle: {
      margin: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
   },
   typesContainerStyle: {
      width: '33.33%',
      textAlign: 'right',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
   },
   lineContainerStyle: {
      width: '33.33%'
   },
   projectsContainerStyle: {
      width: '33.33%',
      position: 'relative',
      transition: 'border-left 1s'
   },
   individualProjectStyle: {
      display: 'none',
      flexDirection: 'column',
      textAlign: 'center'
   },
   individualProjectImageStyle: {
      height: '100%',
      margin: 0
   },
   titleStyle: {
      color: 'black'
   },
   typeStyle: {
      cursor: 'pointer',
      position: 'relative',
      borderRightColor: 'transparent',
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
      position: 'absolute',
      left: '100%',
      top: '50%',
      transform: 'translate(-100%, -50%)',
      width: '100%'
   },
   verticalLineStyle: {
      position: 'absolute',
      right: '100%',
      height: '0%'
   }
};
