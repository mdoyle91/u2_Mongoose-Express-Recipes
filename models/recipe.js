//Parent of directions, child of types

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const RecipeSchema = new Schema({
  type: { type: Schema.Types.ObjectId, ref: "TypeSchema" }, //Double check the ref is correct
  recipe_name: { type: String, required: true },
  ingredients: { type: String, required: true },
  is_vegetarian: { type: Boolean, required: true },
  is_vegan: { type: Boolean, required: true },
  prep_time: { type: Number, required: true },
});

module.exports = RecipeSchema;
