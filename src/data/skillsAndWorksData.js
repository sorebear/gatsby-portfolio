import reactIcon from '../images/devicons/react.svg';
import meteorIcon from '../images/devicons/meteor.svg';
import mongoDBIcon from '../images/devicons/mongodb.svg';
import nodeJSIcon from '../images/devicons/nodejs.svg';
import graphQLIcon from '../images/devicons/graphql.svg';
import netlifyIcon from '../images/devicons/netlify.svg';
import androidIcon from '../images/devicons/android.svg';
import javaIcon from '../images/devicons/java.svg';
import drupalIcon from '../images/devicons/drupal.svg';
import wordpressIcon from '../images/devicons/wordpress.svg';
import phpIcon from '../images/devicons/php.svg';
import puzzleMe from '../images/work/puzzle-me.jpg';
import memoryMatch from '../images/work/memory-match.jpg';
import todoList from '../images/work/todo-list.jpg';
import cmsDevelopment from '../images/work/cms-development.svg';
import webDevelopment from '../images/work/web-development.svg';
import mobileDevelopment from '../images/work/mobile-development.svg';

const gatsbyIcon =
  'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg==';

const skillsData = [
  {
    name: 'CMS Development',
    spinalName: 'cms-development',
    image: cmsDevelopment,
    rotate: 5,
    details: {
      text: [
        'I primarily build modern, fast, and secure CMS solutions with Gatsby.js, GraphQL and Netlify.',
        'I also build traditional CMS sites using Wordpress and Drupal.',
      ],
      icons: [
        { icon: gatsbyIcon, iconAlt: 'gatsby icon', iconKey: 'cms-gatsby' },
        { separator: 'and', iconKey: 'cms-sep-1' },
        { icon: graphQLIcon, iconAlt: 'graph-ql icon', iconKey: 'cms-graphql' },
        { separator: 'and', iconKey: 'cms-sep-2' },
        { icon: netlifyIcon, iconAlt: 'netlify icon', iconKey: 'cms-netlify' },
        { separator: 'or', iconKey: 'cms-sep-3' },
        { icon: wordpressIcon, iconAlt: 'wordpress icon', iconKey: 'cms-wordpress' },
        { separator: 'or', iconKey: 'cms-sep-4' },
        { icon: drupalIcon, iconAlt: 'drupal icon', iconKey: 'cms-drupal' },
      ],
    },
    works: [],
  },
  {
    name: 'Web Development',
    spinalName: 'web-development',
    image: webDevelopment,
    rotate: -5,
    details: {
      text: [
        'I primarily build full-stack web applications using the Meteor Framework with React, Node.js and MongoDB.',
        'I also build a variety of other web applications using JavaScript and PHP.',
      ],
      icons: [
        { icon: meteorIcon, iconAlt: 'meteor-js icon', iconKey: 'web-meteor' },
        { separator: 'and', iconKey: 'web-sep-1' },
        { icon: reactIcon, iconAlt: 'react icon', iconKey: 'web-react' },
        { separator: 'and', iconKey: 'web-sep-2' },
        { icon: nodeJSIcon, iconAlt: 'node-js icon', iconKey: 'web-node' },
        { separator: 'and', iconKey: 'web-sep-3' },
        { icon: mongoDBIcon, iconAlt: 'mongo-db icon', iconKey: 'web-mongodb' },
        { separator: 'or', iconKey: 'web-sep-4' },
        { icon: phpIcon, iconAlt: 'php icon', iconKey: 'web-php' },
      ],
    },
    works: [
      {
        name: 'Todo List',
        spinalName: 'todo-list',
        image: todoList,
        liveLink: 'http://todo.sorenbaird.com',
        githubLink: 'https://github.com/sorebear/todo_list',
      },
      {
        name: 'Inventor Memory Match',
        spinalName: 'inventor-memory-match',
        image: memoryMatch,
        liveLink: 'http://sorenbaird.com/apps/memory_match',
        githubLink: 'https://github.com/sorebear/inventor_memory_match',
      },
    ],
  },
  {
    name: 'Mobile Development',
    spinalName: 'mobile-development',
    image: mobileDevelopment,
    rotate: 5,
    details: {
      text: [
        'I build Android and iOS mobile applications using React Native and Meteor with Cordova.',
        'I also build native Android applications using Java and Android Studio.',
      ],
      icons: [
        { icon: reactIcon, iconAlt: 'react icon', iconKey: 'mobile-reactnative' },
        { separator: 'or', iconKey: 'mobile-sep-1' },
        { icon: meteorIcon, iconAlt: 'meteor icon', iconKey: 'mobile-meteor' },
        { separator: 'or', iconKey: 'mobile-sep-2' },
        { icon: androidIcon, iconAlt: 'android icon', iconKey: 'mobile-android' },
        { separator: 'and', iconKey: 'mobile-sep-3' },
        { icon: javaIcon, iconAlt: 'java icon', iconKey: 'mobile-java' },
      ],
    },
    works: [
      {
        name: 'Puzzle Me',
        spinalName: 'puzzle-me',
        image: puzzleMe,
        liveLink: 'http://puzzleme.sorenbaird.com',
        githubLink: 'https://github.com/sorebear/puzzle_me',
      },
    ],
  },
];

export default skillsData;
