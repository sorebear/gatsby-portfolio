import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainWork from './mainWork';

import SectionTitle from '../components/sectionTitle';
import StitchBox from '../components/stitchBox';
import StitchRows from '../components/stitchRows';

import data from '../data/skillsAndWorksData';
import code from '../images/work/code.svg';
import live from '../images/work/live.svg';

const styles = {
  sideProjectsTitleStyle: {
    margin: 0,
    position: 'absolute',
    bottom: '7.25rem',
    left: '50%',
    transform: 'translate(-50%, 25%)',
  },
  workSetsContainerStyle: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-around',
  },
  allProjectsWrapperStyle: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
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
    zIndex: 10,
  },
  individualProjectStyle: {
    position: 'relative',
    width: '50%',
    padding: '0 2rem',
    display: 'flex',
    marginBottom: '1.45rem',
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

class Work extends Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.state = {
      'web-development': 'flex',
      'cms-development': 'flex',
      'mobile-development': 'flex',
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      'web-development': newProps.activeSet === 'web-development' ? 'flex' : this.state['web-development'],
      'cms-development': newProps.activeSet === 'cms-development' ? 'flex' : this.state['cms-development'],
      'mobile-development': newProps.activeSet === 'mobile-development' ? 'flex' : this.state['mobile-development'],
    });
    setTimeout(() => {
      this.setState({
        'web-development': newProps.activeSet === 'web-development' ? 'flex' : 'none',
        'cms-development': newProps.activeSet === 'cms-development' ? 'flex' : 'none',
        'mobile-development': newProps.activeSet === 'mobile-development' ? 'flex' : 'none',
      });
    }, 500);
  }

  componentDidUpdate() {

  }

  renderSkillSets() {
    return data.map((skillSet, index) => (
      <div
        key={`work-type-selectors-${skillSet.spinalName}`}
        className={`skills__skill-type-card--${skillSet.spinalName}`}
        style={{ width: `${90 / data.length}%` }}
      >
        <StitchBox style={{ transform: `rotate(${skillSet.rotate}deg)` }}>
          <button
            onClick={() => this.props.updateActiveSet(skillSet.spinalName, 'skills', index)}
            onKeyDown={() => this.props.updateActiveSet(skillSet.spinalName, 'skills', index)}
            className="skills__skill-type-card"
            style={{
              textAlign: 'center',
              cursor: 'pointer',
              transform: `rotate(${skillSet.rotate * -1}deg)`,
            }}
          >
            <img
              src={skillSet.image}
              className="skills__skill-type-icon"
              style={{ width: '9rem' }}
              alt={skillSet.name}
            />
            <h4 style={{ marginTop: 0 }}>{skillSet.name}</h4>
          </button>
        </StitchBox>
      </div>
    ));
  }

  renderAllProjects() {
    return this.data.map((workTypes, index) => (
      <div
        key={`projects-type-${workTypes.spinalName}`}
        style={{ width: '33.33%' }}
      >
        <StitchRows
          rows={[5, 6]}
          section="work"
          set={workTypes.spinalName}
          columnHeights={['10.15rem', '10.15rem']}
          setArr={['web-development', 'cms-development', 'mobile-development']}
          rotate={workTypes.rotate}
          angledLineHeight={this.props.angledLineHeight}
        >
          <div
            id={`work-projects-${workTypes.spinalName}`}
            className={`work__projects work__projects--${workTypes.spinalName}`}
            style={{
              ...styles.projectCategoryContainerStyle,
              display: this.state[workTypes.spinalName],
            }}
          >
            <h2 className="mobile-only">{workTypes.name}</h2>
            {this.renderProjectCategory(index)}
          </div>
        </StitchRows>
      </div>
    ));
  }

  renderProjectCategory(i) {
    if (!this.data[i].works.length) {
      return (
        <div style={{ marginTop: '5.8rem', marginBottom: '4.35rem' }}>
          <h3>There are currently no {data[i].name} projects available to showcase.</h3>
          <h3>Please check back again later</h3>
        </div>
      );
    }
    return this.data[i].works.map(work => (
      <div
        key={`work-project-${work.spinalName}`}
        className="work__individual-project"
        style={styles.individualProjectStyle}
      >
        <StitchBox style={{ width: '100%' }}>
          <img src={work.image} style={{ padding: '5px', margin: 0, width: '100%' }} alt={work.name} />
          <div className="work__project-overlay" style={styles.projectOverlayStyle}>
            { !work.liveLink ? '' : (
              <a href={work.liveLink} style={{ color: 'white', display: 'flex', flexDirection: 'column' }} target="_blank">
                <img src={live} alt="laptop icon" style={{ width: '3rem', margin: 0 }} />
                <p>Live</p>
              </a>
            )}
            <a href={work.githubLink} style={{ color: 'white', display: 'flex', flexDirection: 'column' }} target="_blank">
              <img src={code} alt="code icon" style={{ width: '3rem', margin: 0 }} />
              <p>Code</p>
            </a>
          </div>
        </StitchBox>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <MainWork angledLineHeight={this.props.angledLineHeight} activeSet={this.props.activeSet} />
        <div style={{ position: 'relative' }}>
          <SectionTitle style={styles.sideProjectsTitleStyle} >
            Side-Projects
          </SectionTitle>
        </div>
        <div className="work__types-container" style={styles.workSetsContainerStyle}>
          {this.renderSkillSets()}
        </div>
        <div className="work__projects-wrapper" style={styles.allProjectsWrapperStyle}>
          <div
            className="work__projects-container"
            style={{
              ...styles.allProjectsContainerStyle,
              transform: `translate3d(${this.props.activeIndex * -33.33}%, 0, 0)`,
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
  updateActiveSet: PropTypes.func.isRequired,
  angledLineHeight: PropTypes.number.isRequired,
};
