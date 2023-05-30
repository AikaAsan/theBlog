
# theBlog app

The blog app, where a user can sign up and publish their articles or read and comment articles of other users. 

As the Sign Up feature is not completed yet, a user can login with the following credentials to get access to functionality and articles

login: user
password: 123


## Demo

 https://cute-churros-fe1aac.netlify.app/


## Tech Stack

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

for backend imitation I used json-server.
## Main features and purpose of the project

The main purpose of the project was to set up entire infrastructure for a project, including testing environment, working with server/data etc. 
### features:  
- implemented custom webpack configuration: React, Typescript, scss, css modules, testing env (Jest, RTL, Storybook, loki). I decomposed the config for easier editing and updating further on.
- CI pipeline with tests and linting
-  implemented architechture according to FSD methodolody. [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial). Reusable modules with low coupling and high cohesion.
-   lazy loading of pages, components and reducers
-   reusable UI library with more than 15+ accessible and sematic components.
- implemented infinite scroll with data virtualization

## Installation and Setup Instructions 

Clone down this repository. You will need `node`and `npm` installed globally on your machine. 

`npm install` - install dependencies. 

`npm start` - start the project on localhost 3000.

`npm start:dev:server` - start the dev server.



## Scripts

-   `npm run start` - Start frontend on webpack dev server
-   `npm run start:dev:server` - start the dev server (backend)
-   `npm run build:prod` - Build the project in prod mode
-   `npm run build:dev` - Build the project in dev mode (not minimized)
-   `npm run lint:ts` - start Eslint on ts files
-   `npm run lint:ts:fix` - fix Eslint on ts files
-   `npm run lint:scss` - check style files with style linter
-   `npm run lint:scss:fix` - apply style linter to style files
## Internationalization 

The i18next library is used for FR and EN translations.
Files with translations are located in public/locales

Documetation i18next - [https://react.i18next.com/](https://react.i18next.com/)
## Tests


## Storybook
There are story cases for each component

documentation [Storybook](/docs/storybook.md)