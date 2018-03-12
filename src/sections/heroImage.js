import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';


const styles = {
  heroImageStyle: {
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundAttachment: 'fixed',
  },
  titleStyle: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'white',
    textShadow: '0px 4px 10px rgba(0, 0, 0, .3)',
  },
  mainTitleStyle: {
    fontSize: '4rem',
    color: '#e49f00',
  },
};

class HeroImage extends Component {
  constructor(props) {
    super(props);
    this.height = null;
  }

  componentDidMount() {
    this.height = window.innerHeight;
  }

  render() {
    const { title, image } = this.props;
    return (
      <div
        id="home"
        className="basic-section hero-image"
        style={{
          ...styles.heroImageStyle,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${image})`,
        }}
      >
        <h1 style={styles.titleStyle}>
          <span style={styles.mainTitleStyle}>{title}</span>
          <span style={{ visibility: 'hidden', fontSize: 0 }}>
            : Web Developer, Mobile Developer, CMS Developer
          </span>
        </h1>
        <h3 style={{ ...styles.titleStyle, fontSize: '36px' }}>
          <Typist avgTypingDelay={100} stdTypdingDelay={50} cursor={{ blink: true }}>
            <Typist.Delay key="1" ms={650} />
            <span key="2">Web Devlope</span>
            <Typist.Backspace key="3" count={4} delay={350} />
            <Typist.Delay key="4" ms={150} />
            <span key="5">eloper</span>
            <Typist.Backspace key="6" count={13} delay={1000} />
            <Typist.Delay key="7" ms={350} />
            <span key="8">Mobile Developer</span>
            <Typist.Backspace key="9" count={16} delay={700} />
            <Typist.Delay key="10" ms={750} />
            <span key="11">CMS Developre</span>
            <Typist.Backspace key="12" count={2} delay={300} />
            <Typist.Delay key="13" ms={100} />
            <span key="14">er</span>
            <Typist.Backspace key="15" count={13} delay={800} />
            <Typist.Delay key="16" ms={300} />
            <span key="17">Developer</span>
          </Typist>
        </h3>
      </div>
    );
  }
}

export default HeroImage;

HeroImage.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
