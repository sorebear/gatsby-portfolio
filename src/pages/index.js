import React, { Component } from 'react';

// React Components
import HeroImage from '../sections/heroImage';
import Skills from '../sections/skills';
import About from '../sections/about';
import Work from '../sections/work';
import Pricing from '../sections/pricing';
import Contact from '../sections/contact';
import Footer from '../sections/footer';

import TopBar from '../components/topBar';
import SectionTitle from '../components/sectionTitle';
import BasicSection from '../components/basicSection';

// Images
import aboutMe from '../images/bg/about-me-2.jpg';
import crissCross from '../images/bg/crissxcross.png';

// CSS
import '../scss/main.scss';

// Variables
const darkGradient = 'linear-gradient(rgba(25, 25, 25, .8), rgba(25, 25, 25, .6))';

class Index extends Component {
  constructor(props) {
    super(props);
    this.updateActiveSet = this.updateActiveSet.bind(this);
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    this.contentRef = null;
    this.state = {
      activeSet: 'web-development',
      activeSection: 'skills',
      activeIndex: 0,
      angledLineHeight: this.contentWidth * Math.tan(5 * (Math.PI / 180)),
    };
  }

  componentDidMount() {
    this.contentRef = document.getElementById('skills-title');
    this.updateWindowWidth();
    this.updateActiveSet('web-development', 'skills', 0);
    window.addEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth() {
    this.setState({
      angledLineHeight: this.contentRef.offsetWidth * Math.tan(5 * (Math.PI / 180)),
    });
  }

  updateActiveSet(newSet, section, newIndex) {
    this.setState({
      activeSet: newSet,
      activeSection: section,
      activeIndex: newIndex,
    });
  }

  render() {
    const { activeSet, activeSection, activeIndex, angledLineHeight } = this.state;
    return (
      <div className={`content-wrapper ${activeSet}-active`}>
        <TopBar />
        <HeroImage title="Soren Baird" image={crissCross} />
        <BasicSection
          id="about"
          className="about"
          style={{ backgroundImage: `${darkGradient}, url(${aboutMe})` }}
        >
          <About />
        </BasicSection>
        <BasicSection 
          id="skills"
          className="skills"
          style={{ paddingBottom: 0 }}
        >
          <SectionTitle 
            id="skills-title"
            className=""
          >
            Skills
          </SectionTitle>
          <Skills
            activeSkillSet={activeSet}
            activeIndex={activeIndex}
            angledLineHeight={angledLineHeight}
            updateActiveSet={this.updateActiveSet}
          />
        </BasicSection>
        <BasicSection 
          id="pricing" 
          className="pricing"
          style={{ 
            backgroundImage: `url(${crissCross})`, 
            backgroundColor: '#333',
            backgroundSize: 'initial',
          }}
        >
            <SectionTitle
              className="colored-title"
              style={{ color: 'white' }}
            >
              Pricing
            </SectionTitle>
            <Pricing />
        </BasicSection>
        <BasicSection id="work" className="work" style={{ padding: 0 }}>
          <Work
            activeSet={activeSet}
            activeIndex={activeIndex}
            angledLineHeight={angledLineHeight}
            updateActiveSet={this.updateActiveSet}
          />
        </BasicSection>
        <BasicSection
          id="contact"
          className="contact"
          style={{ 
            backgroundImage: `url(${crissCross})`,
            backgroundColor: '#333',
            backgroundSize: 'initial',
          }}
        >
          <SectionTitle 
            style={{ color: 'white' }}
            className="colored-title"
          >
            Contact
          </SectionTitle>
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
