import reactIcon from '../images/devicons/react.svg';
import mongoDBIcon from '../images/devicons/mongodb.svg';
import nodeJSIcon from '../images/devicons/nodejs.svg';
import graphQLIcon from '../images/devicons/graphql.svg';
import javaScriptIcon from '../images/devicons/javascript.svg';
import netlifyIcon from '../images/devicons/netlify.svg';
import drupalIcon from '../images/devicons/drupal.svg';
import dartIcon from '../images/devicons/dart.svg';
import flutterIcon from '../images/devicons/flutter.svg';
import firebaseIcon from '../images/devicons/firebase.svg';
import wordpressIcon from '../images/devicons/wordpress.svg';
import phpIcon from '../images/devicons/php.svg';


import cmsDevelopment from '../images/work/cms-development.svg';
import webDevelopment from '../images/work/web-development.svg';
import mobileDevelopment from '../images/work/mobile-development.svg';


import thriveLeadership from '../images/work/thrive-leadership.png';
import memoryMatch from '../images/work/memory-match.png';
import bologneseBanners from '../images/work/bolognese-banners.png';

const gatsbyIcon =
  'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg==';

const skillsData = [
  {
    name: 'Web Development',
    spinalName: 'web-development',
    image: webDevelopment,
    rotate: 5,
    details: {
      text: [
        'I primarily build full-stack web applications using the React, Node.js, and MongoDB.',
        'I also build web applications using vanilla Javascript and PHP.',
      ],
      icons: {
        row1: [
          { icon: reactIcon, iconAlt: 'react icon', iconKey: 'web-react' },
          { separator: 'and', iconKey: 'web-sep-1' },
          { icon: nodeJSIcon, iconAlt: 'node-js icon', iconKey: 'web-node' },
          { separator: 'and', iconKey: 'web-sep-2' },
          { icon: mongoDBIcon, iconAlt: 'mongo-db icon', iconKey: 'web-mongodb' },
        ],
        row2: [
          { separator: 'or', iconKey: 'web-sep-3' },
          { icon: javaScriptIcon, iconAlt: 'javascript icon', iconKey: 'web-javascript' },
          { separator: 'and', iconKey: 'web-sep-4' },
          { icon: phpIcon, iconAlt: 'php icon', iconKey: 'web-php' },
        ],
      },
    },
    works: [
      {
        name: 'Thrive Leadership',
        spinalName: 'thrive-leadership',
        image: thriveLeadership,
        liveLink: 'https://thrive-leadership.netlify.com',
        githubLink: 'https://github.com/sorebear/thrive-leadership',
      },
      {
        name: 'Bolognese Banners',
        spinalName: 'bolognese-banners',
        image: bologneseBanners,
        githubLink: 'https://github.com/sorebear/bolognese-banners',
      },
      {
        name: 'Inventor Memory Match',
        spinalName: 'inventor-memory-match',
        image: memoryMatch,
        liveLink: 'http://memorymatch.sorenbaird.com',
        githubLink: 'https://github.com/sorebear/inventor_memory_match',
      },
    ],
  },
  {
    name: 'CMS Development',
    spinalName: 'cms-development',
    image: cmsDevelopment,
    rotate: -5,
    details: {
      text: [
        'I primarily build modern, fast, and secure CMS solutions with Gatsby.js, GraphQL and Netlify.',
        'I also build traditional CMS sites using Drupal and Wordpress.',
      ],
      icons: {
        row1: [
          { icon: gatsbyIcon, iconAlt: 'gatsby icon', iconKey: 'cms-gatsby' },
          { separator: 'and', iconKey: 'cms-sep-1' },
          { icon: graphQLIcon, iconAlt: 'graph-ql icon', iconKey: 'cms-graphql' },
          { separator: 'and', iconKey: 'cms-sep-2' },
          { icon: netlifyIcon, iconAlt: 'netlify icon', iconKey: 'cms-netlify' },
        ],
        row2: [
          { separator: 'or', iconKey: 'cms-sep-3' },
          { icon: drupalIcon, iconAlt: 'drupal icon', iconKey: 'cms-drupal' },
          { separator: 'or', iconKey: 'cms-sep-4' },
          { icon: wordpressIcon, iconAlt: 'wordpress icon', iconKey: 'cms-wordpress' },
        ],
      },
    },
    works: [],
  },
  {
    name: 'Mobile Development',
    spinalName: 'mobile-development',
    image: mobileDevelopment,
    rotate: 5,
    details: {
      text: [
        'I primarily build Android and iOS mobile applications using Dart, Flutter, and Firebase.',
        'I also build mobile applications using React Native.',
      ],
      icons: {
        row1: [
          { icon: dartIcon, iconAlt: 'dart icon', iconKey: 'mobile-dart' },
          { separator: 'and', iconKey: 'mobile-sep-1' },
          { icon: flutterIcon, iconAlt: 'flutter icon', iconKey: 'mobile-flutter' },
          { separator: 'and', iconKey: 'mobile-sep-2' },
          { icon: firebaseIcon, iconAlt: 'firebase icon', iconKey: 'mobile-firebase' },
        ],
        row2: [
          { separator: 'or', iconKey: 'mobile-sep-3' },
          { icon: reactIcon, iconAlt: 'react native icon', iconKey: 'mobile-react-native' },
        ],
      },
    },
    works: [

    ],
  },
];

export default skillsData;
