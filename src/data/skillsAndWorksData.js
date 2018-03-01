const gatsbyIcon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJFYmVuZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMTIwMCAxMjAwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjAwIDEyMDAiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM2Mzl9PC9zdHlsZT48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNjAwLDBDMjY4LjYsMCwwLDI2OC42LDAsNjAwczI2OC42LDYwMCw2MDAsNjAwczYwMC0yNjguNiw2MDAtNjAwUzkzMS40LDAsNjAwLDB6IE0yNjYuNiw5MzMuMwlDMTc2LjEsODQyLjgsMTMxLDcyNC42LDEyOS42LDYwNkw1OTQsMTA3MC40QzQ3NS40LDEwNjksMzU3LjIsMTAyMy45LDI2Ni42LDkzMy4zeiBNNzA0LjMsMTA1OS40TDE0MC42LDQ5NS43CWM0Ny41LTIxMC4xLDIzNS0zNjcuMSw0NTkuNC0zNjcuMWMxNTYuOSwwLDI5NS41LDc3LDM4MS4yLDE5NC45TDkxNS42LDM3OUM4NDUuOCwyNzkuNSw3MzAuNSwyMTQuMyw2MDAsMjE0LjMJYy0xNjcuNywwLTMxMC4zLDEwNy43LTM2My4zLDI1Ny41bDQ5MS42LDQ5MS42YzEyMy40LTQzLjcsMjE4LTE0OC4yLDI0Ny42LTI3Ny42SDc3MS40VjYwMGgzMDAJQzEwNzEuNCw4MjQuNSw5MTQuNCwxMDExLjksNzA0LjMsMTA1OS40eiIvPjwvc3ZnPg=='
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

import envivent from '../images/work/envivent.svg';
import puzzleMe from '../images/work/puzzle-me.jpg';
import memoryMatch from '../images/work/memory-match.jpg';
import todoList from '../images/work/todo-list.jpg';

const skillsData = [
   {
      name: 'CMS Development',
      icon: 'icon-basic-webpage-img-txt',
      rotate: 5,
      details: {
         text: [
            'I primarily build modern, fast, and secure CMS solutions with Gatsby.js, GraphQL and Netlify.',
            'I also build traditional CMS sites using Wordpress and Drupal.'
         ],
         icons: [
            { icon: gatsbyIcon },
            { separator: 'and' },
            { icon: graphQLIcon },
            { separator: 'and' },
            { icon: netlifyIcon },
            { separator: 'or' },
            { icon: wordpressIcon },
            { separator: 'or' },
            { icon: drupalIcon }
         ]
      },
      works: [
         {
            name: 'Todo List',
            image: todoList,
            liveLink: 'http://todo.sorenbaird.com',
            githubLink: 'https://github.com/sorebear/todo_list'
         },
      ]
   },
   {
      name: 'Web Development',
      icon: 'icon-basic-laptop',
      rotate: -5,
      details: {
         text: [
            'I primarily build full-stack web applications using the Meteor Framework with React, Node.js and MongoDB.',
            'I also build a variety of other web applications using JavaScript and PHP.'
         ],
         icons: [
            { icon: meteorIcon },
            { separator: 'and' },
            { icon: reactIcon },
            { separator: 'and' },
            { icon: nodeJSIcon },
            { separator: 'and' },
            { icon: mongoDBIcon },
            { separator: 'or' },
            { icon: phpIcon }
         ]
      },
      works: [
         {
            name: 'Inventor Memory Match',
            image: memoryMatch,
            liveLink: 'http://sorenbaird.com/apps/memory_match',
            githubLink: 'https://github.com/sorebear/inventor_memory_match'
         }
      ]
   },
   {
      name: 'Mobile Development',
      icon: 'icon-basic-smartphone',
      rotate: 5,
      details: {
         text: [
            'I build Android and iOS mobile applications using React Native and Meteor with Cordova.',
            'I also build native Android applications using Java and Android Studio.'
         ],
         icons: [
            { icon: reactIcon },
            { separator: 'or' },
            { icon: meteorIcon },
            { separator: 'or' },
            { icon: androidIcon },
            { separator: 'and' },
            { icon: javaIcon }
         ]
      },
      works: [
         {
            name: 'Puzzle Me',
            image: puzzleMe,
            liveLink: 'http://puzzleme.sorenbaird.com',
            githubLink: 'https://github.com/sorebear/puzzle_me'
         }
      ]
   }
];


export default skillsData;