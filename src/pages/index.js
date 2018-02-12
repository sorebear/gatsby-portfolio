import React, { Component } from 'react';
import Services from './services';
import Divider from '../components/divider';
import About from './about';
import Pricing from './pricing';
import Title from '../components/title';
import HeroImage from '../components/heroImage';
import TopBar from '../components/topBar';
import Contact from './contact';
import '../scss/main.scss';



class Index extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className='content-wrapper'>
                <TopBar />
                <HeroImage title="Soren Baird" subtitle="Web Developer" image="bamboo-sunrise.jpg" />
                <section id="services" className="container">
                    <Title text="Our Services" />
                    <Services />
                </section>
                <Divider image="bamboo.jpg">

                </Divider>
                <section id="about" className="container">
                    <Title text="About Me" />
                    <About />
                </section>
                <Divider image="leaves.jpg" />
                <section id="work" className="container">
                    <Title text="Our Work" />
                </section>
                <section id="pricing">
                    <Pricing image="bamboo-sunset.jpg" />
                </section>
                <section id="contact" className="container">
                    <Title text="Contact Me" />
                    <Contact />
                </section>
            </div>
        )
    }
}

export default Index;
