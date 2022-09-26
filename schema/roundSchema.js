const { Schema } = require("mongoose");

const roundSchema = Schema({
  description: String,
  questionAsked: [String],
  difficultyLevel: String,
  duration: String,
});

module.exports = roundSchema;
