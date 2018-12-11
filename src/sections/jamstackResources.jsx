import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StitchBox from '../components/stitchBox';
import StitchRows from '../components/stitchRows';

import data from '../data/resourcesData';

const styles = {
  typesContainerStyle: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-around',
  },
  typeCardWrapperStyle: {
    width: '33.33%',
  },
  typeCardStyle: {
    textAlign: 'center',
  },
  iconStyle: {
    height: '5.5rem',
    width: '5.5rem',
    marginBottom: 0,
  },
  technologiesContainerStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  technologiesRowStyle: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillsDetailsWrapperStyle: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  skillsDetailsStyle: {
    width: '300%',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    display: 'flex',
    transition: 'all .5s',
  },
  detailsDescription: {
    width: '100%',
    maxWidth: '625px',
    textAlign: 'center',
  },
  verticalLineContainer: {
    width: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
  },
  verticalMaskStyle: {
    width: '33.33%',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
  },
};

class Skills extends Component {
  constructor(props) {
    super(props);
    this.data = data;
    this.state = {
      'web-development': 'flex',
      'cms-development': 'none',
      'mobile-development': 'none',
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      'web-development': newProps.activeSet === 'web-development' ? 'block' : this.state['web-development'],
      'cms-development': newProps.activeSet === 'cms-development' ? 'block' : this.state['cms-development'],
      'mobile-development': newProps.activeSet === 'mobile-development' ? 'block' : this.state['mobile-development'],
    });
    setTimeout(() => {
      this.setState({
        'web-development': newProps.activeSet === 'web-development' ? 'block' : 'none',
        'cms-development': newProps.activeSet === 'cms-development' ? 'block' : 'none',
        'mobile-development': newProps.activeSet === 'mobile-development' ? 'block' : 'none',
      });
    }, 500);
  }


  renderSkillSets() {
    return data.map((skillSet, index) => (
      <div
        key={`skillset-${skillSet.spinalName}`}
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

  renderSkillSetDetails() {
    return this.data.map((skillSetDetails, index) => (
      <div key={`skills-skillset-${skillSetDetails.spinalName}`} style={{ width: '33.33%' }}>
        <StitchRows
          rows={[1, 2]}
          section="skills"
          set={skillSetDetails.spinalName}
          columnHeights={['10.15rem', '10.15rem']}
          setArr={['web-development', 'cms-development', 'mobile-development']}
          rotate={skillSetDetails.rotate}
          angledLineHeight={this.props.angledLineHeight}
        >
          <div
            // className={`skills__details--${skillSetDetails.spinalName}`}
            style={{ width: '100%', zIndex: 10, display: this.state[skillSetDetails.spinalName] }}
          >
            { this.props.children[index] }
          </div>
        </StitchRows>
      </div>
    ));
  }

  render() {
    return (
      <div className={`skills ${this.props.activeSet}`}>
        <div className="skills__types-container" style={styles.typesContainerStyle}>
          {this.renderSkillSets()}
        </div>
        <div className="skills__details-wrapper" style={styles.skillsDetailsWrapperStyle}>
          <div
            className="skills__details"
            style={{
              ...styles.skillsDetailsStyle,
              transform: `translateX(${this.props.activeIndex * -33.33}%)`,
            }}
          >
            {this.renderSkillSetDetails()}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

Skills.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  activeSet: PropTypes.string.isRequired,
  updateActiveSet: PropTypes.func.isRequired,
  angledLineHeight: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element, PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
