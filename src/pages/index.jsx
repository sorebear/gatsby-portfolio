import React, { Component } from 'react';
import Helmet from 'react-helmet';

// React Components
import HeroImage from '../sections/heroImage';
import Skills from '../sections/skills';
import About from '../sections/about';
import Work from '../sections/work';
import Resources from '../sections/resources';
import Contact from '../sections/contact';
import Footer from '../sections/footer';

import TopBar from '../components/topBar';
import SectionTitle from '../components/sectionTitle';
import BasicSection from '../components/basicSection';

// Images
import aboutMe from '../images/bg/about-me-2.jpg';
import crissCross from '../images/bg/crissxcross.png';

// Variables
const darkGradient = 'linear-gradient(rgba(25, 25, 25, .8), rgba(25, 25, 25, .6))';

class Index extends Component {
  constructor(props) {
    super(props);
    this.window = null;
    this.updateActiveSet = this.updateActiveSet.bind(this);
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    this.contentRef = null;
    this.state = {
      activeSet: 'web-development',
      activeIndex: 0,
      angledLineHeight: this.contentWidth * Math.tan(5 * (Math.PI / 180)),
    };
  }

  componentDidMount() {
    this.window = window;
    this.contentRef = document.getElementById('skills-title');
    this.updateWindowWidth();
    this.updateActiveSet('web-development', 'skills', 0);
    this.window.addEventListener('resize', this.updateWindowWidth);
  }

  componentWillUnmount() {
    this.window.removeEventListener('resize', this.updateWindowWidth);
  }

  updateWindowWidth() {
    this.setState({
      angledLineHeight: this.contentRef.offsetWidth * Math.tan(5 * (Math.PI / 180)),
    });
  }

  updateActiveSet(newSet, section, newIndex) {
    this.setState({
      activeSet: newSet,
      activeIndex: newIndex,
    });
  }

  render() {
    const { activeSet, activeIndex, angledLineHeight } = this.state;
    return (
      <div className={`content-wrapper ${activeSet}-active`}>
        <Helmet>
          <meta property="og:title" content="Soren Baird - Web Developer, CMS Developer, Mobile Developer" />
          <name>JAMstack Resources | Soren Baird</name>
          <meta property="og:image" content="https://res.cloudinary.com/sorebear/image/upload/v1544489724/portfolio/home.png" />
          <meta property="og:url" content="https://sorenbaird.com" />
          <meta property="og:description" content="I am a Full Stack Web Developer living and coding in Orange County, CA." />
        </Helmet>
        <TopBar location="home" />
        <HeroImage location="home" title="Soren Baird" image={crissCross} />
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
          id="resources"
          className="resources"
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
            Resources
          </SectionTitle>
          <Resources />
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
          id="connect"
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
            Connect
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
