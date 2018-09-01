import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StitchBox from '../components/stitchBox';
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

  renderSkillSetDetailsIcons(i, row, mobile) {
    return this.data[i].details.icons[row].map((icon) => {
      if (icon.icon) {
        return (
          <div key={icon.iconKey} style={{ width: mobile ? '20%' : 'unset', textAlign: 'center' }}>
            <img
              alt={icon.iconAlt}
              className="skills__skill-icon"
              style={styles.iconStyle}
              src={icon.icon}
            />
          </div>
        );
      }
      if (icon.separator === 'and') {
        return (
          <h3
            className="skills__skills-separator"
            key={icon.iconKey}
            style={{ marginBottom: 0, textAlign: 'center', width: mobile ? '20%' : 'unset' }}
          >
            &amp;&amp;
          </h3>
        );
      }
      return (
        <h3
          className="skills__skills-separator"
          key={icon.iconKey}
          style={{ marginBottom: 0, textAlign: 'center', width: mobile ? '20%' : 'unset' }}
        >
          ||
        </h3>
      );
    });
  }

  renderSkillSetDetailsText(i) {
    return this.data[i].details.text.map(text => (
      <p key={text} style={styles.detailsDescription}>
        {text}
      </p>
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
            className={`skills__details--${skillSetDetails.spinalName}`}
            style={{ width: '100%', zIndex: 10 }}
          >
            <div
              className="skills__technology-container--web web-only"
              style={styles.technologiesContainerStyle}
            >
              {this.renderSkillSetDetailsIcons(index, 'row1')}
              {this.renderSkillSetDetailsIcons(index, 'row2')}
            </div>
            <div
              className="skills__technology-container--mobile mobile-only"
              style={{ ...styles.technologiesContainerStyle, flexDirection: 'column' }}
            >
              <h2>{skillSetDetails.name}</h2>
              <div className="skills__technology-container--row-1" style={styles.technologiesRowStyle}>
                {this.renderSkillSetDetailsIcons(index, 'row1', true)}
              </div>
              <div className="skills__technology-container--row-2" style={styles.technologiesRowStyle}>
                {this.renderSkillSetDetailsIcons(index, 'row2', true)}
              </div>
            </div>
            {this.renderSkillSetDetailsText(index)}
          </div>
        </StitchRows>
      </div>
    ));
  }

  render() {
    return (
      <div className={`skills ${this.props.activeSkillSet}`}>
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
  activeSkillSet: PropTypes.string.isRequired,
  updateActiveSet: PropTypes.func.isRequired,
  angledLineHeight: PropTypes.number.isRequired,
};
