//Dependencies
const express = require("express");
const app = require("../app");

//Files
const bookmarksArray = require("../models/bookmarks");

// '.Router' creates a new controller that handles a sub-route.
// In this case, it will handle everything that starts with '/bookmarks'.
const bookmarks = express.Router();

// Routes
// '/booknarks' is already assumed because app.js has delegated
bookmarks.get("/", (request, response) => {
  // convert from js object to json
  // response.send(JSON.stringify(bookmarksArray));
  // express has a json feature
  console.log("Get request to /bookmarks");
  response.json(bookmarksArray);
});

// bookmarks.get('/demo', (request, response) => {
//     response.send('')
// })

module.exports = bookmarks;
