//Parent of recipes

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const TypeSchema = new Schema(
  {
    type_name: { type: String, required: true },
    culture: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = TypeSchema;
