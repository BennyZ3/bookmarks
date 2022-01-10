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

// Start (*) matches anything we haven't matched yet
app.get("*", (request, response) => {
  //   response.json({ error: "Page not found" });
  response.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
