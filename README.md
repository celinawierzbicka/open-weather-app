# Project Title

Weather App with 5 days weather forecast implemented with use of OpemWeatherMap API (https://openweathermap.org/api)

## Demo

The app is deployed via Netlify (https://www.netlify.com/) and can be accessed here: https://goofy-wiles-53df12.netlify.app/
* NOTE: api.openweathermap.org free version is not available over HTTPS. To avoid 'Mixed content' error in your browser add netlify to exceptions. For example in Chrome go to Settings/Site Settings/Insecure Content/Allow and type in [*.]netlify.app

![](demo.gif)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Clone

Clone this repo to your local machine using https://github.com/celinawierzbicka/open-weather-app.git

### Setup

Install all npm packages

```
$ npm install
```

Get your free API Key from OpemWeatherMap (https://openweathermap.org/api) and set it as an environment variable named REACT_APP_OPEN_WEATHER_API_KEY

## How To Run

```
$ npm run start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

```
$ npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The app is ready to be deployed!

## Built With

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Used Libraries:
* [Redux](https://redux.js.org/) - State Management Library
* [Material UI](https://material-ui.com/) - Library with Pre-Designed Components for React
* [Axios](https://github.com/axios/axios) - Fetching external data - Promise based HTTP client for the browser and node.js

## Authors

* **Celina Wierzbicka** (https://github.com/celinawierzbicka)