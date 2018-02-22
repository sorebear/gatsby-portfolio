import React, { Component } from 'react';
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



class Index extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <TopBar />
                <HeroImage title="Soren Baird" subtitle="Developer / Designer" image="forest-trail-dark.jpg" />
                <section id="services" className="section-services">
                    <Title text="Services" />
                    <Services />
                </section>
                <Divider image="mountain-view-sunrise.jpg"/>
                <section id="about" className="container section-about">
                    <Title text="About" />
                    <About />
                </section>
                <Divider image="misty-forest-trail.jpg" />
                <section id="work" className="container section-work">
                    <Title text="Work" />
                    <Work />
                </section>
                <section id="pricing" className="section-pricing">
                    <Pricing image="snowy-forest.jpg" />
                </section>
                <section id="contact" className="container section-contact">
                    <Title text="Contact" />
                    <Contact />
                </section>
                <section id="footer">
                    <Footer />
                </section>
            </div>
        )
    }
}

export default Index;
