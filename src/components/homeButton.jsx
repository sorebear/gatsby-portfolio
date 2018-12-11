import React from 'react';
import Link from 'gatsby-link';
import home from '../images/resources/basic_home.svg';

export default () => (
  <Link href="/" className="home-button" to="/">
    <img alt="Home icon" src={home} />
  </Link>
);
