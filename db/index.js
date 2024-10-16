const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/recipesDatabase")
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;

//All of my seed data was populated via ChatGPT after I fed it the schemas and what I wanted my constants to look like on the seed files of my children.
