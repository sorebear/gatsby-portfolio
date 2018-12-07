import React, { Component } from 'react';

// React Components
import HeroImage from '../sections/heroImage';
import JamstackResources from '../sections/jamstackResources';
import Contact from '../sections/contact';
import Footer from '../sections/footer';

import TopBar from '../components/topBar';
import SectionTitle from '../components/sectionTitle';
import BasicSection from '../components/basicSection';

// Images
import crissCross from '../images/bg/crissxcross.png';
import basicCard from '../components/basicCard';
import BasicCard from '../components/basicCard';
import Button from '../components/button';

class Index extends Component {
  constructor(props) {
    super(props);
    this.updateActiveSet = this.updateActiveSet.bind(this);
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    this.contentRef = null;
    this.state = {
      activeSet: 'projects',
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

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
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
        <HeroImage title="Resources" image={crissCross} />
        <BasicSection
          id="skills"
          className="skills"
          style={{ paddingBottom: 0 }}
        >
          <SectionTitle
            id="skills-title"
            className=""
          >
            JAMstack Resources
          </SectionTitle>
          <JamstackResources
            activeSkillSet={activeSet}
            activeIndex={activeIndex}
            angledLineHeight={angledLineHeight}
            updateActiveSet={this.updateActiveSet}
          >
            <div style={{ display: 'flex', textAlign: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <p>
                You can learn a lot from picking a Static Site Generator you&apos;re
                interested in using and reading through their documentation.
              </p>
              <BasicCard>
                <h3>Gatsby</h3>
                <p><strong>Languages:</strong> JavaScript</p>
                <p><strong>Templates:</strong> React</p>
                <p><strong>License:</strong> MIT</p>
                <Button href="https://gatsbyjs.org">Gatsby Website</Button>
              </BasicCard>
              <BasicCard>
                <h3>Nuxt</h3>
                <p><strong>Languages:</strong> Javascipt</p>
                <p><strong>Templates:</strong> Vue</p>
                <p><strong>License:</strong> MIT</p>
                <Button href="https://nuxtjs.org/">Nuxt Website</Button>
              </BasicCard>
              <BasicCard>
                <h3>VuePress</h3>
                <p><strong>Languages:</strong> Javascipt</p>
                <p><strong>Templates:</strong> Vue</p>
                <p><strong>License:</strong> MIT</p>
                <Button href="https://vuepress.vuejs.org/">VuePress Website</Button>
              </BasicCard>
              <BasicCard>
                <h3>Hugo</h3>
                <p><strong>Languages:</strong> Go</p>
                <p><strong>Templates:</strong> Go</p>
                <p><strong>License:</strong> Apache 2.0</p>
                <Button href="https://gohugo.io/">Hugo Website</Button>
              </BasicCard>
              <BasicCard>
                <h3>Jekyll</h3>
                <p><strong>Languages:</strong> Ruby</p>
                <p><strong>Templates:</strong> Liquid</p>
                <p><strong>License:</strong> MIT</p>
                <Button href="https://jekyllrb.com/">Jekyll Website</Button>
              </BasicCard>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <h2>Podcasts</h2>
              <BasicCard>
                <h3>Syntax</h3>
                <p><strong>Episode:</strong> Why Static Site Generators Are Awesome</p>
                <Button href="https://syntax.fm/show/034/why-static-site-generators-are-awesome" rel="noopener noreferrer" target="_blank">
                  Listen to Syntax
                </Button>
              </BasicCard>
              <BasicCard>
                <h3>Syntax</h3>
                <p><strong>Episode:</strong> Live at JAMstack Conf</p>
                <p>I&apos;m in this episode. I get a &quot;Stumped!&quot; question wrong.</p>
                <Button href="https://syntax.fm/show/090/live-at-jamstack_conf" rel="noopener noreferrer">
                  Listen to Syntax
                </Button>
              </BasicCard>
              <h2>Articles</h2>
              <BasicCard>
                <Button href="https://www.netlify.com/docs/functions/">
                  Lambda Functions on Netlify
                </Button>
              </BasicCard>
            </div>
            <div>
              <BasicCard>
                <h2>Gatsby Docs Tutorial</h2>
                <p>Tutorial Type: Documentation</p>
                <p>Cost: Free</p>
                <Button href="https://www.gatsbyjs.org/tutorial/">
                  View Tutorial
                </Button>
              </BasicCard>
              <BasicCard>
                <h2>Level Up Tutorials - Pro Gatsby&nbsp;2</h2>
                <p>Tutorial Type: Video</p>
                <p>Cost: Subscription or Purchase</p>
                <Button href="https://www.leveluptutorials.com/store/products/tutorials/lut-dd028">
                  View Tutorial
                </Button>
              </BasicCard>
              <BasicCard>
                <h2>Level Up Tutorials - Headless Wordpress</h2>
                <p>Tutorial Type: Video</p>
                <p>Cost: Subscription or Purchase</p>
                <Button href="https://www.leveluptutorials.com/store/products/tutorials/lut-dd022">
                  View Tutorial
                </Button>
              </BasicCard>
              <div>
                <iframe title="what-is-the-jamstack" width="560" height="315" src="https://www.youtube.com/embed/Opye_qcRdUo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </JamstackResources>
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
