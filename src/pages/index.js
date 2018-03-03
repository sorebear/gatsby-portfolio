import React, { Component } from 'react';

// React Components
import HeroImage from '../sections/heroImage';
import Skills from '../sections/skills';
import About from '../sections/about';
import Work from '../sections/work';
// import Pricing from '../sections/pricing';
import Contact from '../sections/contact';
import Footer from '../sections/footer';

import TopBar from '../components/topBar';
import Title from '../components/title';
import BasicSection from '../components/basicSection';
// import Divider from '../components/divider';

// Images
import forestTrailDark from '../images/bg/forest-trail-dark--comp.jpg';
import snowyForest from '../images/bg/snowy-forest--comp.jpg';
import aboutMe from '../images/bg/about-me.jpg';

// CSS
import '../scss/main.scss';

// Variables
const darkGradient = 'linear-gradient(rgba(25, 25, 25, .8), rgba(25, 25, 25, .6))';
const lightGradient = 'linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .5))';

class Index extends Component {
  constructor(props) {
    super(props);
    this.updateSet = this.updateSet.bind(this);
    this.state = {
      activeSet: 'cms-development',
      activeSection: 'skills',
      activeIndex: 0,
    };
  }

  updateSet(newSet, section, newIndex) {
    this.setState({
      activeSet: newSet,
      activeSection: section,
      activeIndex: newIndex,
    });
  }

  render() {
    const { activeSet, activeSection, activeIndex } = this.state;
    return (
      <div className={`content-wrapper ${activeSection}-${activeSet}`}>
        <TopBar />
        <HeroImage title="Soren Baird" image={forestTrailDark} />
        <BasicSection style={{ paddingBottom: 0 }} id="skills" className="skills">
          <Title id="skills-title" text="Skills" />
          <Skills
            activeSkillSet={activeSet}
            activeIndex={activeIndex}
            updateSkillSet={this.updateSet}
          />
        </BasicSection>
        <BasicSection
          id="about"
          className="about"
          style={{ backgroundImage: `${darkGradient}, url(${aboutMe})` }}
        >
          <About />
        </BasicSection>
        <BasicSection id="work" className="work" style={{ padding: 0 }}>
          <Work activeSet={activeSet} activeIndex={activeIndex} updateSet={this.updateSet} />
        </BasicSection>
        {/* <Divider style={{ backgroundImage: `${darkGradient}, url(${forestSunrise})`}} />
                <BasicSection id="pricing" className="pricing">
                    <Title text="Pricing" />
                    <Pricing image="snowy-forest.jpg" />
                </BasicSection> */}
        <BasicSection
          id="contact"
          className="contact"
          style={{ backgroundImage: `${lightGradient}, url(${snowyForest})` }}
        >
          <Title text="Contact" />
          <Contact />
        </BasicSection>
        <section id="footer">
          <Footer />
        </section>
      </div>
    );
  }
}

export default Index;
