const User = require("../models/User");
const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const { JsonWebTokenError, decode } = require("jsonwebtoken");
const Experience = require("../models/Interview");

const postExperience = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    company,
    role,
    companyLogo,
    date,
    onCampus,
    location,
    ctc,
    upVote,
    selected,
    description,
    process,
  } = req.body;

  try {
    const interviewPost = await Experience.create({
      company: company,
      role: role,
      companyLogo: companyLogo,
      date: date,
      onCampus: onCampus,
      location: location,
      ctc: ctc,
      selected: selected,
      description: description,
      process,
    });

    return res.status(200).json({ message: "Created successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ error: err });
  }
};

const getByCompany = async (req, res) => {
  const { filterBy } = req.body;

  console.log(filterBy);

  try {
    const interviewData = await Experience.find(filterBy);
    if (interviewData) {
      return res.status(200).json({ data: interviewData });
    } else {
      return res.status(404).json({ message: "Interview Not found" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  postExperience,
  getByCompany,
};
