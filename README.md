# the-Blog
----
## Reflection 
This is an ongoing project to practice and learn new tools and practicies.

Technologies used in this project: 
- 	
- https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white, https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white, https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB, https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB, https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white, https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white, https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white, https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white, https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white, https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB, https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB, https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white, https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white, https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white
- 
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

Test documentaion - [документация тестирование](/docs/tests.md)

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

Webpack is adapted to the needs of the project

All the configuration is in /config
- /config/build -  webpack config
- /config/jest - config of testing env 
----