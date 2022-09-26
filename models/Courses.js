const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
      enum:["Web","Android","AI","Data","Language"],
      default:null,
      required: true,
    },
    linkToCourse: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      enum:["C++","Java","JavaScript","Python","Go"],
      default:null,
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
      type: Number,
      required: true,
    },
    disLikes: {
      type: Number,
      required: true,
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
