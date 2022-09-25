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
    const interviewPost = new Experience({
      company: company,
      role: role,
      companyLogo: companyLogo,
      date: date,
      onCampus: onCampus,
      location: location,
      ctc: ctc,
      upVote: upVote,
      selected: selected,
      description: description,
      process,
    });

    const newInterview = await interviewPost.save();
    return res.status(200).json({ message: "Created successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ error: err });
  }
};

module.exports = {
  postExperience,
};
