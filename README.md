# the-Blog
----
## Reflection 
The Blog app. 

Features: 
- custom webpack configuration: React, Typescript, scss, css modules, testing env (Jest, RTL, Storybook, loki). I decomposed the config for easier editing and updating further on. 
- implemented architechture according to FSD methodolody. [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial). Reusable modules with low coupling and high cohesion. 
- lazy loading of pages, components and reducers
- reusable UI library with more than 15 accessible and sematic components.
- internationalization 


Technologies used in this project: 
- Typescript  
- React, React Router
- Webpack
- Redux Toolkit
- Storybook
- Jest with React Testing Library
- Github Actions
- i18Next 

## Architecture of the project

The project is created according to the Feature sliced design methodology 

link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)
## Installation and Setup Instructions
```
Clone down this repository. You will need `node`and `npm` installed globally on your machine
npm install - install dependencies
npm start - start the project on localhost 3000
npm start:dev:server - start the dev server
```

----

## Scripts

- `npm run start` - Start frontend on webpack dev server
- `npm run start:dev:server` - start the dev server (backend)
- `npm run build:prod` - Build the project in prod mode 
- `npm run build:dev` - Build the project in dev mode (not minimized)
- `npm run lint:ts` - start Eslint on ts files
- `npm run lint:ts:fix` - fix Eslint on ts files
- `npm run lint:scss` - check style files with style linter
- `npm run lint:scss:fix` - apply style linter to style files
----

## Internationalization

The i18next library is used for FR and EN translations. 
Files with translations are located in public/locales

Documetation i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Test
Types of test are used in the project:

1) unit tests, Jest - `npm run test:unit`
2) unit test for components with React testing library -`npm run test:unit`

Test documentaion - (/docs/tests.md)

----

## Linting

EsLint is used for checking typescript code and Styleint is used for checking style files

----
## Storybook

There are story cases for each component

documentation [Storybook](/docs/storybook.md)

----

## Configuration

1. Webpack - ./config/build

All the configuration is in /config
- /config/build -  webpack config
- /config/jest - config of testing env 
----
