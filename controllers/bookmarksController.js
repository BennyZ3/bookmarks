//Dependencies
const { response } = require("express");
const express = require("express");
const res = require("express/lib/response");
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

// OUR TASK
// Use `request.params.index` to send back the bookmark in our bookmarksArray at that index.
// TIP: you should send it back as JSON
// BONUS: send a 404 *if* the index doesn't exist in our bookmarksArray
bookmarks.get("/:index", (req, res) => {
  bookmarksArray[req.params.index]
    ? res.json(bookmarksArray[req.params.index])
    : res.status(404).json({ error: "Page not found" });
});

// Make a new bookmark
// POST /bookmarks
// A request to POST /bookmarks will need to include what to add
// POST to /bookmarks... but post WHAT? post THIS to bookmarks
bookmarks.post("/", (request, response) => {
  console.log("POST to /bookmarks");
  bookmarksArray.push(request.body);
  // response.send(bookmarksArray)
  response.status(201).json(bookmarksArray);
});

// Deleting
bookmarks.delete("/:index", (request, response) => {
  console.log(`deleted item at index ${request.params.index}`);
  bookmarksArray[request.params.index]
    ? response
        .status(200)
        .json(bookmarksArray.splice(request.params.index, 1)[0])
    : response.status(404).json({ error: "index not found" });
});

// Updating
bookmarks.put("/:index", (request, response) => {
  console.log(`Updated index ${request.params.index}`);
  if (Object.keys(request.body).length === 0) {
    response.status(404).json({ error: "nothing to replace with" });
  } else {
    if (bookmarksArray[request.params.index]) {
      bookmarksArray[request.params.index] = request.body;
      response.status(200).json(bookmarksArray);
    } else {
      response.status(404).json({ error: "index not found" });
    }
  }

  //   bookmarksArray.splice(request.params.index, 1, request.body);
});
//TASK:
// -get new bookmark (on `request.body`) into our array
//send abck whole bookmarks array to JSON - it should include our new bookmark
//BONUS: send 201('created') status code

module.exports = bookmarks;
