# Getting Started with My Favorite Albums App

This project is created by using ReactJS, Typescript and Material UI. CSS style component is utilized to create react component and the app is created with keeping Responsiveness in mind.

The app sends a GET request to iTune API and query Coldplay's albums with Axios. Each album is then sorted by release date descending and display on the home page.

For error handling, the app will auto rerender for 3 times if there's something wrong with getting the response from iTune API and eventually redirect user to an error page with error message shown in browser Inspect console.

### To start the project

```sh
npm install && npm start
```

### To run test

```sh
npm test
```
