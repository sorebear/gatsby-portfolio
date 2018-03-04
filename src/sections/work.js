import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainWork from './mainWork';

import Title from '../components/title';
import Icon from '../components/icon';
import StitchBox from '../components/stitchBox';
import StitchColumns from '../components/stitchColumns';
import StitchRows from '../components/stitchRows';

import data from '../data/skillsAndWorksData';

const styles = {
  workSectionTitleStyle: {
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  workSetsContainerStyle: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-around',
  },
  allProjectsWrapperStyle: {
    width: '100%',
    overflowX: 'hidden',
    position: 'relative',
  },
  allProjectsContainerStyle: {
    width: '300%',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    display: 'flex',
    transition: 'all .5s',
  },
  projectCategoryContainerStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  individualProjectStyle: {
    position: 'relative',
    width: '50%',
    padding: '0 2rem',
    display: 'flex',
  },
  projectOverlayStyle: {
    position: 'absolute',
    top: '5px',
    left: '5px',
    bottom: '5px',
    right: '5px',
    display: 'flex',
    padding: '1.45rem',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

class Work extends Component {
  constructor(props) {
    super(props);
    this.data = data;
  }

  renderSkillSets() {
    return data.map((skillSet, index) => {
      const parsedName = skillSet.name.replace(/ /g, '-').toLowerCase();
      return (
        <div key={index} className={`skills__skill-type-card--${parsedName}`} style={{ width: `${90 / data.length}%` }}>
          <StitchBox style={{ transform: `rotate(${skillSet.rotate}deg)` }}>
            <button
              onClick={() => this.props.updateSet(parsedName, 'skills', index)}
              onKeyDown={() => this.props.updateSet(parsedName, 'skills', index)}
              className="skills__skill-type-card"
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                transform: `rotate(${skillSet.rotate * -1}deg)`
              }}
            >
              <Icon className={`${skillSet.icon} skills__skill-type-icon`} />
              <h4 style={{ marginTop: 0 }}>{skillSet.name}</h4>
            </button>
          </StitchBox>
        </div>
      );
    });
  }

  renderAllProjects() {
    return this.data.map((workTypes, index) => {
      const parsedName = workTypes.name.replace(/ /g, '-').toLowerCase();
      return (
        <div key={index} style={{ width: '33.33%' }}>
          <StitchRows rows={['5', '6']} section="work" set={parsedName} rotate={workTypes.rotate}>
            <div
              className={`work__projects work__projects--${parsedName}`}
              style={styles.projectCategoryContainerStyle}
            >
              {this.renderProjectCategory(index)}
            </div>
          </StitchRows>
        </div>
      );
    });
  }

  renderProjectCategory(i) {
    if (!this.data[i].works.length) {
      return (
        <div style={{ marginTop: '5.8rem', marginBottom: '4.35rem' }}>
          <h3>There are currently no {data[i].name} projects to showcase.</h3>
          <h3>Please check back again later</h3>
        </div>
      );
    }
    return this.data[i].works.map((work, index) => (
      <div key={index} className="work__individual-project" style={styles.individualProjectStyle}>
        <StitchBox style={{ width: '100%' }}>
          <img src={work.image} style={{ margin: '5px', width: '100%' }} alt={work.name} />
          <div className="work__project-overlay" style={styles.projectOverlayStyle}>
            <a href={work.liveLink} style={{ color: 'white' }} target="_blank">
              <h2>{work.name}</h2>
            </a>
            <a href={work.githubLink} target="_blank">
              <p>GitHub</p>
            </a>
          </div>
        </StitchBox>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="work__header" style={{ position: 'relative' }}>
          <StitchColumns
            row="3"
            section="work"
            skillSetArr={['mobile-development', 'web-development', 'cms-development']}
          />
          <Title text="Full-Time Work" style={styles.workSectionTitleStyle} />
        </div>
        <MainWork activeSet={this.props.activeSet} />
        <div style={{ position: 'relative' }}>
          <StitchColumns
            row="4"
            section="work"
            skillSetArr={['cms-development', 'web-development', 'mobile-development']}
          />
          <Title text="Side-Projects" style={styles.workSectionTitleStyle} />
        </div>
        <div className="work__types-container" style={styles.workSetsContainerStyle}>
          {this.renderSkillSets()}
        </div>
        <StitchColumns
          row="5"
          section="work"
          heightArr={['60%', '80%', '100%']}
          skillSetArr={['cms-development', 'web-development', 'mobile-development']}
        />
        <div className="work__projects-wrapper" style={styles.allProjectsWrapperStyle}>
          <div
            className="work__projects"
            style={{
              ...styles.allProjectsContainerStyle,
              transform: `translateX(${this.props.activeIndex * -33.33}%)`,
            }}
          >
            {this.renderAllProjects()}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;

Work.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  activeSet: PropTypes.string.isRequired,
  updateSet: PropTypes.func.isRequired,
};

