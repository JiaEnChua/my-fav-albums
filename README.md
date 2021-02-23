# Getting Started with My Favorite Albums App

This project is created by using ReactJS, Typescript and Material UI. CSS style component and basic app responsiveness are implemented.

The app sends a GET request to iTune API and queries for Coldplay's albums data with Axios. Each album is then sorted by release date descending and displayed on the home page.

For error handling, the app will auto re-render for 3 times if there's something wrong with fetching the API. It will eventually redirects user to an error page with error message shown in the browser Inspect console.

### To start the project

```sh
npm install && npm start
```

### To run test

```sh
npm test
```
