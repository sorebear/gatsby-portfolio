import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../components/icon';
import StitchBox from '../components/stitchBox';
import StitchColumns from '../components/stitchColumns';
import StitchRows from '../components/stitchRows';

import data from '../data/skillsAndWorksData';

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
  typesSelectorLineStyle: {
    width: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: '1s',
    top: '100%',
  },
  iconStyle: {
    height: '5.5rem',
    marginBottom: 0,
  },
  technologiesStyle: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  }

  renderSkillSets() {
    return data.map((skillSet, index) => {
      const parsedName = skillSet.name.replace(/ /g, '-').toLowerCase();
      return (
        <div key={`skillset-${parsedName}`} className={`skills__skill-type-card--${parsedName}`} style={{ width: `${90 / data.length}%` }}>
          <StitchBox style={{ transform: `rotate(${skillSet.rotate}deg)` }}>
            <button
              onClick={() => this.props.updateSkillSet(parsedName, 'skills', index)}
              onKeyDown={() => this.props.updateSkillSet(parsedName, 'skills', index)}
              className="skills__skill-type-card"
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                transform: `rotate(${skillSet.rotate * -1}deg)`,
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

  renderSkillSetDetailsIcons(i) {
    return this.data[i].details.icons.map((icon, index) => {
      if (icon.icon) {
        return <img key={index} alt={icon.iconAlt} className="skill-icon" style={styles.iconStyle} src={icon.icon} />;
      }
      if (icon.separator === 'and') {
        return (
          <h3 key={index} style={{ marginBottom: 0 }}>
            &amp;&amp;
          </h3>
        );
      }
      return (
        <h3 key={index} style={{ marginBottom: 0 }}>
          ||
        </h3>
      );
    });
  }

  renderSkillSetDetailsText(i) {
    return this.data[i].details.text.map((text, index) => {
      return (
        <p key={index} style={styles.detailsDescription}>
          {text}
        </p>
      );
    });
  }

  renderSkillSetDetails() {
    return this.data.map((skillSetDetails, index) => {
      const parsedName = skillSetDetails.name.replace(/ /g, '-').toLowerCase();
      return (
        <div key={index} style={{ width: '33.33%' }}>
          <StitchRows rows={['1', '2']} section="skills" set={parsedName} rotate={skillSetDetails.rotate}>
            <div className={`skills__details--${parsedName}`} style={{ width: '100%' }}>
              <div className="skills__technology-container" style={styles.technologiesStyle}>
                {this.renderSkillSetDetailsIcons(index)}
              </div>
              {this.renderSkillSetDetailsText(index)}
            </div>
          </StitchRows>
        </div>
      );
    });
  }

  render() {
    return (
      <div className={`skills ${this.props.activeSkillSet}`}>
        <div className="container">
          <div className="skills__types-container" style={styles.typesContainerStyle}>
            {this.renderSkillSets()}
          </div>
          <StitchColumns
            row="1"
            section="skills"
            skillSetArr={['cms-development', 'web-development', 'mobile-development']}
          />
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
        <StitchColumns
          row="2"
          section="skills"
          skillSetArr={['mobile-development', 'web-development', 'cms-development']}
        />
      </div>
    );
  }
}

export default Skills;

Skills.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  activeSkillSet: PropTypes.string.isRequired,
  updateSkillSet: PropTypes.func.isRequired,
};
