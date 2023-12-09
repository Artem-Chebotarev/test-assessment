## Start of Frontend part of the project

```
npm install - install dependencies
npm run start - start the frontend project in dev mode
```

----

## Start of Backend part of the project

### 1. Install NodeJS

### 2. Go to server folder

```
npm install
node app.js
```

----

## Project architecture

The project is written in accordance with the Feature Sliced Design methodology

Documentation link - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Linting

The project uses eslint to check typescript code and stylelint to check files with styles.

----

## Project configuration

For development, the project contains 1 config:
1. Webpack - ./config/build

The bundle is adapted to the main features of the application.

The entire configuration is stored in /config
- /config/build - config for webpack
