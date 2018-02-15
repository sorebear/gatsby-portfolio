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
                <HeroImage title="Sore Bear" subtitle="Development" image="forest-trail-dark.jpg" />
                <section id="services" className="container">
                    <Title text="Services" />
                    <Services />
                </section>
                <Divider image="mountain-view-sunrise.jpg">

                </Divider>
                <section id="about" className="container">
                    <Title text="About" />
                    <About />
                </section>
                <Divider image="misty-forest-trail.jpg" />
                <section id="work" className="container">
                    <Title text="Work" />
                    <Work />
                </section>
                <section id="pricing">
                    <Pricing image="snowy-forest.jpg" />
                </section>
                <section id="contact" className="container">
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
