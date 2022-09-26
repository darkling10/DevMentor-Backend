const express = require("express");
const User = require("../models/User");
const { check, body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const userController = require("../controllers/userController");
const router = express.Router();
const authUser = require("../middleware/authUser");
const interviewController = require("../controllers/interviewController");
const courseController = require("../controllers/courseController");
const Courses = require("../models/Courses");
const Experience = require("../models/Interview");
// @route  POST/users
// @desc  Register user
// @access public

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "please include valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.userRegistration
);

// @route  POST/users/login
// @desc  Login user
// @access public
router.post(
  "/login",
  [
    check("email", "please include valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  userController.userLogin
);

// @route  POST/users/interview
// @desc  Post interview
// @access public
router.post(
  "/interview",
  ([
    check("company", "please include valid company").not().isEmpty(),
    check("role", "please include valid role").not().isEmpty(),
    check("date", "please include valid on campus").not().isEmpty(),
    check("location", "please include valid on campus").not().isEmpty(),
    check("ctc", "please include valid on campus").not().isEmpty(),
    check("selected", "please include valid on campus").not().isEmpty(),
    check("description", "please include valid on campus").not().isEmpty(),
  ],
  authUser),
  interviewController.postExperience
);

router.get("/course", courseController.getCourse);
router.get("/coursebylikes", courseController.getCoursebyLikes);

router.get("/coursebyid", async (req, res) => {
  const { id } = req.query;
  const getCourse = await Courses.findById(id);

  if (getCourse) {
    return res.json(getCourse);
  } else {
    return res.status(404);
  }
});

router.get("/interview", async (req, res) => {
  try {
    const courseData = await Experience.find({});
    return res.status(200).json({ data: courseData });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.get("/interviewbyID", async (req, res) => {
  const { id } = req.query;
  try {
    const courseData = await Experience.findById(id);
    return res.status(200).json({ data: courseData });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

router.post("/coursebylang", userController.getCoursebyLang);

router.patch("/course", authUser, userController.patchComments);

module.exports = router;
