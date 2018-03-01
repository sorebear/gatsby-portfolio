import React, { Component } from 'react';
import AnimatedCard from '../components/animatedCard';
import BasicCard from '../components/basicCard';
import AnimatedBorderBox from '../components/animatedBorderBox';
import Title from '../components/title';
import Icon from '../components/icon';
import StitchBox from '../components/stitchBox';
import StitchColumns from '../components/stitchColumns';

import data from '../data/skillsAndWorksData';

import envivent from '../images/work/envivent.svg';
import puzzleMe from '../images/work/puzzle-me.jpg';
import memoryMatch from '../images/work/memory-match.jpg';
import todoList from '../images/work/todo-list.jpg';

class Work extends Component {
   constructor(props) {
      super(props);
   }
   
   renderSkillSets() {
		return data.map((skillSet, index) => {
			const parsedName = skillSet.name.replace(/\ /g, '-').toLowerCase();
			return (
				<div
					key={index}
					className={`skills__skill-type-card--${parsedName}`}
					style={{ width: `${100/data.length}%` }}
				>
					<StitchBox style={{ transform: `rotate(${skillSet.rotate}deg` }}>
						<div
							onClick={() => this.props.updateSet(parsedName, 'skills', index)}
							className="skills__skill-type-card"
							style={{
								textAlign: 'center',
								transform: `rotate(${skillSet.rotate * -1}deg`
							}}
						>
							<Icon className={`${skillSet.icon} skills__skill-type-icon`} />
							<h4 style={{ marginTop: 0 }}>{skillSet.name}</h4>
						</div>
					</StitchBox>
				</div>
			);
		});
   }

   renderProjectCategory(i) {
		return data[i].works.map((work, index) => {
         return <img key={index} src={work.image} />
      });
	}

   renderAllProjects() {
		return data.map((workTypes, index) => {
			const parsedName = workTypes.name.replace(/\ /g, '-').toLowerCase();
			return (
				<div key={index} className={`work__projects work__projects--${parsedName}`} style={styles.projectTypeContainerStyle}>
					<div className="container">
						{ this.renderProjectCategory(index) }
					</div>
				</div>
			);
      });
   }

   render() {
      return (
         <div>
            <div className="work__header" style={{ position: 'relative'}}>
               <StitchColumns row='3' section='work' skillSetArr={['mobile-development', 'web-development', 'cms-development']} />
               <Title text="Work" style={styles.workSectionTitleStyle} />
            </div>
            <div style={styles.mainWorkStyle}>
               <h3>I am currently a full-time developer at Envivent.</h3>
            </div>
            <StitchColumns row='4' section='work' skillSetArr={['cms-development', 'web-development', 'mobile-development']} />
            <div className="work__types-container" style={styles.workSetsContainerStyle}>
               {this.renderSkillSets()}
            </div>
            <StitchColumns row='5' section='work' skillSetArr={['cms-development', 'web-development', 'mobile-development']} />
				<div className="work__projects-wrapper" style={styles.allProjectsWrapperStyle}>
					<div
						className="work__projects"
						style={{
							...styles.allProjectsContainerStyle,
							transform: `translateX(${this.props.activeIndex * -33.33}%)`
						}}
					>
						{ this.renderAllProjects() }
					</div>
				</div>
         </div>
      );
   }
}

export default Work;

const styles = {
   workSectionTitleStyle: {
      margin: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
   },
   allProjectsWrapperStyle: {
		width: '100%',
		overflowX: 'hidden',
		position: 'relative'
   },
   allProjectsContainerStyle: {
		width: '300%',
		borderLeftWidth: 0,
		borderRightWidth: 0,
		display: 'flex',
		transition: 'all 1s'
   },
   projectTypeContainerStyle: {
      width: '33.33%'
   },
   workSetsContainerStyle: {
      display: 'flex',
		position: 'relative',
		justifyContent: 'space-between'
	},
   mainWorkStyle: {
      height: '14rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      color: 'white'
   },
};
