//Child of recipes

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const DirectionSchema = new Schema({
  recipe: { type: Schema.Types.ObjectId, ref: "RecipeSchema" }, //Check to ensure ref is correct
  directions: { type: String, required: true },
  materials: { type: String, required: true },
});

module.exports = DirectionSchema;
