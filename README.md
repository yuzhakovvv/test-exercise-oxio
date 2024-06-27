# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### `npm install`

Installs the dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. Read more about `eject` in CRA documentation.

## Architectural Overview 

### Technical Stack

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Material UI](https://mui.com/material-ui/)
- [Chart.js](https://www.chartjs.org/) + [react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)

### Folder Structure

App routes are stored in `/src/routes` folder with corresponding components.

### Data Store

Data is stored in Context to make it available for all pages via a provider.

### Data Fetching

Context is responsible for fetching data from https://jsonplaceholder.typicode.com/.

`api/fetch` mock is created to simulate successful or failing response to a *create user* request.


