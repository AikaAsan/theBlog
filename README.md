# the-Blog
----
## Architecture of the project

The project is createdaccording to the Feature sliced design methodology 

link to the documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)
## Getting Started

### Dependencies
```
npm install - install dependencies
npm run start:dev или npm run start:dev:vite - start the project in dev mode
```

----

## Scripts

- `npm run start` - Start frontend on webpack dev server
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
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