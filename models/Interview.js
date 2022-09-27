const mongoose = require("mongoose");
const roundSchema = require("../schema/roundSchema");

const experienceSchema = mongoose.Schema({
  company: {
    type: String,
  },
  role: {
    type: String,
  },
  companyLogo: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
  },
  date: {
    type: String,
  },
  onCampus: {
    type: Boolean,
  },
  location: {
    type: String,
  },
  ctc: {
    type: Number,
  },
  upVote: {
    type: Number,
    default: 0,
  },
  selected: {
    type: Boolean,
  },
  description: {
    platformUsed: String,
    subjectLearned: String,
    courses: String,
    aptitudePrep: String,
  },
  process: {
    roundOne: {
      type: roundSchema,
    },
    roundTwo: {
      type: roundSchema,
    },
    roundThree: {
      type: roundSchema,
    },
  },
  name: String,
  resumeLink: String,
  githubLink: String,
  linkedinLink: String,
  college: String,
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
