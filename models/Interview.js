const mongoose = require("mongoose");
const roundSchema = require("../schema/roundSchema");

const experienceSchema = mongoose.Schema({
  company: {
    type: String,
    enum: [
      "Microsoft",
      "Amazon",
      "Google",
      "Apple",
      "Adobe",
      "Attlassin",
      "Uber",
      "American Express",
      "Barclays",
    ],
    default: null,
  },
  role: {
    type: String,
    enum: [
      "SDE Intern",
      "SDE-1",
      "SDE-2",
      "FrontEnd Developer",
      "BackEnd Developer",
      "FullStack Developer",
      "DevOps Engineer",
      "Other",
    ],
    default: "SDE Intern",
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
    subjectLearned: [String],
    courses: String,
    aptitudePrep: String,
  },
  process: {
    type: String,
  },
  name: String,
  resumeLink: String,
  githubLink: String,
  linkedinLink: String,
  college: String,
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
