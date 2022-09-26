const { Schema } = require("mongoose");

const commentsSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    profileLogo: {
      type: String,
    },
    Comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = commentsSchema;
