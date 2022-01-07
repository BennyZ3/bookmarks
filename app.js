// DEPENDENCIES
const express = require("express");
const bookmarksController = require("./controllers/bookmarksController");

// CONFIGURATION
const app = express();

// ROUTES

//Delegate everthing that starts with `/bookmarks` to the bookmarks controller
// .use takes in 2 arguments:
// - the sub-route for the controller to handle
// - the controller that should handle it
app.use("/bookmarks", bookmarksController);

//Home route
app.get("/", (req, res) => {
  res.send("Welcome to Bookmarks App");
});

// EXPORT
module.exports = app;
