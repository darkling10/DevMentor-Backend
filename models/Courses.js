const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ObjectId } = mongoose.Schema.Types;
const commentsSchema = require("../schema/commentsSchema");

const CoursesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["Web", "Android", "AI", "Data", "Language"],
      default: null,
      required: true,
    },
    linkToCourse: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      enum: ["cplusplus", "java", "javascript", "python", "go"],
      default: null,
      required: true,
    },
    userType: {
      type: String,
      enum: ["admin", "user"],
      default: "admin",
    },
    platform: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    pros: {
      type: [String],
      required: true,
    },
    cons: {
      type: [String],
      required: true,
    },
    likes: {
      type: [String],
      default:null,
    },
    disLikes: {
      type: [String],
      default:null,
    },
    Comments: {
      type: [commentsSchema],
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Courses = mongoose.model("Courses", CoursesSchema);
