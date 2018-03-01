import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// React Components
import BasicSection from '../components/basicSection';
import Skills from './skills';
import Divider from '../components/divider';
import About from './about';
import Pricing from './pricing';
import Title from '../components/title';
import Work from './work';
import HeroImage from '../components/heroImage';
import TopBar from '../components/topBar';
import Contact from './contact';
import Footer from './footer';

// Images
import mountainViewSunrise from '../images/bg/mountain-view-sunrise--comp.jpg';
import bambooSunrise from '../images/bg/bamboo-sunrise--comp.jpg';
import forestTrailDark from '../images/bg/forest-trail-dark--comp.jpg';
import snowyForest from '../images/bg/snowy-forest--comp.jpg';
import forestSunrise from '../images/bg/forest-sunrise--comp.jpg';
import leaves from '../images/bg/leaves--comp.jpg';
import aboutMe from '../images/bg/about-me.jpg';

// CSS
import '../scss/main.scss';

// Variables
const darkGradient = `linear-gradient(rgba(25, 25, 25, .8), rgba(25, 25, 25, .6))`; 
const lightGradient = `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .5))`;

class Index extends Component {
    constructor(props) {
        super(props);
        this.updateSet = this.updateSet.bind(this);
        this.state = {
            activeSet: 'cms-development',
            activeSection: 'skills',
            activeIndex: 0
        }
    }

    updateSet(newSet, section, newIndex) {
        this.setState({
            activeSet: newSet,
            activeSection: section,
            activeIndex: newIndex
        })
    }

    render() {
        const { activeSet, activeSection, activeIndex } = this.state;
        return (
            <div className={`content-wrapper ${activeSection}-${activeSet}`}>
                <TopBar />
                <HeroImage title="Soren Baird" image={forestTrailDark} />
                <BasicSection style={{ paddingBottom: 0 }} id="skills" className="skills">
                    <Title id="skills-title" text="Skills" />
                    <Skills activeSkillSet={activeSet} activeIndex={activeIndex} updateSkillSet={this.updateSet} />
                </BasicSection>
                <BasicSection id="about" className="about" style={{backgroundImage: `${darkGradient}, url(${aboutMe})`}}>
                    {/* <Title text="About" style={{ color: 'white'}} /> */}
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
                <BasicSection id="contact" className="contact" style={{backgroundImage: `${lightGradient}, url(${snowyForest})`}}>
                    <Title text="Contact"/>
                    <Contact />
                </BasicSection>
                <section id="footer">
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Index;
