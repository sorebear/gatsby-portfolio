import React, { Component } from 'react';
import BasicSection from '../components/basicSection';
import Services from './services';
import Divider from '../components/divider';
import About from './about';
import Pricing from './pricing';
import Title from '../components/title';
import Work from './work';
import HeroImage from '../components/heroImage';
import TopBar from '../components/topBar';
import Contact from './contact';
import Footer from './footer';
import '../scss/main.scss';

const darkGradient = `linear-gradient(rgba(25, 25, 25, .7), rgba(25, 25, 25, .5))`; 
const lightGradient = `linear-gradient(rgba(255, 255, 255, .7), rgba(255, 255, 255, .5))`;

class Index extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <TopBar />
                <HeroImage title="Soren Baird" subtitle="Developer / Designer" image="forest-trail-dark.jpg" />
                <BasicSection id="services" className="services">
                    <Title text="Services" />
                    <Services />
                </BasicSection>
                <BasicSection id="about" className="about" style={{backgroundImage: `${lightGradient}, url('static/mountain-view-sunrise.jpg')`}}>
                    <Title text="About" />
                    <About />
                </BasicSection>
                <BasicSection id="work" className="work">
                    <Title text="Work" />
                    <Work />
                </BasicSection>
                <BasicSection id="pricing" className="pricing">
                    <Title text="Pricing" />
                    <Pricing image="snowy-forest.jpg" />
                </BasicSection>
                <BasicSection id="contact" className="contact" style={{backgroundImage: `${lightGradient}, url('static/snowy-forest.jpg')`}}>
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
