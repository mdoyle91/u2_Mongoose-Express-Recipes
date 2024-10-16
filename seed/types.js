//Parent of recipes
const db = require("../db");
const { Type } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const types = [
    { type_name: "Sushi", culture: "Japanese" },
    { type_name: "Tacos", culture: "Mexican" },
    { type_name: "Curry", culture: "Indian" },
    { type_name: "Pizza", culture: "Italian" },
    { type_name: "Baklava", culture: "Middle Eastern" },
    { type_name: "Kimchi", culture: "Korean" },
    { type_name: "Poutine", culture: "Canadian" },
    { type_name: "Paella", culture: "Spanish" },
    { type_name: "Pho", culture: "Vietnamese" },
    { type_name: "Bratwurst", culture: "German" },
  ];

  await Type.insertMany(types);
  console.log("Created Types");
};

const run = async () => {
  await main();
  db.close();
};

run();
