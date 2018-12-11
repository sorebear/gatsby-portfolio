import React, { Component } from 'react';

// React Components
import HeroImage from '../sections/heroImage';
import JamstackResources from '../sections/jamstackResources';
import Contact from '../sections/contact';
import Footer from '../sections/footer';
import HomeButton from '../components/homeButton';
import TopBar from '../components/topBar';
import SectionTitle from '../components/sectionTitle';
import BasicSection from '../components/basicSection';

// Images
import crissCross from '../images/bg/crissxcross.png';
import BasicCard from '../components/basicCard';
import Button from '../components/button';

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
        <TopBar />
        <HomeButton activeSet={activeSet} />
        <HeroImage title="JAMstack Resources" image={crissCross} />
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
            activeSet={activeSet}
            activeIndex={activeIndex}
            angledLineHeight={angledLineHeight}
            updateActiveSet={this.updateActiveSet}
          >
            <div className="resources-container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <p>
                You can learn a lot from picking a Static Site Generator you&apos;re
                interested in using and reading through their documentation.
              </p>
              <h2>Static Site Generators | Javascript Based</h2>
              <BasicCard>
                <h3>Gatsby</h3>
                <p><strong>Languages:</strong> Javascript</p>
                <p><strong>Templates:</strong> React</p>
                <p><strong>License:</strong> MIT</p>
                <Button className="button" href="https://gatsbyjs.org">Gatsby Website</Button>
              </BasicCard>
              <BasicCard>
                <h3>Nuxt</h3>
                <p><strong>Languages:</strong> Javascipt</p>
                <p><strong>Templates:</strong> Vue</p>
                <p><strong>License:</strong> MIT</p>
                <Button className="button" href="https://nuxtjs.org/">Nuxt Website</Button>
              </BasicCard>
              <h2>Static Site Generators | Other Languages</h2>
              <BasicCard>
                <h3>Hugo</h3>
                <p><strong>Languages:</strong> Go</p>
                <p><strong>Templates:</strong> Go</p>
                <p><strong>License:</strong> Apache 2.0</p>
                <Button className="button" href="https://gohugo.io/">Hugo Website</Button>
              </BasicCard>
              <BasicCard>
                <h3>Jekyll</h3>
                <p><strong>Languages:</strong> Ruby</p>
                <p><strong>Templates:</strong> Liquid</p>
                <p><strong>License:</strong> MIT</p>
                <Button className="button" href="https://jekyllrb.com/">Jekyll Website</Button>
              </BasicCard>
            </div>
            <div className="resources-container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <h2>Learn More | Podcasts</h2>
              <BasicCard>
                <h3>Why Static Site Generators Are Awesome</h3>
                <p>Syntax</p>
                <Button className="button" href="https://syntax.fm/show/034/why-static-site-generators-are-awesome" rel="noopener noreferrer" target="_blank">
                  Listen to Podcast
                </Button>
              </BasicCard>
              <BasicCard>
                <h3>Live at JAMstack Conf</h3>
                <p>Syntax</p>
                <Button className="button" href="https://syntax.fm/show/090/live-at-jamstack_conf" rel="noopener noreferrer">
                  Listen to Podcast
                </Button>
              </BasicCard>
              <h2> Learn More | Articles</h2>
              <BasicCard>
                <h3>Lambda Functions on Netlify</h3>
                <p>Netlify</p>
                <Button className="button" href="https://www.netlify.com/docs/functions/">
                  View Article
                </Button>
              </BasicCard>
              <h2>Learn More | Videos</h2>
              <BasicCard>
                <h3>What is the JAMstack?</h3>
                <p>Phil Hawksworth</p>
                <Button className="button" href="https://www.youtube.com/watch?v=Opye_qcRdUo&index=1&list=PL58Wk5g77lF-UQ39pejLX2Zn5DxQyExBa">
                  Watch Video
                </Button>
              </BasicCard>
              <BasicCard>
                <h3>Bet You Didn&apos;t Think You Browser Could Do That</h3>
                <p>Monica Dinculescu</p>
                <Button className="button" href="https://www.youtube.com/watch?v=f5QYSdpMs6Y&list=PL58Wk5g77lF-UQ39pejLX2Zn5DxQyExBa&index=3">
                  Watch Video
                </Button>
              </BasicCard>
            </div>
            <div className="resources-container" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <h2>Tutorials | Articles</h2>
              <BasicCard>
                <h3>Gatsby.js Tutorial</h3>
                <p>Gatsby Docs</p>
                <Button className="button" href="https://www.gatsbyjs.org/tutorial/">
                  View Tutorial
                </Button>
              </BasicCard>
              <BasicCard>
                <h3>Gatsby E-Commerce Tutorial</h3>
                <p>Gatsby Docs</p>
                <Button className="button" href="https://www.gatsbyjs.org/docs/ecommerce-tutorial/">
                  View Tutorial
                </Button>
              </BasicCard>
              <BasicCard>
                <h3>Making a Site With User Authentication</h3>
                <p>Gatsby Docs</p>
                <Button className="button" href="https://www.gatsbyjs.org/docs/authentication-tutorial/">
                  View Tutorial
                </Button>
              </BasicCard>
              <h2>Tutorials | Videos</h2>
              <BasicCard>
                <h3>Pro Gatsby&nbsp;2</h3>
                <p>Level Up Tutorials</p>
                <small><strong>Cost:</strong> Subscription or Purchase</small>
                <Button className="button" href="https://www.leveluptutorials.com/store/products/tutorials/lut-dd028">
                  View Tutorial
                </Button>
              </BasicCard>
              <BasicCard>
                <h3>Headless Wordpress</h3>
                <p>Level Up Tutorials</p>
                <small><strong>Cost:</strong> Subscription or Purchase</small>
                <Button className="button" href="https://www.leveluptutorials.com/store/products/tutorials/lut-dd022">
                  View Tutorial
                </Button>
              </BasicCard>
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
